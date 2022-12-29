import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {contactsReducer} from './contactc/sliceContacts';
import { authReducer } from './auth/slice';
import { filterContactsReducer } from './sliceFilter';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';


  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ];

  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

export  const store = configureStore({
    reducer:  {
        contactst: contactsReducer,
        auth: persistReducer(authPersistConfig, authReducer),
        filter: filterContactsReducer,
      },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
  });


  export const persistor = persistStore(store);




