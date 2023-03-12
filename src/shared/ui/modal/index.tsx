import s from './style.module.scss';
import {PropsWithChildren} from "react";
import cn from 'classnames';

interface IProps extends PropsWithChildren{
  isOpen: boolean;
  onClose: () => void;
}
export const Modal = ({isOpen, onClose, children}: IProps) => {

  return (
    <div className={cn(
      s.wrap,
      {[s.close] : !isOpen}
    )}>
      <div className={s.overlay} onClick={() => onClose()}/>
      <div className={s.modal}>{children}</div>
    </div>
  );
};

export default Modal;