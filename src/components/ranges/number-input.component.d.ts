interface INumberInputComponentProps {
  min?: number,
  max?: number,
  step?: number,
  value?: number,
  label?: string,
  onUpdate: React.EventHandler<React.FormEvent<HTMLInputElement>>
  type?: string
}

interface INumberInputComponentState {}

type NumberInputComponentControl = HTMLInputElement;
type NumberInputComponentControls = {
  input: NumberInputComponentControl
};

declare class NumberInputComponent extends React.Component<INumberInputComponentProps, {}> {
  public controls: NumberInputComponentControls;
}