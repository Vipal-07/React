import React, { useContext, useState } from 'react'
import UserContext from "../context/Context"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handling = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type='text' placeholder='Username'
                value={username}
                onChange={(e) => 
                    setUsername(e.target.value)
                } />
                <br/>
            <input type='text' placeholder='Password'
                value={password}
                onChange={(e) => 
                    setPassword(e.target.value)
                }
            />

            <button onClick={handling}>Submit</button>

        </div>
    )
}

export default Login
