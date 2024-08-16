// 定义用户信息接口类型
export interface UserInfoType {
    avatar: string;
    name: string;
}

// 定义登录信息接口类型
export interface LoginInfoType {
    username: string;
    password: string;
    token: string;
    userInfo: UserInfoType;
    permission: string;
}

// 定义菜单列表接口类型
export interface MenuListType {
    id: number;
    title: string;
    iconName: string;
    routeName: string;
    children?: MenuListType[];
}

// 定义分析页卡片列表类型
export interface AnalysisCardItemType {
    id: number;
    title: string;
    time: "月" | "周" | "年";
    text: string;
    iconType: "1" | "2" | "3" | "4";
    total: string;
    number: string;
}

// 定义用户列表类型
export interface UserListItemType {
    id: number;
    name: string;
    gender: string;
    age: number;
    email: string;
    tel: string;
    address: string;
}

// 定义通知列表类型
interface NoticeItemType {
    id: number;
    title: string;
    time: string;
    iconColor: string;
    icon: string;
}

// 定义消息列表类型
interface MessageItemType {
    id: number;
    avatar: string;
    username: string;
    type: string;
    content: string;
    time: string;
}

// 定义代办事项列表类型
interface TodoItemType {
    id: number;
    title: string;
    description: string;
    status: string;
}

// 定义账号列表类型
export type AccountRoleType = "超级管理员" | "管理员" | "普通用户";
export type AccountDepartmentType = "技术部" | "人事部" | "财务部" | "市场部" | "销售部";

export interface AccountListItemType {
    id: number;
    username: string;
    name: string;
    email: string;
    tel: string;
    createTime: string;
    role: AccountRoleType;
    department: AccountDepartmentType;
    remark: string;
}

// 定义角色列表类型
interface RoleListItemType {
    id: number;
    role: string;
    roleValue: string;
    status: boolean;
    createTime: string;
    remark: string;
}