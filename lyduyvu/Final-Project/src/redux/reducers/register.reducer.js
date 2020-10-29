import {
  CREATE_LOGIN_SUCCESS,
  CREATE_LOGIN_FAIL,
  GET_USER_ACCOUNT_SUCCESS,
  GET_USER_ACCOUNT_FAIL
} from '../constants';

const initialState = {
  userList: [],
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_LOGIN_SUCCESS: {
      return {
        ...state,
        userList: [
          ...state.userList,
          action.payload,
        ],
      }
    }
    case CREATE_LOGIN_FAIL:{
      return state;
    }
    case GET_USER_ACCOUNT_SUCCESS : {
      return {
        ...state,
        userList: [
          ...state.userList,
          action.payload,
        ],
      }
    }
    case GET_USER_ACCOUNT_FAIL:{
      return state;
    }


    default: {
      return state;
    }
  }
}