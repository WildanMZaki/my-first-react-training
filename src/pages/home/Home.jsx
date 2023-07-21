import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import Subs from '../../components/subs/Subs';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      
      <div className="homeContainer">
        <Featured />

        <h1 className="homeTitle">Browse by property types</h1>
        <PropertyList />

        <h1 className="homeTitle">Homes guests loves</h1>
        <FeaturedProperties />

        <Subs />

        <Footer />
      </div>
    </div>
  );
}

export default Home
