// React
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// Assets
import { iconSearchx2 } from '@/assets';
// Style
import './InputSearch.scss';

/**
 * Functional component that render component input search.
 *
 * @return React.ReactElement <InputSearch/>
 */
const InputSearch = () => {
  const { search } = useParams();
  const [inputValue, setInputValue] = useState(search || '');
  const navigate = useNavigate();

  /**
   * Function that handle changes and update state.
   *
   * @return void
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  /**
   * Function that handle submit and fetch the data.
   *
   * @return void
   */
  const handleSubmit = () => {
    if (inputValue.trim()) navigate(`/search/${inputValue}`);
  };

  return (
    <div className='w-full relative'>
      <input
        className='input-search'
        type='text'
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='Nunca dejes de buscar'
        id='input-search'
      />
      <div
        onClick={handleSubmit}
        className='search-icon-container flex items-center justify-center cursor-pointer absolute top-0 right-0'
      >
        <img className='search-icon' src={iconSearchx2} alt='search-icon' />
      </div>
    </div>
  );
};

export default InputSearch;
