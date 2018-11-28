const initState = {
  api: process.env.NODE_ENV === 'production'
          ? 'https://moonpig-fe-fun.surge.sh/api/response.json'
          : 'api/response.json',
  loading: true,
  response: [],
};

export default initState;
