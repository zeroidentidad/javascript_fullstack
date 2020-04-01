// set env variables
const ENV = {
  dev: {
    API_URI: `http://localhost:4000/api`
  },
  prod: {
    // update the API_URI value with deployed API address
    API_URI: 'https://<PUBLIC-API-URI>'
  }
};

const getEnvVars = (env = true) => {
  // __DEV__ is set to true when react-native is running locally in dev
  // __DEV__ is set to false when our app is published
  if (__DEV__) {
    return ENV.dev;
  } else if (env === 'prod') {
    return ENV.prod;
  }
};

export default getEnvVars;
