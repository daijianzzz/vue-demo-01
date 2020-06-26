<!--
 * @Descripttion: 
 * @Author: dj
 * @Date: 2020-06-25 20:26:56
--> 
<template>
    <div>
        qq
        <i class="iconfont icon-Audio"></i>
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>


        <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>

        <van-icon name="success" />

        <div class="rem_box">字体大小呢</div>

    </div>
</template>

<script>
    import request from '../utils/request'
    export default {
        data() {
            return {

            }
        },
        created() {
            this.getTest()
        },
        methods: {
            getTest() {
                request.get('/qqqq').then(res => {
                    console.log('res---', res);
                }).catch(err => {
                    console.log('err', err);
                    
                })
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.rem_box{
    width: 187.5px;
    height: 100px;
    background-color: #abcdef;
    font-size: 16px;
}

</style>