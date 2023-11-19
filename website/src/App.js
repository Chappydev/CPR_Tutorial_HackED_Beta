import './App.css';
import Navbar from './components/Navbar.js';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Homepage.js';
console.log(Homepage);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        children: [
            {
                path: ""
            }
        ]
    }
])

function App() {
  return (
    <div className="App">
        <Navbar />
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
