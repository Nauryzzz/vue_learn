<template>
    <div class="v-main-wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "v-main-wrapper",
        props: {},
        data() {
            return {
            }
        },
        computed: {
        },
        methods: {
            
        },
        mounted() {
            
        }
    }
</script>

<style lang="scss">
    .v-main-wrapper {
        margin: 0 auto;
        max-width: 900px;
    }
</style>