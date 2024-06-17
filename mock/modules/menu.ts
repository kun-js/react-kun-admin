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
        },
      ],
    },
    {
      id: 1100,
      title: "功能",
      iconName: "NodeIndexOutlined",
      routeName: "feature",
      children: [
        {
          id: 1101,
          title: "水印",
          routeName: "watermark",
        },
      ],
    },
    {
      id: 1200,
      title: "页面",
      iconName: "PictureOutlined",
      routeName: "page",
      children: [
        {
          id: 1201,
          title: "表单页",
          routeName: "form",
          children: [
            {
              id: 1202,
              title: "基础表单",
              routeName: "basic",
            },
            {
              id: 1203,
              title: "分布表单",
              routeName: "step",
            },
          ],
        },
        {
          id: 1204,
          title: "详情页",
          routeName: "detail",
        },
      ],
    },
    // {
    //     id: 1300,
    //     title: "图表",
    //     iconName: "PieChartOutlined",
    //     routeName: "chart",
    // },
    {
      id: 1900,
      title: "关于",
      iconName: "UserOutlined",
      routeName: "about",
      // children: [
      //     {
      //         id: 1901,
      //         title: "关于",
      //         routeName: "index",
      //     },
      // ],
    },
  ],
});
