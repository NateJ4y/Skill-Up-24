import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  isVisible,
  onClose,
  duration = 5000
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 bg-white text-gray-900 border border-gray-200 px-4 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300 max-w-md"
    >
      <div className="w-6 h-6 rounded-full bg-[#22B24C]/10 text-[#22B24C] flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-4 h-4" />
      </div>
      <p className="text-xs sm:text-sm font-semibold text-gray-800 flex-1">{message}</p>
      <button
        type="button"
        onClick={onClose}
        className="text-gray-400 hover:text-gray-700 p-1"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
