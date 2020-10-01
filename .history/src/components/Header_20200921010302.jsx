
import React from "react"

// import PropTypes from "prop-types"
import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
import trackingCall from "../utils/trackingCall"

const Header = (
  {titleName, cover, coverArt, alt, artistCall}
  ) => (
  <header >
   <div className='header-container container-fluid' id='title'>
    <Container fluid >
      <Navbar  bg="transparent" variant="dark" expand="lg">
        <Navbar.Brand className="nav-brand" >Larsxn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li" >
              <a href="/#title" onClick={() => {trackingCall('Home')}}
              className='nav-link' activeClassName="active">Home</a>
            </Nav.Item>
            <NavDropdown title="Artists" id="basic-nav-dropdown">
              <NavDropdown.Item as="li" className='nav-item dropdown-item'>
                <a href = "/components/ArtistsLayoutContainer" className='nav-item dropdown-item'
                  onClick={() => {trackingCall("Lie. Artists")}}
                  activeClassName="active" state={{titleName: 'Lie.'}}>'Lie.' - Single</a>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" className='nav-item dropdown-item'>
                <a href = "/components/ArtistsLayoutContainer" className='nav-item dropdown-item'
                  onClick={() => {trackingCall('Away Artists')}}
                  activeClassName="active" state={{titleName: 'Away'}}>'Away' - EP</a>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item as="li" className='nav-link'>
              <a href="/#channels" onClick={() => {trackingCall('Channels')}}
                  className='nav-link' activeClassName="active">Stream</a>
            </Nav.Item>
            <Nav.Item as="li" className='nav-link'>
              <a href="/#demos" onClick={() => {trackingCall('Demos')}}
              className='nav-link' activeClassName="active"
              props={{titleName: titleName}}>Sample</a>
            </Nav.Item>
            <Nav.Link className='nav-link' onClick={() => {trackingCall('Contact')}}
            href="mailto:info@larsxn.com?subject=Hey Larsxn!">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row className="title-name-container">
        <Col>
          <h1 className="big-heading">{cover}</h1>
          {/* <--Bootstrap button classes with Fontawesome icons-->
          <!-- event, category, action, label, value -->  */}
          {!artistCall &&
          // conditional should be removed when Gatsby Link #id navigation problems fixed.
          <div>
          <a href="/#channels" activeClassName="active">
            <button type="button" onClick={() => {trackingCall('Channels')}}
              className="btn btn-dark btn-lg buy-btn">
            <FontAwesomeIcon icon={faCloudDownloadAlt}/> Stream</button>
          </a>
          <a href="/#demos" activeClassName="active">
          <button type="button" onClick={() => {trackingCall('Demos')}}
             className="btn btn-outline-light btn-lg buy-btn">
            <FontAwesomeIcon icon={faDownload}/> Sample</button>
            </a>
            </div>
          }
        </Col>
        <Col id="cover-art">
        <img id="cover" src="%PUBLIC_URL%"+coverArt}  alt={alt}/>
        </Col>
      </Row>
      </Container>
      </div>
  </header>
)

// Header.propTypes = {
//   cover:  PropTypes.string,
//   coverArt: PropTypes.string,
//   alt: PropTypes.string,
// }

// Header.defaultProps = {
//   cover: ``,
//   coverArt: '',
//   alt: '',
// }

export default Header