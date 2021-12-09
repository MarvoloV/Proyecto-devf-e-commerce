import { Routes, Route } from 'react-router-dom';
import ProductGrid from '../components/Home/ProductGrid';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import SingUp from '../components/SingUp/SingUp';
import LoginScreen from '../components/Login/LoginScreen';

const DashboardRoutes = () => (
  <div>
    <Routes>
      <Route path="singup" element={<SingUp />} />
      <Route path="login" element={<LoginScreen />} />
      <Route path="productos" element={<ProductGrid />} />
      <Route path="productos/:productid" element={<ProductDetail />} />
      <Route path="/" element={<ProductGrid />} />
    </Routes>
  </div>
);

export default DashboardRoutes;
