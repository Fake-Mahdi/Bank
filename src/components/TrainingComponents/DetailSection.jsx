import '../../styles/style.css';

const DetailSection =() =>
{
    return(
        <div className="container" style={{marginTop:'45px'}}>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
                    <div className='main'><span className="cont">3800+</span><span className="status">User Active</span></div>
                </div>  
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
                    <div className='main'><span className="cont">230+</span><span className="status">Trusted by Company</span></div>
                </div> 
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
                    <div className='main'><span className="cont">$230M+</span><span className="status">Transaction</span></div>
                </div> 
                
            </div>
        </div>  

    );
};

export default DetailSection