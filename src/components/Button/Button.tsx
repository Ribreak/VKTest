import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import './Buttom.styl'
  
  interface ButtonProps {
    label: string;
    styleType?: 'primary' | 'secondary';
    size?: 28 | 36 | 56;
    state?: 'enabled' | 'loading' | 'disabled';
    counter?: boolean;
    focused?: boolean;
    onClick?: () => void;
  }
  
  const Button: React.FC<ButtonProps> = ({
    label = 'Что сделать',
    styleType = 'primary',
    size = 36,
    state = 'enabled',
    counter = false,
    focused = false,
    onClick,
  }) => {
    const [count, setCount] = useState(0);
    const [buttonState, setButtonState] = useState(state);

    function handleClickButton(): void {
        setButtonState('loading');
        setTimeout(() => setButtonState('enabled'), 2000);
        setCount(count + 1);
    }

    const buttonClass = `button button--${styleType} button--${size} button--${buttonState} ${focused ? 'button-focused' : ''}`;
    const truncatedLabel = label.length > 20 ? `${label.slice(0, 10)}...` : label; 
  
    return (
      <button className={buttonClass} disabled={buttonState === 'disabled'} onClick={handleClickButton}>
        <span className="label">{truncatedLabel}</span>
        {counter && <Counter valueType='number' value={count.toString()} />}
        <svg className='loader' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke-width="16" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="4" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
      </button>
    );
  };
  
  export default Button;
