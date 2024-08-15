// 定义接口返回类型
import {
  AccountListItemType,
  LoginInfoType,
  MenuListType,
  AnalysisCardItemType,
  UserListItemType,
  NoticeItemType,
  MessageItemType,
  TodoItemType,
  RoleListItemType,
} from "@/types/global";

export interface LoginInfoResponseType {
  loginInfo: LoginInfoType;
}

export interface MenuListResponseType {
  menus: MenuListType[];
}

export interface AnalysisCardListResponseType {
  analysisCardList: AnalysisCardItemType[];
}

export interface UserListResponseType {
  userList: UserListItemType[];
}

export interface MessageListResponseType {
  noticeList: NoticeItemType[];
  messageList: MessageItemType[];
  todoList: TodoItemType[];
}

export interface AccountListResponseType {
  accountList: AccountListItemType[];
  total: number;
}

export interface RoleListResponseType {
  roleList: RoleListItemType[];
}
