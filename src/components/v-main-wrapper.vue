<template>
    <div class="v-main-wrapper">
        <vHeader />
        <hr>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <hr>
    </div>
</template>

<script>
    import vHeader from "./layouts/v-header";

    export default {
        name: "v-main-wrapper",
        components: {
            vHeader
        },
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