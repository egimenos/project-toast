import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleClose }) {
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.length > 0 &&
        toasts.map((toast) => (
          <li key={toast.id} className={styles[toast.variant]}>
            <Toast
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
