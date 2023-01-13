import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/PotectedRoute';
import Fallback from './Fallback';
import Home from './pages/Home';
import Posts from './pages/Posts';

const Form1 = lazy(() => import('./components/Form1'));
const Form2 = lazy(() => import('./components/Form2'));
const Form3 = lazy(() => import('./components/Form3'));

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route
          index
          element={
            <Suspense fallback={<Fallback />}>
              {' '}
              <Form1 />{' '}
            </Suspense>
          }
        />
        <Route
          path="1"
          element={
            <Suspense fallback={<Fallback />}>
              <Form1 />
            </Suspense>
          }
        />
        <Route
          path="2"
          element={
            <Suspense fallback={<Fallback />}>
              <ProtectedRoute>
                <Form2 />
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="3"
          element={
            <Suspense fallback={<Fallback />}>
              <ProtectedRoute>
                <Form3 />
              </ProtectedRoute>
            </Suspense>
          }
        />
      </Route>
      <Route path="/posts" element={<Posts />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
