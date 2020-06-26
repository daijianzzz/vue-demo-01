<!--
 * @Descripttion: 
 * @Author: dj
 * @Date: 2020-06-26 18:17:46
--> 
<template>
    <div class="tabbar-container">
        <!-- 子路由出口 -->
        <router-view />

        <!-- tabbar -->
        <van-tabbar    van-tabbar route>
            <van-tabbar-item replace to="/" icon="home-o">
                首页
            </van-tabbar-item>
            <van-tabbar-item replace to="/qu" icon="comment-o">
                问答
            </van-tabbar-item>
            <van-tabbar-item replace to="/radio" icon="video-o">
                视频
            </van-tabbar-item>
            <van-tabbar-item replace to="/my" icon="user-o">
                {{$store.state.user ? '我的' : '未登录'}}
            </van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0,
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>