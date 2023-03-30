<script setup>
import * as echarts from 'echarts';
import { onMounted, onUnmounted } from 'vue';
let pie = echarts;
onMounted(() => {
    chart3();
});
onUnmounted(() => {
    pie.dispose;
});
const chart3 = () => {
    var myChartr5 = pie.init(document.getElementById('pie'));
    var option = {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            bottom: '0%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: 12,
            },
        },
        series: [
            {
                top: 0,
                bottom: 0,
                center: ['50%', '35%'],
                name: '年龄分布',
                type: 'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 5,
                    borderColor: '#fff',
                    borderWidth: 1,
                },
                label: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 10,
                        fontWeight: 'bold',
                    },
                },
                labelLine: {
                    show: false,
                },
                color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de'],
                data: [
                    { value: 1, name: '0岁以下' },
                    { value: 4, name: '20-29岁' },
                    { value: 2, name: '30-39岁' },
                    { value: 2, name: '40-49岁' },
                    { value: 1, name: '50岁以上' },
                ],
            },
        ],
    };
    myChartr5.setOption(option);
    window.onresize = () => {
        myChartr5.resize();
    };
};
</script>
<template>
    <div id="pie"></div>
</template>
