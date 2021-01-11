const productSchema=mongoose.Schema({
    user:{//which admin created which product
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
       
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
       
        
    },
    rating:{
        type:Number,
        required:true,
       default:0
        
    },
    reviews:{
        type:Number,
        required:true,
       default:0
        
    },
    price:{
        type:Number,
        required:true,
       default:0
        
    },
    stock:{
        type:Number,
        required:true,
       default:0
        
    }
},{
    timestamps:true
})
const Product=mongoose.model(Product,productSchema)
export default Product