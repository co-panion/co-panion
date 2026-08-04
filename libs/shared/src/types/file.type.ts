// libs/shared/src/types/file.type.ts (예시)
export interface FileItem {
  id: string | number;
  url?: string;
  name?: string;
  size?: number;
}

// 브라우저 파일 또는 서버 파일 객체를 모두 포괄하는 유니온 타입
export type FormFileValue = File | FileItem;
