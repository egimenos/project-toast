import React from "react";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toastMessage, setToastMessage] = React.useState("Test message");

  const { toasts, createToast, dismissToast } = React.useContext(ToastContext);

  const handleClose = (id) => {
    dismissToast(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createToast(toastMessage, toastVariant);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf handleClose={handleClose} toasts={toasts} />
      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                onChange={(event) => setToastMessage(event.target.value)}
                id="message"
                className={styles.messageInput}
                value={toastMessage}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            {VARIANT_OPTIONS.map((variant) => {
              return (
                <div
                  key={variant}
                  className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                >
                  <label htmlFor={`variant-${variant}`}>
                    <input
                      onChange={(event) => setToastVariant(event.target.value)}
                      id={`variant-${variant}`}
                      type="radio"
                      name="variant"
                      value={variant}
                      checked={variant === toastVariant}
                    />
                    {variant}
                  </label>
                </div>
              );
            })}
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
