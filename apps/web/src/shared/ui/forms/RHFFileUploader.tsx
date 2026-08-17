"use client";

import { useFormContext, Controller } from "react-hook-form";
import { FileUploader, type FileUploaderProps } from "@co-panion/ui";

export type RHFFileUploaderProps = Omit<
  FileUploaderProps,
  "value" | "onChange"
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
        <FileUploader
          {...props}
          value={(value as File[]) ?? []}
          onChange={onChange}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}
