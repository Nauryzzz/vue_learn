import Axios from "axios";

export default {
    async GET_PRODUCTS_FROM_API({commit}) {
        try {
            const products = await Axios("http://localhost:3000/products", { method: "GET" });
            commit("SET_PRODUCTS_TO_STATE", products.data);
            return products;
        } catch (err) {
            console.log(err);
            return err;
        }
    },
}