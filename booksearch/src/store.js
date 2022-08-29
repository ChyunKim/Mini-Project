import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { fetchRequest } from "./reducer/api";
import { keywordList, clipList } from "./reducer/list";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["fetch"],
};

const rootReducer = combineReducers({
  fetch: fetchRequest,
  keyword: keywordList,
  clip: clipList,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

export default store;
export const persistor = persistStore(store);
