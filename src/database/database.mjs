// module.require('dotenv/config')
import 'dotenv/config'
import mongoose from 'mongoose'

// const mongoose = module.require('mongoose')

// require('dotenv').config()

export default function database () {
  mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_DEPLOY_USERNAME}:${process.env.MONGODB_DEPLOY_PASSOWORD}@firendbookdb.ulvh4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    )
    .then(() => console.log('connected at mongoDB!'))
    .catch((err) => console.log(err))
}
