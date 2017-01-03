type HighOrderComponentProps = {};

interface HighOrderComponentState {
  count: number;
}

interface CommonProps extends HighOrderComponentState {
  children?: React.ReactNode,
  update: React.EventHandler<React.MouseEvent<HTMLLabelElement | HTMLButtonElement>>
}

interface ButtonComponentProps extends CommonProps {}

interface LabelComponentProps extends CommonProps {}

interface StatelessComponent<P> {
  (props?: P, context?: any): React.ReactElement<any>;
}

interface ComponentClass<P> {
  new(props?: P, context?: any): React.Component<P, any>;
}

type ReactComponent = ComponentClass<any> | StatelessComponent<any>;