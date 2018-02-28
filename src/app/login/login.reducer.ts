import { Action } from 'app/redux/action.factory';
import { LoginActions, LoginState } from './login.actions';

const defaultState: LoginState = {
  user: null,
  fetching: false,
}

export function loginReducer (state: LoginState = defaultState, action: Action): LoginState {
  console.log(action.type, action.payload);
  switch (action.type) {
    case LoginActions.LOGIN_START:
      return {...state, ...{fetching: true}};
    case LoginActions.LOGIN_SUCCESS:
      return {...state, ...{fetching: false, user: action.payload.user}};
    case LoginActions.LOGIN_FAILURE:
      return {...state, ...defaultState};
    case LoginActions.LOGOUT:
      return {...state, ...defaultState};
    default:
      return state;
  }
}
