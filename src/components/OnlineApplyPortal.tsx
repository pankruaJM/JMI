import React, { useCallback, useEffect, useState } from 'react';
import liff from '@line/liff';
import { QRCodeSVG } from 'qrcode.react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Coins,
  CreditCard,
  ExternalLink,
  FileCheck2,
  Gift,
  Headset,
  Home,
  MessageCircle,
  PhoneCall,
  Plane,
  ShieldPlus,
  UserPlus,
} from 'lucide-react';
import {
  bannerKeyForPlan,
  CLAIMS,
  cleanLineDisplayName,
  DRONE_PLANS,
  formatLineGreeting,
  HOME_PRODUCTS,
  JAYMART_MAIN_SITE,
  LINE_OA_REWARD_URL,
  OTHER_PLANS,
  PA_PLANS,
  PORTAL_ASSETS,
  PortalPolicy,
  PortalReward,
  REWARDS,
} from '../data/onlinePortalData';
import { JPointBrandStrip } from './JPointBrandStrip';

export type PortalScreen = 'pa-home' | 'pa-plans' | 'jpoint' | 'policies';
export type PortalCategory = 'pa' | 'drone' | 'other';
export type PaBuyMode = 'self' | 'upsell' | 'family';

interface OnlineApplyPortalProps {
  lang: 'th' | 'en';
  initialMid?: string | null;
  initialName?: string | null;
  initialScreen?: PortalScreen;
  initialProduct?: string | null;
  initialShowSimulator?: boolean;
  onBackHome: () => void;
}

interface ModalMessage {
  title: string;
  desc: string;
}

function CloudShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 60" fill="none" className={className} aria-hidden="true">
      <path
        d="M25 48H112C123 48 131 40 131 30C131 21 124 13 114 12C110 5 102 1 93 1C81 1 71 9 68 20C64 17 59 15 53 15C40 15 30 24 29 36C21 37 15 42 15 48H25Z"
        fill="white"
      />
    </svg>
  );
}

function CloudWave() {
  return (
    <svg
      viewBox="0 0 400 70"
      className="pointer-events-none absolute -bottom-px left-0 z-[1] h-14 w-full opacity-95"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 70V42C24 28 56 30 78 44C102 22 146 20 174 38C204 16 254 18 282 40C312 24 358 26 400 44V70H0Z"
        fill="#FFF8F8"
      />
    </svg>
  );
}

function MascotTrio() {
  return (
    <svg viewBox="0 0 220 130" className="h-[104px] w-[168px] shrink-0" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="jmPortalRedFur" cx="45%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="55%" stopColor="#D71920" />
          <stop offset="100%" stopColor="#991B1B" />
        </radialGradient>
        <radialGradient id="jmPortalDarkBuddy" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </radialGradient>
        <radialGradient id="jmPortalCoralBuddy" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="100%" stopColor="#E11D48" />
        </radialGradient>
      </defs>
      <g transform="translate(8,38)">
        <circle cx="34" cy="40" r="28" fill="url(#jmPortalDarkBuddy)" />
        <ellipse cx="25" cy="36" rx="5.5" ry="6.5" fill="white" />
        <ellipse cx="42" cy="36" rx="5.5" ry="6.5" fill="white" />
        <circle cx="26" cy="37" r="3" fill="#0F172A" />
        <circle cx="41" cy="37" r="3" fill="#0F172A" />
        <path d="M29 48C32 51 36 51 39 48" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="18" cy="45" rx="4" ry="2.2" fill="#FECDD3" opacity="0.7" />
        <ellipse cx="48" cy="45" rx="4" ry="2.2" fill="#FECDD3" opacity="0.7" />
        <path d="M29 13L34 4L39 13" fill="#FDE047" />
      </g>
      <g transform="translate(144,34)">
        <circle cx="34" cy="44" r="29" fill="url(#jmPortalCoralBuddy)" />
        <path d="M20 18L26 8L32 17" fill="#E11D48" />
        <path d="M36 17L43 8L48 19" fill="#E11D48" />
        <ellipse cx="25" cy="40" rx="5.5" ry="6.5" fill="white" />
        <ellipse cx="43" cy="40" rx="5.5" ry="6.5" fill="white" />
        <circle cx="26" cy="41" r="3" fill="#0F172A" />
        <circle cx="42" cy="41" r="3" fill="#0F172A" />
        <path d="M28 53C32 57 37 57 41 53" stroke="#FFF" strokeWidth="2.6" strokeLinecap="round" />
      </g>
      <g transform="translate(52,6)">
        <path
          d="M58 10C69 10 75 17 82 21C92 27 101 31 105 43C110 54 106 64 108 75C110 87 101 100 87 105C74 109 66 107 58 107C50 107 42 109 29 105C15 100 6 87 8 75C10 64 6 54 11 43C15 31 24 27 34 21C41 17 47 10 58 10Z"
          fill="url(#jmPortalRedFur)"
        />
        <ellipse cx="42" cy="48" rx="9" ry="11" fill="#FFF" />
        <ellipse cx="74" cy="48" rx="9" ry="11" fill="#FFF" />
        <circle cx="44" cy="49" r="5" fill="#0F172A" />
        <circle cx="72" cy="49" r="5" fill="#0F172A" />
        <circle cx="46" cy="47" r="2" fill="#FFF" />
        <circle cx="74" cy="47" r="2" fill="#FFF" />
        <path d="M49 68C54 74 62 74 67 68" stroke="#FFF" strokeWidth="3.2" strokeLinecap="round" />
        <ellipse cx="30" cy="61" rx="5.5" ry="3" fill="#FEE2E2" opacity="0.65" />
        <ellipse cx="86" cy="61" rx="5.5" ry="3" fill="#FEE2E2" opacity="0.65" />
        <path
          d="M58 80L70 84V92C70 98 64 103 58 105C52 103 46 98 46 92V84L58 80Z"
          fill="#FEF08A"
          stroke="#FFF"
          strokeWidth="2"
        />
        <text x="58" y="96" textAnchor="middle" fill="#991B1B" fontSize="9" fontWeight="800">
          PA
        </text>
      </g>
    </svg>
  );
}

function DroneCircleIcon() {
  return (
    <svg viewBox="0 0 96 96" className="h-12 w-12 shrink-0" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="jmPortalDroneBg" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF5F5" />
          <stop offset="100%" stopColor="#FEE2E2" />
        </linearGradient>
        <linearGradient id="jmPortalDroneBody" x1="28" y1="34" x2="68" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D71920" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
      </defs>
      <rect width="96" height="96" rx="22" fill="url(#jmPortalDroneBg)" />
      <ellipse cx="22" cy="28" rx="14" ry="4" fill="#FCA5A5" opacity="0.65" />
      <ellipse cx="74" cy="28" rx="14" ry="4" fill="#FCA5A5" opacity="0.65" />
      <ellipse cx="22" cy="68" rx="14" ry="4" fill="#FCA5A5" opacity="0.65" />
      <ellipse cx="74" cy="68" rx="14" ry="4" fill="#FCA5A5" opacity="0.65" />
      <path d="M24 30L40 44M72 30L56 44M24 66L40 52M72 66L56 52" stroke="#475569" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="22" cy="28" r="4" fill="#0F172A" />
      <circle cx="74" cy="28" r="4" fill="#0F172A" />
      <circle cx="22" cy="68" r="4" fill="#0F172A" />
      <circle cx="74" cy="68" r="4" fill="#0F172A" />
      <path d="M10 28H34M62 28H86M10 68H34M62 68H86" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="35" y="38" width="26" height="20" rx="8" fill="url(#jmPortalDroneBody)" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="48" cy="48" r="5.5" fill="#0F172A" stroke="#FEF08A" strokeWidth="1.8" />
      <circle cx="49.5" cy="46.5" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

function getInitialSelectionFromProduct(p?: string | null): {
  category: PortalCategory;
  planId: string;
  droneId: string;
  otherId: string;
  screen?: PortalScreen;
} {
  if (!p) {
    return {
      category: 'pa',
      planId: 'pa-smart',
      droneId: 'drone-mini-2',
      otherId: 'other-home',
    };
  }
  if (PA_PLANS.some((x) => x.id === p)) {
    return { category: 'pa', planId: p, droneId: 'drone-mini-2', otherId: 'other-home', screen: 'pa-plans' };
  }
  if (p === 'drone' || DRONE_PLANS.some((x) => x.id === p)) {
    return {
      category: 'drone',
      planId: 'pa-smart',
      droneId: p === 'drone' ? 'drone-mini-1' : p,
      otherId: 'other-home',
      screen: 'pa-plans',
    };
  }
  if (OTHER_PLANS.some((x) => x.id === p)) {
    return { category: 'other', planId: 'pa-smart', droneId: 'drone-mini-2', otherId: p, screen: 'pa-plans' };
  }
  return {
    category: 'pa',
    planId: 'pa-smart',
    droneId: 'drone-mini-2',
    otherId: 'other-home',
  };
}

export const OnlineApplyPortal: React.FC<OnlineApplyPortalProps> = ({
  lang,
  initialMid,
  initialName,
  initialScreen,
  initialProduct,
  initialShowSimulator = false,
  onBackHome,
}) => {
  const initialSel = getInitialSelectionFromProduct(initialProduct);

  const [persona, setPersona] = useState<'guest' | 'policyholder'>(() =>
    initialMid || initialName ? 'policyholder' : 'guest'
  );
  const [mid, setMid] = useState<string>(() => initialMid || '');
  const [userName, setUserName] = useState<string>(() => cleanLineDisplayName(initialName) || '');
  const [midSource, setMidSource] = useState<string>('');
  const [midLoading, setMidLoading] = useState<boolean>(false);
  const [messagingApiConfigured, setMessagingApiConfigured] = useState<boolean>(false);
  const [linePictureUrl, setLinePictureUrl] = useState<string>('');
  const [liffIdInput, setLiffIdInput] = useState<string>(() => {
    const envLiffId =
      (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_LINE_LIFF_ID ||
      '';
    if (typeof window !== 'undefined') {
      const qLiff = new URLSearchParams(window.location.search).get('liffId');
      if (qLiff) return qLiff.trim();
    }
    return envLiffId.trim();
  });
  const [liffStatus, setLiffStatus] = useState<'not_configured' | 'initializing' | 'ready' | 'logged_in' | 'error'>(() => {
    const envLiffId =
      (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_LINE_LIFF_ID ||
      '';
    return envLiffId.trim() ? 'initializing' : 'not_configured';
  });
  const [liffErrorMsg, setLiffErrorMsg] = useState<string>('');

  const [screen, setScreen] = useState<PortalScreen>(() => initialScreen || initialSel.screen || 'pa-home');
  const [category, setCategory] = useState<PortalCategory>(initialSel.category);
  const [mode, setMode] = useState<PaBuyMode>('self');
  const [selectedPlanId, setSelectedPlanId] = useState<string>(initialSel.planId);
  const [selectedDroneId, setSelectedDroneId] = useState<string>(initialSel.droneId);
  const [selectedOtherId, setSelectedOtherId] = useState<string>(initialSel.otherId);

  const [familyRelation, setFamilyRelation] = useState<string>('คู่สมรส');
  const [famFirst, setFamFirst] = useState<string>('');
  const [famLast, setFamLast] = useState<string>('');
  const [famId, setFamId] = useState<string>('');
  const [famConsent, setFamConsent] = useState<boolean>(false);

  const [jPoints, setJPoints] = useState<number>(() =>
    initialMid === 'U4c8819e7b22a4f09d11e7730' ? 120 : 0
  );
  const [claimed500, setClaimed500] = useState<boolean>(false);
  const [policies, setPolicies] = useState<PortalPolicy[]>(() =>
    initialMid === 'U4c8819e7b22a4f09d11e7730'
      ? [
          {
            no: 'JM-PA-2569-88412',
            cat: 'PA',
            planId: 'pa-senior',
            planName: 'PA รุ่นใหญ่ (แผน 1)',
            holder: 'คุณสมศรี',
            relation: 'ตนเอง',
            cov: '100,000',
            med: '10,000',
            until: '15 ม.ค. 2570',
          },
        ]
      : []
  );

  // Modals
  const [modal, setModal] = useState<ModalMessage | null>(null);
  const [loginAsk, setLoginAsk] = useState<boolean>(false);
  const [pendingAction, setPendingAction] = useState<'checkout' | 'claim' | null>(null);
  const [claimAsk, setClaimAsk] = useState<boolean>(false);
  const [logoutAsk, setLogoutAsk] = useState<boolean>(false);
  const [couponConfirm, setCouponConfirm] = useState<PortalReward | null>(null);

  // Organization MID & LINE OA @638kqwtv Rich Menu Verification Panel
  const [orgTesterOpen, setOrgTesterOpen] = useState<boolean>(initialShowSimulator);
  const [testMidInput, setTestMidInput] = useState<string>(initialMid || 'U638kqwtv0001abc');
  const [testNameInput, setTestNameInput] = useState<string>(
    cleanLineDisplayName(initialName) || 'ABC'
  );
  const [linkCopied, setLinkCopied] = useState<boolean>(false);

  const syncUrlParams = useCallback(
    (nextMid: string, nextName: string, nextScreen: PortalScreen, nextProd?: string) => {
      const url = new URL(window.location.href);
      url.searchParams.set('page', 'apply-online');
      url.searchParams.delete('partner');
      if (nextMid) url.searchParams.set('mid', nextMid);
      else url.searchParams.delete('mid');
      if (nextName) url.searchParams.set('name', nextName);
      else url.searchParams.delete('name');
      url.searchParams.set('screen', nextScreen);
      if (nextProd) url.searchParams.set('p', nextProd);
      window.history.replaceState({}, '', url.toString());
    },
    []
  );

  // Resolve LINE `mid` via server-side `/api/line/profile` (which calls real LINE Messaging API if configured)
  const resolveMidProfile = useCallback(
    async (targetMid: string, fallbackName?: string, targetScreen?: PortalScreen) => {
      const trimmedMid = targetMid.trim();
      const cleanedName = cleanLineDisplayName(fallbackName);
      if (!trimmedMid) return;

      setMidLoading(true);
      try {
        const params = new URLSearchParams({ mid: trimmedMid });
        if (cleanedName) params.set('name', cleanedName);

        const resp = await fetch(`/api/line/profile?${params.toString()}`);
        const data = (await resp.json()) as {
          mid?: string;
          displayName?: string;
          source?: string;
          messagingApiConfigured?: boolean;
        };

        setMessagingApiConfigured(Boolean(data.messagingApiConfigured));

        if (resp.ok && data.displayName) {
          const finalName = cleanLineDisplayName(data.displayName);
          setPersona('policyholder');
          setMid(data.mid || trimmedMid);
          setUserName(finalName);
          setMidSource(data.source || 'query_param');
          setTestMidInput(data.mid || trimmedMid);
          setTestNameInput(finalName);

          if (trimmedMid === 'U4c8819e7b22a4f09d11e7730' && policies.length === 0) {
            setJPoints((prev) => (prev === 0 && !claimed500 ? 120 : prev));
            setPolicies([
              {
                no: 'JM-PA-2569-88412',
                cat: 'PA',
                planId: 'pa-senior',
                planName: 'PA รุ่นใหญ่ (แผน 1)',
                holder: `คุณ${finalName}`,
                relation: 'ตนเอง',
                cov: '100,000',
                med: '10,000',
                until: '15 ม.ค. 2570',
              },
            ]);
          }

          if (targetScreen) {
            setScreen(targetScreen);
          }
          syncUrlParams(data.mid || trimmedMid, finalName, targetScreen || screen);
          return;
        }

        // If API returned 404 but caller provided fallbackName manually
        if (cleanedName) {
          setPersona('policyholder');
          setMid(trimmedMid);
          setUserName(cleanedName);
          setMidSource('manual_test');
          setTestMidInput(trimmedMid);
          setTestNameInput(cleanedName);
          if (targetScreen) setScreen(targetScreen);
          syncUrlParams(trimmedMid, cleanedName, targetScreen || screen);
        }
      } catch {
        if (cleanedName) {
          setPersona('policyholder');
          setMid(trimmedMid);
          setUserName(cleanedName);
          setMidSource('local_fallback');
        }
      } finally {
        setMidLoading(false);
      }
    },
    [claimed500, policies.length, screen, syncUrlParams]
  );

  const initLiffProfile = useCallback(
    async (targetLiffId: string, triggerLoginIfNeeded = false) => {
      const cleanId = targetLiffId.trim();
      if (!cleanId) {
        setLiffStatus('not_configured');
        return;
      }

      setLiffStatus('initializing');
      setLiffErrorMsg('');
      try {
        await liff.init({ liffId: cleanId });
        if (liff.isLoggedIn()) {
          const profile = await liff.getProfile();
          const finalName = cleanLineDisplayName(profile.displayName || 'สมาชิก LINE');
          setPersona('policyholder');
          setMid(profile.userId);
          setUserName(finalName);
          if (profile.pictureUrl) setLinePictureUrl(profile.pictureUrl);
          setMidSource('line_liff_live');
          setTestMidInput(profile.userId);
          setTestNameInput(finalName);
          setLiffStatus('logged_in');
          syncUrlParams(profile.userId, finalName, screen);
        } else {
          setLiffStatus('ready');
          const isInIframe = typeof window !== 'undefined' && window.self !== window.top;
          if (triggerLoginIfNeeded && !isInIframe) {
            liff.login({ redirectUri: window.location.href });
          }
        }
      } catch (err) {
        setLiffStatus('error');
        setLiffErrorMsg(err instanceof Error ? err.message : 'ไม่สามารถเริ่มต้น LIFF ได้');
      }
    },
    [screen, syncUrlParams]
  );

  // Initial LINE `mid` & `LIFF` resolution when page mounts
  useEffect(() => {
    fetch('/api/line/status')
      .then((r) => r.json())
      .then((d: { messagingApiConfigured?: boolean }) => {
        setMessagingApiConfigured(Boolean(d.messagingApiConfigured));
      })
      .catch(() => {});

    if (liffIdInput) {
      void initLiffProfile(liffIdInput, false);
    }

    if (initialMid) {
      void resolveMidProfile(initialMid, initialName || undefined, initialScreen);
    } else if (initialName) {
      const cleaned = cleanLineDisplayName(initialName);
      setPersona('policyholder');
      setMid('U638kqwtv0001abc');
      setUserName(cleaned);
      setMidSource('query_param');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentPaPolicy = policies.find((p) => p.cat === 'PA' && p.relation === 'ตนเอง');
  const activeId =
    category === 'drone' ? selectedDroneId : category === 'other' ? selectedOtherId : selectedPlanId;

  const go = (nextScreen: PortalScreen, nextMode?: PaBuyMode, nextCat?: PortalCategory) => {
    setScreen(nextScreen);
    if (nextMode) setMode(nextMode);
    if (nextCat) setCategory(nextCat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProduct = (p: string) => {
    const sel = getInitialSelectionFromProduct(p);
    setCategory(sel.category);
    setSelectedPlanId(sel.planId);
    setSelectedDroneId(sel.droneId);
    setSelectedOtherId(sel.otherId);
    setMode('self');
    setScreen('pa-plans');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const executeClaim500 = () => {
    if (claimed500) return;
    setClaimed500(true);
    setJPoints((prev) => prev + 500);
    setModal({
      title: 'เชื่อม J Point ครั้งแรกสำเร็จ!',
      desc: 'รับฟรี 500 J Point พร้อมสิทธิ์ลด PA & โดรน 20% + คะแนน x3 และแลกเครื่องดื่ม Casa Lapin ได้เลย',
    });
  };

  const handleClaim500 = () => {
    if (persona === 'guest') {
      setPendingAction('claim');
      setLoginAsk(true);
      return;
    }
    executeClaim500();
  };

  const confirmRedeem = () => {
    const rw = couponConfirm;
    if (!rw) return;
    setCouponConfirm(null);
    if (jPoints < rw.cost) {
      setModal({
        title: 'คะแนนไม่พอ',
        desc: `กดเชื่อม J Point รับฟรี 500 คะแนนผ่าน LINE ก่อนเพื่อแลก ${rw.brand}`,
      });
      return;
    }
    setJPoints((prev) => prev - rw.cost);
    const code = 'JM-' + Math.floor(100000 + Math.random() * 899999);
    setModal({
      title: `ใช้คูปอง ${rw.brand} สำเร็จ!`,
      desc: `รหัสคูปอง: ${code} (หมดอายุใน 15 นาที)`,
    });
  };

  const executeCheckout = (overrideHolderName?: string) => {
    let plan = PA_PLANS.find((p) => p.id === selectedPlanId) || PA_PLANS[0];
    let catLabel = 'PA';

    if (category === 'drone') {
      plan = DRONE_PLANS.find((d) => d.id === selectedDroneId) || DRONE_PLANS[0];
      catLabel = 'โดรน';
    } else if (category === 'other') {
      plan = OTHER_PLANS.find((o) => o.id === selectedOtherId) || OTHER_PLANS[0];
      catLabel = 'Non-Motor';
    }

    if (category === 'pa' && mode === 'upsell') {
      if (!currentPaPolicy) {
        setModal({
          title: 'ยังไม่มีกรมธรรม์ PA',
          desc: 'เพิ่มความคุ้มครองได้เมื่อมีกรมธรรม์ PA ของตัวเองอยู่แล้ว เลือก "ซื้อให้ตัวเอง" ได้เลยค่ะ',
        });
        return;
      }
      const curPlan = PA_PLANS.find((p) => p.id === currentPaPolicy.planId);
      if (
        curPlan &&
        (plan.base <= curPlan.base ||
          plan.id.replace(/-\d$/, '') !== curPlan.id.replace(/-\d$/, ''))
      ) {
        setModal({
          title: 'เลือกแผนที่สูงกว่าเดิม',
          desc: `แผนปัจจุบันคือ ${currentPaPolicy.planName} กรุณาเลือกแผนที่คุ้มครองสูงกว่า`,
        });
        return;
      }
    }

    let finalFamilyName = '';
    if (category === 'pa' && mode === 'family') {
      const fn = famFirst.trim();
      const ln = famLast.trim();
      const idVal = famId.trim();
      if (!fn || !ln) {
        setModal({
          title: 'กรอกชื่อและนามสกุล',
          desc: `ใส่ชื่อและนามสกุลของ${familyRelation}ก่อนซื้อค่ะ`,
        });
        return;
      }
      if (!idVal) {
        setModal({
          title: 'กรอกเลขบัตรประชาชน',
          desc: `ใส่เลขบัตรประชาชนของ${familyRelation}ก่อนซื้อค่ะ`,
        });
        return;
      }
      if (!famConsent) {
        setModal({
          title: 'กรุณายืนยันความยินยอม',
          desc: 'ติ๊กยืนยันว่าได้รับความยินยอมจากผู้เอาประกัน และยอมรับนโยบายข้อมูลส่วนบุคคลก่อนค่ะ',
        });
        return;
      }
      finalFamilyName = `${fn} ${ln}`;
    }

    const earned = plan.pts * 3;
    const prefix = category === 'drone' ? 'JM-DR-' : category === 'other' ? 'JM-NM-' : 'JM-PA-';
    const newNo = prefix + '2569-' + Math.floor(10000 + Math.random() * 89999);
    const holderDisplay = overrideHolderName || (userName ? `คุณ${userName}` : 'คุณสมศรี');

    if (category === 'pa' && mode === 'upsell' && currentPaPolicy) {
      setPolicies((prev) =>
        prev.map((p) =>
          p.no === currentPaPolicy.no
            ? { ...p, planId: plan.id, planName: plan.name, cov: plan.cov, med: plan.med }
            : p
        )
      );
    } else if (category === 'pa' && mode === 'family') {
      setPolicies((prev) => [
        ...prev,
        {
          no: newNo,
          cat: catLabel,
          planId: plan.id,
          planName: plan.name,
          holder: finalFamilyName,
          relation: familyRelation,
          cov: plan.cov,
          med: plan.med,
          until: '16 พ.ย. 2570',
        },
      ]);
    } else {
      setPolicies((prev) => [
        {
          no: newNo,
          cat: catLabel,
          planId: plan.id,
          planName: plan.name,
          holder: holderDisplay,
          relation: category === 'pa' ? 'ตนเอง' : catLabel,
          cov: plan.cov,
          med: plan.med,
          until: '16 พ.ย. 2570',
        },
        ...prev,
      ]);
    }

    setJPoints((prev) => prev + earned);
    setModal({
      title:
        (category === 'pa' && mode === 'upsell' ? 'เพิ่มความคุ้มครองเป็น ' : 'ออกกรมธรรม์ ') +
        plan.name +
        ' สำเร็จ!',
      desc: `ลด 20% แล้ว · รับเพิ่ม +${earned} J Point (x3)`,
    });
    setScreen('policies');
  };

  const handleCheckout = () => {
    if (persona === 'guest') {
      setPendingAction('checkout');
      setLoginAsk(true);
      return;
    }
    executeCheckout();
  };

  const handleConfirmLogin = async () => {
    const resume = pendingAction;
    setLoginAsk(false);
    setPendingAction(null);

    const isInIframe = typeof window !== 'undefined' && window.self !== window.top;

    if (liffIdInput.trim() && (liffStatus === 'ready' || liffStatus === 'logged_in')) {
      try {
        if (!liff.isLoggedIn()) {
          if (!isInIframe) {
            liff.login({ redirectUri: window.location.href });
            return;
          }
        } else {
          const profile = await liff.getProfile();
          const realName = cleanLineDisplayName(profile.displayName || 'สมาชิก LINE');
          setPersona('policyholder');
          setMid(profile.userId);
          setUserName(realName);
          if (profile.pictureUrl) setLinePictureUrl(profile.pictureUrl);
          setMidSource('line_liff_live');
          syncUrlParams(profile.userId, realName, screen);
          if (resume === 'checkout') {
            executeCheckout(`คุณ${realName}`);
            return;
          }
          if (resume === 'claim') {
            executeClaim500();
            return;
          }
          return;
        }
      } catch {
        // fallback below if LIFF login not completed
      }
    }

    const targetMid = testMidInput.trim() || 'U638kqwtv0001abc';
    const targetName = cleanLineDisplayName(testNameInput) || 'ABC';
    setPersona('policyholder');
    setMid(targetMid);
    setUserName(targetName);
    setMidSource('line_login');
    syncUrlParams(targetMid, targetName, screen);

    if (resume === 'checkout') {
      executeCheckout(`คุณ${targetName}`);
      return;
    }
    if (resume === 'claim') {
      executeClaim500();
      return;
    }
    setModal({
      title: formatLineGreeting(targetName),
      desc: `เข้าสู่ระบบด้วย LINE (MID: ${targetMid}) เรียบร้อย ดูกรมธรรม์และรับ 500 J Point ของคุณได้ทันที`,
    });
  };

  const handleLogout = () => {
    setLogoutAsk(false);
    setPersona('guest');
    setMid('');
    setUserName('');
    setMidSource('');
    if (screen === 'policies') setScreen('pa-home');
    syncUrlParams('', '', screen === 'policies' ? 'pa-home' : screen);
  };

  const handleSimulateRichMenuTap = async (targetScreen: PortalScreen) => {
    const customMid = testMidInput.trim() || 'U638kqwtv0001abc';
    const customName = cleanLineDisplayName(testNameInput) || 'ABC';
    await resolveMidProfile(customMid, customName, targetScreen);
    setOrgTesterOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buildShareableRichMenuUrl = (targetScreen: PortalScreen) => {
    if (typeof window === 'undefined') return '';
    const u = new URL(window.location.href);
    u.searchParams.set('page', 'apply-online');
    u.searchParams.set('mid', testMidInput.trim() || 'U638kqwtv0001abc');
    if (testNameInput.trim()) {
      u.searchParams.set('name', cleanLineDisplayName(testNameInput));
    } else {
      u.searchParams.delete('name');
    }
    u.searchParams.set('screen', targetScreen);
    return u.toString();
  };

  const handleCopyTestUrl = async () => {
    const link = buildShareableRichMenuUrl(screen);
    try {
      await navigator.clipboard.writeText(link);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    }
  };

  // Filtered PA list when in upsell mode
  let currentPlanList =
    category === 'drone' ? DRONE_PLANS : category === 'other' ? OTHER_PLANS : PA_PLANS;
  if (category === 'pa' && mode === 'upsell' && persona !== 'guest' && currentPaPolicy) {
    const curBase = (PA_PLANS.find((p) => p.id === currentPaPolicy.planId) || { base: 0 }).base;
    const fam = (id: string) => id.replace(/-\d$/, '');
    const higher = PA_PLANS.filter(
      (p) => fam(p.id) === fam(currentPaPolicy.planId) && p.base > curBase
    );
    if (higher.length > 0) {
      currentPlanList = higher;
    }
  }

  const effectiveSelectedPlan =
    currentPlanList.find((p) => p.id === activeId) || currentPlanList[0];

  const buyLabel =
    (category === 'pa' && mode === 'upsell'
      ? 'เพิ่มความคุ้มครองเป็น '
      : category === 'pa' && mode === 'family'
        ? `ซื้อให้${familyRelation} · `
        : 'ซื้อ ') +
    effectiveSelectedPlan.name +
    ' · ฿' +
    effectiveSelectedPlan.price.toLocaleString();

  const bannerKey = bannerKeyForPlan(effectiveSelectedPlan.id);
  const greetingText = persona === 'guest' ? 'สวัสดีค่ะ' : formatLineGreeting(userName);

  return (
    <div className="min-h-screen bg-[#FFF8F8] text-slate-900 pt-16 md:pt-20 pb-24">
      {/* Top Website Return + LINE Portal Status Bar */}
      <div className="bg-white border-b border-[#FEE2E2] sticky top-16 md:top-20 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5">
            {screen === 'pa-home' ? (
              <button
                type="button"
                onClick={onBackHome}
                className="min-h-[38px] px-3 py-1.5 rounded-full md:rounded-lg border border-slate-200 hover:border-[#D71920] text-xs font-semibold text-slate-800 inline-flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#D71920]" />
                <span>{lang === 'th' ? 'กลับหน้าหลักเว็บไซต์' : 'Back to Main Site'}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => go('pa-home')}
                aria-label="กลับหน้าหลักสมัครกรมธรรม์"
                className="w-9 h-9 rounded-full md:rounded-lg bg-[#FFF1F1] text-[#D71920] inline-flex items-center justify-center cursor-pointer shrink-0"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            <div className="flex items-center gap-2">
              <img
                src={PORTAL_ASSETS.jaymartLogo}
                alt="Jaymart Insurance"
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-full object-contain bg-transparent shrink-0"
              />
              <div>
                <div className="text-sm font-extrabold text-[#1C1B1E] leading-tight">
                  Jaymart Insurance · สมัครกรมธรรม์ออนไลน์
                </div>
                <div className="text-[11px] text-slate-500">
                  ประกันภัยออนไลน์และสิทธิประโยชน์ J Point
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {persona === 'guest' ? (
              <button
                type="button"
                onClick={() => setLoginAsk(true)}
                className="min-h-[36px] inline-flex items-center gap-1.5 bg-[#06C755] hover:bg-[#05b34c] text-white rounded-full px-3.5 py-1.5 text-xs font-extrabold shadow-sm cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>เข้าสู่ระบบ LINE</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setLogoutAsk(true)}
                className="min-h-[36px] inline-flex items-center gap-2 bg-[#FFF1F1] border border-[#FECACA] text-[#1C1B1E] rounded-full pl-1 pr-3 py-1 text-xs font-bold cursor-pointer whitespace-nowrap"
              >
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E11D48] to-[#D71920] text-white inline-flex items-center justify-center text-[11px] font-extrabold">
                  {(userName || 'A').charAt(0).toUpperCase()}
                </span>
                <span>{userName ? `คุณ${userName}` : 'สมาชิก LINE'}</span>
                <span className="text-[10px] text-slate-400">▾</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Container (Expanded Responsive Canvas) */}
      <div className="max-w-6xl mx-auto">
        {screen === 'pa-home' && (
          <>
            {/* Sky Hero Banner */}
            <div className="relative bg-gradient-to-b from-[#C8102E] via-[#E63950] to-[#FFE4E6] px-4 sm:px-8 pt-5 pb-7 overflow-hidden md:rounded-b-3xl shadow-sm">
              <CloudShape className="pointer-events-none absolute top-7 -left-3 w-28 opacity-85" />
              <CloudShape className="pointer-events-none absolute top-5 -right-4 w-32 opacity-90" />
              <CloudWave />

              {/* Top Greeting Row */}
              <div className="relative z-[2] flex flex-wrap items-center justify-between gap-3 text-white">
                <div className="flex items-center gap-3">
                  <img
                    src={linePictureUrl || PORTAL_ASSETS.jaymartLogo}
                    alt={userName ? `คุณ${userName}` : 'Jaymart'}
                    referrerPolicy="no-referrer"
                    className={`w-12 h-12 rounded-full shrink-0 ${
                      linePictureUrl ? 'object-cover border-2 border-white' : 'object-contain'
                    }`}
                  />
                  <div>
                    <div className="text-base sm:text-xl font-extrabold tracking-tight">
                      <span>{greetingText}</span>
                    </div>
                    <div className="text-xs opacity-95 mt-0.5 flex flex-wrap items-center gap-1.5">
                      <span>
                        {persona === 'guest'
                          ? 'เข้าสู่ระบบ LINE เพื่อดูกรมธรรม์ และรับฟรี 500 J Point'
                          : 'สมาชิก J Point · ลด 20% + คะแนน x3'}
                      </span>
                      <JPointBrandStrip size="xs" variant="dark" />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => go('jpoint')}
                  className="relative border-0 bg-white/95 text-[#D71920] h-10 px-3.5 rounded-full text-xs sm:text-sm font-extrabold inline-flex items-center gap-1.5 cursor-pointer tabular-nums shadow-sm shrink-0"
                >
                  <img
                    src={PORTAL_ASSETS.jpointCoin}
                    alt="JP"
                    referrerPolicy="no-referrer"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span>{jPoints}</span>
                  {!claimed500 && (
                    <span className="absolute -top-2 -right-1 bg-[#D71920] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full border border-white">
                      +500
                    </span>
                  )}
                </button>
              </div>

              {/* Mascot Trio + Quick PA / Drone Circles */}
              <div className="relative z-[2] mt-4 flex items-end justify-between sm:justify-around gap-2">
                <button
                  type="button"
                  onClick={() => go('pa-plans', 'self', 'pa')}
                  className="flex flex-col items-center gap-1 cursor-pointer bg-transparent border-0"
                >
                  <div className="w-[70px] h-[70px] rounded-full bg-white shadow-md flex items-center justify-center border-2 border-[#FEE2E2] relative overflow-hidden">
                    <img
                      src={PORTAL_ASSETS.paSmart}
                      alt="PA"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-0 inset-x-0 bg-[#D71920]/95 text-white text-[9px] font-extrabold py-0.5 text-center">
                      PA -20%
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">ประกัน PA</span>
                </button>

                <MascotTrio />

                <button
                  type="button"
                  onClick={() => go('pa-plans', 'self', 'drone')}
                  className="flex flex-col items-center gap-1 cursor-pointer bg-transparent border-0"
                >
                  <div className="w-[70px] h-[70px] rounded-full bg-white shadow-md flex items-center justify-center border-2 border-[#FEE2E2] relative overflow-hidden">
                    <DroneCircleIcon />
                    <span className="absolute bottom-0 inset-x-0 bg-[#991B1B] text-white text-[9px] font-extrabold py-0.5 text-center">
                      โดรน -20%
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">ประกันโดรน</span>
                </button>
              </div>
            </div>

            {/* Body Content */}
            <div className="px-4 sm:px-8 pt-5 space-y-5">
              {/* 9 Products Shop Grid */}
              <div className="bg-white border border-[#FECACA] rounded-2xl p-4 sm:p-5 space-y-3 shadow-sm">
                <div className="flex flex-wrap items-end justify-between gap-2">
                  <div>
                    <h2 className="text-base sm:text-lg font-extrabold text-[#1C1B1E]">
                      เลือกซื้อประกันออนไลน์
                    </h2>
                    <p className="text-xs text-slate-500">9 ประกัน · 18 แผน · ออกกรมธรรม์ดิจิทัลได้ทันที</p>
                  </div>
                  <span className="bg-[#FEE2E2] text-[#D71920] text-[11px] font-extrabold px-2.5 py-1 rounded-md">
                    -20% สมาชิก J Point
                  </span>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 sm:gap-2.5">
                  {HOME_PRODUCTS.map((h) => (
                    <button
                      key={h.p}
                      type="button"
                      onClick={() => openProduct(h.p)}
                      className="border border-[#FEE2E2] hover:border-[#D71920] bg-[#FFF8F8] rounded-2xl p-2 flex flex-col items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <img
                        src={PORTAL_ASSETS[h.img]}
                        alt={h.name}
                        referrerPolicy="no-referrer"
                        className="w-full aspect-square object-cover rounded-xl"
                      />
                      <span className="text-xs font-extrabold text-[#1C1B1E] text-center leading-tight">
                        {h.name}
                      </span>
                      <span className="text-[11px] font-extrabold text-[#D71920] tabular-nums">
                        เริ่ม {h.from}
                        <small className="text-[9px] text-slate-500 font-semibold ml-0.5">
                          {h.per}
                        </small>
                      </span>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => go('pa-plans', 'self', 'pa')}
                  className="w-full min-h-[44px] rounded-full md:rounded-xl bg-gradient-to-br from-[#E11D48] via-[#D71920] to-[#991B1B] text-white text-sm font-bold hover:opacity-95 transition-opacity cursor-pointer"
                >
                  ดูและเปรียบเทียบทุกแผน
                </button>
              </div>

              {/* Policy Strip (when signed in via LINE / MID with policies) */}
              {persona !== 'guest' && policies.length > 0 && (
                <div className="bg-white border border-[#FECACA] rounded-2xl p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <strong className="text-sm text-[#1C1B1E]">
                      กรมธรรม์ของฉัน ({policies.length})
                    </strong>
                    <button
                      type="button"
                      onClick={() => go('policies')}
                      className="text-xs font-bold text-[#D71920] cursor-pointer"
                    >
                      ดูทั้งหมด ›
                    </button>
                  </div>

                  {policies.slice(0, 3).map((pl) => (
                    <div
                      key={pl.no}
                      className="flex items-center justify-between gap-2 py-2 border-t border-dashed border-[#FEE2E2]"
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-[#1C1B1E]">
                          {pl.planName}
                        </div>
                        <div className="text-[11px] text-slate-500 tabular-nums">
                          {pl.holder} · คุ้มครอง ฿{pl.cov} · ถึง {pl.until}
                        </div>
                      </div>
                      <span className="text-[11px] bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap">
                        คุ้มครองอยู่
                      </span>
                    </div>
                  ))}

                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => go('pa-plans', 'upsell', 'pa')}
                      className="min-h-[40px] border border-[#FECACA] bg-white text-[#D71920] rounded-full md:rounded-xl text-xs font-bold cursor-pointer"
                    >
                      เพิ่มความคุ้มครอง
                    </button>
                    <button
                      type="button"
                      onClick={() => go('pa-plans', 'family', 'pa')}
                      className="min-h-[40px] border border-[#FECACA] bg-white text-[#991B1B] rounded-full md:rounded-xl text-xs font-bold cursor-pointer"
                    >
                      ซื้อให้คนที่คุณรัก
                    </button>
                  </div>
                </div>
              )}

              {/* J Point x LINE @638kqwtv Banner */}
              <div className="bg-gradient-to-br from-[#1C1B1E] to-[#5C1118] text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={PORTAL_ASSETS.jpointCoin}
                    alt="JPoint"
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full border-2 border-amber-300 object-cover shrink-0"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] text-amber-300 font-extrabold">
                        J POINT × JAYMART INSURANCE
                      </span>
                      <JPointBrandStrip size="xs" variant="dark" />
                    </div>
                    <div className="text-sm sm:text-base font-extrabold mt-0.5">
                      {claimed500
                        ? `เชื่อมบัญชีแล้ว (${jPoints} คะแนน)`
                        : 'เชื่อมเว็บนี้รับฟรี 500 คะแนน!'}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <a
                    href={LINE_OA_REWARD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[40px] px-3.5 py-2 rounded-full md:rounded-xl bg-[#06C755] text-white text-xs font-extrabold inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>ไปที่ LINE</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleClaim500}
                    className="min-h-[40px] px-4 py-2 rounded-full md:rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-extrabold cursor-pointer"
                  >
                    {claimed500 ? 'รับแล้ว ✓' : 'รับ 500 คะแนน'}
                  </button>
                </div>
              </div>

              {/* 4 Quick Service Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <button
                  type="button"
                  onClick={() => setClaimAsk(true)}
                  className="bg-white border border-[#FEE2E2] hover:border-[#D71920] rounded-2xl p-3 flex flex-col items-center gap-1.5 text-xs font-bold text-[#1C1B1E] cursor-pointer"
                >
                  <span className="w-10 h-10 rounded-xl bg-[#FFF1F2] text-[#D71920] flex items-center justify-center">
                    <PhoneCall className="w-5 h-5" />
                  </span>
                  <span>แจ้งเคลม 24 ชม.</span>
                </button>

                <a
                  href={`${JAYMART_MAIN_SITE}/page/check-policy/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[#FEE2E2] hover:border-[#D71920] rounded-2xl p-3 flex flex-col items-center gap-1.5 text-xs font-bold text-[#1C1B1E]"
                >
                  <span className="w-10 h-10 rounded-xl bg-[#FFF1F2] text-[#D71920] flex items-center justify-center">
                    <FileCheck2 className="w-5 h-5" />
                  </span>
                  <span>ตรวจสอบกรมธรรม์</span>
                </a>

                <a
                  href="https://www.blueventuretpa.com/page/our-network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[#FEE2E2] hover:border-[#D71920] rounded-2xl p-3 flex flex-col items-center gap-1.5 text-xs font-bold text-[#1C1B1E]"
                >
                  <span className="w-10 h-10 rounded-xl bg-[#FFF1F2] text-[#D71920] flex items-center justify-center">
                    <Headset className="w-5 h-5" />
                  </span>
                  <span>โรงพยาบาลในเครือ</span>
                </a>

                <a
                  href={`${JAYMART_MAIN_SITE}/page/content-detail/?content=81`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[#FEE2E2] hover:border-[#D71920] rounded-2xl p-3 flex flex-col items-center gap-1.5 text-xs font-bold text-[#1C1B1E]"
                >
                  <span className="w-10 h-10 rounded-xl bg-[#FFF1F2] text-[#D71920] flex items-center justify-center">
                    <Plane className="w-5 h-5" />
                  </span>
                  <span>ประกันเดินทาง</span>
                </a>
              </div>

              {/* Rewards Section */}
              <div className="space-y-3">
                <h3 className="text-sm sm:text-base font-extrabold text-[#1C1B1E]">
                  ของรางวัล J Point &amp; Casa Lapin
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {REWARDS.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setCouponConfirm(r)}
                      className="bg-white border border-[#FEE2E2] hover:border-[#D71920] rounded-2xl overflow-hidden text-left flex flex-col cursor-pointer transition-colors"
                    >
                      {r.imgKey ? (
                        <img
                          src={PORTAL_ASSETS[r.imgKey]}
                          alt={r.brand}
                          referrerPolicy="no-referrer"
                          className="w-full h-24 sm:h-28 object-cover"
                        />
                      ) : (
                        <div className={`h-24 sm:h-28 p-3 text-white flex flex-col justify-between ${r.bgClass}`}>
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold">{r.brand}</span>
                            <span>{r.emoji}</span>
                          </div>
                          <strong className="text-base">{r.val}</strong>
                        </div>
                      )}
                      <div className="p-3 flex-1 flex flex-col justify-between gap-2">
                        <div className="text-xs font-bold text-[#1C1B1E] leading-snug">{r.title}</div>
                        <div className="text-xs font-extrabold text-[#D71920] tabular-nums">
                          {r.cost === 0 ? 'ฟรี 0 คะแนน' : `${r.cost} J Point`}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Portal Footer */}
              <footer className="text-xs text-slate-500 leading-relaxed pt-3 border-t border-[#FEE2E2] space-y-1">
                <strong className="text-[#1C1B1E] text-sm block">
                  บริษัท เจมาร์ท ประกันภัย จำกัด (มหาชน)
                </strong>
                <div>
                  195/1 อาคาร JMT Office รามคำแหง ชั้น 5 ถนนรามคำแหง แขวงราษฎร์พัฒนา เขตสะพานสูง กรุงเทพฯ 10240
                </div>
                <div>
                  โทร{' '}
                  <a href="tel:020990555" className="text-[#D71920] font-semibold">
                    02-099-0555
                  </a>{' '}
                  (จ.–ศ. 08:30–17:00) · แจ้งอุบัติเหตุ 24 ชม. กด 1 ·{' '}
                  <a
                    href={LINE_OA_REWARD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D71920] font-semibold"
                  >
                    LINE รับคะแนน 500 JP
                  </a>
                </div>
                <div>เลขทะเบียนบริษัท 0107556000060 · © 2026 Jaymart Insurance</div>
              </footer>
            </div>
          </>
        )}

        {screen === 'pa-plans' && (
          <div className="px-4 sm:px-8 pt-5 space-y-5">
            {/* Category Tabs & Banner */}
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-[#FEE2E2] rounded-2xl">
                {(
                  [
                    { key: 'pa', label: 'PA อุบัติเหตุ' },
                    { key: 'drone', label: 'ประกันโดรน' },
                    { key: 'other', label: 'กรมธรรม์อื่นๆ' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => go('pa-plans', 'self', tab.key)}
                    className={`py-2.5 px-2 rounded-xl text-xs sm:text-sm font-extrabold transition-colors cursor-pointer ${
                      category === tab.key
                        ? 'bg-gradient-to-br from-[#E11D48] via-[#D71920] to-[#991B1B] text-white shadow-sm'
                        : 'text-slate-700 hover:text-slate-950'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {bannerKey && (
                <img
                  src={PORTAL_ASSETS[bannerKey]}
                  alt={effectiveSelectedPlan.name}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-56 object-cover rounded-2xl shadow-sm"
                />
              )}

              {category === 'pa' && (
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      { key: 'self', label: 'ซื้อให้ตัวเอง' },
                      { key: 'upsell', label: 'เพิ่มความคุ้มครอง' },
                      { key: 'family', label: 'ซื้อให้คนที่คุณรัก' },
                    ] as const
                  ).map((m) => (
                    <button
                      key={m.key}
                      type="button"
                      onClick={() => go('pa-plans', m.key, 'pa')}
                      className={`py-2.5 px-2 rounded-full md:rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                        mode === m.key
                          ? 'bg-gradient-to-br from-[#E11D48] to-[#D71920] text-white border-transparent shadow-md'
                          : 'bg-white border-[#FECACA] text-[#991B1B]'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* PA Mode Details */}
            {category === 'pa' && mode === 'self' && persona !== 'guest' && (
              <div className="bg-white rounded-2xl p-4 text-sm text-slate-700 border border-[#FEE2E2] shadow-sm">
                ผู้เอาประกัน: <strong>{formatLineGreeting(userName).replace('สวัสดี ', '')}</strong>{' '}
                {mid && <span className="text-xs font-mono text-slate-400">({mid})</span>}
              </div>
            )}

            {category === 'pa' && mode === 'upsell' && (
              <div className="bg-white rounded-2xl p-4 text-sm text-slate-700 border border-[#FEE2E2] shadow-sm flex items-center justify-between gap-3">
                {persona === 'guest' ? (
                  <>
                    <span>เข้าสู่ระบบเพื่อดูแผนปัจจุบันของคุณ</span>
                    <button
                      type="button"
                      onClick={() => setLoginAsk(true)}
                      className="bg-[#06C755] text-white px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer"
                    >
                      เข้าสู่ระบบ LINE
                    </button>
                  </>
                ) : currentPaPolicy ? (
                  <span>
                    แผนปัจจุบัน: <strong>{currentPaPolicy.planName}</strong> · คุ้มครอง ฿
                    {currentPaPolicy.cov}
                  </span>
                ) : (
                  <span>ยังไม่มีกรมธรรม์ PA — เลือกซื้อแผนแรกให้ตัวเองได้เลย</span>
                )}
              </div>
            )}

            {category === 'pa' && mode === 'family' && (
              <div className="bg-white rounded-2xl p-4 border border-[#FEE2E2] shadow-sm space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {['คู่สมรส', 'พ่อ', 'แม่', 'ลูก', 'พี่น้อง'].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setFamilyRelation(r)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                        familyRelation === r
                          ? 'bg-[#D71920] text-white border-[#D71920]'
                          : 'bg-[#FFF8F8] text-[#991B1B] border-[#FECACA]'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    value={famFirst}
                    onChange={(e) => setFamFirst(e.target.value)}
                    placeholder="ชื่อ"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#D71920] focus:outline-none"
                  />
                  <input
                    type="text"
                    value={famLast}
                    onChange={(e) => setFamLast(e.target.value)}
                    placeholder="นามสกุล"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#D71920] focus:outline-none"
                  />
                </div>

                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={13}
                  value={famId}
                  onChange={(e) => setFamId(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="เลขบัตรประชาชน 13 หลัก"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-mono focus:border-[#D71920] focus:outline-none"
                />

                <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={famConsent}
                    onChange={(e) => setFamConsent(e.target.checked)}
                    className="mt-0.5 accent-[#D71920]"
                  />
                  <span>
                    ได้รับความยินยอมจากผู้เอาประกันแล้ว และยอมรับ{' '}
                    <a
                      href={`${JAYMART_MAIN_SITE}/page/policy/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D71920] underline"
                    >
                      นโยบายข้อมูลส่วนบุคคล
                    </a>
                  </span>
                </label>
              </div>
            )}

            {/* Plans List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {currentPlanList.map((p) => {
                const isSel = effectiveSelectedPlan.id === p.id;
                const thumbSrc = p.imgKey ? PORTAL_ASSETS[p.imgKey] : null;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      if (category === 'drone') setSelectedDroneId(p.id);
                      else if (category === 'other') setSelectedOtherId(p.id);
                      else setSelectedPlanId(p.id);
                    }}
                    className={`text-left rounded-2xl p-4 border-2 transition-colors flex flex-col justify-between gap-3 cursor-pointer ${
                      isSel
                        ? 'border-[#D71920] bg-[#FFF8F8] shadow-sm'
                        : 'border-[#FEE2E2] bg-white hover:border-[#FECACA]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2.5">
                      <div className="flex items-center gap-3">
                        {thumbSrc && (
                          <img
                            src={thumbSrc}
                            alt={p.name}
                            referrerPolicy="no-referrer"
                            className="w-12 h-12 rounded-xl object-cover border border-[#FEE2E2] shrink-0"
                          />
                        )}
                        <div>
                          <div className="text-sm font-extrabold text-[#1C1B1E]">{p.name}</div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {p.sub} · คุ้มครอง ฿{p.cov}
                          </div>
                        </div>
                      </div>
                      <span className="bg-[#FEE2E2] text-[#D71920] text-[10px] font-extrabold px-2 py-0.5 rounded-md shrink-0">
                        -20%
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <div className="tabular-nums">
                        <span className="text-lg font-extrabold text-[#D71920]">
                          ฿{p.price.toLocaleString()}
                        </span>{' '}
                        <span className="text-xs line-through text-slate-400">
                          ฿{p.base.toLocaleString()}
                        </span>{' '}
                        <span className="text-xs text-slate-500">/{p.per || 'ปี'}</span>
                      </div>
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2 py-0.5 rounded-md tabular-nums">
                        J Point x3 (+{p.pts * 3} JP)
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Sticky Buy CTA */}
            <div className="sticky bottom-20 z-20 max-w-lg mx-auto">
              <button
                type="button"
                onClick={handleCheckout}
                className="w-full min-h-[48px] px-6 py-3 rounded-full md:rounded-2xl bg-gradient-to-br from-[#E11D48] via-[#D71920] to-[#991B1B] text-white text-sm font-extrabold shadow-lg hover:opacity-95 cursor-pointer"
              >
                {buyLabel}
              </button>
            </div>
          </div>
        )}

        {screen === 'jpoint' && (
          <div className="px-4 sm:px-8 pt-5 space-y-5">
            {/* J Point Hero Card */}
            <div className="bg-gradient-to-br from-[#2B1F1C] via-[#1C1B1E] to-[#5C1118] text-white rounded-3xl p-5 sm:p-7 space-y-4 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={linePictureUrl || PORTAL_ASSETS.jaymartLogo}
                    alt={userName ? `คุณ${userName}` : 'Jaymart'}
                    referrerPolicy="no-referrer"
                    className={`w-11 h-11 rounded-full shrink-0 ${
                      linePictureUrl ? 'object-cover border border-white/60' : 'object-contain'
                    }`}
                  />
                  <div>
                    <div className="text-sm sm:text-base font-extrabold">{greetingText}</div>
                    <div className="text-[11px] text-amber-300 font-extrabold flex flex-wrap items-center gap-1.5 mt-0.5">
                      <span>
                        {persona === 'guest'
                          ? 'เข้าสู่ระบบผ่าน LINE เพื่อรับ 500 JP'
                          : 'BRONZE MEMBER TIER'}
                      </span>
                      <JPointBrandStrip size="xs" variant="dark" />
                    </div>
                  </div>
                </div>

                {persona === 'guest' ? (
                  <button
                    type="button"
                    onClick={() => setLoginAsk(true)}
                    className="bg-[#06C755] text-white px-4 py-2 rounded-full text-xs font-extrabold cursor-pointer"
                  >
                    เข้าสู่ระบบ LINE
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setLogoutAsk(true)}
                    className="text-xs font-bold text-rose-200 underline cursor-pointer"
                  >
                    ออกจากระบบ
                  </button>
                )}
              </div>

              <div className="bg-[#2C2C2E] rounded-2xl p-4 flex items-center justify-center gap-3">
                <img
                  src={PORTAL_ASSETS.jpointCoin}
                  alt="JPoint"
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <strong className="text-3xl font-extrabold tabular-nums">{jPoints}</strong>
                <span className="text-sm text-slate-300">คะแนน</span>
              </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleClaim500}
                  className="min-h-[46px] rounded-full md:rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm cursor-pointer"
                >
                  {claimed500
                    ? 'เชื่อม J Point & รับ 500 คะแนนแล้ว ✓'
                    : 'เชื่อม J Point ครั้งแรกรับฟรี 500 คะแนน'}
                </button>
                <a
                  href={LINE_OA_REWARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] rounded-full md:rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white font-extrabold text-sm inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ไปที่ LINE รับ 500 คะแนน</span>
                </a>
              </div>
            </div>

            <div className="bg-white border border-[#FECACA] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5">
              <div className="bg-white p-2 border border-slate-200 rounded-xl shrink-0">
                <QRCodeSVG value={LINE_OA_REWARD_URL} size={112} bgColor="#FFFFFF" fgColor="#000000" />
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="text-xs font-extrabold text-[#D71920] flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                  <span>ขั้นตอนรับคะแนน JP ฟรี 500 คะแนนผ่าน LINE</span>
                  <JPointBrandStrip size="xs" variant="light" />
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  1. แอด LINE Official → 2. กดปุ่ม{' '}
                  <strong>&quot;รับคะแนน 500 คะแนน&quot;</strong> บน Rich Menu → 3. รับสิทธิ์ลดเบี้ย 20% + คะแนน x3 ได้ทันที
                </p>
              </div>
            </div>

            {/* Redeem Rewards */}
            <div className="space-y-3">
              <h3 className="text-sm sm:text-base font-extrabold text-[#1C1B1E]">
                แลกคูปอง &amp; ของรางวัล J Point
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {REWARDS.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setCouponConfirm(r)}
                    className="bg-white border border-[#FEE2E2] hover:border-[#D71920] rounded-2xl overflow-hidden text-left flex flex-col cursor-pointer"
                  >
                    {r.imgKey ? (
                      <img
                        src={PORTAL_ASSETS[r.imgKey]}
                        alt={r.brand}
                        referrerPolicy="no-referrer"
                        className="w-full h-24 object-cover"
                      />
                    ) : (
                      <div className={`h-24 p-3 text-white flex flex-col justify-between ${r.bgClass}`}>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold">{r.brand}</span>
                          <span>{r.emoji}</span>
                        </div>
                        <strong className="text-base">{r.val}</strong>
                      </div>
                    )}
                    <div className="p-3 flex-1 flex flex-col justify-between gap-2">
                      <div className="text-xs font-bold text-[#1C1B1E]">{r.title}</div>
                      <div className="text-xs font-extrabold text-[#D71920] tabular-nums">
                        {r.cost === 0 ? 'ฟรี 0 คะแนน' : `${r.cost} คะแนน`}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {screen === 'policies' && (
          <div className="px-4 sm:px-8 pt-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-extrabold text-[#1C1B1E]">
                กรมธรรม์ของฉัน ({greetingText})
              </h2>
              <button
                type="button"
                onClick={() => go('pa-plans', 'self', 'pa')}
                className="px-3.5 py-1.5 rounded-full md:rounded-lg bg-[#D71920] text-white text-xs font-bold cursor-pointer"
              >
                + สมัครเพิ่ม
              </button>
            </div>

            {policies.length === 0 ? (
              <div className="bg-white border border-[#FEE2E2] rounded-2xl p-8 text-center space-y-3">
                <strong className="text-base block">ยังไม่มีกรมธรรม์</strong>
                <p className="text-xs sm:text-sm text-slate-500">
                  เชื่อมรับ 500 J Point แล้วเลือกซื้อ PA หรือโดรน ลด 20% + คะแนน x3
                </p>
                <button
                  type="button"
                  onClick={() => go('pa-plans', 'self', 'pa')}
                  className="px-6 py-2.5 rounded-full md:rounded-xl bg-gradient-to-br from-[#E11D48] to-[#D71920] text-white text-sm font-bold cursor-pointer"
                >
                  ซื้อประกันเลย
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {policies.map((p) => (
                  <div
                    key={p.no}
                    className="bg-white border border-[#FEE2E2] rounded-2xl p-4 space-y-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <strong className="text-[#D71920] text-sm">
                        {p.planName} ({p.cat})
                      </strong>
                      <span className="bg-emerald-100 text-emerald-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                        คุ้มครองอยู่
                      </span>
                    </div>
                    <div className="text-sm font-bold text-[#1C1B1E]">
                      {p.holder} ({p.relation})
                    </div>
                    <div className="text-xs text-slate-500 flex items-center justify-between tabular-nums">
                      <span>
                        {p.no} · คุ้มครอง ฿{p.cov}
                      </span>
                      <button
                        type="button"
                        onClick={() => setClaimAsk(true)}
                        className="text-[#D71920] font-bold cursor-pointer"
                      >
                        แจ้งเคลม ›
                      </button>
                    </div>
                    {p.cat === 'PA' && p.relation === 'ตนเอง' && (
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => go('pa-plans', 'upsell', 'pa')}
                          className="py-2 px-3 rounded-full md:rounded-xl border border-[#FECACA] text-[#D71920] text-xs font-bold cursor-pointer"
                        >
                          เพิ่มความคุ้มครอง
                        </button>
                        <button
                          type="button"
                          onClick={() => go('pa-plans', 'family', 'pa')}
                          className="py-2 px-3 rounded-full md:rounded-xl border border-[#FECACA] text-[#991B1B] text-xs font-bold cursor-pointer"
                        >
                          ซื้อให้คนที่คุณรัก
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Thumb Navigation Bar */}
      <nav
        aria-label="เมนูหลักแอปสมัครกรมธรรม์ออนไลน์"
        className="fixed bottom-0 inset-x-0 z-30 h-[66px] bg-white/95 backdrop-blur-md border-t border-[#FEE2E2] grid grid-cols-5 items-center px-2"
      >
        <button
          type="button"
          onClick={() => go('pa-home')}
          className={`flex flex-col items-center justify-center gap-0.5 h-full text-[11px] cursor-pointer ${
            screen === 'pa-home' ? 'text-[#D71920] font-bold' : 'text-slate-500 font-medium'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>หน้าหลัก</span>
        </button>

        <button
          type="button"
          onClick={() => go('pa-plans')}
          className={`flex flex-col items-center justify-center gap-0.5 h-full text-[11px] cursor-pointer ${
            screen === 'pa-plans' ? 'text-[#D71920] font-bold' : 'text-slate-500 font-medium'
          }`}
        >
          <ShieldPlus className="w-5 h-5" />
          <span>ซื้อประกัน</span>
        </button>

        <div className="flex flex-col items-center justify-center -mt-4">
          <button
            type="button"
            onClick={() =>
              setModal({
                title: 'PA & Non-Motor e-Card',
                desc: `ผู้เอาประกัน: ${greetingText} · MID: ${mid || 'ยังไม่เชื่อม'} · กรมธรรม์: ${policies.length} ฉบับ`,
              })
            }
            aria-label="เปิดบัตร e-Card"
            className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E11D48] via-[#D71920] to-[#991B1B] text-white border-4 border-white shadow-lg flex items-center justify-center cursor-pointer"
          >
            <CreditCard className="w-5 h-5" />
          </button>
          <span className="text-[10px] font-bold text-[#991B1B] mt-0.5">e-Card</span>
        </div>

        <button
          type="button"
          onClick={() => go('jpoint')}
          className={`flex flex-col items-center justify-center gap-0.5 h-full text-[11px] cursor-pointer ${
            screen === 'jpoint' ? 'text-[#D71920] font-bold' : 'text-slate-500 font-medium'
          }`}
        >
          <Coins className="w-5 h-5" />
          <span>J Point</span>
        </button>

        <button
          type="button"
          onClick={() => go('policies')}
          className={`flex flex-col items-center justify-center gap-0.5 h-full text-[11px] cursor-pointer ${
            screen === 'policies' ? 'text-[#D71920] font-bold' : 'text-slate-500 font-medium'
          }`}
        >
          <FileCheck2 className="w-5 h-5" />
          <span>กรมธรรม์</span>
        </button>
      </nav>

      {/* Modals */}
      {loginAsk && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/70 flex items-center justify-center p-4"
          onClick={() => {
            setLoginAsk(false);
            setPendingAction(null);
          }}
        >
          <div
            className="bg-white rounded-3xl p-6 max-w-sm w-full space-y-4 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 rounded-2xl bg-[#06C755] text-white flex items-center justify-center mx-auto">
              <UserPlus className="w-7 h-7" />
            </div>
            <strong className="text-lg block text-slate-900">เข้าสู่ระบบด้วย LINE</strong>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {pendingAction === 'checkout'
                ? 'เชื่อมต่อบัญชี LINE เพื่อสมัครกรมธรรม์และรับ J Point '
                : pendingAction === 'claim'
                  ? 'เชื่อมต่อบัญชี LINE เพื่อรับฟรี 500 J Point '
                  : 'เชื่อมต่อบัญชี LINE ของคุณ เพื่อดูกรมธรรม์และรับสิทธิพิเศษ 500 J Point'}
              <JPointBrandStrip size="xs" variant="light" className="ml-1.5 -mt-0.5" />
            </p>
            <button
              type="button"
              onClick={() => void handleConfirmLogin()}
              className="w-full py-3 rounded-full md:rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white text-sm font-extrabold inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>อนุญาตและเข้าสู่ระบบ</span>
            </button>
            {typeof window !== 'undefined' && window.self !== window.top && Boolean(liffIdInput.trim()) && (
              <a
                href={window.location.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full md:rounded-xl border border-[#06C755]/40 bg-[#06C755]/5 hover:bg-[#06C755]/10 text-[#059642] text-xs font-bold inline-flex items-center justify-center gap-1.5"
              >
                <span>เปิดในแท็บใหม่เพื่อล็อกอิน LINE จริง</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              type="button"
              onClick={() => {
                setLoginAsk(false);
                setPendingAction(null);
              }}
              className="text-xs font-bold text-slate-500 py-1 cursor-pointer"
            >
              ไว้ทีหลัง
            </button>
          </div>
        </div>
      )}

      {claimAsk && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/70 flex items-center justify-center p-4"
          onClick={() => setClaimAsk(false)}
        >
          <div
            className="bg-white rounded-3xl p-6 max-w-sm w-full space-y-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <strong className="text-lg block text-center text-slate-900">แจ้งเคลม</strong>
            <a
              href="tel:020990555"
              className="flex items-center gap-3 bg-gradient-to-br from-[#E11D48] to-[#D71920] text-white rounded-2xl p-3.5"
            >
              <PhoneCall className="w-5 h-5 shrink-0" />
              <div>
                <div className="text-sm font-extrabold">โทร 02-099-0555 กด 1</div>
                <div className="text-[11px] opacity-90">แจ้งอุบัติเหตุ 24 ชั่วโมง</div>
              </div>
            </a>
            <div className="text-xs text-slate-500 text-center">ดูขั้นตอนและเอกสารเคลมตามประเภทประกัน</div>
            <div className="divide-y divide-slate-100">
              {CLAIMS.map((c) => (
                <a
                  key={c.c}
                  href={`${JAYMART_MAIN_SITE}/page/content-detail/?content=${c.c}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2.5 text-xs sm:text-sm font-semibold text-slate-900 hover:text-[#D71920]"
                >
                  <span>{c.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#D71920] shrink-0" />
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setClaimAsk(false)}
              className="w-full py-2 text-xs font-bold text-slate-500 cursor-pointer"
            >
              ปิด
            </button>
          </div>
        </div>
      )}

      {logoutAsk && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/70 flex items-center justify-center p-4"
          onClick={() => setLogoutAsk(false)}
        >
          <div
            className="bg-white rounded-3xl p-6 max-w-sm w-full space-y-3 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <strong className="text-base block text-slate-900">{greetingText}</strong>
            <p className="text-xs text-slate-600">
              เชื่อมกับบัญชี LINE แล้ว (MID: {mid}) · J Point {jPoints.toLocaleString()} คะแนน
            </p>
            <button
              type="button"
              onClick={handleLogout}
              className="w-full py-2.5 rounded-full md:rounded-xl bg-gradient-to-br from-[#E11D48] to-[#D71920] text-white text-sm font-bold cursor-pointer"
            >
              ออกจากระบบ
            </button>
            <button
              type="button"
              onClick={() => setLogoutAsk(false)}
              className="text-xs font-bold text-slate-500 py-1 cursor-pointer"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      )}

      {couponConfirm && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/70 flex items-center justify-center p-4"
          onClick={() => setCouponConfirm(null)}
        >
          <div
            className="bg-[#121214] text-white border border-white/15 rounded-3xl p-6 max-w-sm w-full space-y-3 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <strong className="text-base block">กรุณายืนยันการใช้งานคูปอง</strong>
            <div className="text-xs font-bold text-rose-300">
              {couponConfirm.brand} · {couponConfirm.val}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              คูปองจะหมดอายุภายใน 15 นาทีหลังจากกดยืนยันการใช้คูปอง ({couponConfirm.cost} J Point)
            </p>
            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setCouponConfirm(null)}
                className="h-11 rounded-full md:rounded-xl bg-white text-slate-900 text-xs font-extrabold cursor-pointer"
              >
                ยกเลิก
              </button>
              <button
                type="button"
                onClick={confirmRedeem}
                className="h-11 rounded-full md:rounded-xl bg-[#D71920] text-white text-xs font-extrabold cursor-pointer"
              >
                ใช้คูปอง
              </button>
            </div>
          </div>
        </div>
      )}

      {modal && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/70 flex items-center justify-center p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white rounded-3xl p-6 max-w-sm w-full space-y-3 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <strong className="text-base block text-slate-900">{modal.title}</strong>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{modal.desc}</p>
            <button
              type="button"
              onClick={() => setModal(null)}
              className="w-full py-2.5 rounded-full md:rounded-xl bg-gradient-to-br from-[#E11D48] to-[#D71920] text-white text-sm font-bold cursor-pointer"
            >
              ตกลง
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
