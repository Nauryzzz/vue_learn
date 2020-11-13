import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE(state, products) {
            state.products = products;
        },
        SET_CART(state, product) {
            if (state.cart.length) {
                let isProductExist = false;
                
                state.cart.map(el => {
                    if (el.article == product.article) {
                        isProductExist = true;
                        el.quantity++;
                    }
                });

                if (!isProductExist) {
                    state.cart.push(product);    
                }
            } else {
                state.cart.push(product);
            }
        },
        REMOVE_FROM_CART(state, index) {
            state.cart.splice(index, 1);
        }
    },
    actions: {
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
        ADD_TO_CART({commit}, product) {
            commit("SET_CART", product);
        },
        DELETE_FROM_CART({commit}, index) {
            commit("REMOVE_FROM_CART", index);
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    }
});

export default store;