require("./main.css")
const Vue = require("vue")
const VueMaterial = require("vue-material")

Vue.use(VueMaterial)

Vue.component("hello-vue", require("./hello.vue"))

new Vue({
  el: "#mountpoint",
  render: r => r("hello-vue")
})