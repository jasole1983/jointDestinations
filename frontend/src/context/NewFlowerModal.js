import { ReactDOM } from "react";
import { createContext, useContext, useRef, useState, useEffect } from "react";

const FlowerModalContext = createContext();

export function FlowerModalProvider ({ children }) {
  const flowerModalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(flowerModalRef.current);
  }, [])

  return (
      <>
        <FlowerModalContext.Provider value={value}>
          {children}
        </FlowerModalContext.Provider>
        <div ref={flowerModalRef} />
      </>  
  )  
}

export function FlowerModal({ onClose, children }) {
  const flowerModalNode = useContext(FlowerModalContext);
  if (!flowerModalNode) return null;

  return ReactDOM.createPortal(
      <div id="flower_modal">
        <div id="flower_modal_background" onClick={onClose} />
        <div id="flower_modal_content" className="forms flower_modal">
          {children}
        </div>
      </div>,
      flowerModalNode
  );
}