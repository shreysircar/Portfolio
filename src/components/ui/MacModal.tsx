"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Window */}
          <motion.div
            className={`fixed z-50 bg-white rounded-xl shadow-[0_40px_120px_rgba(0,0,0,0.25)]
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

              {/* Traffic Lights */}
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-red-500 hover:brightness-90"
                />
                <button
                  onClick={onMinimize}
                  className="w-3 h-3 rounded-full bg-yellow-400 hover:brightness-90"
                />
                <button
                  onClick={onExpand}
                  className="w-3 h-3 rounded-full bg-green-500 hover:brightness-90"
                />
              </div>

              <div className="flex-1 text-center text-sm text-neutral-500">
                {title}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 text-neutral-700">
              {children}
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}