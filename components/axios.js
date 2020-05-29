import axios from 'axios'
const base_url = 'https://appointmeter-api.herokuapp.com'

export function signupUser(params, cb){
  axios.post(base_url + `/signup/users`, params)
  .then(function (res) {
      console.log(res.data);
      cb(null, res.data);
  })
  .catch(function (error) {
      console.log(error);
      cb(error, null);
  })
}

export function loginUser(params, cb){
  axios.post(base_url + `login/users`, params)
  .then(function (res) {
      cb(null, res.data);
  })
  .catch(function (error) {
      console.log(error);
      cb(error, null);
  })
}
