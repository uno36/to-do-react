import { Routes, Route } from 'react-router-dom';

import Home from '../routes/Home';
import About from '../routes/About';
import Profile from '../routes/Profile';
import Login from '../routes/Login';
import NotMatch from '../routes/NotMatch';
import Layout from './Layout';
import SinglePage from '../routes/SinglePage';
import ProtectedRoute from './ProtectRoute';

const TodoApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path=":slug" element={<SinglePage />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route
        path="profile"
        element={(
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
       )}
      />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);

export default TodoApp;
