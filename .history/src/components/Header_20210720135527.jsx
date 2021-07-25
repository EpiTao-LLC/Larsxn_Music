
import React  from "react"
import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css'
import './Header.css'
import trackingCall from "../utils/trackingCall"
import updateState from "../utils/updateState"
// import { set } from "react-ga";


const Header = (
  {titleName, cover, coverArt, alt, artists, appContext}
  ) => {

    const context = appContext

    // 'artists' in this context are the featured artists doing the music. This
    // is the second context for this header page.  The prime context is advertising
    // the latest release of the music (title of which is stored in the'cover' field.)

    if (context[0].artistsPage === true) {
      cover = artists
    }


  return (

  <header >
   <div className='header-container container-fluid' id='title'>
    <Container fluid >
      <Navbar  bg="transparent" variant="dark" expand="lg">
        <Navbar.Brand  >
          <a href="/#message"
            onClick={() => {
              trackingCall('Artist Message')
              updateState("home", false, appContext)}}
            className="nav-brand">Larsxn</a>
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li" >
              <a href="/#title"
              onClick={() => {
                trackingCall('Home')
                updateState("home", false, appContext)}}
              className='nav-link' >Home</a>
            </Nav.Item>

            <NavDropdown title="Artists" id="basic-nav-dropdown">

            <NavDropdown.Item as="li" className='nav-item dropdown-item'>
                <button type = "button" className='nav-item dropdown-item'
                  onClick={() => {
                    updateState('Leave You', true, appContext)
                    trackingCall('Leave You Artists')}}
                  >'Leaave You' - Single</button>
              </NavDropdown.Item>

              <NavDropdown.Item as="li" className='nav-item dropdown-item'>
                <button type = "button" className='nav-item dropdown-item'
                  onClick={() => {
                    updateState('What Can I Say', true, appContext)
                    trackingCall('What Can I Say Artists')}}
                  >'What Can I Say' - Single</button>
              </NavDropdown.Item>

              <NavDropdown.Item as="li" className='nav-item dropdown-item'>
                <button type = "button" className='nav-item dropdown-item'
                  onClick={() => {
                    updateState('Lie', true, appContext)
                    trackingCall('Lie Artists')}}
                  >'Lie' - Single</button>
              </NavDropdown.Item>

              <NavDropdown.Item as="li" className='nav-item dropdown-item'>
                <button type = "button"  className='nav-item dropdown-item'
                  onClick={(e) => {
                    updateState ("Away", true, appContext)
                    trackingCall('Away Artists')}}
                  >'Away' - EP</button>
              </NavDropdown.Item>

            </NavDropdown>
            <Nav.Item as="li" className='nav-link'>
              <a href="/#channels" onClick={() => {trackingCall('Channels')}}
                  className='nav-link'>Stream</a>
            </Nav.Item>
            <Nav.Item as="li" className='nav-link'>
              <a href="/#demos" onClick={() => {
                trackingCall('Demos')
                updateState("home", false, appContext)}}
              className='nav-link'
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
          <div>
          <a href="/#channels">
            <button type="button" onClick={() => {trackingCall('Channels')}}
              className="btn btn-dark btn-lg buy-btn">
            <FontAwesomeIcon icon={faCloudDownloadAlt}/> Stream</button>
          </a>
          <a href="/#demos">
          <button type="button" onClick={() => {
            updateState ("home", false, appContext)
            trackingCall('Demos')}}
             className="btn btn-outline-light btn-lg buy-btn">
            <FontAwesomeIcon icon={faDownload}/> Sample</button>
            </a>
            </div>
        </Col>
        <Col id="cover-art">
        <img id="cover" src={coverArt}  alt={alt}/>
        </Col>
      </Row>
      </Container>
      </div>
  </header>

)}

export default Header