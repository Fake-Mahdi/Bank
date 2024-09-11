import '../../styles/style.css';

const Card = () =>
{
    return(
        <div style={{marginTop:'60px'}}>
            <div className="container">
                <div className='flexy3'>

                <div className="title2">
                <h1 style={{fontSize:'1'}}>
                Let’s try our service now!
                </h1>
                <div style={{marginTop:'30px' , maxWidth:'450px'}}><p className='paragraph'>Everything you need to accept card payments and grow your business anywhere on the planet.</p></div>
                </div>
                <div>
                <div ><button className="btn btn-primary">Get Started</button></div>
                </div>
                </div>  
            </div>
        </div>
    );
};

export default Card;