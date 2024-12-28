const getAuthHeader = (headers, { getState }) => {
  const { auth } = getState();
  const { token } = auth;

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
};

export default getAuthHeader;
