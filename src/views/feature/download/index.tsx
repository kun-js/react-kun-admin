import "./download.scss";
import React from "react";
import { Button, Card, Space } from "antd";

const DownloadFeature: React.FC = () => {
  // 文件流下载文件方法
  const handleToDownloadFileBlob = () => {
    const textContent: string = "文件流下载!"; // 文本内容
    const blob: Blob = new Blob([textContent], { type: "text/plain" }); // 创建 Blob 对象
    const url: string = URL.createObjectURL(blob); // 创建 URL 对象
    const link: HTMLAnchorElement = document.createElement("a"); // 创建链接元素
    link.href = url; // 设置链接地址
    link.setAttribute("download", "bolb.txt"); // 设置下载文件名
    document.body.appendChild(link); // 将链接添加到文档中
    link.click(); // 模拟点击链接进行下载
    URL.revokeObjectURL(url); // 释放 URL 对象
    link.remove(); // 移除链接元素
  };

  // base64下载文件方法
  const handleToDownloadFileBase64 = () => {
    const textContent: string = "base64方式下载!"; // 文本内容
    // 使用 btoa 方法将字符串转换为 Base64 编码
    const base64Data: string = btoa(unescape(encodeURIComponent(textContent)));
    // 构建数据 URL
    const dataUrl: string = `data:text/plain;base64,${base64Data}`;
    // 创建链接元素
    const link: HTMLAnchorElement = document.createElement("a");
    link.href = dataUrl; // 设置链接地址为 Base64 编码的数据 URL
    link.setAttribute("download", "base64.txt"); // 设置下载文件名
    document.body.appendChild(link); // 将链接添加到文档中
    link.click(); // 模拟点击链接进行下载
    // 移除链接元素
    link.remove();
  };

  // 文件流下载图片方式
  const handleToDownloadImageBlob = () => {
    const imageUrl: string | undefined = "https://p6.itc.cn/images01/20220603/17f79c3bbbd54b4fafb703a7e8cdce12.jpeg"; // 图片地址
    // 获取图片后缀名
    const fileExtension: string = imageUrl.includes(".") ? imageUrl.split(".").pop()!.toLowerCase() : "";
    // 创建图片元素
    const img: HTMLImageElement = document.createElement("img");
    img.crossOrigin = "anonymous"; // 设置跨域属性，用于处理跨域图片
    img.src = imageUrl; // 设置图片地址
    // 图片加载完成后绘制到画布上
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      // 检查 canvas 上下文对象是否存在
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.error("Failed to get 2D context from canvas");
        return;
      }
      ctx.drawImage(img, 0, 0);
      // 根据图片后缀名获取对应的 MIME 类型
      let mimeType;
      switch (fileExtension) {
        case "jpg":
        case "jpeg":
          mimeType = "image/jpeg";
          break;
        case "png":
          mimeType = "image/png";
          break;
        case "gif":
          mimeType = "image/gif";
          break;
        case "svg":
          mimeType = "image/svg+xml";
          break;
        default:
          mimeType = "image/jpg"; // 默认使用 JPEG 格式
      }
      // 将画布内容转换为 Blob 对象
      canvas.toBlob((blob) => {
        if (!blob) {
          console.error("Failed to generate blob object");
          return;
        }
        // 创建下载链接
        const url = URL.createObjectURL(blob);
        // 创建链接元素
        const link = document.createElement("a");
        link.href = url; // 设置链接地址为 Blob URL
        link.setAttribute("download", `image.${fileExtension}`); // 设置下载文件名
        // 模拟点击链接进行下载
        document.body.appendChild(link); // 将链接添加到文档中
        link.click();
        // 释放 Blob URL
        URL.revokeObjectURL(url);
        // 移除链接元素
        link.remove();
      }, mimeType);
    };
  };

  // base64下载图片方法
  const handleToDownloadImageBase64 = () => {
    const imageUrl: string | undefined = "https://p6.itc.cn/images01/20220603/17f79c3bbbd54b4fafb703a7e8cdce12.jpeg"; // 图片地址
    // 创建图片元素
    const img: HTMLImageElement = document.createElement("img");
    img.crossOrigin = "anonymous"; // 设置跨域属性，用于处理跨域图片
    img.src = imageUrl; // 设置图片地址
    // 图片加载完成后绘制到画布上
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      // 检查 canvas 上下文对象是否存在
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.error("Failed to get 2D context from canvas");
        return;
      }
      ctx.drawImage(img, 0, 0);
      // 将画布内容转换为 base64 编码的字符串
      const base64Image = canvas.toDataURL();
      // 创建链接元素
      const link = document.createElement("a");
      link.href = base64Image; // 设置链接地址为 base64 编码的图片数据
      link.setAttribute("download", "image.png"); // 设置默认下载文件名为 image.png
      // 模拟点击链接进行下载
      document.body.appendChild(link); // 将链接添加到文档中
      link.click();
      // 移除链接元素
      link.remove();
    };
  };

  return (
    <div className="download-container">
      <Card className="card-container" title="文件下载功能示例">
        <Space direction="vertical">
          <Space>
            <Button type="primary" onClick={handleToDownloadFileBlob}>
              文件下载(文件流)
            </Button>
            <Button type="primary" onClick={handleToDownloadFileBase64}>
              文件下载(base64)
            </Button>
          </Space>
          <Space>
            <Button onClick={handleToDownloadImageBlob}>图片下载(文件流)</Button>
            <Button onClick={handleToDownloadImageBase64}>图片下载(base64)</Button>
          </Space>
        </Space>
      </Card>
    </div>
  );
};

export default DownloadFeature;
