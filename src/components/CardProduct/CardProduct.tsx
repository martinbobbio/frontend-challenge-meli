// Utils
import { iconShippingx2 } from '@/assets';
// Models
import { ResponseProductsItem } from '@/models';
// Style
import './CardProduct.scss';

/**
 * Functional component that render component card alert.
 *
 * @return React.ReactElement <CardProduct/>
 */
const CardProduct = ({
  title,
  picture,
  price,
  free_shipping,
}: ResponseProductsItem) => {
  return (
    <div className='card-product grid grid-cols-12'>
      <div className='col-start-2 col-span-7 flex'>
        <img className='picture' src={picture} alt={title} />
        <div className='text-container text-left'>
          <p className='price flex items-center'>
            {price.currency} {price.amount}
            {free_shipping && (
              <img
                className='icon-shipping inline-block ml-2'
                src={iconShippingx2}
                alt='shipping'
              />
            )}
          </p>
          <p className='title'>{title}</p>
          <p className='title'>{free_shipping ? 'si' : 'no'}</p>
        </div>
      </div>
      <div className='col-start-10 col-span-3 text-left place-container'>
        <p className='place'>Capital Federal</p>
      </div>
    </div>
  );
};

export default CardProduct;
