import path from 'path';
import multer from 'multer';
import cloudinary from 'cloudinary';
import config from '../config/config.js';
import del from 'del';
import mkdirp from 'mkdirp';
import uniqueid from 'uniqid';

cloudinary.config(config.cloudinaryConfig);


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = 'temp/';

        mkdirp(dir, err => cb(err, dir))
    },
    filename: function (req, file, cb) {
        cb(null, uniqueid() + path.extname(file.originalname)); //Appending extension
    }
});

exports.upload = multer({ storage: storage });

exports.cloudinaryUpload = (imagePath, publicId) => {
	return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(imagePath, function (result) {
        	// delete image from temp folder after upload
            del([imagePath]);

            //return cloudinary response
            resolve(result);
        }, {public_id: publicId});
	});
};


