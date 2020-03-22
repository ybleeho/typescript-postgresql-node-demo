import {Table, Column, Model, BelongsTo, ForeignKey} from 'sequelize-typescript'
import {Package} from "@models/Package";

@Table
export class PackageVersion extends Model<PackageVersion> {

    @Column
    version: string

    @ForeignKey(() => Package)
    @Column
    PackageId: number

    @BelongsTo(() => Package)
    User: Package

}
