import '../../styles/style.css';
import DetailSection from './DetailSection';
const HeroSection = () => {
  return (
    <div className='container-fluid' style={{ paddingTop: '120px' }}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
          <div className='elements'>
            <div className='flex'>
              <div>
                <img 
                  src="/assets/Discount.svg" 
                  style={{ width: '32px', height: '32px' }} 
                  alt="" 
                />
              </div>
              <div className='info'>
                <span style={{ color: 'white' }}>20%</span> Discount For 
                <span style={{ color: 'white' }}> 1 Month</span> Account
              </div>
            </div>
            <div className='title'>
                <h1>The Next <br /><span className='generation'>Generation</span><br /> Payment <br /> Method.</h1>
            </div>
            <div>
                <p className='paragraph'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <div>
                <img src="/assets/robot.png" alt="" className="img-responsive" />
                <div className="pink__gradient"></div>
                <div className="white__gradient"></div>
                <div className="blue__gradient"></div>
            </div>
        </div>
      </div>
      <DetailSection/>
      
    </div>
  );
};

export default HeroSection;
