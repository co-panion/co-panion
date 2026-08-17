// libs/ui/src/components/AuthModal.tsx
import React from "react";
import { Dialog } from "./Dialog";

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
}

export const AuthModal = ({
  isOpen,
  onClose,
  onLoginClick,
}: AuthModalProps) => {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      title="로그인 안내"
      draggable={false} // 인증 모달의 경우 사용자 집중을 위해 드래그를 비활성화하여 안정감 부여
      actions={
        <>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
          >
            취소
          </button>
          <button
            type="button"
            onClick={() => {
              onClose(); // 모달 닫기
              onLoginClick(); // 주입받은 라우팅 함수 실행 (현재 URL 기억 등은 apps/web에서 처리)
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            로그인하기
          </button>
        </>
      }
    >
      <div className="py-4 text-center text-gray-600">
        <p>로그인이 필요한 서비스입니다.</p>
        <p className="mt-1">로그인 페이지로 이동하시겠습니까?</p>
      </div>
    </Dialog>
  );
};
