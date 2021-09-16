import { useState, useCallback, creteContext } from "react";
import { api } from "../../api/api";
const initialState = [];
export const ordersContext= creteContext(initialState);


export function OrdersProvider({children}){





    const fetchOrders =useCallback(async (id)=>{
        const {data}= 
    },[]);



}