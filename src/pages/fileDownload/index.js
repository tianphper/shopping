export default{
    routes: [
        {
            // Excel
            path: "/download/excel",
            name: 'download-excel',
            component: resolve => void (require(['@/pages/fileDownload/excel.vue'], resolve))
        },
        {
            // Excel
            path: "/download/pdf",
            name: 'download-pdf',
            component: resolve => void (require(['@/pages/fileDownload/pdf.vue'], resolve))
        },
    ]
}