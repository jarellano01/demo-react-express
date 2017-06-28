'use strict';
module.exports = function (sequelize, DataTypes) {
    let Class = sequelize.define('Class', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        start: DataTypes.DATE,
        end: DataTypes.DATE
    });
    return Class;
};