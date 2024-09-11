import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FirstSection from './FirstSection';
import SecSection from './SecSection';
import TheSection from './TheSection';
import TheredSection from './TheredSection';
import Fourth from './Fourth';
import Thetest from './Thetest';
import Themarks from './Themarks';
import Card from './card';
import Footer from './Footer';

const MainContainer = () => {
  return (
    <div>
      <div className="container-fluid">
        <Navbar />
        <div className="content">
          <HeroSection />
        </div>
      </div>

      <div className="container" style={{ marginTop: '70px', marginBottom:'70px' }}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <FirstSection />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
          <SecSection />
          </div>
        </div>
      </div>
      <TheSection />
      <TheredSection />
      <Fourth/>
      <Thetest/>
      <Themarks/>
      <Card/>
      <Footer/>
    </div>
    
  );
};

export default MainContainer;
