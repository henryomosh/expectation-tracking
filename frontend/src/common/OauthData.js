const oauthCommon = {
  client_id: "Y8b0wK5GbjIr63OfR5Jr3qWdyACEiCI30qiqSTGg",
  client_secret: "LHq92y3FMhyhAr5ZfJwgwDv64q3ncnugBE1F9n2DFRvabLWjhvRf0IYgd3OWrJ1ZuBfc2sZgFUUAuB0XBZMROkFRsLCJ4lRallcOgAGFgJ0bB6wC0uoq0pzyxixsgDzW",
};

const convertToken = {
  client_id: oauthCommon.client_id,
  client_secret: oauthCommon.client_secret,
  token: "",
  grant_type: "convert_token",
  backend: "google-oauth2"
};

const oauthToken = {
  client_id: oauthCommon.client_id,
  client_secret: oauthCommon.client_secret,
  grant_type: "password",
  username: "",
  password: ""
};

const refreshToken = {
  client_id: oauthCommon.client_id,
  client_secret: oauthCommon.client_secret,
  grant_type: "refresh_token",
  refresh_token: ""
};

export { convertToken, oauthToken, refreshToken };

