import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { GamePage } from "../../pages/GamePage";
import { ErrorPage } from "../../pages/ErrorPage";
import App from "../../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/:id",
        element: <GamePage />,
      },
    ],
  },
]);
