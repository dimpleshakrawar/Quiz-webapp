import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../pages/home";
import QuizLayout from "../pages/quiz";
import ReportLayout from "../pages/report";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/quiz",
    element: (
      <AnimatePresence>
        <QuizLayout />
      </AnimatePresence>
    ),
  },
  {
    path: "/report",
    element: (
      <AnimatePresence>
        <ReportLayout />
      </AnimatePresence>
    ),
  },
]);

export default router;
