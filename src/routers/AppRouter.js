import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginScreen from '../components/Login/LoginScreen';

import DashboardRoutes from './DashboardRoutes';
import Header from '../components/Header/Header';

const AppRouter = () => (
  <BrowserRouter>
    <Header> </Header>
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/*" element={<DashboardRoutes />} />
    </Routes>
  </BrowserRouter>
);
export default AppRouter;
