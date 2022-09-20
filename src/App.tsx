import { ForwardRefRenderFunction } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import CustomSelect from './Select';

function App() {
  const { control, handleSubmit, register, formState } = useForm();

  const { errors } = formState;

  function formSubmit(data: any) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <CustomSelect
        placeholder="Selecione um ponto focal..."
        label="Ponto Focal | Educacional"
        name="focalAndEducacionalPoint"
        register={{ ...register('focalAndEducacionalPoint') }}
        control={control}
      />
      <button type="submit">Testar</button>
    </form>
  );
}

export default App;
