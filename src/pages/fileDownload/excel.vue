<template>
    <div>
        <div class="header-name">
            Excel下载
        </div>
        <div class="btn-lists">
            <el-button type="primary" @click="downloadExcel">Excel下载</el-button>
            <el-button   el-button type="primary" @click="exportExcel('Excel下载')">Excel下载2</el-button>
        </div>
        <el-card>
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column type="selection"  width="55"></el-table-column>
                <el-table-column prop="id"  label="ID"></el-table-column>
                <el-table-column prop="userName" label="用户名称" ></el-table-column>
                <el-table-column prop="nickName" label="昵称" ></el-table-column>
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
            <el-table ref="report-table" :data="tableData2" style="width: 100%">
                <el-table-column prop="date" label="日期" align="center">
                </el-table-column>
                <el-table-column label="配送信息" align="center">
                    <el-table-column prop="name" label="姓名">
                    </el-table-column>
                    <el-table-column label="地址">
                        <el-table-column prop="province" label="省份">
                        </el-table-column>
                        <el-table-column prop="city" label="市区">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                        <el-table-column prop="zip" label="邮编">
                        </el-table-column>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    // 导出第二种：合并单元格 
    import FileSaver from "file-saver";
    import XLSX from "xlsx";
    export default {
        components: { },
        data() {
            return {
                activeNames: ['1'],
                tableData:[
                    {id:1,userName:'超级管理员',nickName:'超级管理员',roles:[{id:1,rolename:'超级管理员'}]},
                    {id:2,userName:'管理员1',nickName:'管理员1',roles:[{id:2,rolename:'管理员'}]},
                    {id:3,userName:'管理员2',nickName:'管理员1',roles:[{id:2,rolename:'运营'},{id:3,rolename:'编辑'},{id:5,rolename:'普通员工'}]},
                    {id:4,userName:'管理员3',nickName:'管理员1',roles:[{id:4,rolename:'运营'}]},
                    {id:5,userName:'管理员4',nickName:'管理员1',roles:[{id:5,rolename:'普通员工'}]},
                ],
                tableData2: [
                    {
                        date: "2016-05-03",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1518 弄",
                        zip: 200333,
                    },
                    {
                        date: "2016-05-02",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1518 弄",
                        zip: 200333,
                    },
                    {
                        date: "2016-05-04",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1518 弄",
                        zip: 200333,
                    },
                    {
                        date: "2016-05-01",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1518 弄",
                        zip: 200333,
                    },
                    {
                        date: "2016-05-08",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1518 弄",
                        zip: 200333,
                    },
                    {
                        date: "2016-05-06",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1518 弄",
                        zip: 200333,
                    },
                    {
                        date: "2016-05-07",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1518 弄",
                        zip: 200333,
                    },
                ]
            }
        },
        methods:{
            downloadExcel(){
                require.ensure([], () => {
                    const { export_json_to_excel } = require('@/utils/excel/Export2Excel');
                    const tHeader = ['序号', '昵称', '姓名'];
                    // 上面设置Excel的表格第一行的标题
                    const filterVal = ['id', 'nickName', 'userName'];
                    // 上面的index、nickName、name是tableData里对象的属性
                    const list = this.tableData;  //把data里的tableData存到list
                    const data = this.formatJson(filterVal, list);
                    export_json_to_excel(tHeader, data, '列表excel');
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            },
            // 导出第二种：合并单元格 
            exportExcel(excelName) {
                try {
                    const $e = this.$refs["report-table"].$el;
                    console.log(this.$refs["report-table"], $e)
                    
                    let $table = $e.querySelector(".el-table__fixed");
                    if (!$table) {
                        $table = $e;
                    }

                    const wb = XLSX.utils.table_to_book($table, { raw: true });
                    const wbout = XLSX.write(wb, {
                        bookType: "xlsx",
                        bookSST: true,
                        type: "array",
                    });
                    FileSaver.saveAs(
                        new Blob([wbout], { type: "application/octet-stream" }),
                        `${excelName}.xlsx`
                    );
                } catch (e) {
                    if (typeof console !== "undefined") console.error(e);
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>