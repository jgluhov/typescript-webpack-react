///<reference path="../high-order.component.d.ts" />
///<reference path="./number-input.component.d.ts" />

interface IInput {
  key: number,
  value: number,
  min: number,
  max: number
}

type RangesComponentProps = {};

type RangesComponentState = {
  inputs: IInput[]
};

type RefsComponentControl = {
  key: number,
  instance: NumberInputComponent
};

type RefsComponentControls = RefsComponentControl[];