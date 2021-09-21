<template>
  <div>
    <div class="header-name">Excel下载</div>
    <div class="btn-lists">
        <el-button type="primary" @click="exportPDF">PDF导出</el-button>
    </div>
    <el-card>
        <el-table ref="report-table" id="pdfDom" :data="tableData" style="width: 100%">
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
import { htmlToPdf } from "@/utils/pdf/htmlToPdf";

export default {
  components: {},
  data() {
    return {
      activeNames: ["1"],
      tableData: [
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
  methods: {
    exportPDF() {
       htmlToPdf('pdfDom', 'PDF导出') 
    },
  },
};
</script>

<style lang="scss" scoped>
</style>