const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      allowNull:false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
   
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    life: {
      type: DataTypes.INTEGER,
    allowNull: false
    },

    attack: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    defense: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    speed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  });
};

