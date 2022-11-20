import React from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";

function ErrorModal({ error }) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className="modal-error">
          <div className="modal-errors">
            {`Sorry we have some problems, a ${error.name}.`}
            <br />
            {`${error.message}, ${error.statusText}`}
          </div>
        </div>,
        document.getElementById("modal-error")
      )}
    </>
  );
}

export default ErrorModal;
