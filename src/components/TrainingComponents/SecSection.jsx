import '../../styles/style.css';

const SecSection = () =>
{
    return(

        <div>
            <div className='flex2'>
              <div className="thing">
                <img 
                  src="/assets/Star.svg" 
                  style={{ width: '42px', height: '42px' }} 
                  alt="" 
                />
              </div>
              <div className='info2'>
                <h4>Rewards</h4>
                <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
              </div>
            </div>

            <div className='flex2'>
              <div className="thing">
                <img 
                  src="/assets/Shield.svg" 
                  style={{ width: '42px', height: '42px' }} 
                  alt="" 
                />
              </div>
              <div className='info2'>
                <h4>100% Secured</h4>
                <p>We take proactive steps make sure your information and transactions are secure.</p>
              </div>
            </div>

            <div className='flex2'>
              <div className="thing">
                <img 
                  src="/assets/Send.svg" 
                  style={{ width: '42px', height: '42px' }} 
                  alt="" 
                />
              </div>
              <div className='info2'>
                <h4>Balance Transfer</h4>
                <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
              </div>
            </div>
        </div>
    );
};
export default SecSection;