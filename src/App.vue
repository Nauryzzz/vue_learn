<template>
  <div id="app">
      <vMainWrapper />
  </div>
</template>

<script>
    import vMainWrapper from "./components/v-main-wrapper";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "App",
        components: {
            vMainWrapper
        },
        computed: {
            ...mapGetters(["IS_MOBILE", "IS_DESKTOP"])
        },
        methods: {
            ...mapActions(["SET_MOBILE","SET_DESKTOP"])
        },
        mounted() {
            let vm = this;
            window.addEventListener("resize", () => {
                if (window.innerWidth > 767) {
                    vm.SET_DESKTOP()
                } else {
                    vm.SET_MOBILE()
                }
            })
        }
    };
</script>

<style lang="scss">
    #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 100px;
    }
</style>
