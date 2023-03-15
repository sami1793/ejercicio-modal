import { useState } from "react"
import { Modal } from "../modal/Modal";

export const Login = ({setUser}) => {
    const [showFormLogin, setShowFormLogin] = useState(false);


  return (
    <><button onClick={() => {
        setShowFormLogin((showFormLogin) => !showFormLogin)
        
    }}>Login</button>
    <Modal showModal={showFormLogin}>
    <form>
          <div>
            <label htmlFor="user">
              User
            </label>
            {/* <input value={user} onChange={(e)=> setUser(e.target.value)}type="text" id="user" /> */}
          </div>
          <div>
            <label htmlFor="pass">
              Password
            </label>
            <input type="password" id="pass" />
          </div>
          <button>Send</button>
        </form>
    </Modal>
    </>
  )
}
