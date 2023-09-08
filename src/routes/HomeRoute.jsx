import { NavLink, useNavigate } from 'react-router-dom'



export const HomeRoute = () => {


  return (

    <div className='container'>

      <div className='text'>
        < p>You can check the temperature and weather conditions of any city or town !</p>

        <NavLink to={'/search'} className='btn btn-outline-info btn-lg enter'>Try it ! </NavLink>

      </div>

    </div>


  )
}
