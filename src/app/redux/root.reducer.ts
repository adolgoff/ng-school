import { loginReducer } from 'app/login/login.reducer';
import { LoginState } from 'app/login/login.actions';

export interface RootState {
  login: LoginState
}

export const rootReducer = {
  login: loginReducer
};
