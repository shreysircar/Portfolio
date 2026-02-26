"use client";
import { X, Minus, ArrowUpLeft, ArrowDownRight} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

type MacModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onExpand: () => void;
  expanded: boolean;
  title: string;
  children: React.ReactNode;
};

export default function MacModal({
  isOpen,
  onClose,
  onMinimize,
  onExpand,
  expanded,
  title,
  children,
}: MacModalProps) {

  // ESC support
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;

return createPortal(
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Window */}
        <motion.div
          className={`fixed z-[9999] bg-white rounded-xl shadow-[0_40px_120px_rgba(0,0,0,0.25)]
          ${expanded ? "w-[90vw] h-[85vh]" : "w-[700px] h-[500px]"}
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          flex flex-col overflow-hidden`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.25 }}
        >

          {/* Top Bar */}
          <div className="h-10 flex items-center px-4 bg-neutral-100 border-b border-neutral-200">
            <div className="group flex items-center gap-2">

              {/* Close */}
              <button
                onClick={onClose}
                className="relative w-3 h-3 rounded-full bg-red-500 transition-all duration-200 hover:brightness-95"
              >
                <X
                  size={8}
                  strokeWidth={3}
                  className="absolute inset-0 m-auto text-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                />
              </button>

              {/* Minimize */}
              <button
                onClick={onMinimize}
                className="relative w-3 h-3 rounded-full bg-yellow-400 transition-all duration-200 hover:brightness-95"
              >
                <Minus
                  size={8}
                  strokeWidth={3}
                  className="absolute inset-0 m-auto text-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                />
              </button>

              {/* Expand */}
              <button
                onClick={onExpand}
                className="relative w-3 h-3 rounded-full bg-green-500 transition-all duration-200 hover:brightness-95"
              >
                <svg
                  viewBox="0 0 12 12"
                  className="absolute inset-0 m-auto w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  stroke="rgba(0,0,0,0.6)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                >
                  <polyline points="4.8,3.2 3.2,3.2 3.2,4.8" />
                  <polyline points="7.2,8.8 8.8,8.8 8.8,7.2" />
                </svg>
              </button>

            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 text-neutral-700">
            {children}
          </div>

        </motion.div>
      </>
    )}
  </AnimatePresence>,
  document.body
);}