import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Singup from './components/Auth/Singup';
import { setLocalStorage } from './utils/localStorage';

const App = () => {

  const [user, setUser] = useState(null)
  const [isSignuped, setIsSignuped] = useState(false)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const userData = JSON.parse(localStorage.getItem('employees'));

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setIsSignuped(true);
      setLoggedInUserData(userData.data)
    }

  }, [])


  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }

  const handleSignup = (email, password, firstName, lastName) => {
    if ([email, password, firstName, lastName].some(field => field === null || field === "")) {
      console.alert("All field  required");
      return;
    }
    const newEmployee = [
      {
        id: 5,
        email,
        password,
        firstName,
        lastName,
        tasks: [],
        taskCounts: 0,
      }
    ]
    setLocalStorage(newEmployee);
    setIsSignuped(true);

  }

  return (
    <>
      {!isSignuped
        ? <Singup handleSignup={handleSignup} />
        : <>
          {!user ? <Login handleLogin={handleLogin} /> : ''}
          {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
        </>
      }
    </>
  )
}

export default App