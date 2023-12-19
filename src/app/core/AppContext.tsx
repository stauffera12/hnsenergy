
import React, { useContext, useReducer, createContext, Dispatch } from 'react';
import Cookies from 'js-cookie';
import { IUser } from '../@types';



export enum ActionType {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  FETCH_USER = 'FETCH_USER',
  AUTH_CHECK = 'AUTH_CHECK',
  SET_APP = 'SET_APP',
  SET_LIVE = 'SET_LIVE',
  SET_USEGE = 'SET_USEGE',
  SET_EDIT_DATA = 'SET_EDIT_DATA',
  SET_PRICING = 'SET_PRICING',
  // SET_WORKSPACEID = 'SET_WORKSPACEID',
  TOGGLE = 'TOGGLE',
  TOGGLE_EDIT_FORM = 'TOGGLE_EDIT_FORM',
  TOGGLE_SET_PRICING = 'TOGGLE_SET_PRICING',
  UPDATE_APP = 'UPDATE_APP',
}

export type IAction = {
  payload: any;
  type: ActionType;
  user?: IUser;
};

export interface IAppState {
  user: IUser;
  logo?: string;
  appColor?: string;
  appBackground?: string;
  companyId?: string;
  accessCode?: string;
  enabled?: boolean;

}

export interface IAppContext {
  state: IAppState;
  dispatch: Dispatch<IAction>;
}

type Props = {
  children?: JSX.Element;
};

export const initialAppState: IAppState = {
  user: {
    token: Cookies.get('accessToken'),}
};

const AppContext = createContext<IAppContext>({
  state: {
    user: {},
  },
  dispatch: () => undefined,
});

const appReducer = (
  state: IAppState,
  action: IAction
): typeof initialAppState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload };
    case 'AUTH_CHECK':
      return { ...state, user: action.payload };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(
    appReducer,
    initialAppState as IAppState
  );
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

function useAppState() {
  const { state } = useContext(AppContext);
  if (state === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }
  return state as IAppState;
}

function useAppDispatch() {
  const { dispatch } = useContext(AppContext);
  if (dispatch === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }
  return dispatch;
}

function authLoginDispatch(dispatch: Dispatch<IAction>, user: IUser) {
  const { token, remember } = user;
  
  if (token) {
    Cookies.set('accessToken', token, { expires: remember ? 360 : 1 });
  }
  dispatch({ type: ActionType.LOGIN_SUCCESS, payload: user });
}
function authCheckDispatch(dispatch: Dispatch<IAction>, user: IUser) {
  dispatch({ type: ActionType.AUTH_CHECK, payload: user });
}

function authLogoutDispatch(dispatch: Dispatch<IAction>) {
  Cookies.remove('accessToken');
  Cookies.remove('appId');
  localStorage.clear();
  dispatch({ type: ActionType.LOGIN_SUCCESS, payload: [] });
}

// function setLive(dispatch: Dispatch<IAction>, live: boolean) {
//   dispatch({ type: ActionType.SET_LIVE, payload: live });
// }

// function setUsege(dispatch: Dispatch<IAction>, usege: number) {
//   dispatch({ type: ActionType.SET_USEGE, payload: usege });
// }

function toggleSidebar(
  dispatch: Dispatch<IAction>,
  isSidebar: boolean | undefined
) {
  dispatch({ type: ActionType.TOGGLE, payload: isSidebar });
}

function toggleEditForm(
  dispatch: Dispatch<IAction>,
  isEditForm: boolean | undefined
) {
  dispatch({ type: ActionType.TOGGLE_EDIT_FORM, payload: !isEditForm });
}

export {
  AppProvider,
  useAppState,
  useAppDispatch,
  toggleSidebar,
  authCheckDispatch,
  authLoginDispatch,
  authLogoutDispatch,
  toggleEditForm,
};
