// This file is for initial development purposes only!!!
// Once the initial development is complete, pull the schema from your database and create a new manual migration as your first migration
// Use migrations only after than

import staticData from './staticData';

module.exports.run = function (db) {
    console.log('Force Syncing DB'.green);

    db.sequelize.sync({force: true}).then(() => {
        console.log('DB has been synced'.green);
        staticData.generate(db);
    });
};
