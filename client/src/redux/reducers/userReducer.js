const defaults = {
  uid: null,
};

export default function userReducer(state = defaults, action) {
  switch(action.type) {
    case 'SIGNIN_SUCCESS': return { ...state }
  }
  return state;
};
