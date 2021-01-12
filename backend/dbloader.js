import mongoose from 'mongoose'

import products from './data/products.js'
import users from './data/users.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

import connectDB from './connections/db.js'
import dotenv from 'dotenv'
dotenv.config()

connectDB()

const loadData=async ()=>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers=await User.insertMany(users)
        const adminUser=createdUsers[0]._id
        const sampleproducts=products.map(item=>{return{...item,user:adminUser}})

        await Product.insertMany(sampleproducts)
        console.log("data inserted to DB")
    }catch(error){
        console.error(`${error}`)
    }
}

const deleteData=async ()=>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        

      
        console.log("data destroyed from DB")
    }catch(error){
        console.error(`${error}`)
    }
}
if (process.argv[2]=='-d'){
    deleteData()
}else{
    loadData()
}