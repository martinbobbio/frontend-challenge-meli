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

  const renderTitle = () => (
    <>
      <p className='condition'>
        {condition === 'used' && 'Usado'}
        {condition === 'new' && 'Nuevo'}
        {' - '}
        {`${sold_quantity} vendidos`}
      </p>
      <p className='title'>{title}</p>
    </>
  );

  return (
    <div className='card-product-detail grid grid-cols-12'>
      <div className='col-start-1 col-span-12 lg:col-start-2 lg:col-span-10 text-container text-left lg:hidden'>
        <div>{renderTitle()}</div>
      </div>
      <div className='col-span-12 lg:col-span-9 flex mx-auto'>
        <img
          className='picture w-full h-auto'
          src={picture}
          alt={title}
          onClick={redirectToDetail}
        />
      </div>
      <div className='col-start-1 col-span-12 lg:col-start-10 lg:col-span-3 text-left text-container'>
        <div className='hidden lg:block'>{renderTitle()}</div>
        <p className='price'>
          {price.currency} {amountFormat(price.amount)}
        </p>
        <Button>Comprar</Button>
      </div>
      {description && (
        <div className='col-span-12 lg:col-span-9 text-left description-container'>
          <p className='description-label'>Descripción del producto</p>
          <p className='description'>{description}</p>
        </div>
      )}
    </div>
  );
};

export default CardProductDetail;
