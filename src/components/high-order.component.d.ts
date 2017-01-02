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