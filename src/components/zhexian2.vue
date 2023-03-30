<script setup>
import * as echarts from 'echarts';
import { onMounted, onUnmounted } from 'vue';
let myecharts4 = echarts;
onMounted(() => {
    chart4();
});
onUnmounted(() => {
    myecharts4.dispose;
});
const chart4 = () => {
    var myChartr4 = myecharts4.init(document.getElementById('line4'));
    var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: 0,
            data: ['Email', 'Union Ads'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: 12,
            },
        },
        toolbox: {
            feature: {
                saveAsImage: {},
            },
        },
        grid: {
            left: '10',
            top: '30',
            right: '10',
            bottom: '10',
            containLabel: true,
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
                axisLabel: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12,
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)',
                    },
                },
            },
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.1)',
                    },
                },
                axisLabel: {
                    color: 'rgba(255,255,255,.6)',
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)',
                    },
                },
            },
        ],
        series: [
            {
                name: 'Email',
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: '#0184d9',
                    width: 2,
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(1,132,213,0.4)', // 0% 处的颜色
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(1,132,213,0.1)', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                        
                    },
                    shadowColor :"rgba(0,0,0,0.1)"
                },
                symbol:'circle',
                symbolSize:8,
                showSymbol:false,
                itemStyle:{
                    color:'#0184d5',
                    borderColor:'rgba(221,220,107,.1)',
                    borderWidth:8
                },
                emphasis: {
                    focus: 'series',
                },
                data: [30,40,30,40,30,40,30,60,20,40,30,40,30,40,30,40,30,60,20,40,30,40,30,40,30,40,20,60,50,40],
            },
            {
                name: 'Union Ads',
                type: 'line',

                smooth: true,
                lineStyle: {
                    color: '#00d887',
                    width: 2,
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(0,216,135,0.4)', // 0% 处的颜色
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(0,216,135,0.1)', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                        
                    },
                    shadowColor :"rgba(0,0,0,0.1)"
                },
                symbol:'circle',
                symbolSize:8,
                showSymbol:false,
                itemStyle:{
                    color:'#00d887',
                    borderColor:'rgba(221,220,107,.1)',
                    borderWidth:8
                },
                emphasis: {
                    focus: 'series',
                },
                data: [130,10,20,40,30,40,80,60,20,40,90,40,20,140,30,40,130,20,20,40,80,70,30,40,30,120,20,99,50,20],
            },
        ],
    };
    myChartr4.setOption(option);
    window.onresize = () => {
        myChartr4.resize();
    };
};
</script>
<template>
    <div id="line4"></div>
</template>
