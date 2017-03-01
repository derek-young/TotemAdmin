const defaults = {
  uid: null,
  isAuthenticated: false,
};

export default function userReducer(state = defaults, action) {
  switch(action.type) {
    case 'SIGNIN_SUCCESS': return { ...state }
  }
  return state;
};
