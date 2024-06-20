import { configureStore } from "@reduxjs/toolkit";
import Stureduser from "./StulLoginSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer ,persistStore} from "redux-persist";
import AdminReducer from "./AdminSlice"

const persistConfig = {
    key: 'root',
    storage,
  }

  const StupersistedReducer = persistReducer(persistConfig, Stureduser)
  const AdminpersistedReducer1 = persistReducer(persistConfig, AdminReducer)

const store=configureStore({
    reducer:{
        // stuUser:Stureduser
        stuUser:StupersistedReducer,
        adminuser:AdminpersistedReducer1,
    }
})
export default store;
export const persistor=persistStore(store)