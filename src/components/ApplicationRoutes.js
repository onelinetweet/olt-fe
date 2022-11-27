import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import ApplicationLayout from './layouts/ApplicationLayout';
import FullPageLoader from './FullPageLoader';
import Home from './../pages/Home';
import Terms from './../pages/Terms';
import PrivacyPolicy from './../pages/PrivacyPolicy';
const router = createBrowserRouter([
  {
    element: <ApplicationLayout />,
    loader: FullPageLoader,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: FullPageLoader,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
        loader: FullPageLoader,
      },
      {
        path: '/terms',
        element: <Terms />,
        loader: FullPageLoader,
      },
    ],
  },
]);

const ApplicationRoutes = () => {
  return <RouterProvider router={router} />;
};

export default ApplicationRoutes;
