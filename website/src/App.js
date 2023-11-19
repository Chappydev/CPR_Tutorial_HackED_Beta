import './App.css';
import Navbar from './components/Navbar.js';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Homepage.js';
import VideoPage from './pages/VideoPage.js';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/videotest",
        element: <VideoPage />
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
