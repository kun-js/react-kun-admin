import "./button-permission.scss";
import React, { useEffect, useState } from "react";
import { Button, Card, Divider, Space } from "antd";
import usePermissionStore from "@/store/permission";
import AuthButton from "@/components/AuthButton";

// 定义权限类型接口
interface PermissionState {
  admin: boolean;
  user: boolean;
}

const ButtonPermission: React.FC = () => {
  const { permission, setPermission } = usePermissionStore();
  const [permissions, setPermissions] = useState<PermissionState>({ admin: false, user: false });

  const togglePermission = (permissionType: string) => {
    setPermission(permissionType);
    setPermissions((prevState) => ({
      ...prevState,
      [permissionType]: true,
      // 当切换一个权限时，确保另一个权限是关闭的
      ...(permissionType === "admin" ? { user: false } : { admin: false }),
    }));
  };

  useEffect(() => {
    const permissionType = permission;
    setPermissions({
      admin: permissionType === "admin",
      user: permissionType === "user",
    });
  }, []);

  const renderAuthButtons = (permissionType: string, type: "primary" | "default", label: string) => {
    return (
      <>
        {new Array(3).fill(null).map((_, index) => (
          <AuthButton key={index} requiredPermission={permissionType} type={type}>
            {label}
          </AuthButton>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="button-permission-container">
        <Card className="card-container" title="按钮权限示例" bordered={false}>
          <Space>
            <Button type="primary" onClick={() => togglePermission("admin")} disabled={permissions.admin}>
              切换权限为管理员
            </Button>
            <Button type="primary" onClick={() => togglePermission("user")} disabled={permissions.user}>
              切换权限为用户
            </Button>
          </Space>
          <Divider />
          <div>
            <Space>
              {renderAuthButtons("admin", "primary", "管理员可见")}
              {renderAuthButtons("user", "default", "用户可见")}
              <Button danger>共同可见按钮</Button>
              <Button danger>共同可见按钮</Button>
            </Space>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ButtonPermission;
