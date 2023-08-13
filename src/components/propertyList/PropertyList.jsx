import useFetch from '../../hooks/useFetch.js';
import { mainAPI, pors } from '../../utils/text.js';
import Loading from '../loading/Loading.jsx';
import './propertyList.css';

function PropertyList() {
  const { data, loading, error } = useFetch(mainAPI('/hotels/count?type=a'));
  let types;
  if (!loading) { types = data.data.types; }
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIyhzHxmL2pbT5ooUtRcECrgJp5Y3mJ9BHg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcr81O0Dqhy7dep3ZqEvopmKYR9vw2tHDiCA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTMGsYWq_879eGtHylaXuzlwKO5xB_yS6UQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHYGjMPiAx_6XT7NGBzSaaPHD4qb-cgyHew&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQID0aZOskn64PdjeIKNNWiIMRSVq9TBtU7kQ&usqp=CAU',
  ];
  return (
    <div className='propertyList'>
      { loading ? ( <Loading /> ) : (
        <>
          {
            data && images.map((img, i) => (
              <div className='pListItem' key={`pListItem-${i}`}>
                <img src={img} alt='Property Image' className='pListImg'/>
                <div className='pListTitles'>
                  <h1>{ pors(types[i]?.count, types[i]?.type) }</h1>
                  <h2>{ types[i]?.count } { pors(types[i]?.count, types[i]?.type) }</h2>
                </div>
              </div>
            ))
          }
        </>
      )}
      
    </div>
  )
}

export default PropertyList
