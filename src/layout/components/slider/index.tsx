import { Slider as AntSlider } from 'antd';
import React, { FunctionComponent, memo, useMemo } from 'react';

interface Props {
    value: number;
    min?: number;
    max?: number;
    step?: number;
    showMinMax?: boolean;
    // eslint-disable-next-line no-unused-vars
    onChange?(value: number): void;
    // eslint-disable-next-line no-unused-vars
    onAfterChange?(value: number): void;
}

const SliderBase: FunctionComponent<Props> = (props) => {
  const {
    value,
    min = 0,
    max = 100,
    step = 1,
    showMinMax = true,
    onChange,
    onAfterChange,
  } = props;

  const marks = useMemo(() => ({
    [min]: min,
    [max]: max,
  }), [min, max]);

  return (
    <AntSlider
      marks={showMinMax ? marks : undefined}
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      onAfterChange={onAfterChange}
    />
  );
};

export const Slider = memo(SliderBase);
