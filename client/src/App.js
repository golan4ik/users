import { Provider } from "react-redux";
import store from "./data/store";
import AppLayout from "./layout/App";

function App() {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}

export default App;
