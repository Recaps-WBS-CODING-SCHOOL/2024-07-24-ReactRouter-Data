import { Link } from 'react-router-dom';

const Card = ({ star }) => {
  const { featured, url, heading, description } = star;

  return (
    <Link to={`star/${star.id}`} className='star' data-feature={featured}>
      <div>
        <img src={url} alt={heading} className='star__img' />
      </div>
      <h3 className='star__heading'>{heading}</h3>
      <p className='star__description'>{description}</p>
    </Link>
  );
};

export default Card;
