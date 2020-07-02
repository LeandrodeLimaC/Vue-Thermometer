<template>
  <div id="app" v-bind:style="{background: this.Temperature_current.bg_color}">
    <h1>
      It feels
      <mark v-bind:class="this.Temperature_current.text_class">
      {{this.Temperature_current.name}}
      </mark>
    </h1>
    <div class="wrapper">
      <Thermometer
        :rangeBar_value="this.current_barValue"/>
      <rangeBar
        :bg_color="this.Temperature_current.bg_color"
        @Bar_Value="sendBarValue($event)"/>
    </div>
    <button @click="showValue()">Enviar</button>   
  </div>
</template>

<script>
import Thermometer from './components/Thermometer';
import rangeBar from './components/rangeBar';

const Temperature_Obj = [
    { 
      name: "Cold",
      text_class: "cold-mark",
      bg_color: "rgb(212, 237, 255)"
    },
    {
      name: "Hot",
      text_class: "hot-mark",
      bg_color: "rgb(249, 217, 231)"
    }
];

export default {
  name: 'App',
  components: {
    Thermometer,
    rangeBar
  },
  data(){
    return{
      current_barValue: 0,
      Temperature_current: Temperature_Obj[0],
    }
  },
  methods:{
    sendBarValue(Bar_Value){
      this.current_barValue = Bar_Value;
      const range = 100/Temperature_Obj.length;

      this.Temperature_current = Temperature_Obj.filter((el, i) => {
        return i * range <= this.current_barValue && (i + 1) * range >= this.current_barValue;
      });

      this.Temperature_current = this.Temperature_current[0];
    },
    showValue(){
      alert("Valor atual da barra é " + this.current_barValue);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: rgb(224, 224, 224);
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  transition: .4s ;
  user-select: none;
}
#app > h1{
  margin: 44px;
}
body{
  margin: 0;
}
.wrapper{
  display: flex;
  position: relative;
  width: 140px;
}
.cold-mark{
  background: none;
  color: #0d0b3b;
}
.hot-mark{
  background: none;
  color: rgb(233, 19, 135);
}
button{
  margin: 44px;
  border: 2px solid transparent;
  cursor: pointer;
  padding: .75rem;
  width: 15vw;
  border-radius: 6px;
  font-size: 15px;
  color: white;
  letter-spacing: .45px;
  text-transform: uppercase;
  min-width: 140px;
  font-weight: 600;
  background: transparent;
  max-width: 200px;
  background: #080633;
  transition: .2s all;
}
button:hover{
  background: #080633;
  color: white;
  transition: .2s all;
}
button:active{
  outline: none;
  transition: .2s all;
}
button:focus {
  background: #0a0829;
  border: 2px solid #0a0829;
  color: white;
  outline: none;
  transition: .2s all;
}
</style>
