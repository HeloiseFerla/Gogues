const initialState = {
  id: '',
  email: '',
  firstname: '',
  lastname: '',
  title: 0,
  cityId: 0,
  isLogged: 0,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.user };
    case 'UPDATE':
      return { ...state, ...action.userData };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default user;
