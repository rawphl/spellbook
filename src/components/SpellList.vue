<template>
  <div>
    <input
      type="text"
      :value="text"
      v-debounce:100ms="setText"
      :debounce-events="['input']"
      @keyup.enter="hideKeyboard"
      placeholder="Type to search"
    />
    <span class="clear" @click="clearText">x</span>
    <br />

    {{spellList.length}} {{spellList.length === 1 ? "Spell" : "Spells"}}
    <hr>

    <SpellCard v-for="spell in spellList" :key="spell._id" :spell="spell" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Spell } from "../models/spell";
import spells from "../data/spells.json";
import SpellCard from "./SpellCard.vue";

@Component({
  components: {
    SpellCard
  }
})
export default class SpellList extends Vue {
  spells: Array<Spell> = spells;
  text: string | null = null;

  setText(value: string) {
    this.text = value;
  }

  clearText() {
    this.text = null
  }

  get spellList(): Array<Spell> {
    if (this.text === null) return this.spells;
    return this.spells.filter(spell =>
      spell.name.toLowerCase().includes(this.text!)
    );
  }

  hideKeyboard() {
    (document.activeElement as HTMLElement).blur();
  }
}
</script>

<style lang="scss" scoped>
div {
  font-family: "Libre Baskerville", serif;
  margin: 0;
  padding: 0;
}

.header {
  position: fixed;
}

input {
  font-family: "Libre Baskerville", serif;
  font-size: 1.4rem;
  padding: 0.2em;
  text-align: center;
  margin-bottom: 5px;
}

.clear {
  font-size: 1.5rem;
  margin: 10px;
  cursor: pointer;
}
</style>