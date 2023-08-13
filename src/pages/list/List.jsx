import './list.css';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import { format } from 'date-fns';
import { mainAPI, pors } from '../../utils/text.js';
import { 
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import SearchItem from '../../components/searchItem/SearchItem';
import Subs from '../../components/subs/Subs';
import Footer from '../../components/footer/Footer';
import useFetch from '../../hooks/useFetch.js';
import Loading from '../../components/loading/Loading';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);


  const { data, loading, error, reFetch } = useFetch(
    mainAPI(`/hotels?city=${destination}&min=${min || 0}&max=${max || 100000000}`)
  );

  const handleSearch = () => {
    reFetch();
  }

  let hotels;
  if (!loading) { hotels = data.data.hotels; }
  return (
    <div>
      <Navbar />
      <Header type='list'/>

      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label htmlFor='destination'>Destination</label>
              <input type='text' name='destination' id='destination' placeholder={destination}/>
            </div>
            <div className='lsItem'>
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                <FontAwesomeIcon icon={faCalendarDays}/>
                <span>
                {`
                  ${format(date[0].startDate, 'd-M, yyyy')}
                  to 
                  ${format(date[0].endDate, 'd-M, yyyy')}
                `}
                </span>
              { openDate && <DateRange 
                className='date'
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
              />}
              </span>
            </div>
            <div className='lsItem'>
              <label>Options</label>
              <div className='lsOptions'>
                <div className='lsOptionItem'>
                  <span className='lsOptionTxt'>
                    Min price <small>per night</small>
                  </span>
                  <input type='number' onChange={e => setMin(e.target.value)} className='lsOptionInput' />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionTxt'>
                    Max price <small>per night</small>
                  </span>
                  <input type='number' onChange={e => setMax(e.target.value)} className='lsOptionInput' />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionTxt'>
                    Adult
                  </span>
                  <input type='number' min={1} className='lsOptionInput' placeholder={options.adult} />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionTxt'>
                    Children
                  </span>
                  <input type='number' min={0} className='lsOptionInput' placeholder={options.children} />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionTxt'>
                    Room
                  </span>
                  <input type='number' min={1} className='lsOptionInput' placeholder={options.room} />
                </div>
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className='listResult'>
            { loading ? <Loading /> : (
              <>
                { hotels.map(hotel => (
                  <SearchItem key={hotel._id} hotel={hotel} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default List
