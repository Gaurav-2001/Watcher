import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import podReducer from './reducers/podReducer';
import nodeReducer from './reducers/nodeReducer';
import namespaceReducer from './reducers/namespaceReducer';

export const store = configureStore({
  reducer: {
    podList: podReducer,
    nodeList: nodeReducer,
    namespaceList: namespaceReducer,
  },
  middleware: (getDefaultMiddleware: (arg0: { serializableCheck: boolean; }) => any) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
