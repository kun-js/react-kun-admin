// 定义路由类型
export interface RouteItemType {
    path: string;
    element: JSX.Element;
    children?: RouteItemType[];
}