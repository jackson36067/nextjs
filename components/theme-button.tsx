"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Icon from "./icon/Iconify";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 确保组件在客户端渲染后再显示主题切换按钮
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="flex justify-center items-center w-10 h-10 rounded-lg
       hover:bg-muted/100 cursor-pointer"
    >
      <Icon
        icon={theme === "dark" ? "solar:sun-outline" : "circum:dark"}
        onclick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-6 h-6"
      />
    </div>
  );
}
