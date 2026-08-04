"use client";

import { useFormContext, Controller } from "react-hook-form";
import { FileUploader, type FileUploaderProps } from "@co-panion/ui";
import { type FormFileValue, type FileItem } from "@co-panion/shared";

export type RHFFileUploaderProps = Omit<
  FileUploaderProps,
  "onFileChange" | "onFileRemove"
> & {
  name: string;
};

export function RHFFileUploader({ name, ...props }: RHFFileUploaderProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div>
          <FileUploader
            {...props}
            // RHF에서 관리하는 파일 배열 상태 주입 (기존 URL 데이터 등)
            initialSourceUrls={value ?? []}

            // 파일이 추가/변경되었을 때 UI 컴포넌트가 뱉어내는 File[]를 RHF 상태에 업데이트
            onFileChange={(files: File[]) => {
              onChange(files);
            }}

            // 파일 삭제 시 내부 상태 업데이트 (기존 값에서 해당 식별자를 필터링하여 RHF에 전달)
            onFileRemove={(identifier) => {
              const updatedFiles = (value || []).filter(
                (file: FileItem) => file.id !== identifier,
              );
              onChange(updatedFiles);
            }}
          />
          {/* 에러 메시지가 렌더링될 하단 영역 (FileUploader 내부에 통합되어 있다면 생략 가능) */}
          {error && (
            <span className="text-red-500 text-sm mt-1 block">
              {error.message}
            </span>
          )}
        </div>
      )}
    />
  );
}
