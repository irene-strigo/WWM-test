import { ModalButtonElement } from './CommonStyles';

type Props = {
  link: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

const ModalButton = ({ link, label, onClick }: Props) => {
  return (
    <ModalButtonElement to={link} onClick={onClick}>
      {label}
    </ModalButtonElement>
  );
};

export default ModalButton;
