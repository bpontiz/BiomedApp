import { DataSource } from "typeorm";
import 'dotenv/config';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ["src/repository/app/entities/*.entity.ts"],
    migrations: ["src/repository/app/migrations/*.ts"],
    synchronize: false,
})