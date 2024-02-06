import {useRegisterMutation} from "./redux/api/api.js";
import {useState} from "react";
import {useSelector} from "react-redux";

function App() {
    const [register, {isLoading}]= useRegisterMutation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector(state=>state.auth.credentials.user);
    console.log(user);
    return (
        <>
            <h1>{user.userId}</h1>
            <input type="text" onChange={(event)=>setUsername(event.target.value)}/>
            <input type="password" onChange={(event)=>setPassword(event.target.value)}/>
            <button onClick={()=>register({username:username, password:password})}>Register</button>
        </>
    )
}

export default App
