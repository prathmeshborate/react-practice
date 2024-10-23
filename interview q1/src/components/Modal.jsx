import React from 'react';

function Modal({ image, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-white p-4 rounded-lg max-w-lg">
                <h2 className="text-2xl font-bold mb-4">{image.title}</h2>
                <img src={image.url} alt={image.title} className="w-full h-auto" />
                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;
