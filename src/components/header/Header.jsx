import { 
  faBed, faBuilding, faCalendarDays, faCar, faPerson, faPlane, faTaxi 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./header.css";
import { useState } from "react";
import { format } from "date-fns";
import { pors } from "../../utils/text.js";
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions( prev => { 
      return {
      ...prev, [name]: operation === 'i' ? options[name] +1 : options[name] -1,
      }
    })
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/hotels', { state: {destination, date, options} })
  }

  return (
    <div className="header">
      <div className={type === 'list'? 'headerContainer listMode': 'headerContainer'}>
        <div className="headerList">

          <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed}/>
            <span>Stays</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane}/>
            <span>Flights</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faCar}/>
            <span>Car Rentals</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faBuilding}/>
            <span>Attractions</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi}/>
            <span>Airport Taxis</span>
          </div>

        </div>

        { type !== 'list' && <>
        <h1 className="headerTitle">A Lifetime of Discount?! It's Genius</h1>
        <p className="headerDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem, officia, incidunt placeat libero quasi consequuntur fuga et provident eius distinctio omnis porro, aliquid facere hic voluptates? Esse, ipsam nihil.</p>
        <button className="headerBtn">Sign In / Register</button>

          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerSearchIcon" />
              <input type="text" name="" id="" 
                placeholder="Where are you going?"
                className="headerSearchInput"
                onChange={e => setDestination(e.target.value)}
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerSearchIcon" />
              <span className="headerSearchText" onClick={() => setOpenDate(!openDate)}>
                {`
                  ${format(date[0].startDate, "d-M, yyyy")}
                  to 
                  ${format(date[0].endDate, "d-M, yyyy")}
                `}
              </span>
              { openDate && <DateRange 
                className="date"
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
              />}
            </div>

            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerSearchIcon" />
              <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>
                {`
                ${options.adult} ${pors(options.adult, 'adult')} - 
                ${options.children} ${pors(options.children, 'child', 'children')} - 
                ${options.room} ${pors(options.room, 'room')}
                `}
              </span>

              { openOptions && <div className="options">
                <div className="optionItem">
                  <span className="optionTxt">{`${pors(options.adult, 'Adult')}`}</span>
                  <div className="optionCounter">
                    <button 
                      disabled={options.adult <= 1} 
                      className="optionCounterBtn" 
                      onClick={() => handleOption('adult', 'd')}
                    >-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterBtn" onClick={() => handleOption('adult', 'i')}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionTxt">{`${pors(options.children, 'Child', 'Children')}`}</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 0}
                      className="optionCounterBtn" 
                      onClick={() => handleOption('children', 'd')}
                    >-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterBtn" onClick={() => handleOption('children', 'i')}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionTxt">{`${pors(options.room, 'Room')}`}</span>
                  <div className="optionCounter">
                    <button 
                      disabled={options.room <= 1}
                      className="optionCounterBtn" 
                      onClick={() => handleOption('room', 'd')}
                    >-</button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optionCounterBtn" onClick={() => handleOption('room', 'i')}>+</button>
                  </div>
                </div>
              </div> }            
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </> }
      </div>
    </div>
  );
}

export default Header
