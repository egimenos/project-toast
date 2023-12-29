import React from "react";

import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";
import ToastsProvider from "../ToastProvider/ToastProvider";

function App() {
  return (
    <>
      <ToastsProvider>
        <ToastPlayground />
      </ToastsProvider>
      <Footer />
    </>
  );
}

export default App;
