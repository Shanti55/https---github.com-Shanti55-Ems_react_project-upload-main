// utils/localStorage.js

const employees = [
    {
      id: 1,
      email: "shanti123gmail.com", // ya jo bhi email tu App.jsx mein use kar rahi hai
      password: "123"
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@me.com", // ya jo bhi email tu App.jsx mein use kar rahi hai
      password: "123"
    }
  ];
  
  export const setLocalStorage = () => {
    const existingEmployees = localStorage.getItem('employees');
    const existingAdmin = localStorage.getItem('admin');
  
    if (!existingEmployees) {
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  
    if (!existingAdmin) {
      localStorage.setItem('admin', JSON.stringify(admin));
    }
  };
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
  
    return { employees, admin };
  };
  
                