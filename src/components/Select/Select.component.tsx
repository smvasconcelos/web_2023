import { useState } from "react";

import { Icons } from "global/icons.constants";
import Select, {
  components,
  type MultiValue,
  type SingleValue,
} from "react-select";

import { type ISelectProps } from "./Select.types";

import { Container, Label } from "./Select.styles";

export function CustomSelect({
  options,
  label,
  defaultValue,
  onChange,
  icon,
  placeholder,
  isMulti,
}: ISelectProps): JSX.Element {
  const Icon = icon ? Icons[icon] : undefined;
  const [value, setValue] = useState<
    MultiValue<string | number> | SingleValue<string | number>
  >(defaultValue?.value ?? "");

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Select
        isMulti={isMulti}
        components={{
          // eslint-disable-next-line react/prop-types
          Control: ({ children, ...rest }) => (
            <components.Control {...rest}>
              {" "}
              {Icon && <Icon />} {children}
            </components.Control>
          ),
        }}
        styles={{
          control: (base) => ({ ...base, padding: "0.5rem", borderRadius: 8 }),
          menuPortal: (base) => ({ ...base, fontSize: 14 }),
        }}
        placeholder={placeholder}
        isOptionDisabled={() => Array.isArray(value) && value.length >= 2}
        menuPosition="fixed"
        menuPortalTarget={document.body}
        options={options}
        value={value}
        onChange={(val) => {
          setValue(val);
          onChange(val);
        }}
      />
    </Container>
  );
}