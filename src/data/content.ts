export type Language = 'th' | 'en';

export interface InsightArticle {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  body: string[];
}

export interface SamplePolicyRecord {
  policyNo: string;
  status: string;
  holderName: string;
  sumInsured: string;
  planName: string;
  effectiveDate: string;
  expiryDate: string;
}

export interface SolutionTier {
  id: string;
  name: string;
  coverageLimit: string;
  annualPrice: number;
  highlights: string[];
}

export interface SolutionCategory {
  id: string;
  title: string;
  subtitle: string;
  issuanceTime: string;
  summary: string;
  tiers: SolutionTier[];
}

export interface SiteLocaleContent {
  nav: {
    privileges: string;
    contact: string;
    jpPoints: string;
    applyOnline: string;
    allPolicies: string;
    claim: string;
    checkPolicy: string;
    about: string;
    vision: string;
    blog: string;
  };
  hero: {
    brandTitle: string;
    subtitle: string;
    applyOnlineCta: string;
    jp500Cta: string;
    scrollLabel: string;
  };
  mission: {
    heading: string;
    paragraphs: string[];
    cta: string;
  };
  advantages: {
    heading: string;
    blocks: Array<{ title: string; paragraphs: string[] }>;
  };
  modelAndCare: {
    blocks: Array<{ title: string; paragraphs: string[] }>;
  };
  solutionLab: {
    heading: string;
    subheading: string;
    billingLabelAnnual: string;
    billingLabelMonthly: string;
    issuanceLabel: string;
    coverageLabel: string;
    perYearSuffix: string;
    perMonthSuffix: string;
    selectPlanCta: string;
    categories: SolutionCategory[];
  };
  claimCenter: {
    heading: string;
    subheading: string;
    hotlineLabel: string;
    hotlineNumber: string;
    hotlineNote: string;
    claimTypes: string[];
    successTitle: string;
    ticketLabel: string;
    successBody: string;
    resetClaimCta: string;
    policyOrPlateLabel: string;
    policyOrPlatePlaceholder: string;
    reporterPhoneLabel: string;
    reporterPhonePlaceholder: string;
    reporterNameLabel: string;
    reporterNamePlaceholder: string;
    incidentDetailLabel: string;
    incidentDetailPlaceholder: string;
    submitClaimCta: string;
    validationError: string;
  };
  policyLookup: {
    heading: string;
    subheading: string;
    policyInputLabel: string;
    policyInputPlaceholder: string;
    phoneInputLabel: string;
    phoneInputPlaceholder: string;
    validationError: string;
    searchCta: string;
    trySampleCta: string;
    resultHeading: string;
    resetLookupCta: string;
    fields: {
      policyNo: string;
      status: string;
      holderName: string;
      sumInsured: string;
      planName: string;
      period: string;
    };
    sampleRecord: SamplePolicyRecord;
  };
  jpPoints: {
    badgeText: string;
    heading: string;
    subheading: string;
    highlights: string[];
    steps: Array<{ num: string; title: string; detail: string }>;
    openLineOaCta: string;
    copyLineOaCta: string;
    openIndexCta: string;
  };
  proofAndVision: {
    heading: string;
    subheading: string;
    metrics: Array<{ value: string; label: string; detail: string }>;
    visionTagline: string;
    visionTitle: string;
    visionDescription: string;
    ecosystemHeading: string;
    ecosystemSectors: Array<{ title: string; description: string }>;
  };
  insights: {
    heading: string;
    subheading: string;
    readMoreLabel: string;
    closeModalLabel: string;
    articles: InsightArticle[];
  };
  contact: {
    heading: string;
    subheading: string;
    successTitle: string;
    successBody: string;
    resetCta: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    planLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    validationError: string;
    submitCta: string;
    lineId: string;
    lineUrl: string;
    lineSectionTitle: string;
    lineScanNote: string;
    lineAddCta: string;
    lineCopyCta: string;
    lineCopiedLabel: string;
    officeSectionTitle: string;
    officeCompany: string;
    officeAddress: string;
    officeTaxId: string;
    officePhone: string;
    officeEmail: string;
    officeHours: string;
    mapTitle: string;
    mapOpenDirections: string;
    mapFallbackNote: string;
  };
  footer: {
    companyFullName: string;
    address: string;
    hotline: string;
    licenseNote: string;
    copyright: string;
  };
}

export const SITE_CONTENT: Record<Language, SiteLocaleContent> = {
  th: {
    nav: {
      privileges: 'สิทธิพิเศษ',
      contact: 'ติดต่อเรา',
      jpPoints: 'รับคะแนน JP ฟรี 500 คะแนน',
      applyOnline: 'สมัครกรมธรรม์ออนไลน์',
      allPolicies: 'กรมธรรม์ทั้งหมด',
      claim: 'แจ้งเคลม 24 ชม.',
      checkPolicy: 'เช็คกรมธรรม์',
      about: 'เกี่ยวกับเรา',
      vision: 'วิสัยทัศน์ & อีโคซิสเต็ม',
      blog: 'บทความอินชัวเทค',
    },
    hero: {
      brandTitle: 'เจมาร์ท ประกันภัย',
      subtitle: 'นวัตกรรมประกันภัยดิจิทัล ก้าวนำเทรนด์ประกันภัยยุคใหม่ คุ้มครองครบจบในคลิกเดียว',
      applyOnlineCta: 'สมัครกรมธรรม์ออนไลน์',
      jp500Cta: 'รับ 500 พอยต์ J Point ฟรี',
      scrollLabel: 'สำรวจเจมาร์ท ประกันภัย',
    },
    mission: {
      heading: 'เปลี่ยนความซับซ้อนของการทำประกัน ให้เป็นเรื่องง่ายในมือคุณ',
      paragraphs: [
        'บริษัท เจมาร์ท ประกันภัย จำกัด (มหาชน) ก่อตั้งขึ้นด้วยความตั้งใจในการผสานเทคโนโลยีดิจิทัลเข้ากับบริการรับประกันวินาศภัย เพื่อสร้างประสบการณ์ที่โปร่งใส รวดเร็ว และเข้าถึงได้จริงสำหรับทุกคน',
        'ภายใต้พลังของ Jaymart Group Ecosystem เราเชื่อมต่อกรมธรรม์ออนไลน์ สิทธิประโยชน์ J Point และระบบเคลมดิจิทัลเข้าด้วยกัน เพื่อดูแลคุณตั้งแต่ก้าวแรกที่สมัครจนถึงวันที่ต้องการความช่วยเหลือ',
      ],
      cta: 'เลือกดูแผนกรมธรรม์ทั้งหมด',
    },
    advantages: {
      heading: 'ข้อได้เปรียบของอินชัวเทคยุคใหม่',
      blocks: [
        {
          title: '01 · ออกกรมธรรม์ดิจิทัลทันที ไม่ต้องรอเอกสาร',
          paragraphs: [
            'ทุกขั้นตอนตั้งแต่คำนวณเบี้ย กรอกข้อมูล จนถึงการยืนยันความคุ้มครองถูกออกแบบให้ทำผ่านมือถือและเว็บได้ทันที รับ e-Policy ทาง LINE และ SMS',
          ],
        },
        {
          title: '02 · เบี้ยยืดหยุ่น เชื่อมสิทธิประโยชน์ J Point เต็มรูปแบบ',
          paragraphs: [
            'สมาชิก J Point สามารถรับคะแนนต้อนรับฟรี 500 คะแนน และนำคะแนนไปแลกรับ E-Voucher แบรนด์ดังมากมาย พร้อมรับส่วนลดเบี้ยประกันภัยที่ร่วมรายการ',
          ],
        },
        {
          title: '03 · ศูนย์บริการแจ้งเคลม 24 ชั่วโมง ครอบคลุมทั่วประเทศ',
          paragraphs: [
            'อุ่นใจด้วยเครือข่ายโรงพยาบาลและศูนย์บริการมาตรฐานทั่วไทย พร้อมทีมเจ้าหน้าที่รับเรื่องอุบัติเหตุตลอด 24 ชั่วโมง โทร 02-099-0555 กด 1',
          ],
        },
      ],
    },
    modelAndCare: {
      blocks: [
        {
          title: 'โมเดลความสำเร็จที่ยึดลูกค้าเป็นศูนย์กลาง',
          paragraphs: [
            'เราออกแบบผลิตภัณฑ์จากสถานการณ์จริงของผู้บริโภคไทย ทั้งประกันอุบัติเหตุ PA สำหรับทุกช่วงวัย ประกันโดรนขึ้นทะเบียน ประกันบ้าน ร้านค้า SME และความรับผิดวิชาชีพเฉพาะทาง',
          ],
        },
        {
          title: 'ความใส่ใจในทุกรายละเอียดความคุ้มครอง',
          paragraphs: [
            'เงื่อนไขความคุ้มครองชัดเจน อ่านง่าย ไม่ซ่อนข้อยกเว้นซับซ้อน พร้อมทีมที่ปรึกษาดูแลทั้งก่อนทำประกันและขณะยื่นเคลมสินไหมทดแทน',
          ],
        },
      ],
    },
    solutionLab: {
      heading: 'กรมธรรม์ทั้งหมด',
      subheading: 'เลือกหมวดความคุ้มครองที่ตรงใจ เปรียบเทียบวงเงินและเบี้ยประกันภัยได้แบบเรียลไทม์',
      billingLabelAnnual: 'รายปี',
      billingLabelMonthly: 'แบ่งชำระ / เดือน',
      issuanceLabel: 'ออก e-Policy ดิจิทัลรวดเร็ว พร้อมเชื่อม LINE OA',
      coverageLabel: 'วงเงินคุ้มครอง',
      perYearSuffix: 'บาท / ปี',
      perMonthSuffix: 'บาท / งวด',
      selectPlanCta: 'สนใจแผนนี้ / ขอใบเสนอราคา',
      categories: [
        {
          id: 'motor',
          title: 'ประกันรถยนต์ & EV',
          subtitle: 'MOTOR & EV SHIELD',
          issuanceTime: 'ออกคุ้มครองภายใน 5 นาที',
          summary:
            'คุ้มครองรถยนต์สันดาปและรถยนต์ไฟฟ้า EV ครบทั้งชั้น 1, 2+ และ 3+ พร้อมบริการช่วยเหลือฉุกเฉินบนท้องถนน 24 ชม.',
          tiers: [
            {
              id: 'motor-3plus',
              name: 'ชั้น 3+ ประหยัดคุ้ม',
              coverageLimit: '100,000 บาท',
              annualPrice: 5900,
              highlights: [
                'ซ่อมรถเราเมื่อชนกับยานพาหนะทางบก',
                'ความรับผิดต่อบุคคลภายนอกสูงสุด 10 ล้านบาท',
                'บริการรถยกฉุกเฉิน 24 ชั่วโมงทั่วไทย',
              ],
            },
            {
              id: 'motor-2plus',
              name: 'ชั้น 2+ ยอดนิยม',
              coverageLimit: '300,000 บาท',
              annualPrice: 7500,
              highlights: [
                'คุ้มครองรถชนรถ สูญหาย และไฟไหม้',
                'ซ่อมอู่มาตรฐานในเครือทั่วประเทศ',
                'ค่ารักษาพยาบาลผู้ขับขี่และผู้โดยสาร',
              ],
            },
            {
              id: 'motor-1',
              name: 'ชั้น 1 ดูแลครบทุกเหตุการณ์',
              coverageLimit: 'ตามทุนประกันรถยนต์',
              annualPrice: 14900,
              highlights: [
                'ชนไม่มีคู่กรณี ภัยธรรมชาติ น้ำท่วม ไฟไหม้',
                'คุ้มครองสายชาร์จและแบตเตอรี่รถยนต์ไฟฟ้า EV',
                'เลือกซ่อมห้างหรืออู่มาตรฐานระดับพรีเมียม',
              ],
            },
          ],
        },
        {
          id: 'pa-smart',
          title: 'PA อุบัติเหตุส่วนบุคคล',
          subtitle: 'PERSONAL ACCIDENT (PA)',
          issuanceTime: 'รับกรมธรรม์ทันที',
          summary:
            'ครอบคลุมค่ารักษาพยาบาลจากอุบัติเหตุโดยไม่ต้องสำรองจ่ายในโรงพยาบาลเครือข่าย มีแผนตั้งแต่ SMART PA, More Fun PA และ PA รุ่นใหญ่',
          tiers: [
            {
              id: 'pa-senior-plan',
              name: 'PA รุ่นใหญ่ (55–70 ปี)',
              coverageLimit: '100,000 บาท',
              annualPrice: 670,
              highlights: [
                'อายุรับประกัน 55–70 ปี ต่ออายุได้ถึง 75 ปี',
                'ชดเชยรายได้ระหว่างนอน รพ. 500 บาท/วัน',
                'ไม่ต้องตรวจสุขภาพก่อนสมัคร',
              ],
            },
            {
              id: 'pa-smart-plan',
              name: 'SMART PA (ยอดนิยม)',
              coverageLimit: '150,000 บาท',
              annualPrice: 750,
              highlights: [
                'คุ้มครองอุบัติเหตุตลอด 24 ชม. ทั่วโลก',
                'ค่ารักษาพยาบาลต่อครั้งสูงสุด 5,000–20,000 บาท',
                'นอน รพ. ชดเชยรายได้สูงสุด 700 บาท/วัน',
              ],
            },
            {
              id: 'pa-morefun-plan',
              name: 'More Fun PA 3',
              coverageLimit: '1,000,000 บาท',
              annualPrice: 2195,
              highlights: [
                'วงเงินเสียชีวิตจากอุบัติเหตุ 1 ล้านบาท',
                'เพิ่มวงเงินทันตกรรมจากอุบัติเหตุสูงสุด 10,000 บาท',
                'รับ J Point สูงสุดเมื่อสมัครผ่านระบบออนไลน์',
              ],
            },
          ],
        },
        {
          id: 'drone',
          title: 'ประกันภัยโดรน (Drone)',
          subtitle: 'UAV / DRONE LIABILITY',
          issuanceTime: 'เอกสารยื่น กพท. ทันที',
          summary:
            'รองรับการขึ้นทะเบียนโดรนกับ กสทช. และสำนักงานการบินพลเรือนฯ (CAAT) ครบทั้งโดรนรุ่นมินิ โดรนถ่ายภาพ และโดรนเกษตร',
          tiers: [
            {
              id: 'drone-mini-1',
              name: 'โดรนรุ่นมินิ Option 1',
              coverageLimit: '1,000,000 บาท',
              annualPrice: 973,
              highlights: [
                'ความรับผิดต่อบุคคลภายนอก 1 ล้านบาท',
                'ค่าต่อสู้คดีความ 100,000 บาท',
                'ออกเอกสารรับรองขึ้นทะเบียน CAAT ทันที',
              ],
            },
            {
              id: 'drone-mini-2',
              name: 'โดรนรุ่นมินิ Option 2',
              coverageLimit: '1,000,000 บาท',
              annualPrice: 1072,
              highlights: [
                'ความรับผิดบุคคลภายนอก 1 ล้านบาท',
                'เพิ่มวงเงินประกันตัวผู้บังคับโดรน 100,000 บาท',
                'เหมาะสำหรับผู้บินงานถ่ายภาพและคอนเทนต์',
              ],
            },
            {
              id: 'drone-std-2',
              name: 'โดรนทั่วไป Option 2',
              coverageLimit: '1,000,000 บาท',
              annualPrice: 1321,
              highlights: [
                'รองรับโดรนน้ำหนักไม่เกิน 25 กก.',
                'ค่าต่อสู้คดี 150,000 บาท + ประกันตัวผู้บังคับ 100,000 บาท',
                'ใช้ยื่นต่ออายุใบอนุญาตบินได้ทุกจังหวัด',
              ],
            },
          ],
        },
        {
          id: 'home-sme',
          title: 'ประกันบ้าน & ร้านค้า SME',
          subtitle: 'HAPPY HOME & SME SMART',
          issuanceTime: 'ออกความคุ้มครองภายในวันเดียว',
          summary:
            'ปกป้องบ้านพักอาศัย คอนโด ร้านค้า และสต็อกสินค้าจากอัคคีภัย ภัยธรรมชาติ โจรกรรม และการหยุดชะงักทางธุรกิจ',
          tiers: [
            {
              id: 'sme-smart',
              name: 'SME Smart Plan',
              coverageLimit: '500,000 บาท',
              annualPrice: 1401,
              highlights: [
                'คุ้มครองตัวร้านค้า สต็อกสินค้า และเฟอร์นิเจอร์',
                'ครอบคลุมไฟไหม้ ฟ้าผ่า น้ำท่วม และลมพายุ',
                'คุ้มครองความเสียหายต่อกระจกและป้ายร้าน',
              ],
            },
            {
              id: 'happy-home',
              name: 'Happy Home Plus',
              coverageLimit: '500,000 บาท',
              annualPrice: 1478,
              highlights: [
                'คุ้มครองสิ่งปลูกสร้างและทรัพย์สินภายในบ้าน',
                'เพิ่มความคุ้มครองโจรกรรมและค่าเช่าที่พักชั่วคราว',
                'เบี้ยเริ่มต้นคุ้มค่ากว่าการรับความเสี่ยงเอง',
              ],
            },
            {
              id: 'sme-pro',
              name: 'SME Smart Enterprise',
              coverageLimit: '3,000,000 บาท',
              annualPrice: 4850,
              highlights: [
                'ขยายวงเงินทรัพย์สินและเครื่องจักรธุรกิจสูงสุด 10 ล้าน',
                'เพิ่มความรับผิดต่อบุคคลภายนอกภายในสถานประกอบการ',
                'รับสิทธิพิเศษดูแลลูกค้าองค์กรโดยทีมเฉพาะทาง',
              ],
            },
          ],
        },
        {
          id: 'specialty',
          title: 'นักกอล์ฟ ผู้ขนส่ง & ผู้ตรวจอาคาร',
          subtitle: 'SPECIALTY & LIABILITY',
          issuanceTime: 'ออกกรมธรรม์ออนไลน์ได้ทันที',
          summary:
            'ความคุ้มครองเฉพาะทางสำหรับไลฟ์สไตล์และวิชาชีพ ทั้งประกันนักกอล์ฟ Hole-in-One ประกันความรับผิดผู้ขนส่ง และผู้ตรวจสอบอาคาร',
          tiers: [
            {
              id: 'golf-plan',
              name: 'ประกันภัยผู้เล่นกอล์ฟ',
              coverageLimit: '500,000 บาท',
              annualPrice: 914,
              highlights: [
                'ความรับผิดต่อบุคคลภายนอกในสนามกอล์ฟ 500,000 บาท',
                'คุ้มครองอุปกรณ์กอล์ฟเสียหาย/สูญหาย 20,000 บาท',
                'รางวัล Hole-in-One ตามเงื่อนไขแผน',
              ],
            },
            {
              id: 'carrier-plan',
              name: 'ความรับผิดผู้ขนส่ง',
              coverageLimit: '100,000 – 3,000,000 บาท',
              annualPrice: 2700,
              highlights: [
                'คุ้มครองสินค้าระหว่างขนส่งกลุ่มสินค้า 1–3',
                'ครอบคลุมอุบัติเหตุรถขนส่ง พลิกคว่ำ หรือไฟไหม้',
                'รองรับทั้งผู้ประกอบการขนส่งรายย่อยและฟลีท',
              ],
            },
            {
              id: 'inspector-plan',
              name: 'ผู้ตรวจสอบอาคาร (บุคคล/นิติบุคคล)',
              coverageLimit: '1,000,000 บาท/ครั้ง',
              annualPrice: 6607,
              highlights: [
                'ตรงตามข้อกำหนดกฎหมายควบคุมอาคาร',
                'วงเงินความรับผิด 1M/ครั้ง (สะสมสูงสุด 4.01M/3 ปี)',
                'ออกใบรับรองประกอบการขึ้นทะเบียนรวดเร็ว',
              ],
            },
          ],
        },
      ],
    },
    claimCenter: {
      heading: 'ศูนย์แจ้งเคลมออนไลน์ & ฉุกเฉิน 24 ชม.',
      subheading:
        'เกิดเหตุไม่คาดฝันติดต่อได้ทันทีตลอด 24 ชั่วโมง พร้อมระบบเปิดเรื่องเคลมล่วงหน้าเพื่อส่งเจ้าหน้าที่ประสานงานอย่างรวดเร็ว',
      hotlineLabel: 'ศูนย์รับแจ้งอุบัติเหตุและฉุกเฉิน 24 ชั่วโมง',
      hotlineNumber: '02-099-0555 กด 1',
      hotlineNote: 'บริการประสานงานรถยก รถพยาบาลฉุกเฉิน และตรวจสอบเอกสารเคลมทุกประเภทกรมธรรม์',
      claimTypes: [
        'อุบัติเหตุรถยนต์ / EV',
        'ประกันอุบัติเหตุ (PA)',
        'ประกันโดรน / บ้าน / SME',
        'ความรับผิด & ขนส่ง',
      ],
      successTitle: 'บันทึกคำขอเปิดเคลมสำเร็จ',
      ticketLabel: 'เลขรับแจ้งเคลม (Claim Ticket)',
      successBody:
        'ทีมงานสินไหมเจมาร์ท ประกันภัย ได้รับข้อมูลเบื้องต้นของท่านแล้ว เจ้าหน้าที่จะโทรประสานงานกลับโดยเร็วที่สุด',
      resetClaimCta: 'แจ้งเคลมรายการอื่น',
      policyOrPlateLabel: 'เลขกรมธรรม์ หรือ ทะเบียนรถ',
      policyOrPlatePlaceholder: 'เช่น JM-PA-2569-88412 หรือ 1กข 1234',
      reporterPhoneLabel: 'เบอร์โทรศัพท์ผู้แจ้งเหตุ',
      reporterPhonePlaceholder: '08X-XXX-XXXX',
      reporterNameLabel: 'ชื่อ - นามสกุลผู้แจ้ง',
      reporterNamePlaceholder: 'ระบุชื่อผู้ติดต่อกลับ',
      incidentDetailLabel: 'รายละเอียดเหตุการณ์ / สถานที่เกิดเหตุ',
      incidentDetailPlaceholder: 'ระบุสถานที่ วันเวลา และลักษณะความเสียหายโดยสังเขป',
      submitClaimCta: 'ส่งเรื่องแจ้งเคลมทันที',
      validationError: 'กรุณากรอกเลขกรมธรรม์/ทะเบียน ชื่อผู้แจ้ง และเบอร์โทรศัพท์ให้ครบถ้วน',
    },
    policyLookup: {
      heading: 'เช็คกรมธรรม์ของฉันออนไลน์',
      subheading: 'ตรวจสอบสถานะความคุ้มครอง วงเงินเอาประกันภัย และวันหมดอายุกรมธรรม์ได้ทุกที่ทุกเวลา',
      policyInputLabel: 'เลขที่กรมธรรม์',
      policyInputPlaceholder: 'เช่น JM-PA-2569-88412',
      phoneInputLabel: 'เบอร์โทรศัพท์ผู้เอาประกันภัย',
      phoneInputPlaceholder: '0812345678',
      validationError: 'กรุณากรอกเลขที่กรมธรรม์และเบอร์โทรศัพท์ 9–10 หลักให้ถูกต้อง',
      searchCta: 'ตรวจสอบสถานะกรมธรรม์',
      trySampleCta: 'ทดลองดูข้อมูลตัวอย่าง',
      resultHeading: 'ข้อมูลกรมธรรม์ดิจิทัล',
      resetLookupCta: 'ค้นหากรมธรรม์อื่น',
      fields: {
        policyNo: 'เลขที่กรมธรรม์',
        status: 'สถานะความคุ้มครอง',
        holderName: 'ผู้เอาประกันภัย',
        sumInsured: 'ทุนประกันภัย / วงเงินคุ้มครอง',
        planName: 'แผนประกันภัย',
        period: 'ระยะเวลาคุ้มครอง',
      },
      sampleRecord: {
        policyNo: 'JM-PA-2569-88412',
        status: 'มีผลคุ้มครองอยู่ (Active)',
        holderName: 'คุณสมศรี ใจดี',
        sumInsured: '150,000 บาท',
        planName: 'SMART PA (แผน 2) · เจมาร์ท ประกันภัย',
        effectiveDate: '15 ม.ค. 2569',
        expiryDate: '15 ม.ค. 2570',
      },
    },
    jpPoints: {
      badgeText: 'J POINT × JAYMART INSURANCE · LINE OA @638KQWTV',
      heading: 'รับคะแนน J Point ฟรี 500 คะแนนทันที',
      subheading:
        'เพียงเชื่อมบัญชีผ่าน LINE OA @638kqwtv รับเลย 500 J Point นำไปแลกส่วนลด E-Voucher แบรนด์ชั้นนำได้มากมาย เช่น Lotus’s, Lazada, PTT, Casa Lapin และอีกเพียบ',
      highlights: [
        'รับฟรี 500 คะแนน J Point ทันทีเมื่อเชื่อมบัญชีครั้งแรก',
        'ใช้คะแนนแลกส่วนลด Lotus’s, Lazada, PTT, Casa Lapin, BBQ Plaza และ Jaymart Mobile',
        'สมาชิก J Point รับส่วนลดพิเศษค่าเบี้ย PA & โดรน สูงสุด 20% + รับคะแนนสะสม x3',
      ],
      steps: [
        {
          num: '01',
          title: 'แอด LINE @638kqwtv',
          detail: 'สแกน QR Code หรือกดปุ่มเพิ่มเพื่อน LINE Official',
        },
        {
          num: '02',
          title: 'กดรับคะแนน 500 JP',
          detail: 'เลือกเมนู Rich Menu หรือเปิดหน้าเชื่อมบัญชี J Point',
        },
        {
          num: '03',
          title: 'แลกแบรนด์ดังได้ทันที',
          detail: 'แลก E-Voucher Lotus’s, Lazada, PTT และสิทธิพิเศษมากมาย',
        },
      ],
      openLineOaCta: 'เปิด LINE @638kqwtv รับ 500 คะแนน',
      copyLineOaCta: 'คัดลอก @638kqwtv',
      openIndexCta: 'เข้าสู่หน้าสมัคร & เชื่อมรับ 500 J Point',
    },
    proofAndVision: {
      heading: 'ความไว้วางใจ & วิสัยทัศน์ดิจิทัล',
      subheading: 'ขับเคลื่อนความมั่นคงด้วยมาตรฐานการเงินที่แข็งแกร่งและเครือข่าย Jaymart Ecosystem',
      metrics: [
        {
          value: '24/7',
          label: 'ศูนย์แจ้งเหตุฉุกเฉิน',
          detail: 'พร้อมประสานงานช่วยเหลือนักเดินทางและผู้เอาประกันตลอดวัน',
        },
        {
          value: '5 นาที',
          label: 'ออกกรมธรรม์ออนไลน์',
          detail: 'ซื้อ PA และโดรนออนไลน์ รับ e-Policy ได้ทันทีผ่านมือถือ',
        },
        {
          value: '500 JP',
          label: 'พอยต์ต้อนรับสมาชิก',
          detail: 'เชื่อม J Point แลกคูปองแบรนด์ดัง Lotus’s, Lazada, PTT และอีกมาก',
        },
        {
          value: '100%',
          label: 'มาตรฐานภายใต้ คปภ.',
          detail: 'กำกับดูแลภายใต้สำนักงานคณะกรรมการกำกับและส่งเสริมการประกอบธุรกิจประกันภัย',
        },
      ],
      visionTagline: 'NEXT-GEN INSURTECH VISION',
      visionTitle: 'ประกันภัยที่อยู่เคียงข้างทุกการใช้ชีวิตและการเงินดิจิทัล',
      visionDescription:
        'เจมาร์ท ประกันภัย มุ่งเชื่อมโยงความคุ้มครองเข้ากับระบบนิเวศค้าปลีก การเงิน และโทรคมนาคมในกลุ่มเจมาร์ท เพื่อให้ลูกค้าได้รับความอุ่นใจควบคู่กับผลตอบแทนและความคุ้มค่าในทุกวัน',
      ecosystemHeading: 'กลุ่มพลังพันธมิตรใน Jaymart Ecosystem',
      ecosystemSectors: [
        {
          title: 'Jaymart Mobile & Retail Network',
          description:
            'จุดเชื่อมต่อบริการลูกค้าสมาร์ทโฟนและอุปกรณ์ดิจิทัลครอบคลุมสาขาทั่วประเทศ',
        },
        {
          title: 'J Point CRM & Brand Partners',
          description:
            'สะสมและแลกคะแนนข้ามแบรนด์ชั้นนำ เช่น Lotus’s, Lazada, PTT, Casa Lapin และพันธมิตรชั้นนำ',
        },
        {
          title: 'Digital Claims & Partner API',
          description:
            'เชื่อมต่อระบบออกกรมธรรม์อัตโนมัติร่วมกับ Rabbit Rewards, Siamchai และ The 1 × Power Buy',
        },
      ],
    },
    insights: {
      heading: 'บทความและอินไซต์อินชัวเทค',
      subheading: 'อัปเดตความรู้เรื่องความคุ้มครอง รถ EV กฎหมายโดรน และสิทธิประโยชน์ J Point',
      readMoreLabel: 'อ่านบทความฉบับเต็ม',
      closeModalLabel: 'ปิดบทความ',
      articles: [
        {
          id: 'ev-coverage-2026',
          category: 'EV INSURANCE',
          date: '14 พ.ย. 2569',
          readTime: 'อ่าน 3 นาที',
          title: 'เช็กลิสต์ก่อนทำประกันรถยนต์ไฟฟ้า EV คุ้มครองแบตเตอรี่และเครื่องชาร์จอย่างไร',
          excerpt:
            'เจาะลึกรายละเอียดความคุ้มครองแบตเตอรี่ High-Voltage, Wallbox และสายชาร์จสำหรับผู้ใช้รถ EV ในไทย',
          body: [
            'รถยนต์ไฟฟ้า EV มีโครงสร้างต้นทุนหลักอยู่ที่ชุดแบตเตอรี่แรงดันสูง การเลือกกรมธรรม์ประกันภัยรถยนต์ชั้น 1 จึงควรตรวจสอบทุนประกันภัยของแบตเตอรี่และความคุ้มครอง Wallbox ที่บ้านอย่างละเอียด',
            'เจมาร์ท ประกันภัย ออกแบบความคุ้มครองที่ครอบคลุมทั้งตัวรถ แบตเตอรี่ อุปกรณ์ชาร์จ รวมถึงบริการช่วยเหลือฉุกเฉินกรณีแบตเตอรี่หมดระหว่างทางตลอด 24 ชั่วโมง',
          ],
        },
        {
          id: 'drone-caat-guide',
          category: 'DRONE GUIDE',
          date: '02 พ.ย. 2569',
          readTime: 'อ่าน 4 นาที',
          title: 'มือใหม่ซื้อโดรนต้องรู้: ทำประกันภัยบุคคลภายนอกอย่างไรให้ผ่าน กพท. ในวันเดียว',
          excerpt:
            'สรุปเอกสารจำเป็นสำหรับการขึ้นทะเบียนโดรนกับ กสทช. และ CAAT พร้อมแผนประกันโดรนเริ่มต้น 973 บาท',
          body: [
            'ผู้ครอบครองโดรนติดกล้องหรือโดรนที่มีน้ำหนักเกินเกณฑ์ตามประกาศ กพท. จำเป็นต้องมีกรมธรรม์ประกันภัยความรับผิดต่อบุคคลภายนอกวงเงินขั้นต่ำ 1,000,000 บาทก่อนนำขึ้นบินอย่างถูกกฎหมาย',
            'ผ่านระบบสมัครออนไลน์ของเจมาร์ท ประกันภัย คุณสามารถเลือกแผนโดรนรุ่นมินิหรือโดรนทั่วไป ≤ 25 กก. ชำระเบี้ย และรับ PDF กรมธรรม์เพื่อนำไปยื่นขออนุญาตได้ทันที',
          ],
        },
        {
          id: 'jpoint-privilege-guide',
          category: 'J POINT',
          date: '25 ต.ค. 2569',
          readTime: 'อ่าน 2 นาที',
          title: '500 J Point เอาไปทำอะไรได้บ้าง? รวมแบรนด์ดังที่แลก E-Voucher ได้คุ้มที่สุด',
          excerpt:
            'ทำความรู้จักคะแนน J Point ที่มอบให้ฟรีสำหรับสมาชิกใหม่ แลกได้ทั้ง Lotus’s, Lazada, PTT และร้านดังในเครือ',
          body: [
            'คะแนน J Point คือคะแนนสะสมกลางในเครือ Jaymart Ecosystem ที่ใช้แลกรับส่วนลดและ E-Voucher จากแบรนด์ชั้นนำระดับประเทศได้อย่างหลากหลาย ไม่ว่าจะเป็น Lotus’s, Lazada, PTT, Casa Lapin, BBQ Plaza หรือส่วนลดที่ Jaymart Mobile',
            'เพียงลงทะเบียนรับสิทธิ์ฟรี 500 คะแนนผ่าน LINE OA @638kqwtv ก็สามารถกดดูคูปองและเริ่มใช้งานได้ทันที พร้อมรับสิทธิ์ส่วนลดเบี้ยประกัน PA และโดรนเพิ่มอีก 20%',
          ],
        },
      ],
    },
    contact: {
      heading: 'ติดต่อเจมาร์ท ประกันภัย',
      subheading: 'สอบถามข้อมูลแผนประกันภัย ขอใบเสนอราคา หรือเพิ่มเพื่อนผ่าน LINE Official Account',
      successTitle: 'ส่งข้อมูลติดต่อเรียบร้อยแล้ว',
      successBody: 'ขอบคุณที่ไว้วางใจเจมาร์ท ประกันภัย เจ้าหน้าที่จะติดต่อกลับโดยเร็วที่สุดในเวลาทำการ',
      resetCta: 'ส่งข้อความใหม่อีกครั้ง',
      nameLabel: 'ชื่อ - นามสกุล',
      namePlaceholder: 'ระบุชื่อผู้ติดต่อ',
      contactLabel: 'เบอร์โทรศัพท์ หรือ อีเมล',
      contactPlaceholder: '08X-XXX-XXXX หรือ name@email.com',
      planLabel: 'แผนประกันภัยที่สนใจ',
      messageLabel: 'รายละเอียดเพิ่มเติม',
      messagePlaceholder: 'ระบุรุ่นรถ ช่วงอายุ หรือรายละเอียดความคุ้มครองที่ต้องการสอบถาม',
      validationError: 'กรุณากรอกชื่อและเบอร์โทรศัพท์/อีเมลสำหรับติดต่อกลับให้ครบถ้วน',
      submitCta: 'ส่งคำขอให้เจ้าหน้าที่ติดต่อกลับ',
      lineId: '@jaymartinsurance',
      lineUrl: 'https://line.me/R/ti/p/@jaymartinsurance',
      lineSectionTitle: 'LINE OFFICIAL ACCOUNT',
      lineScanNote: 'สแกน QR Code เพื่อสอบถามข้อมูล เช็กกรมธรรม์ หรือขอใบเสนอราคาได้ทันที',
      lineAddCta: 'เพิ่มเพื่อน LINE',
      lineCopyCta: 'คัดลอก LINE ID',
      lineCopiedLabel: 'คัดลอกแล้ว',
      officeSectionTitle: 'HEADQUARTERS',
      officeCompany: 'บริษัท เจมาร์ท ประกันภัย จำกัด (มหาชน)',
      officeAddress:
        '195/1 อาคาร JMT Office รามคำแหง ชั้น 5 ถนนรามคำแหง แขวงราษฎร์พัฒนา เขตสะพานสูง กรุงเทพมหานคร 10240',
      officeTaxId: 'เลขทะเบียนบริษัท 0107556000060',
      officePhone: '02-099-0555',
      officeEmail: 'Marketinginno@jaymartinsurance.co.th',
      officeHours: 'เวลาทำการ จันทร์ – ศุกร์ 08:30 – 17:00 น. (แจ้งอุบัติเหตุฉุกเฉิน 24 ชม. กด 1)',
      mapTitle: 'แผนที่สำนักงานใหญ่ เจมาร์ท ประกันภัย (JMT Office รามคำแหง)',
      mapOpenDirections: 'เปิดนำทางใน Google Maps',
      mapFallbackNote: 'อาคาร JMT Office รามคำแหง ชั้น 5 เขตสะพานสูง กรุงเทพฯ 10240',
    },
    footer: {
      companyFullName: 'บริษัท เจมาร์ท ประกันภัย จำกัด (มหาชน)',
      address: '195/1 อาคาร JMT Office รามคำแหง ชั้น 5 แขวงราษฎร์พัฒนา เขตสะพานสูง กรุงเทพฯ 10240',
      hotline: 'Call Center 02-099-0555 (แจ้งอุบัติเหตุ 24 ชม. กด 1)',
      licenseNote: 'ได้รับอนุญาตประกอบธุรกิจประกันวินาศภัยภายใต้การกำกับดูแลของสำนักงาน คปภ.',
      copyright: '© 2026 Jaymart Insurance Public Company Limited. All rights reserved.',
    },
  },
  en: {
    nav: {
      privileges: 'Privileges',
      contact: 'Contact',
      jpPoints: 'Get 500 Free JP Points',
      applyOnline: 'Apply Online',
      allPolicies: 'All Policies',
      claim: '24/7 Claims',
      checkPolicy: 'Check Policy',
      about: 'About Us',
      vision: 'Vision & Ecosystem',
      blog: 'InsurTech Insights',
    },
    hero: {
      brandTitle: 'JAYMART INSURANCE',
      subtitle: 'Digital InsurTech Innovation — Simple, Fast, Transparent Coverage in One Click',
      applyOnlineCta: 'Apply Policy Online',
      jp500Cta: 'Claim 500 Free J Points',
      scrollLabel: 'Explore Jaymart Insurance',
    },
    mission: {
      heading: 'Making Insurance Effortless, Digital, and Transparent',
      paragraphs: [
        'Jaymart Insurance Public Company Limited combines modern digital infrastructure with reliable underwriting so customers can quote, bind, and manage policies right from their browser or mobile device.',
        'Connected to the Jaymart Group Ecosystem, we unite instant e-Policy delivery, J Point rewards, and 24/7 digital claim support.',
      ],
      cta: 'Explore All Insurance Plans',
    },
    advantages: {
      heading: 'The Digital InsurTech Advantage',
      blocks: [
        {
          title: '01 · Instant Digital Policy Issuance',
          paragraphs: [
            'Compare coverage limits, submit details, and receive your e-Policy seamlessly via LINE and SMS without paperwork bottlenecks.',
          ],
        },
        {
          title: '02 · Connected J Point Multi-Brand Rewards',
          paragraphs: [
            'Get 500 welcome J Points to redeem E-Vouchers across Lotus’s, Lazada, PTT, Casa Lapin, and many more lifestyle partners.',
          ],
        },
        {
          title: '03 · 24/7 Nationwide Claims & Hotline',
          paragraphs: [
            'Backed by partner hospitals, authorized repair centers, and round-the-clock roadside & accident support at 02-099-0555 ext. 1.',
          ],
        },
      ],
    },
    modelAndCare: {
      blocks: [
        {
          title: 'A Customer-First Product Architecture',
          paragraphs: [
            'From EV & motor insurance to Personal Accident, CAAT-ready Drone liability, Home & SME protection, and professional liability.',
          ],
        },
        {
          title: 'Attentiveness in Every Policy Detail',
          paragraphs: [
            'Clear coverage terms, straightforward limits, and dedicated specialists ready to assist from quote to claim settlement.',
          ],
        },
      ],
    },
    solutionLab: {
      heading: 'All Insurance Policies',
      subheading: 'Compare protection categories, coverage limits, and transparent premiums',
      billingLabelAnnual: 'Annual',
      billingLabelMonthly: 'Installment / Mo',
      issuanceLabel: 'Instant Digital e-Policy · LINE OA Ready',
      coverageLabel: 'Coverage Limit',
      perYearSuffix: 'THB / Year',
      perMonthSuffix: 'THB / Period',
      selectPlanCta: 'Select This Plan / Request Quote',
      categories: [
        {
          id: 'motor',
          title: 'Motor & EV Insurance',
          subtitle: 'MOTOR & EV SHIELD',
          issuanceTime: '5-Minute Coverage Bind',
          summary:
            'Comprehensive Type 1, 2+, and 3+ protection for combustion vehicles and EVs with 24/7 roadside assistance.',
          tiers: [
            {
              id: 'motor-3plus',
              name: 'Type 3+ Value',
              coverageLimit: '100,000 THB',
              annualPrice: 5900,
              highlights: [
                'Own-vehicle repair for vehicle-to-vehicle collisions',
                'Third-party liability up to 10M THB',
                '24/7 nationwide roadside assistance',
              ],
            },
            {
              id: 'motor-2plus',
              name: 'Type 2+ Popular',
              coverageLimit: '300,000 THB',
              annualPrice: 7500,
              highlights: [
                'Covers collision, theft, and fire damage',
                'Authorized garage network nationwide',
                'Driver & passenger medical coverage',
              ],
            },
            {
              id: 'motor-1',
              name: 'Type 1 All-Risk + EV',
              coverageLimit: 'Full Agreed Vehicle Value',
              annualPrice: 14900,
              highlights: [
                'Covers single-car accidents, flood, storm & fire',
                'High-voltage EV battery & home charger coverage',
                'Dealer or premium garage repair options',
              ],
            },
          ],
        },
        {
          id: 'pa-smart',
          title: 'Personal Accident (PA)',
          subtitle: 'PERSONAL ACCIDENT',
          issuanceTime: 'Instant e-Policy',
          summary:
            'Cashless accident medical treatment across partner hospitals with tailored plans for young adults, families, and seniors.',
          tiers: [
            {
              id: 'pa-senior-plan',
              name: 'Senior PA (Ages 55–70)',
              coverageLimit: '100,000 THB',
              annualPrice: 670,
              highlights: [
                'Eligible ages 55–70, renewable up to 75',
                'Hospital daily cash benefit 500 THB/day',
                'No medical exam required',
              ],
            },
            {
              id: 'pa-smart-plan',
              name: 'SMART PA (Popular)',
              coverageLimit: '150,000 THB',
              annualPrice: 750,
              highlights: [
                '24/7 worldwide accident protection',
                'Medical expense cover 5,000–20,000 THB/incident',
                'Hospital income 700 THB/day',
              ],
            },
            {
              id: 'pa-morefun-plan',
              name: 'More Fun PA 3',
              coverageLimit: '1,000,000 THB',
              annualPrice: 2195,
              highlights: [
                '1,000,000 THB accidental death & dismemberment',
                'Includes accident dental benefit up to 10,000 THB',
                'Earn bonus J Points on online purchase',
              ],
            },
          ],
        },
        {
          id: 'drone',
          title: 'Drone Liability',
          subtitle: 'CAAT & NBTC COMPLIANT',
          issuanceTime: 'Instant Registration PDF',
          summary:
            'Compliant third-party liability policies required for drone registration with NBTC and CAAT across Thailand.',
          tiers: [
            {
              id: 'drone-mini-1',
              name: 'Drone Mini Option 1',
              coverageLimit: '1,000,000 THB',
              annualPrice: 973,
              highlights: [
                '1,000,000 THB third-party liability',
                'Legal defense expense up to 100,000 THB',
                'Instant CAAT certificate ready',
              ],
            },
            {
              id: 'drone-mini-2',
              name: 'Drone Mini Option 2',
              coverageLimit: '1,000,000 THB',
              annualPrice: 1072,
              highlights: [
                '1,000,000 THB third-party liability',
                'Adds pilot bail bond 100,000 THB',
                'Ideal for aerial creators & hobbyists',
              ],
            },
            {
              id: 'drone-std-2',
              name: 'Standard Drone Option 2',
              coverageLimit: '1,000,000 THB',
              annualPrice: 1321,
              highlights: [
                'Supports drones up to 25 kg',
                '150k legal defense + 100k bail bond',
                'Nationwide commercial & personal compliance',
              ],
            },
          ],
        },
        {
          id: 'home-sme',
          title: 'Home & SME Protection',
          subtitle: 'HAPPY HOME & SME SMART',
          issuanceTime: 'Same-Day Policy Binding',
          summary:
            'Comprehensive property protection for residences, condos, retail shops, and SME inventory against fire, storm, and burglary.',
          tiers: [
            {
              id: 'sme-smart',
              name: 'SME Smart Plan',
              coverageLimit: '500,000 THB',
              annualPrice: 1401,
              highlights: [
                'Covers shop building, inventory & fixtures',
                'Fire, lightning, flood & windstorm perils',
                'Signage and plate glass damage cover',
              ],
            },
            {
              id: 'happy-home',
              name: 'Happy Home Plus',
              coverageLimit: '500,000 THB',
              annualPrice: 1478,
              highlights: [
                'Covers structure and household contents',
                'Burglary & temporary accommodation cover',
                'Affordable annual protection',
              ],
            },
            {
              id: 'sme-pro',
              name: 'SME Smart Enterprise',
              coverageLimit: '3,000,000 THB',
              annualPrice: 4850,
              highlights: [
                'Expandable property & stock limits up to 10M THB',
                'Public liability inside premises',
                'Dedicated SME underwriting advisory',
              ],
            },
          ],
        },
        {
          id: 'specialty',
          title: 'Golf, Carrier & Building Inspector',
          subtitle: 'SPECIALTY & LIABILITY',
          issuanceTime: 'Fast Online Issuance',
          summary:
            'Targeted liability policies for golfers, freight carriers, and certified building inspectors.',
          tiers: [
            {
              id: 'golf-plan',
              name: 'Golfer Protection',
              coverageLimit: '500,000 THB',
              annualPrice: 914,
              highlights: [
                'On-course third-party liability 500,000 THB',
                'Golf equipment cover 20,000 THB',
                'Hole-in-One celebration benefit',
              ],
            },
            {
              id: 'carrier-plan',
              name: 'Carrier Goods Liability',
              coverageLimit: '100,000 – 3,000,000 THB',
              annualPrice: 2700,
              highlights: [
                'Protects cargo groups 1–3 in transit',
                'Covers collision, overturn, and fire',
                'Flexible fleet & independent truck plans',
              ],
            },
            {
              id: 'inspector-plan',
              name: 'Building Inspector PI',
              coverageLimit: '1,000,000 THB / claim',
              annualPrice: 6607,
              highlights: [
                'Meets statutory Building Control Act rules',
                '1M/claim (4.01M aggregate / 3 years)',
                'Fast certificate delivery',
              ],
            },
          ],
        },
      ],
    },
    claimCenter: {
      heading: 'Online Claim Center & 24/7 Hotline',
      subheading:
        'Report incidents 24/7 or pre-file a digital claim request for fast adjuster coordination.',
      hotlineLabel: '24/7 Accident & Emergency Hotline',
      hotlineNumber: '02-099-0555 Ext. 1',
      hotlineNote: 'Immediate dispatch for tow trucks, medical coordination, and claim guidance.',
      claimTypes: [
        'Motor / EV Accident',
        'Personal Accident (PA)',
        'Drone / Home / SME',
        'Liability & Carrier',
      ],
      successTitle: 'Claim Request Recorded',
      ticketLabel: 'Claim Reference Ticket',
      successBody:
        'Our Jaymart Claims team has logged your report and will contact you shortly.',
      resetClaimCta: 'File Another Claim',
      policyOrPlateLabel: 'Policy No. or License Plate',
      policyOrPlatePlaceholder: 'e.g. JM-PA-2569-88412 or 1กก 1234',
      reporterPhoneLabel: 'Contact Phone Number',
      reporterPhonePlaceholder: '08X-XXX-XXXX',
      reporterNameLabel: 'Reporter Full Name',
      reporterNamePlaceholder: 'Full name',
      incidentDetailLabel: 'Incident Summary & Location',
      incidentDetailPlaceholder: 'Briefly describe location, time, and damage',
      submitClaimCta: 'Submit Claim Notice',
      validationError: 'Please fill in policy/plate, reporter name, and contact phone number.',
    },
    policyLookup: {
      heading: 'Check My Policy Online',
      subheading: 'Verify active coverage status, insured sum, and expiration date anytime.',
      policyInputLabel: 'Policy Number',
      policyInputPlaceholder: 'e.g. JM-PA-2569-88412',
      phoneInputLabel: 'Insured Mobile Number',
      phoneInputPlaceholder: '0812345678',
      validationError: 'Please enter a valid policy number and 9–10 digit phone number.',
      searchCta: 'Verify Policy Status',
      trySampleCta: 'Load Sample Policy',
      resultHeading: 'Digital Policy Record',
      resetLookupCta: 'Check Another Policy',
      fields: {
        policyNo: 'Policy Number',
        status: 'Status',
        holderName: 'Policyholder',
        sumInsured: 'Sum Insured',
        planName: 'Insurance Plan',
        period: 'Coverage Period',
      },
      sampleRecord: {
        policyNo: 'JM-PA-2569-88412',
        status: 'Active Coverage',
        holderName: 'Ms. Somsri Jaidee',
        sumInsured: '150,000 THB',
        planName: 'SMART PA (Plan 2) · Jaymart Insurance',
        effectiveDate: '15 Jan 2026',
        expiryDate: '15 Jan 2027',
      },
    },
    jpPoints: {
      badgeText: 'J POINT × JAYMART INSURANCE · LINE OA @638KQWTV',
      heading: 'Get 500 Free J Points Instantly',
      subheading:
        'Connect via LINE OA @638kqwtv to unlock 500 J Points redeemable across top brands including Lotus’s, Lazada, PTT, Casa Lapin, and more.',
      highlights: [
        '500 Free J Points on first-time account link',
        'Redeem E-Vouchers at Lotus’s, Lazada, PTT, Casa Lapin, BBQ Plaza & Jaymart Mobile',
        'Enjoy 20% off PA & Drone premiums plus 3x J Points',
      ],
      steps: [
        {
          num: '01',
          title: 'Add LINE @638kqwtv',
          detail: 'Scan QR or tap Add Friend on LINE Official',
        },
        {
          num: '02',
          title: 'Claim 500 J Points',
          detail: 'Tap the Rich Menu or open the J Point Portal',
        },
        {
          num: '03',
          title: 'Redeem Top Brands',
          detail: 'Use points at Lotus’s, Lazada, PTT & more',
        },
      ],
      openLineOaCta: 'Open LINE @638kqwtv for 500 Pts',
      copyLineOaCta: 'Copy @638kqwtv',
      openIndexCta: 'Open Online Portal & Claim 500 J Points',
    },
    proofAndVision: {
      heading: 'Trust & Digital Vision',
      subheading: 'Backed by strong underwriting discipline and the Jaymart Group Ecosystem.',
      metrics: [
        {
          value: '24/7',
          label: 'Emergency Claim Desk',
          detail: 'Round-the-clock accident & roadside coordination across Thailand',
        },
        {
          value: '5 Min',
          label: 'Digital Binding',
          detail: 'Fast online PA & Drone issuance with instant e-Policy delivery',
        },
        {
          value: '500 JP',
          label: 'Welcome Points',
          detail: 'Redeemable across Lotus’s, Lazada, PTT & partner brands',
        },
        {
          value: '100%',
          label: 'OIC Regulated',
          detail: 'Licensed non-life insurer regulated by the Office of Insurance Commission',
        },
      ],
      visionTagline: 'NEXT-GEN INSURTECH VISION',
      visionTitle: 'Embedded Protection Across Everyday Digital Finance & Retail',
      visionDescription:
        'Jaymart Insurance bridges protection with retail, mobility, and loyalty ecosystems so every policy delivers security plus real everyday rewards.',
      ecosystemHeading: 'Jaymart Ecosystem Synergy',
      ecosystemSectors: [
        {
          title: 'Jaymart Mobile & Retail Network',
          description: 'Seamless protection touchpoints across flagship retail and mobile locations.',
        },
        {
          title: 'J Point CRM & Brand Partners',
          description: 'Multi-brand point redemption with Lotus’s, Lazada, PTT, Casa Lapin & more.',
        },
        {
          title: 'Digital Claims & Partner API',
          description: 'API-native partner journeys for Rabbit Rewards, Siamchai, and The 1 × Power Buy.',
        },
      ],
    },
    insights: {
      heading: 'InsurTech Insights',
      subheading: 'Guides on EV insurance, drone regulations, and getting the most out of J Point',
      readMoreLabel: 'Read Full Article',
      closeModalLabel: 'Close',
      articles: [
        {
          id: 'ev-coverage-2026',
          category: 'EV INSURANCE',
          date: '14 Nov 2026',
          readTime: '3 min read',
          title: 'EV Insurance Checklist: Battery, Wallbox & Charging Cable Coverage',
          excerpt:
            'What EV owners in Thailand should check in Type 1 motor coverage for high-voltage battery protection.',
          body: [
            'Electric vehicles center their value in the high-voltage battery pack and charging hardware. Checking battery replacement caps and home Wallbox coverage helps prevent surprise repair bills.',
            'Jaymart Insurance Type 1 EV plans include dedicated battery, home charger, and 24/7 flatbed towing support.',
          ],
        },
        {
          id: 'drone-caat-guide',
          category: 'DRONE GUIDE',
          date: '02 Nov 2026',
          readTime: '4 min read',
          title: 'Drone Registration Guide: CAAT & NBTC Insurance Requirements',
          excerpt:
            'How to secure mandatory 1M THB third-party drone liability online in minutes.',
          body: [
            'Thailand CAAT regulations require camera and commercial drones to carry at least 1,000,000 THB in third-party liability insurance before registration and flight.',
            'Our online Drone Portal issues CAAT-compliant policy documents right after checkout.',
          ],
        },
        {
          id: 'jpoint-privilege-guide',
          category: 'J POINT',
          date: '25 Oct 2026',
          readTime: '2 min read',
          title: 'What Can You Redeem With 500 J Points? Top Partner E-Vouchers Explained',
          excerpt:
            'From Lotus’s and Lazada discounts to PTT fuel vouchers and Casa Lapin coffee.',
          body: [
            'J Point is Jaymart Group’s universal loyalty currency redeemable for E-Vouchers across major everyday brands like Lotus’s, Lazada, PTT, Casa Lapin, and BBQ Plaza.',
            'Link your LINE account via @638kqwtv to unlock 500 welcome points plus 20% online policy discounts.',
          ],
        },
      ],
    },
    contact: {
      heading: 'Contact Jaymart Insurance',
      subheading: 'Request a tailored quote, ask about coverage, or connect via LINE Official Account',
      successTitle: 'Inquiry Received',
      successBody: 'Thank you for contacting Jaymart Insurance. Our specialist will reply shortly.',
      resetCta: 'Send Another Inquiry',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your name',
      contactLabel: 'Phone Number or Email',
      contactPlaceholder: '08X-XXX-XXXX or name@email.com',
      planLabel: 'Plan of Interest',
      messageLabel: 'Message / Vehicle or Asset Details',
      messagePlaceholder: 'Share any specific coverage requirements',
      validationError: 'Please provide your name and phone number or email.',
      submitCta: 'Request Callback',
      lineId: '@jaymartinsurance',
      lineUrl: 'https://line.me/R/ti/p/@jaymartinsurance',
      lineSectionTitle: 'LINE OFFICIAL ACCOUNT',
      lineScanNote: 'Scan QR Code to chat with an advisor, check policies, or request quotes',
      lineAddCta: 'Add LINE Friend',
      lineCopyCta: 'Copy LINE ID',
      lineCopiedLabel: 'Copied',
      officeSectionTitle: 'HEADQUARTERS',
      officeCompany: 'Jaymart Insurance Public Company Limited',
      officeAddress:
        '195/1 JMT Office Ramkhamhaeng, 5th Floor, Ramkhamhaeng Rd, Rat Phatthana, Saphan Sung, Bangkok 10240',
      officeTaxId: 'Registration No. 0107556000060',
      officePhone: '02-099-0555',
      officeEmail: 'Marketinginno@jaymartinsurance.co.th',
      officeHours: 'Mon – Fri 08:30 – 17:00 (24/7 Emergency Accident Desk: Ext. 1)',
      mapTitle: 'Jaymart Insurance HQ Map (JMT Office Ramkhamhaeng)',
      mapOpenDirections: 'Open in Google Maps',
      mapFallbackNote: 'JMT Office Ramkhamhaeng 5F, Saphan Sung, Bangkok 10240',
    },
    footer: {
      companyFullName: 'Jaymart Insurance Public Company Limited',
      address: '195/1 JMT Office Ramkhamhaeng 5F, Saphan Sung, Bangkok 10240',
      hotline: 'Call Center 02-099-0555 (24/7 Claims Ext. 1)',
      licenseNote: 'Licensed Non-Life Insurer regulated by the Office of Insurance Commission (OIC)',
      copyright: '© 2026 Jaymart Insurance Public Company Limited. All rights reserved.',
    },
  },
};
