import Mock from "mockjs";

export const menuList = Mock.mock({
    menus: [
        {
            id: 1000,
            title: "首页",
            iconName: "HomeOutlined",
            routeName: "dashboard",
            children: [
                {
                    id: 1001,
                    title: "分析页",
                    routeName: "analysis",
                },
                {
                    id: 1002,
                    title: "工作台",
                    routeName: "workbench",
                }
            ]
        },
        {
            id: 1100,
            title: "功能",
            iconName: "NodeIndexOutlined",
            routeName: "feature",
        },
        {
            id: 1200,
            title: "页面",
            iconName: "PictureOutlined",
            routeName: "page",
        },
        {
            id: 1300,
            title: "图表",
            iconName: "PieChartOutlined",
            routeName: "chart",
        },
        {
            id: 1900,
            title: "关于",
            iconName: "UserOutlined",
            routeName: "about",
        },
    ],
});
