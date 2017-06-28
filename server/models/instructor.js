'use strict';
import {} from '../lib/util';
import cloudinary from 'cloudinary';
import config from '../config/config.js';

cloudinary.config(config.cloudinaryConfig);

module.exports = function (sequelize, DataTypes) {
    let Instructor = sequelize.define('Instructor', {
        title: {type: DataTypes.STRING, unique: true},
        shortDescription: DataTypes.TEXT,
        bio: DataTypes.TEXT,
        image: DataTypes.STRING,
        imageVersion: DataTypes.STRING,
        youtubePlaylistName: DataTypes.STRING,
        email: DataTypes.STRING,
        contractType: {
            type: DataTypes.ENUM,
            values: ["Contractor", "Employee"],
            defaultValue: "Employee",
            allowNull: false
        }
    });

    Instructor.prototype.toJSON = function () {
        let values = this.get();
        values.images = {
            original: cloudinary.url(values.image, {version: values.imageVersion}),
            thumb: cloudinary.url(values.image, {version: values.imageVersion, width: 200}),
            small: cloudinary.url(values.image, {version: values.imageVersion, width: 800}),
            large: cloudinary.url(values.image, {version: values.imageVersion, width: 1500})

        };
        return values;
    };

    return Instructor;
};