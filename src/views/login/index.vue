<!--
 * @Descripttion: 
 * @Author: dj
 * @Date: 2020-06-26 02:26:47
--> 
<template>
    <div class="login">
        <van-nav-bar title="登录" />

        <ValidationObserver ref="form">
            <ValidationProvider name="手机号" rules="required|mobilezzz">
                <van-field 
                v-model="user.mobile"
                type="tel"
                label="手机号"
                placeholder="请输入手机号"
                clearable
                required />
                <!-- v-slot="{ errors }" <span>{{ errors[0] }}</span> -->
            </ValidationProvider>
            
            <ValidationProvider name="验证码" rules="required|codezzz">
                <van-field 
                v-model="user.code"
                type="password"
                label="验证码"
                placeholder="请输入验证码"
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
            </ValidationProvider>

        </ValidationObserver>

        <div class="btn">
            <van-button type="info" @click="login">登录</van-button><!-- {{$store.state.user}} -->
        </div>
    </div>
</template>

<script>
    import { login, sendSmsCode } from '@/api/user'
    import { validate } from 'vee-validate'
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
                // 表单验证***********
                const success = await this.$refs.form.validate()
                if (!success) {
                    setTimeout(()=>{
                        const { errors } = this.$refs.form
                        let item = Object.values(errors).find(item => item[0]) // 注意find写法
                        this.$toast(item[0]); // toast文字提示必填
                    }, 100)
                    return
                }
                // this.$toast.allowMultiple() // 允许多个toast
                this.$toast.loading({  // toast---loading提示
                    duration: 0, // 持续展示 toast
                    message: '登录中...',
                    forbidClick: true,
                });
                try {
                    let res = await login(this.user)
                    this.$store.commit('setUser', res.data.data)
                    this.$router.push('/')
                    this.$toast.success('登录成功');  // toast成功提示
                } catch (error) {
                    // console.log('登录失败', error);
                    this.$toast.fail('登录失败');  // toast失败提示
                }
                
            },
           async send() {
               const { mobile } = this.user
                // 单独定义的验证某一个表单的验证，验证手机号
                const result = await validate(mobile, 'required|mobilezzz', {
                    name: '手机号'
                })
                if (!result.valid) {
                    this.$toast(result.errors[0])
                    return
                }
                try {
                    let res = await sendSmsCode(this.user.mobile)
                    this.showTime = true
                    this.start()
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