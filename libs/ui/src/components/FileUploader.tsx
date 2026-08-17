// libs/ui/src/components/FileUploader.tsx
import React, {
  useState,
  useRef,
  useEffect,
  DragEvent,
  ChangeEvent,
} from "react";
import { cn } from "@co-panion/utils";

export interface FileUploaderProps {
  label?: string | undefined;
  helperText?: string | undefined;
  error?: boolean;
  maxFiles?: number;
  maxSize?: number;
  acceptedTypes?: string[];
  value?: File[];
  onChange?: (files: File[]) => void;
  containerClassName?: string;
}

export const FileUploader = ({
  label,
  helperText,
  error = false,
  maxFiles = 4,
  maxSize = 5,
  acceptedTypes = ["image/png", "image/jpeg", "image/jpg", "application/pdf"],
  value,
  onChange,
  containerClassName,
}: FileUploaderProps) => {
  const [files, setFiles] = useState<File[]>(value || []);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const acceptString = acceptedTypes.join(",");

  // 외부 value 동기화
  useEffect(() => {
    if (value) {
      setFiles(value);
    }
  }, [value]);

  // 로컬 임시 URL 생성 및 메모리 누수 방지 (cleanup)
  useEffect(() => {
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);
    return () => {
      newPreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  const handleFiles = (newFiles: FileList | File[]) => {
    const fileArray = Array.from(newFiles);
    const validFiles: File[] = [];

    for (const file of fileArray) {
      if (files.length + validFiles.length >= maxFiles) break;
      if (file.size > maxSize * 1024 * 1024) {
        alert(`파일 크기는 ${maxSize}MB를 초과할 수 없습니다: ${file.name}`);
        continue;
      }
      validFiles.push(file);
    }

    const updatedFiles = [...files, ...validFiles];
    setFiles(updatedFiles);
    onChange?.(updatedFiles);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
      e.target.value = "";
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (files.length < maxFiles) setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (files.length >= maxFiles) return;

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleRemove = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onChange?.(updatedFiles);
  };

  const isMaxReached = files.length >= maxFiles;

  return (
    <div className={cn("flex flex-col gap-2 w-full", containerClassName)}>
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      {/* 미리보기 그리드 배열 */}
      {files.length > 0 && (
        <div className="grid grid-cols-4 gap-2 mb-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="relative aspect-4/3 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 group"
            >
              {file.type.startsWith("image/") ? (
                <img
                  src={previews[index]}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-gray-500 p-2 text-center truncate">
                  {file.name}
                </div>
              )}
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 hover:bg-black transition-colors"
                aria-label="개별 삭제"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 최대 개수 도달 시 드롭존 숨김/비활성화 처리 */}
      {!isMaxReached && (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={cn(
            "flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
            error
              ? "border-red-500 bg-red-50/50"
              : isDragging
                ? "border-gray-900 bg-gray-100"
                : "border-gray-300 bg-gray-50 hover:bg-gray-100",
          )}
        >
          <svg
            className="w-8 h-8 mb-2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="text-sm text-gray-600 font-medium">
            클릭 또는 드래그하여 파일을 업로드하세요
          </p>
          <p className="text-xs text-gray-400 mt-1">
            최대 {maxFiles}개, 장당 {maxSize}MB 이하
          </p>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept={acceptString}
            className="hidden"
            onChange={handleInputChange}
          />
        </div>
      )}

      {helperText && (
        <span
          className={cn("text-xs", error ? "text-red-500" : "text-gray-500")}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};
