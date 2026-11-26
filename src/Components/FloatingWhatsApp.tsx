"use client";

import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/data/contact";

interface FloatingWhatsAppProps {
  whatsappNumber?: string;
  defaultMessage?: string;
}

export function FloatingWhatsApp({
  whatsappNumber = CONTACT_INFO.whatsappNumber,
  defaultMessage = "Hi Dewata Tour! I would like to inquire about private tours in Bali.",
}: FloatingWhatsAppProps) {
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 rounded-full bg-[#181A18] px-3.5 py-1.5 text-xs font-medium text-white shadow-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap pointer-events-none">
        Chat with our Bali Concierge
      </div>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dewata Tour on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-[#20BD5A] active:scale-95"
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.64 13.5 14.47 13.46 14.31 13.71C14.14 13.96 13.66 14.52 13.51 14.69C13.37 14.86 13.22 14.88 12.97 14.76C12.72 14.63 11.92 14.37 10.97 13.52C10.23 12.86 9.73 12.05 9.58 11.8C9.44 11.55 9.57 11.41 9.69 11.29C9.8 11.18 9.94 11 10.06 10.86C10.19 10.72 10.23 10.62 10.31 10.45C10.39 10.29 10.35 10.14 10.29 10.02C10.23 9.89 9.73 8.67 9.53 8.16C9.32 7.67 9.12 7.73 8.96 7.72H8.47C8.3 7.72 8.04 7.78 7.81 8.03C7.59 8.27 6.96 8.86 6.96 10.06C6.96 11.26 7.84 12.41 7.96 12.58C8.08 12.75 9.69 15.24 12.16 16.3C12.75 16.55 13.21 16.71 13.57 16.82C14.16 17.01 14.7 16.98 15.13 16.92C15.61 16.85 16.56 16.34 16.76 15.77C16.96 15.2 16.96 14.71 16.9 14.61C16.84 14.51 16.81 14.47 16.56 14.39Z" />
        </svg>
      </a>
    </div>
  );
}
