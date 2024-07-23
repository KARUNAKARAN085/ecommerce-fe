import { protectedInstance } from "./instance";

const orderServices = {
    ViewOrders: async () => {
        return await protectedInstance.get('/orders');
    }
}

export default orderServices;