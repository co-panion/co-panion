// libs/ui/src/components/Navbar.tsx
import React, { useState } from "react";
import { cn } from "@co-panion/utils";
import { Dropdown, DropdownMenuItem } from "./Dropdown"; // 6번에서 만든 드롭다운 컴포넌트 재사용

export type NavbarUserRole = "user" | "shelter" | string; // libs/shared 타입과 호환되도록 확장성 부여

export interface NavbarUser {
  nickname: string;
  profileImage?: string | null;
  role: NavbarUserRole;
}

export interface NavbarProps {
  user?: NavbarUser | null;
  notificationCount?: number;
  onLoginClick?: () => void;
  onLogoutClick?: () => void;
  onMenuClick?: (path: string) => void;
  onNotificationClick?: () => void;
  className?: string;
}

// 프로필 미등록 시 사용할 랜덤 헥스 색상 생성기 (문자열 해시 기반)
const getAvatarBg = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00ffffff).toString(16).toUpperCase();
  return "#" + "000000".substring(0, 6 - c.length) + c;
};

export const Navbar = ({
  user,
  notificationCount = 0,
  onLoginClick,
  onLogoutClick,
  onMenuClick,
  onNotificationClick,
  className,
}: NavbarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 권한별 드롭다운 메뉴 분기 처리
  const getMenuItems = (): DropdownMenuItem[] => {
    if (!user) return [];

    const baseItems: DropdownMenuItem[] = [
      {
        label: "내 정보",
        value: "profile",
        onClick: () => onMenuClick?.("/mypage"),
      },
    ];

    const roleSpecificItems: DropdownMenuItem[] =
      user.role === "shelter"
        ? [
            {
              label: "보호소 관리",
              value: "shelter-manage",
              onClick: () => onMenuClick?.("/shelter/manage"),
            },
            {
              label: "보호동물 관리",
              value: "shelter-animals",
              onClick: () => onMenuClick?.("/shelter/animals"),
            },
            {
              label: "입양 신청 관리",
              value: "shelter-apps",
              onClick: () => onMenuClick?.("/shelter/applications"),
            },
          ]
        : [
            {
              label: "내 입양 신청",
              value: "my-apps",
              onClick: () => onMenuClick?.("/mypage/applications"),
            },
          ];

    return [
      ...baseItems,
      ...roleSpecificItems,
      "divider",
      {
        label: "로그아웃",
        value: "logout",
        danger: true,
        onClick: () => onLogoutClick?.(),
      },
    ];
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* 로고 영역 */}
        <div
          onClick={() => onMenuClick?.("/")}
          className="font-bold text-xl text-gray-900 cursor-pointer select-none"
          role="button"
          tabIndex={0}
        >
          Co-Panion
        </div>

        {/* 우측 액션 영역 */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-2 sm:gap-4">
              {/* 실시간 알림 토스트/뱃지 아이콘 */}
              <button
                type="button"
                onClick={onNotificationClick}
                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
                aria-label="알림 확인"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                {notificationCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border-2 border-white"></span>
                  </span>
                )}
              </button>

              {/* 공통 컴포넌트 Dropdown 합성(Composition) 적용 */}
              <Dropdown
                isOpen={isDropdownOpen}
                onClose={() => setIsDropdownOpen(false)}
                align="right"
                items={getMenuItems()}
                trigger={
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 cursor-pointer select-none p-1 pr-2 rounded-full hover:bg-gray-100 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
                    role="button"
                    tabIndex={0}
                  >
                    {user.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt={user.nickname}
                        className="w-8 h-8 rounded-full object-cover border border-gray-200"
                      />
                    ) : (
                      <div
                        style={{ backgroundColor: getAvatarBg(user.nickname) }}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold border border-black/10"
                      >
                        {user.nickname.charAt(0).toUpperCase()}
                      </div>
                    )}
                    {/* 닉네임 말줄임(...) 처리 영역 */}
                    <span className="text-sm font-medium text-gray-700 max-w-[80px] sm:max-w-[120px] truncate">
                      {user.nickname}
                    </span>
                  </div>
                }
              />
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              로그인
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
