import './Card.css'
import { Link } from 'react-router-dom';

function Card({title="titulo por defecto",description="description por defecto"}){


  return (
    <div className="Card">
     <Link to={title}> <h2 className='Card__title'>{title}</h2></Link>
      <p className='Card__description'>{description}</p>
      
    </div>
  );


}

export default Card;
