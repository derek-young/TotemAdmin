import store from '../../redux/store';

export function updateUserId(id) {
  return store.dispatch({
    type: 'update_userId',
    payload: { id }
  });
}
