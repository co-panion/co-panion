// RHF의 상태(값, 에러)를 UI 컴포넌트의 Props로 자동 매핑

"use client";

import { useFormContext, Controller } from "react-hook-form";
import { TextField, type TextFieldProps } from "@co-panion/ui";

/**
 * 순수 뷰인 TextFieldProps에서 RHF가 자체적으로 관리하는 제어 속성을 제거하고,
 * 폼 식별자인 name 속성을 필수로 지정
 */
export type RHFTextFieldProps = Omit<
  TextFieldProps,
  "value" | "onChange" | "onBlur"
> & {
  name: string;
};

export function RHFTextField({ name, ...props }: RHFTextFieldProps) {
  // 컴포넌트가 <FormProvider> 내부에서 사용됨을 전제로 하여 control 객체를 자동 주입받습니다.
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <TextField
          {...props}
          ref={ref}
          name={name}
          // RHF의 제어 값을 주입하되, undefined일 경우 빈 문자열로 fallback 처리 (제어 컴포넌트 경고 방지)
          value={value ?? ""}
          onChange={onChange}
          onBlur={onBlur}

          // RHF의 유효성 검사 에러 상태를 순수 UI 컴포넌트의 Props 규격에 맞게 자동 바인딩
          validationState={
            error ? "invalid" : (props.validationState ?? "default")
          }
          {...(error?.message
            ? { validationMessage: error.message }
            : props.validationMessage
              ? { validationMessage: props.validationMessage }
              : {})}
        />
      )}
    />
  );
}
