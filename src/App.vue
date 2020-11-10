<template>
  <div id="app">
      <vMainWrapper />
      <vCatalog />
  </div>
</template>

<script>
    import vMainWrapper from "./components/v-main-wrapper";
    import vCatalog from "./components/v-catalog";

    export default {
        name: "App",
        components: {
            vMainWrapper,
            vCatalog
        },
    };
</script>

<style>

</style>
