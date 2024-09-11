import '../../styles/style.css';
const Navbar = ()=>
{
    return(
       
            <div className="navbar navbar-inverse ">
              <div className="container">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#toggle"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a
                    className="navbar-brand"
                  >
                    <img src="/assets/logo.svg" alt="" srcSet="" />
                  </a>
                </div>
                <div className="collapse navbar-collapse" id="toggle">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Clients</a></li>
                  </ul>
                </div>
              </div>
            </div>
          );
};
export default Navbar;