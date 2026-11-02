import React, { useId } from "react";

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
  const rawId = useId();
  const gradId = `gemini-grad-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

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
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B72E8" />
          <stop offset="45%" stopColor="#7B57E4" />
          <stop offset="100%" stopColor="#D96570" />
        </linearGradient>
      </defs>
      <path
        d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"
        fill={`url(#${gradId})`}
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
        d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
        fill="#D97757"
      />
    </svg>
  );
}

/**
 * Official Canva Gradient Script C Mark
 */
export function CanvaIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  const rawId = useId();
  const gradId = `canva-grad-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

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
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill={`url(#${gradId})`} />
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
  const rawId = useId();
  const gradId = `firefly-grad-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

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
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1361" />
          <stop offset="50%" stopColor="#FFF800" />
          <stop offset="100%" stopColor="#00F0FF" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5" fill="#20113B" />
      <path
        d="M6 18L12 5L18 18H14.5L13.2 15H10.8L9.5 18H6ZM11.4 12.8H12.6L12 10.5L11.4 12.8Z"
        fill={`url(#${gradId})`}
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
        d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z"
        fill="#20B2AA"
      />
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
  const rawId = useId();
  const gradId = `ig-grad-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

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
        <radialGradient id={gradId} cx="30%" cy="107%" r="130%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="22" height="22" x="1" y="1" rx="6" fill={`url(#${gradId})`} />
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
  const rawId = useId();
  const gradId = `meta-grad-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

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
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0064E0" />
          <stop offset="100%" stopColor="#0081FB" />
        </linearGradient>
      </defs>
      <path
        d="M2.035 13.42c.26-6.058 5.405-11.598 10.229-5.27c4.326-6.307 9.45-.643 9.679 4.959a7 7 0 0 1-.706 4.066a3.33 3.33 0 0 1-4.42 1.038c-1.43-.84-2.25-2.386-3.111-3.756c-.57-.944-1.141-1.877-1.701-2.832c-1.256 2.003-2.822 5.727-4.97 6.733a3.485 3.485 0 0 1-4.211-1.183a6.22 6.22 0 0 1-.789-3.755m18.02.623c-.083-2.563-.747-6.422-3.756-6.961c-1.41 0-2.272 1.317-2.998 2.344v.166c.789 1.162 1.473 2.396 2.21 3.59c.602.87 1.587 2.81 2.531 3.184c1.577.498 2.064-1.058 2.013-2.303zm-15.883-.25v.54a2.48 2.48 0 0 0 .56 1.701a1.46 1.46 0 0 0 1.691.27a5.5 5.5 0 0 0 1.608-1.712c1.038-1.473 1.92-3.008 2.915-4.502c0-.104-.176-.28-.217-.384c-.851-1.14-2.075-2.635-3.694-2.075c-2.074 1.245-2.79 3.932-2.863 6.163"
        fill={`url(#${gradId})`}
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
