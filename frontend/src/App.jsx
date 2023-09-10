import { useEffect } from 'react'
import './App.css'
import Main from './pages/Main'
import { useDispatch, useSelector } from 'react-redux'
import { userMe } from './redux/features/UserFeatures/userSlice';


function App() {
  const { isAuthenticated, user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userMe())
  }, [])

  return (
    <>
      <Main isAuthenticated={isAuthenticated} role={user?.user?.role} />
    </>
  )
}

export default App
