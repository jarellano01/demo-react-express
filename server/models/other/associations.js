import scopes from './scopes';
export default (db) => {
    db.Class.belongsTo(db.Instructor, {
        onDelete: "SET NULL",
        foreignKey: {
            allowNull: true
        }
    });
    db.Class.hasMany(db.ScheduledClass);

    db.Event.hasMany(db.EventImage);

    db.EventImage.belongsTo(db.Event, {
        onDelete: "SET NULL",
        foreignKey: {
            allowNull: true
        }
    });

    db.Instructor.hasMany(db.Class);
    db.Instructor.hasMany(db.ScheduledClass);

    db.ScheduledClass.belongsTo(db.Instructor, {
        onDelete: "RESTRICT",
        foreignKey: {
            allowNull: true
        }
    });

    db.ScheduledClass.belongsTo(db.Class, {
        onDelete: "RESTRICT",
        foreignKey: {
            allowNull: true
        }
    });

    db.ScheduledClass.hasMany(db.ScheduleVideo);
    db.ScheduledClass.hasMany(db.ScheduleStudent);

    db.ScheduleStudent.belongsTo(db.Student, {
        onDelete: "CASCADE",
        foreignKey: {
            allowNull: false
        }
    });
    db.ScheduleStudent.belongsTo(db.ScheduledClass, {
        onDelete: "CASCADE",
        foreignKey: {
            allowNull: false
        }
    });

    db.ScheduleVideo.belongsTo(db.ScheduledClass, {
        onDelete: "RESTRICT",
        foreignKey: {
            allowNull: false
        }
    });

    db.Student.hasMany(db.ScheduleStudent);

    scopes(db);
}