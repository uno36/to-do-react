import { NavLink, Outlet } from 'react-router-dom';
import Header from '../components/Header';

const About = () => (
  <>
    <h1 className="about-heading">About us.</h1>
    <div className="about">
      <ul className="about_list">
        <li>
          <NavLink to="about-app">About app</NavLink>
        </li>
        <li>
          <NavLink to="about-developer">About developer</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  </>
);
export default About;
