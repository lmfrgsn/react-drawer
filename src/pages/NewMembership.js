import { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Toast } from 'react-bootstrap'
import PlanType from '../components/PlanType'

const NewMembership = () => {
  const [name, setName] = useState('Please insert a title below')

  const [description, setDescription] = useState(
    'Please insert a description below'
  )

  const [planName, setPlanName] = useState('')

  const [nameActive, setNameActive] = useState(false)

  const [descriptionActive, setDescriptionActive] = useState(false)

  const [counter, setCounter] = useState(1)

  const [show, setShow] = useState(false)

  const handleNameChange = (e) => {
    setName(e.target.value)
    setNameActive(true)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
    setDescriptionActive(true)
  }

  const handlePlanNameChange = (e) => {
    setPlanName(e.target.value)
  }

  const [planList, setPlans] = useState([])

  const addPlan = (e) => {
    setPlans(planList.concat(<PlanType />))
    setCounter(counter + 1)
  }

  return (
    <>
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          zIndex: 30,
        }}
      >
        <Toast.Header>
          <strong className="mr-auto">Changes Saved!</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>Your membership has been saved</Toast.Body>
      </Toast>

      <div className="header-card mb-4">
        <Container fluid>
          <Row>
            <Col md={3}>
              <p className="header-title--helper">Membership Title</p>
              <h3
                className={`header-title ${
                  nameActive === false ? ' empty' : ''
                }`}
              >
                {name}
              </h3>
            </Col>
            <Col md={3}>
              <p className="header-title--helper">Membership Description</p>
              <h3
                className={`header-title ${
                  descriptionActive === false ? ' empty' : ''
                }`}
              >
                {description}
              </h3>
            </Col>
            <Col md={3}>
              <p className="header-title--helper">Membership Plan(s)</p>
              <h3 className="header-title">{counter}</h3>
            </Col>
            <Col md={3} className="text-right">
              <Button variant="success" onClick={() => setShow(true)}>
                Save
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid>
        <Row className="mb-4">
          <Col>
            <Card body>
              <Row className="row-eq-height">
                <Col md={6} sm={12}>
                  <h4>Details</h4>
                  <Card bg="light">
                    <Card.Body>
                      <Card.Text>
                        <Form>
                          <Form.Group controlId="membershipName">
                            <Form.Label>Membership Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Probably the best membership name in the world ever"
                              onChange={handleNameChange}
                            />
                          </Form.Group>

                          <Form.Group controlId="membershipDescription">
                            <Form.Label>Membership Description</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder="Probably the best membership description ever"
                              onChange={handleDescriptionChange}
                            />
                          </Form.Group>
                        </Form>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} sm={12}>
                  <h4>Settings</h4>
                  <Card bg="light">
                    <Card.Body>
                      <Card.Text>
                        <Form>
                          <Form.Group controlId="settingsRestrict">
                            <Form.Check
                              type="switch"
                              id="settings1"
                              label="Restrict to one purchase per client"
                            />
                          </Form.Group>
                          <Form.Group controlId="settingsPrivate">
                            <Form.Check
                              type="switch"
                              id="settings2"
                              label="Make private (will not be shown in app or online)"
                            />
                          </Form.Group>
                          <Form.Group controlId="settingsTrial">
                            <Form.Check
                              type="switch"
                              id="settings3"
                              label="This is a trial membership"
                            />
                          </Form.Group>
                          <Form.Group controlId="settingsRoam">
                            <Form.Check
                              type="switch"
                              id="settings4"
                              label="Allow this membership to roam to linked locations"
                              //   onChange={handleCheckboxChange}
                            />
                          </Form.Group>
                        </Form>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <PlanType />
        {planList}

        <Row>
          <Col className="text-center">
            <Button
              variant="outline-primary btn-light"
              size="sm"
              onClick={addPlan}
            >
              Add another plan
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NewMembership
