<template>
    <div class="v-main-wrapper">
        {{title}}
    </div>
</template>

<script>
    export default {
        name: "v-main-wrapper",
        components: {

        },
        props: {},
        data() {
            return {
                title: "Main wrapper"
            }
        },
        computed: {

        },
        methods: {
            
        },
        mounted() {
            console.log("I'm ready!");
        }
    }
</script>

<style>
    .v-main-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>