import { render, screen } from '@testing-library/react';
import CustomSelect from './Select';

const mockRegister = jest.fn();
const mockControl = jest.fn();

describe('Select', () => {
  it('render select and select option', () => {
    render(
      <CustomSelect
        label="Teste"
        register={mockRegister}
        control={mockControl}
        name={'teste'}
      />,
    );

    screen.debug();
  });
});
