// import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store";
import ReactionsProvider from "./hooks/useContext";

const App: React.FC = () => {
  return (
    <>
      <ReactionsProvider>
        <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
        </Provider>
      </ReactionsProvider>
    </>
  );
};

export default App;
