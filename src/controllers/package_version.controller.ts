import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'
import {PackageVersion} from '../models/PackageVersion'


import wrap from '../util/wrap'
import {Package} from "@models/Package";

class PackageVersionController implements IControllerBase {
    public path = '/package'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.post(`${this.path}/:id/version`, wrap(this.create))
        this.router.get(`${this.path}/:id/version/:versionId`, wrap(this.get))
        this.router.put(`${this.path}/:id/version/:versionId`, wrap(this.update))
        this.router.delete(`${this.path}/:id/version/:versionId`, wrap(this.delete))
    }

    create = async (req: Request, res: Response) => {
        const {version} = req.body
        const {id} = req.params

        const result: PackageVersion = await PackageVersion.create({version, PackageId: id})
        res.json({message: 'success', data: result})
    }

    get = async (req: Request, res: Response) => {
        const {versionId} = req.params

        const result: PackageVersion = await PackageVersion.findByPk(versionId)
        res.json({message: 'success', data: result})
    }

    update = async (req: Request, res: Response) => {
        const {versionId} = req.params
        const {version} = req.body

        const result: any = await PackageVersion.update({version}, {where: {id: versionId}})
        res.json({message: 'success', data: result})
    }

    delete = async (req: Request, res: Response) => {
        const {versionId} = req.params

        const result: any = await PackageVersion.destroy({where: {id: versionId}})
        res.json({message: 'success', data: result})
    }


}

export default PackageVersionController
