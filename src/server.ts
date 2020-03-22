import 'module-alias/register'

import sequelize from './database/sequelize'
import App from './app'
import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger';
import controllers from './controllers/index'
import {config} from '@config/config'

const app = new App({
    port: config.port,
    controllers: controllers.map(controller => new controller()),
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({extended: true}),
        loggerMiddleware
    ]
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connect has been established successfully.')
    })


app.listen()
