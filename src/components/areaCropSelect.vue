<template>
    <div>
        <el-col :span="8">
            <el-form-item label="省份：">
                <el-select v-model="province" clearable :disabled="disabledProvince" placeholder="请选择省份">
                    <el-option v-for="item in region" :key="item.code" :label="item.name" :value="item.code"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :span="8" v-if="isShowCity">
            <el-form-item label="城市：">
                <el-select v-model="city" clearable :disabled="disabledCity" placeholder="请选择城市">
                    <el-option v-for="item in cityLists" :key="item.code" :label="item.name" :value="item.code"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :span="8" v-if="isShowCity && isShowArea">
            <el-form-item label="地区：">
                <el-select v-model="area" clearable :disabled="disabledArea" placeholder="请选择地区">
                    <el-option v-for="item in areaLists" :key="item.code" :label="item.name" :value="item.code"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
    </div>
</template>

<script>
    // 省市区三级联动
    import region from '@/assets/json/region.json'
    export default {
        props: {
            provinceFirst: {
                type: String,
                default: ''
            },
            cityFirst: {
                type: String,
                default: ''
            },
            areaFirst: {
                type: String,
                default: ''
            },
            isShowCity: { // 是否显示城市
                type: Boolean,
                default: true
            },
            isShowArea: { // 是否显示区
                type: Boolean,
                default: true
            },
            disabledProvince: { // 是否禁用区
                type: Boolean,
                default: false
            },
            disabledCity: { // 是否禁用区
                type: Boolean,
                default: false
            },
            disabledArea: { // 是否禁用区
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                region,
                cityLists: [],
                areaLists: [],
                province: '',
                city: '',
                area: ''
            }
        },
        watch: {
            province(val) {
                if (val) {
                    this.cityLists = this.region.find(item => item.code === val).children;
                } else {
                    this.cityLists =[];
                }
                this.city = '';
                this.$emit('update:provinceFirst', val);
            },
            city(val) {
                if (val) {
                    this.areaLists = this.cityLists.find(item => item.code === val).children;
                } else {
                    this.areaLists = [];
                }
                this.area = '';
                this.$emit('update:cityFirst', val);
            },
            area(val) {
                this.$emit('update:areaFirst', val);
            }
        },
        created() {
            this.province = this.provinceFirst;
        }
    }
</script>

<style lang="sass" scoped>

</style>