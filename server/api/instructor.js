import {Router} from 'express';
import {upload} from "../lib/util";
import Instructor from '../lib/instructor';

export default () => {
    let instructor = Router();

    //Instructor
    instructor.get('/:id/image?', (req, res) => {
        Instructor.getImage(req.params.id, req.query).then(image => {
            res.redirect(image);
        });
    });

    instructor.get('/all', (req, res) => {
        Instructor.getAll().then(items => {
            res.json(items);
        })
    });

    instructor.post('/:id/image', upload.single('test'), (req, res) => {
        Instructor.addImage(req.params.id, req.file.path).then(result => {
            res.json(result);
        })
            .catch(err => {
                res.json(err);
            });
    });

    instructor.get('/:id', (req, res) => {
        Instructor.getById(req.params.id).then(item => {
            res.json(item);
        })
    });

    return instructor;
}
