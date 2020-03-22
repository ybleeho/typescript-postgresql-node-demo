import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'
import {Package} from '../models/Package'
import {PackageVersion} from "@models/PackageVersion";

import wrap from '../util/wrap'

class PackageController implements IControllerBase {
    public path = '/package'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, wrap(this.list))
        this.router.post(this.path, wrap(this.create))
        this.router.get(`${this.path}/:id`, wrap(this.get))
        this.router.put(`${this.path}/:id`, wrap(this.update))
        this.router.delete(`${this.path}/:id`, wrap(this.delete))
    }

    create = async (req: Request, res: Response) => {
        const {name, description} = req.body
        const result: Package = await Package.create({name, description})
        res.json({message: 'success', data: result})
    }

    get = async (req: Request, res: Response) => {
        const {id} = req.params
        const result: Package = await Package.findByPk(id,{include: [PackageVersion] })
        res.json({message: 'success', data: result})
    }

    list = async (req: Request, res: Response) => {
        const {id} = req.params
        const result: Package[] = await Package.findAll()
        res.json({message: 'success', data: result})
    }

    update = async (req: Request, res: Response) => {
        const {id} = req.params
        const {name, description} = req.body
        const result: any = await Package.update({name, description}, {where: {id}})
        res.json({message: 'success', data: result})
    }

    delete = async (req: Request, res: Response) => {
        const {id} = req.params
        const {name, description} = req.body
        const result: any = await Package.destroy({where: {id}})
        res.json({message: 'success', data: result})
    }

}

export default PackageController
