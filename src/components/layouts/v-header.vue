<template>
  <div class="v-header">
    <router-link :to="{name: 'mainPage'}">
        <img src="../../assets/logo.png" alt="logo" />
    </router-link>    
    <div class="search">
        <input 
            type="text" 
            class="search-field"
            v-model="searchValue"
        >
        <button class="search-btn">
            <i class="material-icons" @click = "search(searchValue)">search</i>
        </button>
        <button class="search-btn">
            <i class="material-icons" @click = "clearSearchField">cancel</i>
        </button>
    </div>
  </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
    name: "v-header",
    data() {
        return {
            searchValue: ""
        }
    },
    methods: {
        ...mapActions(["GET_SEARCH_VALUE_TO_VUEX"]),
        search(value) {
            this.GET_SEARCH_VALUE_TO_VUEX(value);

            if (this.$route.path !== "/catalog") {
                this.$router.push("/catalog");
            }
        },
        clearSearchField() {
            this.searchValue = "";
            this.search("");
        }
    }
    };
</script>

<style lang="scss">
    .v-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: $green-bg;
        padding: 16px;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 2000;
        img {
            width: 50px;
        }
        .search {
            position: relative;
            right: 200px;
            display: flex;
            justify-content: center;
            align-items: center;  

            .search-field {
                padding: $padding;
            }
        }
        .search-btn {
            margin-left: 16px;
            background: transparent;
            border: none;
        }
    }
</style>
