import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import SignIn from './pages/auth/signIn/SignIn';
import SignUp from './pages/auth/signUp/SignUp';
import Main from './pages/main/Main';
import NotFound from './pages/not-found/NotFound';
import NavBarLayout from './layouts/NavBarLayout';

function App() {
  const route = createBrowserRouter([
    { path: '/', element: <Home /> },
    {
      path: '/',
      element: <NavBarLayout />,
      children: [
        { path: '/main', element: <Main /> },
        { path: '/*', element: <NotFound /> },
      ],
    },
    { path: '/auth/sign-in', element: <SignIn /> },
    { path: '/auth/sign-up', element: <SignUp /> },
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
