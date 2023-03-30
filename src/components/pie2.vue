<script setup>
import * as echarts from 'echarts';
import { onMounted, onUnmounted } from 'vue';
let myecharts3 = echarts;
onMounted(() => {
    chart3();
});
onUnmounted(() => {
    myecharts3.dispose;
});
const chart3 = () => {
    var myChartr3 = myecharts3.init(document.getElementById('bar3'));
    var option = {
        legend: {
            top: 'bottom',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: 12,
            },
        },

        series: [
            {
                name: '地区分布',
                type: 'pie',
                radius: [15, 45],
                center: ['50%', '35%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 3,
                },
                label: {
                    fontSize: 10,
                },
                labelLine: {
                    length: 6,
                    length2: 8,
                },
                data: [
                    { value: 40, name: '云南' },
                    { value: 38, name: '北京' },
                    { value: 32, name: '山东' },
                    { value: 30, name: '河北' },
                    { value: 28, name: '江苏' },
                    { value: 26, name: '浙江' },
                    { value: 22, name: '四川' },
                    { value: 18, name: '湖北' },
                ],
            },
        ],
    };
    myChartr3.setOption(option);
    window.onresize = () => {
        myChartr3.resize();
    };
};
</script>
<template>
    <div id="bar3"></div>
</template>
