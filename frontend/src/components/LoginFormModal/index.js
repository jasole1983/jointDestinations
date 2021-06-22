import LoginForm from "./LoginForm";
import { useState } from 'react';
import { Modal } from '../../context/Modal';
import styles from './LoginForm.module.css'

function LoginFormModal() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div id="login-container" className={styles.NavLinkDiv}>
        <button onClick={() => setShowModal(true)} className={styles.NavLinkButton}>Log In / Sign Up</button>
      </div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LoginForm />
          </Modal>
        )}
    </>
  );
}

export default LoginFormModal;