'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('PackageVersions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            version: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            PackageId: {
                type: Sequelize.INTEGER,
                reference: {
                    model: 'Packages',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('PackageVersions');
    }
};
