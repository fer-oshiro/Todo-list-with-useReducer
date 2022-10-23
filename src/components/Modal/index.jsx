import React from "react";
import "./style.css";

const Modal = React.forwardRef(({ children }, ref) => {
  const [display, setDisplay] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    openModal: () => open(),
    closeModal: () => close()
  }));

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display)
    return (
      <>
        <div className="darkBG" onClick={close} />
        <div className="centered">
          <button className="closeBtn" onClick={close}>
            X
          </button>
          {children}
        </div>
      </>
    );
});

export default Modal;
