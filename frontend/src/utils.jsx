import {toast }from 'react-toastify';

export const handlerSuccess =(msg)=>{
    toast.success(msg,{
        position:'top-right'
    })

}
export const handlerError =(msg)=>{
    toast.error(msg,{
        position:'top-right'
    })

}