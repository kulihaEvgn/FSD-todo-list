import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from './style.module.scss';
import cn from 'classnames';

interface IProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button = ({className, children, ...props}: IProps) => {
  return <button className={cn(className, s.button)} {...props}>
    {children}
  </button>
};

export default Button;