import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";
const Modal = forwardRef(function Modal({childern}, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      Open() {
        dialog.current.showModal();
      },
    };
  });
  console.log(childern)
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
     {childern}
    <form method="dialog" className="mt-4 text-right">
        <Button>Close</Button>
    </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
