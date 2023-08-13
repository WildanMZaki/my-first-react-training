import useFetch from '../../hooks/useFetch.js';
import { mainAPI, pors } from '../../utils/text.js';
import Loading from '../loading/Loading.jsx';
import './featured.css';

const Featured = () => {
  const { data, loading, error } = useFetch(mainAPI('/hotels/count?cities=Cianjur,Bandung,Bogor'));
  let cities;
  if (!loading) { cities = data.data.cities; }
  return (
    <div className='featured'>
      { loading ? (
        <Loading />
      ) : (
        <>        
          <div className='featuredItem'>
            <img className='featuredImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKIQdI270gQtU0g2Yrbe7alwPKAVx-dZFyg&usqp=CAU' alt='Property Image' />
            <div className='featuredTitles'>
              <h1>{ cities[0].city }</h1>
              <h2>{ cities[0].count } { pors(cities[0].count, 'property', 'properties')}</h2>
            </div>
          </div>
          <div className='featuredItem'>
            <img className='featuredImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxT29rKiRUnd9-pA6gXcfYeYqxuRxEi4WZjA&usqp=CAU' alt='Property Image' />
            <div className='featuredTitles'>
            <h1>{ cities[1].city }</h1>
              <h2>{ cities[1].count } { pors(cities[1].count, 'property', 'properties')}</h2>
            </div>
          </div>
          <div className='featuredItem'>
            <img className='featuredImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkxV8U00HBTPH67KDxxNRAaTrrj8V-Jd04qA&usqp=CAU' alt='Property Image' />
            <div className='featuredTitles'>
            <h1>{ cities[2].city }</h1>
              <h2>{ cities[2].count } { pors(cities[2].count, 'property', 'properties')}</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
