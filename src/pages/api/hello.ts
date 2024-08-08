// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {User} from './../../../beginners_app/src/entity/User';
import {AppDataSource} from './../../../beginners_app/src/data-source.js'
import type { DataSource } from "typeorm"

function initDataSource()
{
  AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.user_uuid = "dnzandazndidazio";
    user.email = "dnzda";
    user.password = "dnzda";
  
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.user_uuid)
  
    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)
  
    console.log("Here you can setup and run express / fastify / any other framework.")
  
  }).catch(error => console.log(error))
  
  }
  async function initTypeormDataSource()
  {
    const user = await AppDataSource.manager.findOneBy(User, {
        user_uuid: "dazjdnaz",
    })

    await AppDataSource.manager.save(user)
  }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  initTypeormDataSource();
  const users = await AppDataSource.manager.getRepository(User).find();
  res.status(200).json(users);
}
