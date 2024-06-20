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
      title: "组件",
      iconName: "BookOutlined",
      routeName: "component",
      children: [
        {
          id: 1101,
          title: "按钮",
          routeName: "button",
        },
      ],
    },
    {
      id: 1200,
      title: "功能",
      iconName: "NodeIndexOutlined",
      routeName: "feature",
      children: [
        {
          id: 1201,
          title: "水印",
          routeName: "watermark",
        },
      ],
    },
    {
      id: 1300,
      title: "页面",
      iconName: "PictureOutlined",
      routeName: "page",
      children: [
        {
          id: 1301,
          title: "表单页",
          routeName: "form",
          children: [
            {
              id: 1302,
              title: "基础表单",
              routeName: "basic",
            },
            {
              id: 1303,
              title: "分步表单",
              routeName: "step",
            },
          ],
        },
        {
          id: 1304,
          title: "详情页",
          routeName: "detail",
        },
        {
          id: 1305,
          title: "列表页",
          routeName: "list",
        },
        {
          id: 1306,
          title: "结果页",
          routeName: "result",
          children: [
            {
              id: 1307,
              title: "成功页",
              routeName: "success",
            },
            {
              id: 1308,
              title: "失败页",
              routeName: "fail",
            },
          ],
        },
      ],
    },
    {
      id: 1400,
      title: "图表",
      iconName: "PieChartOutlined",
      routeName: "chart",
      children: [
        {
          id: 1401,
          title: "柱状图",
          routeName: "bar",
        },
        {
          id: 1402,
          title: "折线图",
          routeName: "line",
        },
        {
          id: 1403,
          title: "饼图",
          routeName: "pie",
        },
      ],
    },
    {
      id: 1500,
      title: "外部页面",
      iconName: "DesktopOutlined",
      routeName: "external",
      children: [
        {
          id: 1501,
          title: "文档内嵌",
          routeName: "iframe",
          children: [
            {
              id: 1502,
              title: "Ant Design",
              routeName: "antd-iframe",
            },
            {
              id: 1503,
              title: "React",
              routeName: "react-iframe",
            },
          ],
        },
        {
          id: 1504,
          title: "文档外链",
          routeName: "outerchain",
          children: [
            {
              id: 1505,
              title: "Ant Design",
              routeName: "antd-outerchain",
            },
            {
              id: 1506,
              title: "React",
              routeName: "react-outerchain",
            },
          ],
        },
      ],
    },
    {
      id: 1900,
      title: "关于",
      iconName: "UserOutlined",
      routeName: "about",
    },
  ],
});
