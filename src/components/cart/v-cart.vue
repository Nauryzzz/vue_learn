<template>
    <div class="v-cart">
        <router-link :to="{name: 'catalog'}">
            <div class="v-cart__link_to_cart">
                Back to catalog
            </div>
        </router-link>

        <h1>Cart</h1>
        <p v-if="!cart_data.length">There are no products in cart...</p>
        <vCartItem 
            v-for = "(cart, index) in cart_data"
            :key = "cart.article"
            :cart_item_data = "cart"
            @deleteFromCart = "deleteFromCart(index)"
            @increment="incrementItem(index)"
            @decrement="decrementItem(index)"
        />
        
        <div class="v-cart__total">
            <p class="total__name">Total:</p>
            <p>{{cartTotalCost | toFix | formattedPrice}}</p>
        </div>
    </div>
</template>

<script>
    import vCartItem from "./v-cart-item";
    import {mapActions} from "vuex";
    import toFix from "../../filters/toFixed";
    import formattedPrice from "../../filters/priceFormat";

    export default {
        name: "v-cart",
        components: {
            vCartItem
        },
        filters: {
            toFix,
            formattedPrice
        },
        props: {
            cart_data: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            cartTotalCost() {
                let result = [];

                if (!this.cart_data.length) return 0;

                for (let item of this.cart_data) {
                    result.push(item.price * item.quantity);
                }

                result = result.reduce((sum, el) => sum + el);
                
                return result;
            }
        },
        methods: {
            ...mapActions(["DELETE_FROM_CART", "INCREMENT_CART_ITEM", "DECREMENT_CART_ITEM"]),
            
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index);
            },
            decrementItem(index) {
                this.DECREMENT_CART_ITEM(index);
            },
            incrementItem(index) {
                this.INCREMENT_CART_ITEM(index);
            },
        }
    }
</script>

<style lang="scss">
    .v-cart {
        margin-bottom: 100px;

        &__link_to_cart {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding * 2;
            border: 1px solid  #ccc;
        }

        &__total {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            padding: $padding*2 $padding*3;
            display: flex;
            justify-content: center;
            background: $green-bg;
            color: #ffffff;
            font-size: 20px;
        }

        .total__name {
            margin-right: $margin*2;
        }
    }
</style>