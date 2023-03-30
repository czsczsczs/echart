<script setup>
import * as echarts from 'echarts';
import { onMounted, onUnmounted, defineProps } from 'vue';
let mychart = echarts;
const props = defineProps(['width', 'height']);

onMounted(() => {
    chart();
});
onUnmounted(() => {
    mychart.dispose;
});
const chart = () => {
    var myChart = mychart.init(document.getElementById('bar1'));
    var option = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            data: [
                '旅游行业',
                '教育行业',
                '游戏行业',
                '医疗行业',
                '电商行业',
                '社交行业',
                '金融行业',
            ],
            axisLabel: {
                color: 'rgba(255,255,255,0.4)',
                fontSize: 10,
            },
            axisLine: {
                show: false,
            },
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.4)',
                    width: 2,
                },
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)',
                },
            },
        },
        series: [
            {
                
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                barWidth: '35%',
                itemStyle: {
                    borderRadius: [3, 3, 0, 0],
                },
            },
        ],
    };
    myChart.setOption(option);
    // 图标跟随屏幕变化自适应
    window.onresize = () => {
        myChart.resize();
    };
};
</script>
<template>
    <!-- <div id="main1" :style="{ width: props.width, height: props.height }"></div> -->
    <div id="bar1"></div>
</template>
