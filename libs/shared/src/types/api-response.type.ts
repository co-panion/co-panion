export interface StandardResponse<TData = unknown, TMeta = unknown> {
  success: boolean;
  data: TData | null;
  message: string | null;
  timestamp: string;
  meta?: TMeta; // 페이지네이션 메타데이터 등
}
