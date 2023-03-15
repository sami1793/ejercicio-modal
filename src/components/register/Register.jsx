import { Modal } from "../modal/Modal";
import { useState } from "react"

export const Register = ({setUser}) => {
    const [showFormRegister, setShowFormRegister] = useState(false);
  return (
    <div>
        <button onClick={() => {
                setShowFormRegister((showFormRegister) => !showFormRegister)
                
            }}>Register</button>
        <Modal showModal={showFormRegister}>
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
    </div>
  )
}
