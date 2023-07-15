// React
import { useNavigate } from 'react-router-dom';
// Utils
import { iconShippingx2 } from '@/assets';
// Models
import { ResponseProductListItem } from '@/models';
// Utils
import { amountFormat } from '@/utils';
// Style
import './CardProductList.scss';

/**
 * Functional component that render component card alert.
 *
 * @return React.ReactElement <CardProductList/>
 */
const CardProductList = ({
  id,
  title,
  picture,
  price,
  free_shipping,
  place,
  condition,
}: ResponseProductListItem) => {
  const navigate = useNavigate();
  const redirectToDetail = () => navigate(`/product/${id}`);
  return (
    <div className='card-product-list grid grid-cols-12'>
      <div className='col-span-9 flex'>
        <img
          className='picture cursor-pointer'
          src={picture}
          alt={title}
          onClick={redirectToDetail}
        />
        <div className='text-container text-left'>
          <p
            className='price flex items-center cursor-pointer'
            onClick={redirectToDetail}
          >
            {price.currency} {amountFormat(price.amount)}
            {free_shipping && (
              <img
                className='icon-shipping inline-block ml-2'
                src={iconShippingx2}
                alt='shipping'
              />
            )}
          </p>
          <p className='title'>{title}</p>
          {condition === 'used' && <p className='condition'>Usado</p>}
        </div>
      </div>
      <div className='col-start-10 col-span-3 text-left place-container'>
        <p className='place'>{place}</p>
      </div>
    </div>
  );
};

export default CardProductList;
