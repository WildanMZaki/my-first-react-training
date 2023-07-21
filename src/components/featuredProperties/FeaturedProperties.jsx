import './featuredProperties.css';

function FeaturedProperties() {
  return (
    <div className='fp'>
      <div className="fpItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-T_o06x2bVxX1TEzaZBMlUubDxgyKgxdKw&usqp=CAU" alt="" className="fpImg" />
        <span className="fpName">Villa in Metropolitan</span>
        <span className="fpCity">Newyork</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>7.5</button>
          <span>Great</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_f72e1WwsESlgTbATly5zBlQ0z0rEFllyfQ&usqp=CAU" alt="" className="fpImg" />
        <span className="fpName">Cabins in Ubud</span>
        <span className="fpCity">Ubud</span>
        <span className="fpPrice">Starting from $85</span>
        <div className="fpRating">
          <button>9.1</button>
          <span>Awesome</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7u5CFDkKXLyj76l3x_4boyzI6Dmgi5goFRA&usqp=CAU" alt="" className="fpImg" />
        <span className="fpName">Mini Resorts</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $50</span>
        <div className="fpRating">
          <button>8.5</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFLGuWGI10AWMS_psyuQKuZVSkU5MSnQf6w&usqp=CAU" alt="" className="fpImg" />
        <span className="fpName">Glamorous Hotel</span>
        <span className="fpCity">Dubai</span>
        <span className="fpPrice">Starting from $205</span>
        <div className="fpRating">
          <button>9.5</button>
          <span>Awesome</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties
