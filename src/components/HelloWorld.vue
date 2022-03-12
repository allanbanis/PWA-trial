<template>
  <div class="hello">
    <input type="number" v-model="highScore"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import {getHighScore,setHighScore} from '@/services/high-score-service'
export default defineComponent({
  setup(){
    var highScore = ref(getHighScore())
    var highscorewatcher = watch(highScore,(currentValue)=> setHighScore(currentValue.valueOf()))
    return {highScore,highscorewatcher}
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
