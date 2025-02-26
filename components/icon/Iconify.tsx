// components/Icon.tsx
import React from "react";
import { Icon as IconifyIcon, IconifyIconProps } from "@iconify/react";

export interface IconProps extends IconifyIconProps {
  icon: string; // 图标名称，例如 "mdi:home"
  className?: string;
  width?: string | number;
  height?: string | number;
  size?: string | number;
  style?: React.CSSProperties;
  onclick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  icon,
  size,
  className = "w-2 h-2",
  onclick,
}) => {
  return (
    <IconifyIcon
      onClick={onclick}
      className={className}
      icon={icon}
      width={size}
      height={size}
    />
  );
};

export default Icon;
