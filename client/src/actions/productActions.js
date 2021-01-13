import axios from 'axios'
export const homepageProductsAction=()=>async(dispatch)=>{
    try{
        dispatch({
            type:'REQUEST'})
        const {data}=await axios.get('/products/api')
        dispatch({
            type:'SUCCESS',
            payload:data
        })
    }catch(error){
        dispatch({
            type:'FAIL',
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
}

export const individualProductAction=(id)=>async(dispatch)=>{
    try{
        dispatch({
            type:'INDIVIDUAL_PRODUCT_REQUEST'})
        const {data}=await axios.get(`/products/api${id}`)
        dispatch({
            type:'INDIVIDUAL_PRODUCT_SUCCESS',
            payload:data
        })
    }catch(error){
        dispatch({
            type:'INDIVIDUAL_PRODUCT_FAIL',
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
}