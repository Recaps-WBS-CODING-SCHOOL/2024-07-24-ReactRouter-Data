import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const MainLayout = () => {
  const stars = useLoaderData();

  return (
    <div className='body'>
      <header className='header'>
        <a href='#'>
          <h1>Webb Gallery</h1>
          <p>
            Fancy stars
            <span role='img' aria-label='Star'>
              💫
            </span>
          </p>
        </a>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/alpha-centauri'>Alpha Centauri</NavLink>
            </li>
            <li>
              <NavLink to='/about'>{stars[0].heading}</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet context={stars} />
      </main>
      <footer>&copy; footerbla</footer>
    </div>
  );
};

export default MainLayout;
