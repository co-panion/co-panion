// libs/ui/src/components/Sidebar.tsx
import React from "react";
import { cn } from "@co-panion/utils";

export interface SidebarItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: SidebarItem[];
  logo?: React.ReactNode;
  containerClassName?: string;
}

export const Sidebar = ({
  items = [],
  logo,
  containerClassName,
  className,
  ...props
}: SidebarProps) => {
  return (
    <aside
      className={cn(
        "flex flex-col w-64 h-full bg-white border-r border-gray-200 p-4",
        containerClassName,
        className,
      )}
      {...props}
    >
      {logo && <div className="mb-6 px-2">{logo}</div>}
      <nav className="flex flex-col gap-1 flex-1">
        {items.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={item.onClick}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors text-left w-full",
              item.isActive
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            )}
          >
            {item.icon && (
              <span className="w-5 h-5 flex items-center justify-center">
                {item.icon}
              </span>
            )}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

Sidebar.displayName = "Sidebar";
