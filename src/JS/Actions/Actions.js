import { ADD_PRODUCT, DELETE_PRODUCT, DISPONIBLE_PRODUCT, EDIT_PRODUCT } from "../ActionTypes/ActionsTypes"

export const addProduct=(newProduct)=>{
    return{
        type:ADD_PRODUCT,
        payload:newProduct
    }
}

export const deleteProduct=(id)=>{
    return{
        type:DELETE_PRODUCT,
        payload:id
    }
}
export const disponibleProduct=(id)=>{
    return{
        type:DISPONIBLE_PRODUCT,
        payload:id
    }
}