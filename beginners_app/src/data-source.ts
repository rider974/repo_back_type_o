import "reflect-metadata"
import { DataSource } from "typeorm"
import {User} from "./entity/User.js"
import {Role} from "./entity/Role.js"
import {Comment} from "./entity/Comment.js"
import {Have} from "./entity/Have.js"
import {Ressource} from "./entity/Ressource.js"
import {RessourceStatus} from "./entity/RessourceStatus.js"
import {RessourceStatusHistory} from "./entity/RessourceStatusHistory.js"
import {Tag} from "./entity/Tag.js"
import {Follow} from "./entity/Follow.js"
import {Refer} from "./entity/Refer.js"
import {RessourceType} from "./entity/RessourceType.js"
import {SharingSession} from "./entity/SharingSession.js"
import {Reference} from "./entity/Reference.js"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user_beginners",
    password: "pass_beginners",
    database: "db_beginners",
    synchronize: true,
    logging: true,
    entities: [User, Role, Comment, Have, Ressource, RessourceStatus, RessourceStatusHistory, Tag, Follow, Refer, Reference, RessourceType, SharingSession],
    migrations: ["./migration/*.{js,ts}"],
    subscribers: [],
})
