
import '../../styles/style.css';

const Footer = () => {
  return (
    <section className="container" style={{borderTop: '1px solid #3F3E45' , marginTop:'60px' , padding:'10px'}}>
      <div>
        <footer
          className="text-left"
          style={{ color: '#FFFFFF99', fontFamily: "'Poppins', sans-serif" }}
        >
          <p>&copy; 2023 Mahdi Boukhouima - All rights reserved</p>
          <p className="name">Mahdi Boukhouima</p>
        </footer>
      </div>
    </section>

  );
};

export default Footer;