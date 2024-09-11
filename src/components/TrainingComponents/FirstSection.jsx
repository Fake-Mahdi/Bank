import '../../styles/style.css';
const FirstSection =() =>
{
    return(
        <div>
            <div className="title2">
                <h1 style={{fontSize:'1'}}>
                You do the business, <br />
                we’ll handle the money.
                </h1>
            </div>
            <div style={{marginTop:'30px'}}><p className='paragraph'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p></div>
            <div style={{marginTop:'25px'}}><button className="btn btn-primary">Get Started</button></div>
        </div>
    );
};
export default FirstSection