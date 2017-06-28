import {Router} from 'express';
import Instructor from './instructor';

export default (app) => {

    app.use('/api/instructor', Instructor());
    app.use('/api',(req, res) => {
        res.json('it works');
    });

}
