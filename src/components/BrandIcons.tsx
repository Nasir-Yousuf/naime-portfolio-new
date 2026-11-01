import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Official OpenAI / ChatGPT Swirl Mark
 */
export function ChatGPTIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ChatGPT"
    >
      <path
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1636a.0804.0804 0 0 1-.038-.0567V6.0748a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.4598a.7948.7948 0 0 0-.3927.6813v6.7219zm1.145-2.0488l3.1932-1.8454 3.1931 1.8454v3.6908l-3.1931 1.8455-3.1932-1.8455z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Official Google Gemini 4-Point Star Sparkle
 */
export function GeminiIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Google Gemini"
    >
      <defs>
        <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B72E8" />
          <stop offset="50%" stopColor="#7B57E4" />
          <stop offset="100%" stopColor="#D96570" />
        </linearGradient>
      </defs>
      <path
        d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
        fill="url(#geminiGrad)"
      />
    </svg>
  );
}

/**
 * Official Anthropic Claude Starburst Mark
 */
export function ClaudeIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Claude"
    >
      <path
        d="M13.89 2.5a.6.6 0 0 0-.89-.31L9.75 3.9a.6.6 0 0 0-.27.68l.94 3.42a.6.6 0 0 1-.36.72L6.8 9.9a.6.6 0 0 0-.25.86l2.12 3.12a.6.6 0 0 1 0 .7l-2.12 3.12a.6.6 0 0 0 .25.86l3.26 1.18a.6.6 0 0 1 .36.72l-.94 3.42a.6.6 0 0 0 .27.68l3.25 1.71a.6.6 0 0 0 .89-.31l1.45-3.23a.6.6 0 0 1 .68-.34l3.45.69a.6.6 0 0 0 .68-.49l.75-3.59a.6.6 0 0 1 .53-.47l3.61-.39a.6.6 0 0 0 .53-.66l-.7-3.6a.6.6 0 0 1 .18-.54l2.67-2.52a.6.6 0 0 0 0-.85l-2.67-2.52a.6.6 0 0 1-.18-.54l.7-3.6a.6.6 0 0 0-.53-.66l-3.61-.39a.6.6 0 0 1-.53-.47l-.75-3.59a.6.6 0 0 0-.68-.49l-3.45.69a.6.6 0 0 1-.68-.34L13.89 2.5Z"
        fill="#D97757"
      />
    </svg>
  );
}

/**
 * Official Canva Gradient Script C Mark
 */
export function CanvaIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Canva"
    >
      <defs>
        <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill="url(#canvaGrad)" />
      <path
        d="M15.8 8.8c-.6-.7-1.5-1.1-2.6-1.1-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3c1.2 0 2.2-.4 2.8-1.2.3-.4.2-1-.2-1.3-.4-.3-1-.2-1.3.2-.4.5-1 .7-1.6.7-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5c.8 0 1.4.3 1.8.8.3.4.9.5 1.3.2.4-.3.4-.9.1-1.3l-.1-.1z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Official Adobe Firefly Creative Flare Mark
 */
export function AdobeFireflyIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Adobe Firefly"
    >
      <defs>
        <linearGradient id="fireflyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1361" />
          <stop offset="50%" stopColor="#FFF800" />
          <stop offset="100%" stopColor="#00F0FF" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5" fill="#20113B" />
      <path
        d="M6 18L12 5L18 18H14.5L13.2 15H10.8L9.5 18H6ZM11.4 12.8H12.6L12 10.5L11.4 12.8Z"
        fill="url(#fireflyGrad1)"
      />
      <circle cx="17.5" cy="6.5" r="2" fill="#00F0FF" />
    </svg>
  );
}

/**
 * Official Perplexity AI Asterism Mark
 */
export function PerplexityIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Perplexity"
    >
      <path
        d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07"
        stroke="#20B2AA"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3" fill="#134E4A" stroke="#20B2AA" strokeWidth="2" />
    </svg>
  );
}

/**
 * Official Google NotebookLM Mark
 */
export function NotebookLMIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="NotebookLM"
    >
      <rect x="4" y="3" width="16" height="18" rx="3" fill="#E8F0FE" stroke="#1A73E8" strokeWidth="1.8" />
      <path d="M8 8H16M8 12H13" stroke="#1A73E8" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M16 15C16 16.5 14.5 18 13 18C14.5 18 16 19.5 16 21C16 19.5 17.5 18 19 18C17.5 18 16 16.5 16 15Z"
        fill="#7B57E4"
      />
    </svg>
  );
}

/**
 * Official Meta Ads (Facebook & Instagram) Mark
 */
export function MetaAdsIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Meta Ads"
    >
      <path
        d="M16.9 4C14.8 4 13.2 5.3 12 6.8 10.8 5.3 9.2 4 7.1 4 3.7 4 1 6.9 1 10.8c0 4.6 3.6 8.3 8.3 8.3 1.9 0 3.6-.6 4.9-1.8 1.3 1.2 3 1.8 4.9 1.8 4.7 0 8.3-3.7 8.3-8.3C27.4 6.9 20.3 4 16.9 4zm-9.8 12.8c-3.1 0-5.5-2.5-5.5-5.7 0-3.1 2.4-5.6 5.5-5.6 1.7 0 3.2.9 4.1 2.3l.8 1.2.8-1.2c.9-1.4 2.4-2.3 4.1-2.3 3.1 0 5.5 2.5 5.5 5.6 0 3.2-2.4 5.7-5.5 5.7-1.7 0-3.2-.9-4.1-2.3l-.8-1.2-.8 1.2c-.9 1.4-2.4 2.3-4.1 2.3z"
        fill="#0668E1"
      />
    </svg>
  );
}

/**
 * Official Google Ads Mark
 */
export function GoogleAdsIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Google Ads"
    >
      <path
        d="M4.5 15.8L10.3 5.7C11-0.2 14.8-.8 18.2 1.2C21.6 3.1 22.8 7.3 20.8 10.7L15 20.8C13 24.3 8.7 25.5 5.3 23.5C1.8 21.6.6 17.3 2.6 13.9"
        fill="#FBBC04"
      />
      <circle cx="5" cy="18" r="4.5" fill="#4285F4" />
      <path
        d="M19.5 22.5C21.9853 22.5 24 20.4853 24 18C24 15.5147 21.9853 13.5 19.5 13.5C17.0147 13.5 15 15.5147 15 18C15 20.4853 17.0147 22.5 19.5 22.5Z"
        fill="#34A853"
      />
    </svg>
  );
}

