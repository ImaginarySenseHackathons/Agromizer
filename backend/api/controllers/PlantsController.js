/**
 * PlantsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    // GET /
    // plantsPage: async function(req, res) {
    // }

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
        // if (result !== undefined)
            // return res.ok(result);
        plants = result;
        return res.view('pages/index', plants);
    },

    // POST /optimizez
    optimize: async function(req, res) {
        // VALIDATE
        if (!req.param('height')) return res.badRequest('Please specify \'height\'');
        if (!req.param('width')) return res.badRequest('Please specify \'width\'');
        if (!req.param('plants')) return res.badRequest('Please specify \'plants\'');
        if (!req.param('scale')) return res.badRequest('Please specify \'scale\' in pixels per meter');
        // VARIABLES
        let result,
            requestedPlants,
            valuesToEscape = [];
        // if (isNaN(req.param('plants')))
            // requestedPlants = req.param('plants').slice(1,-1);
        // else 
        requestedPlants = req.param('plants');
        console.log(requestedPlants);
        let sql = `SELECT *
            FROM plants
            `+(isNaN(requestedPlants)?`WHERE id IN (`+requestedPlants+`)`:`WHERE id=`+requestedPlants)
            +` AND distance>=1
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
        const CMtoM = Number(req.param('scale'));
        let largePlants = result.rows,
            plotWidth = Number(req.param('width'))*CMtoM,
            plotHeight = Number(req.param('height'))*CMtoM,
            totalArea = plotWidth * plotHeight,
            binsAreas = totalArea / largePlants.length,
            plot = Object(),
            x = 0,
            y = 0,
            bed = 0,
            hileraWidth;
        plot.ground = new Array();
        plot.plants = new Array();
        
        // Ancho de la hilera
        if (largePlants[0] !== undefined) {
            const firstPlant = largePlants[0];
            x = firstPlant.distance*CMtoM/2;
            y = firstPlant.distance*CMtoM/2;
            hileraWidth = Math.pow(largePlants[0].distance*CMtoM, 2);
        }
        // Go through plant instances, generating hileras and nodes
        for (let i=0; i<largePlants.length; i++) {
            plantArea = Math.pow(largePlants[i].distance*CMtoM, 2)
            currentPlantHue = i/largePlants.length*360;
            largePlants[i].instances = Math.floor(binsAreas / plantArea);
            // First Y indentation
            for (let j=0; j<=largePlants[i].instances; j++) {
                // Create node
                let node = Object();
                // Node properties
                width = largePlants[i].distance*CMtoM;
                height = largePlants[i].distance*CMtoM;
                node.trunkDiameter = largePlants[i].trunk_diameter;
                if (node.trunkDiameter == 0)
                node.trunkDiameter = largePlants[i].distance*CMtoM*(1/6/4);  // Tree trunk diameter tends to be 1/6 of it's recomended distance. Small plants are a fration of that.
                node.hue = currentPlantHue;
                // Node placement
                if (x + height < plotHeight)
                    x = x + height;
                else {
                    x = 0;
                    hileraWidth = largePlants[i].distance*CMtoM * 2;
                    if (y + /*width + */hileraWidth < plotWidth)
                        y = y + /*width + */hileraWidth;
                    else
                        console.log(i+"/"+largePlants.length+" | "+j+"/"+largePlants[i].instances);
                        break;
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

