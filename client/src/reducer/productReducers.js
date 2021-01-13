export const homePageProductReducer=(state={products:[]},action)=>{
    switch(action.type){
        case 'REQUEST':
            return{products:[]}
        case 'SUCCESS':
            return{products:action.payload}
        case 'FAIL':
            return{error:action.payload}
        default:
            return state
    }
    
}

export const individualProductReducer=(state={product:{}},action)=>{
    switch(action.type){
        case ' INDIVIDUL_PRODUCT_REQUEST':
            return{...state}
        case 'INDIVIDUAL_PRODUCT_SUCCESS':
            return{product:action.payload}
        case 'INDIVIDUAL_PRODUCT_FAIL':
            return{error:action.payload}
        default:
            return state
    }
    
}