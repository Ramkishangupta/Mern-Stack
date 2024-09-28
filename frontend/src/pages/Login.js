import { useLogin } from "../hooks/useLogin";
import { useState } from "react";
const  Login = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {login,loading,error}=useLogin(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        await login(email,password);
    };
    return (
        <>
            <form className="login" onSubmit={handleSubmit}>
                <h3>Log In</h3>
                <label>Email</label>
                <input type="email"
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                value = {email}/>
                <label>Password</label>
                <input type="password"
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                value = {password} />
                <button disabled={loading}>Log In</button>
                {error && <div className="error">{error}</div>}
            </form>
        </>
    )
}
export default Login