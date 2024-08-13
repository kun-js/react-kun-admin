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
      title: "权限管理",
      iconName: "KeyOutlined",
      routeName: "permission",
      children: [
        {
          id: 1101,
          title: "按钮权限",
          routeName: "button-permission",
        },
      ],
    },
    {
      id: 1200,
      title: "组件",
      iconName: "BookOutlined",
      routeName: "component",
      children: [
        {
          id: 1201,
          title: "按钮",
          routeName: "button",
        },
        {
          id: 1202,
          title: "标签",
          routeName: "tag",
        },
        {
          id: 1203,
          title: "取色器",
          routeName: "color-picker",
        },
        {
          id: 1204,
          title: "描述列表",
          routeName: "description",
        },
        {
          id: 1205,
          title: "统计组件",
          routeName: "statistic",
        },
        {
          id: 1206,
          title: "消息提示",
          routeName: "message",
        },
        {
          id: 1207,
          title: "通知提醒",
          routeName: "notification",
        },
        {
          id: 1208,
          title: "树形组件",
          routeName: "tree",
        },
        {
          id: 1209,
          title: "折叠面板",
          routeName: "collapse-panel",
        },
        {
          id: 1210,
          title: "时间选择器",
          routeName: "date-picker",
        },
      ],
    },
    {
      id: 1300,
      title: "功能",
      iconName: "NodeIndexOutlined",
      routeName: "feature",
      children: [
        {
          id: 1301,
          title: "文件下载",
          routeName: "download",
        },
        {
          id: 1302,
          title: "水印",
          routeName: "watermark",
        },
        {
          id: 1303,
          title: "剪贴板",
          routeName: "clipboard",
        },
        {
          id: 1304,
          title: "签名",
          routeName: "signature",
        },
        {
          id: 1305,
          title: "拖拽",
          routeName: "draggable",
        },
        {
          id: 1306,
          title: "打印",
          routeName: "print",
        },
        {
          id: 1307,
          title: "条形码",
          routeName: "barcode",
        },
        {
          id: 1308,
          title: "二维码",
          routeName: "qrcode",
        },
        {
          id: 1309,
          title: "PDF预览",
          routeName: "pdf-preview",
        },
        {
          id: 1310,
          title: "Word预览",
          routeName: "word-preview",
        },
        {
          id: 1311,
          title: "Excel预览",
          routeName: "excel-preview",
        },
        {
          id: 1312,
          title: "MarkDown编辑器",
          routeName: "markdown-editor",
        },
        {
          id: 1313,
          title: "文本编辑器",
          routeName: "text-editor",
        },
        {
          id: 1314,
          title: "JSON编辑器",
          routeName: "json-editor",
        },
        {
          id: 1315,
          title: "流程图",
          routeName: "flow-chart",
        },
        {
          id: 1316,
          title: "图片裁剪",
          routeName: "image-cropper",
        },
        {
          id: 1317,
          title: "视频播放器",
          routeName: "video-player",
        },
        {
          id: 1320,
          title: "防抖节流",
          routeName: "debounce",
        },
        {
          id: 1321,
          title: "敏感词过滤",
          routeName: "sensitive",
        },
      ],
    },
    {
      id: 1400,
      title: "页面",
      iconName: "PictureOutlined",
      routeName: "page",
      children: [
        {
          id: 1401,
          title: "表单页",
          routeName: "form",
          children: [
            {
              id: 1402,
              title: "基础表单",
              routeName: "basic-form",
            },
            {
              id: 1403,
              title: "分步表单",
              routeName: "step-form",
            },
          ],
        },
        {
          id: 1404,
          title: "详情页",
          routeName: "detail",
        },
        {
          id: 1405,
          title: "列表页",
          routeName: "list",
        },
        {
          id: 1406,
          title: "结果页",
          routeName: "result",
          children: [
            {
              id: 1407,
              title: "成功页",
              routeName: "success",
            },
            {
              id: 1408,
              title: "失败页",
              routeName: "fail",
            },
          ],
        },
        {
          id: 1409,
          title: "异常页",
          routeName: "exception",
          children: [
            {
              id: 1410,
              title: "403",
              routeName: "403",
            },
            {
              id: 1411,
              title: "404",
              routeName: "404",
            },
            {
              id: 1412,
              title: "500",
              routeName: "500",
            },
          ],
        },
      ],
    },
    {
      id: 1500,
      title: "图表",
      iconName: "PieChartOutlined",
      routeName: "chart",
      children: [
        {
          id: 1501,
          title: "柱状图",
          routeName: "bar",
        },
        {
          id: 1502,
          title: "折线图",
          routeName: "line",
        },
        {
          id: 1503,
          title: "饼图",
          routeName: "pie",
        },
      ],
    },
    {
      id: 1600,
      title: "外部页面",
      iconName: "DesktopOutlined",
      routeName: "external",
      children: [
        {
          id: 1601,
          title: "文档内嵌",
          routeName: "iframe",
          children: [
            {
              id: 1602,
              title: "Ant Design",
              routeName: "antd-iframe",
            },
            {
              id: 1603,
              title: "React",
              routeName: "react-iframe",
            },
          ],
        },
        {
          id: 1604,
          title: "文档外链",
          routeName: "outerchain",
          children: [
            {
              id: 1605,
              title: "Ant Design",
              routeName: "antd-outerchain",
            },
            {
              id: 1606,
              title: "React",
              routeName: "react-outerchain",
            },
          ],
        },
      ],
    },
    {
      id: 1800,
      title: "系统管理",
      iconName: "SettingOutlined",
      routeName: "system",
      children: [
        {
          id: 1801,
          title: "账号管理",
          routeName: "account",
        },
        {
          id: 1802,
          title: "角色管理",
          routeName: "role",
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
