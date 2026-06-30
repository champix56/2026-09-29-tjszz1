import type { FC } from "react";
import styles from "./Navbar.module.css";
import { Container, Nav, Navbar as NavBar } from "react-bootstrap";
import  'bootstrap/dist/css/bootstrap.css'
import '../../../../node_modules/bootstrap/dist/js/bootstrap.js'
interface NavbarProps {}

const Navbar: FC = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    <NavBar bg="dark" data-bs-theme="dark">
      <Container>
        <NavBar.Brand href="#home">Navbar</NavBar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </NavBar>
  </div>
);

export default Navbar;
