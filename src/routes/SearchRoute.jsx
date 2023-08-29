import React from 'react'
import { SearchComponent } from '../components/SearchComponent'
import { useAuth } from '../context/AuthContext';



export const SearchRoute = () => {

  const { user, logout, loading } = useAuth();


  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('There is an error', error);
    }

  }

  if (loading) return <h1>Loading...</h1>
  return (
    <>
      <h1>{user.displayName || user.email}</h1><button onClick={handleLogout}>Logout</button>
      <SearchComponent></SearchComponent>
    </>
  )
}
