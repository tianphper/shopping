import * as constantValues from './constantValues'

export const menuData = [
    {
        index: constantValues.router_dashboard_index,
        title: constantValues.router_dashboard_title,
        name: 'dashboard',
        url: '/dashboard',
        icon: 'el-icon-s-home',
        children: []
    },
    {
        index: constantValues.router_setting_index,
        title: constantValues.router_setting_title,
        name: 'setting',
        url: '',
        icon: 'el-icon-setting',
        children: [
            {
                index: constantValues.router_user_index,
                title: constantValues.router_user_title,
                name: 'user',
                url: '/user',
                icon: '',
                children: []
            },
            {
                index: constantValues.router_role_index,
                title: constantValues.router_role_title,
                name: 'role',
                url: '/role',
                icon: '',
                children: []
            },
            {
                index: constantValues.router_premisstion_index,
                title: constantValues.router_premisstion_title,
                name: 'premisstion',
                url: '/premisstion',
                icon: '',
                children: []
            },
        ]
    },
    {
        index: constantValues.router_echarts_index,
        title: constantValues.router_echarts_title,
        name: 'echarts',
        url: '',
        icon: 'el-icon-s-data',
        children: [
            {
                index: constantValues.router_echarts_pie_index,
                title: constantValues.router_echarts_pie_title,
                name: 'echarts-pie',
                url: '/echarts/pie',
                icon: '',
                children: []
            },
            {
                index: constantValues.router_echarts_line_index,
                title: constantValues.router_echarts_line_title,
                name: 'echarts-line',
                url: '/echarts/line',
                icon: '',
                children: []
            },
            {
                index: constantValues.router_echarts_bar_index,
                title: constantValues.router_echarts_bar_title,
                name: 'echarts-bar',
                url: '/echarts/bar',
                icon: '',
                children: []
            },
            {
                index: constantValues.router_echarts_screen_index,
                title: constantValues.router_echarts_screen_title,
                name: 'echarts-screen',
                url: '/echarts/screen',
                icon: '',
                children: []
            },
        ]
    },
    {
        index: constantValues.router_common_components_index,
        title: constantValues.router_common_components_title,
        name: 'commonComponents',
        url: '',
        icon: 'el-icon-s-platform',
        children: [
            {
                index: constantValues.router_area_crop_index,
                title: constantValues.router_area_crop_title,
                name: 'areaCrop',
                url: '/areaCrop',
                icon: '',
                children: []
            }
        ]
    },
    {
        index: constantValues.router_file_download_index,
        title: constantValues.router_file_download_title,
        name: 'fileDownload',
        url: '',
        icon: 'el-icon-download',
        children: [
            {
                index: constantValues.router_excel_download_index,
                title: constantValues.router_excel_download_title,
                name: 'downloadExcel',
                url: '/download/excel',
                icon: '',
                children: []
            },
            {
                index: constantValues.router_pdf_download_index,
                title: constantValues.router_pdf_download_title,
                name: 'downloadPDF',
                url: '/download/pdf',
                icon: '',
                children: []
            }
        ]
    },
]