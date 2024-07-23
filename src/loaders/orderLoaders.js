import orderServices from "../services/orderServices";

const orderLoaders ={
    ViewOrders: async () =>{
        try{
            return await orderServices.ViewOrders();
        } catch (error) {
            return [];
        }
    }
}

export default orderLoaders;