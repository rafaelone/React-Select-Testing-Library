import { ForwardRefRenderFunction } from 'react';
import { Controller } from 'react-hook-form';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import Select from 'react-select';

const options = [{ label: 'Morango', value: 'morango' }];

type DefaultSelectProps = StateManagerProps & {
  label: string;
  register?: any;
  control: any;
  name: string;
};

const CustomSelect: ForwardRefRenderFunction<
  HTMLInputElement,
  DefaultSelectProps
> = ({ label, register, control, name, ...rest }: DefaultSelectProps) => {
  return (
    <>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...register}
            name={name}
            options={options}
            {...rest}
            onChange={(options: any) => {
              if (rest.isMulti) {
                const multiOptions = options;
                const value = multiOptions.map((option: any) => option.value);
                field.onChange(value);
              } else {
                field.onChange(options.value);
              }
            }}
          />
        )}
      />
    </>
  );
};

export default CustomSelect;
