

const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      total: 3,
      active: 5,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Login Page UI",
        description: "Create responsive login page using React",
        date: "2026-01-20",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Header Bug",
        description: "Resolve alignment issue in header component",
        date: "2026-01-18",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "API Error Handling",
        description: "Handle API error states properly",
        date: "2026-01-15",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Rohit",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      total: 3,
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Dashboard Design",
        description: "Create admin dashboard UI",
        date: "2026-01-22",
        category: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Chart Integration",
        description: "Add charts using chart library",
        date: "2026-01-21",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Performance Optimization",
        description: "Improve page load speed",
        date: "2026-01-16",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Sandeep",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      total: 3,
      active: 1,
      newTask: 7,
      completed: 89,
      failed: 1
    },
    tasks: [
      {
        title: "Landing Page",
        description: "Design product landing page",
        date: "2026-01-23",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "SEO Setup",
        description: "Add basic SEO meta tags",
        date: "2026-01-19",
        category: "SEO",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deployment",
        description: "Deploy app on hosting server",
        date: "2026-01-14",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Neeraj",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      total: 3,
      active: 12,
      newTask: 15,
      completed: 1,
      failed: 12
    },
    tasks: [
      {
        title: "Form Validation",
        description: "Add form validation using JS",
        date: "2026-01-24",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Unit Testing",
        description: "Write unit tests for components",
        date: "2026-01-18",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Error Logs",
        description: "Fix production error logs",
        date: "2026-01-13",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Kunal",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      total: 3,
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Profile Page",
        description: "Create user profile page",
        date: "2026-01-25",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Image Upload",
        description: "Implement image upload feature",
        date: "2026-01-20",
        category: "Feature",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Code Refactor",
        description: "Refactor old code for better readability",
        date: "2026-01-17",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
]



  
  const admin = [{
    "id": 0,
    "email": "admin@example.com",
    "password": "123",
    "role": "admin"
  }
]

export const setLocalStorage =()=>{
localStorage.setItem('employees' ,JSON.stringify(employees))
localStorage.setItem('admin' ,JSON.stringify(admin))
}
export const getLocalStorage =()=>{
    const employee = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employee,admin}
}    


export const getLoggedInUser = () => {
  return JSON.parse(localStorage.getItem('loggedInUser'))
}


