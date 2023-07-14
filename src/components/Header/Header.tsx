// Constants
import { CONFIG } from '@/constants';
// Components
import { InputSearch } from '@/components';
// Style
import './Header.scss';

/**
 * Functional component that render component header.
 *
 * @return React.ReactElement <Header/>
 */
const Header = () => {
  return (
    <div className='header flex items-center'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12'>
          <div className='col-start-2 col-span-10 flex items-center'>
            <img className='w-12 h-100' src={CONFIG.branding.logo} alt='logo' />
            <InputSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
