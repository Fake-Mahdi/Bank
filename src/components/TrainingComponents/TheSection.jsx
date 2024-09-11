import '../../styles/style.css';

const TheSection = ()=>
{
    return(
        <div>
            <div className="container">
          <div className='row'>
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
              <img src="/assets/bill.png" className="img-responsive" alt="" srcSet="" />
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <div className="title2">
                <h1 style={{fontSize:'1'}}>
                Easily control your <br />
                billing & invoicing
                </h1>
            </div>
            <div style={{marginTop:'30px'}}><p className='paragraph'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p></div>
            <div style={{marginTop:'25px'}} className='flexbox'>
              <div><img src="/assets/apple.svg" style={{width:'128px',height:'40px'}} alt="" srcSet="" /></div>
              <div><img src="/assets/google.svg" style={{width:'128px',height:'40px'}} alt="" srcSet="" /></div>
            </div>
            </div>
          </div>
      </div>
        </div>
    );
};
export default TheSection;