import { createContext } from "react";

const ModalContext = createContext({ onClose: () => {} });

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <ModalContext.Provider value={{ onClose }}>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
                onClick={handleOverlayClick}
            >
                <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
                        aria-label="Close modal"
                    >
                        &times;
                    </button>
                    {children}
                </div>
            </div>
        </ModalContext.Provider>
    );
};


function ModalHeader({ children }) {
  return <div className="text-2xl font-bold mb-4">{children}</div>;
}

function ModalBody({ children }) {
  return <div className="mb-6">{children}</div>;
}

function ModalFooter({ children }) {
  return <div className="flex justify-end gap-2">{children}</div>;
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;