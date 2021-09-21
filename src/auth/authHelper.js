import Cookies from 'js-cookie'
import * as constantValues from '@/common/constantValues'
import { menuData } from '@/common/menu'
import { deepClone } from '@/utils'

// 
export const READ_AUTH_LABEL = '查看';
export const READ_AUTH_VALUE = 'read';

export const ADD_AUTH_LABEL = '新增';
export const ADD_AUTH_VALUE = 'add';

export const UPDATE_AUTH_LABEL = '修改';
export const UPDATE_AUTH_VALUE = 'update';

export const DELETE_AUTH_LABEL = '删除';
export const DELETE_AUTH__VALUE = 'delete';

// 
export const JOB_LEVEL = 'jobLevel';

export const USER_INFO = 'userInfo';

/**
 * @description 获取用户信息
 */ 
export function getUserInfo() {
    return JSON.parse(Cookies.get(USER_INFO));
}

/**
 * @description 获取用户信息的权限列表
 */ 
export function getPremisstionList() {
    let user_info = getUserInfo();
    return user_info && user_info.premisstionList ? user_info.premisstionList : '';
}
/**
 * @description 是否为超级管理员
 */
export function isAdminister() {
    let user_info = getUserInfo();
    return user_info[JOB_LEVEL] == 0;
}

/**
 * @description 是否拥有权限
 * @param authName 权限标识
 * */ 
export function isAuth(authName){
    if (isAdminister()){
        return true;
    }
    let premissionList = getPremisstionList();
    if (!premissionList) {
        return false;
    }
    if (premissionList.indexOf(authName) > -1) {
        return true;
    } else {
        return false
    }
}
/**
 * @description 获取权限菜单
 * */ 
export function getAuthMenu(){
    if (isAdminister()){
        return menuData;
    }
    // 
    let authMenu = deepClone(menuData);
    let handleMenuData = (menuData) => {
        let data = [];
        menuData.forEach((item, index) => {
            if (item.children && Array.isArray(item.children) && item.children.length > 0){
                data[index] = item;
                data[index].children = handleMenuData(item.children);
            } else {
                if (isAuth(item.name+':'+'read')) {
                    data[index] = item;
                }
            }
        })
        return data;
    }
    
    // console.log('获取权限菜单', handleMenuData(authMenu))
    return handleMenuData(authMenu);
}

/**
 * @description 权限配置
 * */ 
export const authConfig = {
    [READ_AUTH_VALUE]: [
        constantValues.router_dashboard_index,
        constantValues.router_user_index,
        constantValues.router_role_index,
        constantValues.router_premisstion_index,
    ],
    [ADD_AUTH_VALUE]: [
        constantValues.router_user_index,
        constantValues.router_role_index,
        constantValues.router_premisstion_index,
    ]
}