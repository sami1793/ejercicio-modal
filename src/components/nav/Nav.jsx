import { Login } from "../login/Login"
import { Register } from "../register/Register"

export const Nav = ({ setUser }) => {




    return (
        <nav>
            {/* <button onClick={() => {
                setShowFormLogin((showFormLogin) => !showFormLogin)
                setShowFormRegister(false)
            }}>Login</button> */}
            <Login setUser={setUser}/>
            <Register setUser={setUser}/>
        </nav>
    )
}
