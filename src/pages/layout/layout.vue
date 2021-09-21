<template>
    <div v-if="isFullScreen">
        <router-view></router-view>
    </div>
    <el-container v-else>
        <el-aside :class="isCollapse ? 'left-aside' : 'min-aside'">
            <div class="app-title">{{ $t('app_title') }}</div>
            <nav-menu ></nav-menu>
        </el-aside>
        <el-container>
            <el-header>
                <div class="app-header">
                    <div class="left-box">
                        <i class="el-icon-menu" @click="handleCollapse"></i>
                    </div>
                    <div class="right-box">
                        <el-dropdown @command="logout()">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>退出系统</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </el-header>
            <el-main>
                <transition name="component-fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-main>
            <el-footer>
                <div class="app-footer">
                    <div class="left-box">

                    </div>
                    <div class="right-box">
                        <a target="blank" href="https://tianphper.github.io/vue-admin/">github @version 1.00</a>
                    </div>
                </div>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
    import NavMenu from '@/components/menu/menu.vue'
    import storage from '@/mixin/storage'
    import { LOGIN_USER_INFO } from '@/common/constantValues'
    import { mapState } from 'vuex'

    export default {
        components: { NavMenu },
        mixins: [storage],
        data() {
            return {
                isCollapse: true
            }
        },
        computed: {
            ...mapState(['isFullScreen'])
        },
        created() {
            if (document.body.clientWidth < 900) {
                this.isCollapse = false;
            }
        },
        methods: {
            handleCollapse() {
                this.isCollapse = !this.isCollapse;
            },
            logout() {
                this.removeCookie(LOGIN_USER_INFO)
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped lang="scss">
    .el-container {
        min-height: 100vh;
    }
    .el-aside {
        transition:width 0.5s;
        -webkit-transition:width 0.5s; /* Safari */
        min-height: calc(100% - 50px);
        background-color: rgb(34, 45, 50);
    }
    .left-aside {
        width: 250px !important;
    }
    .min-aside {
        width: 0 !important;
    }
    .el-header {
        padding: 0;
        height: 50px !important;
    }
    .el-main {
        padding: 10px;
        background-color: #ecf0f5;
    }
    .el-footer {
        height: 50px !important;
    }
    .app-title {
        color: white;
        font-size: 14px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #f36c28;
        border-right: 1px solid white;
    }
    .app-header {
        padding: 0 20px;
        height: 50px;
        background-color: #f36c28;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left-box {
            i {
                cursor: pointer;
                color: white;
                font-size: 16px;
            }
        }
        .right-box {
            .el-icon-arrow-down {
                color: white;
            }
        }
    }
    .app-footer {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left-box {
            color: white;
            font-size: 16px;
        }
        .right-box {
            a {
                color: #f36c28;
                font-size: 16px;
            }
        }
    }
    // 
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active for below version 2.1.8 */ {
        opacity: 0;
    }
</style>