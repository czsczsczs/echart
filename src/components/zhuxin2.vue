<script setup>
import * as echarts from 'echarts';
import { onMounted, onUnmounted } from 'vue';
let myecharts2 = echarts;
onMounted(() => {
    chart2();
});
onUnmounted(() => {
    myecharts2.dispose;
});
const chart2 = () => {
    var myChart2 = myecharts2.init(document.getElementById('bar2'));
    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
    
    var option = {
        grid: {
            left:'22%',
            right:'10%',
            top: '10%',
            bottom: '10%',
            containLabel: false,
        },
        xAxis: {
            show: false,
        },
        yAxis: [
            {
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: '#fff',
                },
                type: 'category',
                data: ['HTML5', 'CSS3', 'Javascript', 'VUE', 'NODE'],
            },
            {
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: '#fff',
                },
                data: [702, 350, 610, 793, 664],
            },
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                yAxisIndex: 1,
                itemStyle: {
                    barBorderRadius: 15,
                    color: function (params) {
                        return myColor[params.dataIndex];
                    },
                },
                barCategoryGap: 50,
                barWidth: 12,
                label: {
                    color: 'white',
                    show: true,
                    position: 'inside',
                    formatter: '{c}%',
                    fontSize:10,
                    align :'center',
                    verticalAlign :'middle'
                },
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 12,
                yAxisIndex: 0,
                data: [100, 100, 100, 100, 100],
                itemStyle: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 2,
                    barBorderRadius: 15,
                },
            },
        ],
    };
    myChart2.setOption(option);
    window.onresize = () => {
        myChart2.resize();
    };
};
</script>
<template>
    <div id="bar2"></div>
</template>
