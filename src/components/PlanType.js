import { useState } from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import { Share } from '@material-ui/icons'

const PlanType = () => {
  const [planName, setPlanName] = useState('')

  const handlePlanNameChange = (e) => {
    setPlanName(e.target.value)
  }

  const handleSelectPlanType = (e) => {}

  return (
    <Row className="mb-4">
      <Col>
        <Card body>
          <Row>
            <Col md={9}>
              <h4>Plan Type</h4>
              <Card bg="light">
                <Card.Body>
                  <Card.Text>
                    <Form>
                      <Form.Group controlId="planName">
                        <Form.Label>Plan Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Add a name to your plan"
                          onChange={handlePlanNameChange}
                        />
                      </Form.Group>

                      <Form.Group controlId="membershipDescription">
                        <Form.Label>Select Type</Form.Label>
                      </Form.Group>
                      <Row>
                        <Col md={6}>
                          <div className="plan-type membership">
                            <div className="plan-type__inner">
                              <p>
                                <strong>Membership</strong>
                              </p>
                              <p>
                                Allows the client to come to the studio as much
                                as they want within a time frame
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div
                            className="plan-type credit"
                            onClick={handleSelectPlanType}
                          >
                            <div className="plan-type__inner">
                              <p>
                                <strong>Credit Pack</strong>
                              </p>
                              <p>
                                The client gets a certain number of visits in
                                the pack
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <div className="d-flex justify-content-between align-items-start pt-9 pb-6 plan-type-buttons">
                <Button variant="outline-primary" size="sm">
                  Share <Share style={{ fontSize: 14 }} />
                </Button>
                <Button variant="outline-primary" size="sm">
                  Duplicate
                </Button>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </div>

              <h4>Summary</h4>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default PlanType
