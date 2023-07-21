import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Subs from "../../components/subs/Subs";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const Hotel = () => {
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
  const photos = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToqkOaePHNLD2joMJUGnOraymi81cD_3OcQ&usqp=CAU'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5GP347Mxp1tQ4KJDZgPdaip1XGcXoj5sDQ&usqp=CAU'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fE5UNuEGMSJyVQxqelIc8Ua6OCBPTBgkpg&usqp=CAU'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzHyJ3yi5LyTJjT8QYwhHzKDfijeetzbM1A&usqp=CAU'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgksOTu8Em8spCTqRbed5nLRqrxPpsfkX-w&usqp=CAU'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNJkd7ozA-Y4zVkSL6g2JjR7D_o1L0GGcww&usqp=CAU'
    }
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      
      <div className="hotelContainer">
        { openSlider && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="closeSlider" onClick={() => setOpenSlider(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMoveSlider("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="Image Slider" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMoveSlider("r")} />
        </div> }

        <div className="hotelWrapper">
          <button className="bookNow">
            Reserve or Book Now!
          </button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            { photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={`image-${i}`}>
                <img src={photo.src} alt="Hotel Image" className="hotelImg" onClick={() => handleOpenSlider(i)} />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTxt">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia est velit labore veritatis? Aperiam perferendis sit doloremque necessitatibus, quos commodi possimus laborum praesentium incidunt facilis reprehenderit. Quas, recusandae quam! Exercitationem, accusamus beatae eveniet assumenda natus facere saepe odit voluptas eius unde quis minima dolor dicta itaque dolores in cupiditate repellat cumque tenetur asperiores quos quia fuga officia. Labore modi voluptate assumenda neque sint explicabo dolorem optio sequi quo eius unde, soluta fugit fugiat nobis saepe in error reiciendis corrupti! Quam?
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sit debitis unde nobis molestias ad, corporis.
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>

        </div>

        <Subs />
        <Footer />
      </div>

    </div>
  )
}

export default Hotel
