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
 * Official Midjourney Sailboat Mark
 */
export function MidjourneyIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Midjourney"
    >
      <path
        d="M12.8 3.2c.4 1.2 1.3 3.6 2.4 5.3 1.2 1.9 2.5 3.3 3.9 4.1.2.1.3.4.1.6-.3.4-1.2 1-2.5 1.5-1.9.7-4.1.8-6.1.4-.4-.1-.6-.5-.4-.9.9-1.9 2.1-5.6 2.6-11z"
        fill="currentColor"
      />
      <path
        d="M5.4 17.6c1.8.8 4.2 1.2 6.8 1.2 2.7 0 5.2-.5 7.1-1.3.4-.2.8.2.7.6-.7 1.8-2.6 3.1-4.9 3.6-2 .4-4.2.3-6.1-.5-1.5-.6-2.8-1.7-3.7-3.1-.3-.4 0-.8.1-.5z"
        fill="currentColor"
      />
      <path
        d="M10.2 6.5C9.8 8.8 8.8 11.7 6.8 14c-.2.2-.5.1-.6-.1-.7-.8-1.4-1.8-1.9-2.9-.1-.3 0-.6.3-.7 1.9-.8 4.1-2.3 5.6-3.8z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Official WhatsApp Mark
 */
export function WhatsAppIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="WhatsApp"
    >
      <circle cx="12" cy="12" r="11" fill="#25D366" />
      <path
        d="M17.5 14.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9c0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"
        fill="white"
      />
    </svg>
  );
}

/**
 * Official Facebook "f" Logo
 */
export function FacebookIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Facebook"
    >
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path
        d="M15.5 12.5H13V20.5H9.5V12.5H8V9.5H9.5V7.7C9.5 5.8 10.6 4.5 12.8 4.5C13.8 4.5 14.7 4.6 14.7 4.6V7H13.6C12.7 7 12.5 7.6 12.5 8.2V9.5H15.2L15.5 12.5Z"
        fill="white"
      />
    </svg>
  );
}

/**
 * Official Instagram Gradient Mark
 */
export function InstagramIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Instagram"
    >
      <defs>
        <radialGradient id="igRadial" cx="30%" cy="107%" r="130%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="22" height="22" x="1" y="1" rx="6" fill="url(#igRadial)" />
      <rect width="13" height="13" x="5.5" y="5.5" rx="3.5" stroke="white" strokeWidth="1.8" fill="none" />
      <circle cx="12" cy="12" r="3.2" stroke="white" strokeWidth="1.8" fill="none" />
      <circle cx="15.8" cy="8.2" r="1" fill="white" />
    </svg>
  );
}

/**
 * Official Google Multi-Color "G" Mark
 */
export function GoogleIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Google"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
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

/**
 * Official Meta (Infinity Loop) Mark
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
      aria-label="Meta"
    >
      <defs>
        <linearGradient id="metaGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#0064e0" />
          <stop offset="50%" stopColor="#0079f2" />
          <stop offset="100%" stopColor="#0082fb" />
        </linearGradient>
      </defs>
      <path
        d="M16.9 5.5C14.7 5.5 13.1 6.8 12 8.3C10.9 6.8 9.3 5.5 7.1 5.5C3.7 5.5 1 8.4 1 12.3C1 16.9 4.6 20.6 9.3 20.6C11.2 20.6 12.9 20 14.2 18.8C15.5 20 17.2 20.6 19.1 20.6C23.8 20.6 27.4 16.9 27.4 12.3C27.4 8.4 20.3 5.5 16.9 5.5ZM7.1 18.3C4 18.3 1.6 15.8 1.6 12.6C1.6 9.5 4 7 7.1 7C8.8 7 10.3 7.9 11.2 9.3L12 10.5L12.8 9.3C13.7 7.9 15.2 7 16.9 7C20 7 22.4 9.5 22.4 12.6C22.4 15.8 20 18.3 16.9 18.3C15.2 18.3 13.7 17.4 12.8 16L12 14.8L11.2 16C10.3 17.4 8.8 18.3 7.1 18.3Z"
        fill="url(#metaGrad)"
        transform="matrix(0.85 0 0 0.85 0 0)"
      />
    </svg>
  );
}

/**
 * Official YouTube Mark
 */
export function YouTubeIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="YouTube"
    >
      <rect width="22" height="16" x="1" y="4" rx="4" fill="#FF0000" />
      <polygon points="10,8 16,12 10,16" fill="white" />
    </svg>
  );
}

/**
 * Official TikTok Note Mark
 */
export function TikTokIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TikTok"
    >
      <circle cx="12" cy="12" r="11" fill="#010101" />
      <path
        d="M16.5 7.5C15.6 7.4 14.7 6.8 14.2 6V5H12V14.6C11.9 15.7 11 16.5 9.9 16.4C8.8 16.3 8 15.3 8.1 14.2C8.2 13.2 9.1 12.4 10.1 12.4C10.4 12.4 10.7 12.5 11 12.6V10.3C10.7 10.2 10.4 10.2 10.1 10.2C7.8 10.2 6 12 6 14.3C6 16.6 7.8 18.4 10.1 18.4C12.4 18.4 14.2 16.6 14.2 14.3V9.7C15.3 10.5 16.6 11 18 11V8.8C17.5 8.8 17 8.3 16.5 7.5Z"
        fill="white"
      />
    </svg>
  );
}

/**
 * Official Upwork Green Mark
 */
export function UpworkIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Upwork"
    >
      <circle cx="12" cy="12" r="11" fill="#14A800" />
      <path
        d="M17.4 7C15.8 7 14.6 8 14.1 9.6C13.4 8.7 13 7.6 12.8 7H10.6V12.2C10.6 13.5 9.6 14.5 8.3 14.5C7 14.5 6 13.5 6 12.2V7H3.8V12.2C3.8 14.7 5.8 16.7 8.3 16.7C10.8 16.7 12.8 14.7 12.8 12.2V11.3C13.1 11.9 13.5 12.6 14 13.2L12.5 17H14.8L15.9 14.2C16.4 14.4 16.9 14.5 17.4 14.5C19.5 14.5 21.2 12.8 21.2 10.7C21.2 8.7 19.5 7 17.4 7ZM17.4 12.4C16.5 12.4 15.7 11.6 15.7 10.7C15.7 9.8 16.5 9.1 17.4 9.1C18.3 9.1 19.1 9.8 19.1 10.7C19.1 11.6 18.3 12.4 17.4 12.4Z"
        fill="white"
      />
    </svg>
  );
}

/**
 * Official LinkedIn Mark
 */
export function LinkedInBrandIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LinkedIn"
    >
      <rect width="22" height="22" x="1" y="1" rx="4" fill="#0A66C2" />
      <path
        d="M7.5 18H5V10H7.5V18ZM6.2 8.9C5.4 8.9 4.8 8.3 4.8 7.5C4.8 6.7 5.4 6.1 6.2 6.1C7 6.1 7.6 6.7 7.6 7.5C7.6 8.3 7 8.9 6.2 8.9ZM19 18H16.5V13.8C16.5 12.7 16 12 15 12C14 12 13.4 12.7 13.4 13.8V18H10.9V10H13.4V11.1C13.8 10.4 14.7 9.8 15.9 9.8C17.8 9.8 19 11 19 13.2V18Z"
        fill="white"
      />
    </svg>
  );
}
