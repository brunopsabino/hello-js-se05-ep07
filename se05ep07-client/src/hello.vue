<template>
  <md-layout md-gutter>
    <md-layout md-gutter></md-layout>
    <md-layout md-gutter>
      <md-card md-with-hover>
        <md-card-header>
          <div class="md-title">Contador</div>
          <div class="md-subhead">Construído com Vue Material</div>
        </md-card-header>
        <md-card-content>
          {{counter}}
        </md-card-content>
        <md-card-actions>
          <md-button @click="counter++">Adicionar</md-button>
        </md-card-actions>
      </md-card>
    </md-layout>
    <md-layout md-gutter></md-layout>
  </md-layout>
</template>

<script>
module.exports = {
  name: "HelloVue",
  data: _ => ({ counter: 0 })
};
</script>
<style>

</style>