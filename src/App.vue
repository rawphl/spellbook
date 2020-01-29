<template>
    <div id="app">
        <h3>Dungeons and Dragons: Spellbook</h3>
        <SpellList/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SpellList from "./components/SpellList.vue";

@Component({
  components: {
      SpellList
  }
})
export default class App extends Vue {

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap');

html {
    background-image: url("assets/spell_background.png");
    background-size: cover;
}

#app {
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 960px;
  margin: 0 auto;
}
</style>
