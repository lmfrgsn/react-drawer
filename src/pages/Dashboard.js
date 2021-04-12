import Header from '../components/Header'
import { Link, useLocation } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Add } from '@material-ui/icons'

const Dashboard = () => {
  const location = useLocation()
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <h1 className="mt-5 mb-5">Welcome back!</h1>
            <Link
              to={{
                pathname: '/new-membership',
                state: { background: location },
              }}
            >
              <Button variant="primary">
                New Membership <Add />
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard
