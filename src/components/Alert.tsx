import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  status: string;
  onClose: () => void;
}

function Alert({ children, status, onClose }: AlertProps) {
  return (
    <div
      className={`alert alert-warning alert-dismissible fade ${status}`}
      role="alert"
    >
      <strong>{children}</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default Alert;
