import ReactDOM from "react-dom/client";

import MyApp from "./App";

// 如开发需要可打开严格模式
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <MyApp />
  // </React.StrictMode>
);
