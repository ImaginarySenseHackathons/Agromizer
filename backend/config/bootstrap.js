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
  if (await Plants.count() > 0)
    return;

  await Plants.createEach([
    {
      "common_name": "Sandía",
      "scientific_name": "Citrullus lanatus",
      "harvest_time_min": 90,
      "harvest_time_max": 150,
      "ph_min": 5.8,
      "ph_max": 7.2,
      "distance": 1.5,
      "nitrogen": 0,
      "aromatic": 0,
      "type": "Frutal",
    },
    {
      "common_name": "Berenjena",
      "scientific_name": "Solanum melongena",
      "harvest_time_min": 95,
      "ph_min": 5.5,
      "ph_max": 7,
      "distance": 0.45,
      "nitrogen": 0,
      "aromatic": 0,
      "type": "Hortaliza",
    },
    {
      "common_name": "Melón",
      "scientific_name": "Cucumis melo",
      "harvest_time_min": 85,
      "ph_min": 5.8,
      "ph_max": 7.2,
      "distance": 1.2,
      "nitrogen": 0,
      "aromatic": 0,
      "type": "Frutal",
    },
    {
      "common_name": "Tomate",
      "scientific_name": "Solanum lycopersicum",
      "harvest_time_min": 100,
      "harvest_time_max": 150,
      "ph_min": 5.3,
      "ph_max": 6.8,
      "distance": 0.06,
      "nitrogen": 0,
      "aromatic": 0,
      "type": "Frutal",
    },
    {
      "common_name": "Zanahoria",
      "scientific_name": "Daucos corota",
      "harvest_time_min": 120,
      "harvest_time_max": 150,
      "ph_min": 6.5,
      "ph_max": 6.5,
      "distance": 0.08,
      "nitrogen": 0,
      "aromatic": 1,
      "type": "Hortaliza",
    },
    {
      "common_name": "Ahuyama",
      "scientific_name": "Cucurbita pepo",
      "harvest_time_min": 100,
      "harvest_time_max": 130,
      "ph_min": 4.5,
      "ph_max": 7.5,
      "nitrogen": 0,
      "aromatic": 0,
      "type": "Hortaliza",
    },
    {
      "common_name": "Pepino",
      "scientific_name": "Cucumis sativa",
      "harvest_time_min": 45,
      "harvest_time_max": 50,
      "ph_min": 5.6,
      "ph_max": 6.8,
      "distance": 1.2,
      "nitrogen": 0,
      "aromatic": 0,
      "type": "Hortaliza",
    },
    {
      "common_name": "Pimentón",
      "scientific_name": "Capsicum annuum",
      "harvest_time_min": 120,
      "harvest_time_max": 180,
      "ph_min": 5.8,
      "ph_max": 7,
      "distance": 0.4,
      "nitrogen": 0,
      "aromatic": 0,
      "type": "Hortaliza",
    },
    {
      "common_name": "Remolacha",
      "scientific_name": "Beta vulgaris",
      "harvest_time_min": 60,
      "harvest_time_max": 65,
      "ph_min": 5.5,
      "ph_max": 6.5,
      "distance": 0.08,
      "nitrogen": 0,
      "aromatic": 0,
      "type": "Hortaliza",
    },
    {
      "common_name": "Apio",
      "scientific_name": "Apium graveolens",
      "harvest_time_min": 90,
      "harvest_time_max": 90,
      "ph_min": 5.8,
      "ph_max": 7.2,
      "distance": 0.3,
      "nitrogen": 0,
      "aromatic": 1,
      "type": "Hortaliza",
    },
    {
      "common_name": "Arveja",
      "scientific_name": "Pisum sativum",
      "harvest_time_min": 60,
      "harvest_time_max": 110,
      "ph_min": 5.5,
      "ph_max": 6.8,
      "nitrogen": 1,
      "aromatic": 0,
      "type": "Hortaliza",
    },
    {
      "common_name": "Brócoli",
      "scientific_name": "Brassica oleracea",
      "harvest_time_min": 60,
      "harvest_time_max": 80,
      "ph_min": 6,
      "ph_max": 7.3,
      "distance": 0.45,
      "nitrogen": 0,
      "aromatic": 0,
      "type": "Hortaliza",
    },
    {
      "common_name": "Lechuga",
      "scientific_name": "Lactuca sativa",
      "harvest_time_min": 60,
      "harvest_time_max": 65,
      "ph_min": 6.4,
      "ph_max": 7.6,
      "distance": 0.25,
      "nitrogen": 0,
      "aromatic": 0,
      "type": "Hortaliza",
    },
    {
      "common_name": "Repollo",
      "scientific_name": "Brassica oleracea capitata",
      "harvest_time_min": 100,
      "harvest_time_max": 120,
      "ph_min": 6,
      "ph_max": 7.2,
      "distance": 0.45,
      "nitrogen": 0,
      "aromatic": 0,
      "type": "Hortaliza",
    },
    {
      "common_name": "Frijol",
      "scientific_name": "Phaseolus vulgaris",
      "harvest_time_min": 70,
      "harvest_time_max": 120,
      "ph_min": 5.5,
      "ph_max": 6.5,
      "distance": 0.4,
      "nitrogen": 1,
      "aromatic": 0,
      "type": "Hortaliza",
    },
    {
      "common_name": "Aguacate",
      "scientific_name": "Persea americana",
      "harvest_time_min": 300,
      "harvest_time_max": 548,
      "ph_min": 5.5,
      "ph_max": 7,
      "distance": 8,
      "nitrogen": 0,
      "aromatic": 0,
      "trunk": "Árbol",
      "type": "Frutal",
      "diameter": 40,
    },
    {
      "common_name": "Melocotón",
      "scientific_name": "Prunus persica",
      "ph_min": 6,
      "ph_max": 6.5,
      "distance": 6,
      "nitrogen": 0,
      "aromatic": 0,
      "trunk": "Árbol",
      "type": "Frutal",
    },
    {
      "common_name": "Guanábana",
      "scientific_name": "Annona muricata",
      "ph_min": 5.5,
      "ph_max": 6.4,
      "distance": 7,
      "nitrogen": 0,
      "aromatic": 0,
      "trunk": "Árbol",
      "type": "Frutal",
    },
    {
      "common_name": "Mango",
      "scientific_name": "Mangifera indica",
      "ph_min": 6,
      "ph_max": 7.9,
      "distance": 10,
      "nitrogen": 0,
      "aromatic": 0,
      "trunk": "Árbol",
      "type": "Frutal",
      "diameter": 90,
    },
    {
      "common_name": "Papaya",
      "scientific_name": "Carica papaya",
      "ph_min": 5,
      "ph_max": 6.5,
      "distance": 3,
      "nitrogen": 0,
      "aromatic": 0,
      "trunk": "Árbol",
      "type": "Frutal",
      "diameter": 30,
    },
    {
      "common_name": "Pera",
      "scientific_name": "Pyrus communis",
      "ph_min": 6.5,
      "ph_max": 7.5,
      "distance": 6,
      "nitrogen": 0,
      "aromatic": 0,
      "trunk": "Árbol",
      "type": "Frutal",
      "diameter": 30,
    },
    {
      "common_name": "Tamarindo",
      "scientific_name": "Tamarindus indica",
      "ph_min": 6.5,
      "ph_max": 7.5,
      "distance": 7,
      "nitrogen": 1,
      "aromatic": 0,
      "trunk": "Árbol",
      "type": "Frutal",
      "diameter": 100,
    },
    {
      "common_name": "Toronja",
      "scientific_name": "Citrus × paradisi",
      "ph_min": 6.1,
      "ph_max": 7,
      "distance": 7,
      "nitrogen": 0,
      "aromatic": 0,
      "trunk": "Árbol",
      "type": "Frutal",
      "diameter": 15,
    },
    {
      "common_name": "Naranja dulce",
      "scientific_name": "Citrus × sinensis",
      "ph_min": 6,
      "ph_max": 6.5,
      "distance": 6,
      "nitrogen": 0,
      "aromatic": 0,
      "trunk": "Árbol",
      "type": "Frutal",
      "diameter": 25,
    },
    {
      "common_name": "Mandarina",
      "scientific_name": "Citrus reticulata",
      "ph_min": 6.6,
      "ph_max": 7.5,
      "distance": 6,
      "nitrogen": 0,
      "aromatic": 0,
      "trunk": "Árbol",
      "type": "Frutal",
      "diameter": 10,
    },
    {
      "common_name": "Limón",
      "scientific_name": "Citrus × limon",
      "ph_min": 6.6,
      "ph_max": 7.5,
      "distance": 6,
      "nitrogen": 0,
      "aromatic": 0,
      "trunk": "Árbol",
      "type": "Frutal",
      "diameter": 10,
    },
    {
      "common_name": "Guayaba",
      "scientific_name": "Psidium guajava",
      "ph_min": 6,
      "ph_max": 6.5,
      "distance": 6,
      "nitrogen": 0,
      "aromatic": 0,
      "trunk": "Árbol",
      "type": "Frutal",
      "diameter": 20,
    },
    {
      "common_name": "Acacia",
      "scientific_name": "Acacia sensu lato",
      "ph_min": 6.5,
      "ph_max": 7.5,
      "distance": 5,
      "nitrogen": 1,
      "aromatic": 0,
      "trunk": "Árbol",
    },
    {
      "common_name": "Moringa",
      "scientific_name": "Moriga oleifera",
      "distance": 4,
      "nitrogen": 1,
      "aromatic": 0,
      "trunk": "Árbol",
    },
    {
      "common_name": "Alfalfa",
      "scientific_name": "Medicago sativa",
      "ph_min": 6,
      "ph_max": 6.5,
      "distance": 0.9,
      "nitrogen": 1,
      "aromatic": 0,
      "trunk": "Herbáceo",
    },
    {
      "common_name": "Ajo",
      "scientific_name": "Allium sativum",
      "distance": 0.15,
      "nitrogen": 0,
      "aromatic": 1,
      "trunk": "Subterraneo",
    },
    {
      "common_name": "Platano",
      "scientific_name": "Musa paradisiaca",
      "ph_min": 5,
      "ph_max": 8,
      "distance": 3,
      "nitrogen": 0,
      "aromatic": 0,
      "trunk": "Herbáceo",
    },
    {
      "common_name": "Romero",
      "scientific_name": "Rosmarinus officinalis",
      "ph_min": 6,
      "ph_max": 7,
      "distance": 0.3,
      "nitrogen": 0,
      "aromatic": 1,
      "type": "Aromática",
    },
    {
      "common_name": "Albahaca",
      "scientific_name": "Ocimum",
      "distance": 0.23,
      "nitrogen": 0,
      "aromatic": 1,
      "type": "Aromática",
    }
  ]);

};
