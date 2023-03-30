<script setup>
import { ref, reactive } from 'vue';
import zhuxin1 from './components/zhuxin1.vue';
import zhuxin2 from './components/zhuxin2.vue';
import zhexian1 from './components/zhexian1.vue';
import zhexian3 from './components/zhexian2.vue';
import pie from './components/pie1.vue';
import pie2 from './components/pie2.vue';
import china from './components/china.vue';
const time = ref();
const showTime = () => {
    let dt = new Date();
    let y = dt.getFullYear();
    let mt = dt.getMonth();
    let day = dt.getDate();
    let h = dt.getHours();
    let m = dt.getMinutes();
    let s = dt.getSeconds();
    time.value = '当前时间：' + y + '年' + mt + '月' + day + '日' + h + '时' + m + '分' + s + '秒';
};
setInterval(showTime, 1000);
</script>
<template>
    <div>
        <header>
            <h1>数据可视化</h1>
            <div class="showTime">{{ time }}</div>
        </header>
        <section class="mainbox">
            <div class="column">
                <div class="panel">
                    <h2>柱形图-就业行业</h2>
                    <!-- <div class="chart"> -->
                    <!-- <zhuxin1 :width="'100%'" :height="'100%'"></zhuxin1> -->
                    <!-- </div> -->
                    <zhuxin1 class="chart"></zhuxin1>
                    <div class="panel-footer"></div>
                    
                </div>
                <div class="panel">
                    <zhexian1></zhexian1>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel">
                    <h2>饼形图-年龄分布</h2>
                    <pie class="chart"></pie>
                    <div class="panel-footer"></div>
                </div>
            </div>
            <div class="column">
                <!-- 中间模块 -->
                <div class="no">
                    <div class="no-hd">
                        <ul>
                            <li>1234</li>
                            <li>0000</li>
                        </ul>
                    </div>
                    <div class="no-bd">
                        <ul>
                            <li>前端需求人数</li>
                            <li>市场供应人数</li>
                        </ul>
                    </div>
                </div>
                <!-- 地球模块 -->
                <div class="map">
                    <div class="map1"></div>
                    <div class="map2"></div>
                    <div class="map3"></div>
                    <china
                        style="width:100%;height:530px"
                    ></china>
                </div>
            </div>
            <div class="column">
                <div class="panel bar">
                    <h2>柱形图-就业行业</h2>
                    <zhuxin2 class="chart"></zhuxin2>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel bar">
                    <h2>折线图-播放量</h2>
                    <zhexian3 class="chart"></zhexian3>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel bar">
                    <h2>柱形图-就业行业</h2>
                    <pie2 class="chart"></pie2>
                    <div class="panel-footer"></div>
                </div>
            </div>
        </section>
    </div>
</template>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    min-width: 1050px;
}
body {
    background: url('./assets/bg.jpg') no-repeat top center;
    line-height: 1.15;
}
header {
    position: relative;
    background: url('./assets/head_bg.png') no-repeat;
    background-size: 100% 100%;
    height: 0.5932rem;
}
ul {
    list-style: none;
}
/* 声明字体 */
@font-face {
    font-family: electron;
    src: url('./assets/font/DS-DIGIT.TTF');
}
header h1 {
    color: white;
    font-size: 0.125rem;
    text-align: center;
    line-height: 0.5rem;
}
header .showTime {
    position: absolute;
    top: 0;
    right: 0.0847rem;
    color: white;
    font-size: 0.1017rem;
    line-height: 0.4rem;
}
.mainbox {
    display: flex;
    min-width: 1024px;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0.0847rem 0.0847rem 0;
}
.column {
    flex: 3;
}
.column:nth-child(2) {
    flex: 5;
    margin: 0 0.0424rem 0.0424rem;
    overflow: hidden;
}
.panel {
    position: relative;
    background: url(./assets/line.png) rgba(255, 255, 255, 0.03);
    /* height: 1.6949rem; */
    padding: 0 0.0424rem 0.0678rem;
    border: 1px solid rgba(25, 186, 139, 0.17);
    margin-bottom: 0.1271rem;
}
/* .panel::after{
    display: block;
    content:"";
    clear: both;
    height: 0;
    visibility: hidden;
} */
.panel h2 {
    color: white;
    font-size: 0.1017rem;
    line-height: 2;
    font-weight: 400;
    text-align: center;
}
.panel::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
}
.panel::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
}
.panel-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
}
.panel-footer::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-bottom: 2px solid #02a6b5;
}
.panel-footer::after {
    position: absolute;
    content: '';
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-bottom: 2px solid #02a6b5;
}
.chart {
    height: 160px;
}
.no {
    background: rgba(101, 132, 226, 0.1);
    padding: 0.0085rem;
}
.no .no-hd {
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
}
.no .no-hd::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: '';
}
.no .no-hd::after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-bottom: 2px solid #02a6b5;
    content: '';
}
.no-hd ul {
    display: flex;
}
.no-hd li {
    flex: 1;
    text-align: center;
    color: #ffeb7b;
    line-height: 0.3rem;
    font-size: 0.2542rem;
    font-family: electron;
}
.no .no-bd ul {
    display: flex;
}
.no .no-bd li {
    flex: 1;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.0678rem;
    height: 0.2542rem;
    line-height: 0.2rem;
}
.no .no-hd ul li:first-child::after {
    position: absolute;
    content: '';
    height: 0.18rem;
    top: 20%;
    width: 1px;
    right: 50%;
    background-color: rgba(255, 255, 255, 0.3);
}
.map {
    position: relative;
    height: 630px;
}
.map .map1 {
    position: absolute;
    background-image: url('./assets/map.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    opacity: 0.3;
}
.map .map2 {
    position: absolute;
    background: url('./assets/lbx.png') no-repeat;
    width: 300px;
    height: 300px;
    background-size: 100% 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: rotate1 15s linear infinite;
    opacity: 0.6;
}
@keyframes rotate1 {
    form {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

.map .map3 {
    position: absolute;
    background: url('./assets/jt.png') no-repeat;
    width: 2.7966rem;
    height: 2.7966rem;
    background-size: 100% 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: rotate2 10s linear infinite;
    opacity: 0.6;
}
@keyframes rotate2 {
    form {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(-360deg);
    }
}
.aposition {
    position: absolute;
    right: 0.0847rem;
    top: 0;
}
a {
    text-decoration: none;
    color: white;
    font-size: 0.1017rem;
}
</style>
