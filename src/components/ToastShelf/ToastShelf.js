import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleClose }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.length > 0 &&
        toasts.map((toast) => (
          <li className={styles[toast.variant]}>
            <Toast
              key={toast.id}
              onClose={() => handleClose(toast.id)}
              variant={toast.variant}
            >
              {toast.message}
            </Toast>
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
