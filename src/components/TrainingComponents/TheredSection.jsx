import '../../styles/style.css';

const TheredSection = ()=>
{
    return(
        <div style={{marginTop:'85px'}}>
            <div className="container">
          <div className='row'>
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <div className="title2">
                <h1 style={{fontSize:'1'}}>
                Find a better card deal <br />
                in few easy steps.
                </h1>
            </div>
            <div style={{marginTop:'30px'}}><p className='paragraph'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p></div>
            <div style={{marginTop:'25px'}}><button className="btn btn-primary">Get Started</button></div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
              <img src="/assets/card.png" className="img-responsive" alt="" srcSet="" />
            </div>
          </div>
      </div>
        </div>
    );
};
export default TheredSection;