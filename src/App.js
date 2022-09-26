
import './css/sb-admin-2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './Login';
import Portal from './Portal';
import Dashboard from './Dashboard';
import Users from './Users';
import CreateUser from './CreateUser';
import Userview from './Userview';
import EditUser from './EditUser';




function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />} >

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<Userview />} />
          <Route path="users/edit/:id" element={<EditUser />} />
          <Route path="create-user" element={<CreateUser />} />

         

        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
