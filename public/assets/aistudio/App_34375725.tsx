import React, { useEffect, useState } from 'react';
import { APIProvider } from '@vis.gl/react-google-maps';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  Copy,
  ExternalLink,
  FileCheck2,
  Gift,
  Globe,
  Mail,
  Menu,
  MessageCircle,
  PhoneCall,
  Search,
  ShieldAlert,
  ShieldCheck,
  ShieldPlus,
  TrendingUp,
  X,
} from 'lucide-react';
import { JaymartOfficeMap } from './components/JaymartOfficeMap';
import { OnlineApplyPortal, PortalScreen } from './components/OnlineApplyPortal';
import { PartnerPrivilegeLanding } from './components/PartnerPrivilegeLanding';
import { InsightArticle, Language, SamplePolicyRecord, SITE_CONTENT } from './data/content';
import { LINE_OA_REWARD_HANDLE, LINE_OA_REWARD_URL } from './data/onlinePortalData';
import { isPartnerKey, PARTNER_MENU_ITEMS, PartnerKey } from './data/partnerLandings';

const MAPS_API_KEY = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined) ?? '';

interface OnlinePortalRoute {
  mid?: string | null;
  name?: string | null;
  screen?: PortalScreen;
  product?: string | null;
  showSimulator?: boolean;
}

function getPartnerFromUrl(): PartnerKey | null {
  if (typeof window === 'undefined') return null;
  const param = new URLSearchParams(window.location.search).get('partner');
  return isPartnerKey(param) ? param : null;
}

function getOnlinePortalRouteFromUrl(): OnlinePortalRoute | null {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page');
  const p = params.get('p');
  const mid = params.get('mid') || params.get('userId');
  const name = params.get('name') || params.get('displayName');
  const screenParam = params.get('screen');
  const richmenu = params.get('richmenu');

  const validScreens: PortalScreen[] = ['pa-home', 'pa-plans', 'jpoint', 'policies'];
  const screen = validScreens.includes(screenParam as PortalScreen)
    ? (screenParam as PortalScreen)
    : undefined;

  if (page === 'apply-online' || page === 'index' || Boolean(p) || Boolean(mid) || Boolean(screen)) {
    return {
      mid,
      name,
      screen,
      product: p,
      showSimulator: richmenu === '1',
    };
  }
  return null;
}

function TriangleEmblem({
  className = 'w-8 h-8',
}: {
  className?: string;
  variant?: 'dark' | 'light';
}) {
  return (
    <img
      src="/assets/jaymart-logo-transparent.png"
      alt="Jaymart Insurance"
      referrerPolicy="no-referrer"
      className={`${className} object-contain rounded-full select-none shrink-0`}
    />
  );
}

const REVEAL_VIEWPORT = { once: true, amount: 0.15 } as const;

export default function App() {
  const [lang, setLang] = useState<Language>('th');
  const [activePartner, setActivePartner] = useState<PartnerKey | null>(() => getPartnerFromUrl());
  const [activeApplyPortal, setActiveApplyPortal] = useState<OnlinePortalRoute | null>(() =>
    getOnlinePortalRouteFromUrl()
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [privilegesOpen, setPrivilegesOpen] = useState(false);
  const [privilegesPanelOpen, setPrivilegesPanelOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('motor');
  const [billingMode, setBillingMode] = useState<'annual' | 'monthly'>('annual');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);
  const [quotaExceeded, setQuotaExceeded] = useState(false);
  const [lineCopied, setLineCopied] = useState(false);
  const [rewardLineCopied, setRewardLineCopied] = useState(false);

  // Claim Filing state
  const [selectedClaimType, setSelectedClaimType] = useState<number>(0);
  const [claimPolicyOrPlate, setClaimPolicyOrPlate] = useState('');
  const [claimReporterName, setClaimReporterName] = useState('');
  const [claimReporterPhone, setClaimReporterPhone] = useState('');
  const [claimIncidentDetail, setClaimIncidentDetail] = useState('');
  const [claimError, setClaimError] = useState('');
  const [claimTicket, setClaimTicket] = useState('');

  // Policy Lookup state
  const [lookupPolicyInput, setLookupPolicyInput] = useState('');
  const [lookupPhoneInput, setLookupPhoneInput] = useState('');
  const [lookupError, setLookupError] = useState('');
  const [lookupResult, setLookupResult] = useState<SamplePolicyRecord | null>(null);

  // Contact / Digital Application Form state
  const [fullName, setFullName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [selectedPlanName, setSelectedPlanName] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = SITE_CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleQuotaExceeded = () => setQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    return () => window.removeEventListener('gmp-quota-exceeded', handleQuotaExceeded);
  }, []);

  useEffect(() => {
    const firstTier = t.solutionLab.categories[0]?.tiers[1] ?? t.solutionLab.categories[0]?.tiers[0];
    if (firstTier && !selectedPlanName) {
      setSelectedPlanName(`${t.solutionLab.categories[0].title} — ${firstTier.name}`);
    }
  }, [lang, t, selectedPlanName]);

  useEffect(() => {
    const onPopState = () => {
      setActivePartner(getPartnerFromUrl());
      setActiveApplyPortal(getOnlinePortalRouteFromUrl());
      setMenuOpen(false);
      setPrivilegesPanelOpen(false);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveArticle(null);
        setMenuOpen(false);
        setPrivilegesPanelOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const currentCategory =
    t.solutionLab.categories.find((c) => c.id === selectedCategoryId) ??
    t.solutionLab.categories[0];

  const allPlanOptions = t.solutionLab.categories.flatMap((cat) =>
    cat.tiers.map((tier) => `${cat.title} — ${tier.name}`)
  );

  const toggleLanguage = () => {
    setLang((prev) => {
      const next: Language = prev === 'th' ? 'en' : 'th';
      const nextContent = SITE_CONTENT[next];
      const nextCat =
        nextContent.solutionLab.categories.find((c) => c.id === selectedCategoryId) ??
        nextContent.solutionLab.categories[0];
      if (nextCat && nextCat.tiers[0]) {
        setSelectedPlanName(`${nextCat.title} — ${nextCat.tiers[0].name}`);
      }
      if (lookupResult) {
        setLookupResult(nextContent.policyLookup.sampleRecord);
      }
      return next;
    });
  };

  const handleCopyLineId = async () => {
    try {
      await navigator.clipboard.writeText(t.contact.lineId);
      setLineCopied(true);
      setTimeout(() => setLineCopied(false), 2000);
    } catch {
      setLineCopied(true);
      setTimeout(() => setLineCopied(false), 2000);
    }
  };

  const handleCopyRewardLineId = async () => {
    try {
      await navigator.clipboard.writeText(LINE_OA_REWARD_HANDLE);
      setRewardLineCopied(true);
      setTimeout(() => setRewardLineCopied(false), 2000);
    } catch {
      setRewardLineCopied(true);
      setTimeout(() => setRewardLineCopied(false), 2000);
    }
  };

  const handleSelectPlan = (categoryTitle: string, tierName: string) => {
    setSelectedPlanName(`${categoryTitle} — ${tierName}`);
    setFormSubmitted(false);
    setFormError('');
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmitClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      claimPolicyOrPlate.trim().length < 3 ||
      claimReporterName.trim().length < 2 ||
      claimReporterPhone.trim().length < 8
    ) {
      setClaimError(t.claimCenter.validationError);
      return;
    }
    setClaimError('');
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    setClaimTicket(`JM-CLM-${randomCode}`);
  };

  const handleResetClaim = () => {
    setClaimPolicyOrPlate('');
    setClaimReporterName('');
    setClaimReporterPhone('');
    setClaimIncidentDetail('');
    setClaimError('');
    setClaimTicket('');
  };

  const handleLoadSamplePolicy = () => {
    setLookupPolicyInput(t.policyLookup.sampleRecord.policyNo);
    setLookupPhoneInput('0812345678');
    setLookupError('');
    setLookupResult(t.policyLookup.sampleRecord);
  };

  const handlePolicyLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPolicy = lookupPolicyInput.trim();
    const cleanPhone = lookupPhoneInput.replace(/\D/g, '');
    if (cleanPolicy.length < 4 || cleanPhone.length < 9) {
      setLookupResult(null);
      setLookupError(t.policyLookup.validationError);
      return;
    }
    setLookupError('');
    setLookupResult({
      ...t.policyLookup.sampleRecord,
      policyNo: cleanPolicy.toUpperCase(),
    });
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = fullName.trim();
    const trimmedContact = contactInfo.trim();

    if (trimmedName.length < 2 || trimmedContact.length < 6) {
      setFormError(t.contact.validationError);
      return;
    }

    setFormError('');
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setFullName('');
    setContactInfo('');
    setMessage('');
    setFormError('');
    setFormSubmitted(false);
  };

  const formatPrice = (annualPrice: number) => {
    if (billingMode === 'annual') {
      return annualPrice.toLocaleString('en-US');
    }
    return Math.ceil(annualPrice / 10).toLocaleString('en-US');
  };

  const openPartnerLanding = (partnerKey: PartnerKey) => {
    const url = new URL(window.location.href);
    url.searchParams.delete('page');
    url.searchParams.delete('mid');
    url.searchParams.delete('name');
    url.searchParams.delete('screen');
    url.searchParams.delete('p');
    url.searchParams.delete('richmenu');
    url.searchParams.set('partner', partnerKey);
    url.hash = '';
    window.history.pushState({ partner: partnerKey }, '', url.toString());
    setActiveApplyPortal(null);
    setActivePartner(partnerKey);
    setMenuOpen(false);
    setPrivilegesOpen(false);
    setPrivilegesPanelOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openOnlineApplyPortal = (opts: OnlinePortalRoute = {}) => {
    const url = new URL(window.location.href);
    url.searchParams.delete('partner');
    url.searchParams.set('page', 'apply-online');
    if (opts.mid) url.searchParams.set('mid', opts.mid);
    else url.searchParams.delete('mid');
    if (opts.name) url.searchParams.set('name', opts.name);
    else url.searchParams.delete('name');
    if (opts.screen) url.searchParams.set('screen', opts.screen);
    else url.searchParams.delete('screen');
    if (opts.product) url.searchParams.set('p', opts.product);
    else url.searchParams.delete('p');
    if (opts.showSimulator) url.searchParams.set('richmenu', '1');
    else url.searchParams.delete('richmenu');
    url.hash = '';
    window.history.pushState({ applyPortal: true, ...opts }, '', url.toString());
    setActivePartner(null);
    setActiveApplyPortal(opts);
    setMenuOpen(false);
    setPrivilegesOpen(false);
    setPrivilegesPanelOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id?: string) => {
    setMenuOpen(false);
    setPrivilegesPanelOpen(false);
    if (activePartner || activeApplyPortal) {
      const url = new URL(window.location.href);
      url.searchParams.delete('partner');
      url.searchParams.delete('page');
      url.searchParams.delete('mid');
      url.searchParams.delete('name');
      url.searchParams.delete('screen');
      url.searchParams.delete('p');
      url.searchParams.delete('richmenu');
      url.hash = id ? `#${id}` : '';
      window.history.pushState({}, '', url.toString());
      setActivePartner(null);
      setActiveApplyPortal(null);
      if (id) {
        window.setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (!id || id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const partnerMenuItems = PARTNER_MENU_ITEMS[lang];

  const partnerColorClasses: Record<PartnerKey, { dot: string; text: string; activeBorder: string }> = {
    siamchai: {
      dot: 'bg-[#1954B8]',
      text: 'text-[#60A5FA]',
      activeBorder: 'border-[#1954B8] bg-[#1954B8]/20',
    },
    rabbit: {
      dot: 'bg-[#F25C2A]',
      text: 'text-[#FF8547]',
      activeBorder: 'border-[#F25C2A] bg-[#F25C2A]/20',
    },
    t1c: {
      dot: 'bg-[#E31837]',
      text: 'text-[#FF4D6A]',
      activeBorder: 'border-[#E31837] bg-[#E31837]/20',
    },
  };

  const partnerTopBorderMap: Record<PartnerKey, string> = {
    siamchai: 'border-t-[#1954B8]',
    rabbit: 'border-t-[#F25C2A]',
    t1c: 'border-t-[#E31837]',
  };

  const isLightLanding = activePartner !== null || activeApplyPortal !== null;

  const mapNode = (
    <JaymartOfficeMap
      apiKey={MAPS_API_KEY}
      quotaExceeded={quotaExceeded}
      officeCompany={t.contact.officeCompany}
      officeAddress={t.contact.officeAddress}
      mapTitle={t.contact.mapTitle}
      openDirectionsLabel={t.contact.mapOpenDirections}
      fallbackNote={t.contact.mapFallbackNote}
    />
  );

  const pageTree = (
    <MotionConfig reducedMotion="user">
      <div id="top" className="min-h-screen bg-black text-white selection:bg-[#D9232E] selection:text-white">
        {/* Quota Exceeded Banner (Demo Key Two-Tier Handler) */}
        {quotaExceeded && (
          <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
            <span>
              Google Maps Platform quota reached. If you are the app owner, visit{' '}
              <a
                href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold text-amber-950 hover:text-amber-800"
              >
                maps developer site
              </a>{' '}
              for instructions to update your account.
            </span>
          </div>
        )}

        {/* Top Navigation Bar + Slide-Down Panels (Adapts smoothly to Light Partner Pages & Black Main Site) */}
        <header
          className={`fixed top-0 inset-x-0 z-40 backdrop-blur-sm border-t-2 border-b transition-colors ${
            isLightLanding
              ? `bg-white/95 text-neutral-950 ${
                  activePartner ? partnerTopBorderMap[activePartner] : 'border-t-[#D9232E]'
                } border-b-neutral-200`
              : 'bg-black/95 text-white border-t-[#D9232E] border-b-white/15'
          }`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 md:h-20 flex md:grid md:grid-cols-[1fr_auto_1fr] items-center justify-between gap-2 sm:gap-3">
            {/* Left: Slide-Down Main Menu Trigger + Mobile Emblem / Desktop Wordmark */}
            <div className="flex items-center gap-2 sm:gap-4 justify-start shrink-0">
              <button
                type="button"
                onClick={() => scrollToSection('top')}
                className="flex md:hidden items-center justify-center shrink-0 p-1 rounded-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4"
                aria-label={t.hero.brandTitle}
              >
                <TriangleEmblem className="w-8 h-8" variant={isLightLanding ? 'light' : 'dark'} />
              </button>

              <button
                type="button"
                onClick={() => {
                  setPrivilegesPanelOpen(false);
                  setMenuOpen((prev) => !prev);
                }}
                aria-expanded={menuOpen}
                aria-controls="slide-down-nav"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className={`min-h-[38px] sm:min-h-[40px] px-2.5 sm:px-3 py-1.5 rounded-full md:rounded-none inline-flex items-center gap-1.5 sm:gap-2 border text-[11px] sm:text-[13px] font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  isLightLanding
                    ? 'border-neutral-300 hover:border-neutral-900 text-neutral-950'
                    : 'border-white/30 hover:border-white text-white'
                }`}
              >
                {menuOpen ? <X className="w-4 h-4 text-[#D9232E]" /> : <Menu className="w-4 h-4" />}
                <span>{lang === 'th' ? 'เมนู' : 'Menu'}</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('top')}
                className={`hidden md:inline-flex items-center text-xs xl:text-[13px] font-semibold tracking-wider hover:opacity-80 transition-opacity whitespace-nowrap shrink-0 cursor-pointer ${
                  isLightLanding ? 'text-neutral-950' : 'text-white'
                }`}
              >
                {t.hero.brandTitle}
              </button>
            </div>

            {/* Center: Triangle Emblem (Tablet/Desktop) */}
            <button
              type="button"
              onClick={() => scrollToSection('top')}
              className="hidden md:flex items-center justify-center shrink-0 px-2 py-1 transition-transform duration-200 hover:scale-105 cursor-pointer"
              aria-label={t.hero.brandTitle}
            >
              <TriangleEmblem className="w-10 h-10" variant={isLightLanding ? 'light' : 'dark'} />
            </button>

            {/* Right: Toggleable Privileges Button + Language Toggle + Contact CTA */}
            <div className="flex items-center gap-1.5 sm:gap-3 justify-end">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setPrivilegesPanelOpen((prev) => !prev);
                }}
                aria-expanded={privilegesPanelOpen}
                aria-controls="slide-down-privileges"
                className={`inline-flex items-center gap-1 sm:gap-1.5 min-h-[38px] sm:min-h-[40px] px-2.5 sm:px-3 py-1.5 rounded-full md:rounded-none text-[11px] sm:text-xs xl:text-[13px] font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isLightLanding
                    ? privilegesPanelOpen
                      ? 'border-neutral-900 bg-neutral-100 text-neutral-950'
                      : 'border-neutral-300 hover:border-neutral-900 text-neutral-950'
                    : privilegesPanelOpen
                      ? 'border-[#D9232E] bg-[#D9232E]/20 text-white'
                      : 'border-white/25 hover:border-white text-white'
                }`}
              >
                <span>{t.nav.privileges}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#D9232E] transition-transform duration-200 ${
                    privilegesPanelOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
                className={`min-h-[38px] sm:min-h-[40px] inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-full md:rounded-none text-[11px] sm:text-xs font-mono font-medium border transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  isLightLanding
                    ? 'border-neutral-300 hover:border-neutral-900 text-neutral-950'
                    : 'border-white/30 hover:border-white text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5 hidden sm:inline" />
                <span className="sm:hidden">{lang === 'th' ? 'EN' : 'TH'}</span>
                <span className="hidden sm:inline">{lang === 'th' ? 'TH / EN' : 'EN / TH'}</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className={`min-h-[38px] sm:min-h-[40px] px-2.5 sm:px-4 py-1.5 rounded-full md:rounded-none text-[11px] sm:text-xs xl:text-[13px] font-semibold border transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  isLightLanding
                    ? 'border-[#D9232E] bg-[#D9232E] text-white hover:bg-[#b81b24]'
                    : 'border-[#D9232E] bg-[#D9232E]/15 text-white hover:bg-[#D9232E]'
                }`}
              >
                {t.nav.contact}
              </button>
            </div>
          </div>

          {/* Exclusive Slide-Down Privileges Panel (Shown ONLY when Privileges button is active; clicking again slides it up) */}
          <AnimatePresence>
            {privilegesPanelOpen && (
              <motion.div
                id="slide-down-privileges"
                aria-label={t.nav.privileges}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="bg-black border-t border-white/20 border-b border-white/25 shadow-2xl max-h-[82vh] overflow-y-auto"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-6 space-y-5">
                  <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-3">
                    <div className="flex items-center gap-2.5">
                      <Gift className="w-4 h-4 text-[#D9232E] shrink-0" />
                      <span className="text-sm sm:text-base font-bold text-white">
                        {t.nav.privileges}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPrivilegesPanelOpen(false)}
                      aria-label={lang === 'th' ? 'ปิดแถบรับสิทธิพิเศษ' : 'Close privileges menu'}
                      className="min-h-[36px] min-w-[36px] px-3 py-1 rounded-full md:rounded-none border border-white/25 hover:border-white text-xs text-white inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{lang === 'th' ? 'ปิด' : 'Close'}</span>
                      <X className="w-3.5 h-3.5 text-[#D9232E]" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {/* Included Privilege 1: รับคะแนน JP ฟรี 500 คะแนน */}
                    <button
                      type="button"
                      onClick={() => scrollToSection('jp-points')}
                      className="text-left border border-[#D9232E]/70 hover:border-[#D9232E] bg-[#D9232E]/10 p-4 rounded-2xl md:rounded-none transition-colors flex flex-col justify-between gap-3 cursor-pointer"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-white">
                          <span className="w-2 h-2 rounded-full bg-[#D9232E] shrink-0" aria-hidden="true" />
                          <span>{t.nav.jpPoints}</span>
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#D9232E] shrink-0" />
                      </div>
                      <p className="text-xs text-white/85 leading-relaxed">
                        {lang === 'th'
                          ? 'รับคะแนน JP ฟรี 500 คะแนน และสิทธิประโยชน์อื่นๆอีกเพียบ'
                          : 'Get 500 Free JP Points and exclusive privileges'}
                      </p>
                    </button>

                    {/* Included Privileges 2-4: 3 Dedicated Brand Landing Links */}
                    {partnerMenuItems.map((partner) => {
                      const isCurrent = activePartner === partner.key;
                      const color = partnerColorClasses[partner.key];
                      return (
                        <a
                          key={partner.key}
                          href={partner.href}
                          onClick={(e) => {
                            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
                              return;
                            }
                            e.preventDefault();
                            openPartnerLanding(partner.key);
                          }}
                          className={`block border p-4 rounded-2xl md:rounded-none transition-colors flex flex-col justify-between gap-3 ${
                            isCurrent
                              ? color.activeBorder
                              : 'border-white/20 hover:border-white bg-black'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-white">
                              <span className={`w-2 h-2 rounded-full shrink-0 ${color.dot}`} aria-hidden="true" />
                              <span>{partner.label}</span>
                            </span>
                            <span className={`inline-flex items-center gap-1 text-xs font-mono ${color.text}`}>
                              <span>{lang === 'th' ? 'เปิดหน้า' : 'Open'}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                          <p className="text-xs text-white/80 leading-relaxed">{partner.sublabel}</p>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Slide-Down Menu Panel (Works across Desktop, Tablet, and Mobile) */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="slide-down-nav"
                aria-label={lang === 'th' ? 'เมนูหลัก' : 'Main Navigation'}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="bg-black border-t border-white/20 border-b border-white/25 shadow-2xl max-h-[84vh] overflow-y-auto"
              >
                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6 md:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Core Navigation Links */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 md:gap-y-1">
                    <button
                      type="button"
                      onClick={() => openOnlineApplyPortal()}
                      className="sm:col-span-2 min-h-[50px] px-4 rounded-full md:rounded-none border border-[#D9232E] bg-[#D9232E]/15 hover:bg-[#D9232E] flex items-center justify-between gap-3 py-2.5 text-left text-sm sm:text-base font-bold text-white transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <ShieldPlus className="w-4 h-4 text-white shrink-0" />
                        <span>{t.nav.applyOnline}</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-white shrink-0" />
                    </button>

                    {[
                      { id: 'solutions', num: '01', label: t.nav.allPolicies },
                      { id: 'claim', num: '02', label: t.nav.claim },
                      { id: 'policy-check', num: '03', label: t.nav.checkPolicy },
                      { id: 'jp-points', num: '04', label: t.nav.jpPoints, highlight: true },
                      { id: 'story', num: '06', label: t.nav.about },
                      { id: 'vision', num: '07', label: t.nav.vision },
                      { id: 'blog', num: '08', label: t.nav.blog },
                      { id: 'contact', num: '09', label: t.nav.contact },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className="min-h-[48px] px-3.5 md:px-0 rounded-full md:rounded-none border border-white/15 md:border-0 md:border-b md:border-white/15 flex items-center justify-between gap-3 py-2.5 text-left text-sm sm:text-base font-medium text-white hover:text-[#D9232E] transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-xs font-mono text-[#D9232E] font-semibold">
                            {item.num}.
                          </span>
                          <span className={item.highlight ? 'font-semibold' : ''}>
                            {item.label}
                          </span>
                        </span>
                        <ChevronRight className="w-4 h-4 text-white/50 shrink-0" />
                      </button>
                    ))}
                  </div>

                  {/* Privileges Accordion (Includes JP 500 + 3 Partner Brand Links) */}
                  <div className="lg:col-span-5 border border-white/20 p-5 bg-black space-y-4 rounded-2xl md:rounded-none">
                    <button
                      type="button"
                      onClick={() => setPrivilegesOpen((prev) => !prev)}
                      aria-expanded={privilegesOpen}
                      className="w-full min-h-[40px] flex items-center justify-between gap-3 text-left cursor-pointer rounded-full md:rounded-none"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#D9232E] font-semibold">05.</span>
                        <span className="text-base sm:text-lg font-bold text-white">
                          {t.nav.privileges}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#D9232E] transition-transform duration-200 ${
                          privilegesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {privilegesOpen && (
                      <div className="pt-2 border-t border-white/15 space-y-2.5">
                        <button
                          type="button"
                          onClick={() => scrollToSection('jp-points')}
                          className="w-full text-left border border-[#D9232E]/60 hover:border-[#D9232E] bg-[#D9232E]/10 p-3.5 rounded-2xl md:rounded-none transition-colors cursor-pointer"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm sm:text-base font-bold text-white">
                              {t.nav.jpPoints}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#D9232E]" />
                          </div>
                          <p className="text-xs text-white/80 mt-1">
                            {lang === 'th'
                              ? 'ลงทะเบียนรับคะแนน J Point ฟรี 500 คะแนน'
                              : 'Claim 500 free J Points'}
                          </p>
                        </button>

                        {partnerMenuItems.map((partner) => {
                          const isCurrent = activePartner === partner.key;
                          const color = partnerColorClasses[partner.key];
                          return (
                            <a
                              key={partner.key}
                              href={partner.href}
                              onClick={(e) => {
                                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
                                  return;
                                }
                                e.preventDefault();
                                openPartnerLanding(partner.key);
                              }}
                              className={`block border p-3.5 rounded-2xl md:rounded-none transition-colors ${
                                isCurrent
                                  ? color.activeBorder
                                  : 'border-white/20 hover:border-white bg-black'
                              }`}
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-white">
                                  <span className={`w-2 h-2 rounded-full ${color.dot}`} aria-hidden="true" />
                                  <span>{partner.label}</span>
                                </span>
                                <span className={`inline-flex items-center gap-1 text-xs font-mono ${color.text}`}>
                                  <span>{lang === 'th' ? 'เปิดหน้าสิทธิพิเศษ' : 'Open'}</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                              </div>
                              <p className="text-xs text-white/80 mt-1">{partner.sublabel}</p>
                            </a>
                          );
                        })}
                      </div>
                    )}

                    {!privilegesOpen && (
                      <p className="text-xs text-white/75 leading-relaxed">
                        {lang === 'th'
                          ? 'รับคะแนน JP ฟรี 500 คะแนน และสิทธิประโยชน์อื่นๆอีกเพียบ'
                          : 'Get 500 Free JP Points and many other exclusive privileges'}
                      </p>
                    )}
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {activeApplyPortal ? (
          <OnlineApplyPortal
            lang={lang}
            initialMid={activeApplyPortal.mid}
            initialName={activeApplyPortal.name}
            initialScreen={activeApplyPortal.screen}
            initialProduct={activeApplyPortal.product}
            initialShowSimulator={activeApplyPortal.showSimulator}
            onBackHome={() => scrollToSection()}
          />
        ) : activePartner ? (
          <PartnerPrivilegeLanding
            partnerKey={activePartner}
            lang={lang}
            onBackHome={() => scrollToSection()}
            onNavigateClaim={() => scrollToSection('claim')}
          />
        ) : (
        <>
        <main>
          {/* Section 1: Hero — Pure Black Canvas, Centered Display Headline */}
          <section className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 lg:px-12 pt-20 pb-16 bg-black">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl mx-auto text-center"
            >
              <div className="mb-5 flex justify-center">
                <TriangleEmblem className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>
              <h1
                className={`font-bold text-white leading-[1.12] ${
                  lang === 'en'
                    ? 'text-[clamp(2rem,5.5vw,4.75rem)] tracking-[0.22em] sm:tracking-[0.26em] uppercase'
                    : 'text-[clamp(2.25rem,6vw,5rem)] tracking-[0.04em]'
                }`}
              >
                {t.hero.brandTitle}
              </h1>

              <div className="mt-5 flex justify-center">
                <span className="block w-14 h-[2px] bg-[#D9232E]" aria-hidden="true" />
              </div>

              <p
                className={`mt-5 md:mt-6 text-white font-normal leading-relaxed max-w-3xl mx-auto ${
                  lang === 'en'
                    ? 'text-xs sm:text-sm md:text-base tracking-[0.18em] sm:tracking-[0.24em] uppercase'
                    : 'text-sm sm:text-base md:text-lg tracking-[0.04em]'
                }`}
              >
                {t.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <button
                  type="button"
                  onClick={() => openOnlineApplyPortal()}
                  className="min-h-[48px] px-7 py-3.5 rounded-full md:rounded-none bg-[#D9232E] hover:bg-[#b81b24] text-white text-sm sm:text-base font-bold inline-flex items-center gap-2.5 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <ShieldPlus className="w-4 h-4 shrink-0" />
                  <span>{t.hero.applyOnlineCta}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('jp-points')}
                  className="min-h-[48px] px-6 py-3.5 rounded-full md:rounded-none border border-white/35 hover:border-white text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Gift className="w-4 h-4 text-[#D9232E] shrink-0" />
                  <span>{t.hero.jp500Cta}</span>
                </button>
              </div>
            </motion.div>

            {/* Bottom Scroll Cue */}
            <a
              href="#story"
              aria-label={t.hero.scrollLabel}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-2 text-white hover:opacity-75 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="text-xs font-medium tracking-wider whitespace-nowrap">
                {t.hero.scrollLabel}
              </span>
              <ArrowDown className="w-4 h-4 text-[#D9232E]" />
            </a>
          </section>

          {/* Section 2: Our Mission / About Us — Left-Aligned Column */}
          <section
            id="story"
            className="border-t border-white/15 bg-black py-20 md:py-36 px-5 sm:px-8 lg:px-12 scroll-mt-20"
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={REVEAL_VIEWPORT}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 space-y-6"
              >
                <h2 className="text-[clamp(1.85rem,4vw,3.5rem)] font-bold text-white leading-[1.15] tracking-tight">
                  {t.mission.heading}
                </h2>

                <div className="space-y-5 text-white text-base md:text-[17px] leading-[1.75] font-normal">
                  {t.mission.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => scrollToSection('solutions')}
                    className="min-h-[44px] px-7 py-3.5 rounded-full md:rounded-none bg-[#D9232E] text-white text-sm font-semibold tracking-wide hover:bg-[#b81b24] transition-colors duration-200 inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <span>{t.mission.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              <div className="hidden lg:block lg:col-span-6" aria-hidden="true" />
            </div>
          </section>

          {/* Section 3: Our Advantages — Right-Aligned Column */}
          <section
            id="advantages"
            className="border-t border-white/15 bg-black py-20 md:py-36 px-5 sm:px-8 lg:px-12"
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="hidden lg:block lg:col-span-6" aria-hidden="true" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={REVEAL_VIEWPORT}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 space-y-10"
              >
                <h2 className="text-[clamp(1.85rem,4vw,3.5rem)] font-bold text-white leading-[1.15] tracking-tight">
                  {t.advantages.heading}
                </h2>

                <div className="space-y-9">
                  {t.advantages.blocks.map((block, idx) => (
                    <div key={idx} className="space-y-3">
                      <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                        {block.title}
                      </h3>
                      <div className="space-y-3 text-white text-sm md:text-base leading-[1.75]">
                        {block.paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 4: A Model For Success & Attentiveness as a Priority — Left-Aligned Column */}
          <section
            id="model"
            className="border-t border-white/15 bg-black py-20 md:py-36 px-5 sm:px-8 lg:px-12"
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={REVEAL_VIEWPORT}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 space-y-12"
              >
                {t.modelAndCare.blocks.map((block, idx) => (
                  <div key={idx} className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold text-white leading-snug">
                      {block.title}
                    </h2>
                    <div className="space-y-3 text-white text-sm md:text-base leading-[1.75]">
                      {block.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>

              <div className="hidden lg:block lg:col-span-6" aria-hidden="true" />
            </div>
          </section>

          {/* Section 5: กรมธรรม์ทั้งหมด (All Insurance Policies — Jaymart Connect) */}
          <section
            id="solutions"
            className="border-t border-white/15 bg-black py-20 md:py-32 px-5 sm:px-8 lg:px-12 scroll-mt-20"
          >
            <div className="max-w-6xl mx-auto space-y-10 md:space-y-12">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-white leading-tight">
                    {t.solutionLab.heading}
                  </h2>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    {t.solutionLab.subheading}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => openOnlineApplyPortal()}
                    className="min-h-[44px] px-5 py-2.5 rounded-full md:rounded-none bg-[#D9232E] hover:bg-[#b81b24] text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <ShieldPlus className="w-4 h-4 shrink-0" />
                    <span>{t.nav.applyOnline}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>

                  {/* Billing Frequency Switch */}
                  <div
                    role="group"
                    aria-label="Billing Frequency"
                    className="inline-flex border border-white/30 p-1 rounded-full md:rounded-none shrink-0"
                  >
                    <button
                      type="button"
                      onClick={() => setBillingMode('annual')}
                      className={`min-h-[40px] px-4 py-2 rounded-full md:rounded-none text-xs md:text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                        billingMode === 'annual'
                          ? 'bg-[#D9232E] text-white'
                          : 'bg-black text-white hover:bg-white/10'
                      }`}
                    >
                      {t.solutionLab.billingLabelAnnual}
                    </button>
                    <button
                      type="button"
                      onClick={() => setBillingMode('monthly')}
                      className={`min-h-[40px] px-4 py-2 rounded-full md:rounded-none text-xs md:text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                        billingMode === 'monthly'
                          ? 'bg-[#D9232E] text-white'
                          : 'bg-black text-white hover:bg-white/10'
                      }`}
                    >
                      {t.solutionLab.billingLabelMonthly}
                    </button>
                  </div>
                </div>
              </div>

              {/* Category Tabs — Responsive wrapping on mobile */}
              <div
                role="tablist"
                aria-label={t.solutionLab.heading}
                className="flex flex-wrap gap-2.5 sm:gap-3"
              >
                {t.solutionLab.categories.map((category) => {
                  const isActive = category.id === currentCategory.id;
                  return (
                    <button
                      key={category.id}
                      role="tab"
                      aria-selected={isActive}
                      type="button"
                      onClick={() => setSelectedCategoryId(category.id)}
                      className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full md:rounded-none text-xs sm:text-sm font-medium border transition-colors duration-200 sm:whitespace-nowrap text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                        isActive
                          ? 'bg-white text-black border-white'
                          : 'bg-black text-white border-white/30 hover:border-[#D9232E]'
                      }`}
                    >
                      {category.title}
                    </button>
                  );
                })}
              </div>

              {/* Selected Category Overview Bar */}
              <div className="border border-white/25 p-5 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="text-xs font-mono tracking-wider text-white">
                    {currentCategory.subtitle} · {currentCategory.issuanceTime}
                  </div>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    {currentCategory.summary}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2 text-xs md:text-sm font-medium text-white">
                  <ShieldCheck className="w-4 h-4 text-[#D9232E] shrink-0" />
                  <span>{t.solutionLab.issuanceLabel}</span>
                </div>
              </div>

              {/* 3-Tier Plan Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentCategory.tiers.map((tier, idx) => (
                  <div
                    key={tier.id}
                    className={`border p-6 md:p-8 flex flex-col justify-between gap-8 bg-black transition-colors duration-200 ${
                      idx === 1
                        ? 'border-[#D9232E] hover:border-white'
                        : 'border-white/25 hover:border-white'
                    }`}
                  >
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg md:text-xl font-bold text-white">{tier.name}</h3>
                        <p className="text-xs text-white font-mono tabular-nums">
                          {t.solutionLab.coverageLabel}: {tier.coverageLimit}
                        </p>
                      </div>

                      <div className="border-y border-white/15 py-4">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl md:text-4xl font-bold font-mono tabular-nums text-white">
                            {formatPrice(tier.annualPrice)}
                          </span>
                          <span className="text-xs text-white">
                            {billingMode === 'annual'
                              ? t.solutionLab.perYearSuffix
                              : t.solutionLab.perMonthSuffix}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3 text-sm text-white leading-relaxed">
                        {tier.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 shrink-0 mt-1 text-[#D9232E]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectPlan(currentCategory.title, tier.name)}
                      className={`min-h-[44px] w-full py-3 px-4 rounded-full md:rounded-none border text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                        idx === 1
                          ? 'bg-[#D9232E] border-[#D9232E] text-white hover:bg-[#b81b24]'
                          : 'border-white text-white hover:bg-white hover:text-black'
                      }`}
                    >
                      <span>{t.solutionLab.selectPlanCta}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6: แจ้งเคลม (Online Claim Center & 24/7 Accident Hotline) */}
          <section
            id="claim"
            className="border-t border-white/15 bg-black py-20 md:py-32 px-5 sm:px-8 lg:px-12 scroll-mt-20"
          >
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Info + 24h Hotline */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-white leading-tight">
                      {t.claimCenter.heading}
                    </h2>
                    <p className="text-white text-sm md:text-base leading-relaxed">
                      {t.claimCenter.subheading}
                    </p>
                  </div>

                  <div className="border border-[#D9232E] p-6 space-y-3 bg-black">
                    <div className="flex items-center gap-2 text-xs font-mono text-white">
                      <PhoneCall className="w-4 h-4 text-[#D9232E] shrink-0" />
                      <span>{t.claimCenter.hotlineLabel}</span>
                    </div>
                    <a
                      href="tel:020990555"
                      className="block text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white hover:underline underline-offset-4"
                    >
                      {t.claimCenter.hotlineNumber}
                    </a>
                    <p className="text-xs sm:text-sm text-white leading-relaxed">
                      {t.claimCenter.hotlineNote}
                    </p>
                  </div>
                </div>

                {/* Right Online Claim Form */}
                <div className="lg:col-span-7 border border-white/25 p-5 sm:p-8 md:p-10 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {t.claimCenter.claimTypes.map((typeLabel, idx) => {
                      const active = selectedClaimType === idx;
                      return (
                        <button
                          key={typeLabel}
                          type="button"
                          onClick={() => setSelectedClaimType(idx)}
                          className={`min-h-[42px] px-3.5 py-2 rounded-full md:rounded-none text-xs sm:text-sm font-medium border transition-colors text-left cursor-pointer ${
                            active
                              ? 'bg-[#D9232E] text-white border-[#D9232E]'
                              : 'bg-black text-white border-white/30 hover:border-white'
                          }`}
                        >
                          {typeLabel}
                        </button>
                      );
                    })}
                  </div>

                  {claimTicket ? (
                    <div className="border border-white p-6 sm:p-8 space-y-4">
                      <div className="flex items-center gap-2.5 text-white">
                        <ShieldAlert className="w-5 h-5 text-[#D9232E] shrink-0" />
                        <h3 className="text-lg font-bold text-white">{t.claimCenter.successTitle}</h3>
                      </div>
                      <div className="border-y border-white/20 py-3 space-y-1">
                        <div className="text-xs text-white">{t.claimCenter.ticketLabel}</div>
                        <div className="text-xl font-bold font-mono tabular-nums text-white">
                          {claimTicket}
                        </div>
                      </div>
                      <p className="text-sm text-white leading-relaxed">{t.claimCenter.successBody}</p>
                      <button
                        type="button"
                        onClick={handleResetClaim}
                        className="min-h-[44px] px-5 py-2.5 rounded-full md:rounded-none border border-white text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors cursor-pointer"
                      >
                        {t.claimCenter.resetClaimCta}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitClaim} noValidate className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="claim-policy" className="block text-xs sm:text-sm font-medium text-white">
                            {t.claimCenter.policyOrPlateLabel}
                          </label>
                          <input
                            id="claim-policy"
                            type="text"
                            value={claimPolicyOrPlate}
                            onChange={(e) => setClaimPolicyOrPlate(e.target.value)}
                            placeholder={t.claimCenter.policyOrPlatePlaceholder}
                            className="w-full min-h-[44px] px-4 py-2.5 bg-black border border-white/30 text-white placeholder:text-white/50 text-base sm:text-sm focus:border-white focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="claim-phone" className="block text-xs sm:text-sm font-medium text-white">
                            {t.claimCenter.reporterPhoneLabel}
                          </label>
                          <input
                            id="claim-phone"
                            type="tel"
                            value={claimReporterPhone}
                            onChange={(e) => setClaimReporterPhone(e.target.value)}
                            placeholder={t.claimCenter.reporterPhonePlaceholder}
                            className="w-full min-h-[44px] px-4 py-2.5 bg-black border border-white/30 text-white placeholder:text-white/50 text-base sm:text-sm focus:border-white focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="claim-name" className="block text-xs sm:text-sm font-medium text-white">
                          {t.claimCenter.reporterNameLabel}
                        </label>
                        <input
                          id="claim-name"
                          type="text"
                          value={claimReporterName}
                          onChange={(e) => setClaimReporterName(e.target.value)}
                          placeholder={t.claimCenter.reporterNamePlaceholder}
                          className="w-full min-h-[44px] px-4 py-2.5 bg-black border border-white/30 text-white placeholder:text-white/50 text-base sm:text-sm focus:border-white focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="claim-detail" className="block text-xs sm:text-sm font-medium text-white">
                          {t.claimCenter.incidentDetailLabel}
                        </label>
                        <textarea
                          id="claim-detail"
                          rows={3}
                          value={claimIncidentDetail}
                          onChange={(e) => setClaimIncidentDetail(e.target.value)}
                          placeholder={t.claimCenter.incidentDetailPlaceholder}
                          className="w-full px-4 py-2.5 bg-black border border-white/30 text-white placeholder:text-white/50 text-base sm:text-sm focus:border-white focus:outline-none resize-y"
                        />
                      </div>

                      {claimError && (
                        <p role="alert" className="text-xs sm:text-sm text-white border border-[#D9232E] px-4 py-2.5">
                          {claimError}
                        </p>
                      )}

                      <button
                        type="submit"
                        className="min-h-[44px] w-full sm:w-auto px-7 py-3 rounded-full md:rounded-none bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        {t.claimCenter.submitClaimCta}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: เช็คกรมธรรม์ของฉัน (Check My Policy Online) */}
          <section
            id="policy-check"
            className="border-t border-white/15 bg-black py-20 md:py-32 px-5 sm:px-8 lg:px-12 scroll-mt-20"
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-3">
                  <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-white leading-tight">
                    {t.policyLookup.heading}
                  </h2>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    {t.policyLookup.subheading}
                  </p>
                </div>

                <form onSubmit={handlePolicyLookup} noValidate className="space-y-4 pt-2">
                  <div className="space-y-1.5">
                    <label htmlFor="lookup-policy" className="block text-xs sm:text-sm font-medium text-white">
                      {t.policyLookup.policyInputLabel}
                    </label>
                    <input
                      id="lookup-policy"
                      type="text"
                      value={lookupPolicyInput}
                      onChange={(e) => setLookupPolicyInput(e.target.value)}
                      placeholder={t.policyLookup.policyInputPlaceholder}
                      className="w-full min-h-[44px] px-4 py-2.5 bg-black border border-white/30 text-white placeholder:text-white/50 text-base sm:text-sm font-mono focus:border-white focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="lookup-phone" className="block text-xs sm:text-sm font-medium text-white">
                      {t.policyLookup.phoneInputLabel}
                    </label>
                    <input
                      id="lookup-phone"
                      type="tel"
                      value={lookupPhoneInput}
                      onChange={(e) => setLookupPhoneInput(e.target.value)}
                      placeholder={t.policyLookup.phoneInputPlaceholder}
                      className="w-full min-h-[44px] px-4 py-2.5 bg-black border border-white/30 text-white placeholder:text-white/50 text-base sm:text-sm font-mono focus:border-white focus:outline-none"
                    />
                  </div>

                  {lookupError && (
                    <p role="alert" className="text-xs sm:text-sm text-white border border-[#D9232E] px-4 py-2.5">
                      {lookupError}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="submit"
                      className="min-h-[44px] px-6 py-3 rounded-full md:rounded-none bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
                    >
                      <Search className="w-4 h-4" />
                      <span>{t.policyLookup.searchCta}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleLoadSamplePolicy}
                      className="min-h-[44px] px-5 py-3 rounded-full md:rounded-none border border-white/40 text-white text-xs sm:text-sm font-medium hover:border-white transition-colors whitespace-nowrap cursor-pointer"
                    >
                      {t.policyLookup.trySampleCta}
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Result Card */}
              <div className="lg:col-span-7">
                <div className="border border-white/25 p-5 sm:p-8 md:p-10 space-y-6">
                  <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                    <div className="flex items-center gap-2.5">
                      <FileCheck2 className="w-5 h-5 text-[#D9232E] shrink-0" />
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {t.policyLookup.resultHeading}
                      </h3>
                    </div>
                  </div>

                  {lookupResult ? (
                    <div className="space-y-6">
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <dt className="text-xs text-white">{t.policyLookup.fields.policyNo}</dt>
                          <dd className="text-base font-bold font-mono tabular-nums text-white">
                            {lookupResult.policyNo}
                          </dd>
                        </div>
                        <div className="space-y-1">
                          <dt className="text-xs text-white">{t.policyLookup.fields.status}</dt>
                          <dd className="text-sm font-semibold text-white flex items-center gap-1.5">
                            <Check className="w-4 h-4 text-[#D9232E] shrink-0" />
                            <span>{lookupResult.status}</span>
                          </dd>
                        </div>
                        <div className="space-y-1">
                          <dt className="text-xs text-white">{t.policyLookup.fields.holderName}</dt>
                          <dd className="text-sm sm:text-base font-medium text-white">
                            {lookupResult.holderName}
                          </dd>
                        </div>
                        <div className="space-y-1">
                          <dt className="text-xs text-white">{t.policyLookup.fields.sumInsured}</dt>
                          <dd className="text-base font-bold font-mono tabular-nums text-white">
                            {lookupResult.sumInsured}
                          </dd>
                        </div>
                        <div className="space-y-1 sm:col-span-2">
                          <dt className="text-xs text-white">{t.policyLookup.fields.planName}</dt>
                          <dd className="text-sm sm:text-base font-semibold text-white">
                            {lookupResult.planName}
                          </dd>
                        </div>
                        <div className="space-y-1 sm:col-span-2">
                          <dt className="text-xs text-white">{t.policyLookup.fields.period}</dt>
                          <dd className="text-sm font-mono tabular-nums text-white">
                            {lookupResult.effectiveDate} — {lookupResult.expiryDate}
                          </dd>
                        </div>
                      </dl>

                      <button
                        type="button"
                        onClick={() => {
                          setLookupResult(null);
                          setLookupPolicyInput('');
                          setLookupPhoneInput('');
                        }}
                        className="min-h-[40px] px-5 py-2 rounded-full md:rounded-none border border-white text-white text-xs sm:text-sm font-medium hover:bg-white hover:text-black transition-colors cursor-pointer"
                      >
                        {t.policyLookup.resetLookupCta}
                      </button>
                    </div>
                  ) : (
                    <div className="py-8 sm:py-10 text-center space-y-4">
                      <p className="text-sm text-white leading-relaxed max-w-md mx-auto">
                        {t.policyLookup.subheading}
                      </p>
                      <button
                        type="button"
                        onClick={handleLoadSamplePolicy}
                        className="min-h-[44px] px-6 py-2.5 rounded-full md:rounded-none border border-white text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors cursor-pointer"
                      >
                        {t.policyLookup.trySampleCta}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: รับคะแนน JP ฟรี 500 คะแนน ผ่าน LINE @638kqwtv → Rich Menu → index */}
          <section
            id="jp-points"
            className="border-t border-white/15 bg-black py-20 md:py-32 px-5 sm:px-8 lg:px-12 scroll-mt-20"
          >
            <div className="max-w-6xl mx-auto border border-[#D9232E] p-5 sm:p-10 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono text-white">
                  <Gift className="w-4 h-4 text-[#D9232E] shrink-0" />
                  <span>{t.jpPoints.badgeText}</span>
                </div>

                <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-white leading-tight">
                  {t.jpPoints.heading}
                </h2>

                <p className="text-sm md:text-base text-white leading-relaxed">
                  {t.jpPoints.subheading}
                </p>

                <ul className="space-y-3 text-sm text-white leading-relaxed">
                  {t.jpPoints.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 shrink-0 mt-1 text-[#D9232E]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {t.jpPoints.steps.map((step) => (
                    <div
                      key={step.num}
                      className="border border-white/20 p-3.5 space-y-1.5 bg-black min-w-0 overflow-hidden"
                    >
                      <div className="text-xs font-mono text-[#D9232E] font-bold">{step.num}.</div>
                      <div className="text-xs font-bold text-white leading-snug">{step.title}</div>
                      <div className="text-[11px] text-white/80 leading-relaxed break-words">
                        {step.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 border border-white/25 p-5 sm:p-7 space-y-6 bg-black min-w-0 overflow-hidden">
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-5 sm:gap-6">
                  <div className="bg-white p-3 shrink-0 rounded-xl md:rounded-none">
                    <QRCodeSVG
                      value={LINE_OA_REWARD_URL}
                      size={148}
                      bgColor="#FFFFFF"
                      fgColor="#000000"
                      level="M"
                      title="QR Code LINE Official Account"
                    />
                  </div>

                  <div className="space-y-3 text-center sm:text-left lg:text-center xl:text-left flex-1 min-w-0 w-full">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start lg:justify-center xl:justify-start gap-2.5 max-w-full">
                      <a
                        href={LINE_OA_REWARD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] max-w-full px-5 py-2.5 rounded-full md:rounded-none bg-[#06C755] hover:bg-[#05b34c] text-white text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-1.5 text-center"
                      >
                        <MessageCircle className="w-4 h-4 shrink-0" />
                        <span>{t.jpPoints.openLineOaCta}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyRewardLineId}
                        className="min-h-[44px] max-w-full px-4 py-2.5 rounded-full md:rounded-none border border-white/40 hover:border-white text-white text-xs sm:text-sm font-medium inline-flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        {rewardLineCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#D9232E] shrink-0" />
                            <span>{t.contact.lineCopiedLabel}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 shrink-0" />
                            <span>{t.jpPoints.copyLineOaCta}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/15 pt-5">
                  <button
                    type="button"
                    onClick={() =>
                      openOnlineApplyPortal({
                        screen: 'jpoint',
                      })
                    }
                    className="min-h-[48px] w-full px-6 py-3 rounded-full md:rounded-none bg-[#D9232E] hover:bg-[#b81b24] text-white text-sm font-bold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <ShieldPlus className="w-4 h-4 shrink-0" />
                    <span>{t.jpPoints.openIndexCta}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Next-Gen Digital Vision & Jaymart Ecosystem */}
          <section
            id="clients"
            className="border-t border-white/15 bg-black py-20 md:py-32 px-5 sm:px-8 lg:px-12"
          >
            <div className="max-w-6xl mx-auto space-y-16">
              <div id="vision" className="scroll-mt-24 space-y-12">
                <div className="space-y-3 max-w-3xl">
                  <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-white leading-tight">
                    {t.proofAndVision.heading}
                  </h2>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    {t.proofAndVision.subheading}
                  </p>
                </div>

                {/* 4-Column Quantitative Proof Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/25 divide-y sm:divide-y-0 sm:divide-x divide-white/25">
                  {t.proofAndVision.metrics.map((metric, idx) => (
                    <div key={idx} className="p-6 md:p-8 space-y-2">
                      <div className="text-2xl md:text-3xl font-bold font-mono tabular-nums text-white">
                        {metric.value}
                      </div>
                      <div className="text-sm font-semibold text-white">{metric.label}</div>
                      <p className="text-xs text-white leading-relaxed">{metric.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Next-Gen Digital Vision Spotlight */}
                <div className="border border-white p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-3">
                    <div className="flex items-center gap-2.5 text-xs font-mono text-white">
                      <TrendingUp className="w-4 h-4 text-[#D9232E] shrink-0" />
                      <span>{t.proofAndVision.visionTagline}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {t.proofAndVision.visionTitle}
                    </h3>
                    <p className="text-sm md:text-base text-white leading-relaxed">
                      {t.proofAndVision.visionDescription}
                    </p>
                  </div>
                  <div className="lg:col-span-4 flex lg:justify-end">
                    <button
                      type="button"
                      onClick={() => scrollToSection('contact')}
                      className="min-h-[44px] px-6 py-3 rounded-full md:rounded-none bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      {t.nav.contact}
                    </button>
                  </div>
                </div>
              </div>

              {/* Jaymart Ecosystem Sectors */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {t.proofAndVision.ecosystemHeading}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {t.proofAndVision.ecosystemSectors.map((sector, idx) => (
                    <div key={idx} className="border border-white/25 p-6 space-y-2.5">
                      <h4 className="text-base font-bold text-white">{sector.title}</h4>
                      <p className="text-sm text-white leading-relaxed">{sector.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Blog / InsurTech Insights */}
          <section
            id="blog"
            className="border-t border-white/15 bg-black py-20 md:py-32 px-5 sm:px-8 lg:px-12"
          >
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="space-y-3 max-w-2xl">
                <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-white leading-tight">
                  {t.insights.heading}
                </h2>
                <p className="text-white text-sm md:text-base leading-relaxed">
                  {t.insights.subheading}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.insights.articles.map((article) => (
                  <article
                    key={article.id}
                    className="border border-white/25 p-6 md:p-7 flex flex-col justify-between gap-6 hover:border-[#D9232E] transition-colors duration-200"
                  >
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-white font-mono">
                        <span>{article.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="text-lg font-bold text-white leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-sm text-white leading-relaxed">{article.excerpt}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArticle(article)}
                      className="min-h-[40px] px-4 py-1.5 md:px-0 md:py-0 rounded-full md:rounded-none border border-white/25 md:border-none self-start inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline underline-offset-4 cursor-pointer"
                    >
                      <span>{t.insights.readMoreLabel}</span>
                      <ArrowRight className="w-4 h-4 text-[#D9232E]" />
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Section 11: Contact Us — Form + LINE @jaymartinsurance + QR Code + Official HQ + Google Maps */}
          <section
            id="contact"
            className="border-t border-white/15 bg-black py-20 md:py-32 px-5 sm:px-8 lg:px-12 scroll-mt-20"
          >
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <div className="flex justify-center">
                  <TriangleEmblem className="w-14 h-14" />
                </div>
                <h2 className="text-[clamp(1.85rem,3.5vw,2.75rem)] font-bold text-white leading-tight">
                  {t.contact.heading}
                </h2>
                <p className="text-sm md:text-base text-white leading-relaxed">
                  {t.contact.subheading}
                </p>
              </div>

              {/* 2-Column Split: Left Inquiry Form | Right LINE QR Code + HQ Info */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Column: Digital Quote / Contact Form */}
                <div className="lg:col-span-6 border border-white/30 p-5 sm:p-8 md:p-10 flex flex-col justify-between">
                  {formSubmitted ? (
                    <div className="border border-white p-8 text-center space-y-5 my-auto">
                      <div className="w-10 h-10 mx-auto border border-[#D9232E] flex items-center justify-center">
                        <Check className="w-5 h-5 text-[#D9232E]" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{t.contact.successTitle}</h3>
                      <p className="text-sm text-white leading-relaxed">{t.contact.successBody}</p>
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="min-h-[44px] px-6 py-2.5 rounded-full md:rounded-none border border-white text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors cursor-pointer"
                      >
                        {t.contact.resetCta}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitForm} noValidate className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label htmlFor="full-name" className="block text-sm font-medium text-white">
                            {t.contact.nameLabel}
                          </label>
                          <input
                            id="full-name"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder={t.contact.namePlaceholder}
                            required
                            className="w-full min-h-[44px] px-4 py-3 bg-black border border-white/30 text-white placeholder:text-white/50 text-base sm:text-sm focus:border-white focus:outline-none"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="contact-info"
                            className="block text-sm font-medium text-white"
                          >
                            {t.contact.contactLabel}
                          </label>
                          <input
                            id="contact-info"
                            type="text"
                            value={contactInfo}
                            onChange={(e) => setContactInfo(e.target.value)}
                            placeholder={t.contact.contactPlaceholder}
                            required
                            className="w-full min-h-[44px] px-4 py-3 bg-black border border-white/30 text-white placeholder:text-white/50 text-base sm:text-sm focus:border-white focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="plan-select" className="block text-sm font-medium text-white">
                          {t.contact.planLabel}
                        </label>
                        <select
                          id="plan-select"
                          value={selectedPlanName}
                          onChange={(e) => setSelectedPlanName(e.target.value)}
                          className="w-full min-h-[44px] px-4 py-3 bg-black border border-white/30 text-white text-base sm:text-sm focus:border-white focus:outline-none"
                        >
                          {allPlanOptions.map((option) => (
                            <option key={option} value={option} className="bg-black text-white">
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="inquiry-msg" className="block text-sm font-medium text-white">
                          {t.contact.messageLabel}
                        </label>
                        <textarea
                          id="inquiry-msg"
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder={t.contact.messagePlaceholder}
                          className="w-full px-4 py-3 bg-black border border-white/30 text-white placeholder:text-white/50 text-base sm:text-sm focus:border-white focus:outline-none resize-y"
                        />
                      </div>

                      {formError && (
                        <p role="alert" className="text-sm font-medium text-white border border-[#D9232E] px-4 py-3">
                          {formError}
                        </p>
                      )}

                      <div className="pt-2 space-y-3">
                        <button
                          type="submit"
                          className="min-h-[48px] w-full max-w-full px-6 py-3.5 rounded-full md:rounded-none bg-[#D9232E] text-white text-sm font-semibold tracking-wide hover:bg-[#b81b24] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                          {t.contact.submitCta}
                        </button>

                        <button
                          type="button"
                          onClick={() => openOnlineApplyPortal()}
                          className="min-h-[48px] w-full max-w-full px-6 py-3.5 rounded-full md:rounded-none border border-white text-white text-sm font-bold tracking-wide hover:bg-white hover:text-black transition-colors duration-200 inline-flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <ShieldPlus className="w-4 h-4 shrink-0" />
                          <span>{t.nav.applyOnline}</span>
                          <ArrowRight className="w-4 h-4 shrink-0" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                {/* Right Column: LINE Official Account @jaymartinsurance + QR Code + HQ Info */}
                <div className="lg:col-span-6 flex flex-col gap-6 min-w-0">
                  {/* LINE QR Code Card */}
                  <div className="border border-[#D9232E] p-5 sm:p-7 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-5 sm:gap-6 bg-black min-w-0 overflow-hidden">
                    <div className="bg-white p-3.5 shrink-0">
                      <QRCodeSVG
                        value={t.contact.lineUrl}
                        size={148}
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="M"
                        title={`QR Code LINE ${t.contact.lineId}`}
                      />
                    </div>

                    <div className="space-y-4 text-center sm:text-left lg:text-center xl:text-left flex-1 min-w-0 w-full">
                      <div className="space-y-1">
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-white">
                          <MessageCircle className="w-4 h-4 text-[#D9232E] shrink-0" />
                          <span>{t.contact.lineSectionTitle}</span>
                        </div>
                        <div className="text-xl sm:text-2xl font-bold font-mono text-white break-all">
                          {t.contact.lineId}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-white leading-relaxed">
                        {t.contact.lineScanNote}
                      </p>

                      <div className="flex flex-wrap items-center justify-center sm:justify-start lg:justify-center xl:justify-start gap-2.5 max-w-full">
                        <a
                          href={t.contact.lineUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[42px] max-w-full px-4 py-2 rounded-full md:rounded-none bg-white text-black text-xs sm:text-sm font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-1.5 text-center"
                        >
                          <span className="break-words">{t.contact.lineAddCta}</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                        </a>

                        <button
                          type="button"
                          onClick={handleCopyLineId}
                          className="min-h-[42px] max-w-full px-3.5 py-2 rounded-full md:rounded-none border border-white/40 text-white text-xs sm:text-sm font-medium hover:border-white transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          {lineCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#D9232E] shrink-0" />
                              <span>{t.contact.lineCopiedLabel}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 shrink-0" />
                              <span>{t.contact.lineCopyCta}</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => openOnlineApplyPortal()}
                          className="min-h-[42px] max-w-full px-4 py-2 rounded-full md:rounded-none bg-[#D9232E] hover:bg-[#b81b24] text-white text-xs sm:text-sm font-bold transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer text-center"
                        >
                          <ShieldPlus className="w-3.5 h-3.5 shrink-0" />
                          <span>{t.nav.applyOnline}</span>
                        </button>

                        <a
                          href={LINE_OA_REWARD_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[42px] max-w-full px-3.5 py-2 rounded-full md:rounded-none border border-[#06C755] text-[#06C755] hover:bg-[#06C755] hover:text-white text-xs sm:text-sm font-bold transition-colors inline-flex items-center justify-center gap-1.5 text-center"
                        >
                          <Gift className="w-3.5 h-3.5 shrink-0" />
                          <span>{lang === 'th' ? 'รับคะแนน JP ฟรี 500 คะแนน' : 'Get 500 Free JP Points'}</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Headquarters Address & Direct Channels */}
                  <div className="border border-white/25 p-5 sm:p-8 space-y-4 flex-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-white">
                      <Building2 className="w-4 h-4 text-[#D9232E] shrink-0" />
                      <span>{t.contact.officeSectionTitle}</span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {t.contact.officeCompany}
                      </h3>
                      <p className="text-xs sm:text-sm text-white leading-relaxed">
                        {t.contact.officeAddress}
                      </p>
                      <p className="text-xs font-mono text-white/80">{t.contact.officeTaxId}</p>
                    </div>

                    <div className="border-t border-white/15 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white">
                      <a
                        href="tel:020990555"
                        className="inline-flex items-center gap-2 hover:underline font-mono tabular-nums"
                      >
                        <PhoneCall className="w-4 h-4 text-[#D9232E] shrink-0" />
                        <span>{t.contact.officePhone}</span>
                      </a>
                      <a
                        href={`mailto:${t.contact.officeEmail}`}
                        className="inline-flex items-center gap-2 hover:underline break-all"
                      >
                        <Mail className="w-4 h-4 text-[#D9232E] shrink-0" />
                        <span>{t.contact.officeEmail}</span>
                      </a>
                    </div>

                    <p className="text-xs text-white">{t.contact.officeHours}</p>
                  </div>
                </div>
              </div>

              {/* Full-Width Responsive Google Map */}
              {mapNode}
            </div>
          </section>
        </main>

        {/* Quiet Pure-Black Footer */}
        <footer className="border-t border-white/15 bg-black py-14 px-5 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <TriangleEmblem className="w-9 h-9" />
                <span className="text-base font-bold text-white">{t.footer.companyFullName}</span>
              </div>
              <p className="text-xs sm:text-sm text-white">{t.footer.address}</p>
              <p className="text-xs sm:text-sm font-mono tabular-nums text-white">{t.footer.hotline}</p>
              <p className="text-xs font-mono text-white">LINE ID: {t.contact.lineId}</p>
              <p className="text-xs text-white">{t.footer.licenseNote}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-white">
              <a href="#solutions" className="hover:underline underline-offset-4 whitespace-nowrap">
                {t.nav.allPolicies}
              </a>
              <a href="#claim" className="hover:underline underline-offset-4 whitespace-nowrap">
                {t.nav.claim}
              </a>
              <a href="#policy-check" className="hover:underline underline-offset-4 whitespace-nowrap">
                {t.nav.checkPolicy}
              </a>
              <a href="#jp-points" className="hover:underline underline-offset-4 whitespace-nowrap">
                {t.nav.jpPoints}
              </a>
              <a href="#contact" className="hover:underline underline-offset-4 whitespace-nowrap">
                {t.nav.contact}
              </a>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white">
            <span>{t.footer.copyright}</span>
            <button
              type="button"
              onClick={toggleLanguage}
              className="font-mono underline underline-offset-4 cursor-pointer"
            >
              {lang === 'th' ? 'Switch to English (EN)' : 'เปลี่ยนเป็นภาษาไทย (TH)'}
            </button>
          </div>
        </footer>
        </>
        )}

        {/* Article Reader Modal */}
        {activeArticle && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-article-title"
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveArticle(null)}
          >
            <div
              className="bg-black border border-white max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-white">
                  <span>{activeArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeArticle.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  aria-label={t.insights.closeModalLabel}
                  className="min-w-[40px] min-h-[40px] rounded-full md:rounded-none border border-white/40 hover:border-white flex items-center justify-center text-white shrink-0 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h3 id="modal-article-title" className="text-2xl font-bold text-white leading-snug">
                {activeArticle.title}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-white leading-[1.8]">
                {activeArticle.body.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-white/20 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="min-h-[40px] px-5 py-2 rounded-full md:rounded-none bg-white text-black text-sm font-semibold hover:bg-white/90 cursor-pointer"
                >
                  {t.insights.closeModalLabel}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </MotionConfig>
  );

  if (!MAPS_API_KEY) {
    return pageTree;
  }

  return (
    <APIProvider
      apiKey={MAPS_API_KEY}
      libraries={['places', 'marker']}
      language={lang}
      region="TH"
    >
      {pageTree}
    </APIProvider>
  );
}
