<template>
    <div>
        <div class="header-name">
            岗位
        </div>
        <el-card >
            <el-form :inline="true" :model="searchForm" class="demo-form-inline">
                <el-form-item label="用户名">
                    <el-input v-model="searchForm.username" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSearch">查询</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card >
            <el-button type="primary" @click="onAdd">新增</el-button>
            <el-button type="danger" @click="onDelete">批量删除</el-button>
            <div class="space"></div>
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

        <el-dialog
            :title="dialogTitle"
            :visible.sync="dialogVisible"
            width="60%">
            <el-form  :model="actForm" >
                <el-form-item label="用户名">
                    <el-input v-model="actForm.username" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input v-model="actForm.nickname" placeholder="昵称"></el-input>
                </el-form-item>
                <el-form-item label="角色">
                    <el-checkbox-group v-model="rolesForm">
                        <el-checkbox v-for="(item,key) in roleList"  :key="key" :label="item.rolename" name="type" border></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button @click="onCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchForm: {},
                tableData:[
                    {id:1,username:'超级管理员',nickname:'超级管理员',roles:[{id:1,rolename:'超级管理员'}]},
                    {id:2,username:'管理员1',nickname:'管理员1',roles:[{id:2,rolename:'管理员'}]},
                    {id:3,username:'管理员2',nickname:'管理员1',roles:[{id:2,rolename:'运营'},{id:3,rolename:'编辑'},{id:5,rolename:'普通员工'}]},
                    {id:4,username:'管理员3',nickname:'管理员1',roles:[{id:4,rolename:'运营'}]},
                    {id:5,username:'管理员4',nickname:'管理员1',roles:[{id:5,rolename:'普通员工'}]},
                ],
                roleList:[
                    {id:1,rolename:'超级管理员'},
                    {id:2,rolename:'管理员'},
                    {id:3,rolename:'编辑'},   
                    {id:4,rolename:'运营'},
                    {id:5,rolename:'普通员工'}
                ],
                multipleSelection:[],
                dialogVisible:false,
                dialogTitle:'新增',
                actForm:{},
                rolesForm:[],
                activeIndex:0,
            }
        },
        methods:{
            onSearch(){
                
            },
            handleSelectionChange(val){
                this.multipleSelection = [];
                if(val.length != 0){
                    val.forEach(item=>{
                        this.multipleSelection.push(item.id);
                    })
                }
                
            },
            onAdd(){
                this.dialogVisible = true;
                this.dialogTitle = "新增";
                this.actForm = [];
            },
            onDelete(){
                let {multipleSelection,tableData} = this;
                if(multipleSelection.length == 0){
                    return ;
                }
                this.$confirm('批量删除数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let afterData = [];
                    tableData.forEach(item => {
                        if(multipleSelection.indexOf(item.id) == -1){
                            afterData.push(item);
                        }
                    })
                    this.tableData = afterData;
                    this.multipleSelection = [];
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                          
                });
            },
            handleEdit(index,row){
                this.dialogVisible = true;
                this.dialogTitle = "编辑";
                this.actForm = row;
                this.activeIndex = index;
                //
                row.roles.forEach(item=>{
                    this.rolesForm.push(item.rolename)
                })
            },
            handleDelete(index){
                this.$confirm('此操作将删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.tableData.splice(index,1);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                          
                });
            },
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
.space{
    height: 25px;
}
.cell .el-tag:not(:first-child){
    margin-left: 10px;
}
</style>