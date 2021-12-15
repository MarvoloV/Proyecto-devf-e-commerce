/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation, NavLink } from 'react-router-dom';
import queryString from 'query-string';
import getProductsSearch from '../../helpers/getProductsSearch';
import useFormProduct from '../../hooks/useFormProduct';
import { useEcommerce } from '../../context/EcommerceContext';

const Header = () => {
  const {
    data,
    setProducts,
    isLog,
    rol,
    token,
    user,
    setUser,
    setRol,
    setisLog,
    setToken,
  } = useEcommerce();
  const navigate = useNavigate();
  const location = useLocation();

  /* fetch api userme inicio */
  const fetchUserMe = async () => {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `JWT ${token}`);
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
    const url = 'https://ecomerce-master.herokuapp.com/api/v1/user/me';
    const usuario = await fetch(url, requestOptions);
    const userMe = await usuario.json();
    console.log(userMe);
    setUser(userMe.user);
  };
  useEffect(() => {
    if (isLog) {
      fetchUserMe();
    }
  }, [isLog]);

  /* fetch api userme final */
  const { q = '' } = queryString.parse(location.search);
  const [formValues, handleInputChange] = useFormProduct({
    searchText: q,
  });
  const { searchText } = formValues;
  const handleSearch = (e) => {
    const productsSearch = getProductsSearch(data, searchText);
    e.preventDefault();
    navigate(`productos/?q=${searchText}`);
    setProducts(productsSearch);
    e.target.value = '';
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Ecommerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => `nav-item nav-link
                ${isActive ? 'active' : ''}`}
                /* aria-current="page" */
              >
                Productos
              </NavLink>
            </li>
            {rol === 'ADMIN' && (
              <li>
                <NavLink
                  to="/addproduct"
                  className={({ isActive }) => `nav-item nav-link
                  ${isActive ? 'active' : ''}`}
                >
                  AddProduct
                </NavLink>
              </li>
            )}
          </ul>
          <form
            className="d-flex col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            onSubmit={handleSearch}
          >
            <input
              type="search"
              className="form-control form-control-dark me-5"
              placeholder="Search..."
              aria-label="Search"
              value={searchText}
              name="searchText"
              onChange={handleInputChange}
            />
          </form>
          {isLog ? (
            <div className="dropdown me-5">
              <Link
                to="/"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </Link>
              <ul
                className="dropdown-menu text-small"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <Link className="dropdown-item" to="/shoppingcart">
                    Carrito de Compra
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/login"
                    onClick={() => {
                      localStorage.clear();
                      location.reload();
                    }}
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light me-2">
                Login
              </Link>
              <Link to="/singup" className="btn btn-warning">
                Sign-up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Header;
