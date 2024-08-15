export interface UserInfoType {
    avatar: string;
    name: string;
}

export interface LoginInfoType {
    username: string;
    password: string;
    token: string;
    userInfo: UserInfoType;
    permission: string;
}

export interface MenuListType {
    id: number;
    title: string;
    iconName: string;
    routeName: string;
    children?: MenuListType[];
}

export interface AnalysisCardItemType {
    id: number;
    title: string;
    time: "月" | "周" | "年";
    text: string;
    iconType: "1" | "2" | "3" | "4";
    total: string;
    number: string;
}

export interface UserListItemType {
    id: number;
    name: string;
    gender: string;
    age: number;
    email: string;
    tel: string;
    address: string;
}

interface NoticeItemType {
    id: number;
    title: string;
    time: string;
    iconColor: string;
    icon: string;
}

interface MessageItemType {
    id: number;
    avatar: string;
    username: string;
    type: string;
    content: string;
    time: string;
}

interface TodoItemType {
    id: number;
    title: string;
    description: string;
    status: string;
}

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

interface RoleListItemType {
    id: number;
    role: string;
    roleValue: string;
    status: boolean;
    createTime: string;
    remark: string;
}