import { useContext } from "react";
import { ordersContext } from "../provider/Contexts/OrdersContent";

export function useOrders(){
    const context = useContext(ordersContext);
    return context;
}