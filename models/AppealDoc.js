const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const AppealDoc = sequelize.define(
    'appealdoc',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        docURL: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
    },
    { timestamps: false }
);

module.exports = AppealDoc;
