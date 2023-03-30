<script setup>
import axios from 'axios';
import { ref,reactive,onMounted } from 'vue';

const data = reactive({
    test:'看看',
    info: '校园同学是谁',
    res: '',
    api: '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',
});
const ask = () => {
    console.log('点击率');
    data.res = '请求中';
    axios
        .post(
            'https://api.openai.com/v1/completions',
            {
                model: 'text-davinci-003',
                prompt: data.info,
                max_tokens: 2048,
            },
            {
                // 'Bearer '空格问题阿，Bearer后面没有那个空格就401，坑
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + data.api,
                },
            }
        )
        .then(response => {
            console.log(response);
            data.res = response.data.choices[0].text;
        });
};
</script>
<template>
   
    <input type="text" v-model.trim="data.test">{{ data.test }}
    <input type="text" :value="data.test">
    <div class="container">
        <div class="room">
            <textarea v-model="data.info" name="" id="" cols="30" rows="10"></textarea>
            <button @click="ask" class="btu">发送</button>
        </div>
        <div class="miss">
            <textarea name="" id="" cols="30" rows="10">{{ data.res }}</textarea>
        </div>
    </div>
    <div class="gg">
        <div class="red">1</div>
        <div class="red">1</div>
        <div class="red">1</div>
        <div class="red">1</div>
        <div class="red">1</div>
        <div class="red">1</div>
        <div class="red">1</div>
        <div class="red">1</div>
        <div class="red">1</div>
        <div class="red">1</div>
        <div class="red">1</div>
        <div class="red">1</div>
    </div>
</template>
<style lang="scss">
$side:right;
button{
    border: $blue-border;
    @include hunhe;
    @include txt(light)
}
.container{
    width: 100%;
    border:$blue-border;
    @extend button;
    .room{
        border: {
            width: 2px;
            style:solid;
            color:red;
        }
    }
    .miss{
        width: 100%;
        float: $side;
        border-#{$side}:4px solid green;
    }
    &:hover{
        border: 1px solid yellow{
            left:0px;
            right:0px;
        }
    }
}
.room{
    @import './assets/css/b.scss';
}
.gg{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    width: 100vw;
    grid-gap: 10px;
}
.red{
    border: 1px solid green;
}
@media screen and (max-width:300px){
    .gg{
        grid-template-columns: repeat(1,1fr);
    }
}
</style>
