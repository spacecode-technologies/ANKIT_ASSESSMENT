import React from 'react';
import axios from 'axios';

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isAuthenticated: true };
    case 'SIGN_OUT_SUCCESS':
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem('userInfo'),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
}

function useUserDispatch() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser };

async function loginUser(dispatch, username, password, navigate) {
  //   setError(false);
  //   setIsLoading(true);

  if (!!username && !!password) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        type: 'Web',
      },
    };
    const { data } = await axios.post(
      'https://d.jeweltrace.in/login/',
      { username, password },
      config
    );
    localStorage.setItem('userInfo', JSON.stringify(data));
    // setError(null);
    // setIsLoading(false);
    dispatch({ type: 'LOGIN_SUCCESS' });

    navigate('/dashboard');
  } else {
    dispatch({ type: 'LOGIN_FAILURE' });
    // setError(true);
    // setIsLoading(false);
  }
}

// function signOut(dispatch, history) {
//   localStorage.removeItem('id_token');
//   dispatch({ type: 'SIGN_OUT_SUCCESS' });
//   history.push('/login');
// }
