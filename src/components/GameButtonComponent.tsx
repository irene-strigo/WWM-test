import { GameButton } from './CommonStyles';

type Props = {
  link: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

const NavigationButton = ({ link, label, onClick }: Props) => {
  return (
    <GameButton to={link} onClick={onClick}>
      {label}
    </GameButton>
  );
};

export default NavigationButton;
