import React from "react";
import { Button } from "antd";
import usePermissionStore from "@/store/permission";

type Permission = string;

interface ButtonProps {
  children: React.ReactNode;
  requiredPermission: Permission;
  type?: "primary" | "default";
  onClick?: () => void;
  // 其他 Button 支持的 props
}

const hasPermission = (requiredPermission: Permission) => {
  const { permission } = usePermissionStore.getState();
  return permission === requiredPermission;
};

const AuthButton: React.FC<ButtonProps> = ({
  children,
  requiredPermission,
  type = "default",
  onClick,
  ...restProps
}) => {
  const canAccess = hasPermission(requiredPermission);

  return canAccess ? (
    <Button type={type} onClick={onClick} {...restProps}>
      {children}
    </Button>
  ) : null;
};

export default AuthButton;
