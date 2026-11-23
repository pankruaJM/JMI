import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Droplets, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import { Language } from '../data/content';
import { PARTNER_LANDINGS, PartnerKey } from '../data/partnerLandings';

interface PartnerPrivilegeLandingProps {
  partnerKey: PartnerKey;
  lang: Language;
  onBackHome: () => void;
  onNavigateClaim: () => void;
}

interface PartnerWhiteThemeTokens {
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
}

const WHITE_BRAND_STYLE_MAP: Record<PartnerKey, PartnerWhiteThemeTokens> = {
  // สยามชัย — แกะสีน้ำเงินสยามชัย (#1954B8) จากโลโก้สยามชัยบนพื้นขาว
  siamchai: {
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
  },
  // แรบบิท — แกะสีส้ม-คอรัล-เหลือง (#F25C2A / #EA531C) จากบัตร Rabbit Card
  rabbit: {
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
  },
  // T1C — แกะสีแดง The 1 (#E31837) + ดำชาร์โคล (#111111) จากโลโก้ The 1
  t1c: {
    accentText: 'text-[#E31837]',
    accentBg: 'bg-[#E31837]',
    accentBgDot: 'bg-[#E31837]',
    accentBorder: 'border-[#E31837]',
    accentBorderLeft: 'border-l-[#E31837]',
    accentSoftBg: 'bg-[#FFF4F5]',
    accentSoftBorder: 'border-[#FECDD3]',
    accentDecor: 'decoration-[#E31837]',
    accentHoverText: 'hover:text-[#E31837]',
    accentCheckbox: 'accent-[#E31837]',
    primaryButton: 'bg-[#E31837] hover:bg-[#BE122D] text-white',
    topStripBorder: 'border-t-4 border-t-[#E31837]',
  },
};

function PartnerBrandLogoLockup({ partnerKey }: { partnerKey: PartnerKey }) {
  if (partnerKey === 'siamchai') {
    return (
      <div className="inline-flex items-center gap-3">
        <img
          src="/assets/aistudio/image_d96b03bb.png"
          alt="สยามชัย SIAMCHAI SERVICE"
          referrerPolicy="no-referrer"
          className="h-11 w-11 sm:h-12 sm:w-12 object-cover rounded-lg border border-[#1954B8]/25 shadow-xs shrink-0"
        />
        <div className="leading-tight">
          <div className="text-sm sm:text-base font-bold text-[#1954B8]">สยามชัย</div>
          <div className="text-[10px] font-mono tracking-wider text-neutral-600 uppercase inline-flex items-center gap-1.5">
            <span>SIAMCHAI ×</span>
            <img
              src="/assets/jaymart-logo-transparent.png"
              alt="Jaymart Insurance"
              referrerPolicy="no-referrer"
              className="w-4 h-4 object-contain rounded-full inline-block"
            />
            <span>JAYMART</span>
          </div>
        </div>
      </div>
    );
  }

  if (partnerKey === 'rabbit') {
    return (
      <div className="inline-flex items-center gap-3">
        {/* Vector Rabbit Emblem & Wordmark matched to Rabbit Card branding */}
        <div className="h-11 sm:h-12 px-3 rounded-lg bg-gradient-to-br from-[#EE4D38] via-[#F97316] to-[#FBBF24] flex items-center gap-2 shadow-xs shrink-0">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            className="w-7 h-7 shrink-0"
            aria-hidden="true"
          >
            <path
              d="M11 4c-1.8 0-3 2.5-2.6 6.2.2 1.8.8 3.6 1.5 4.8-2.2 1.4-3.4 3.7-3.4 6.2 0 4.2 3.8 7 9.5 7s9.5-2.8 9.5-7c0-2.5-1.2-4.8-3.4-6.2.7-1.2 1.3-3 1.5-4.8C24 6.5 22.8 4 21 4c-1.7 0-2.8 2.2-3 5.5-.6-.1-1.3-.2-2-.2s-1.4.1-2 .2C13.8 6.2 12.7 4 11 4Z"
              fill="#FFFFFF"
            />
            <circle cx="16" cy="21" r="3.4" fill="#F97316" />
          </svg>
          <span className="text-white font-bold tracking-tight text-sm sm:text-base">
            rabbit <span className="font-normal opacity-95">rewards</span>
          </span>
        </div>
        <span className="text-xs font-mono text-neutral-600 hidden sm:inline-flex items-center gap-1.5">
          <span>×</span>
          <img
            src="/assets/jaymart-logo-transparent.png"
            alt="Jaymart Insurance"
            referrerPolicy="no-referrer"
            className="w-5 h-5 object-contain rounded-full"
          />
          <span>JAYMART</span>
        </span>
      </div>
    );
  }

  // T1C — Vector The 1 logo (black circle + white 1 + signature #E31837 red bar) extracted from reference image
  return (
    <div className="inline-flex items-center gap-3">
      <div className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-neutral-200 shadow-xs shrink-0">
        <span className="text-base sm:text-lg font-medium text-[#111111] tracking-tight">The</span>
        <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#111111] flex flex-col items-center justify-center shrink-0">
          <span className="text-white font-bold text-sm sm:text-base leading-none">1</span>
          <span className="w-3.5 h-[2.5px] bg-[#E31837] mt-0.5 block" />
        </span>
      </div>
      <div className="leading-tight">
        <div className="text-xs sm:text-sm font-bold text-[#111111]">The 1 × Power Buy</div>
        <div className="text-[10px] font-mono tracking-wider text-[#E31837] uppercase font-semibold inline-flex items-center gap-1.5">
          <img
            src="/assets/jaymart-logo-transparent.png"
            alt="Jaymart Insurance"
            referrerPolicy="no-referrer"
            className="w-4 h-4 object-contain rounded-full inline-block"
          />
          <span>JAYMART INSURANCE</span>
        </div>
      </div>
    </div>
  );
}

function PartnerHeroGimmickCard({
  partnerKey,
  lang,
}: {
  partnerKey: PartnerKey;
  lang: Language;
}) {
  if (partnerKey === 'siamchai') {
    return (
      <div className="rounded-2xl md:rounded-none overflow-hidden border border-[#1954B8]/25 bg-[#1954B8] text-white shadow-sm">
        <div className="relative p-6 sm:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] bg-gradient-to-br from-[#1E62D0] via-[#1954B8] to-[#113A82]">
          {/* Subtle architectural grid lines */}
          <div className="flex items-start justify-between gap-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#1954B8] text-xs font-bold">
              <Zap className="w-3.5 h-3.5" />
              <span>{lang === 'th' ? 'เฉพาะลูกค้าผ่อนสยามชัย' : 'Siamchai Installment'}</span>
            </span>
            <span className="text-xs font-mono text-white/85 uppercase tracking-wider">
              SIAMCHAI × JMI
            </span>
          </div>

          <div className="my-6 flex flex-col sm:flex-row items-center gap-6">
            <img
              src="/assets/aistudio/image_d96b03bb.png"
              alt="สยามชัย SIAMCHAI SERVICE"
              className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-2xl border-2 border-white/80 shadow-md shrink-0"
            />
            <div className="space-y-2 text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-bold leading-tight">
                {lang === 'th' ? 'เพิ่มความคุ้มครองได้ในค่างวด' : 'Add Shield Inside Installments'}
              </div>
              <p className="text-sm text-white/90">
                {lang === 'th'
                  ? 'เริ่มแค่ +฿5/เดือน · ไม่ต้องใช้บัตรเครดิต'
                  : 'From +฿5/month · No credit card needed'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/20 text-center text-[11px] sm:text-xs font-medium">
            <div className="bg-white/12 px-2 py-2 rounded-xl md:rounded-none">
              {lang === 'th' ? 'PA จักรยานไฟฟ้า' : 'E-Bike PA'}
            </div>
            <div className="bg-white/12 px-2 py-2 rounded-xl md:rounded-none">
              {lang === 'th' ? 'เครื่องใช้ไฟฟ้า' : 'Appliances'}
            </div>
            <div className="bg-white/12 px-2 py-2 rounded-xl md:rounded-none">
              {lang === 'th' ? 'Cyber ออนไลน์' : 'Cyber Shield'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (partnerKey === 'rabbit') {
    // Reproduces the exact Rabbit Card gradient & diagonal hatched "insurance" banner from reference image
    return (
      <div className="rounded-2xl overflow-hidden shadow-md border border-[#FED7AA] bg-gradient-to-br from-[#F04D38] via-[#F97316] to-[#FBBF24] text-white">
        <div className="flex min-h-[280px] sm:min-h-[320px]">
          {/* Left vertical hatched stripe gimmick ("insurance") */}
          <div className="w-10 sm:w-12 bg-white/15 border-r border-white/25 flex items-center justify-center shrink-0 relative overflow-hidden">
            <span className="-rotate-90 text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-white/95 whitespace-nowrap">
              insurance
            </span>
          </div>

          {/* Main Gradient Content + Tilted Rabbit Card SVG */}
          <div className="flex-1 p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-3.5 text-center sm:text-left">
              <span className="inline-block bg-white text-[#EA531C] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs">
                {lang === 'th' ? 'เฉพาะเพื่อน Rabbit Card' : 'Rabbit Card Exclusive'}
              </span>

              <div className="text-2xl sm:text-3xl font-bold leading-[1.15]">
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

              <p className="text-xs sm:text-sm text-white/95">
                {lang === 'th'
                  ? 'มอบสิทธิ์! ประกันคนทำงาน จ่ายด้วยพอยต์ Rabbit'
                  : 'Worker protection payable with Rabbit Points'}
              </p>

              <span className="inline-block bg-white text-[#D94214] text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full tabular-nums shadow-xs">
                {lang === 'th' ? '180 พอยต์ / สัปดาห์' : '180 Points / Week'}
              </span>
            </div>

            {/* Tilted Vector Rabbit Card SVG */}
            <div className="shrink-0 rotate-6 hover:rotate-2 transition-transform duration-300">
              <div className="w-36 sm:w-40 h-52 sm:h-56 rounded-2xl bg-gradient-to-b from-[#EE4D38] via-[#FA7A1B] to-[#FACC15] border border-white/40 shadow-lg p-3.5 flex flex-col justify-between relative overflow-hidden">
                <div className="text-right text-white font-bold text-sm tracking-tight">
                  rabbit<sup className="text-[8px]">®</sup>
                </div>
                <svg
                  viewBox="0 0 100 120"
                  fill="none"
                  className="w-24 h-28 mx-auto"
                  aria-hidden="true"
                >
                  <path
                    d="M36 12c-7 0-12 10-10 25 1 8 4 16 7 21-8 5-13 14-13 24 0 16 14 26 32 26s32-10 32-26c0-10-5-19-13-24 3-5 6-13 7-21 2-15-3-25-10-25-6 0-11 9-12 22-3-.4-6-.6-10-.6s-7 .2-10 .6C47 21 42 12 36 12Z"
                    fill="#FFF7ED"
                    fillOpacity="0.92"
                  />
                  <circle cx="52" cy="80" r="13" fill="#F97316" />
                </svg>
                <span className="-rotate-90 origin-bottom-left absolute left-3 bottom-3 text-white font-bold text-sm tracking-wider opacity-95">
                  adult
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // T1C — Clean White + Jet Black + Signature The 1 Red (#E31837) Smartphone Shield Card
  return (
    <div className="rounded-2xl md:rounded-none overflow-hidden border border-[#E31837]/25 bg-white shadow-sm">
      <div className="h-2 bg-[#E31837] w-full" />
      <div className="p-6 sm:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[312px] bg-gradient-to-br from-white via-[#FFF7F8] to-[#FFEBEF]">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] text-white text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#E31837]" />
            <span>{lang === 'th' ? 'เฉพาะลูกค้า Power Buy' : 'Power Buy Exclusive'}</span>
          </span>

          <div className="inline-flex items-center gap-1.5">
            <span className="w-7 h-7 rounded-full bg-[#111111] text-white font-bold text-xs flex flex-col items-center justify-center">
              <span className="leading-none">1</span>
              <span className="w-3 h-[2px] bg-[#E31837] mt-0.5 block" />
            </span>
            <span className="text-sm font-mono font-bold text-[#E31837]">×10</span>
          </div>
        </div>

        <div className="my-5 flex flex-col sm:flex-row items-center gap-6">
          {/* Sleek Flagship Smartphone + Crimson Protection Shield */}
          <div className="w-28 h-40 rounded-2xl bg-[#111111] border-2 border-neutral-800 p-2.5 flex flex-col items-center justify-between shadow-md shrink-0 relative">
            <div className="w-8 h-1.5 rounded-full bg-neutral-700" />
            <div className="w-12 h-12 rounded-full bg-[#E31837] flex items-center justify-center text-white shadow-sm">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="w-10 h-1 rounded-full bg-white/40" />
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-bold text-[#111111] leading-tight">
              {lang === 'th' ? 'อุ่นใจ 2 ต่อ คุ้มครองมือถือ 1 ปี' : 'Double Peace of Mind: 1-Year Mobile Shield'}
            </div>
            <p className="text-sm text-neutral-700">
              {lang === 'th'
                ? 'ลงทะเบียนภายใน 2 ชม. หลังซื้อเครื่อง + รับคะแนน The 1 x10'
                : 'Register within 2 hours of purchase + earn 10x The 1 Points'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#FECDD3] text-center text-[11px] sm:text-xs font-semibold text-[#111111]">
          <div className="bg-white border border-neutral-200 px-2 py-2 rounded-xl md:rounded-none inline-flex items-center justify-center gap-1">
            <Smartphone className="w-3.5 h-3.5 text-[#E31837] shrink-0" />
            <span>{lang === 'th' ? 'จอแตก' : 'Screen'}</span>
          </div>
          <div className="bg-white border border-neutral-200 px-2 py-2 rounded-xl md:rounded-none inline-flex items-center justify-center gap-1">
            <Droplets className="w-3.5 h-3.5 text-[#E31837] shrink-0" />
            <span>{lang === 'th' ? 'โดนน้ำ' : 'Liquid'}</span>
          </div>
          <div className="bg-white border border-neutral-200 px-2 py-2 rounded-xl md:rounded-none inline-flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E31837] shrink-0" />
            <span>{lang === 'th' ? 'เสียหาย' : 'Damage'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PartnerPrivilegeLanding({
  partnerKey,
  lang,
  onBackHome,
  onNavigateClaim,
}: PartnerPrivilegeLandingProps) {
  const asset = PARTNER_LANDINGS[partnerKey];
  const content = asset.locale[lang];
  const brandStyle = WHITE_BRAND_STYLE_MAP[partnerKey];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [refCode, setRefCode] = useState('');
  const [consent, setConsent] = useState(false);
  const [formError, setFormError] = useState('');
  const [ticketCode, setTicketCode] = useState('');

  // Reset form state whenever switching among the 3 partner URLs
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

  const scrollToCoverage = () => {
    const el = document.getElementById('partner-coverage');
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

  return (
    <main className={`bg-white text-neutral-900 pt-16 md:pt-20 ${brandStyle.topStripBorder}`}>
      {/* Top Partner Return & Official Brand Logo Bar */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
          <PartnerBrandLogoLockup partnerKey={partnerKey} />

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onBackHome}
              className={`min-h-[40px] px-4 py-1.5 border border-neutral-300 hover:border-neutral-900 rounded-full md:rounded-none inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-800 ${brandStyle.accentHoverText} transition-colors cursor-pointer`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{content.backHomeCta}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section 1: Pure White Hero + Brand Gimmick Banner */}
      <section className="py-12 md:py-20 px-5 sm:px-8 lg:px-12 border-b border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Copy + Branded Offer Box */}
          <motion.div
            key={`${partnerKey}-${lang}-copy`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <p className={`text-xs font-mono uppercase tracking-[0.14em] font-bold ${brandStyle.accentText}`}>
              {content.kicker}
            </p>

            <h1 className="text-[clamp(2rem,4.4vw,3.5rem)] font-bold text-neutral-950 leading-[1.14] text-balance">
              {content.headlinePrimary}
              {content.headlineSecondary && (
                <span className="block mt-2 text-neutral-800 font-semibold text-[clamp(1.45rem,3vw,2.35rem)]">
                  {content.headlineSecondary}
                </span>
              )}
            </h1>

            {/* Offer Highlight Box with Brand Soft Tint */}
            <div className={`border ${brandStyle.accentSoftBorder} border-l-4 ${brandStyle.accentBorderLeft} ${brandStyle.accentSoftBg} p-5 sm:p-6 space-y-2 rounded-2xl md:rounded-none`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-sm sm:text-base font-bold text-neutral-950">
                  {content.offerTitle}
                </span>
                <span className={`text-sm sm:text-base font-mono font-bold tabular-nums ${brandStyle.accentText}`}>
                  {content.offerDurationOrPrice}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">{content.offerNote}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                type="button"
                onClick={scrollToRegister}
                className={`min-h-[48px] px-7 py-3 rounded-full md:rounded-none ${brandStyle.primaryButton} text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs`}
              >
                <span>{content.ctaRegister}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={scrollToCoverage}
                className="min-h-[48px] px-6 py-3 rounded-full md:rounded-none border border-neutral-300 hover:border-neutral-900 bg-white text-neutral-900 text-sm font-medium inline-flex items-center justify-center transition-colors cursor-pointer"
              >
                {content.ctaDetails}
              </button>
            </div>
          </motion.div>

          {/* Right Partner Brand Gimmick Visual Card */}
          <motion.div
            key={`${partnerKey}-visual`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <PartnerHeroGimmickCard partnerKey={partnerKey} lang={lang} />
          </motion.div>
        </div>

        {/* 3-Column Highlights Strip */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 border border-neutral-200 divide-y md:divide-y-0 md:divide-x divide-neutral-200 rounded-2xl md:rounded-none overflow-hidden bg-white shadow-xs">
          {content.highlights.map((item, idx) => (
            <div key={item.title} className="p-6 space-y-2 bg-white">
              <span className={`text-xs font-mono font-bold ${brandStyle.accentText}`}>
                {String(idx + 1).padStart(2, '0')}.
              </span>
              <h2 className="text-base sm:text-lg font-bold text-neutral-950">{item.title}</h2>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Intro & Register Callout Band */}
      <section className="py-16 md:py-20 px-5 sm:px-8 lg:px-12 border-b border-neutral-200 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 space-y-2">
            <p className={`text-xs font-mono uppercase tracking-wider font-bold ${brandStyle.accentText}`}>
              {content.brandName}
            </p>
            <h2 className="text-2xl font-bold text-neutral-950 leading-snug">{content.introTitle}</h2>
          </div>

          <div className="md:col-span-8 space-y-4">
            {content.introParagraphs.map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-base text-neutral-800 leading-[1.8]">
                {paragraph}
              </p>
            ))}

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToRegister}
                className={`min-h-[42px] px-5 py-2 md:px-0 md:py-0 rounded-full md:rounded-none border border-neutral-300 md:border-none text-sm font-semibold text-neutral-950 underline underline-offset-8 ${brandStyle.accentDecor} ${brandStyle.accentHoverText} transition-colors inline-flex items-center gap-2 cursor-pointer`}
              >
                <span>{content.ctaRegister}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Coverage Details Grid (4 Exact Benefits from HTML) */}
      <section
        id="partner-coverage"
        className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 border-b border-neutral-200 bg-neutral-50/70 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950">
              {content.coverageHeading}
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {content.coverageSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.coverageItems.map((item, idx) => (
              <div
                key={item.title}
                className="border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between gap-4 bg-white hover:border-neutral-400 transition-colors rounded-2xl md:rounded-none shadow-xs"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <span className={`text-xs font-mono font-bold ${brandStyle.accentText}`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-xs sm:text-sm font-mono font-bold ${brandStyle.accentText} ${brandStyle.accentSoftBg} border ${brandStyle.accentSoftBorder} px-3 py-1 tabular-nums rounded-full md:rounded-none`}>
                      {item.benefit}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 pt-1">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-neutral-700 leading-relaxed">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className={`text-xs sm:text-sm text-neutral-700 border-l-2 ${brandStyle.accentBorderLeft} pl-4`}>
            {content.coverageFootnote}
          </p>
        </div>
      </section>

      {/* Section 4: Qualifications / Eligibility (3 Numbered Steps/Criteria) */}
      <section className="py-16 md:py-20 px-5 sm:px-8 lg:px-12 border-b border-neutral-200 bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950">
            {content.qualificationsHeading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.qualifications.map((item, idx) => (
              <div key={idx} className="border border-neutral-200 p-6 space-y-3 bg-white rounded-2xl md:rounded-none shadow-xs">
                <div className="flex items-center justify-between">
                  <span className={`text-xl font-mono font-bold ${brandStyle.accentText}`}>
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <CheckCircle2 className={`w-4 h-4 ${brandStyle.accentText}`} />
                </div>
                <p className="text-sm sm:text-base text-neutral-800 leading-[1.75]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Numbered Terms & Conditions (9 Items) */}
      <section className="py-16 md:py-20 px-5 sm:px-8 lg:px-12 border-b border-neutral-200 bg-neutral-50/70">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950">{content.termsHeading}</h2>
            <button
              type="button"
              onClick={onNavigateClaim}
              className={`min-h-[40px] px-4 py-1.5 md:px-0 md:py-0 rounded-full md:rounded-none border border-neutral-300 md:border-none bg-white md:bg-transparent text-xs sm:text-sm font-medium text-neutral-900 underline underline-offset-4 ${brandStyle.accentDecor} ${brandStyle.accentHoverText} cursor-pointer text-left sm:text-right self-start sm:self-auto`}
            >
              {content.claimBridgeCta}
            </button>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.terms.map((term, idx) => (
              <li
                key={idx}
                className="border border-neutral-200 bg-white p-4 sm:p-5 flex items-start gap-3 text-xs sm:text-sm text-neutral-800 leading-[1.75] rounded-2xl md:rounded-none"
              >
                <span className={`font-mono font-bold shrink-0 tabular-nums ${brandStyle.accentText}`}>
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <span>{term}</span>
              </li>
            ))}
          </ol>

          <div className="border border-neutral-200 bg-white p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl md:rounded-none">
            <p className="text-xs sm:text-sm text-neutral-800">{content.claimBridgeText}</p>
            <button
              type="button"
              onClick={onNavigateClaim}
              className="min-h-[42px] px-5 py-2 rounded-full md:rounded-none border border-neutral-300 hover:border-neutral-900 bg-white text-xs sm:text-sm font-semibold text-neutral-900 whitespace-nowrap cursor-pointer"
            >
              {content.claimBridgeCta}
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Inline Privilege Registration Form on Clean White */}
      <section
        id="partner-register"
        className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 border-b border-neutral-200 bg-white scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-3">
            <p className={`text-xs font-mono uppercase tracking-[0.14em] font-bold ${brandStyle.accentText}`}>
              {content.coBrandBadge}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950">
              {content.registerForm.heading}
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {content.registerForm.subheading}
            </p>
          </div>

          {ticketCode ? (
            <div className={`border ${brandStyle.accentBorder} p-6 sm:p-8 space-y-5 bg-white rounded-2xl md:rounded-none shadow-sm`}>
              <div className="flex items-center gap-3 text-neutral-950">
                <div className={`w-8 h-8 ${brandStyle.primaryButton} flex items-center justify-center shrink-0 rounded-full md:rounded-none`}>
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">{content.registerForm.successTitle}</h3>
              </div>

              <div className={`border ${brandStyle.accentSoftBorder} ${brandStyle.accentSoftBg} p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl md:rounded-none`}>
                <span className="text-xs text-neutral-700">{content.registerForm.ticketLabel}</span>
                <span className="text-base sm:text-lg font-mono font-bold text-neutral-950 tracking-wider tabular-nums">
                  {ticketCode}
                </span>
              </div>

              <p className="text-sm text-neutral-800 leading-relaxed">
                {content.registerForm.successBody}
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleReset}
                  className="min-h-[44px] px-5 py-2.5 rounded-full md:rounded-none border border-neutral-900 text-sm font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
                >
                  {content.registerForm.resetCta}
                </button>
                <button
                  type="button"
                  onClick={onBackHome}
                  className="min-h-[44px] px-5 py-2.5 rounded-full md:rounded-none border border-neutral-300 hover:border-neutral-900 text-sm font-medium text-neutral-800 transition-colors cursor-pointer"
                >
                  {content.backHomeCta}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-neutral-200 p-6 sm:p-8 space-y-5 bg-white rounded-2xl md:rounded-none shadow-xs">
              <div>
                <label
                  htmlFor="partner-fullname"
                  className="block text-xs font-semibold text-neutral-800 mb-2"
                >
                  {content.registerForm.fullNameLabel}
                </label>
                <input
                  id="partner-fullname"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={content.registerForm.fullNamePlaceholder}
                  className="w-full min-h-[44px] bg-white border border-neutral-300 focus:border-neutral-900 px-4 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 outline-none rounded-xl md:rounded-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="partner-phone"
                    className="block text-xs font-semibold text-neutral-800 mb-2"
                  >
                    {content.registerForm.phoneLabel}
                  </label>
                  <input
                    id="partner-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={content.registerForm.phonePlaceholder}
                    className="w-full min-h-[44px] bg-white border border-neutral-300 focus:border-neutral-900 px-4 py-2.5 text-sm font-mono text-neutral-950 placeholder:text-neutral-400 outline-none rounded-xl md:rounded-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="partner-ref"
                    className="block text-xs font-semibold text-neutral-800 mb-2"
                  >
                    {content.registerForm.refLabel}
                  </label>
                  <input
                    id="partner-ref"
                    type="text"
                    value={refCode}
                    onChange={(e) => setRefCode(e.target.value)}
                    placeholder={content.registerForm.refPlaceholder}
                    className="w-full min-h-[44px] bg-white border border-neutral-300 focus:border-neutral-900 px-4 py-2.5 text-sm font-mono text-neutral-950 placeholder:text-neutral-400 outline-none rounded-xl md:rounded-none"
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
                <span className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                  {content.registerForm.consentLabel}
                </span>
              </label>

              {formError && (
                <p
                  role="alert"
                  className={`text-xs sm:text-sm text-neutral-950 border ${brandStyle.accentBorder} ${brandStyle.accentSoftBg} px-4 py-2.5 rounded-xl md:rounded-none`}
                >
                  {formError}
                </p>
              )}

              <button
                type="submit"
                className={`w-full min-h-[48px] rounded-full md:rounded-none ${brandStyle.primaryButton} text-sm font-bold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs`}
              >
                <span>{content.registerForm.submitCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Partner Co-Branded Clean Light Footer Strip */}
      <footer className="bg-neutral-50 border-t border-neutral-200 py-10 px-5 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-neutral-700">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>{content.footerOperator}</span>
            <span className="text-neutral-300" aria-hidden="true">
              |
            </span>
            <span className="font-semibold text-neutral-950">{content.footerInsurer}</span>
          </div>
          <button
            type="button"
            onClick={onBackHome}
            className={`min-h-[40px] px-4 py-1.5 md:px-0 md:py-0 rounded-full md:rounded-none border border-neutral-300 md:border-none text-xs font-mono text-neutral-900 underline underline-offset-4 ${brandStyle.accentHoverText} cursor-pointer`}
          >
            {content.backHomeCta}
          </button>
        </div>
      </footer>
    </main>
  );
}
