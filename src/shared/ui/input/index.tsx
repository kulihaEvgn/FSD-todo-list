import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './style.module.scss';
import cn from 'classnames';

interface IProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
export const Input = ({className, ...props}: IProps) => {
  return <input {...props} className={cn(className, s.input)} />
};

export default Input;