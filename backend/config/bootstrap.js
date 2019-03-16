/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```
  await Plants.createEach([
    {
      scientific_name: 'Plantesihon',
      common_name: 'Planta',
      type: 'leguminosa',
      nitrogen: true,
      potasium: true,
      phosphorus: true,
      ph: 0,
      distance: 5,
      harvest_time_min: 0,
      harvest_time_max: 0,
    },
    {
      scientific_name: 'Plantesihon 2',
      common_name: 'Planta 2',
      type: 'citrico',
      nitrogen: true,
      potasium: true,
      phosphorus: true,
      ph: 6,
      distance: 10,
      harvest_time_min: 0,
      harvest_time_max: 0,
    },
    {
      scientific_name: 'Plantesihon 3',
      common_name: 'Planta 3',
      type: 'citrico',
      nitrogen: true,
      potasium: true,
      phosphorus: true,
      ph: 6,
      distance: 10,
      harvest_time_min: 0,
      harvest_time_max: 0,
    },
    
  ]);

};
