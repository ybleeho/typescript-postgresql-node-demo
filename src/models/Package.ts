import {Table, Column, Model, HasMany} from 'sequelize-typescript'
import {PackageVersion} from "@models/PackageVersion";

@Table
export class Package extends Model<Package> {

    @Column
    name: string

    @Column
    description: string

    @HasMany(() => PackageVersion)
    PackageVersions: PackageVersion[]
}
