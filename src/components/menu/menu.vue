<template>
    <el-menu
        class="nav-menu"
        :default-active="active"
        router
    >   
        <menuTree :menuData="menuData"></menuTree>
    </el-menu>
</template>

<script>
    import menuTree from './menuTree'
    import * as authHelper from '@/auth/authHelper'

    export default {
        components: { menuTree },
        data(){
            return {
                active: '', // 默认打开的菜单
                menuData: [],
                authMenu: [],
                forData: [] // menuData格式化
            }
        },
        created() {
            this.menuData =  authHelper.getAuthMenu();
            console.log('菜单初始化', this.menuData)
           
            this.setMenuActive();
        },
        methods: {
            // 打开menu当前的active
            setMenuActive(){
                this.formatterArray(this.menuData);
                let activeObj = this.forData.find(item => item.url === this.$route.path);
                
                if (activeObj) {
                    this.active = activeObj.index;
                } else {
                    this.active = '1';
                }
            },
            // menuData多维数组转成一维数组
            formatterArray(arr) {
                if (Array.isArray(arr)) {
                    arr.forEach(item => {
                        this.forData.push(item);
                        if (item.children && Array.isArray(item.children)) {
                            this.formatterArray(item.children)
                        }
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>   
    .nav-menu{
        background-color: rgb(34, 45, 50);
        border-right: none;
        /deep/ .el-menu-item-group__title{
            padding: 0 !important;
        }
        /deep/ .el-submenu__title {
            i {
                color: white;
            }
            span {
                color: white;
            }
            &:hover{
                background-color: rgb(34, 45, 50);
            }
        }
        /deep/ .el-menu-item {
            background-color: rgb(34, 45, 50);
            i {
                color: white;
            }
            span {
                color: white;
            }
            &.is-active span,&.is-active i{
                color: #f36c28;
            }
        }
    }
    
</style>