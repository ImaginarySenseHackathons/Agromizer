/**
 * PlantsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    // GET /plants
    plants: async function(req, res) {
        // VARIABLES
        let result;
        // EXECUTE
        try {
        // Attempt to find all drivers.
        result = await Plants.find();
        } catch (err) {
            // Error Management
            switch (err.name) {
                case 'UsageError':
                return res.badRequest(err);
                default:
                return res.serverError(err, 'Failed to get plants');
            }
        }
        // OUTPUT
        if (result !== undefined)
        return res.ok(result);
    },

    // POST /optimize
    optimize: async function(req, res) {
        // VALIDATE
        if (!req.param('height')) return res.badRequest('Please specify \'height\'');
        if (!req.param('width')) return res.badRequest('Please specify \'width\'');
        if (!req.param('plants')) return res.badRequest('Please specify \'plants\'');
        // VARIABLES
        let result,
            plants = req.param('plants').slice(1,-1),
            valuesToEscape = [];
        let sql = `SELECT *
            FROM plants
            WHERE id IN (`+plants+`) AND distance>=1
            ORDER BY distance DESC
            `;
        // EXECUTE
        try {
            // Attempt to find all drivers.
            result = await sails.sendNativeQuery(sql, valuesToEscape);
            // result = await Plants.find();
        } catch (err) {
            // Error Management
            switch (err.name) {
                case 'UsageError':
                    return res.badRequest(err);
                default:
                    return res.serverError(err, 'Failed to get all the drivers');
            }
        }
        // BEGIN OPTIMIZATION

        // RETURN RESPONSE
        plants = result.rows;
        let width = req.param('width'),
            height = req.param('height'),
            totalArea = width * height,
            binsAreas = totalArea / plants.length,
            plot = Array(),
            x = 0,
            y = 0,
            bed = 0;
        // Ancho de la hilera
        let hileraWidth = Math.pow(plants[0].distance,2);
        // Go through plant instances, generating hileras and nodes
        for (let i=0; i<plants.length; i++) {
            plantArea = Math.pow(plants[i].distance,2)
            plants[i].instances = Math.floor(binsAreas / plantArea );
            // First Y indentation
            for (let j=0; j<plants[i].instances; j++) {
                // Create node
                let node = Object();
                // Node properties
                node.width = plants[i].distance;
                node.height = plants[i].distance;
                node.plant = plants[i];    
                // Node placement
                if (x + plants[i].distance < height)
                    x = x + plants[i].distance;
                else
                    x = 0;
                node.x = x;
                if (y + plants[i].distance < width)
                    y = y + plants[i].distance;
                node.y = y;
                // Add tree node to plotter
                node.type = 'tree';
                plot.push(node);
            }
        }
        return res.ok(plot);
    }
};

