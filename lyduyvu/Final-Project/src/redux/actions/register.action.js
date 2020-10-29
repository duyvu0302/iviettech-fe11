import { CREATE_LOGIN,GET_USER_ACCOUNT} from '../constants';

export function createLogin(params) {
  return {
    type: CREATE_LOGIN,
    payload: params,
  }
}

export function getUserAccount(params) {
  console.log("getUserAccount -> params", params)
  return {
    type: GET_USER_ACCOUNT,
    payload: params,
  }
}