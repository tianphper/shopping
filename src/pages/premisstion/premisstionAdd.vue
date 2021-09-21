<template>
    <div>
        <div class="header-name">
            用户管理
        </div>
        <div class="btn-lists">
            <el-button type="primary">新增</el-button>
        </div>
        <el-card>
            <el-tabs type="border-card">
                <el-tab-pane label="用户管理" @tab-click="handleClick">
                    <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                        <el-table-column type="selection"  width="55"></el-table-column>
                        <el-table-column prop="id"  label="模块" width="100"></el-table-column>
                        <el-table-column prop="username" label="操作列表" >
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox label="复选框 A"></el-checkbox>
                                <el-checkbox label="复选框 B"></el-checkbox>
                                <el-checkbox label="复选框 C"></el-checkbox>
                                <el-checkbox label="禁用" disabled></el-checkbox>
                                <el-checkbox label="选中且禁用" disabled></el-checkbox>
                            </el-checkbox-group>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
            </el-tabs>
            
        </el-card>
    </div>
</template>

<script>
    export default {
        components: { },
        data() {
            return {
                checkList: ['选中且禁用','复选框 A'],
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
            handleClick(tab, event) {
                console.log(tab, event);
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

</style>