import {Student} from '../models';

exports.getById = (id) => {
    return Student.findById(id);
};

exports.getAll = (searchParams, includeArr) => {
    return Student.findAll({where: searchParams, include: includeArr});
};

exports.search = (instructoObj) => {
    return Student.findAll({where: instructoObj});
};

exports.add = (instructorObj) => {
    return Student.create(instructorObj);
};

exports.delete = (id) => {
    return Student.destroy({where: {id: id}});
};