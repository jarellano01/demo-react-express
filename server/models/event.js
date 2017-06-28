'use strict';
module.exports = function (sequelize, DataTypes) {
    let Event = sequelize.define('Event', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        start: DataTypes.DATE,
        end: DataTypes.DATE,
        flyerLink: DataTypes.STRING
    });
    return Event;
};