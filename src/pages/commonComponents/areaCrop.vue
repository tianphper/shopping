<template>
    <div>
        <div class="header-name">
            三级联动
        </div>
        <el-card>
            <el-collapse v-model="activeNames" class="search-form">
                <el-collapse-item title="筛选条件" name="1">
                    <div class="form-contain">
                        <el-form :inline="true" :model="searchForm" class="search-form-inline"  label-width="100px">
                            <areaCropSelect 
                                :provinceFirst.sync="searchForm.province"
                                :cityFirst.sync="searchForm.city"
                                :areaFirst.sync="searchForm.area"
                                :isShowCity="isShowCity"
                                :isShowArea="isShowArea"
                                :disabledProvince="disabledProvince"
                                :disabledCity="disabledCity"
                                :disabledArea="disabledArea"
                            >
                            </areaCropSelect>
                        </el-form>
                        <div class="form-submit">
                            <el-button type="primary" @click="onSearch">查询</el-button>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </el-card>
        <div class="btn-lists">
            <el-button type="primary" @click="changeShowCity">显示/隐藏城市</el-button>
            <el-button type="primary" @click="changeShowArea">显示/隐藏地区</el-button>
        </div>
        <div class="btn-lists">
            <el-button type="primary" @click="onDisabledProvince">是否禁用省份</el-button>
            <el-button type="primary" @click="onDisabledCity">是否禁用城市</el-button>
            <el-button type="primary" @click="onDisabledArea">是否禁用地区</el-button>
        </div>
    </div>
</template>

<script>
    import areaCropSelect from '@/components/areaCropSelect'
    export default {
        components: { areaCropSelect },
        data() {
            return {
                activeNames: ['1'],
                searchForm: {
                    province: '',
                    city: '',
                    area: '',
                },
                tableData: [],
                isShowCity: true,
                isShowArea: true,
                disabledProvince: false,
                disabledCity: false,
                disabledArea: false,
            }
        },
        methods:{
            onSearch() {
                console.log(this.searchForm)
            },
            changeShowCity() {
                this.isShowCity = !this.isShowCity;
            },
            changeShowArea() {
                this.isShowArea = !this.isShowArea;
            },
            // 禁用省份
            onDisabledProvince() {
                this.disabledProvince = !this.disabledProvince;
            },
            // 禁用城市
            onDisabledCity() {
                this.disabledCity = !this.disabledCity;
            },
            // 禁用地区
            onDisabledArea() {
                this.disabledArea = !this.disabledArea;
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>