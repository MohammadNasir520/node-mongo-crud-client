
import{createBrowserRouter ,RouterProvider} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import AddUser from './Components/AddUser';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      loader: ()=> fetch('http://localhost:5000/users'),
      element: <Home></Home>
    },
    {
      path:'/users/add',
      element: <AddUser></AddUser>
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
