// 定义状态管理库函数类型

// 定义暗黑模式类型
export interface DarkModeType {
    isDarkMode: boolean;
    setDarkMode: (checked: boolean) => void;
}

// 定义国际化模块类型
export interface LanguageType {
    lang: string;
    changeLanguage: (lang: string) => void;
}

// 定义菜单模块类型
export interface MenuStateType {
    defaultSelectedKey: string[];
    defaultOpenKey: string[];
    setDefaultSelectedKey: (path: string[]) => void;
    setDefaultOpenKey: (path: string[]) => void;
}

// 定义权限管理模块类型
export interface PermissionType {
    permission: string;
    setPermission: (permission: string) => void;
}

// 定义用户信息模块类型
export interface userInfoType {
    token: string | null;
    userInfo: { avatar: string; name: string } | null;
    setToken: (token: string) => void;
    setUserInfo: (userInfo: { avatar: string; name: string }) => void;
}

// 定义水印模块类型
export interface WatermarkType {
    watermarkVisible: boolean;
    setWatermarkVisible: (visible: boolean) => void;
}