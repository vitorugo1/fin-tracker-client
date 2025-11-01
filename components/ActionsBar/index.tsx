import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '../ui/input-group';

export function ActionsBar() {
  return (
    <section className='flex gap-4  px-8 py-4 max-w-150'>
      <InputGroup>
        <InputGroupInput placeholder='Adicionar ação (ex: PETR4.SA, AAPL)' />
        <InputGroupAddon align='inline-end'>
          <InputGroupButton variant='ghost'>Adicionar</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </section>
  );
}
