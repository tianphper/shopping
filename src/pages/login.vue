<template>
    <div class="login">
        <div class="login-form">
            <div class="login-header">
                <p>登录</p>
            </div>
            <el-input
                placeholder="请输入用户名"
                suffix-icon="fa fa-user"
                v-model="form.userName"
                style="margin-bottom: 18px"
            >
            </el-input>

            <el-input
                placeholder="请输入密码"
                suffix-icon="fa fa-keyboard-o"
                v-model="form.passWord"
                type="password"
                style="margin-bottom: 18px"
                @keyup.native.enter="login"
            >
            </el-input>

            <el-button
                type="primary" :loading="loginLoading"
                style="width: 100%;margin-bottom: 18px"
                @click.native="login"
            >
            {{ $t('btn').login_btn }}
            </el-button>
        </div>
    </div>
</template>


<script>
    import mixin from '@/mixin/mixin'
    import storage from '@/mixin/storage'
    import * as loginService from '@/services/loginService'
    import { LOGIN_USER_INFO } from '@/common/constantValues'

    export default {
        mixins: [mixin, storage],
        data() {
            return {
                form: {
                    userName: 'admin',
                    passWord: '123456'
                },
                loginLoading: false
            }
        },
        mounted() {},
        methods: {
            login () {
                this.loginLoading = true
                let {userName, passWord} = this.form
                loginService.login({userName, passWord}).then(res => {
                    this.log(res)
                    if(res.success){
                        this.setCookie(LOGIN_USER_INFO, res.results, 1000 * 60 * 60); // 过期一小时
                        this.$router.replace('/')
                    } else {
                        this.$message.error(res.results)
                    }
                    this.loginLoading = false
                }).catch(err => {
                    console.log(err)
                    this.loginLoading = false
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #e4e5e6;
    .login-form{
        width: 375px;
        height: 250px;
        padding: 30px;
        background-color: white;
        text-align: left;
        border-radius: 4px;
        position: relative;
        margin-left: 0;
        margin-right: 0;
        zoom: 1;
        display: block;
        .login-header{
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 20px;
        }
    }
}
</style>