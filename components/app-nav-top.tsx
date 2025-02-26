"use client";

import { Separator } from "@radix-ui/react-separator";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "./ui/breadcrumb";
import { SidebarTrigger } from "./ui/sidebar";
import useBreadcrubsStore from "@/store/breadcrumbs";

export function AppNavTop() {
  const pathname = usePathname(); // 获取当前路径
  // 需要隐藏 Sidebar 的页面路径
  const hideSidebarRoutes = ["/login"];
  const showSidebar = !hideSidebarRoutes.includes(pathname);

  const { breadcrumbs } = useBreadcrubsStore();
  return (
    showSidebar && (
      <header className="flex w-full h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex w-full items-center justify-between gap-2 px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">{breadcrumbs[0]}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{breadcrumbs[1]}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-3 mr-10 space-x-0">
            <ThemeToggle />
          </div>
        </div>
      </header>
    )
  );
}
