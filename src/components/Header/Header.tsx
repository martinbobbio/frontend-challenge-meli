// React
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  return (
    <div className='header flex items-center'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12'>
          <div className='col-start-1 col-span-12 sm:col-start-2 sm:col-span-10 px-4 sm:px-0 flex items-center'>
            <img
              className='w-12 h-100 cursor-pointer'
              src={CONFIG.branding.logo}
              onClick={() => navigate('/')}
              alt='logo'
            />
            <InputSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
