import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Img variant='top' src={`${product.image}`} className='rounded' />
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
