'use strict';
module.exports = function (sequelize, DataTypes) {
    let EventImage = sequelize.define('EventImage', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        start: DataTypes.DATE,
        end: DataTypes.DATE
    });
    return EventImage;
};