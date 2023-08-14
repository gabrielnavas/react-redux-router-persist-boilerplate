import { useDispatch } from "react-redux"
import { login } from "../../../store/features/user/userSlice"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClickLoginButton = () => {
    dispatch(
      login({
        auth: {token: '!@123'}, 
        data: {email, id: crypto.randomUUID()}
      })
    )
    navigate('/counter')
  }

  return (
    <div>
      <div>
        <label>Username</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button onClick={onClickLoginButton}>Entrar</button>
    </div>
  )
}