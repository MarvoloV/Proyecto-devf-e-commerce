const postLogin = async (email, password) => {
  const datos = JSON.stringify({
    email,
    password,
  });
  const url = 'https://ecomerce-master.herokuapp.com/api/v1/login';
  const config = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: datos,
  };
  const resp = await fetch(url, config);
  const data = await resp.json();
  return data;
};

export default postLogin;
