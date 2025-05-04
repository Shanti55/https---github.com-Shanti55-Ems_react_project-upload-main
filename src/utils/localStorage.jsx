// utils/localStorage.js

const employees = [
    {
      id: 2,
      email: "shanti123@gmail.com", // ya jo bhi email tu App.jsx mein use kar rahi hai
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
    console.log("existingEmployees", existingEmployees);
    const existingAdmin = localStorage.getItem('admin');
  
    if (existingEmployees?.length === 0) {
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
  
                