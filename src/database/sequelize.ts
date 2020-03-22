import {Sequelize} from 'sequelize-typescript';
import * as dbConfig from '@config/db.json'

import {Package} from '@models/Package'
import {PackageVersion} from '@models/PackageVersion'

const env = process.env.NODE_ENV || 'development'
console.log('config====:', {
    host: dbConfig[env].host,
    port: dbConfig[env].port,
    database: dbConfig[env].database,
    dialect: dbConfig[env].dialect,
    username: dbConfig[env].username,
    password: dbConfig[env].password,
    // models: [Package,  PackageVersion]
})
const sequelize: any =  new Sequelize({
    host: dbConfig[env].host,
    port: dbConfig[env].port,
    database: dbConfig[env].database,
    dialect: dbConfig[env].dialect,
    username: dbConfig[env].username,
    password: dbConfig[env].password,
    models: [Package,  PackageVersion]
})

// sequelize.addModels([Package, PackageVersion])

export default sequelize
