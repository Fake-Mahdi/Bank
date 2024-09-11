import '../../styles/style.css';

const Themarks = () =>
{
    return(
        <div style={{marginTop : '70px'}} className='container'>
            <div className="flexy2">
                <div><img src="assets/airbnb.png" style={{width:'192px' , height:'100px',objectFit : 'contain'}} alt="" srcSet="" /></div>
                <div><img src="assets/binance.png" style={{width:'192px' , height:'100px',objectFit : 'contain'}} alt="" srcSet="" /></div>
                <div><img src="assets/coinbase.png" style={{width:'192px' , height:'100px',objectFit : 'contain'}} alt="" srcSet="" /></div>
                <div><img src="assets/dropbox.png" style={{width:'192px' , height:'100px',objectFit : 'contain'}} alt="" srcSet="" /></div>
            </div>
        </div>
    );
};

export default Themarks