const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    id:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      foraignKey: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    population: {
      type: DataTypes.STRING,
      allowNull: true
    },  
  },{
    timestamps: false
  });
};

// { timestamps: false } esto saca created ad y elotro xd
// y para que no te cambie el nombre a plural es este: {
 // freezeTableName: true,
//}