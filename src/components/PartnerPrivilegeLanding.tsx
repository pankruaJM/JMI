import React, { useEffect, useId, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  BatteryCharging,
  Check,
  Droplets,
  ExternalLink,
  HeartPulse,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';
import { Language } from '../data/content';
import { PARTNER_THEME_PRESETS, PartnerAsset, PartnerKey } from '../data/partnerLandings';

interface PartnerPrivilegeLandingProps {
  asset: PartnerAsset;
  lang: Language;
  onBackHome: () => void;
  onNavigateClaim: () => void;
}

const SOFT_ICON_PALETTES = [
  { wrap: 'bg-[#FDEBE5]', icon: 'text-[#E31837]' },
  { wrap: 'bg-[#E6F3FD]', icon: 'text-[#2563EB]' },
  { wrap: 'bg-[#FFF3DC]', icon: 'text-[#D97706]' },
  { wrap: 'bg-[#EAF6EC]', icon: 'text-[#16A34A]' },
];

function getCoverageIcon(title: string, index: number, className = 'w-5 h-5') {
  const lower = title.toLowerCase();
  if (lower.includes('แบตเตอรี่') || lower.includes('battery')) {
    return <BatteryCharging className={className} />;
  }
  if (lower.includes('น้ำ') || lower.includes('liquid') || lower.includes('water') || lower.includes('ธรรมชาติ')) {
    return <Droplets className={className} />;
  }
  if (lower.includes('จอ') || lower.includes('มือถือ') || lower.includes('screen') || lower.includes('cyber') || lower.includes('ไซเบอร์')) {
    return <Smartphone className={className} />;
  }
  if (lower.includes('รพ') || lower.includes('opd') || lower.includes('ออฟฟิศ') || lower.includes('hospital') || lower.includes('physio')) {
    return <HeartPulse className={className} />;
  }
  if (lower.includes('คะแนน') || lower.includes('พอยต์') || lower.includes('point')) {
    return <Sparkles className={className} />;
  }
  if (lower.includes('ไฟฟ้า') || lower.includes('จักรยาน') || lower.includes('e-bike') || lower.includes('appliance')) {
    return <Zap className={className} />;
  }
  if (index === 0) return <Smartphone className={className} />;
  if (index === 1) return <Droplets className={className} />;
  return <ShieldCheck className={className} />;
}

function PartnerHeaderBrandLockup({
  asset,
  lang,
}: {
  asset: PartnerAsset;
  lang: Language;
}) {
  const partnerKey: PartnerKey = asset.key;
  const brandStyle = PARTNER_THEME_PRESETS[asset.theme];
  const content = asset.locale[lang];

  if (partnerKey === 'siamchai' && !asset.logoUrl) {
    return (
      <div className="inline-flex items-center gap-3">
        <img
          src="/assets/aistudio/image_d96b03bb_d96b03bb.png"
          alt="สยามชัย SIAMCHAI SERVICE"
          referrerPolicy="no-referrer"
          className="h-10 w-10 sm:h-11 sm:w-11 object-cover rounded-xl border border-[#1954B8]/25 shadow-xs shrink-0"
        />
        <div className="leading-tight">
          <div className="text-sm sm:text-base font-bold text-[#1954B8]">สยามชัย × เจมาร์ท ประกันภัย</div>
          <div className="text-[11px] font-mono tracking-wide text-neutral-500 uppercase">
            SIAMCHAI SERVICE × JAYMART INSURANCE
          </div>
        </div>
      </div>
    );
  }

  if (partnerKey === 'rabbit' && !asset.logoUrl) {
    return (
      <div className="inline-flex items-center gap-2.5 flex-wrap">
        <div className="h-9 sm:h-10 px-3 rounded-xl bg-gradient-to-r from-[#EE4D38] via-[#F97316] to-[#F59E0B] flex items-center gap-1.5 shadow-xs shrink-0">
          <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 shrink-0" aria-hidden="true">
            <path
              d="M11 4c-1.8 0-3 2.5-2.6 6.2.2 1.8.8 3.6 1.5 4.8-2.2 1.4-3.4 3.7-3.4 6.2 0 4.2 3.8 7 9.5 7s9.5-2.8 9.5-7c0-2.5-1.2-4.8-3.4-6.2.7-1.2 1.3-3 1.5-4.8C24 6.5 22.8 4 21 4c-1.7 0-2.8 2.2-3 5.5-.6-.1-1.3-.2-2-.2s-1.4.1-2 .2C13.8 6.2 12.7 4 11 4Z"
              fill="#FFFFFF"
            />
            <circle cx="16" cy="21" r="3.4" fill="#F97316" />
          </svg>
          <span className="text-white font-bold tracking-tight text-xs sm:text-sm">
            rabbit <span className="font-normal opacity-95">rewards</span>
          </span>
        </div>
        <span className="text-neutral-400 font-bold text-xs">×</span>
        <div className="inline-flex items-center gap-1.5">
          <img
            src="/assets/jaymart-logo-transparent.png"
            alt="Jaymart Insurance"
            referrerPolicy="no-referrer"
            className="w-6 h-6 object-contain rounded-full"
          />
          <span className="text-xs sm:text-sm font-bold text-neutral-900">เจมาร์ท ประกันภัย</span>
        </div>
      </div>
    );
  }

  if (partnerKey === 't1c' && !asset.logoUrl) {
    return (
      <div className="inline-flex items-center gap-2.5">
        <div className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-xl border border-neutral-200 shadow-xs shrink-0">
          <span className="text-sm sm:text-base font-semibold text-[#111111] tracking-tight">The</span>
          <span className="w-7 h-7 rounded-full bg-[#111111] flex flex-col items-center justify-center shrink-0">
            <span className="text-white font-bold text-xs leading-none">1</span>
            <span className="w-3 h-[2px] bg-[#E31837] mt-0.5 block" />
          </span>
        </div>
        <span className="text-neutral-400 font-bold text-xs">×</span>
        <div className="inline-flex items-center gap-1.5 leading-tight">
          <img
            src="/assets/jaymart-logo-transparent.png"
            alt="Jaymart Insurance"
            referrerPolicy="no-referrer"
            className="w-6 h-6 object-contain rounded-full shrink-0"
          />
          <div>
            <div className="text-xs sm:text-sm font-bold text-neutral-950">Power Buy × เจมาร์ท ประกันภัย</div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase">The 1 × Jaymart Insurance</div>
          </div>
        </div>
      </div>
    );
  }

  const monogram = content.brandName.trim().slice(0, 2).toUpperCase() || 'PT';
  return (
    <div className="inline-flex items-center gap-2.5">
      {asset.logoUrl ? (
        <img
          src={asset.logoUrl}
          alt={content.brandName}
          referrerPolicy="no-referrer"
          className="h-10 w-10 object-contain rounded-xl border border-neutral-200 bg-white p-1 shadow-xs shrink-0"
        />
      ) : (
        <div
          className={`h-10 w-10 rounded-xl ${brandStyle.accentBg} text-white font-bold text-sm flex items-center justify-center shadow-xs shrink-0`}
        >
          {monogram}
        </div>
      )}
      <div className="leading-tight">
        <div className="text-sm font-bold text-neutral-950">{content.brandName}</div>
        <div className="text-[11px] font-mono text-neutral-500 inline-flex items-center gap-1">
          <span>× Jaymart Insurance</span>
        </div>
      </div>
    </div>
  );
}

function PartnerFooterCoBrandLogo({
  asset,
  lang,
}: {
  asset: PartnerAsset;
  lang: Language;
}) {
  const partnerKey = asset.key;
  const brandStyle = PARTNER_THEME_PRESETS[asset.theme];
  const content = asset.locale[lang];

  if (partnerKey === 't1c' && !asset.logoUrl) {
    return (
      <div className="inline-flex items-center gap-1.5 justify-center h-11">
        <span className="text-lg font-medium text-[#111111] tracking-tight">The</span>
        <span className="w-10 h-10 rounded-full bg-[#111111] flex flex-col items-center justify-center shadow-xs">
          <span className="text-white font-bold text-lg leading-none">1</span>
          <span className="w-4 h-[2.5px] bg-[#E31837] mt-0.5 block" />
        </span>
      </div>
    );
  }

  if (partnerKey === 'rabbit' && !asset.logoUrl) {
    return (
      <div className="inline-flex items-center justify-center h-11">
        <span className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-[#EE4D38] via-[#F97316] to-[#F59E0B] text-white font-bold text-base tracking-tight shadow-xs">
          <span>rabbit</span>
          <span className="font-normal">rewards</span>
        </span>
      </div>
    );
  }

  if (partnerKey === 'siamchai' && !asset.logoUrl) {
    return (
      <div className="inline-flex items-center gap-2 justify-center h-11">
        <img
          src="/assets/aistudio/image_d96b03bb_d96b03bb.png"
          alt="สยามชัย SIAMCHAI"
          referrerPolicy="no-referrer"
          className="w-10 h-10 rounded-xl object-cover border border-[#1954B8]/30 shadow-xs"
        />
        <span className="font-bold text-base text-[#1954B8]">สยามชัย</span>
      </div>
    );
  }

  if (asset.logoUrl) {
    return (
      <div className="inline-flex items-center justify-center h-11">
        <img
          src={asset.logoUrl}
          alt={content.brandName}
          referrerPolicy="no-referrer"
          className="h-10 max-w-[140px] object-contain"
        />
      </div>
    );
  }

  return (
    <div className="inline-flex items-center justify-center h-11">
      <span className={`inline-flex items-center px-4 py-2 rounded-xl ${brandStyle.accentBg} text-white font-bold text-sm shadow-xs`}>
        {content.brandName}
      </span>
    </div>
  );
}

function T1CPhoneShieldSvg() {
  const uid = useId().replace(/:/g, '');
  const idBezel = `${uid}-bezel`;
  const idScreen = `${uid}-screen`;
  const idGlow = `${uid}-glow`;
  const idShield = `${uid}-shield`;
  const idGlass = `${uid}-glass`;
  const idDrop = `${uid}-drop`;

  return (
    <svg viewBox="0 0 220 260" className="w-44 sm:w-52 h-auto drop-shadow-2xl select-none" aria-hidden="true">
      <defs>
        <linearGradient id={idBezel} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F4F4F5" />
          <stop offset="0.45" stopColor="#E31837" />
          <stop offset="1" stopColor="#3B0A13" />
        </linearGradient>
        <linearGradient id={idScreen} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#27272A" />
          <stop offset="0.55" stopColor="#141417" />
          <stop offset="1" stopColor="#09090B" />
        </linearGradient>
        <radialGradient id={idGlow} cx="0.5" cy="0.42" r="0.55">
          <stop offset="0" stopColor="#E31837" stopOpacity="0.55" />
          <stop offset="1" stopColor="#E31837" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={idShield} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FF4D6A" />
          <stop offset="1" stopColor="#E31837" />
        </linearGradient>
        <linearGradient id={idGlass} x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.24" />
          <stop offset="0.55" stopColor="#FFFFFF" stopOpacity="0.04" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={idDrop} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9FE0FF" />
          <stop offset="1" stopColor="#2F8FE0" />
        </linearGradient>
      </defs>

      <ellipse cx="118" cy="245" rx="68" ry="8" fill="#000000" opacity="0.35" />

      <g transform="rotate(9 118 130)">
        <rect x="64" y="14" width="108" height="222" rx="26" fill={`url(#${idBezel})`} />
        <rect x="68" y="18" width="100" height="214" rx="22" fill={`url(#${idScreen})`} />
        <rect x="68" y="18" width="100" height="214" rx="22" fill={`url(#${idGlow})`} />
        <rect x="100" y="26" width="36" height="9" rx="4.5" fill="#000000" />
        <path
          d="M118 76l34 12v23c0 22-15 37-34 45-19-8-34-23-34-45V88z"
          fill={`url(#${idShield})`}
        />
        <path d="M118 83l26 9v19c0 16-11 29-26 36z" fill="#FFFFFF" opacity="0.14" />
        <path
          d="M103 115l10 10 20-21"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="88" y="174" width="60" height="7" rx="3.5" fill="#FFFFFF" fillOpacity="0.28" />
        <rect x="96" y="188" width="44" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.16" />
        <rect x="104" y="220" width="28" height="3" rx="1.5" fill="#FFFFFF" fillOpacity="0.45" />
        <path d="M68 56Q68 18 100 18H146L68 182Z" fill={`url(#${idGlass})`} />
      </g>

      <circle cx="42" cy="64" r="22" fill="#FFFFFF" />
      <path d="M42 50c7 8 10 13 10 18a10 10 0 0 1-20 0c0-5 3-10 10-18z" fill={`url(#${idDrop})`} />

      <circle cx="188" cy="198" r="18" fill="#FFFFFF" />
      <path
        d="M180 190l7 6-4 4 8 7M187 196l8-5"
        stroke="#E31837"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PartnerHeroBanner({
  asset,
  lang,
  onScrollToRegister,
}: {
  asset: PartnerAsset;
  lang: Language;
  onScrollToRegister: () => void;
}) {
  const partnerKey = asset.key;
  const brandStyle = PARTNER_THEME_PRESETS[asset.theme];
  const content = asset.locale[lang];
  const applyUrl = asset.applyUrl?.trim();
  const openInNewTab = asset.openInNewTab !== false;

  const badgeText =
    (lang === 'en' ? asset.heroBadge?.en || asset.heroBadge?.th : asset.heroBadge?.th) ||
    (partnerKey === 't1c'
      ? lang === 'th'
        ? 'เฉพาะลูกค้า Power Buy'
        : 'Power Buy Exclusive'
      : partnerKey === 'rabbit'
        ? lang === 'th'
          ? 'เฉพาะเพื่อน Rabbit Card'
          : 'Rabbit Card Exclusive'
        : partnerKey === 'siamchai'
          ? lang === 'th'
            ? 'เฉพาะลูกค้าผ่อนสยามชัย'
            : 'Siamchai Installment'
          : content.brandName);

  // T1C The 1 Charcoal & Crimson campaign banner (Power Buy purple reserved strictly for the exclusive badge)
  if (partnerKey === 't1c' && !asset.heroImageUrl) {
    return (
      <div className="relative">
        <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${brandStyle.heroCardGradient} text-white px-6 sm:px-10 pt-8 pb-16 sm:pb-20 shadow-xl`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-5 relative z-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#532196] to-[#6E2BB8] text-white border border-white/25 text-xs sm:text-sm font-bold shadow-md">
                <span className="w-5 h-5 rounded-full bg-white text-[#532196] inline-flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>{badgeText}</span>
              </span>

              <h1 className="text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.16] tracking-tight">
                <span className="text-[#FDE047] block">
                  {lang === 'th' ? 'อุ่นใจ 2 ต่อ' : 'Double Peace of Mind'}
                </span>
                <span className="block mt-1">
                  {lang === 'th' ? 'คุ้มครองมือถือ 1 ปี' : '1-Year Mobile Shield'}
                </span>
                <span className="mt-2 inline-flex flex-wrap items-center gap-2 text-[clamp(1.25rem,2.6vw,1.8rem)]">
                  <span>{lang === 'th' ? '+ รับคะแนน The' : '+ Earn The'}</span>
                  <span className="w-9 h-9 rounded-full bg-[#111111] border border-white/25 inline-flex flex-col items-center justify-center shrink-0">
                    <span className="text-white font-bold text-base leading-none">1</span>
                    <span className="w-3.5 h-[2.5px] bg-[#E31837] mt-0.5 block" />
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-[#FACC15] text-[#111111] font-extrabold text-lg sm:text-xl leading-tight shadow-xs">
                    ×10
                  </span>
                </span>
              </h1>

              {/* Contrasting The 1 Red-White Offer Ticket Box */}
              <div className="max-w-sm rounded-2xl overflow-hidden bg-white text-neutral-900 shadow-lg border border-white/20">
                <div className="bg-[#E31837] text-white text-center font-bold text-sm sm:text-base py-2 px-4">
                  {lang === 'th' ? 'มอบสิทธิ์! ประกันมือถือ' : 'Exclusive Smartphone Shield'}
                </div>
                <div className="p-4 sm:p-5 text-center space-y-3">
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-neutral-600">
                      {lang === 'th' ? 'คุ้มครอง' : 'Coverage Period'}
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#E31837] leading-tight">
                      {lang === 'th' ? '1 ปี' : '1 Year'}
                    </div>
                  </div>
                  {applyUrl ? (
                    <a
                      href={applyUrl}
                      target={openInNewTab ? '_blank' : undefined}
                      rel={openInNewTab ? 'noopener noreferrer' : undefined}
                      className="w-full min-h-[46px] px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E31837] to-[#BE122D] hover:from-[#BE122D] hover:to-[#990D23] text-white text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <span>{content.ctaRegister}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={onScrollToRegister}
                      className="w-full min-h-[46px] px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E31837] to-[#BE122D] hover:from-[#BE122D] hover:to-[#990D23] text-white text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <span>{content.ctaRegister}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center relative z-10">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#18181B] relative">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#27272A] to-[#09090B]">
                  <img
                    src="/partners/assets/t1c-hero.jpg"
                    alt={lang === 'th' ? 'คุ้มครองมือถือ Power Buy × The 1 × เจมาร์ท ประกันภัย' : 'Power Buy × The 1 Smartphone Protection'}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between gap-2 text-white">
                  <div>
                    <div className="text-xs font-bold text-[#FDE047]">
                      {lang === 'th' ? 'คุ้มครองครบ จอแตก โดนน้ำ' : 'Screen & Liquid Protection'}
                    </div>
                    <div className="text-[11px] text-white/85">
                      {lang === 'th' ? 'รับสิทธิ์พิเศษลูกค้า Power Buy' : 'Power Buy Exclusive Shield'}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#E31837] flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="sr-only" aria-hidden="true">
                <T1CPhoneShieldSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Rabbit Rewards rich orange-coral editorial + card banner matching image_46deb130.png
  if (partnerKey === 'rabbit' && !asset.heroImageUrl) {
    return (
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="text-xs font-medium text-neutral-500">
            {lang === 'th'
              ? 'ข้อความจาก LINE OA Rabbit Card › สิทธิพิเศษสำหรับคุณ'
              : 'LINE OA Rabbit Card › Exclusive Privilege'}
          </div>
          <p className="text-sm font-bold text-[#EA531C]">
            {lang === 'th' ? 'สิทธิพิเศษจาก Rabbit Rewards' : 'Rabbit Rewards Privilege'}
          </p>
          <h1 className="text-[clamp(1.75rem,3.6vw,2.6rem)] font-bold text-[#EA531C] leading-[1.2] text-balance">
            {content.headlinePrimary}
            {content.headlineSecondary && (
              <span className="block sm:inline sm:ml-2">{content.headlineSecondary}</span>
            )}
          </h1>
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-2xl">
            {content.offerNote}
          </p>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#F04D38] via-[#F97316] to-[#FBBF24] text-white flex flex-col sm:flex-row pb-10 sm:pb-12">
            <div className="hidden sm:flex w-12 bg-white/15 border-r border-white/25 items-center justify-center shrink-0">
              <span className="-rotate-90 text-xs font-bold tracking-[0.26em] uppercase text-white/95 whitespace-nowrap">
                insurance
              </span>
            </div>

            <div className="flex-1 p-6 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-4 text-center md:text-left">
                <span className="inline-block bg-white text-[#EA531C] text-xs font-bold px-4 py-1.5 rounded-full shadow-xs">
                  {badgeText}
                </span>

                <div className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  {lang === 'th' ? (
                    <>
                      ทำงานทุกวัน
                      <br />
                      ก็อุ่นใจ
                    </>
                  ) : (
                    <>
                      Work Every Day
                      <br />
                      With Peace of Mind
                    </>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-white/95 font-medium">
                  {lang === 'th'
                    ? 'มอบสิทธิ์! ประกันคนทำงาน จ่ายด้วยพอยต์ Rabbit'
                    : 'Worker Protection Payable With Rabbit Points'}
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
                  <span className="inline-block bg-white text-[#D94214] text-xs sm:text-sm font-bold px-4 py-2 rounded-full tabular-nums shadow-xs">
                    {content.offerDurationOrPrice}
                  </span>

                  {applyUrl ? (
                    <a
                      href={applyUrl}
                      target={openInNewTab ? '_blank' : undefined}
                      rel={openInNewTab ? 'noopener noreferrer' : undefined}
                      className="min-h-[42px] px-5 py-2 rounded-full bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-md transition-colors cursor-pointer"
                    >
                      <span>{content.ctaRegister}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={onScrollToRegister}
                      className="min-h-[42px] px-5 py-2 rounded-full bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-md transition-colors cursor-pointer"
                    >
                      <span>{content.ctaRegister}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              <div className="w-full md:w-[320px] shrink-0 flex items-center gap-3 justify-center">
                <div className="flex-1 rounded-2xl overflow-hidden border-2 border-white/55 shadow-2xl bg-[#D94214] relative aspect-[4/3]">
                  <img
                    src="/partners/assets/rabbit-hero.jpg"
                    alt={lang === 'th' ? 'คนทำงานเดินทางปลอดภัยกับ Rabbit Rewards × เจมาร์ท ประกันภัย' : 'Daily Commuter Protection'}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2.5 right-2.5 text-[11px] font-bold text-white leading-tight">
                    {lang === 'th' ? 'เดินทาง & ทำงานอุ่นใจทุกวัน' : 'Commute & Work Safely'}
                  </div>
                </div>
                <div className="hidden sm:flex shrink-0 rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-28 h-40 rounded-2xl bg-gradient-to-b from-[#EE4D38] via-[#FA7A1B] to-[#FACC15] border-2 border-white/50 shadow-xl p-2.5 flex flex-col justify-between relative overflow-hidden">
                    <div className="text-right text-white font-bold text-xs tracking-tight">
                      rabbit<sup className="text-[7px]">®</sup>
                    </div>
                    <svg viewBox="0 0 100 120" fill="none" className="w-16 h-20 mx-auto" aria-hidden="true">
                      <path
                        d="M36 12c-7 0-12 10-10 25 1 8 4 16 7 21-8 5-13 14-13 24 0 16 14 26 32 26s32-10 32-26c0-10-5-19-13-24 3-5 6-13 7-21 2-15-3-25-10-25-6 0-11 9-12 22-3-.4-6-.6-10-.6s-7 .2-10 .6C47 21 42 12 36 12Z"
                        fill="#FFF7ED"
                        fillOpacity="0.94"
                      />
                      <circle cx="52" cy="80" r="13" fill="#F97316" />
                    </svg>
                    <span className="-rotate-90 origin-bottom-left absolute left-2.5 bottom-2.5 text-white font-bold text-[11px] tracking-wider opacity-95">
                      adult
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Siamchai & Dynamic Partner #4, #5 rich gradient campaign banner + promo ticket box
  return (
    <div className="relative">
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${brandStyle.heroCardGradient} text-white px-6 sm:px-10 pt-8 pb-16 sm:pb-20 shadow-xl`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-5 relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-neutral-900 text-xs sm:text-sm font-bold shadow-xs">
              <span className={`w-5 h-5 rounded-full ${brandStyle.accentBg} text-white inline-flex items-center justify-center shrink-0`}>
                <Check className="w-3.5 h-3.5" />
              </span>
              <span>{badgeText}</span>
            </span>

            <h1 className="text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.18] tracking-tight text-balance">
              {content.headlinePrimary}
              {content.headlineSecondary && (
                <span className="block mt-1.5 text-white/90 font-semibold text-[clamp(1.25rem,2.5vw,1.8rem)]">
                  {content.headlineSecondary}
                </span>
              )}
            </h1>

            <div className="max-w-sm rounded-2xl overflow-hidden bg-white text-neutral-900 shadow-lg border border-white/25">
              <div className={`${brandStyle.accentBg} text-white text-center font-bold text-xs sm:text-sm py-2 px-4`}>
                {content.offerTitle}
              </div>
              <div className="p-4 sm:p-5 text-center space-y-3">
                {content.offerDurationOrPrice && (
                  <div className={`text-2xl sm:text-3xl font-extrabold ${brandStyle.accentText} leading-tight`}>
                    {content.offerDurationOrPrice}
                  </div>
                )}
                {applyUrl ? (
                  <a
                    href={applyUrl}
                    target={openInNewTab ? '_blank' : undefined}
                    rel={openInNewTab ? 'noopener noreferrer' : undefined}
                    className={`w-full min-h-[46px] px-6 py-2.5 rounded-full ${brandStyle.ctaGradient} text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer`}
                  >
                    <span>{content.ctaRegister}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={onScrollToRegister}
                    className={`w-full min-h-[46px] px-6 py-2.5 rounded-full ${brandStyle.ctaGradient} text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer`}
                  >
                    <span>{content.ctaRegister}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center relative z-10">
            {partnerKey === 'siamchai' && !asset.heroImageUrl ? (
              <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-white/25 shadow-2xl bg-[#0A2E66] relative">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src="/partners/assets/siamchai-hero.jpg"
                    alt="ลูกค้าสยามชัยพร้อมจักรยานไฟฟ้าและเครื่องใช้ไฟฟ้าที่ได้รับความคุ้มครอง"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#062A5C]/90 via-[#062A5C]/15 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between gap-2 text-white">
                  <div>
                    <div className="text-xs font-bold text-[#FFD23F]">SIAMCHAI × JAYMART</div>
                    <div className="text-[11px] text-white/90">
                      {lang === 'th'
                        ? 'เพิ่มความคุ้มครองในบิลค่างวด หรือจ่าย QR PromptPay'
                        : 'Add shield inside monthly bills or pay via QR PromptPay'}
                    </div>
                  </div>
                  <img
                    src="/assets/aistudio/image_d96b03bb_d96b03bb.png"
                    alt="สยามชัย"
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-lg object-cover border border-white/60 shrink-0"
                  />
                </div>
              </div>
            ) : asset.heroImageUrl ? (
              <img
                src={asset.heroImageUrl}
                alt={content.brandName}
                referrerPolicy="no-referrer"
                className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl object-cover border-2 border-white/80 shadow-2xl bg-white"
              />
            ) : asset.logoUrl ? (
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-white p-6 flex items-center justify-center shadow-2xl">
                <img
                  src={asset.logoUrl}
                  alt={content.brandName}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ) : (
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-white/15 border-2 border-white/35 flex flex-col items-center justify-center gap-3 p-6 text-center shadow-xl">
                <ShieldCheck className="w-16 h-16 text-white" />
                <span className="text-sm font-bold text-white">{content.brandName}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PartnerPrivilegeLanding({
  asset,
  lang,
  onBackHome,
  onNavigateClaim,
}: PartnerPrivilegeLandingProps) {
  const partnerKey = asset.key;
  const content = asset.locale[lang];
  const brandStyle = PARTNER_THEME_PRESETS[asset.theme];
  const applyUrl = asset.applyUrl?.trim();
  const openInNewTab = asset.openInNewTab !== false;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [refCode, setRefCode] = useState('');
  const [consent, setConsent] = useState(false);
  const [formError, setFormError] = useState('');
  const [ticketCode, setTicketCode] = useState('');

  useEffect(() => {
    setFullName('');
    setPhone('');
    setRefCode('');
    setConsent(false);
    setFormError('');
    setTicketCode('');
  }, [partnerKey]);

  const scrollToRegister = () => {
    const el = document.getElementById('partner-register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTerms = () => {
    const el = document.getElementById('partner-terms');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '');
    if (fullName.trim().length < 2 || cleanPhone.length < 9 || refCode.trim().length < 3 || !consent) {
      setFormError(content.registerForm.validationError);
      return;
    }
    setFormError('');
    const prefix = partnerKey.toUpperCase();
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setTicketCode(`JM-${prefix}-${randomNum}`);
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setRefCode('');
    setConsent(false);
    setFormError('');
    setTicketCode('');
  };

  const summaryPillars =
    content.highlights.length > 0
      ? content.highlights.slice(0, 3)
      : content.coverageItems.slice(0, 3).map((c) => ({ title: c.title, detail: c.benefit }));

  return (
    <main className={`min-h-screen ${brandStyle.pageBg} text-neutral-900 pt-16 md:pt-20`}>
      {/* Partner Top Sub-Navigation */}
      <div className="bg-white/90 backdrop-blur-xs border-b border-neutral-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <PartnerHeaderBrandLockup asset={asset} lang={lang} />

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onNavigateClaim}
              className="hidden sm:inline-flex min-h-[36px] px-3.5 py-1.5 rounded-full border border-neutral-200 hover:border-neutral-400 bg-white text-xs font-semibold text-neutral-700 transition-colors cursor-pointer"
            >
              {lang === 'th' ? 'ติดตามเคลม / เข้าสู่ระบบ' : 'Claims & Policy'}
            </button>
            <button
              type="button"
              onClick={onBackHome}
              className={`min-h-[36px] px-4 py-1.5 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 ${brandStyle.accentHoverText} transition-colors cursor-pointer`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{content.backHomeCta}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Centered Campaign Column */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-12 space-y-6 sm:space-y-8">
        {/* Hero Banner + Overlapping 3-Icon Highlight Card */}
        <motion.section
          key={`${partnerKey}-${lang}-hero`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <PartnerHeroBanner
            asset={asset}
            lang={lang}
            onScrollToRegister={scrollToRegister}
          />

          {summaryPillars.length > 0 && (
            <div className="relative z-20 -mt-9 sm:-mt-10 mx-2 sm:mx-6 bg-white rounded-2xl shadow-lg border border-neutral-200/80 grid grid-cols-3 divide-x divide-neutral-200/80 overflow-hidden">
              {summaryPillars.map((item, idx) => {
                const palette = SOFT_ICON_PALETTES[idx % SOFT_ICON_PALETTES.length];
                return (
                  <div key={item.title} className="p-3.5 sm:p-5 text-center flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${palette.wrap} ${palette.icon} flex items-center justify-center shrink-0`}>
                      {getCoverageIcon(item.title, idx, 'w-5 h-5')}
                    </div>
                    <div className="text-[11px] sm:text-sm font-bold text-neutral-900 leading-snug line-clamp-2">
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </motion.section>

        {/* Narrative Intro Copy Block */}
        <section className="bg-white rounded-2xl border border-neutral-200/80 shadow-xs p-5 sm:p-8 space-y-4">
          <div className="flex items-center gap-2.5">
            <span className={`w-1.5 h-6 rounded-full ${brandStyle.accentBg}`} aria-hidden="true" />
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950">{content.introTitle}</h2>
          </div>

          <div className="space-y-3 text-sm sm:text-base text-neutral-700 leading-[1.8]">
            {content.introParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-1 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100">
            <span className="text-xs sm:text-sm font-semibold text-neutral-600">
              {content.offerTitle}
            </span>
            {applyUrl ? (
              <a
                href={applyUrl}
                target={openInNewTab ? '_blank' : undefined}
                rel={openInNewTab ? 'noopener noreferrer' : undefined}
                className={`inline-flex items-center gap-1.5 text-sm font-bold ${brandStyle.accentText} underline underline-offset-4 cursor-pointer`}
              >
                <span>{content.ctaRegister}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                type="button"
                onClick={scrollToRegister}
                className={`inline-flex items-center gap-1.5 text-sm font-bold ${brandStyle.accentText} underline underline-offset-4 cursor-pointer`}
              >
                <span>{content.ctaRegister}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </section>

        {/* Coverage Card (Elevated Single Card + Soft Icon Tiles + Dashed Dividers + Notice Box) */}
        {content.coverageItems.length > 0 && (
          <section
            id="partner-coverage"
            className="bg-white rounded-2xl border border-neutral-200/80 shadow-xs p-5 sm:p-8 space-y-5 scroll-mt-24"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className={`w-1.5 h-6 rounded-full ${brandStyle.accentBg}`} aria-hidden="true" />
                <h2 className="text-lg sm:text-2xl font-bold text-neutral-950">
                  {content.coverageHeading}
                </h2>
              </div>
              {content.coverageSubheading && (
                <p className="text-xs sm:text-sm text-neutral-600 pl-4 leading-relaxed">
                  {content.coverageSubheading}
                </p>
              )}
            </div>

            {partnerKey === 'siamchai' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { src: '/partners/assets/siamchai-pa.jpg', title: lang === 'th' ? 'PA ขับขี่จักรยานไฟฟ้า' : 'E-Bike PA' },
                  { src: '/partners/assets/siamchai-fire.jpg', title: lang === 'th' ? 'ไฟไหม้เครื่องใช้ไฟฟ้า' : 'Appliance Fire' },
                  { src: '/partners/assets/siamchai-nat.jpg', title: lang === 'th' ? 'ภัยธรรมชาติน้ำท่วม' : 'Flood & Storm' },
                  { src: '/partners/assets/siamchai-cyber.jpg', title: lang === 'th' ? 'Cyber ภัยออนไลน์' : 'Cyber Shield' },
                ].map((card) => (
                  <div key={card.src} className="relative rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 aspect-[4/3]">
                    <img src={card.src} alt={card.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2.5 right-2.5 text-xs font-semibold text-white leading-tight">{card.title}</div>
                  </div>
                ))}
              </div>
            )}

            {partnerKey === 't1c' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { src: '/partners/assets/t1c-hero.jpg', title: lang === 'th' ? 'คุ้มครองมือถือจอแตก & โดนน้ำ' : 'Smartphone Screen & Liquid Shield' },
                  { src: '/partners/assets/t1c-appliance.jpg', title: lang === 'th' ? 'ดูแลเครื่องใช้ไฟฟ้า & อุปกรณ์ไอที' : 'Electronics & Smart Home Care' },
                ].map((card) => (
                  <div key={card.src} className="relative rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 aspect-[16/10]">
                    <img src={card.src} alt={card.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-xs sm:text-sm font-semibold text-white">{card.title}</div>
                  </div>
                ))}
              </div>
            )}

            {partnerKey === 'rabbit' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { src: '/partners/assets/rabbit-hero.jpg', title: lang === 'th' ? 'คุ้มครองการเดินทาง & อุบัติเหตุ' : 'Daily Commute & Accident Care' },
                  { src: '/partners/assets/rabbit-office.jpg', title: lang === 'th' ? 'ดูแล 5 โรคออฟฟิศซินโดรม' : '5 Office Syndrome Conditions' },
                ].map((card) => (
                  <div key={card.src} className="relative rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 aspect-[16/10]">
                    <img src={card.src} alt={card.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-xs sm:text-sm font-semibold text-white">{card.title}</div>
                  </div>
                ))}
              </div>
            )}

            <ul className="divide-y divide-dashed divide-neutral-200">
              {content.coverageItems.map((item, idx) => {
                const palette = SOFT_ICON_PALETTES[idx % SOFT_ICON_PALETTES.length];
                return (
                  <li key={item.title} className="py-4 first:pt-2 last:pb-2 flex items-start gap-3.5 sm:gap-4">
                    <div className={`w-11 h-11 rounded-xl ${palette.wrap} ${palette.icon} flex items-center justify-center shrink-0 mt-0.5`}>
                      {getCoverageIcon(item.title, idx, 'w-5 h-5')}
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-neutral-950">
                          {item.title}
                        </h3>
                        <span className={`text-xs sm:text-sm font-bold ${brandStyle.accentText} ${brandStyle.accentSoftBg} px-2.5 py-0.5 rounded-full tabular-nums shrink-0`}>
                          {item.benefit}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>

            {content.coverageFootnote && (
              <div className="rounded-xl bg-[#FFF4EE] border border-[#FED7AA] px-4 py-3 text-xs sm:text-sm text-[#9A3412] leading-relaxed">
                {content.coverageFootnote}
              </div>
            )}
          </section>
        )}

        {/* Qualifications Card (Tinted Rounded Sub-cards with Circular Numbered Badges) */}
        {content.qualifications.length > 0 && (
          <section className="bg-white rounded-2xl border border-neutral-200/80 shadow-xs p-5 sm:p-8 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className={`w-1.5 h-6 rounded-full ${brandStyle.accentBg}`} aria-hidden="true" />
              <h2 className="text-lg sm:text-2xl font-bold text-neutral-950">
                {content.qualificationsHeading}
              </h2>
            </div>

            <ol className="space-y-3">
              {content.qualifications.map((item, idx) => (
                <li
                  key={idx}
                  className={`${brandStyle.pageBg} rounded-xl p-4 flex items-start sm:items-center gap-3.5 text-sm sm:text-base text-neutral-800 leading-relaxed`}
                >
                  <span className="w-8 h-8 rounded-full bg-white shadow-xs font-bold text-sm text-neutral-900 flex items-center justify-center shrink-0 tabular-nums">
                    {idx + 1}
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Terms & Conditions Card */}
        {content.terms.length > 0 && (
          <section
            id="partner-terms"
            className="bg-white rounded-2xl border border-neutral-200/80 shadow-xs p-5 sm:p-8 space-y-5 scroll-mt-24"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className={`w-1.5 h-6 rounded-full ${brandStyle.accentBg}`} aria-hidden="true" />
                <h2 className="text-lg sm:text-2xl font-bold text-neutral-950">
                  {content.termsHeading}
                </h2>
              </div>

              <button
                type="button"
                onClick={onNavigateClaim}
                className={`text-xs sm:text-sm font-semibold ${brandStyle.accentText} underline underline-offset-4 cursor-pointer`}
              >
                {content.claimBridgeCta}
              </button>
            </div>

            <ol className="divide-y divide-neutral-100">
              {content.terms.map((term, idx) => (
                <li key={idx} className="py-3.5 first:pt-1 last:pb-1 flex items-start gap-3.5 text-xs sm:text-sm text-neutral-700 leading-[1.75]">
                  <span className={`w-7 h-7 rounded-full ${brandStyle.badgeSoft} font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 tabular-nums`}>
                    {idx + 1}
                  </span>
                  <span>{term}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Fallback Direct Form (only shown when applyUrl is omitted) */}
        {!applyUrl && (
          <section
            id="partner-register"
            className="bg-white rounded-2xl border border-neutral-200/80 shadow-xs p-5 sm:p-8 space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className={`w-1.5 h-6 rounded-full ${brandStyle.accentBg}`} aria-hidden="true" />
                <h2 className="text-lg sm:text-2xl font-bold text-neutral-950">
                  {content.registerForm.heading}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 pl-4">
                {content.registerForm.subheading}
              </p>
            </div>

            {ticketCode ? (
              <div className={`border ${brandStyle.accentBorder} p-6 space-y-4 bg-white rounded-xl`}>
                <div className="flex items-center gap-3 text-neutral-950">
                  <div className={`w-8 h-8 ${brandStyle.accentBg} text-white flex items-center justify-center shrink-0 rounded-full`}>
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">{content.registerForm.successTitle}</h3>
                </div>
                <div className={`${brandStyle.accentSoftBg} border ${brandStyle.accentSoftBorder} p-4 rounded-xl flex items-center justify-between gap-2`}>
                  <span className="text-xs text-neutral-700">{content.registerForm.ticketLabel}</span>
                  <span className="text-base font-mono font-bold text-neutral-950">{ticketCode}</span>
                </div>
                <p className="text-sm text-neutral-700">{content.registerForm.successBody}</p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="min-h-[42px] px-5 py-2 rounded-full border border-neutral-900 text-sm font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
                >
                  {content.registerForm.resetCta}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="partner-fullname" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                    {content.registerForm.fullNameLabel}
                  </label>
                  <input
                    id="partner-fullname"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={content.registerForm.fullNamePlaceholder}
                    className="w-full min-h-[44px] bg-white border border-neutral-300 focus:border-neutral-900 px-4 py-2.5 text-sm rounded-xl outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="partner-phone" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                      {content.registerForm.phoneLabel}
                    </label>
                    <input
                      id="partner-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={content.registerForm.phonePlaceholder}
                      className="w-full min-h-[44px] bg-white border border-neutral-300 focus:border-neutral-900 px-4 py-2.5 text-sm font-mono rounded-xl outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="partner-ref" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                      {content.registerForm.refLabel}
                    </label>
                    <input
                      id="partner-ref"
                      type="text"
                      value={refCode}
                      onChange={(e) => setRefCode(e.target.value)}
                      placeholder={content.registerForm.refPlaceholder}
                      className="w-full min-h-[44px] bg-white border border-neutral-300 focus:border-neutral-900 px-4 py-2.5 text-sm font-mono rounded-xl outline-none"
                    />
                  </div>
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className={`mt-1 w-4 h-4 shrink-0 cursor-pointer ${brandStyle.accentCheckbox}`}
                  />
                  <span className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {content.registerForm.consentLabel}
                  </span>
                </label>
                {formError && (
                  <p role="alert" className="text-xs sm:text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-2.5 rounded-xl">
                    {formError}
                  </p>
                )}
                <button
                  type="submit"
                  className={`w-full min-h-[48px] rounded-full ${brandStyle.ctaGradient} text-sm font-bold inline-flex items-center justify-center gap-2 cursor-pointer`}
                >
                  <span>{content.registerForm.submitCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </section>
        )}

        {/* Quick Policyholder / Claim Tracking Link */}
        <div className="text-center text-sm text-neutral-600 pt-1">
          <span>{lang === 'th' ? 'มีประกันแล้ว?' : 'Already insured?'} </span>
          <button
            type="button"
            onClick={onNavigateClaim}
            className={`font-bold ${brandStyle.accentText} underline underline-offset-4 cursor-pointer`}
          >
            {lang === 'th' ? 'เข้าสู่ระบบ / ติดตามเคลม ›' : 'Sign In / Track Claim ›'}
          </button>
        </div>
      </div>

      {/* Authoritative Dual-Logo Co-Branded Trust Footer (Matching Reference Screenshots) */}
      <footer className={`${brandStyle.footerBg} border-t border-neutral-200/90 py-10 pb-28 px-4 sm:px-6 text-center`}>
        <div className="max-w-2xl mx-auto space-y-5">
          {/* Two-Column Co-Branding Logos: Operated By | Underwritten By */}
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto items-start">
            <div className="space-y-2.5 flex flex-col items-center">
              <span className="text-xs text-neutral-500 font-medium">
                {lang === 'th' ? 'ดำเนินการโดย' : 'Operated by'}
              </span>
              <PartnerFooterCoBrandLogo asset={asset} lang={lang} />
            </div>

            <div className="space-y-2.5 flex flex-col items-center">
              <span className="text-xs text-neutral-500 font-medium">
                {lang === 'th' ? 'รับประกันภัยโดย' : 'Underwritten by'}
              </span>
              <div className="inline-flex items-center gap-2 justify-center h-11">
                <img
                  src="/assets/jaymart-logo-transparent.png"
                  alt="Jaymart Insurance"
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 object-contain rounded-full shadow-xs shrink-0"
                />
                <span className="font-bold text-sm sm:text-base text-neutral-900 tracking-tight text-left leading-tight">
                  Jaymart Insurance
                </span>
              </div>
            </div>
          </div>

          {/* Official Insurer Name & Regulatory Trust Block */}
          <div className="space-y-1.5 text-xs sm:text-sm text-neutral-700 pt-2">
            <p className="font-bold text-neutral-900">
              {lang === 'th'
                ? 'บริษัท เจมาร์ท ประกันภัย จำกัด (มหาชน)'
                : 'Jaymart Insurance Public Company Limited'}
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed">
              {lang === 'th'
                ? 'ได้รับอนุญาตประกอบธุรกิจประกันวินาศภัยภายใต้การกำกับดูแลของสำนักงาน คปภ.'
                : 'Licensed Non-Life Insurer regulated by the Office of Insurance Commission (OIC)'}
              <br />
              {lang === 'th'
                ? 'เสนอขายกรมธรรม์ผ่านช่องทางอิเล็กทรอนิกส์ตามหลักเกณฑ์สำนักงาน คปภ.'
                : 'Digital policy distribution compliant with OIC electronic channel standards'}
              <br />
              <span>{content.footerOperator}</span>
            </p>
          </div>

          {/* Legal Links & Contact */}
          <div className="space-y-2 text-xs text-neutral-600 pt-1">
            <p>
              <span>{lang === 'th' ? 'เรียนรู้เกี่ยวกับ ' : 'Learn more about '}</span>
              <button
                type="button"
                onClick={scrollToTerms}
                className="underline underline-offset-2 font-medium text-neutral-800 hover:text-neutral-950 cursor-pointer"
              >
                {lang === 'th' ? 'ข้อกำหนดและเงื่อนไข' : 'Terms & Conditions'}
              </button>
              <span>{lang === 'th' ? ' และ ' : ' and '}</span>
              <button
                type="button"
                onClick={onBackHome}
                className="underline underline-offset-2 font-medium text-neutral-800 hover:text-neutral-950 cursor-pointer"
              >
                {lang === 'th' ? 'นโยบายความเป็นส่วนตัว' : 'Privacy Policy'}
              </button>
            </p>
            <p className="text-neutral-500">
              {lang === 'th'
                ? 'ติดต่อเรา: Call Center 02-099-0555 · Marketinginno@jaymartinsurance.co.th'
                : 'Contact us: Call Center 02-099-0555 · Marketinginno@jaymartinsurance.co.th'}
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Action Bar (Primary Apply CTA Pill + Hotline Circle Button) */}
      <div className="fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="max-w-xl mx-auto flex items-center gap-3">
          {applyUrl ? (
            <a
              href={applyUrl}
              target={openInNewTab ? '_blank' : undefined}
              rel={openInNewTab ? 'noopener noreferrer' : undefined}
              className={`flex-1 min-h-[48px] px-6 py-2.5 rounded-full ${brandStyle.ctaGradient} text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer`}
            >
              <span>{content.ctaRegister}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <button
              type="button"
              onClick={scrollToRegister}
              className={`flex-1 min-h-[48px] px-6 py-2.5 rounded-full ${brandStyle.ctaGradient} text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer`}
            >
              <span>{content.ctaRegister}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          <a
            href="tel:020990555"
            aria-label={lang === 'th' ? 'โทรติดต่อ 02-099-0555' : 'Call 02-099-0555'}
            className={`w-12 h-12 rounded-full border-2 ${brandStyle.accentBorder} bg-white ${brandStyle.accentText} flex items-center justify-center shrink-0 hover:bg-neutral-50 transition-colors shadow-xs`}
          >
            <PhoneCall className="w-5 h-5" />
          </a>
        </div>
      </div>
    </main>
  );
}
