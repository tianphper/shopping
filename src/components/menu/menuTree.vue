<template>
    <div>
        <div v-for="item in menuData" :key="item.index">
            <el-submenu :index="item.index" v-if="item.children && item.children.length > 0">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span slot="title">{{ item.title }}</span>
                </template>
                <menuTree :menuData="item.children"></menuTree>
            </el-submenu>

            <el-menu-item :index="item.index" :route="item.url" v-else-if="item.url">
                <i :class="item.icon" v-if="item.icon"></i>
                <i v-else style="margin-left: 29px;"></i>
                <span slot="title">{{ item.title }}</span>
            </el-menu-item>
        </div>
    </div>          
</template>

<script>
    import * as authHelper from '@/auth/authHelper'

    // 子组件递归调用时, 无需引入, 根据name名称直接引用
    export default {
        name: 'menuTree',
        props:{
            menuData: {
                type: Array,
                default: ()=>[]
            }
        },
        data() {
            return {
                authHelper
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>