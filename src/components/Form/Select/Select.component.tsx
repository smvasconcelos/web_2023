import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";

import { ErrorMessage } from "../ErrorMessage";

import { type ISelectProps } from "./Select.types";

import { Container, Label } from "./Select.styles";

export function CustomSelect({
  name,
  options,
  label,
  defaultValue,
  placeholder,
  width,
  onClick,
  disabled,
}: ISelectProps): JSX.Element {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, formState }) => (
        <Container width={width} error={!!errors[name]?.message}>
          <Label>{label}</Label>
          <Select
            noOptionsMessage={() => <>Nenhum item para esses filtros ...</>}
            isDisabled={disabled}
            placeholder={placeholder}
            styles={{
              control: (base) => ({
                ...base,
                padding: "1px",
                borderRadius: "8px",
              }),
              menuPortal: (base) => ({
                ...base,
                fontSize: 14,
              }),
            }}
            menuPosition="fixed"
            menuPortalTarget={document.body}
            defaultValue={defaultValue}
            options={options}
            value={options.find((c) => c.value === value)}
            onChange={(val) => {
              onChange(val?.value);
              if (onClick) {
                onClick(val?.value);
              }
            }}
          />
          {errors[name]?.message && (
            <ErrorMessage message={errors[name]?.message?.toString() ?? ""} />
          )}
        </Container>
      )}
    />
  );
}
