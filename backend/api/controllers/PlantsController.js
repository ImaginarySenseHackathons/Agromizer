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
            WHERE id IN (`+plants+`)
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
        return res.ok(result);
    }
};

