
import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
import trackingCall from "../../utils/trackingCall"

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
              <Link to="/#title" onClick={() => {trackingCall('Home')}}
              className='nav-link' activeClassName="active">Home</Link>
            </Nav.Item>
            <NavDropdown title="Artists" id="basic-nav-dropdown">
              <NavDropdown.Item as="li" className='nav-item dropdown-item'>
                <Link to = "/components/ArtistsLayoutContainer" className='nav-item dropdown-item'
                  onClick={() => {trackingCall("Lie. Artists")}}
                  activeClassName="active" state={{titleName: 'Lie.'}}>'Lie.' - Single</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" className='nav-item dropdown-item'>
                <Link to = "/components/ArtistsLayoutContainer" className='nav-item dropdown-item'
                  onClick={() => {trackingCall('Away Artists')}}
                  activeClassName="active" state={{titleName: 'Away'}}>'Away' - EP</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item as="li" className='nav-link'>
              <Link to="/#channels" onClick={() => {trackingCall('Channels')}}
                  className='nav-link' activeClassName="active">Stream</Link>
            </Nav.Item>
            <Nav.Item as="li" className='nav-link'>
              <Link to="/#demos" onClick={() => {trackingCall('Demos')}}
              className='nav-link' activeClassName="active"
              props={{titleName: titleName}}>Sample</Link>
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
          <Link to="/#channels" activeClassName="active">
            <button type="button" onClick={() => {trackingCall('Channels')}}
              className="btn btn-dark btn-lg buy-btn">
            <FontAwesomeIcon icon={faCloudDownloadAlt}/> Stream</button>
          </Link>
          <Link to="/#demos" activeClassName="active">
          <button type="button" onClick={() => {trackingCall('Demos')}}
             className="btn btn-outline-light btn-lg buy-btn">
            <FontAwesomeIcon icon={faDownload}/> Sample</button>
            </Link>
            </div>
          }
        </Col>
        <Col id="cover-art">
        <img id="cover" src={coverArt}  alt={alt}/>
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