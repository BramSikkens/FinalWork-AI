import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers/index";
import rootSaga from "./sagas/index";

function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
