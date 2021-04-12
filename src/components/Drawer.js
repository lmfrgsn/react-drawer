import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import NewMembership from '../pages/NewMembership'

const Drawer = () => {
  const history = useHistory()

  const closeModal = (e) => {
    e.stopPropagation()

    if (history.action !== 'POP') {
      history.goBack()
    } else {
      history.push('/')
    }
  }

  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return (
    <div className="full-screen-overlay">
      <div className="full-screen-overlay__side" onClick={closeModal}>
        <img
          src="assets/close-icon.png"
          width="60"
          height="60"
          className="full-screen-overlay__close-icon"
          alt="Close New Membership"
        />
      </div>
      <div className="full-screen-overlay__inner">
        <NewMembership />
      </div>
    </div>
  )
}

export default Drawer
