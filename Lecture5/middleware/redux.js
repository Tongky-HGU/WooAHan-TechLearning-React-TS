export function createStore(reducer) {
  let state;
  const listener = [];
  const getState = () => ({ ...state });

  const dispatch = (action) => {
    state = reducer(state, action);
    listener.forEach((fn) => fn());
  };

  const subscribe = (fn) => {
    listners.push(fn);
  };

  return{
      getState,
      dispatch,
      subscribe
  }
}
