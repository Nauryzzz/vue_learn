<template>
    <div class="v-catalog-item">

        <vPopup 
            v-if = "isInfoPopupVisible"
            @closePopup = "closeInfoPopup"
            rightBtnTitle="Add to cart"
            :popupTitle="product_data.name"
            @rightBtnAction="addToCart"
        >
            <img class="v-catalog-item__image" :src="require('../../assets/images/' + product_data.image)" alt="img">
            <div>
                <p class="v-catalog-item__name">Name: {{product_data.name}}</p>
                <p class="v-catalog-item__price">Price: {{product_data.price | toFix | formattedPrice}}</p>         
                <p class="v-catalog-item__category">Category: {{product_data.category}}</p>         
            </div>
        </vPopup>

        <img class="v-catalog-item__image" :src="require('../../assets/images/' + product_data.image)" alt="img">
        <p class="v-catalog-item__name">{{product_data.name}}</p>
        <p class="v-catalog-item__price">Price: {{product_data.price | toFix | formattedPrice}}</p>
        <button 
            class="v-catalog-item__show-info"
            @click="showPopupInfo"
        >
            Show info
        </button>

        <button 
            class="v-catalog-item__add_to_cart_btn btn" 
            @click="addToCart"
        >Add to cart</button>
    </div>
</template>

<script>
    import vPopup from "../popup/v-popup";
    import toFix from "../../filters/toFixed";
    import formattedPrice from "../../filters/priceFormat";

    export default {
        name: "v-catalog-item",
        components: {
            vPopup
        },
        data() {
            return {
                isInfoPopupVisible: false
            }
        },
        filters: {
            toFix,
            formattedPrice
        },
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            addToCart() {
                this.$emit("addToCart", this.product_data)
            },
            showPopupInfo() {
                this.isInfoPopupVisible = true;
            },
            closeInfoPopup() {
                this.isInfoPopupVisible = false;
            }
        },
        mounted() {
            this.$set(this.product_data, "quantity", 1)
        }
    }
</script>

<style lang="scss">
    .v-catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding * 2;
        margin-bottom: $margin * 2;
        border-radius: 5%;
        transition: all .2s linear;
        &__image {
            //max-width: 100%;
            //height: auto;
            width: 100px;
        }
        // &:hover {
        //     transform: translateY(-3px);
        // }
    }
</style>