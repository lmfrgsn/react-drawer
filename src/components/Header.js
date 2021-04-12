import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

import {
  HomeOutlined,
  BuildOutlined,
  ChatBubbleOutlineOutlined,
  AssessmentOutlined,
} from '@material-ui/icons'

const Header = () => {
  return (
    <header>
      {/* Main Navigation */}
      <Navbar
        bg="primary"
        expand="lg"
        variant="dark"
        className="main-navigation"
      >
        <Navbar.Toggle aria-controls="primary-navbar-nav" />
        <Navbar.Collapse id="primary-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <HomeOutlined /> Home
            </Nav.Link>
            <Nav.Link href="#manage">
              <BuildOutlined /> Manage
            </Nav.Link>
            <Nav.Link href="#connect">
              <ChatBubbleOutlineOutlined /> Connect
            </Nav.Link>
            <Nav.Link href="#reports">
              <AssessmentOutlined /> Reports
            </Nav.Link>
          </Nav>
          <img
            src="assets/message-icon.png"
            width="30"
            height="30"
            className="d-inline-block align-middle mr-4"
            alt="messages"
          />
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 main-navigation__search-input"
            />
          </Form>
        </Navbar.Collapse>

        <Button variant="outline-primary" className="text-white">
          <span className="navbar-toggler-icon"></span>
        </Button>
      </Navbar>
      {/* End Main Navigation */}

      {/* Secondary Navigation */}
      <Navbar
        bg="secondary"
        expand="lg"
        variant="dark"
        className="secondary-navigation"
      >
        <Navbar.Toggle aria-controls="secondary-navbar-nav" />
        <Navbar.Collapse id="secondary-navbar-nav">
          <Nav className="navbar-nav nav-fill w-100">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#calendar">Calendar</Nav.Link>
            <Nav.Link href="#access">Access</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* End Secondary Navigation */}
    </header>
  )
}

export default Header
