import { Language } from './content';

export type BuiltinPartnerKey = 'siamchai' | 'rabbit' | 't1c';
export type PartnerKey = string;

export type PartnerThemePreset =
  | 'blue'
  | 'orange'
  | 'red'
  | 'emerald'
  | 'purple'
  | 'amber'
  | 'teal'
  | 'indigo'
  | 'rose'
  | 'slate';

export const PARTNER_THEME_PRESETS: Record<
  PartnerThemePreset,
  {
    dot: string;
    navText: string;
    navActiveBorder: string;
    navTopBorder: string;
    accentText: string;
    accentBg: string;
    accentBgDot: string;
    accentBorder: string;
    accentBorderLeft: string;
    accentSoftBg: string;
    accentSoftBorder: string;
    accentDecor: string;
    accentHoverText: string;
    accentCheckbox: string;
    primaryButton: string;
    topStripBorder: string;
    heroCardGradient: string;
    pageBg: string;
    footerBg: string;
    ctaGradient: string;
    badgeSoft: string;
  }
> = {
  blue: {
    dot: 'bg-[#1954B8]',
    navText: 'text-[#60A5FA]',
    navActiveBorder: 'border-[#1954B8] bg-[#1954B8]/20',
    navTopBorder: 'border-t-[#1954B8]',
    accentText: 'text-[#1954B8]',
    accentBg: 'bg-[#1954B8]',
    accentBgDot: 'bg-[#1954B8]',
    accentBorder: 'border-[#1954B8]',
    accentBorderLeft: 'border-l-[#1954B8]',
    accentSoftBg: 'bg-[#EFF5FF]',
    accentSoftBorder: 'border-[#BFDBFE]',
    accentDecor: 'decoration-[#1954B8]',
    accentHoverText: 'hover:text-[#1954B8]',
    accentCheckbox: 'accent-[#1954B8]',
    primaryButton: 'bg-[#1954B8] hover:bg-[#123F8C] text-white',
    topStripBorder: 'border-t-4 border-t-[#1954B8]',
    heroCardGradient: 'from-[#0F3170] via-[#1954B8] to-[#236AE0]',
    pageBg: 'bg-[#F2F6FC]',
    footerBg: 'bg-[#E9F0FA]',
    ctaGradient: 'bg-gradient-to-r from-[#1954B8] to-[#123F8C] hover:from-[#123F8C] hover:to-[#0C2B63] text-white',
    badgeSoft: 'bg-[#E3EDFD] text-[#1954B8]',
  },
  orange: {
    dot: 'bg-[#F25C2A]',
    navText: 'text-[#FF8547]',
    navActiveBorder: 'border-[#F25C2A] bg-[#F25C2A]/20',
    navTopBorder: 'border-t-[#F25C2A]',
    accentText: 'text-[#EA531C]',
    accentBg: 'bg-[#EA531C]',
    accentBgDot: 'bg-[#F25C2A]',
    accentBorder: 'border-[#F25C2A]',
    accentBorderLeft: 'border-l-[#F25C2A]',
    accentSoftBg: 'bg-[#FFF5EE]',
    accentSoftBorder: 'border-[#FED7AA]',
    accentDecor: 'decoration-[#EA531C]',
    accentHoverText: 'hover:text-[#EA531C]',
    accentCheckbox: 'accent-[#EA531C]',
    primaryButton: 'bg-[#EA531C] hover:bg-[#C94212] text-white',
    topStripBorder: 'border-t-4 border-t-[#F25C2A]',
    heroCardGradient: 'from-[#F04D38] via-[#F97316] to-[#FBBF24]',
    pageBg: 'bg-[#FBF7F1]',
    footerBg: 'bg-[#F4ECE0]',
    ctaGradient: 'bg-gradient-to-r from-[#EE4D38] to-[#F97316] hover:from-[#D93D29] hover:to-[#EA580C] text-white',
    badgeSoft: 'bg-[#FFEDE1] text-[#EA531C]',
  },
  red: {
    dot: 'bg-[#E31837]',
    navText: 'text-[#FF4D6A]',
    navActiveBorder: 'border-[#E31837] bg-[#E31837]/20',
    navTopBorder: 'border-t-[#E31837]',
    accentText: 'text-[#E31837]',
    accentBg: 'bg-[#E31837]',
    accentBgDot: 'bg-[#E31837]',
    accentBorder: 'border-[#E31837]',
    accentBorderLeft: 'border-l-[#E31837]',
    accentSoftBg: 'bg-[#FFF3F5]',
    accentSoftBorder: 'border-[#FECDD3]',
    accentDecor: 'decoration-[#E31837]',
    accentHoverText: 'hover:text-[#E31837]',
    accentCheckbox: 'accent-[#E31837]',
    primaryButton: 'bg-[#E31837] hover:bg-[#BE122D] text-white',
    topStripBorder: 'border-t-4 border-t-[#E31837]',
    heroCardGradient: 'from-[#0D0D0F] via-[#18181B] to-[#3B0A13]',
    pageBg: 'bg-[#F6F6F7]',
    footerBg: 'bg-[#EFEFF2]',
    ctaGradient: 'bg-gradient-to-r from-[#E31837] to-[#BE122D] hover:from-[#BE122D] hover:to-[#990D23] text-white',
    badgeSoft: 'bg-[#FEE8EC] text-[#E31837]',
  },
  emerald: {
    dot: 'bg-[#059669]',
    navText: 'text-[#34D399]',
    navActiveBorder: 'border-[#059669] bg-[#059669]/20',
    navTopBorder: 'border-t-[#059669]',
    accentText: 'text-[#059669]',
    accentBg: 'bg-[#059669]',
    accentBgDot: 'bg-[#059669]',
    accentBorder: 'border-[#059669]',
    accentBorderLeft: 'border-l-[#059669]',
    accentSoftBg: 'bg-[#ECFDF5]',
    accentSoftBorder: 'border-[#A7F3D0]',
    accentDecor: 'decoration-[#059669]',
    accentHoverText: 'hover:text-[#059669]',
    accentCheckbox: 'accent-[#059669]',
    primaryButton: 'bg-[#059669] hover:bg-[#047857] text-white',
    topStripBorder: 'border-t-4 border-t-[#059669]',
    heroCardGradient: 'from-[#065F46] via-[#059669] to-[#10B981]',
    pageBg: 'bg-[#F2FAF6]',
    footerBg: 'bg-[#E6F4EC]',
    ctaGradient: 'bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#047857] hover:to-[#065F46] text-white',
    badgeSoft: 'bg-[#DCFCE7] text-[#047857]',
  },
  purple: {
    dot: 'bg-[#7C3AED]',
    navText: 'text-[#A78BFA]',
    navActiveBorder: 'border-[#7C3AED] bg-[#7C3AED]/20',
    navTopBorder: 'border-t-[#7C3AED]',
    accentText: 'text-[#7C3AED]',
    accentBg: 'bg-[#7C3AED]',
    accentBgDot: 'bg-[#7C3AED]',
    accentBorder: 'border-[#7C3AED]',
    accentBorderLeft: 'border-l-[#7C3AED]',
    accentSoftBg: 'bg-[#F5F3FF]',
    accentSoftBorder: 'border-[#DDD6FE]',
    accentDecor: 'decoration-[#7C3AED]',
    accentHoverText: 'hover:text-[#7C3AED]',
    accentCheckbox: 'accent-[#7C3AED]',
    primaryButton: 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white',
    topStripBorder: 'border-t-4 border-t-[#7C3AED]',
    heroCardGradient: 'from-[#4C1D95] via-[#6D28D9] to-[#8B5CF6]',
    pageBg: 'bg-[#F5F3FA]',
    footerBg: 'bg-[#EDE9F7]',
    ctaGradient: 'bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white',
    badgeSoft: 'bg-[#EDE9FE] text-[#6D28D9]',
  },
  amber: {
    dot: 'bg-[#D97706]',
    navText: 'text-[#FBBF24]',
    navActiveBorder: 'border-[#D97706] bg-[#D97706]/20',
    navTopBorder: 'border-t-[#D97706]',
    accentText: 'text-[#B45309]',
    accentBg: 'bg-[#D97706]',
    accentBgDot: 'bg-[#D97706]',
    accentBorder: 'border-[#D97706]',
    accentBorderLeft: 'border-l-[#D97706]',
    accentSoftBg: 'bg-[#FFFBEB]',
    accentSoftBorder: 'border-[#FDE68A]',
    accentDecor: 'decoration-[#B45309]',
    accentHoverText: 'hover:text-[#B45309]',
    accentCheckbox: 'accent-[#D97706]',
    primaryButton: 'bg-[#D97706] hover:bg-[#B45309] text-white',
    topStripBorder: 'border-t-4 border-t-[#D97706]',
    heroCardGradient: 'from-[#92400E] via-[#D97706] to-[#F59E0B]',
    pageBg: 'bg-[#FCF8F0]',
    footerBg: 'bg-[#F6EEDF]',
    ctaGradient: 'bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white',
    badgeSoft: 'bg-[#FEF3C7] text-[#B45309]',
  },
  teal: {
    dot: 'bg-[#0D9488]',
    navText: 'text-[#2DD4BF]',
    navActiveBorder: 'border-[#0D9488] bg-[#0D9488]/20',
    navTopBorder: 'border-t-[#0D9488]',
    accentText: 'text-[#0F766E]',
    accentBg: 'bg-[#0D9488]',
    accentBgDot: 'bg-[#0D9488]',
    accentBorder: 'border-[#0D9488]',
    accentBorderLeft: 'border-l-[#0D9488]',
    accentSoftBg: 'bg-[#F0FDFA]',
    accentSoftBorder: 'border-[#99F6E4]',
    accentDecor: 'decoration-[#0F766E]',
    accentHoverText: 'hover:text-[#0F766E]',
    accentCheckbox: 'accent-[#0D9488]',
    primaryButton: 'bg-[#0D9488] hover:bg-[#0F766E] text-white',
    topStripBorder: 'border-t-4 border-t-[#0D9488]',
    heroCardGradient: 'from-[#115E59] via-[#0D9488] to-[#14B8A6]',
    pageBg: 'bg-[#F2FAF9]',
    footerBg: 'bg-[#E6F4F2]',
    ctaGradient: 'bg-gradient-to-r from-[#0D9488] to-[#0F766E] hover:from-[#0F766E] hover:to-[#115E59] text-white',
    badgeSoft: 'bg-[#CCFBF1] text-[#0F766E]',
  },
  indigo: {
    dot: 'bg-[#4F46E5]',
    navText: 'text-[#818CF8]',
    navActiveBorder: 'border-[#4F46E5] bg-[#4F46E5]/20',
    navTopBorder: 'border-t-[#4F46E5]',
    accentText: 'text-[#4338CA]',
    accentBg: 'bg-[#4F46E5]',
    accentBgDot: 'bg-[#4F46E5]',
    accentBorder: 'border-[#4F46E5]',
    accentBorderLeft: 'border-l-[#4F46E5]',
    accentSoftBg: 'bg-[#EEF2FF]',
    accentSoftBorder: 'border-[#C7D2FE]',
    accentDecor: 'decoration-[#4338CA]',
    accentHoverText: 'hover:text-[#4338CA]',
    accentCheckbox: 'accent-[#4F46E5]',
    primaryButton: 'bg-[#4F46E5] hover:bg-[#3730A3] text-white',
    topStripBorder: 'border-t-4 border-t-[#4F46E5]',
    heroCardGradient: 'from-[#312E81] via-[#4338CA] to-[#6366F1]',
    pageBg: 'bg-[#F3F4FB]',
    footerBg: 'bg-[#E9ECF8]',
    ctaGradient: 'bg-gradient-to-r from-[#4F46E5] to-[#3730A3] hover:from-[#4338CA] hover:to-[#312E81] text-white',
    badgeSoft: 'bg-[#E0E7FF] text-[#4338CA]',
  },
  rose: {
    dot: 'bg-[#E11D48]',
    navText: 'text-[#FB7185]',
    navActiveBorder: 'border-[#E11D48] bg-[#E11D48]/20',
    navTopBorder: 'border-t-[#E11D48]',
    accentText: 'text-[#BE123C]',
    accentBg: 'bg-[#E11D48]',
    accentBgDot: 'bg-[#E11D48]',
    accentBorder: 'border-[#E11D48]',
    accentBorderLeft: 'border-l-[#E11D48]',
    accentSoftBg: 'bg-[#FFF1F2]',
    accentSoftBorder: 'border-[#FECDD3]',
    accentDecor: 'decoration-[#BE123C]',
    accentHoverText: 'hover:text-[#BE123C]',
    accentCheckbox: 'accent-[#E11D48]',
    primaryButton: 'bg-[#E11D48] hover:bg-[#BE123C] text-white',
    topStripBorder: 'border-t-4 border-t-[#E11D48]',
    heroCardGradient: 'from-[#881337] via-[#BE123C] to-[#F43F5E]',
    pageBg: 'bg-[#FDF4F6]',
    footerBg: 'bg-[#F8EAEF]',
    ctaGradient: 'bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#BE123C] hover:to-[#9F1239] text-white',
    badgeSoft: 'bg-[#FFE4E6] text-[#BE123C]',
  },
  slate: {
    dot: 'bg-[#475569]',
    navText: 'text-[#94A3B8]',
    navActiveBorder: 'border-[#475569] bg-[#475569]/20',
    navTopBorder: 'border-t-[#475569]',
    accentText: 'text-[#334155]',
    accentBg: 'bg-[#334155]',
    accentBgDot: 'bg-[#334155]',
    accentBorder: 'border-[#334155]',
    accentBorderLeft: 'border-l-[#334155]',
    accentSoftBg: 'bg-[#F8FAFC]',
    accentSoftBorder: 'border-[#CBD5E1]',
    accentDecor: 'decoration-[#334155]',
    accentHoverText: 'hover:text-[#334155]',
    accentCheckbox: 'accent-[#334155]',
    primaryButton: 'bg-[#1E293B] hover:bg-[#0F172A] text-white',
    topStripBorder: 'border-t-4 border-t-[#334155]',
    heroCardGradient: 'from-[#0F172A] via-[#1E293B] to-[#334155]',
    pageBg: 'bg-[#F4F6F9]',
    footerBg: 'bg-[#E9EDF3]',
    ctaGradient: 'bg-gradient-to-r from-[#334155] to-[#0F172A] hover:from-[#1E293B] hover:to-[#000000] text-white',
    badgeSoft: 'bg-[#E2E8F0] text-[#334155]',
  },
};

export function resolvePartnerTheme(theme?: string): PartnerThemePreset {
  if (theme && theme in PARTNER_THEME_PRESETS) {
    return theme as PartnerThemePreset;
  }
  return 'red';
}

export function isValidPartnerSlug(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (/^[a-zA-Z0-9_-]{2,48}$/.test(trimmed)) {
    return trimmed;
  }
  return null;
}

export function isPartnerKey(value: string | null | undefined): value is BuiltinPartnerKey {
  return value === 'siamchai' || value === 'rabbit' || value === 't1c';
}

export interface PartnerMenuLocale {
  label: string;
  sublabel: string;
}

export interface PartnerMenuItem {
  key: PartnerKey;
  theme: PartnerThemePreset;
  label: string;
  sublabel: string;
  href: string;
  applyUrl?: string;
}

export interface PartnerLocaleContent {
  backHomeCta: string;
  kicker: string;
  headlinePrimary: string;
  headlineSecondary?: string;
  offerTitle: string;
  offerDurationOrPrice: string;
  offerNote: string;
  ctaRegister: string;
  ctaDetails: string;
  highlights: Array<{ title: string; detail: string }>;
  brandName: string;
  introTitle: string;
  introParagraphs: string[];
  coverageHeading: string;
  coverageSubheading: string;
  coverageItems: Array<{ title: string; benefit: string; description?: string }>;
  coverageFootnote: string;
  qualificationsHeading: string;
  qualifications: string[];
  termsHeading: string;
  claimBridgeCta: string;
  terms: string[];
  claimBridgeText: string;
  coBrandBadge: string;
  registerForm: {
    heading: string;
    subheading: string;
    successTitle: string;
    ticketLabel: string;
    successBody: string;
    resetCta: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    refLabel: string;
    refPlaceholder: string;
    consentLabel: string;
    validationError: string;
    submitCta: string;
  };
  footerOperator: string;
  footerInsurer: string;
}

export interface PartnerClaimLoginInfo {
  title: string;
  subtitle: string;
  ctaLabel: string;
  otpNote: string;
  requiredFields: string[];
}

export interface PartnerAsset {
  key: PartnerKey;
  theme: PartnerThemePreset;
  applyUrl?: string;
  claimLoginUrl?: string;
  openInNewTab?: boolean;
  logoUrl?: string;
  heroImageUrl?: string;
  heroBadge?: { th: string; en?: string };
  heroTagline?: { th: string; en?: string };
  menu: {
    th: PartnerMenuLocale;
    en?: PartnerMenuLocale;
  };
  claimLoginInfo?: Record<Language, PartnerClaimLoginInfo>;
  locale: Record<Language, PartnerLocaleContent>;
}

export interface PartnerRegistry {
  order: PartnerKey[];
  items: Record<PartnerKey, PartnerAsset>;
}

export const PARTNER_LANDINGS: Record<BuiltinPartnerKey, PartnerAsset> = {
  siamchai: {
    key: 'siamchai',
    theme: 'blue',
    applyUrl: '/partners/siamchai.html',
    claimLoginUrl: '/partners/siamchai.html#login',
    openInNewTab: true,
    menu: {
      th: {
        label: 'สยามชัย (Siamchai)',
        sublabel: 'ลูกค้าผ่อนสยามชัย เพิ่มคุ้มครองในค่างวด +฿5/เดือน',
      },
      en: {
        label: 'Siamchai Service',
        sublabel: 'Add protection directly in monthly installments from +฿5/mo',
      },
    },
    claimLoginInfo: {
      th: {
        title: 'เข้าสู่ระบบลูกค้าสยามชัย เพื่อดูกรมธรรม์และแจ้งเคลม',
        subtitle: 'เชื่อมข้อมูลสัญญาผ่อนชำระและกรมธรรม์ประกันภัยของสยามชัยครบทุกฉบับ',
        ctaLabel: 'เข้าสู่ระบบสยามชัย (Siamchai)',
        otpNote: 'บังคับกด "ขอ OTP" และยืนยันรหัส OTP 6 หลักทาง SMS ทุกครั้งก่อนเข้าสู่ระบบ',
        requiredFields: [
          'เบอร์มือถือที่ลงทะเบียน (10 หลัก)',
          'เลขบัตรประชาชน 13 หลัก หรือ เลขที่สัญญาผ่อนชำระ (เช่น SC-6911-004521)',
          'รหัส OTP 6 หลักที่ส่งทาง SMS (ขอรหัสใหม่ทุกครั้ง)',
        ],
      },
      en: {
        title: 'Sign in to Siamchai Portal for Policies & Claims',
        subtitle: 'Access your Siamchai installment policies and file online claims.',
        ctaLabel: 'Sign In to Siamchai Portal',
        otpNote: 'A fresh 6-digit SMS OTP request and verification is required on every login.',
        requiredFields: [
          'Registered Mobile Number (10 digits)',
          '13-digit National ID or Siamchai Contract No.',
          '6-digit SMS OTP code (requested on every sign-in)',
        ],
      },
    },
    locale: {
      th: {
        backHomeCta: 'กลับหน้าหลัก Jaymart Insurance',
        kicker: 'SIAMCHAI SERVICE × JAYMART INSURANCE',
        headlinePrimary: 'ผ่อนกับสยามชัย อุ่นใจยิ่งขึ้น',
        headlineSecondary: 'เพิ่มความคุ้มครองได้ในค่างวด',
        offerTitle: 'เบี้ยคุ้มครองเสริมรายเดือน ไม่ต้องใช้บัตรเครดิต',
        offerDurationOrPrice: 'เริ่มต้น +฿5 / เดือน',
        offerNote:
          'เลือกคุ้มครองอุบัติเหตุจักรยานไฟฟ้า คุ้มครองเครื่องใช้ไฟฟ้าจากอัคคีภัย/ภัยธรรมชาติ หรือภัยไซเบอร์ ชำระพร้อมค่างวดสยามชัยหรือ QR PromptPay',
        ctaRegister: 'ลงทะเบียนรับสิทธิ์เลย',
        ctaDetails: 'ดูความคุ้มครองทั้งหมด',
        highlights: [
          {
            title: 'รวมในค่างวด ไม่ต้องจ่ายก้อน',
            detail: 'บวกเพิ่มในบิลค่างวดสยามชัยรายเดือน หรือสแกนจ่าย QR PromptPay ได้สะดวก',
          },
          {
            title: 'คุ้มครองตรงจุดสินค้าที่ผ่อน',
            detail: 'ครอบคลุมทั้งจักรยานไฟฟ้า (ที่ไม่มี พ.ร.บ.) และเครื่องใช้ไฟฟ้าตลอดสัญญาเช่าซื้อ',
          },
          {
            title: 'ต่อติดบริการเคลม & LINE OA',
            detail: 'ส่งเคลมออนไลน์ผ่าน Jaymart Insurance พร้อมสะสมสิทธิ์เพิ่มเติมสำหรับสมาชิก',
          },
        ],
        brandName: 'SIAMCHAI × JAYMART',
        introTitle: 'ทำไมลูกค้าผ่อนสยามชัยถึงควรเพิ่มเกราะคุ้มครอง',
        introParagraphs: [
          'สินค้าที่ผ่อนชำระกับสยามชัย เซอร์วิส เช่น จักรยานไฟฟ้าหรือเครื่องใช้ไฟฟ้าภายในบ้าน ล้วนเป็นทรัพย์สินสำคัญในชีวิตประจำวัน หากเกิดเหตุไม่คาดฝันระหว่างสัญญาเช่าซื้อ เช่น อุบัติเหตุบนท้องถนน ไฟไหม้ แบตเตอรี่ลุกไหม้ขณะชาร์จ หรือน้ำท่วม ลูกค้ายังคงมีภาระค่างวดคงเหลือตามสัญญา',
          'เจมาร์ท ประกันภัย จึงร่วมมือกับสยามชัย ออกแบบแผนคุ้มครองเฉพาะลูกค้าสยามชัย เพิ่มเบี้ยเพียงเล็กน้อยต่อเดือนเพื่อช่วยแบ่งเบาภาระค่ารักษาพยาบาลและความเสียหายของทรัพย์สินทันทีที่เกิดเหตุ',
        ],
        coverageHeading: 'ความคุ้มครองสำหรับลูกค้าสยามชัย',
        coverageSubheading: 'เลือกแผนคุ้มครองเสริมที่ตรงกับสินค้าและไลฟ์สไตล์ของคุณได้ถึง 4 รูปแบบ',
        coverageItems: [
          {
            title: 'อุบัติเหตุขณะขับขี่หรือซ้อนท้ายจักรยานไฟฟ้า (PA)',
            benefit: 'รักษาสูงสุด 10,000.-/ครั้ง',
            description:
              'จักรยานไฟฟ้าส่วนใหญ่ไม่มี พ.ร.บ. คุ้มครอง ครอบคลุมทั้งค่ารักษาพยาบาลและกรณีเสียชีวิตจากอุบัติเหตุ',
          },
          {
            title: 'คุ้มครองเครื่องใช้ไฟฟ้า — อัคคีภัย ฟ้าผ่า ระเบิด',
            benefit: 'ทุนตามราคาสินค้าในสัญญา',
            description:
              'ครอบคลุมเหตุไฟไหม้ รวมถึงเหตุแบตเตอรี่ลุกไหม้หรือระเบิดขณะชาร์จ ณ ที่อยู่ตามสัญญาเช่าซื้อ',
          },
          {
            title: 'คุ้มครองภัยธรรมชาติ — น้ำท่วม ลมพายุ ลูกเห็บ',
            benefit: 'เพิ่มเพียง +฿10/เดือน',
            description:
              'เพิ่มเกราะป้องกันครบทั้งไฟไหม้และภัยพิบัติธรรมชาติสำหรับเครื่องใช้ไฟฟ้าที่ผ่อนกับสยามชัย',
          },
          {
            title: 'Cyber Shield คุ้มครองภัยออนไลน์และการโจรกรรมเงิน',
            benefit: 'เริ่มต้น +฿5/เดือน',
            description:
              'ครอบคลุมการถูกหลอกโอนเงิน ฟิชชิ่ง และการโจรกรรมข้อมูลส่วนบุคคล สมัครได้แม้ไม่มีสัญญาเช่าซื้อ',
          },
        ],
        coverageFootnote:
          '* ค่าเสียหายส่วนแรกสำหรับแผนเครื่องใช้ไฟฟ้า 500 บาทต่อครั้ง ยกเว้นความเสียหายจากการดัดแปลงสภาพหรือขับขี่ขณะมึนเมา',
        qualificationsHeading: 'คุณสมบัติผู้ขอเอาประกันภัย',
        qualifications: [
          'เป็นลูกค้าที่ทำสัญญาเช่าซื้อกับ สยามชัย เซอร์วิส หรือลงทะเบียนผ่านช่องทางสยามชัย × Jaymart (อายุ 20 – 65 ปี)',
          'มีสัญชาติไทย และมีหมายเลขโทรศัพท์ที่ติดต่อได้เพื่อรับ SMS ยืนยันกรมธรรม์อิเล็กทรอนิกส์',
          'สำหรับแผนคุ้มครองเครื่องใช้ไฟฟ้าและจักรยานไฟฟ้า 1 สัญญา/1 คัน สามารถรับสิทธิ์คุ้มครองได้ 1 กรมธรรม์',
        ],
        termsHeading: 'ข้อกำหนดและเงื่อนไขการรับสิทธิ์',
        claimBridgeCta: 'ดูขั้นตอนการแจ้งเคลม Jaymart Insurance',
        terms: [
          'คุ้มครองระยะเวลา 1 ปี หรือตลอดอายุสัญญาเช่าซื้อตามแผนที่เลือก นับจากวันที่ชำระเบี้ยสำเร็จ',
          'กรณีชำระเบี้ยรายเดือน ความคุ้มครองจะต่ออายุอัตโนมัติในรอบบิลถัดไปเมื่อมีการชำระสำเร็จ',
          'อาณาเขตความคุ้มครองสำหรับการประกันอุบัติเหตุและเครื่องใช้ไฟฟ้าครอบคลุมภายในประเทศไทย',
          'ผู้เอาประกันภัยต้องแจ้งข้อมูลหมายเลขสัญญาและเบอร์โทรศัพท์ให้ตรงกับข้อมูลลูกค้าสยามชัย',
          'ไม่คุ้มครองการใช้รถจักรยานไฟฟ้าเพื่อการแข่งขัน หรือการดัดแปลงกำลังมอเตอร์เกินกว่ามาตรฐานโรงงาน',
          'แผน Cyber Shield สามารถสมัครเสริมได้ทั้งลูกค้าปัจจุบันและบุคคลทั่วไปโดยไม่ต้องมีสัญญาเช่าซื้อ',
          'รับประกันภัยโดย บริษัท เจมาร์ท ประกันภัย จำกัด (มหาชน) เงื่อนไขเป็นไปตามที่กรมธรรม์กำหนด',
          'บริษัทจะจัดส่งเอกสารยืนยันความคุ้มครอง (e-Policy) ผ่านทาง SMS ตามเบอร์ที่ลงทะเบียนไว้',
          'กรณีแจ้งเคลม กรุณาแนบสำเนาสัญญาเช่าซื้อหรือเลขที่กรมธรรม์พร้อมหลักฐานภาพถ่ายเหตุการณ์',
        ],
        claimBridgeText:
          'เกิดเหตุฉุกเฉินหรือต้องการแจ้งเคลม สามารถติดต่อศูนย์รับแจ้งอุบัติเหตุ 24 ชม. โทร 02-099-0555 กด 1 หรือแจ้งเคลมออนไลน์ได้ทันที',
        coBrandBadge: 'SIAMCHAI SERVICE × JAYMART INSURANCE',
        registerForm: {
          heading: 'ลงทะเบียนรับสิทธิ์คุ้มครองลูกค้าสยามชัย',
          subheading: 'กรอกข้อมูลเบื้องต้นและเลขที่สัญญาเช่าซื้อ เพื่อออกเลขรับเรื่องคุ้มครองทันที',
          successTitle: 'ลงทะเบียนสิทธิ์สยามชัย × Jaymart สำเร็จ',
          ticketLabel: 'รหัสรับเรื่องสิทธิพิเศษ',
          successBody:
            'เจ้าหน้าที่และระบบพันธมิตรจะดำเนินการตรวจสอบสัญญาและส่งลิงก์ยืนยันความคุ้มครองผ่านทาง SMS ของท่านโดยเร็ว',
          resetCta: 'ลงทะเบียนรายการอื่น',
          fullNameLabel: 'ชื่อ - นามสกุลผู้เช่าซื้อ',
          fullNamePlaceholder: 'เช่น สมชาย ใจดี',
          phoneLabel: 'เบอร์โทรศัพท์มือถือ',
          phonePlaceholder: '08X-XXX-XXXX',
          refLabel: 'เลขที่สัญญาเช่าซื้อสยามชัย / สาขา',
          refPlaceholder: 'เช่น SC-69001234',
          consentLabel:
            'ข้าพเจ้ายินยอมให้ สยามชัย เซอร์วิส และ บริษัท เจมาร์ท ประกันภัย จำกัด (มหาชน) ตรวจสอบข้อมูลและติดต่อกลับเพื่อนำเสนอความคุ้มครอง',
          validationError: 'กรุณากรอกชื่อ เบอร์โทรศัพท์ เลขที่สัญญา และกดยินยอมให้ครบถ้วน',
          submitCta: 'ยืนยันลงทะเบียนรับสิทธิ์',
        },
        footerOperator: 'ดำเนินการร่วมกับ บริษัท สยามชัย เซอร์วิส จำกัด',
        footerInsurer: 'รับประกันภัยโดย บริษัท เจมาร์ท ประกันภัย จำกัด (มหาชน)',
      },
      en: {
        backHomeCta: 'Back to Jaymart Insurance',
        kicker: 'SIAMCHAI SERVICE × JAYMART INSURANCE',
        headlinePrimary: 'Shop & Finance with Siamchai',
        headlineSecondary: 'Add Protection Directly in Installments',
        offerTitle: 'Monthly Micro-Protection Add-On · No Credit Card Required',
        offerDurationOrPrice: 'From +฿5 / month',
        offerNote:
          'Covers E-Bike Personal Accident, Fire & Natural Disaster protection for financed appliances, and Online Cyber Shield.',
        ctaRegister: 'Register Privilege Now',
        ctaDetails: 'View Full Coverage',
        highlights: [
          {
            title: 'Bundled in Monthly Bills',
            detail: 'Pay conveniently along with your Siamchai monthly installment or QR PromptPay.',
          },
          {
            title: 'Tailored for Financed Assets',
            detail: 'Protects E-Bikes without compulsory motor cover and financed home appliances.',
          },
          {
            title: 'Instant Digital Claims',
            detail: '24/7 accident hotline and online claim filing with Jaymart Insurance.',
          },
        ],
        brandName: 'SIAMCHAI × JAYMART',
        introTitle: 'Extra Peace of Mind Throughout Your Installment Contract',
        introParagraphs: [
          'Financed e-bikes and household appliances are essential daily assets. Unexpected accidents, electrical fires, battery surges, or flood damage during an active installment contract can leave unexpected repair and repayment burdens.',
          'Jaymart Insurance partners with Siamchai Service to provide affordable monthly protection seamlessly integrated with your purchase.',
        ],
        coverageHeading: 'Siamchai Partner Coverage Plans',
        coverageSubheading: 'Four focused protection pillars tailored for Siamchai customers',
        coverageItems: [
          {
            title: 'E-Bike Rider & Passenger Personal Accident',
            benefit: 'Up to ฿10,000 / incident',
            description: 'Covers medical expenses and fatal accident protection for e-bikes.',
          },
          {
            title: 'Appliance Fire, Lightning & Battery Surge',
            benefit: 'Sum Insured = Contract Value',
            description: 'Covers fire, lightning, and battery charging incidents at registered address.',
          },
          {
            title: 'Natural Disaster Add-On (Flood, Storm, Hail)',
            benefit: '+฿10 / month',
            description: 'Extends fire coverage to seasonal flood and storm perils across Thailand.',
          },
          {
            title: 'Cyber & Online Fraud Shield',
            benefit: 'From +฿5 / month',
            description: 'Protects against phishing scams and unauthorized digital transfers.',
          },
        ],
        coverageFootnote:
          '* ฿500 deductible applies per appliance property claim; exclusions apply per policy wording.',
        qualificationsHeading: 'Eligibility Requirements',
        qualifications: [
          'Siamchai Service installment customers or registered retail members aged 20–65 years.',
          'Thai nationals with an active mobile number for SMS e-Policy delivery.',
          'One property/e-bike policy per active financed asset unit.',
        ],
        termsHeading: 'Terms & Conditions',
        claimBridgeCta: 'View Jaymart Claim Process',
        terms: [
          'Coverage begins upon successful installment confirmation or premium payment.',
          'Monthly add-on renews automatically alongside regular payment cycles.',
          'Territorial scope covers Thailand.',
          'Contract reference and mobile number must match Siamchai records.',
          'Racing, commercial stunt use, or unauthorized motor modifications are excluded.',
          'Cyber Shield is available to both installment and cash customers.',
          'Underwritten by Jaymart Insurance Public Company Limited.',
          'Digital policy certificates are delivered via SMS.',
          'Claims require contract reference number and incident evidence.',
        ],
        claimBridgeText:
          'Need emergency assistance or claim support? Contact our 24/7 hotline at 02-099-0555 ext. 1.',
        coBrandBadge: 'SIAMCHAI SERVICE × JAYMART INSURANCE',
        registerForm: {
          heading: 'Register Siamchai × Jaymart Privilege',
          subheading: 'Submit your contact details and installment contract number for verification.',
          successTitle: 'Registration Recorded Successfully',
          ticketLabel: 'Privilege Ticket ID',
          successBody:
            'Our partner desk will verify your contract reference and send your activation link via SMS.',
          resetCta: 'Submit Another Request',
          fullNameLabel: 'Full Name',
          fullNamePlaceholder: 'e.g. Somchai Jaidee',
          phoneLabel: 'Mobile Number',
          phonePlaceholder: '08X-XXX-XXXX',
          refLabel: 'Siamchai Contract / Branch Ref',
          refPlaceholder: 'e.g. SC-69001234',
          consentLabel:
            'I consent to Siamchai Service and Jaymart Insurance PCL verifying my details for policy enrollment.',
          validationError: 'Please enter your name, phone number, contract reference, and check consent.',
          submitCta: 'Confirm Registration',
        },
        footerOperator: 'In partnership with Siamchai Service Co., Ltd.',
        footerInsurer: 'Underwritten by Jaymart Insurance PCL',
      },
    },
  },
  rabbit: {
    key: 'rabbit',
    theme: 'orange',
    applyUrl: '/partners/rabbit.html',
    claimLoginUrl: '/partners/rabbit.html#login',
    openInNewTab: true,
    menu: {
      th: {
        label: 'แรบบิท (Rabbit Rewards)',
        sublabel: 'ประกันคนทำงาน จ่ายด้วย 180 พอยต์ Rabbit หรือ ฿29/สัปดาห์',
      },
      en: {
        label: 'Rabbit Rewards',
        sublabel: 'Worker protection payable with 180 Rabbit Points or ฿29/wk',
      },
    },
    claimLoginInfo: {
      th: {
        title: 'เข้าสู่ระบบ Rabbit Rewards เพื่อตรวจสอบกรมธรรม์และแจ้งเคลม',
        subtitle: 'ตรวจสอบสถานะความคุ้มครองประกันคนทำงานและส่งคำร้องแจ้งเคลมออนไลน์',
        ctaLabel: 'เข้าสู่ระบบ Rabbit Rewards',
        otpNote: 'บังคับกด "ขอรหัส OTP" และยืนยันรหัส OTP 6 หลักทาง SMS ทุกครั้งก่อนเข้าสู่ระบบ',
        requiredFields: [
          'เบอร์มือถือที่ผูกกับ Rabbit Rewards / ใช้สมัครประกัน (10 หลัก)',
          'เลขบัตรประชาชน 13 หลัก (ใช้ค้นหาและยืนยันสิทธิ์กรมธรรม์)',
          'รหัส OTP 6 หลักที่ส่งทาง SMS (ขอรหัสใหม่ทุกครั้ง)',
        ],
      },
      en: {
        title: 'Sign in to Rabbit Rewards Portal for Policies & Claims',
        subtitle: 'Check your active worker protection policy and submit online claims.',
        ctaLabel: 'Sign In to Rabbit Rewards',
        otpNote: 'A fresh 6-digit SMS OTP request and verification is required on every login.',
        requiredFields: [
          'Rabbit Rewards Linked Mobile Number (10 digits)',
          '13-digit Thai National ID Card Number',
          '6-digit SMS OTP code (requested on every sign-in)',
        ],
      },
    },
    locale: {
      th: {
        backHomeCta: 'กลับหน้าหลัก Jaymart Insurance',
        kicker: 'RABBIT REWARDS × JAYMART INSURANCE',
        headlinePrimary: 'ทำงานทุกวันก็อุ่นใจ',
        headlineSecondary: 'มอบสิทธิ์! ประกันคนทำงาน จ่ายด้วยพอยต์ Rabbit',
        offerTitle: 'ตัดพอยต์ Rabbit Rewards อัตโนมัติ หรือจ่าย ฿29/สัปดาห์',
        offerDurationOrPrice: '180 พอยต์ / สัปดาห์',
        offerNote:
          'ตอบแบบสอบถามและลงทะเบียนครั้งเดียว คุ้มครองอุบัติเหตุทั่วไป พร้อมค่าชดเชยรายได้นอน รพ. จาก 5 โรคออฟฟิศซินโดรม',
        ctaRegister: 'สมัครรับสิทธิ์เลย',
        ctaDetails: 'ดูตารางความคุ้มครอง',
        highlights: [
          {
            title: 'แลกด้วย 180 พอยต์ Rabbit',
            detail: 'ใช้พอยต์ Rabbit Rewards ที่มีอยู่ชำระเบี้ยรายสัปดาห์ หรือจ่าย ฿29 ผ่าน PromptPay ได้ทันที',
          },
          {
            title: 'คุ้มครอง 5 โรคออฟฟิศซินโดรม',
            detail: 'นอน รพ. ชดเชยรายได้ 100 บาท/วัน และคุ้มครอง OPD / กายภาพบำบัด 50 บาท/ครั้ง',
          },
          {
            title: 'ต่ออายุอัตโนมัติรายสัปดาห์',
            detail: 'ยืนยันความคุ้มครองผ่าน SMS และแจ้งเตือนรอบชำระผ่าน LINE OA Rabbit Card',
          },
        ],
        brandName: 'RABBIT REWARDS × JAYMART',
        introTitle: 'สิทธิพิเศษเฉพาะเพื่อน Rabbit Card ที่ตอบแบบสอบถาม',
        introParagraphs: [
          'Rabbit Rewards × เจมาร์ท ประกันภัย มอบสิทธิ์ประกันคนทำงานให้เพื่อน Rabbit Card เพียงตอบแบบสอบถามสุขภาพและกรอกข้อมูลส่วนตัว ความคุ้มครองเริ่มนับจากวันที่ระบุใน SMS ยืนยันความคุ้มครอง และต่ออายุอัตโนมัติทุกสัปดาห์ด้วยพอยต์ 180 พอยต์ หรือ 29 บาท',
          'ตอบโจทย์วัยทำงานที่ต้องเดินทางด้วยรถไฟฟ้าทุกวันและนั่งทำงานหน้าจอเป็นเวลานาน ครอบคลุมทั้งอุบัติเหตุทั่วไป การถูกทำร้ายร่างกาย และค่าชดเชยจากโรคออฟฟิศซินโดรม',
        ],
        coverageHeading: 'ความคุ้มครองประกันคนทำงาน',
        coverageSubheading: 'อุบัติเหตุและค่าชดเชยรายได้จากโรคออฟฟิศซินโดรม ความคุ้มครองต่อ 1 กรมธรรม์ (ซื้อซ้อนได้)',
        coverageItems: [
          {
            title: 'อุบัติเหตุทั่วไป เสียชีวิต สูญเสียอวัยวะ หรือทุพพลภาพถาวร',
            benefit: 'คุ้มครอง 5,000 บาท',
            description: 'คุ้มครองอุบัติเหตุตลอด 24 ชั่วโมงทั่วโลก ทั้งการเดินทางและการใช้ชีวิตประจำวัน',
          },
          {
            title: 'ถูกฆาตกรรม หรือถูกทำร้ายร่างกาย',
            benefit: 'คุ้มครอง 5,000 บาท',
            description: 'คุ้มครองเพิ่มเติมกรณีเกิดเหตุไม่คาดฝันจากการถูกทำร้ายร่างกายโดยมิได้เจตนา',
          },
          {
            title: 'นอนโรงพยาบาล 5 โรคออฟฟิศซินโดรม (ชดเชยรายได้ IPD)',
            benefit: 'ชดเชย 100 บาท / วัน',
            description:
              'ครอบคลุมอาการข้อไหล่ติด กระดูกสันหลังเสื่อม หมอนรองกระดูกทับเส้นประสาท นิ้วล็อค และเอ็นข้อมืออักเสบ',
          },
          {
            title: 'ค่ารักษาผู้ป่วยนอก (OPD) / กายภาพบำบัด',
            benefit: '50 บาท / ครั้ง',
            description: 'ช่วยแบ่งเบาค่ากายภาพบำบัดและตรวจรักษาอาการออฟฟิศซินโดรมอย่างต่อเนื่อง',
          },
        ],
        coverageFootnote:
          '* โรคเฉพาะเริ่มคุ้มครองหลัง 30 วันนับจากวันเริ่มต้นกรมธรรม์ และไม่คุ้มครองโรคที่เป็นมาก่อนทำประกัน',
        qualificationsHeading: 'คุณสมบัติผู้ขอเอาประกันภัย',
        qualifications: [
          'มีอายุ 20 – 60 ปีบริบูรณ์ ณ วันที่ลงทะเบียน',
          'มีสัญชาติไทย และมีบัญชี Rabbit Rewards หรือชำระเงินผ่านช่องทางออนไลน์ที่กำหนด',
          'มีสภาพร่างกายแข็งแรงสมบูรณ์ ไม่พิการ และไม่เป็นโรคร้ายแรง ณ วันที่สมัคร',
        ],
        termsHeading: 'เงื่อนไขความคุ้มครอง',
        claimBridgeCta: 'ดูขั้นตอนการเคลม Jaymart Insurance',
        terms: [
          'ประกันคนทำงาน จำกัดสูงสุด 13 กรมธรรม์ต่อ 1 หมายเลขบัตรประชาชนเท่านั้น',
          'ระยะเวลาคุ้มครอง 7 วันต่อรอบ โดยเริ่มนับจากวันที่ระบุใน SMS ยืนยันความคุ้มครอง และต่ออายุอัตโนมัติทุกรอบชำระ',
          'รูปแบบกรมธรรม์: กรมธรรม์ประกันภัยกลุ่ม โดยรายชื่อผู้ได้รับสิทธิ์จะถูกเพิ่มเข้าในเอกสารแนบท้ายกรมธรรม์',
          'หากพอยต์ Rabbit Rewards ไม่เพียงพอ ระบบจะเปิดให้ชำระเป็นเงินสด 29 บาท/สัปดาห์ ผ่าน PromptPay หรือบัตรเครดิต/เดบิต',
          'ขอสงวนสิทธิ์ให้เฉพาะผู้ตอบแบบสอบถามสุขภาพครบถ้วนและกรอกข้อมูลถูกต้องตามบัตรประชาชน',
          'บริษัทประกันภัยจะนำส่งรายละเอียดเพื่อยืนยันความคุ้มครอง ผ่านทาง SMS ตามหมายเลขโทรศัพท์ที่ได้แจ้งไว้เท่านั้น',
          'รับประกันภัยโดย บริษัท เจมาร์ท ประกันภัย จำกัด (มหาชน) ผู้ขอเอาประกันภัยควรศึกษาเงื่อนไขความคุ้มครองก่อนตัดสินใจ',
          'Rabbit Rewards เป็นเพียงผู้ดำเนินการมอบสิทธิพิเศษเท่านั้น ผลิตภัณฑ์ประกันภัยรับประกันภายใต้เงื่อนไขของบริษัทประกันภัย',
          'สามารถแจ้งเคลมและส่งเอกสารผ่านศูนย์บริการลูกค้าเจมาร์ท ประกันภัย โทร 02-099-0555 ได้ตลอด 24 ชม.',
        ],
        claimBridgeText:
          'ต้องการปรึกษาเคลมหรือตรวจสอบสถานะกรมธรรม์ Rabbit × Jaymart ติดต่อ 02-099-0555 กด 1 ได้ตลอด 24 ชั่วโมง',
        coBrandBadge: 'RABBIT REWARDS × JAYMART INSURANCE',
        registerForm: {
          heading: 'ลงทะเบียนรับสิทธิ์ประกันคนทำงาน Rabbit Rewards',
          subheading: 'กรอกชื่อ-เบอร์โทร และเลขบัตร Rabbit Card / เบอร์ที่ผูกบัญชี Rabbit เพื่อรับสิทธิ์',
          successTitle: 'ลงทะเบียนรับสิทธิ์ Rabbit × Jaymart สำเร็จ',
          ticketLabel: 'รหัสลงทะเบียนสิทธิพิเศษ',
          successBody:
            'ระบบได้บันทึกรายการรับสิทธิ์ของท่านแล้ว กรุณารอรับ SMS ยืนยันความคุ้มครองและลิงก์แบบสอบถามสุขภาพ',
          resetCta: 'ลงทะเบียนสิทธิ์อื่น',
          fullNameLabel: 'ชื่อ - นามสกุล (ตามบัตรประชาชน)',
          fullNamePlaceholder: 'เช่น สมหญิง ใจดี',
          phoneLabel: 'เบอร์โทรศัพท์ที่ผูก Rabbit Rewards',
          phonePlaceholder: '08X-XXX-XXXX',
          refLabel: 'รหัสสมาชิก Rabbit / เลขบัตร Rabbit Card',
          refPlaceholder: 'เช่น 181100XXXX',
          consentLabel:
            'ข้าพเจ้ายินยอมให้ใช้ข้อมูลจาก Rabbit Rewards และ บริษัท เจมาร์ท ประกันภัย จำกัด (มหาชน) เพื่อพิจารณาและออกกรมธรรม์',
          validationError: 'กรุณากรอกข้อมูลสมาชิก Rabbit และกดยินยอมให้ครบถ้วน',
          submitCta: 'สมัครเลย (180 พอยต์ / ฿29)',
        },
        footerOperator: 'ดำเนินการสิทธิพิเศษโดย Rabbit Rewards',
        footerInsurer: 'รับประกันภัยโดย บริษัท เจมาร์ท ประกันภัย จำกัด (มหาชน)',
      },
      en: {
        backHomeCta: 'Back to Jaymart Insurance',
        kicker: 'RABBIT REWARDS × JAYMART INSURANCE',
        headlinePrimary: 'Work Every Day With Peace of Mind',
        headlineSecondary: 'Worker Protection Payable With Rabbit Points',
        offerTitle: 'Auto-Redeem 180 Rabbit Points or Pay ฿29/Week',
        offerDurationOrPrice: '180 Points / Week',
        offerNote:
          'Quick health questionnaire enrollment covering Personal Accident plus daily hospital cash for 5 Office Syndrome conditions.',
        ctaRegister: 'Enroll With Points',
        ctaDetails: 'View Coverage Table',
        highlights: [
          {
            title: '180 Rabbit Points / Week',
            detail: 'Redeem directly from your Rabbit Rewards balance or pay ฿29/week seamlessly.',
          },
          {
            title: '5 Office Syndrome Conditions',
            detail: 'Daily hospital income benefit (฿100/day) plus OPD / physiotherapy visits.',
          },
          {
            title: '7-Day Auto-Renewal',
            detail: 'Instant SMS e-Policy confirmation and weekly billing notifications via LINE OA.',
          },
        ],
        brandName: 'RABBIT REWARDS × JAYMART',
        introTitle: 'Exclusive Protection for Rabbit Card Members',
        introParagraphs: [
          'Designed for daily commuters and office professionals, this micro-insurance plan combines Personal Accident protection with targeted Office Syndrome hospitalization and physiotherapy coverage.',
          'Enroll using 180 Rabbit Points per week or ฿29 via QR PromptPay / card.',
        ],
        coverageHeading: 'Worker Protection Coverage',
        coverageSubheading: 'Benefits per policy unit (stackable up to 13 policies per ID)',
        coverageItems: [
          {
            title: 'General Accident (PA-1) Death / Dismemberment',
            benefit: '฿5,000 Coverage',
            description: '24/7 worldwide accident protection for work and daily travel.',
          },
          {
            title: 'Murder or Physical Assault',
            benefit: '฿5,000 Coverage',
            description: 'Additional personal safety benefit for unexpected assault incidents.',
          },
          {
            title: 'Hospital Income (5 Office Syndrome Conditions)',
            benefit: '฿100 / Day',
            description: 'Covers frozen shoulder, cervical spondylosis, herniated disc, trigger finger, and wrist tendinitis.',
          },
          {
            title: 'OPD / Physiotherapy Benefit',
            benefit: '฿50 / Visit',
            description: 'Outpatient physiotherapy support for recurring workplace strain.',
          },
        ],
        coverageFootnote:
          '* 30-day waiting period applies to specific Office Syndrome conditions; pre-existing conditions excluded.',
        qualificationsHeading: 'Eligibility Criteria',
        qualifications: [
          'Aged 20–60 years at enrollment.',
          'Thai nationals with valid ID card and active mobile number.',
          'In good health without pre-existing severe chronic conditions.',
        ],
        termsHeading: 'Policy Terms & Conditions',
        claimBridgeCta: 'View Jaymart Claim Process',
        terms: [
          'Maximum 13 policies per Thai National ID card.',
          'Each cycle covers 7 days and renews automatically upon point/cash settlement.',
          'Issued under group insurance policy structure with digital SMS confirmation.',
          'Fallback payment of ฿29/week applies if Rabbit Points are insufficient.',
          'Health declaration answers must be truthful and complete.',
          'Policy confirmation is delivered solely via registered SMS.',
          'Underwritten by Jaymart Insurance Public Company Limited.',
          'Rabbit Rewards acts strictly as privilege program operator.',
          '24/7 claims hotline available at 02-099-0555 ext. 1.',
        ],
        claimBridgeText:
          'Need help submitting a Rabbit × Jaymart claim? Call our 24/7 desk at 02-099-0555 ext. 1.',
        coBrandBadge: 'RABBIT REWARDS × JAYMART INSURANCE',
        registerForm: {
          heading: 'Enroll in Rabbit Worker Protection',
          subheading: 'Enter your contact info and Rabbit Card / Member ID to receive your health check link.',
          successTitle: 'Rabbit × Jaymart Enrollment Submitted',
          ticketLabel: 'Enrollment Reference',
          successBody:
            'Your privilege request is recorded. Please check your SMS for the health confirmation step.',
          resetCta: 'Submit Another Request',
          fullNameLabel: 'Full Name (as on National ID)',
          fullNamePlaceholder: 'e.g. Somying Jaidee',
          phoneLabel: 'Rabbit-Linked Mobile Number',
          phonePlaceholder: '08X-XXX-XXXX',
          refLabel: 'Rabbit Member / Card Number',
          refPlaceholder: 'e.g. 181100XXXX',
          consentLabel:
            'I authorize Rabbit Rewards and Jaymart Insurance PCL to verify my profile for group policy enrollment.',
          validationError: 'Please complete all fields and accept the consent notice.',
          submitCta: 'Enroll Now (180 Pts / ฿29)',
        },
        footerOperator: 'Privilege operated by Rabbit Rewards',
        footerInsurer: 'Underwritten by Jaymart Insurance PCL',
      },
    },
  },
  t1c: {
    key: 't1c',
    theme: 'red',
    applyUrl: '/partners/t1c.html',
    claimLoginUrl: '/partners/t1c.html#login',
    openInNewTab: true,
    menu: {
      th: {
        label: 'The 1 × Power Buy (T1C)',
        sublabel: 'คุ้มครองมือถือ 1 ปี จอแตก-โดนน้ำ + รับคะแนน The 1 ×10',
      },
      en: {
        label: 'The 1 × Power Buy (T1C)',
        sublabel: '1-Year Mobile Shield (Screen & Liquid) + 10x The 1 Points',
      },
    },
    claimLoginInfo: {
      th: {
        title: 'เข้าสู่ระบบ The 1 × Power Buy (T1C) เพื่อดูกรมธรรม์และแจ้งเคลมมือถือ',
        subtitle: 'เข้าสู่ระบบด้วยเบอร์โทรที่ลงทะเบียนไว้ เพื่อตรวจเช็กเครื่อง IMEI และยื่นเคลมออนไลน์',
        ctaLabel: 'เข้าสู่ระบบ The 1 × Power Buy',
        otpNote: 'บังคับกด "รับรหัส OTP" และยืนยันรหัส OTP 6 หลัก + PIN 6 หลักทุกครั้งที่เข้าสู่ระบบ',
        requiredFields: [
          'เบอร์โทรศัพท์ 10 หลัก (เบอร์ที่ลงทะเบียนรับสิทธิ์ไว้)',
          'รหัส OTP 6 หลักที่ส่งทาง SMS (กดรับรหัสใหม่ทุกครั้ง)',
          'ชื่อ-นามสกุลบัญชี & รหัส PIN 6 หลักของระบบ',
        ],
      },
      en: {
        title: 'Sign in to The 1 × Power Buy Portal for Mobile Claims',
        subtitle: 'Sign in with your registered mobile number to inspect IMEI shield & file claims.',
        ctaLabel: 'Sign In to T1C Mobile Shield',
        otpNote: 'A fresh 6-digit SMS OTP request and PIN verification is required on every login.',
        requiredFields: [
          'Registered 10-digit Mobile Number',
          '6-digit SMS OTP code (requested on every sign-in)',
          'Account Name confirmation & 6-digit Security PIN',
        ],
      },
    },
    locale: {
      th: {
        backHomeCta: 'กลับหน้าหลัก Jaymart Insurance',
        kicker: 'THE 1 × POWER BUY × JAYMART INSURANCE',
        headlinePrimary: 'อุ่นใจ 2 ต่อ คุ้มครองมือถือ 1 ปีเต็ม',
        headlineSecondary: 'พร้อมรับคะแนน The 1 สูงสุด ×10',
        offerTitle: 'ลงทะเบียนรับสิทธิ์ภายใน 2 ชม. หลังซื้อเครื่องที่ Power Buy',
        offerDurationOrPrice: 'คุ้มครอง 1 ปี + The 1 ×10',
        offerNote:
          'ซื้อมือถือที่ Power Buy และแจ้งรับประกันภัยจอแตก-โดนน้ำ-อุบัติเหตุไม่คาดฝัน รับสิทธิ์ดูแลเครื่องเต็มปีพร้อมสะสมคะแนน The 1 สุดคุ้ม',
        ctaRegister: 'ลงทะเบียนคุ้มครองเครื่อง',
        ctaDetails: 'ดูความคุ้มครองมือถือ',
        highlights: [
          {
            title: 'คุ้มครองจอแตก & ความเสียหายจากน้ำ',
            detail: 'ลดความกังวลจากการทำตกหล่น หน้าจอแตก หรือเครื่องเปียกน้ำจากอุบัติเหตุ',
          },
          {
            title: 'รับคะแนน The 1 คูณ 10 เท่า',
            detail: 'เชื่อมต่อหมายเลขสมาชิก The 1 เพื่อรับคะแนนพิเศษทันทีหลังยืนยันกรมธรรม์',
          },
          {
            title: 'ลงทะเบียนด่วนภายใน 2 ชม.',
            detail: 'กรอกเลข IMEI และเลขที่ใบเสร็จ Power Buy ผ่านระบบออนไลน์ได้ภายในไม่กี่นาที',
          },
        ],
        brandName: 'THE 1 × POWER BUY',
        introTitle: 'ปกป้องสมาร์ทโฟนเครื่องโปรดตั้งแต่วันแรกที่ซื้อ',
        introParagraphs: [
          'สมาร์ทโฟนระดับเรือธงมีค่าซ่อมหน้าจอและเมนบอร์ดสูง การมีประกันภัยความเสียหายของตัวเครื่องจาก เจมาร์ท ประกันภัย ร่วมกับ Power Buy และ The 1 ช่วยให้คุณใช้งานได้อย่างไร้กังวลตลอด 1 ปีเต็ม',
          'เพียงลงทะเบียนรับสิทธิ์ภายใน 2 ชั่วโมงหลังออกใบเสร็จรับเงินที่ Power Buy พร้อมระบุหมายเลขสมาชิก The 1 รับทันทีความคุ้มครองเครื่องและคะแนนสะสม The 1 สูงสุด x10',
        ],
        coverageHeading: 'รายละเอียดความคุ้มครองสมาร์ทโฟน 1 ปี',
        coverageSubheading: 'ครอบคลุมเหตุไม่คาดฝันหลักที่พบได้บ่อยที่สุดในการใช้งานจริง',
        coverageItems: [
          {
            title: 'ความเสียหายของหน้าจอ (Screen Breakage)',
            benefit: 'คุ้มครองตลอด 1 ปี',
            description: 'คุ้มครองกรณีทำเครื่องตกกระแทกจนหน้าจอแตก ร้าว หรือทัชสกรีนขัดข้องจากอุบัติเหตุ',
          },
          {
            title: 'ความเสียหายจากน้ำและของเหลว (Liquid Damage)',
            benefit: 'ตามทุนประกันเครื่อง',
            description: 'ครอบคลุมความเสียหายจากน้ำหกใส่ เปียกฝน หรือตกน้ำโดยอุบัติเหตุ',
          },
          {
            title: 'อุบัติเหตุภายนอกที่ทำให้ตัวเครื่องเสียหาย',
            benefit: 'ส่งซ่อมศูนย์มาตรฐาน',
            description: 'ประสานงานศูนย์บริการซ่อมมาตรฐานพร้อมแจ้งสถานะผ่านช่องทางออนไลน์',
          },
          {
            title: 'สิทธิพิเศษคะแนนสะสม The 1 ×10',
            benefit: 'The 1 ×10 Points',
            description: 'สะสมคะแนนเข้าบัญชี The 1 ของคุณโดยอัตโนมัติตามเงื่อนไขแคมเปญ Power Buy',
          },
        ],
        coverageFootnote:
          '* เงื่อนไขเป็นไปตามแผนประกันสมาร์ทโฟนที่เลือกซื้อ ณ จุดขาย Power Buy และอาจมีค่าความเสียหายส่วนแรกตามทุนประกัน',
        qualificationsHeading: 'ขั้นตอนและคุณสมบัติการรับสิทธิ์',
        qualifications: [
          'ซื้อมือถือใหม่จากร้าน Power Buy ทุกสาขา หรือช่องทางออนไลน์ที่ร่วมรายการ',
          'ลงทะเบียนเปิดใช้งานประกันภายใน 2 ชั่วโมงหลังเวลาที่ระบุบนใบเสร็จรับเงิน',
          'เป็นสมาชิก The 1 ที่มีหมายเลขโทรศัพท์และรหัส IMEI เครื่องครบถ้วนถูกต้อง',
        ],
        termsHeading: 'เงื่อนไขแคมเปญ The 1 × Power Buy × Jaymart',
        claimBridgeCta: 'ดูวิธีแจ้งเคลมเครื่อง Jaymart Insurance',
        terms: [
          'ความคุ้มครองมีผล 1 ปี นับจากวันที่ซื้อเครื่องและลงทะเบียนรับสิทธิ์สำเร็จภายในระยะเวลาที่กำหนด',
          'สงวนสิทธิ์เฉพาะเครื่องใหม่ที่ไม่เคยเปิดใช้งานประกันซ่อมเครื่องมาก่อนและซื้อผ่าน Power Buy',
          'รหัส IMEI 15 หลักบนใบสมัครต้องตรงกับตัวเครื่องและใบเสร็จรับเงิน',
          'ไม่คุ้มครองการสูญหาย ลักทรัพย์ หรือความเสียหายจากการดัดแปลงซอฟต์แวร์/แกะเครื่องโดยศูนย์ที่ไม่ได้รับอนุญาต',
          'คะแนน The 1 ×10 จะโอนเข้าบัญชีสมาชิก The 1 ภายใน 30 วันหลังการซื้อและการลงทะเบียนสมบูรณ์',
          'จำกัด 1 สิทธิ์ต่อ 1 หมายเลข IMEI ของเครื่อง',
          'รับประกันภัยโดย บริษัท เจมาร์ท ประกันภัย จำกัด (มหาชน)',
          'เอกสารกรมธรรม์อิเล็กทรอนิกส์จะถูกจัดส่งผ่านทาง SMS หรืออีเมลที่ลงทะเบียน',
          'หากเครื่องเกิดความเสียหาย กรุณาแจ้งเคลมก่อนนำเครื่องเข้าซ่อมพร้อมใบเสร็จและกรมธรรม์',
        ],
        claimBridgeText:
          'มือถือจอแตกหรือโดนน้ำ แจ้งเปิดเคลมได้ทันทีที่ 02-099-0555 หรือยื่นข้อมูลผ่านศูนย์แจ้งเคลมออนไลน์',
        coBrandBadge: 'THE 1 × POWER BUY × JAYMART INSURANCE',
        registerForm: {
          heading: 'ลงทะเบียนคุ้มครองมือถือ 1 ปี (The 1 × Power Buy)',
          subheading: 'กรอกชื่อ เบอร์สมาชิก The 1 และเลขใบเสร็จ / IMEI เพื่อเปิดใช้งานความคุ้มครอง',
          successTitle: 'บันทึกการลงทะเบียนคุ้มครองมือถือสำเร็จ',
          ticketLabel: 'เลขรับเรื่องเปิดความคุ้มครอง',
          successBody:
            'ระบบได้รับข้อมูลเครื่องของท่านแล้ว เจ้าหน้าที่จะตรวจสอบใบเสร็จ Power Buy และส่งกรมธรรม์ให้ทาง SMS',
          resetCta: 'ลงทะเบียนเครื่องอื่น',
          fullNameLabel: 'ชื่อ - นามสกุลผู้ซื้อเครื่อง',
          fullNamePlaceholder: 'เช่น อนันต์ รักดี',
          phoneLabel: 'เบอร์โทรศัพท์สมาชิก The 1',
          phonePlaceholder: '08X-XXX-XXXX',
          refLabel: 'เลขที่ใบเสร็จ Power Buy / IMEI เครื่อง',
          refPlaceholder: 'เช่น PWB-2569-8812 / IMEI 35...',
          consentLabel:
            'ข้าพเจ้ายืนยันว่าข้อมูลเครื่องถูกต้องและยินยอมให้ Power Buy, The 1 และ เจมาร์ท ประกันภัย ดำเนินการออกกรมธรรม์',
          validationError: 'กรุณากรอกชื่อ เบอร์ The 1 เลขใบเสร็จ/IMEI และกดยินยอมให้ครบถ้วน',
          submitCta: 'ยืนยันเปิดความคุ้มครอง + รับ The 1 ×10',
        },
        footerOperator: 'สิทธิพิเศษร่วมกับ The 1 และ Power Buy',
        footerInsurer: 'รับประกันภัยโดย บริษัท เจมาร์ท ประกันภัย จำกัด (มหาชน)',
      },
      en: {
        backHomeCta: 'Back to Jaymart Insurance',
        kicker: 'THE 1 × POWER BUY × JAYMART INSURANCE',
        headlinePrimary: 'Double Peace of Mind: 1-Year Mobile Shield',
        headlineSecondary: 'Plus Up to 10x The 1 Bonus Points',
        offerTitle: 'Register Within 2 Hours of Your Power Buy Smartphone Purchase',
        offerDurationOrPrice: '1-Year Shield + The 1 ×10',
        offerNote:
          'Covers accidental screen cracking and liquid damage for 1 full year while multiplying your The 1 membership points.',
        ctaRegister: 'Activate Device Shield',
        ctaDetails: 'View Device Coverage',
        highlights: [
          {
            title: 'Screen & Liquid Protection',
            detail: 'Covers cracked displays and accidental spills or moisture damage for 1 year.',
          },
          {
            title: '10x The 1 Rewards Points',
            detail: 'Earn accelerated The 1 points upon verified Power Buy device registration.',
          },
          {
            title: 'Fast 2-Hour Online Activation',
            detail: 'Submit your IMEI and Power Buy receipt reference in minutes.',
          },
        ],
        brandName: 'THE 1 × POWER BUY',
        introTitle: 'Protect Your New Smartphone From Day One',
        introParagraphs: [
          'Flagship display and motherboard repairs can be costly. Power Buy, The 1, and Jaymart Insurance bring seamless 1-year accidental protection right at checkout.',
          'Register within 2 hours of purchase using your IMEI and The 1 phone number to lock in protection and 10x The 1 Points.',
        ],
        coverageHeading: '1-Year Smartphone Protection Highlights',
        coverageSubheading: 'Comprehensive accidental coverage serviced via authorized repair centers',
        coverageItems: [
          {
            title: 'Accidental Screen Breakage',
            benefit: '1-Year Protection',
            description: 'Covers cracked or shattered screens caused by accidental drops.',
          },
          {
            title: 'Liquid & Water Spill Damage',
            benefit: 'Up to Device Value',
            description: 'Protection against accidental spills, rain exposure, or submersion.',
          },
          {
            title: 'External Impact Damage',
            benefit: 'Authorized Repair Network',
            description: 'Repaired using genuine parts at partner service centers.',
          },
          {
            title: 'The 1 ×10 Bonus Points',
            benefit: 'The 1 ×10 Points',
            description: 'Credited automatically to your linked The 1 membership account.',
          },
        ],
        coverageFootnote:
          '* Subject to Power Buy device protection plan terms and applicable deductible per claim.',
        qualificationsHeading: 'Activation Requirements',
        qualifications: [
          'Brand-new smartphone purchased at Power Buy stores or official online channels.',
          'Activated within 2 hours of receipt timestamp.',
          'Valid The 1 member phone number and matching 15-digit IMEI.',
        ],
        termsHeading: 'Campaign Terms & Conditions',
        claimBridgeCta: 'View Jaymart Claim Process',
        terms: [
          'Coverage runs for 12 months from verified purchase and registration date.',
          'Applies exclusively to new devices purchased from Power Buy.',
          'Submitted 15-digit IMEI must match the device and purchase receipt.',
          'Excludes theft, loss, or unauthorized third-party hardware repairs.',
          'The 1 ×10 points post within 30 days after confirmed registration.',
          'Limited to one activation per device IMEI.',
          'Underwritten by Jaymart Insurance Public Company Limited.',
          'Digital policy certificate is sent via SMS or email.',
          'Report damages to Jaymart Claims before handing device to repair center.',
        ],
        claimBridgeText:
          'Screen cracked or liquid spilled? Call 02-099-0555 ext. 1 or file online before repair drop-off.',
        coBrandBadge: 'THE 1 × POWER BUY × JAYMART INSURANCE',
        registerForm: {
          heading: 'Activate 1-Year Mobile Shield (The 1 × Power Buy)',
          subheading: 'Submit your buyer details, The 1 phone number, and receipt / IMEI.',
          successTitle: 'Mobile Shield Activation Recorded',
          ticketLabel: 'Activation Ticket ID',
          successBody:
            'Your receipt and IMEI are queued for verification. Your e-Policy will be delivered via SMS.',
          resetCta: 'Register Another Device',
          fullNameLabel: 'Buyer Full Name',
          fullNamePlaceholder: 'e.g. Anan Rakdee',
          phoneLabel: 'The 1 Registered Mobile Number',
          phonePlaceholder: '08X-XXX-XXXX',
          refLabel: 'Power Buy Receipt / 15-Digit IMEI',
          refPlaceholder: 'e.g. PWB-2569-8812 / IMEI 35...',
          consentLabel:
            'I confirm the device details are accurate and consent to Power Buy, The 1, and Jaymart Insurance issuing the policy.',
          validationError: 'Please provide name, The 1 phone, receipt/IMEI, and check consent.',
          submitCta: 'Activate Shield + Earn The 1 ×10',
        },
        footerOperator: 'In partnership with The 1 and Power Buy',
        footerInsurer: 'Underwritten by Jaymart Insurance PCL',
      },
    },
  },
};

export const PARTNER_MENU_ITEMS: Record<Language, PartnerMenuItem[]> = {
  th: (['siamchai', 'rabbit', 't1c'] as BuiltinPartnerKey[]).map((key) => ({
    key,
    theme: PARTNER_LANDINGS[key].theme,
    label: PARTNER_LANDINGS[key].menu.th.label,
    sublabel: PARTNER_LANDINGS[key].menu.th.sublabel,
    href: `?partner=${key}`,
    applyUrl: PARTNER_LANDINGS[key].applyUrl,
  })),
  en: (['siamchai', 'rabbit', 't1c'] as BuiltinPartnerKey[]).map((key) => ({
    key,
    theme: PARTNER_LANDINGS[key].theme,
    label: (PARTNER_LANDINGS[key].menu.en || PARTNER_LANDINGS[key].menu.th).label,
    sublabel: (PARTNER_LANDINGS[key].menu.en || PARTNER_LANDINGS[key].menu.th).sublabel,
    href: `?partner=${key}`,
    applyUrl: PARTNER_LANDINGS[key].applyUrl,
  })),
};

export function getInitialPartnerRegistry(): PartnerRegistry {
  return {
    order: ['siamchai', 'rabbit', 't1c'],
    items: {
      siamchai: PARTNER_LANDINGS.siamchai,
      rabbit: PARTNER_LANDINGS.rabbit,
      t1c: PARTNER_LANDINGS.t1c,
    },
  };
}

export function getPartnerMenuItems(registry: PartnerRegistry, lang: Language): PartnerMenuItem[] {
  return registry.order
    .map((key) => registry.items[key])
    .filter((asset): asset is PartnerAsset => Boolean(asset))
    .map((asset) => {
      const menuLocale = lang === 'en' ? asset.menu.en || asset.menu.th : asset.menu.th;
      return {
        key: asset.key,
        theme: asset.theme,
        label: menuLocale.label,
        sublabel: menuLocale.sublabel,
        href: `?partner=${encodeURIComponent(asset.key)}`,
        applyUrl: asset.applyUrl,
      };
    });
}

function defaultRegisterForm(lang: Language, brandName: string, ctaRegister: string): PartnerLocaleContent['registerForm'] {
  if (lang === 'en') {
    return {
      heading: `Apply for ${brandName} Privilege`,
      subheading: 'Continue to the dedicated partner application portal to enroll and activate your policy.',
      successTitle: 'Registration Recorded',
      ticketLabel: 'Reference Ticket',
      successBody: 'Our partner team will verify your submission and deliver your confirmation via SMS.',
      resetCta: 'Submit Another Request',
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'e.g. Somchai Jaidee',
      phoneLabel: 'Mobile Number',
      phonePlaceholder: '08X-XXX-XXXX',
      refLabel: 'Partner Member / Receipt Ref',
      refPlaceholder: 'Reference code',
      consentLabel: 'I consent to partner verification and Jaymart Insurance issuing the policy.',
      validationError: 'Please complete all required fields and consent.',
      submitCta: ctaRegister,
    };
  }
  return {
    heading: `สมัครรับสิทธิ์ ${brandName} × Jaymart`,
    subheading: 'กดปุ่มด้านล่างเพื่อเปิดหน้าแบบฟอร์มสมัครประกันเฉพาะพาร์ทเนอร์ในแท็บใหม่',
    successTitle: 'บันทึกการลงทะเบียนเรียบร้อย',
    ticketLabel: 'รหัสอ้างอิงสิทธิพิเศษ',
    successBody: 'ระบบได้รับข้อมูลเรียบร้อยแล้ว เจ้าหน้าที่จะตรวจสอบและจัดส่งเอกสารยืนยันผ่าน SMS',
    resetCta: 'ลงทะเบียนรายการอื่น',
    fullNameLabel: 'ชื่อ - นามสกุล',
    fullNamePlaceholder: 'เช่น สมชาย ใจดี',
    phoneLabel: 'เบอร์โทรศัพท์มือถือ',
    phonePlaceholder: '08X-XXX-XXXX',
    refLabel: 'รหัสสมาชิก / เลขที่อ้างอิงพาร์ทเนอร์',
    refPlaceholder: 'กรอกรหัสอ้างอิง',
    consentLabel: 'ข้าพเจ้ายินยอมให้พาร์ทเนอร์และ เจมาร์ท ประกันภัย ตรวจสอบข้อมูลเพื่อออกความคุ้มครอง',
    validationError: 'กรุณากรอกข้อมูลและกดยินยอมให้ครบถ้วน',
    submitCta: ctaRegister,
  };
}

function normalizeLocaleContent(
  raw: Partial<PartnerLocaleContent> | undefined,
  lang: Language,
  fallbackLocale: PartnerLocaleContent | undefined,
  brandFallback: string
): PartnerLocaleContent {
  const base = raw ?? {};
  const fb = fallbackLocale;
  const brandName = base.brandName || fb?.brandName || brandFallback;
  const ctaRegister =
    base.ctaRegister || fb?.ctaRegister || (lang === 'en' ? 'Apply Privilege Now' : 'สมัครรับสิทธิ์เลย');

  return {
    backHomeCta:
      base.backHomeCta ||
      fb?.backHomeCta ||
      (lang === 'en' ? 'Back to Jaymart Insurance' : 'กลับหน้าหลัก Jaymart Insurance'),
    kicker: base.kicker || fb?.kicker || `${brandName} × JAYMART INSURANCE`,
    headlinePrimary: base.headlinePrimary || fb?.headlinePrimary || brandName,
    headlineSecondary: base.headlineSecondary ?? fb?.headlineSecondary,
    offerTitle: base.offerTitle || fb?.offerTitle || brandName,
    offerDurationOrPrice: base.offerDurationOrPrice || fb?.offerDurationOrPrice || '',
    offerNote: base.offerNote || fb?.offerNote || '',
    ctaRegister,
    ctaDetails:
      base.ctaDetails ||
      fb?.ctaDetails ||
      (lang === 'en' ? 'View Coverage Details' : 'ดูความคุ้มครองทั้งหมด'),
    highlights: Array.isArray(base.highlights)
      ? base.highlights
      : fb?.highlights || [],
    brandName,
    introTitle: base.introTitle || fb?.introTitle || brandName,
    introParagraphs: Array.isArray(base.introParagraphs)
      ? base.introParagraphs
      : fb?.introParagraphs || [],
    coverageHeading:
      base.coverageHeading ||
      fb?.coverageHeading ||
      (lang === 'en' ? 'Coverage Details' : 'รายละเอียดความคุ้มครอง'),
    coverageSubheading: base.coverageSubheading || fb?.coverageSubheading || '',
    coverageItems: Array.isArray(base.coverageItems)
      ? base.coverageItems
      : fb?.coverageItems || [],
    coverageFootnote: base.coverageFootnote || fb?.coverageFootnote || '',
    qualificationsHeading:
      base.qualificationsHeading ||
      fb?.qualificationsHeading ||
      (lang === 'en' ? 'Eligibility Requirements' : 'คุณสมบัติผู้รับสิทธิ์'),
    qualifications: Array.isArray(base.qualifications)
      ? base.qualifications
      : fb?.qualifications || [],
    termsHeading:
      base.termsHeading ||
      fb?.termsHeading ||
      (lang === 'en' ? 'Terms & Conditions' : 'ข้อกำหนดและเงื่อนไข'),
    claimBridgeCta:
      base.claimBridgeCta ||
      fb?.claimBridgeCta ||
      (lang === 'en' ? 'View Jaymart Claim Process' : 'ดูขั้นตอนการแจ้งเคลม Jaymart Insurance'),
    terms: Array.isArray(base.terms) ? base.terms : fb?.terms || [],
    claimBridgeText:
      base.claimBridgeText ||
      fb?.claimBridgeText ||
      (lang === 'en'
        ? 'Need claim support? Contact our 24/7 hotline at 02-099-0555 ext. 1.'
        : 'เกิดเหตุฉุกเฉินหรือต้องการแจ้งเคลม ติดต่อศูนย์รับแจ้งอุบัติเหตุ 24 ชม. โทร 02-099-0555 กด 1'),
    coBrandBadge: base.coBrandBadge || fb?.coBrandBadge || `${brandName} × JAYMART INSURANCE`,
    registerForm: {
      ...defaultRegisterForm(lang, brandName, ctaRegister),
      ...(fb?.registerForm ?? {}),
      ...(base.registerForm ?? {}),
    },
    footerOperator:
      base.footerOperator ||
      fb?.footerOperator ||
      (lang === 'en' ? `In partnership with ${brandName}` : `สิทธิพิเศษร่วมกับ ${brandName}`),
    footerInsurer:
      base.footerInsurer ||
      fb?.footerInsurer ||
      (lang === 'en'
        ? 'Underwritten by Jaymart Insurance PCL'
        : 'รับประกันภัยโดย บริษัท เจมาร์ท ประกันภัย จำกัด (มหาชน)'),
  };
}

export interface RawPartnerEntry {
  key?: string;
  enabled?: boolean;
  theme?: string;
  applyUrl?: string;
  claimLoginUrl?: string;
  openInNewTab?: boolean;
  logoUrl?: string;
  heroImageUrl?: string;
  heroBadge?: { th: string; en?: string };
  heroTagline?: { th: string; en?: string };
  menu?: {
    th?: Partial<PartnerMenuLocale>;
    en?: Partial<PartnerMenuLocale>;
  };
  claimLoginInfo?: {
    th?: Partial<PartnerClaimLoginInfo>;
    en?: Partial<PartnerClaimLoginInfo>;
  };
  locale?: {
    th?: Partial<PartnerLocaleContent>;
    en?: Partial<PartnerLocaleContent>;
  };
}

function defaultClaimLoginInfo(
  lang: Language,
  brandLabel: string,
  fallback?: PartnerClaimLoginInfo,
  override?: Partial<PartnerClaimLoginInfo>
): PartnerClaimLoginInfo {
  const baseTitle =
    lang === 'en'
      ? `Sign in to ${brandLabel} Portal for Policies & Claims`
      : `เข้าสู่ระบบ ${brandLabel} เพื่อดูกรมธรรม์และแจ้งเคลม`;
  const baseSubtitle =
    lang === 'en'
      ? 'Verify your registered partner account with OTP to manage policies and file claims.'
      : 'ยืนยันตัวตนด้วยข้อมูลบัญชีพาร์ทเนอร์และรหัส OTP เพื่อดูกรมธรรม์และแจ้งเคลมออนไลน์';
  const baseCta = lang === 'en' ? `Sign In to ${brandLabel}` : `เข้าสู่ระบบ ${brandLabel}`;
  const baseOtp =
    lang === 'en'
      ? 'A fresh 6-digit SMS OTP verification is required on every sign-in.'
      : 'บังคับขอและยืนยันรหัส OTP 6 หลักทาง SMS ทุกครั้งที่เข้าสู่ระบบ';
  const baseFields =
    lang === 'en'
      ? ['Registered 10-digit Mobile Number', '13-digit National ID / Reference No.', '6-digit SMS OTP code']
      : ['เบอร์มือถือที่ลงทะเบียน (10 หลัก)', 'เลขบัตรประชาชน 13 หลัก หรือ เลขอ้างอิงพาร์ทเนอร์', 'รหัส OTP 6 หลักที่ส่งทาง SMS'];

  return {
    title: override?.title || fallback?.title || baseTitle,
    subtitle: override?.subtitle || fallback?.subtitle || baseSubtitle,
    ctaLabel: override?.ctaLabel || fallback?.ctaLabel || baseCta,
    otpNote: override?.otpNote || fallback?.otpNote || baseOtp,
    requiredFields:
      Array.isArray(override?.requiredFields) && override.requiredFields.length > 0
        ? override.requiredFields
        : fallback?.requiredFields || baseFields,
  };
}

export function normalizePartnerAsset(
  raw: RawPartnerEntry,
  fallbackAsset?: PartnerAsset
): PartnerAsset | null {
  const key = isValidPartnerSlug(raw.key);
  if (!key || raw.enabled === false) {
    return null;
  }

  const thLocaleSrc = raw.locale?.th;
  const enLocaleSrc = raw.locale?.en;
  const fallbackTh = fallbackAsset?.locale.th;
  const fallbackEn = fallbackAsset?.locale.en;

  const brandNameGuess =
    thLocaleSrc?.brandName ||
    raw.menu?.th?.label ||
    fallbackAsset?.menu.th.label ||
    key.toUpperCase();

  const thMenu: PartnerMenuLocale = {
    label: raw.menu?.th?.label || fallbackAsset?.menu.th.label || brandNameGuess,
    sublabel: raw.menu?.th?.sublabel || fallbackAsset?.menu.th.sublabel || thLocaleSrc?.offerTitle || '',
  };
  const enMenu: PartnerMenuLocale = {
    label:
      raw.menu?.en?.label ||
      fallbackAsset?.menu.en?.label ||
      thMenu.label,
    sublabel:
      raw.menu?.en?.sublabel ||
      fallbackAsset?.menu.en?.sublabel ||
      enLocaleSrc?.offerTitle ||
      thMenu.sublabel,
  };

  const thLocale = normalizeLocaleContent(thLocaleSrc, 'th', fallbackTh, thMenu.label);
  const enLocale = normalizeLocaleContent(
    enLocaleSrc || (fallbackEn ? undefined : thLocaleSrc),
    'en',
    fallbackEn || (enLocaleSrc ? undefined : thLocale),
    enMenu.label
  );

  const resolvedApplyUrl = raw.applyUrl ?? fallbackAsset?.applyUrl;
  const derivedClaimUrl =
    raw.claimLoginUrl ??
    fallbackAsset?.claimLoginUrl ??
    (resolvedApplyUrl ? `${resolvedApplyUrl.split('#')[0]}#login` : undefined);

  return {
    key,
    theme: raw.theme ? resolvePartnerTheme(raw.theme) : fallbackAsset?.theme || 'red',
    applyUrl: resolvedApplyUrl,
    claimLoginUrl: derivedClaimUrl,
    openInNewTab: raw.openInNewTab ?? fallbackAsset?.openInNewTab ?? true,
    logoUrl: raw.logoUrl ?? fallbackAsset?.logoUrl,
    heroImageUrl: raw.heroImageUrl ?? fallbackAsset?.heroImageUrl,
    heroBadge: raw.heroBadge ?? fallbackAsset?.heroBadge,
    heroTagline: raw.heroTagline ?? fallbackAsset?.heroTagline,
    menu: {
      th: thMenu,
      en: enMenu,
    },
    claimLoginInfo: {
      th: defaultClaimLoginInfo('th', thMenu.label, fallbackAsset?.claimLoginInfo?.th, raw.claimLoginInfo?.th),
      en: defaultClaimLoginInfo('en', enMenu.label, fallbackAsset?.claimLoginInfo?.en, raw.claimLoginInfo?.en),
    },
    locale: {
      th: thLocale,
      en: enLocale,
    },
  };
}

export async function loadDynamicPartners(): Promise<PartnerRegistry> {
  const baseRegistry = getInitialPartnerRegistry();

  try {
    const resp = await fetch(`/partners/partners.json?v=${Date.now()}`, {
      cache: 'no-store',
    });
    if (!resp.ok) {
      return baseRegistry;
    }

    const payload = (await resp.json()) as { partners?: RawPartnerEntry[] } | RawPartnerEntry[];
    const entries = Array.isArray(payload)
      ? payload
      : Array.isArray(payload?.partners)
        ? payload.partners
        : [];

    if (entries.length === 0) {
      return baseRegistry;
    }

    const mergedItems: Record<PartnerKey, PartnerAsset> = { ...baseRegistry.items };
    const nextOrder: PartnerKey[] = [];

    for (const raw of entries) {
      const slug = isValidPartnerSlug(raw?.key);
      if (!slug) continue;

      if (raw.enabled === false) {
        delete mergedItems[slug];
        continue;
      }

      const normalized = normalizePartnerAsset(raw, mergedItems[slug]);
      if (!normalized) continue;

      mergedItems[slug] = normalized;
      if (!nextOrder.includes(slug)) {
        nextOrder.push(slug);
      }
    }

    // Preserve any built-in partner not disabled explicitly in partners.json
    for (const builtinKey of baseRegistry.order) {
      if (mergedItems[builtinKey] && !nextOrder.includes(builtinKey)) {
        nextOrder.push(builtinKey);
      }
    }

    return {
      order: nextOrder.length > 0 ? nextOrder : baseRegistry.order,
      items: mergedItems,
    };
  } catch (err) {
    console.warn('Could not load /partners/partners.json, falling back to built-in partners:', err);
    return baseRegistry;
  }
}
