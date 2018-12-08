const initState = {
  api:
    process.env.NODE_ENV === 'production'
      ? 'http://moonpig-fe-fun.s3-website.eu-west-2.amazonaws.com/api/response.json'
      : 'http://localhost:3000/api/response.json',
  loading: true,
  searchValue: '',
  response: [],
};

export default initState;
