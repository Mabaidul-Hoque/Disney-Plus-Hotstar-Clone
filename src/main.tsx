// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Home,
  HomeShowDetails,
  HomeShowListByCat,
  Movie,
  MovieShowListByCat,
  MySpace,
  Search,
  TV,
  TVShowListByCat,
} from "./pages";
import MovieProvider from "./contexts/MovieProvider.tsx";
import TVShowDetails from "./pages/TVShowDetails.tsx";
import MovieShowDetails from "./pages/MovieShowDetails.tsx";

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
        path: "/home/show-details/:showID",
        element: <HomeShowDetails />,
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
        path: "/movie/show-details/:showID",
        element: <MovieShowDetails />,
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
        path: "/tv/show-details/:showID",
        element: <TVShowDetails />,
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
