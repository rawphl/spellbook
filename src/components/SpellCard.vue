<template>
  <div class="spell-card">
    <h5>{{spell.name}}</h5>
    <div>
      <span>Spell level:</span>
      <span>{{spell.level}}</span>
    </div>
    <div>
      <span>Casting Time:</span>
      <span>{{spell.casting_time}}</span>
    </div>

    <div>
      <span>Range:</span>
      <span>{{spell.range}}</span>
    </div>

    <div>
      <span>Duration:</span>
      <span>{{spell.duration}}</span>
    </div>

    <div>
      <span>Classes:</span>
      <span>{{getClassList(spell.classes)}}</span>
    </div>

    <div v-for="(paragraph, i) in spell.desc" :key="i">
      <p>{{paragraph}}</p>
    </div>

    <div>
      <span class="bold" v-if="spell.higher_level">At higher levels</span>
      <p class="inline" v-for="(paragraph, i) in spell.higher_level" :key="i">{{paragraph}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Spell, ApiReference } from "../models/spell";

@Component({})
export default class SpellCard extends Vue {
  @Prop() spell!: Spell;

  getClassList(classes: Array<ApiReference>) {
    return classes.map(cls => cls.name).join(", ");
  }
}
</script>

<style lang="scss" scoped>
div.spell-card {
  color: #58170d;
  padding: 0.5rem;
  margin-bottom: 0.75rem;

  .bold {
    font-weight: bold;
  }

  .inline {
    display: inline;
  }

  h5 {
    font-family: "Libre Baskerville", serif;
    font-size: 1.5rem;
    font-weight: bold;
    font-variant: small-caps;
    text-transform: capitalize;
    margin: -10px 0px 10px 0px;
    text-align: left;
  }

  p {
    text-align: left;
  }

  div {
    line-height: 1.5em;
    font-size: 1rem;
    text-align: left;
    span:first-child {
      font-weight: bold;
      margin-right: 5px;
    }
  }
}
</style>