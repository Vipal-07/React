import Login from "./component/Login"
import Profile from "./component/Profile"
import './App.css'
import UserContextProvider from "./context/UserContext"

function App() {

  return (
    <UserContextProvider>
      <h1>Hii Welcome</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
