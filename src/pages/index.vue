<template>
    <div>
        首页
    </div>
</template>

<script>
    import mixin from '@/mixin/mixin'
    import storage from '@/mixin/storage'


    export default {
        mixins: [mixin, storage],
        mounted() {
            // console.log(this.getJsonCookie('userInfo'))
        }
    }
</script>

<style scoped>
    
</style>