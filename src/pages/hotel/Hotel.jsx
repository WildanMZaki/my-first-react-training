import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './hotel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Subs from '../../components/subs/Subs';
import Footer from '../../components/footer/Footer';
import { useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch.js';
import { useLocation } from 'react-router-dom';
import { mainAPI } from '../../utils/text.js';
import Loading from '../../components/loading/Loading';
import { SearchContext } from '../../contexts/SearchContext';

const Hotel = () => {
  const location = useLocation();
  const id = (location.pathname.split('/'))[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const handleOpenSlider = i => {
    setSlideNumber(i);
    setOpenSlider(true);
  }
  const handleMoveSlider = direction => {
    let newSlideNumber;
    if (direction === 'l') {
      newSlideNumber = !slideNumber ? photos.length-1 : slideNumber-1;
    } else {
      newSlideNumber = (slideNumber === (photos.length-1)) ? 0 : slideNumber+1;
    }
    setSlideNumber(newSlideNumber);
  }

  const { data, loading, error } = useFetch(mainAPI(`/hotels/${id}`));
  let hotel;
  if (!loading) { hotel = data.data.hotel; }
  // const photos = [
  //   {
  //     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToqkOaePHNLD2joMJUGnOraymi81cD_3OcQ&usqp=CAU'
  //   },
  //   {
  //     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5GP347Mxp1tQ4KJDZgPdaip1XGcXoj5sDQ&usqp=CAU'
  //   },
  //   {
  //     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fE5UNuEGMSJyVQxqelIc8Ua6OCBPTBgkpg&usqp=CAU'
  //   },
  //   {
  //     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzHyJ3yi5LyTJjT8QYwhHzKDfijeetzbM1A&usqp=CAU'
  //   },
  //   {
  //     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgksOTu8Em8spCTqRbed5nLRqrxPpsfkX-w&usqp=CAU'
  //   },
  //   {
  //     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNJkd7ozA-Y4zVkSL6g2JjR7D_o1L0GGcww&usqp=CAU'
  //   }
  // ];
  
  const { dates, options } = useContext(SearchContext);

  const MILESECONDS_PER_DAY = 1000*60*60*24;
  const dayDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / MILESECONDS_PER_DAY);
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate)

  return (
    <div>
      <Navbar />
      <Header type='list' />
      
      { loading ? <Loading /> : (<div className='hotelContainer'>
        { openSlider && <div className='slider'>
          <FontAwesomeIcon icon={faCircleXmark} className='closeSlider' onClick={() => setOpenSlider(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMoveSlider('l')} />
          <div className='sliderWrapper'>
            <img src={hotel.photos[slideNumber]} alt='Image Slider' className='sliderImg' />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMoveSlider('r')} />
        </div> }

        <div className='hotelWrapper'>
          <button className='bookNow'>
            Reserve or Book Now!
          </button>
          <h1 className='hotelTitle'>{ hotel.name }</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{ hotel.address }</span>
          </div>
          <span className='hotelDistance'>
            Excellent location {hotel.distance} from center
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over ${hotel.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
            { hotel.photos?.map((photo, i) => (
              <div className='hotelImgWrapper' key={`image-${i}`}>
                <img src={photo} alt='Hotel Image' className='hotelImg' onClick={() => handleOpenSlider(i)} />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailTxt'>
              <h1 className='hotelTitle'>{hotel.title}</h1>
              <p className='hotelDesc'>
                {hotel.desc}
              </p>
            </div>
            <div className='hotelDetailPrice'>
              <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sit debitis unde nobis molestias ad, corporis.
              </span>
              <h2>
                <b>${days * hotel.cheapestPrice * options.room}</b> ({days} nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>

        </div>

        <Subs />
        <Footer />
      </div>)}

    </div>
  )
}

export default Hotel
