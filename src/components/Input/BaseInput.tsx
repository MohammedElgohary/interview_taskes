import { Controller, RegisterOptions } from 'react-hook-form'
import { FormGroup, Input, Label } from 'reactstrap'
import { InputType } from 'reactstrap/types/lib/Input'

export interface BaseInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  control: any;
  type?: InputType;
  rules?: Omit<
    RegisterOptions<any, any>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  defaultValue?: any;

  [key: string]: any;
}

export function BaseInput({
  control,
  name,
  label = name,
  placeholder = `Enter ${label}`,
  type = "text",
  rules,
  defaultValue,
  ...props
}: BaseInputProps) {
  if (type === "switch")
    return (
      <>
        <Label className="text-capitalize">{label}</Label>
        <FormGroup className="mb-sm-3 mb-xs-3" switch>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            shouldUnregister
            render={({ field, fieldState }) => (
              <>
                <Input
                  type={type}
                  placeholder={placeholder}
                  defaultChecked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  onBlur={field.onBlur}
                  {...props}
                />

                <div className="text-danger">{fieldState?.error?.message}</div>
              </>
            )}
          />
        </FormGroup>
      </>
    );

  return (
    <>
      <FormGroup className="mb-sm-3 mb-xs-3">
        <Label className="text-capitalize">{label}</Label>

        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={rules}
          shouldUnregister
          render={({ field, fieldState }) => (
            <>
              <Input
                type={type}
                placeholder={placeholder}
                defaultValue={field.value}
                onChange={(e) => field?.onChange(e.target.value)}
                onBlur={field.onBlur}
                {...props}
              />

              <div className="text-danger">{fieldState?.error?.message}</div>
            </>
          )}
        />
      </FormGroup>
    </>
  );
}
