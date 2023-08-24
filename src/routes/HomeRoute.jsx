import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'



export const HomeRoute = () => {


  return (
    <div className='container'>
      <div className='text'>
        < p>You can check the temperature and weather conditions of any city or town. Try it !</p>
      
      <NavLink to={'/search'} className='btn btn-outline-info btn-lg enter'>Go in !</NavLink>


      
      
      </div>

      <NavLink  to={'/register'}>Home</NavLink>
     </div>


  )
}
