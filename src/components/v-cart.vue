<template>
    <div class="v-cart">
        <router-link :to="{name: 'catalog'}">
            <div class="v-cart__link_to_cart">
                Back to catalog
            </div>
        </router-link>

        <h1>$ Cart $</h1>
        <p v-if="!cart_data.length">There are no products in cart...</p>
        <vCartItem 
            v-for = "(cart, index) in cart_data"
            :key = "cart.article"
            :cart_item_data = "cart"
            @deleteFromCart = "deleteFromCart(index)"
        />
    </div>
</template>

<script>
    import vCartItem from "./v-cart-item";
    import {mapActions} from "vuex";

    export default {
        name: "v-cart",
        components: {
            vCartItem
        },
        props: {
            cart_data: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            
        },
        methods: {
            ...mapActions(["DELETE_FROM_CART"]),
            
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index);
            }
        }
    }
</script>

<style lang="scss">
    .v-cart {
        &__link_to_cart {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding * 2;
            border: 1px solid  #ccc;
        }
    }
</style>