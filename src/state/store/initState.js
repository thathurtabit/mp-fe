const initState = {
  api: process.env.NODE_ENV === 'production'
          ? 'api/response.json'
          : 'api/response.json',
  loading: true,
  response: [],
};

export default initState;
