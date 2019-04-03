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
            requestedPlants = req.param('plants').slice(1,-1),
            valuesToEscape = [];
        let sql = `SELECT *
            FROM plants
            WHERE id IN (`+requestedPlants+`) AND distance>=1
            ORDER BY distance DESC
            `;
        // EXECUTE
        try {
            result = await sails.sendNativeQuery(sql, valuesToEscape);
            // result = await Plants.find();
        } catch (err) {
            // Error Management
            switch (err.name) {
                case 'UsageError':
                    return res.badRequest(err);
                default:
                    return res.serverError(err, 'Failed to gather data');
            }
        }
        // BEGIN OPTIMIZATION

        // RETURN RESPONSE
        var selectedPlants = result.rows;
        let width = req.param('width'),
            height = req.param('height'),
            totalArea = width * height,
            binsAreas = totalArea / selectedPlants.length,
            plot = Object(),
            x = 0,
            y = 0,
            bed = 0;
        plot.ground = new Array();
        plot.plants = new Array();
        
        // Ancho de la hilera
        let hileraWidth = Math.pow(selectedPlants[0].distance,2);
        
        // Go through plant instances, generating hileras and nodes
        for (let i=0; i<selectedPlants.length; i++) {
            plantArea = Math.pow(selectedPlants[i].distance,2)
            selectedPlants[i].instances = Math.floor(binsAreas / plantArea );
            // First Y indentation
            for (let j=0; j<selectedPlants[i].instances; j++) {
                // Create node
                let node = Object();
                // Node properties
                node.width = selectedPlants[i].distance;
                node.height = selectedPlants[i].distance;
                node.meta = selectedPlants[i];    
                // Node placement
                if (x + selectedPlants[i].distance < height)
                    x = x + selectedPlants[i].distance;
                else {
                    x = 0;
                    if (y + selectedPlants[i].distance < width)
                        y = y + selectedPlants[i].distance;
                }
                node.x = x;
                node.y = y;
                // Add tree node to plotter
                node.type = 'tree';
                plot.plants.push(node);
            }
        }
        return res.ok(plot);
    }
};

