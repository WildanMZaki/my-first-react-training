import useFetch from '../../hooks/useFetch.js';
import { mainAPI, rating } from '../../utils/text.js';
import Loading from '../loading/Loading.jsx';
import './featuredProperties.css';

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(mainAPI('/hotels?featured=true&lim=4'));
  let hotels;
  if (!loading) { hotels = data.data.hotels; }
  return (
    <div className='fp'>
      { loading ? <Loading /> : (
          hotels.map(hotel => (
            <div className='fpItem' key={hotel._id}>
              <img src={hotel.photos[0]} alt='Property Image' className='fpImg' />
              <span className='fpName'>{hotel.name}</span>
              <span className='fpCity'>{hotel.city}</span>
              <span className='fpPrice'>Starting from ${hotel.cheapestPrice}</span>
              { hotel.rating && <div className='fpRating'>
                  <button>{hotel.rating}</button>
                  <span>{ rating(hotel.rating) }</span>
                </div>
              }
            </div>
          ))
        )
      }
    </div>
  )
}

export default FeaturedProperties
