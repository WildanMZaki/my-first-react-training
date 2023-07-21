import './propertyList.css';

function PropertyList() {
  return (
    <div className="propertyList">
      <div className="pListItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIyhzHxmL2pbT5ooUtRcECrgJp5Y3mJ9BHg&usqp=CAU" alt="" className="pListImg"/>
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>1212 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcr81O0Dqhy7dep3ZqEvopmKYR9vw2tHDiCA&usqp=CAU" alt="" className="pListImg"/>
        <div className="pListTitles">
          <h1>Appartements</h1>
          <h2>502 apparts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTMGsYWq_879eGtHylaXuzlwKO5xB_yS6UQ&usqp=CAU" alt="" className="pListImg"/>
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>338 resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHYGjMPiAx_6XT7NGBzSaaPHD4qb-cgyHew&usqp=CAU" alt="" className="pListImg"/>
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>2098 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQID0aZOskn64PdjeIKNNWiIMRSVq9TBtU7kQ&usqp=CAU" alt="" className="pListImg"/>
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>2098 cabins</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList
