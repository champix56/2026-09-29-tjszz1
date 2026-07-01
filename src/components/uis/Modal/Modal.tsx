import type { FC } from "react";
import styles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/store";
import { Button } from "react-bootstrap";

interface ModalProps {}

const Modal: FC<ModalProps> = () => {
  const mdata = useSelector((s: RootState) => s.modal);
  const d = useDispatch<AppDispatch>();
  if (mdata.shown)
    return <div className={styles.Modal} data-testid="Modal">
      <div className={styles.container}>
        {mdata.message}
      </div>

    </div>;
  else return null;
};

export default Modal;
