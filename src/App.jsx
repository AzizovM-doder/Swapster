import React, { useEffect, useState } from "react";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home/home";
import Tarif from "./pages/tarif/tarif";
import Nav from "./components/nav";
import Work from "./pages/work/work";
import Checking from "./pages/checking/checking";

const App = () => {
  const router = createBrowserRouter([
    {
      // errorElement : <Nav />,
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element : <Home />
        },
        {
          path : 'tarif',
          element : <Tarif />
        },
        {
          path : 'work',
          element : <Work />
        },
        {
          path : "check",
          element : <Checking />
        }
      ],
    },
  ]);
  return <div> <RouterProvider router={router}/></div>;
};

export default App;
