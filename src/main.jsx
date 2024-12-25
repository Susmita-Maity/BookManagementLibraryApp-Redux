import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import BrowseBooks from "./components/BrowseBooks.jsx";
import AddBook from "./components/AddBook.jsx";
import BookByCategory from "./components/BookByCategory.jsx";
import BookDetail from "./components/BookDetail.jsx";
import Error from "./components/Error.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/browseBooks", element: <BrowseBooks /> },
      { path: "/addBook", element: <AddBook /> },
      { path: "/book/:id", element: <BookDetail /> },
      { path: "/books/:categories", element: <BookByCategory /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
