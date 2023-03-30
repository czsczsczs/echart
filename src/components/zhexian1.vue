<!-- 模板 -->
<!-- <script setup>
import * as echarts from 'echarts';
import { onMounted,onUnmounted } from 'vue';
let myecharts3=echarts
onMounted(()=>{
    chart3()
})
onUnmounted(()=>{
    myecharts3.dispose
})
const chart3=()=>{
    var myChartr3=myecharts3.init(document.getElementById('bar3'))
    var option={

    }
    myChartr3.setOption(option)
    window.onresize=()=>{
        myChartr3.resize()
    }
}
</script>
<template>
<div id="bar3"></div>
</template> -->
<script setup>
import * as echarts from 'echarts';
import { onMounted, onUnmounted, defineProps, onBeforeUnmount, toRaw, reactive } from 'vue';
let myecharts3 = echarts;

const yeardata = reactive([
    {
        year: '2021',
        data: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        ],
    },
    {
        year: '2022',
        data: [
            [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
            [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
        ],
    },
]);
var option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            right: '2%',
            textStyle: {
                color: '#4c9bfd',
                fontSize: 10,
            },
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '5%',
            bottom: '3%',
            show: true,
            borderColor: '#012f4a',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                color: '#4c9bfd',
                fontSize: 8,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: [
                '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月',
            ],
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#4c9bfd',
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a',
                },
            },
        },
        series: [
            {
                name: '新增粉丝',
                type: 'line',

                smooth: true,
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            },
            {
                name: '新增游客',
                type: 'line',

                smooth: true,
                data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
            },
        ],
    };

onMounted(() => {
    chart3();
});
onUnmounted(() => {
    myecharts3.dispose;
});
const chart3 = () => {
    var myChartr3 = myecharts3.init(document.getElementById('line3'));
    
    myChartr3.setOption(option);
    window.onresize = () => {
        myChartr3.resize();
    };
    
    // 实时数据展示 websocket
    // 连接服务器 先建立连接，需要客户端和服务器端进行握手连接，连接成功后才能相互通信
    var ws=new WebSocket("ws://127.0.0.1:8090")
    ws.onopen=function(){
        // alert('连接成功')
    }
    ws.onerror=function(){
        // alert('连接失败')
    }
    ws.onmessage=function(data){
        let msg=JSON.parse(data.data)
        option.series[0].data=msg.message
        myChartr3.setOption(option);//重新渲染数据，上面那条一样的就得注释掉了
    }
};
const click2021 = () => {
        option.series[0].data = toRaw(yeardata[0].data)[0];
        option.series[1].data = toRaw(yeardata[0].data)[1];
        console.log("2021",option.series)
        chart3()
    };
    const click2022 = () => {
        option.series[0].data = toRaw(yeardata[1].data)[0];
        option.series[1].data = toRaw(yeardata[1].data)[1];
        console.log("2022",option.series)
        chart3()
    };
</script>
<template>
    <div>
        <h2>
                        折线图-人员变化
                        <div class="aposition">
                            <a href="javascript:" @click="click2021">2021</a>
                            <span style="font-size: 0.1017rem; color: white">/</span>
                            <a href="javascript:" @click="click2022">2022</a>
                        </div>
                    </h2>
        <div id="line3" class="chart"></div>
    </div>

</template>
<style scoped>
.chart {
    height: 160px;
}
</style>