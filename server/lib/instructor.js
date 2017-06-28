import {Instructor} from '../models';
import cloudinary from 'cloudinary';
import config from '../config/config.js';
import del from 'del';
import {cloudinaryUpload} from './util';

cloudinary.config(config.cloudinaryConfig);

exports.getById = (id) => {
    return Instructor.findById(id);
};

exports.getAll = (searchParams, includeArr) => {
    return Instructor.findAll();
};

exports.search = (instructoObj) => {
    return Instructor.findAll({where: instructoObj})
};

exports.add = (instructorObj) => {
    return Instructor.create(instructorObj);
};

exports.delete = (id) => {
    return Instructor.destroy({where: {id: id}});
};

exports.addImage = (instructorId, image) => {
    return new Promise((resolve, reject) => {
        Instructor.findById(instructorId).then((item) => {
            cloudinaryUpload(image, `instructors/${item.title}_image`).then(cloudinaryInfo => {
                item.update({image: cloudinaryInfo.public_id, imageVersion: cloudinaryInfo.version}).then(finalRes => {
                    resolve(cloudinaryInfo);
                }).catch(err => {
                    reject(err);
                })
            });
        }).catch(err => {
            reject(err);
        });
    })
};

exports.getImage = (instructorId, params) => {
    return new Promise((resolve, reject) => {
        Instructor.findById(instructorId).then(res => {
            params.version = res.imageVersion;
            let image = cloudinary.url(res.image, params);
            resolve(image);
        }).catch(err => {
            reject(err);
        });
    });

};




