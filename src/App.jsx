import { useEffect, useState } from 'react';
import Card from './components/Card';
import { createBrowserRouter } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Stars from './pages/Stars';
import MainLayout from './layout/MainLayout';
import AlphaCentauri from './pages/AlphaCentauri';
import SingleStar, { updateStar } from './pages/SingleStar';
import { starsLoader } from './data/loaders';
// import { Navigate } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} loader={starsLoader} errorElement={<h1>Shit hit the fan!</h1>}>
      <Route index element={<Stars />} />
      <Route path='alpha-centauri' element={<AlphaCentauri />} />
      <Route
        path='about'
        element={
          <div className='grid'>
            <h1>This is About</h1>
          </div>
        }
      />
      <Route path='star/:id' element={<SingleStar />} action={updateStar} />
      {/* <Route path='/protected' element={<ProtectedLayout />}>
        <Route path='loggedin-only'/>
      </Route> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
