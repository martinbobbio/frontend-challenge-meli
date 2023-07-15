// React
import { useNavigate } from 'react-router-dom';
// Components
import { Button } from '@/components';
// Models
import { ResponseProductDetailItem } from '@/models';
// Utils
import { amountFormat } from '@/utils';
// Style
import './CardProductDetail.scss';

/**
 * Functional component that render component card alert.
 *
 * @return React.ReactElement <CardProductDetail/>
 */
const CardProductDetail = ({
  id,
  title,
  picture,
  price,
  condition,
  sold_quantity,
  description,
}: ResponseProductDetailItem) => {
  const navigate = useNavigate();
  const redirectToDetail = () => navigate(`/product/${id}`);
  return (
    <div className='card-product-detail grid grid-cols-12'>
      <div className='col-span-9 flex mx-auto'>
        <img
          className='picture w-full h-auto'
          src={picture}
          alt={title}
          onClick={redirectToDetail}
        />
      </div>
      <div className='col-start-10 col-span-3 text-left text-container'>
        <p className='condition'>
          {condition === 'used' && 'Usado'}
          {condition === 'new' && 'Nuevo'}
          {' - '}
          {`${sold_quantity} vendidos`}
        </p>
        <p className='title'>{title}</p>
        <p className='price'>
          {price.currency} {amountFormat(price.amount)}
        </p>
        <Button>Comprar</Button>
      </div>
      {description && (
        <div className='col-span-9 text-left description-container'>
          <p className='description-label'>Descripción del producto</p>
          <p className='description'>{description}</p>
        </div>
      )}
    </div>
  );
};

export default CardProductDetail;
