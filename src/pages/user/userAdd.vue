<template>
    <div>
        <div class="header-name">
            用户管理
        </div>
        <div class="btn-lists">
            <el-button type="primary" @click="onAdd">新增</el-button>
            <el-button type="danger" @click="onDelete">批量删除</el-button>
        </div>
        <el-card>
            <el-table
                :data="tableData"
                border
                @selection-change="handleSelectionChange"
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
                tableData:[
                    {id:1,username:'超级管理员',nickname:'超级管理员',roles:[{id:1,rolename:'超级管理员'}]},
                    {id:2,username:'管理员1',nickname:'管理员1',roles:[{id:2,rolename:'管理员'}]},
                    {id:3,username:'管理员2',nickname:'管理员1',roles:[{id:2,rolename:'运营'},{id:3,rolename:'编辑'},{id:5,rolename:'普通员工'}]},
                    {id:4,username:'管理员3',nickname:'管理员1',roles:[{id:4,rolename:'运营'}]},
                    {id:5,username:'管理员4',nickname:'管理员1',roles:[{id:5,rolename:'普通员工'}]},
                ],
            }
        },
        methods:{
            onSubmit(){
                this.actForm.roles = [];
                this.roleList.forEach(item=>{
                    if(this.rolesForm.indexOf(item.rolename) != -1){
                        this.actForm.roles.push(item);
                    }
                })
                if(this.dialogTitle == "新增"){
                    setTimeout(()=>{
                        this.actForm.id = this.tableData.length+1;
                        this.tableData.push(this.actForm);
                        this.dialogVisible = false;
                        this.$message.success('新增成功');
                    },1500)
                }else{
                    setTimeout(()=>{
                        this.tableData[this.activeIndex] = this.actForm;
                        this.dialogVisible = false;
                        this.$message.success('编辑成功');
                    },1500)
                }
                
            },
            onCancel(){
                this.dialogVisible = false;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>