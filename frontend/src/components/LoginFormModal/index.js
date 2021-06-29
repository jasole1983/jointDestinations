import LoginForm from "./LoginForm";
import { useState } from 'react';
import { Modal } from '../../context/Modal';
// import styles from './LoginForm.module.css'

function LoginFormModal() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} id="login_btn">Log In / Sign Up</button>
      {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LoginForm />
          </Modal>
        )}
    </>
  );
}

export default LoginFormModal;