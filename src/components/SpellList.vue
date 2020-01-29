<template>
      <ul style="margin-top: 20px">
          
          <input type="text" :value="text" @input="e => text = e.target.value" @keyup.enter="hideKeyboard" style="position: fixed; display: block; width: 100%; top: 0;"/>
          <li v-for="spell in spellList" :key="spell._id" >
              <h5>{{spell.name}}</h5>

              <div>
                <span>Casting Time: </span> 
                <span>{{spell.casting_time}}</span>
              </div>
      
              <div>
                <span>Range:</span> 
                <span>{{spell.range}}</span>
              </div>

              <div>
                <span>Duration: </span> 
                <span>{{spell.duration}}</span>
              </div>

              <div>
                <span>Classes: </span> 
                <span v-for="(cls, i) in spell.classes" :key="cls.name">
                    <span v-if="i > 0 && i % 2 === 1">, </span>{{cls.name}}
                </span>
              </div>

              <div v-for="paragraph in spell.desc" :key="paragraph">
                <p>{{paragraph}}</p>
              </div>

              <span v-if="spell.higher_level">At higher levels</span>
              <div v-for="paragraph in spell.higher_level" :key="paragraph">
                <p>{{paragraph}}</p>
              </div>
          </li>
      </ul>
</template>

<script lang="ts">
import { Component, Vue,  } from 'vue-property-decorator';
import { Spell } from "../models/spell";
import spells from "../data/spells.json"

@Component({
  components: {
  }
})
export default class SpellList extends Vue {
    spells: Array<Spell> = spells
    text: string | null = null

    get spellList() : Array<Spell> {
        if(this.text === null) return this.spells
        return this.spells.filter((spell) => spell.name.toLowerCase().includes(this.text!))
    }

    hideKeyboard() {
        (document.activeElement as HTMLElement).blur();
    }
}
</script>

<style lang="scss" scoped>

  ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      font-family: 'Libre Baskerville', serif;
      li {
              padding: 0.5rem;
              margin-bottom: 0.75rem;
      }
  }


  h5 {
    font-family: 'Libre Baskerville', serif;
    color: #58170D;
    font-size: 1.5rem;
    font-weight: bolder;
    font-variant: small-caps;
    text-transform: capitalize;
    margin: -10px 0px -5px 0px;
    text-align: left;
  }

  p {
      text-align: left;
  }

  div {
      text-align: left;
      span:first-child {
          font-weight: bold;
      }
  }
</style>