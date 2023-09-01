import { RouterProvider } from "react-router-dom";
import router from "./router";

function MainLayout() {
  return <RouterProvider router={router} />;
}

export default MainLayout;
