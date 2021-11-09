const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('product', {
    id:{
         type: DataTypes.INTEGER,
         allowNull:false,
         primaryKey:true,
         autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
    },
    image: {
        type: DataTypes.STRING,
    },
    amount: {
        type: DataTypes.INTEGER
    }
    },{
        timestamps: false
    });
};