<script setup>
import "echarts";
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

provide(THEME_KEY, 'dark');

const option = ref({
  title: {
    text: 'Traffic Sources',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
});


</script>

<template>
   
  <main class="w-screen h-screen flex flex-col items-center">
    <h1 class="mt-12 text-4xl">Discover</h1>
    <span class="mt-3 w-1/4 justify-center">
      <input type="text" name="discover" id="" class="h-10 w-full border-2 p-3.5 border-indigo-500 rounded-md">
    </span>

    <span class="w-1/3 mt-4">
      <button class="text-white w-50 bg-indigo-500 rounded-md"><img src="/Users/josuesalazaku/Developer/Projects/Data-Visualisation-app/Client/src/assets/import-svgrepo-com (1).svg" class="w-10 px-2 py-2" alt="">
    </button>
</span>


  <v-chart class="chart" :option="option" autoresize />
  </main>
</template>

<style scoped>
.chart {
  height: 500px;
}
</style>