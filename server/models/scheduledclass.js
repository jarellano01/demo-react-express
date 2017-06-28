'use strict';
module.exports = function (sequelize, DataTypes) {
    let ScheduledClass = sequelize.define('ScheduledClass', {
        paid: DataTypes.BOOLEAN,
        start: DataTypes.DATE,
        end: DataTypes.DATE,
        status: {
            type:   DataTypes.ENUM,
            values: ['scheduled', 'completed', 'canceled']
        }
    });
    return ScheduledClass;
};