<template>
  <div>
    <h1>BALADA VUE</h1>
    <router-view></router-view>
  </div>
</template>

<script>
const VueRouter = require("vue-router");

module.exports = {
  name: "Spa",
  router: new VueRouter({
    routes: [
      { path: "/lista-festas", component: require("./lista-festas.vue") },
      { path: "/criar-festa", component: require("./criar-festa.vue") },
      { path: "/lista-convidado", component: require("./lista-convidados.vue") }
    ]
  })
};
</script>

<style>

</style>