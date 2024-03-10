import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBr.css";

function NavigationBar() {
  return (
    <>
      <Navbar className="nav-design ">
        <Container>
          <Navbar.Brand className="brand-design text-white ">
            <a href="https://www.besasekmek.com.tr/">
              <img
                alt=""
                src="https://www.besasekmek.com.tr/images/11111footer.png"
                width="60"
                height="60"
                className="img-design"
              />
            </a>
            Bursa Ekmek ve Besin Sanayi A.Ş.
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
