import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.scss';
import Home from './pages/Home';
import avi from './assets/user-avi.jpg';
import Button from './components/Button/Button';
import Inner from './pages/Inner';

const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <Home 
        imgSrc={avi} 
        fullName={"John Doe"} 
        position={"Programmer. Creative. Innovator"} 
        description={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
        }>
        <Button text="Know More" to="/inner">
        </Button>
      </Home>
  },
  {
    path: '/inner',
    element: <Inner />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
