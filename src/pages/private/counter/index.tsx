import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {
  decrement,
  increment,
  incrementByAmount,
  selectCounter
} from '../../../store/features/counter/counterSlice'

import { selectUser, logout } from "../../../store/features/user/userSlice";

export const  CounterPage = () => {
  const counter = useSelector(selectCounter)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const [incrementeBy, setIncrementBy] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    if(!user.auth.isAuth) {
      navigate('/')
    }
  }, [user, navigate])

  const onClickButtonLogout= () => {
    dispatch(logout())
  }

  return (
    <div>
      <a>Signin as { user.data.email }</a>
      <div>
        <button type="button" onClick={onClickButtonLogout}>Logout</button>
      </div>
      <div>Value: { counter.value }</div>
      
      <div>
        <label>Increment By Amount</label>
        <input type="number" value={incrementeBy} onChange={e => setIncrementBy(Number(e.target.value))} />
        <button onClick={() => dispatch(incrementByAmount(incrementeBy))}>Increment By Amount</button>
      </div>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

