<template>
  <div id="Thermometer" style="height:300px" >
    <svg class="thermometer-glass" xmlns="http://www.w3.org/2000/svg" width="200" height="300" viewBox="0 0 298 1097"><g transform="translate(11715 3885)"><circle cx="123" cy="123" r="123" transform="translate(-11689 -3057)" fill="#000d33"/><g transform="translate(-11715 -3951)" fill="none"><path d="M0,1014v-.286A148.759,148.759,0,0,1,58.072,895.667V156.928a90.928,90.928,0,1,1,181.857,0V895.667A148.76,148.76,0,0,1,298,1013.714V1014a149,149,0,0,1-298,0Z" stroke="none"/><path d="M 149.0004577636719 1133.999755859375 C 215.16845703125 1133.999755859375 268.9999389648438 1080.168334960938 268.9999389648438 1013.714172363281 C 268.9999389648438 976.22314453125 251.9474487304688 941.5657958984375 222.2146148681641 918.628662109375 L 210.9282836914063 909.921630859375 L 210.9282836914063 895.6671752929688 L 210.9282836914063 156.9284820556641 C 210.9282836914063 122.7808151245117 183.1476135253906 94.99964904785156 149.0004577636719 94.99964904785156 C 114.8527908325195 94.99964904785156 87.07161712646484 122.7808151245117 87.07161712646484 156.9284820556641 L 87.07161712646484 895.6672973632813 L 87.07161712646484 909.9218139648438 L 75.78528594970703 918.6288452148438 C 46.05245590209961 941.5659790039063 28.99995422363281 976.2233276367188 28.99995422363281 1014.000305175781 C 28.99995422363281 1080.168334960938 82.83195495605469 1133.999755859375 149.0004577636719 1133.999755859375 M 149.0004577636719 1162.999755859375 C 66.70978546142578 1162.999755859375 -4.57763671875e-05 1096.291015625 -4.57763671875e-05 1014.000305175781 L -4.57763671875e-05 1013.714172363281 C -4.57763671875e-05 965.6581420898438 22.75345420837402 922.9135131835938 58.07162094116211 895.6672973632813 L 58.07162094116211 156.9284820556641 C 58.07162094116211 106.710319519043 98.78128814697266 65.99964904785156 149.0004577636719 65.99964904785156 C 199.2186279296875 65.99964904785156 239.9282836914063 106.710319519043 239.9282836914063 156.9284820556641 L 239.9282836914063 895.6671752929688 C 275.2464599609375 922.913330078125 297.9999389648438 965.6581420898438 297.9999389648438 1013.714172363281 L 297.9999389648438 1014.000305175781 C 297.9999389648438 1096.291015625 231.2901153564453 1162.999755859375 149.0004577636719 1162.999755859375 Z" stroke="none" fill="#fff"/></g><line x2="51.672" transform="translate(-11634.5 -3157.5)" fill="none" stroke="#fff" stroke-width="8"/><line x2="51.672" transform="translate(-11634.5 -3357.5)" fill="none" stroke="#fff" stroke-width="8"/><line x2="30" transform="translate(-11634.5 -3257.5)" fill="none" stroke="#fff" stroke-width="8"/><line x2="30" transform="translate(-11634.5 -3457.5)" fill="none" stroke="#fff" stroke-width="8"/><line x2="51.672" transform="translate(-11634.5 -3557.5)" fill="none" stroke="#fff" stroke-width="8"/><line x2="30" transform="translate(-11634.5 -3657.5)" fill="none" stroke="#fff" stroke-width="8"/></g></svg>
    <div class="l-thermometer-inside">
        <span class="thermometer-inside" v-bind:data-bar_value="rangeBar_value + ' ºC'" v-bind:style="{height: rangeBar_value +'%'}"/>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        rangeBar_value: Number
    }
}
</script>

<style>
#Thermometer{
    height: 300px;
    display: flex;
    justify-content: center;
    position: relative;
    width: inherit;
}
.thermometer-glass{
    z-index: 10;
}
.l-thermometer-inside{
    position: absolute;
    height: 240px;
    width: 40px;
    top: 1px;
}
.thermometer-inside{
    display: flex;
    position: absolute;
    width: 40px;
    bottom: 0;
    border-radius: 55px;
    z-index: 9;
    background: linear-gradient(0deg, rgba(0,13,51,1) 5%, rgba(44,9,78,1) 19%, rgba(216,37,162,1) 60%, rgba(253,0,107,1) 100%) no-repeat bottom;
    background-size: 100% 300px;
    transition: all 0.4s ease-in-out;
}
.thermometer-inside::after{
    content: "";
    height: 0px;
    margin-left: -92px;
    border-top: 0.954545em solid transparent;
    border-bottom: 0.9545454545em solid transparent;
    border-right: 1.666666667em solid #0D0B3B;
    margin-top: 4px;
    transform: translateY(-16px);
}
.thermometer-inside::before{
    content: attr(data-bar_value);
    min-width: 60px;
    height: 20px;
    background: #0D0B3B;
    border-radius: 5px;
    padding: 10px;
    margin-left: 75px;
    transform: translateY(-16px);
}
</style>