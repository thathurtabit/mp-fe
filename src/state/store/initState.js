const initState = {
  api: process.env.NODE_ENV === 'production'
          ? 'https://moonpig-fe-fun.surge.sh/api/response.json'
          : 'https://localhost:3000/api/response.json',
  loading: true,
  response: [],
};

export default initState;
