import '../../styles/style.css';

const Thetest = ()=>
{
    return(
        <div className='container' style={{ marginTop: '60px' }}>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <div className='card' style={{ padding: '35px', margin: '10px' }}>
            <div style={{ marginTop: '27px', marginBottom: '27px' }}>
              <img src="/assets/quotes.svg" style={{ width: '42px', height: '27px' }} alt="quotes" />
            </div>
            <div>
              <p style={{ color: 'white', fontSize: '22px', fontWeight: '400', margin: '10px', fontFamily: '"Poppins", sans-serif' }}>
                Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
              </p>
            </div>
            <div className="flexe">
              <div>
                <img src="/assets/people01.png" style={{ borderRadius: '50%', height: '50px', width: '50px' }} alt="" />
              </div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', fontFamily: '"Poppins", sans-serif' }}>
                  Herman Jensen
                </div>
                <div style={{ fontSize: '15px', color: 'white', fontFamily: '"Poppins", sans-serif' }}>
                  Founder & Leader
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <div className='card' style={{ padding: '35px', margin: '10px' }}>
            <div style={{ marginTop: '27px', marginBottom: '27px' }}>
              <img src="/assets/quotes.svg" style={{ width: '42px', height: '27px' }} alt="quotes" />
            </div>
            <div>
              <p style={{ color: 'white', fontSize: '22px', fontWeight: '400', margin: '10px', fontFamily: '"Poppins", sans-serif' }}>
                Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
              </p>
            </div>
            <div className="flexe">
              <div>
                <img src="/assets/people02.png" style={{ borderRadius: '50%', height: '50px', width: '50px' }} alt="" />
              </div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', fontFamily: '"Poppins", sans-serif' }}>
                Steve Mark
                </div>
                <div style={{ fontSize: '15px', color: 'white', fontFamily: '"Poppins", sans-serif' }}>
                  Founder & Leader
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <div className='card' style={{ padding: '35px', margin: '10px' }}>
            <div style={{ marginTop: '27px', marginBottom: '27px' }}>
              <img src="/assets/quotes.svg" style={{ width: '42px', height: '27px' }} alt="quotes" />
            </div>
            <div>
              <p style={{ color: 'white', fontSize: '22px', fontWeight: '400', margin: '10px', fontFamily: '"Poppins", sans-serif' }}>
                Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
              </p>
            </div>
            <div className="flexe">
              <div>
                <img src="/assets/people03.png" style={{ borderRadius: '50%', height: '50px', width: '50px' }} alt="" />
              </div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', fontFamily: '"Poppins", sans-serif' }}>
                Kenn Gallagher
                </div>
                <div style={{ fontSize: '15px', color: 'white', fontFamily: '"Poppins", sans-serif' }}>
                  Founder & Leader
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Thetest;