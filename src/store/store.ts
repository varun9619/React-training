//store config file
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currencyReducer from './slices/currencySlice'; //this currencyReducer is an alias that is becuase of the default statement from currency slices
import cartReducer from './slices/cartSlice';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web/browser

const persistConfig = {
    key: '@training-app',
    storage, //we can also add session storeas storage:sessionStorage
  }

const rootReducer = combineReducers({
    currency:currencyReducer,
    cart:cartReducer
  });

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store=configureStore({
    reducer:persistedReducer,
    
    //     //data in the store:reducer
    //     currency:currencyReducer,
    //     cart:cartReducer
    // },
});

export const persistor = persistStore(store);

// Infer the `RootState` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch