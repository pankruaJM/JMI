import React, { useId } from 'react';

interface JPointBrandStripProps {
  /** Compact 'xs' fits inside tight CTA buttons; 'sm' suits cards and banners */
  size?: 'xs' | 'sm';
  /** Surface contrast adaptation */
  variant?: 'dark' | 'light';
  /** Show subtle trailing '+' indicator after the 3 icons */
  showPlus?: boolean;
  className?: string;
}

/**
 * Displays 3 subtle micro brand marks (Lotus's, Lazada, PTT) + "+"
 * so customers immediately recognize that 500 J Point rewards are redeemable across many top brands.
 */
export const JPointBrandStrip: React.FC<JPointBrandStripProps> = ({
  size = 'xs',
  variant = 'dark',
  showPlus = true,
  className = '',
}) => {
  const uid = useId();
  const lazGradId = `lazHeartGrad-${uid}`;

  const iconBox =
    size === 'sm'
      ? 'w-5 h-5'
      : 'w-4 h-4';

  const ringClass =
    variant === 'dark'
      ? 'ring-1 ring-black/65'
      : 'ring-1 ring-white';

  const plusBox =
    size === 'sm'
      ? 'h-5 min-w-[20px] px-1 text-[11px]'
      : 'h-4 min-w-[16px] px-0.5 text-[10px]';

  const plusTone =
    variant === 'dark'
      ? 'bg-white/18 text-white border border-white/30'
      : 'bg-slate-900/10 text-slate-800 border border-slate-300/80';

  return (
    <span
      className={`inline-flex items-center shrink-0 align-middle ${className}`}
      title="แลก E-Voucher และของรางวัลได้หลายแบรนด์ชั้นนำ เช่น Lotus's, Lazada, PTT และอีกมากมาย"
      aria-label="แลกได้หลายแบรนด์ เช่น Lotus's, Lazada, PTT และอีกมากมาย"
    >
      <span className="inline-flex items-center -space-x-1">
        {/* 1. Lotus's */}
        <span
          className={`${iconBox} rounded-full bg-white ${ringClass} inline-flex items-center justify-center overflow-hidden shadow-2xs shrink-0`}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
            <circle cx="12" cy="12" r="12" fill="#FFFFFF" />
            <circle cx="12" cy="12" r="9.8" fill="none" stroke="#00B8A9" strokeWidth="1.6" />
            <path
              d="M7.5 14.5C8 10.6 10.8 8.3 14.5 7.7C14.8 11.4 12.6 14.6 8.8 15.2"
              fill="#00B14F"
            />
            <circle cx="16.4" cy="8.4" r="1.6" fill="#FACC15" />
          </svg>
        </span>

        {/* 2. Lazada */}
        <span
          className={`${iconBox} rounded-full bg-[#0F146D] ${ringClass} inline-flex items-center justify-center overflow-hidden shadow-2xs shrink-0`}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
            <circle cx="12" cy="12" r="12" fill="#0F146D" />
            <path
              d="M12 18.2C11.7 18.2 5.4 14.2 5.4 9.6C5.4 7.5 7 6 8.9 6C10.3 6 11.4 6.8 12 7.8C12.6 6.8 13.7 6 15.1 6C17 6 18.6 7.5 18.6 9.6C18.6 14.2 12.3 18.2 12 18.2Z"
              fill={`url(#${lazGradId})`}
            />
            <path
              d="M12 7.8C12.6 6.8 13.7 6 15.1 6C17 6 18.6 7.5 18.6 9.6C18.6 12.5 15.4 15.6 12 18.2V7.8Z"
              fill="#FF6600"
              fillOpacity="0.88"
            />
            <defs>
              <linearGradient id={lazGradId} x1="5.4" y1="6" x2="18.6" y2="18.2" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#EC1D7B" />
                <stop offset="100%" stopColor="#F53D2D" />
              </linearGradient>
            </defs>
          </svg>
        </span>

        {/* 3. PTT */}
        <span
          className={`${iconBox} rounded-full bg-white ${ringClass} inline-flex items-center justify-center overflow-hidden shadow-2xs shrink-0`}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
            <circle cx="12" cy="12" r="12" fill="#FFFFFF" />
            <path
              d="M12.2 3.8C12.2 3.8 18 8.2 18 13.5C18 16.9 15.4 19.6 12 19.6C8.6 19.6 6 16.9 6 13.5C6 9.9 8.7 6.8 11.1 4.8L12.2 3.8Z"
              fill="#0054A6"
            />
            <path
              d="M12.3 8.1C12.3 8.1 15.3 10.6 15.3 13.6C15.3 15.5 13.9 17 12.1 17C10.3 17 8.9 15.5 8.9 13.6C8.9 11.4 10.6 9.5 12.3 8.1Z"
              fill="#E31837"
            />
            <path
              d="M12.1 11.4C12.1 11.4 13.4 12.5 13.4 13.9C13.4 14.8 12.8 15.4 12.1 15.4C11.4 15.4 10.8 14.8 10.8 13.9C10.8 12.9 11.5 12 12.1 11.4Z"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      </span>

      {showPlus && (
        <span
          className={`ml-0.5 rounded-full font-mono font-extrabold leading-none inline-flex items-center justify-center ${plusBox} ${plusTone}`}
          aria-hidden="true"
        >
          +
        </span>
      )}
    </span>
  );
};
