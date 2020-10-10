
import React  from "react"
import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
import trackingCall from "../utils/trackingCall"
// import { set } from "react-ga";


const Header = (
  {titleName, cover, coverArt, alt, appContext}
  ) => {

    const [context, setContext] = appContext

    function handleClick (title, artistsPage) {
        setContext({title: title, artistsPage: artistsPage})
        return [context.title, context.artistsPage]
    }

    let title = context.title
    console.log ('header', title)
    alert ("in header")

  return (

  <header >
   <div className='header-container container-fluid' id='title'>
    <Container fluid >
      <Navbar  bg="transparent" variant="dark" expand="lg">
        <Navbar.Brand className="nav-brand" >Larsxn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li" >
              <a href="/Layout#title" onClick={() => {trackingCall('Home')}}
              className='nav-link' >Home</a>
            </Nav.Item>

            <NavDropdown title="Artists" id="basic-nav-dropdown">
            <NavDropdown.Item as="li" className='nav-item dropdown-item'>
                <button type = "button" className='nav-item dropdown-item link-button'
                  onClick={() => {
                    handleClick('Lie.', true)
                    trackingCall('Lie. Artists')}}
                  >Lie.' - Single</button>
              </NavDropdown.Item>

              <NavDropdown.Item as="li" className='nav-item dropdown-item'>

                <button type = "button"  className='nav-item dropdown-item link-button'
                  onClick={(e) => {
                    handleClick("Away", true)
                    trackingCall('Away Artists')}}
                  >'Away' - EP</button>
              </NavDropdown.Item>

            </NavDropdown>
            <Nav.Item as="li" className='nav-link'>
              <a href="/#channels" onClick={() => {trackingCall('Channels')}}
                  className='nav-link'>Stream</a>
            </Nav.Item>
            <Nav.Item as="li" className='nav-link'>
              <a href="/Layout#demos" onClick={() => {trackingCall('Demos')}}
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
          <a href="/Layout#demos">
          <button type="button" onClick={() => {trackingCall('Demos')}}
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