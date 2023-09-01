import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { RouterProvider } from "react-router-dom";
// import router from "./router";
import store from "./store/index.js";
import "./main.css";
import App from "./App.jsx";

// useEffect(() => {
//   if (countdown > 0) {
//     const timer = setInterval(() => {
//       setCountdown((prevCountdown) => prevCountdown - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   } else {
//     handleSubmit();
//   }
// }, [countdown, handleSubmit]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <RouterProvider router={router} fallbackElement={<p>Loading...</p>} /> */}
    </Provider>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<React.StrictMode>
//   <Provider store={store}>
//     <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
//   </Provider>
// </React.StrictMode>)
