'use strict';
module.exports = function (sequelize, DataTypes) {
    let Student = sequelize.define('Student', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        dob: DataTypes.DATE,
        email: {type: DataTypes.STRING, unique: true},
        phoneNumber: DataTypes.STRING,
        address: DataTypes.STRING,
        emergencyContact: DataTypes.STRING,
        emergencyNumber: DataTypes.STRING,
        subscribed: DataTypes.BOOLEAN,
        liabilityUrl: DataTypes.STRING
    });
    return Student;
};