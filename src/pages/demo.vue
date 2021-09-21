<template>
    <div>
        <div class="header-name">
            DEMO TITLE
        </div>
        <el-card>
            <el-collapse v-model="activeNames" class="search-form">
                <el-collapse-item title="筛选条件" name="1">
                    <div class="form-contain">
                        <el-form :inline="true" :model="searchForm" class="search-form-inline"  label-width="100px">
                            <el-col :span="8">
                                <el-form-item label="用户名：">
                                    <el-input v-model="searchForm.username" placeholder="用户名"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-form>
                        <div class="form-submit">
                            <el-button type="primary" @click="onSearch">查询</el-button>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </el-card>
        <div class="btn-lists">
            <el-button type="primary" @click="onAdd">新增</el-button>
            <el-button type="danger" @click="onDelete">批量删除</el-button>
        </div>
        <el-card>
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column type="selection"  width="55"></el-table-column>
                <el-table-column prop="id"  label="ID"></el-table-column>
                <el-table-column prop="username" label="用户名称" ></el-table-column>
                <el-table-column prop="nickname" label="昵称" ></el-table-column>
                <el-table-column label="角色">
                    <template slot-scope="scope">
                        <el-tag
                            v-for="item in scope.row.roles"
                            :key="item.id"
                            effect="dark">
                            {{ item.rolename }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click="handleEdit(scope.$index,scope.row)" type="text" size="small">编辑</el-button>
                        <el-button @click="handleDelete(scope.$index,scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    export default {
        components: { },
        data() {
            return {
                activeNames: ['1'],
                searchForm: {
                    province: '',
                    username: ''
                },
                tableData: []
            }
        },
        methods:{
            onSearch(){
                console.log(this.searchForm)
            },
            onAdd(){
                
            },
            onDelete(){
                
            },
            // handleEdit(index,row){
                
            // },
            handleDelete(){
                this.$confirm('此操作将删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    // 
                }).catch(() => {
                          
                });
            },
            onSubmit(){
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>