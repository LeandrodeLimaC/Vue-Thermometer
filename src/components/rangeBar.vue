<template>
    <input :style="cssVars" class="range-slider__range slider" id="rangeBar" v-model="Value" type="range" v-on:input="sendValue()">
</template>

<script>
export default {
    props: {
        returnBar_Value: Number,
        bg_color: String
    },
    data(){
        return{
            Value: 0,
        }
    },
    methods:{
        sendValue(){
            this.$emit("Bar_Value", Number(this.Value));
            console.log(this.bg_color);
        }
    },
    computed: {
    cssVars() {
      return {
        '--bg-color': this.bg_color,
      }
    }
  }
}
</script>

<style scoped>
#rangeBar{
    transform: translateX(90%) rotateZ(270deg);
    position: absolute;
    align-self: center;
    width: 24vh;
    right: 0;
}
.range-slider__range {
  -webkit-appearance: none;
  width: calc(100% - (73px));
  height: 10px;
  border-radius: 5px;
  background: #ffffffe6;
  outline: none;
  padding: 0;
  margin: 0;
}
.range-slider__range::-webkit-slider-thumb {
  -webkit-appearance: none;
          appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background: rgba(0,13,51,1);
  cursor: pointer;
  border: 4px solid var(--bg-color);
  -webkit-transition: background .15s ease-in-out;
  transition: background .15s ease-in-out;
}
.range-slider__range::-webkit-slider-thumb:hover {
  background: rgba(253,0,107,1);
}
.range-slider__range:active::-webkit-slider-thumb {
  border: none
}
.range-slider__range::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border: 0;
  border-radius: 40%;
  background: rgba(0,13,51,1);
  cursor: pointer;
  -moz-transition: background .15s ease-in-out;
  transition: background .15s ease-in-out;
}
.range-slider__range::-moz-range-thumb:hover {
  background: rgba(216,37,162,1);
}
.range-slider__range:active::-moz-range-thumb {
  background: rgba(216,37,162,1);
}
</style>