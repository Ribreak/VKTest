import React, { } from 'react';
import './Counter.styl'

interface CounterProps {
  valueType: string
  value: string;
  styleType?: 'primary' | 'secondary';
  size?: 8 | 12 | 16 | 20 | 24;
  stroke?: boolean;
  pulse?: boolean;
}

const Counter: React.FC<CounterProps> = ({
  valueType = 'number',
  value = '1',
  styleType = 'primary',
  size = 16,
  stroke = false,
  pulse = false,
}) => {

  let formattedValue: string | number = 1;
  if (valueType === 'number') {
    if (parseInt(value) > 99)
      formattedValue = '99+';
    else 
      formattedValue = value.toString();
  }
  else {
    if (value.length > 3)
      formattedValue = value.slice(0, 3)
    else 
      formattedValue = value
  }

  const className = `counter counter--${styleType} counter--${size} ${stroke ? 'counter--stroke' : ''} ${(pulse && size < 16) ? 'counter--pulse' : ''}`;

  return (
    <div className={className}>
      {formattedValue}
    </div>
  );
};

export default Counter;