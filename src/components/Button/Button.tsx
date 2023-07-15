// Style
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
}

/**
 * Functional component that render component button.
 *
 * @return React.ReactElement <Button/>
 */
const Button = ({ children }: ButtonProps) => {
  return (
    <div className='button w-full text-center cursor-pointer'>{children}</div>
  );
};

export default Button;
