import './App.css'
import { Modal } from './components/modal/Modal'
import { useState } from 'react'
import { Nav } from './components/nav/Nav';

function App() {


  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useState();



 



  const hiddenModal = () => {
    setShowModal(false)
  }

  return (
    <div className="App">
      <Nav setUser={setUser}></Nav>

      {/* <h2 onClick={()=>setShowModal(true)}>Click aquí para abrir modal</h2>
      {showModal&&<Modal showButton={false} hiddenModal={hiddenModal} title='Este es el titulo desde App' >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Eligendi, accusantium cupiditate iste, a perferendis laborum,
            nisi obcaecati quidem dolore natus corrupti et enim optio.</p>
      </Modal>} */}

      {/* {(showFormLogin || showFormRegister)&&<Modal>
        {<p>Este es el formulario</p>}
        {<p>Este es el formulario</p>}
      </Modal>} */}

      {/* <Modal showButton={true} title={showFormLogin ? 'Login' : showFormRegister ? 'Register' : ''}>
        {showFormLogin && <Form />}
        {showFormRegister && <Form />}
      </Modal> */}
    </div>


  )
}

export default App
