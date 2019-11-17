import {createStore} from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

store.subscribe(() => console.log(`store is updated`));

export default store;
