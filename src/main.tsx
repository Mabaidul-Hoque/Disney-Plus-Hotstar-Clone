// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Home,
  HomeShowListByCat,
  Movie,
  MovieShowListByCat,
  MySpace,
  Search,
  TV,
  TVShowListByCat,
} from "./pages";
import MovieProvider from "./contexts/MovieProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/:catID",
        element: <HomeShowListByCat />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/movie/:catID",
        element: <MovieShowListByCat />,
      },
      {
        path: "/tv",
        element: <TV />,
      },
      {
        path: "/tv/:catID",
        element: <TVShowListByCat />,
      },
      {
        path: "/mySpace",
        element: <MySpace />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <MovieProvider>
    <RouterProvider router={router} />
  </MovieProvider>
  // </React.StrictMode>
);
