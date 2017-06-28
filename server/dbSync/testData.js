import instructor from '../lib/instructor';
import _ from 'lodash';
import faker from 'faker';

module.exports.generate = (db) => {
    console.log('Adding test data...'.green);

    Promise.all([
        new Promise((resolve, reject) => {

            _.times(30, () => {
                db.Instructor.create({
                    title: faker.name.findName(),
                    image: 'Person-placeholder_qztcic',
                    imageVersion: "1494446207",
                    email: faker.internet.email(),
                    shortDescription: faker.lorem.paragraph(),
                    bio: faker.lorem.paragraphs(),
                    youtubePlaylistName: faker.internet.url(),
                    Classes: [
                        {
                            title: "Beginners Salsa",
                            description: "Salsa for beginners"
                        },
                        {
                            title: "Beginners Bachata",
                            description: "Bachata for beginners"
                        }
                    ]
                }, {
                    include: [db.Class]
                })
            });
            resolve();
        }),

        db.Student.create({
            firstName: faker.name.findName(),
            lastName: "1",
            dob: new Date("05/03/92"),
            email: faker.internet.email(),
            phoneNumber: '8182976743',
            address: "231212",
            emergencyContact: "Mom",
            emergencyNumber: "827382827",
            subscribed: 0
        }),

        db.Student.create({
            firstName: "Student",
            lastName: "2",
            dob: new Date("05/03/92"),
            email: 'student2@gmail.com',
            phoneNumber: '8182976743',
            address: "231212",
            emergencyContact: "Mom",
            emergencyNumber: "827382827",
            subscribed: 0
        }),

        db.Student.create({
            firstName: "Student",
            lastName: "3",
            dob: new Date("05/03/92"),
            email: 'student3@gmail.com',
            phoneNumber: '8182976743',
            address: "231212",
            emergencyContact: "Mom",
            emergencyNumber: "827382827",
            subscribed: 0
        })

    ]).then(values => {
        console.log('Test data has been generated'.green);
        //instructor.addImage(1);
        // db.Instructor.findById(1).then(res => {
        //    res.update({image: "nktkbiklkmwnkbl7zh1r"}).then(result => {
        //        instructor.getImage(1);
        //    })
        // });

    });

};