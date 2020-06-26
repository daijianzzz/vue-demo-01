<!--
 * @Descripttion: 
 * @Author: dj
 * @Date: 2020-06-26 02:26:47
--> 
<template>
    <div class="login">
        <van-nav-bar title="登录" />

        <van-cell-group>
            <van-field 
            v-model="user.mobile"
            type="tel"
            label="手机号"
            placeholder="请输入手机号"
            clearable
            required />

            <van-field 
            v-model="user.code"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required 
            >
                <template #button>
                    <van-count-down 
                    ref="countDown"
                    :time="time"
                    format="sss"
                    :auto-start="false"
                    @finish="finish"
                     v-show="showTime" />
                    <van-button size="small" type="primary" @click="send" v-show="!showTime">发送验证码</van-button>
                </template>
            </van-field>
        </van-cell-group>

        <div class="btn">
            <van-button type="info" @click="login">登录</van-button>
        </div>
    </div>
</template>

<script>
    import { login, sendSmsCode } from '@/api/user'
    export default {
        name: 'login',
        data() {
            return {
                showTime: false,
                time: 5 * 1000,
                user: {
                    mobile: '',
                    code: ''
                }
            }
        },
        methods: {
            // 13911111111 246810
            async login() {
                // this.$toast.allowMultiple() // 允许多个toast
                this.$toast.loading({
                    duration: 0, // 持续展示 toast
                    message: '登录中...',
                    forbidClick: true,
                });
                try {
                    let res = await login(this.user)
                    console.log(2222, res);
                    this.$toast.success('登录成功');
                } catch (error) {
                    // console.log('登录失败', error);
                    this.$toast.fail('登录失败');
                }
                
            },
           async send() {
                try {
                    let res = await sendSmsCode(this.user.mobile)
                    this.showTime = true
                    this.start()
                    console.log(2222, res);
                } catch (error) {
                    this.$toast.fail('发送失败');
                }
                
            },
            start() {
                this.$refs.countDown.start();
            },
            finish() {
                this.showTime = false
                this.reset()
            },
            reset() {
                this.$refs.countDown.reset();
            },
        }
        
    }
</script>

<style lang="scss" scoped>
.login{
    .btn{
        padding: 20px 10px;
        .van-button{
            width: 100%;
        }
    }
}

</style>