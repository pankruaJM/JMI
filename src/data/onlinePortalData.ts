export const LINE_OA_REWARD_HANDLE = '@638kqwtv';
export const LINE_OA_REWARD_URL = 'https://line.me/R/ti/p/@638kqwtv';
export const JAYMART_MAIN_SITE = 'https://www.jaymartinsurance.co.th';

export const PORTAL_ASSETS = {
  jaymartLogo: '/assets/jaymart-logo-transparent.png',
  jpointCoin: '/assets/aistudio/jpointCoin_cc5746c6.png',
  paSenior: '/assets/aistudio/paSenior_4fbc3075.jpg',
  paSmart: '/assets/aistudio/paSmart_08f2fe8d.jpg',
  paMorefun: '/assets/aistudio/paMorefun_cb8842f0.jpg',
  homePlus: '/assets/aistudio/homePlus_60f9d424.jpg',
  smeSmart: '/assets/aistudio/smeSmart_99558fbd.jpg',
  golf: '/assets/aistudio/golf_113ecab4.jpg',
  inspector: '/assets/aistudio/inspector_3064927e.jpg',
  casaLapin: '/assets/aistudio/casaLapin_461990b8.jpg',
  bPaSenior: '/assets/aistudio/bPaSenior_2242736c.jpg',
  tPaSenior: '/assets/aistudio/tPaSenior_973b11e0.jpg',
  bPaSmart: '/assets/aistudio/bPaSmart_bd688c12.jpg',
  tPaSmart: '/assets/aistudio/tPaSmart_3a22f225.jpg',
  bPaMorefun: '/assets/aistudio/bPaMorefun_62d10ff7.jpg',
  tPaMorefun: '/assets/aistudio/tPaMorefun_98631159.jpg',
  bHome: '/assets/aistudio/bHome_456f901d.jpg',
  tHome: '/assets/aistudio/tHome_0335c3e7.jpg',
  bSme: '/assets/aistudio/bSme_810c65c8.jpg',
  tSme: '/assets/aistudio/tSme_81ec9e23.jpg',
  bGolf: '/assets/aistudio/bGolf_1449da22.jpg',
  tGolf: '/assets/aistudio/tGolf_0b5ae25a.jpg',
  bDrone: '/assets/aistudio/bDrone_b58d36d8.jpg',
  tDrone: '/assets/aistudio/tDrone_0887b55c.jpg',
  bInspector: '/assets/aistudio/bInspector_d01ea179.jpg',
  tInspector: '/assets/aistudio/tInspector_1e35d260.jpg',
  bCarrier: '/assets/aistudio/bCarrier_9bb9100c.jpg',
  tCarrier: '/assets/aistudio/tCarrier_38a67cde.jpg',
} as const;

export type PortalAssetKey = keyof typeof PORTAL_ASSETS;

export interface PortalPlan {
  id: string;
  name: string;
  sub: string;
  base: number;
  price: number;
  per?: string;
  cov: string;
  med: string;
  pts: number;
  imgKey?: PortalAssetKey;
  badge?: string;
}

export interface PortalPolicy {
  no: string;
  cat: string;
  planId: string;
  planName: string;
  holder: string;
  relation: string;
  cov: string;
  med: string;
  until: string;
}

export interface PortalReward {
  id: string;
  brand: string;
  title: string;
  cost: number;
  val: string;
  imgKey: PortalAssetKey | null;
  bgClass: string;
  emoji: string;
}

export interface HomeProductTile {
  p: string;
  name: string;
  img: PortalAssetKey;
  from: string;
  per: string;
}

export const PA_PLANS: PortalPlan[] = [
  {
    id: 'pa-senior',
    name: 'PA รุ่นใหญ่ (แผน 1)',
    sub: 'อายุ 55–70 ปี (ต่ออายุถึง 75) · นอน รพ. 500/วัน',
    base: 350,
    price: 280,
    per: '6 เดือน',
    cov: '100,000',
    med: '10,000',
    pts: 30,
    imgKey: 'tPaSenior',
  },
  {
    id: 'pa-senior-2',
    name: 'PA รุ่นใหญ่ (แผน 2)',
    sub: 'อายุ 55–70 ปี (ต่ออายุถึง 75) · นอน รพ. 500/วัน',
    base: 670,
    price: 536,
    cov: '100,000',
    med: '10,000',
    pts: 55,
    imgKey: 'tPaSenior',
  },
  {
    id: 'pa-senior-3',
    name: 'PA รุ่นใหญ่ (แผน 3)',
    sub: 'อายุ 55–70 ปี (ต่ออายุถึง 75) · นอน รพ. 1,000/วัน',
    base: 1120,
    price: 896,
    cov: '200,000',
    med: '20,000',
    pts: 95,
    imgKey: 'tPaSenior',
  },
  {
    id: 'pa-smart-1',
    name: 'SMART PA (แผน 1)',
    sub: 'อายุ 18–60 ปี (ต่ออายุถึง 70) · นอน รพ. 500/วัน',
    base: 550,
    price: 440,
    cov: '100,000',
    med: '5,000',
    pts: 45,
    imgKey: 'tPaSmart',
  },
  {
    id: 'pa-smart',
    name: 'SMART PA (แผน 2)',
    sub: 'อายุ 18–60 ปี (ต่ออายุถึง 70) · นอน รพ. 700/วัน',
    base: 750,
    price: 600,
    cov: '150,000',
    med: '5,000',
    pts: 60,
    imgKey: 'tPaSmart',
  },
  {
    id: 'pa-morefun-1',
    name: 'More Fun 1 PA',
    sub: 'อายุ 18–65 ปี · ทันตกรรม 2,000',
    base: 769,
    price: 615,
    cov: '200,000',
    med: '5,000',
    pts: 65,
    imgKey: 'tPaMorefun',
  },
  {
    id: 'pa-morefun',
    name: 'More Fun 2 PA',
    sub: 'อายุ 18–65 ปี · ทันตกรรม 5,000',
    base: 1165,
    price: 932,
    cov: '500,000',
    med: '5,000',
    pts: 100,
    imgKey: 'tPaMorefun',
  },
  {
    id: 'pa-morefun-3',
    name: 'More Fun 3 PA',
    sub: 'อายุ 18–65 ปี · ทันตกรรม 10,000',
    base: 2195,
    price: 1756,
    cov: '1,000,000',
    med: '10,000',
    pts: 180,
    imgKey: 'tPaMorefun',
  },
];

export const DRONE_PLANS: PortalPlan[] = [
  {
    id: 'drone-mini-1',
    name: 'โดรนรุ่นมินิ Option 1',
    sub: 'บุคคลภายนอก 1 ล้านบาท · ต่อสู้คดี 100k',
    base: 973,
    price: 778,
    cov: '1,000,000',
    med: '100,000',
    pts: 80,
    imgKey: 'tDrone',
  },
  {
    id: 'drone-mini-2',
    name: 'โดรนรุ่นมินิ Option 2',
    sub: 'เพิ่มประกันตัวผู้บังคับโดรน 100,000.-',
    base: 1072,
    price: 858,
    cov: '1,000,000',
    med: '100,000',
    pts: 95,
    imgKey: 'tDrone',
  },
  {
    id: 'drone-std-1',
    name: 'โดรนทั่วไป Option 1',
    sub: 'โดรน ≤ 25 กก. บุคคลภายนอก 1 ล้านบาท',
    base: 1173,
    price: 938,
    cov: '1,000,000',
    med: '100,000',
    pts: 100,
    imgKey: 'tDrone',
  },
  {
    id: 'drone-std-2',
    name: 'โดรนทั่วไป Option 2',
    sub: 'สู้คดี 150k + ประกันตัวผู้บังคับ 100k',
    base: 1321,
    price: 1057,
    cov: '1,000,000',
    med: '150,000',
    pts: 120,
    imgKey: 'tDrone',
  },
];

export const OTHER_PLANS: PortalPlan[] = [
  {
    id: 'other-home',
    name: 'Happy Home Plus',
    imgKey: 'tHome',
    badge: 'คนมีบ้าน',
    sub: 'คุ้มครองบ้าน ไฟไหม้ พายุ โจรกรรม ทุน 5 แสน+',
    base: 1478,
    price: 1182,
    cov: '500,000',
    med: 'ตามตาราง PDF',
    pts: 120,
  },
  {
    id: 'other-sme',
    name: 'SME Smart Plan',
    imgKey: 'tSme',
    badge: 'ร้านค้า SME',
    sub: 'ประกันร้านค้า ทุน 5 แสน – 10 ล้าน + รายได้',
    base: 1401,
    price: 1121,
    cov: '500,000',
    med: 'ตามตาราง PDF',
    pts: 120,
  },
  {
    id: 'other-golf',
    name: 'ประกันภัยผู้เล่นกอล์ฟ',
    imgKey: 'tGolf',
    badge: 'Hole-in-One',
    sub: 'ความรับผิด 500k + อุปกรณ์ 20k + Hole-in-One',
    base: 914,
    price: 731,
    cov: '500,000',
    med: '20,000',
    pts: 90,
  },
  {
    id: 'other-inspector',
    name: 'ผู้ตรวจสอบอาคาร (บุคคลธรรมดา)',
    imgKey: 'tInspector',
    badge: 'วิศวกร',
    sub: 'ความรับผิดวิชาชีพ 1M/ครั้ง (4.01M / 3 ปี)',
    base: 6607,
    price: 5286,
    cov: '1,000,000',
    med: '2,000,000/ปี',
    pts: 300,
  },
  {
    id: 'other-inspector-corp',
    name: 'ผู้ตรวจสอบอาคาร (นิติบุคคล)',
    imgKey: 'tInspector',
    badge: 'นิติบุคคล',
    sub: 'ความรับผิดวิชาชีพ 1M/ครั้ง (4.01M / 3 ปี) · ความรับผิดส่วนแรก 5,000',
    base: 21540,
    price: 17232,
    cov: '1,000,000',
    med: '2,000,000/ปี',
    pts: 900,
  },
  {
    id: 'other-carrier',
    name: 'ความรับผิดผู้ขนส่ง',
    imgKey: 'tCarrier',
    badge: 'กลุ่มสินค้า 1-3',
    sub: 'สินค้ากลุ่ม 1–3 วงเงิน 100k – 3M',
    base: 2700,
    price: 2160,
    cov: '100,000',
    med: 'ตามตาราง PDF',
    pts: 180,
  },
];

export const HOME_PRODUCTS: HomeProductTile[] = [
  { p: 'pa-senior', name: 'PA รุ่นใหญ่', img: 'tPaSenior', from: '฿280', per: '/6 เดือน' },
  { p: 'pa-smart-1', name: 'SMART PA', img: 'tPaSmart', from: '฿440', per: '/ปี' },
  { p: 'pa-morefun-1', name: 'More Fun PA', img: 'tPaMorefun', from: '฿615', per: '/ปี' },
  { p: 'other-home', name: 'Happy Home', img: 'tHome', from: '฿1,182', per: '/ปี' },
  { p: 'other-sme', name: 'ร้านค้า SME', img: 'tSme', from: '฿1,121', per: '/ปี' },
  { p: 'other-golf', name: 'นักกอล์ฟ', img: 'tGolf', from: '฿731', per: '/ปี' },
  { p: 'drone', name: 'โดรน', img: 'tDrone', from: '฿778', per: '/ปี' },
  { p: 'other-inspector', name: 'ผู้ตรวจสอบอาคาร', img: 'tInspector', from: '฿5,286', per: '/ปี' },
  { p: 'other-carrier', name: 'ผู้ขนส่ง', img: 'tCarrier', from: '฿2,160', per: '/ปี' },
];

export const REWARDS: PortalReward[] = [
  {
    id: 'rw-casa',
    brand: 'Casa Lapin Coffee',
    title: 'สมัครสมาชิกใหม่ รับเครื่องดื่มฟรี 1 แก้ว ที่ Casa Lapin',
    cost: 0,
    val: 'ฟรี 1 แก้ว',
    imgKey: 'casaLapin',
    bgClass: 'bg-gradient-to-br from-[#059669] to-[#0D9488]',
    emoji: '☕',
  },
  {
    id: 'rw-bbq',
    brand: 'BBQ Plaza',
    title: 'หมูสันคอสไลด์ฟรี 1 ถาด มูลค่า 79.-',
    cost: 0,
    val: 'ฟรี 79.-',
    imgKey: null,
    bgClass: 'bg-gradient-to-br from-[#D71920] to-[#991B1B]',
    emoji: '🥓',
  },
  {
    id: 'rw-jm',
    brand: 'Jaymart Mobile',
    title: 'ส่วนลดซื้อมือถือ & Gadget 500.-',
    cost: 300,
    val: 'ลด 500.-',
    imgKey: null,
    bgClass: 'bg-gradient-to-br from-[#1C1B1E] to-[#D71920]',
    emoji: '📱',
  },
  {
    id: 'rw-amz',
    brand: "Cafe' Amazon",
    title: 'เครื่องดื่มเย็นฟรี 1 แก้ว มูลค่า 75.-',
    cost: 150,
    val: 'ฟรี 75.-',
    imgKey: null,
    bgClass: 'bg-gradient-to-br from-[#047857] to-[#0E7490]',
    emoji: '🧋',
  },
];

export const CLAIMS = [
  { name: 'ประกันอุบัติเหตุ (PA)', c: 83 },
  { name: 'ประกันโดรน', c: 124 },
  { name: 'อัคคีภัย / บ้าน / ร้านค้า', c: 122 },
  { name: 'ขนส่ง (ผู้ขนส่ง)', c: 123 },
  { name: 'ความรับผิดต่อบุคคลภายนอก (กอล์ฟ / ผู้ตรวจสอบอาคาร)', c: 126 },
  { name: 'สินไหมอื่นๆ', c: 127 },
];

export function bannerKeyForPlan(planId: string): PortalAssetKey | null {
  if (planId.startsWith('pa-senior')) return 'bPaSenior';
  if (planId.startsWith('pa-smart')) return 'bPaSmart';
  if (planId.startsWith('pa-morefun')) return 'bPaMorefun';
  if (planId.startsWith('drone')) return 'bDrone';
  if (planId === 'other-home') return 'bHome';
  if (planId === 'other-sme') return 'bSme';
  if (planId === 'other-golf') return 'bGolf';
  if (planId.startsWith('other-inspector')) return 'bInspector';
  if (planId === 'other-carrier') return 'bCarrier';
  return null;
}

export function cleanLineDisplayName(name?: string | null): string {
  if (!name) return '';
  return name.trim().replace(/^คุณ\s*/u, '').trim();
}

export function formatLineGreeting(name?: string | null): string {
  const cleaned = cleanLineDisplayName(name);
  return cleaned ? `สวัสดี คุณ${cleaned}` : 'สวัสดี สมาชิก LINE';
}
