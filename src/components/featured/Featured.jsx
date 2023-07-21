import './featured.css';

function Featured() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img className="featuredImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKIQdI270gQtU0g2Yrbe7alwPKAVx-dZFyg&usqp=CAU" alt="Property Image" />
        <div className="featuredTitles">
          <h1>Newyork</h1>
          <h2>523 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className="featuredImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxT29rKiRUnd9-pA6gXcfYeYqxuRxEi4WZjA&usqp=CAU" alt="Property Image" />
        <div className="featuredTitles">
          <h1>Jakarta</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className="featuredImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkxV8U00HBTPH67KDxxNRAaTrrj8V-Jd04qA&usqp=CAU" alt="Property Image" />
        <div className="featuredTitles">
          <h1>Dubai</h1>
          <h2>1202 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
