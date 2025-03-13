"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RegistrationModal({ isOpen, onClose }) {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Stop propagation on modal click to prevent closing when clicking inside modal
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl max-w-md w-full p-6 md:p-8 shadow-xl"
            onClick={handleModalClick}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-primary">
                Pilih Jenis Pendaftaran
              </h3>
              <button
                className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              Silakan pilih jenis pendaftaran yang sesuai dengan kategori Anda:
            </p>

            <div className="grid grid-cols-1 gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScc5y6fBsoaZ9SROcrJfVvsf76LiXG93Bh07ISDOooJKPRrGQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAAaayDFIJ88CoDs6DSkbV91TOZ_8829oh-Je10eo1W1e1qf07a7ucpODaA6U_aem_nrYVE1cOBEP3iaC1zPkjgg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border-2 border-primary/20 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-lg">
                      Individu
                    </h4>
                    <p className="text-sm text-gray-600">
                      Untuk pendaftaran perorangan
                    </p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc9kQRl7eFas-vBZ0IU2Sf6qgRsAwG1xw-Ky8xuNr3zJ7Ah2w/viewform?fbclid=PAZXh0bgNhZW0CMTEAAaY5Fs6rionvOA6p5YUKSyL99xv0BK7HViJQUVmVhCt_ePGj-TaWRbpohNo_aem_-yw_r-AJf4yH-Cw5Dtmh7A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border-2 border-primary/20 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-lg">
                      Perusahaan
                    </h4>
                    <p className="text-sm text-gray-600">
                      Untuk pendaftaran perusahaan, startup, atau organisasi
                    </p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <p className="text-xs text-gray-500 mt-6 text-center">
              Anda akan diarahkan ke Google Form untuk melengkapi pendaftaran
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
