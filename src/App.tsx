// import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store";
import ReactionsProvider from "./hooks/useReactionsContext";
import DictionaryProvider from "./hooks/useDictionaryContext";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <DictionaryProvider>
          <ReactionsProvider>
            <RouterProvider router={router}></RouterProvider>
          </ReactionsProvider>
        </DictionaryProvider>
      </Provider>
    </>
  );
};

export default App;
