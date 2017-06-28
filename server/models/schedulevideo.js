'use strict';
module.exports = function (sequelize, DataTypes) {
    let ScheduleVideo = sequelize.define('ScheduleVideo', {
        videoLink: DataTypes.STRING
    });
    return ScheduleVideo;
};