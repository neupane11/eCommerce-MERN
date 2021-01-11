import mongoose from 'mongoose'

const connectDB=async()=>{
    try{
        const db=await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`MongoDB Connected: ${db.connection.host}`)
    }catch(error){
        console.error('error in connecting db')
    }
}

export default connectDB