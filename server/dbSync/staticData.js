import testData from './testData';

module.exports.generate = (db) => {
    console.log('Adding static data...'.green);

    Promise.all([
        db.PaymentType.bulkCreate([
            {PaymentType: "Cash"},
            {PaymentType: "Credit"},
            {PaymentType: "ClassCard"},
        ])
    ]).then(values => {
        console.log('Static data has been generated'.green);
        testData.generate(db);
    });

};