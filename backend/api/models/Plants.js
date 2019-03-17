/**
 * Plants.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    // GENERAL INFO
    scientific_name: {
      type: 'string',
      unique: true,
      required: false
    },
    common_name: {
      type: 'string',
      unique: true,
      required: true
    },

    // PERMACULTURE
    // NPK, cantidades mínimas y máximas necesarias de los químicos más relevantes
    // (N)
    nitrogen: {
      type: 'boolean',
    },
    // // (K)
    // potasium: {
    //   type: 'boolean',
    // },
    // // (P)
    // phosphorus: {
    //   type: 'boolean',
    // },
    ph_min: {
      type: 'number',
    },
    ph_max: {
      type: 'number',
    },

    // DISTANCE BETWEEN ROWS
    // Recommended distance between plants of the same kind
    distance: {
      type: 'number',
    },
    // Tallos
    // Árboles, arbustos, hierbas
    type: {
      type: 'string',
      isIn: ['Aromática', 'Floral', 'Leguminosa', 'Frutal', 'Hortaliza'],
    },
    
    // ASOCIATIONS
    // Relevant to asociation
    trunk: {
      type: 'string',
      isIn: ['Subterraneo', 'Trepador', 'Herbáceos', 'Carnosos', 'Mata', 'Arbusto', 'Árbol'],
    },
    
    // // DISTANCE BETWEEN PLANTS WITHIN NODE
    // // Size Constrains
    // plant_height: {
    //   type: 'number',
    // },

    // ECONOMICAL
    // Tiempo de cosecha
    // harvest_time_min: {
    //   type: 'number',
    //   defaultsTo: 0
    // },
    // harvest_time_max: {
    //   type: 'number',
    // },
    // // Days since harvest till expiration
    // expiration_time: {
    //   type: 'number',
    // },    
    // // Water requirements
    // water_amount: {
    //   type: 'number',
    // },

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    // beneficial: {
    //   collection: 'beneficial',
    //   via: 'plants'
    // },
    // detrimental: {
    //   collection: 'detrimental',
    //   via: 'plants'
    // },

  },

};

// nitrogen_min: {
//   type: 'number',
// },
// nitrogen_max: {
//   type: 'number',
// },
// // (K) 
// potasium_min: {
//   type: 'number',
// },
// potasium_max: {
//   type: 'number',
// },
// // (P)
// phosphorus_min: {
//   type: 'number',
// },
// phosphorus_max: {
//   type: 'number',
// },
// // "Durability", how frequently can you plant them
// type: {
//   type: 'string',
//   isIn: ['anual', 'bianual', 'perennes'],
// },
