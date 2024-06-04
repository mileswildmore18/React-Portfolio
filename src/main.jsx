import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import About from './components/About/About.jsx';
import Error from './components/Error/Error.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';
import Resume from './components/Resume/Resume.jsx';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
