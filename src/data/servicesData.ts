export interface ServiceCapability {
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface SpecRow {
  label: string;
  value: string;
  note?: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  aliases: string[];
  title: string;
  shortTitle: string;
  tag: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  stats: {
    label: string;
    value: string;
  }[];
  highlights: string[];
  quoteServiceType: string;
  capabilities: ServiceCapability[];
  specsTitle: string;
  specsSubtitle: string;
  specs: SpecRow[];
  processTitle: string;
  processSubtitle: string;
  process: ProcessStep[];
  serviceAreas: string[];
  faqs: ServiceFAQ[];
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const servicesData: ServiceItem[] = [
  {
    id: 'computers',
    slug: 'computers-and-laptops',
    aliases: ['computers', 'computers-laptops', 'laptops-repair', 'computer-repair-gurgaon'],
    title: 'Computers & Laptops — Sales & Repair in Gurgaon & Noida',
    shortTitle: 'Computers & Laptops',
    tag: 'Sales, Repair & Upgrades',
    subtitle: 'Certified Diagnostic, Chip-Level Motherboard Repair & New System Setup',
    description:
      'Comtech Systems provides end-to-end computer and laptop repair, maintenance, and hardware sales across Gurgaon, Noida Extension, and Delhi NCR. With over 19 years of hands-on experience, our certified technicians troubleshoot chip-level motherboard issues, cracked screens, liquid spills, battery drain, and sluggish performance with authentic replacement parts and a 90-day service warranty.',
    image: '/sales&repair.png',
    imageAlt: 'Computer and laptop sales and repair services in Gurgaon and Noida',
    stats: [
      { label: 'Repairs Completed', value: '10,000+' },
      { label: 'Turnaround Time', value: 'Same Day' },
      { label: 'Service Warranty', value: 'Up to 90 Days' },
      { label: 'Customer Rating', value: '4.9 / 5' },
    ],
    highlights: [
      'Chip-level motherboard & BGA reballing repairs',
      'Original OEM screens, keyboards, and batteries for all brands',
      'Ultra-fast NVMe/SATA SSD upgrades & memory expansion',
      'Certified on-site support for corporate offices & home users',
    ],
    quoteServiceType: 'IT & Laptop Repair',
    capabilities: [
      {
        title: 'Component-Level Motherboard & Logic Board Repair',
        description:
          'We perform advanced micro-soldering, short-circuit troubleshooting, capacitor replacements, and BGA chip reballing for non-booting laptops and desktops.',
        features: [
          'No power / dead motherboard revival',
          'Charging IC & power rail troubleshooting',
          'Liquid damage chemical wash & restoration',
          'BIOS chip flashing & reprogram servicing',
        ],
        iconName: 'Cpu',
      },
      {
        title: 'Screen, Display Hinge & Keyboard Replacement',
        description:
          'Cracked laptop screens, flickering displays, broken hinges, and unresponsive keyboards replaced with grade-A OEM parts for Dell, HP, Lenovo, Apple, and Asus.',
        features: [
          'FHD, OLED, and 4K display panel replacements',
          'Structural hinge rebuilding and chassis fabrication',
          'Backlit and spill-resistant keyboards',
          'Precision trackpad calibration & touch panel fixes',
        ],
        iconName: 'Monitor',
      },
      {
        title: 'High-Speed SSD & RAM Performance Upgrades',
        description:
          'Eliminate system freezing and long boot times. We clone your existing Windows/Mac system onto high-speed Gen3/Gen4 NVMe SSDs with zero data loss.',
        features: [
          'Boot times dropped from 2 minutes to under 10 seconds',
          'DDR4 and DDR5 RAM expansions up to 64GB',
          'Safe disk mirroring with complete data integrity',
          'Thermal throttling prevention & fan deep-cleaning',
        ],
        iconName: 'Zap',
      },
      {
        title: 'OS Reinstallation, Virus Removal & System Tuning',
        description:
          'Clean reinstallation of genuine Windows 11/10 and macOS, eradication of stubborn rootkits, ransomware protection, and registry optimization.',
        features: [
          'Licensed operating system installation & drivers setup',
          'Deep malware, spyware, and adware cleaning',
          'Registry cleanup and background bloat removal',
          'Network adapter & Wi-Fi driver optimization',
        ],
        iconName: 'ShieldCheck',
      },
      {
        title: 'Emergency Data Recovery & Secure Backup Solutions',
        description:
          'Recover critical corporate spreadsheets, databases, and family photos from corrupted hard drives, formatted partitions, and failing flash media.',
        features: [
          'Recovery from clicking or unreadable internal drives',
          'Accidentally deleted files and formatted volume recovery',
          'Automated cloud and local NAS backup setups',
          'Confidentiality & non-disclosure guaranteed',
        ],
        iconName: 'HardDrive',
      },
      {
        title: 'Corporate IT AMC & Bulk Workstation Procurement',
        description:
          'Comprehensive Annual Maintenance Contracts (AMC) and enterprise hardware procurement for startups and multinational corporations across Gurgaon & Noida.',
        features: [
          'Priority 2-hour onsite technician response SLA',
          'Preventive quarterly hardware health checkups',
          'Brand new & refurbished commercial laptop fleets',
          'GST-compliant enterprise invoicing & account support',
        ],
        iconName: 'Briefcase',
      },
    ],
    specsTitle: 'Common Problems We Resolve Daily',
    specsSubtitle: 'Diagnostic overview and typical resolution parameters for desktop and laptop devices',
    specs: [
      { label: 'Laptop Not Turning On / Dead', value: 'Motherboard short-circuit repair, power IC replacement', note: '24-48 hrs' },
      { label: 'Cracked or Flickering Display', value: 'Brand new OEM panel fitting with brightness test', note: '1-3 hrs' },
      { label: 'Overheating & Loud Fan Noise', value: 'Heatsink ultrasonic de-dusting + Arctic MX-4 thermal repasting', note: 'Same Day' },
      { label: 'Blue Screen of Death (BSOD)', value: 'RAM memory testing, driver rollback, kernel debug', note: 'Same Day' },
      { label: 'Sluggish Booting & App Lags', value: 'M.2 NVMe SSD upgrade + RAM upgrade with zero data loss', note: '2-4 hrs' },
      { label: 'Broken Display Hinges', value: 'Chassis reinforcement, hinge re-anchoring & fabrication', note: '24 hrs' },
      { label: 'Battery Draining Rapidly', value: 'Genuine OEM high-cycle battery replacement with 1-yr warranty', note: '1-2 hrs' },
    ],
    processTitle: 'Our 4-Step Repair & Service Workflow',
    processSubtitle: 'Transparent, accountable, and reliable service from diagnostic intake to final handover',
    process: [
      {
        stepNumber: '01',
        title: 'Device Intake & Free Diagnostics',
        description:
          'Drop your device at our Sector 17A Gurgaon or Sector 1 Noida Extn branch, or schedule a doorstep pickup. Our technician tests all sub-systems and pinpoints the fault.',
      },
      {
        stepNumber: '02',
        title: 'Transparent Written Estimate',
        description:
          'We provide an upfront quote explaining needed parts, labor, and expected completion time. We never begin work without your explicit written approval.',
      },
      {
        stepNumber: '03',
        title: 'Certified Repair & OEM Component Fitting',
        description:
          'Your machine is repaired in an anti-static workstation using certified equipment and authentic replacement components.',
      },
      {
        stepNumber: '04',
        title: 'Stress Testing & Handover with Warranty',
        description:
          'Every device undergoes a 20-point stress test (CPU/GPU thermals, memory integrity, display pixels) before handover with up to a 90-day warranty.',
      },
    ],
    serviceAreas: [
      'Sector 17A Gurgaon (Head Office)',
      'DLF Cyber City & DLF Phase 1-5',
      'Udyog Vihar Phase 1-5',
      'Golf Course Road & Extension',
      'Sohna Road Gurgaon',
      'Sector 1 Noida Extension',
      'Noida Sector 62 & 63 IT Hub',
      'Greater Noida Knowledge Park',
      'Faridabad & South Delhi NCR',
    ],
    faqs: [
      {
        question: 'How long does a laptop repair typically take at Comtech Systems?',
        answer:
          'Common repairs such as SSD upgrades, RAM expansion, screen replacements, and thermal servicing are usually completed the same day within 2 to 4 hours. Complex chip-level motherboard repairs or liquid damage restoration generally require 24 to 48 hours for thorough diagnostics and post-repair burn-in testing.',
      },
      {
        question: 'Do you offer doorstep pickup and drop in Gurgaon and Noida?',
        answer:
          'Yes! We offer convenient doorstep pickup and delivery across Gurgaon (including Cyber City, DLF, Sohna Road, and Sector 17A) as well as Noida Extension and Greater Noida. Contact our support desk at +91 9811767644 to book a collection slot.',
      },
      {
        question: 'What warranty is provided on replaced laptop parts?',
        answer:
          'All new replacement hardware components (screens, keyboards, batteries, SSDs, and power adapters) carry authentic manufacturer warranties ranging from 6 months to 3 years. Service and chip-level motherboard repairs come with a standard 30 to 90-day Comtech service warranty.',
      },
      {
        question: 'Do you provide Annual Maintenance Contracts (AMC) for corporate offices?',
        answer:
          'Yes, we provide tailored Comprehensive and Non-Comprehensive IT AMC packages for startups, corporate headquarters, and retail outlets across Delhi NCR. Our contracts feature scheduled monthly preventative maintenance and guaranteed on-site response SLAs.',
      },
      {
        question: 'Can you recover data from a dead laptop or broken hard drive?',
        answer:
          'Yes. Our specialized data recovery lab handles logical corruptions, bad sectors, accidental formatting, and electronic PCB failures. We maintain strict non-disclosure security standards for sensitive personal and corporate data.',
      },
    ],
    meta: {
      title: 'Computer & Laptop Sales, Repair & AMC in Gurgaon & Noida',
      description:
        'Certified computer and laptop repairs, chip-level motherboard servicing, screen replacement, SSD upgrades, and corporate AMC in Gurgaon Sector 17A and Noida Extension.',
      keywords: [
        'Laptop repair Gurgaon',
        'Computer repair Gurgaon',
        'Laptop service center Noida Extension',
        'Chip level motherboard repair Gurgaon',
        'Laptop screen replacement Gurgaon',
        'SSD upgrade Gurgaon',
        'Corporate IT AMC Gurgaon',
        'Computer sales and service Noida',
      ],
    },
  },
  {
    id: 'printers',
    slug: 'printers-and-cartridges',
    aliases: ['printers', 'printers-cartridges', 'printer-repair-gurgaon', 'cartridge-refill-noida'],
    title: 'Printers & Cartridges — Repair, Refill & Recycling',
    shortTitle: 'Printers & Cartridges',
    tag: 'Servicing, Refill & Recycling',
    subtitle: 'Cost-Effective Cartridge Refilling, Laser Printer AMC & Empty Toner Buyback',
    description:
      'Comtech Systems provides comprehensive printing hardware solutions, fast printer repairs, precision cartridge refilling, and an eco-friendly empty toner recycling buyback program across Gurgaon, Noida, and Delhi NCR. We service HP, Canon, Epson, Brother, and Ricoh printers, saving businesses up to 70% on ongoing printing overhead.',
    image: '/printers&cartridges.png',
    imageAlt: 'Printer repair, cartridge refilling, and recycling services in Gurgaon and Noida',
    stats: [
      { label: 'Cartridges Refilled', value: '50,000+' },
      { label: 'Printing Cost Saved', value: 'Up to 70%' },
      { label: 'Test Page Quality', value: '100% Guaranteed' },
      { label: 'Recycling Buyback', value: 'Best Market Rates' },
    ],
    highlights: [
      'Precision micro-filtered toner refilling with zero background haze',
      'On-site laser printer troubleshooting and mechanical roller fixes',
      'Empty toner cartridge buyback with instant cash/bank payout',
      'Comprehensive printer Annual Maintenance Contracts (AMC)',
    ],
    quoteServiceType: 'Printer Refill & Repair',
    capabilities: [
      {
        title: 'Precision Toner & Ink Cartridge Refilling',
        description:
          'High-density, chemical-matched micro-toner powder refilling for monochrome and color laser cartridges. Every refilled cartridge delivers deep blacks, crisp line art, and OEM-level page yields.',
        features: [
          'Complete disassembly, hopper vacuuming, and drum wiping',
          'High-yield optical photo-conductor (OPC) drum replacements',
          'Electronic smart chip reset & replacement',
          'Multi-page pre-delivery test printing guarantee',
        ],
        iconName: 'Droplet',
      },
      {
        title: 'Laser & Inkjet Printer Mechanical Servicing',
        description:
          'Diagnosis and resolution of repetitive paper jams, noisy pick-up rollers, fuser film tears, gear grinding, laser scanner errors, and logic board issues.',
        features: [
          'Pick-up roller, separation pad, and fuser sleeve replacement',
          'Printhead unclogging and ultrasonic nozzle recovery for Epson/Canon',
          'Internal gear lubrication and paper path recalibration',
          'Power supply unit (SMPS) and formatter board repair',
        ],
        iconName: 'Wrench',
      },
      {
        title: 'Empty Toner Cartridge Buyback Program',
        description:
          'Prevent hazardous plastic shells and toner dust from ending up in landfills. Comtech Systems purchases empty OEM cartridges at high market buyback rates from offices across Delhi NCR.',
        features: [
          'Cash or direct IMPS/NEFT payout on bulk empty toners',
          'Doorstep pickup for corporate quantities across Gurgaon & Noida',
          'Buyback for HP, Canon, Brother, and Ricoh empty cartridges',
          'Green recycling certificate provided for corporate compliance',
        ],
        iconName: 'RefreshCw',
      },
      {
        title: 'Corporate Printer Fleet AMC & Support Contracts',
        description:
          'Keep your office printing without unexpected downtime. Our AMC contracts include routine preventive servicing, emergency breakdown calls, and loaner printers during major repairs.',
        features: [
          'Guaranteed 4-hour breakdown response time SLA',
          'Free quarterly drum cleaning and optical dust extraction',
          'Standby printer placement to avoid workflow pauses',
          'Consumable usage tracking and scheduled cartridge refills',
        ],
        iconName: 'FileCheck',
      },
      {
        title: 'OEM & High-Yield Compatible Cartridge Supply',
        description:
          'Supply of 100% original OEM toner cartridges as well as premium A-grade compatible cartridges engineered for maximum duty cycles at half the price.',
        features: [
          'Full catalog for HP LaserJet, Canon imageCLASS, Brother & Ricoh',
          'Color toners calibrated for CMYK color proofing',
          'Factory sealed with anti-leak pull tape',
          'Zero risk replacement warranty on defective units',
        ],
        iconName: 'PackageCheck',
      },
      {
        title: 'Network Multi-Function Printer (MFP) Setup',
        description:
          'Installation and configuration of high-speed office network printers, secure scan-to-folder protocols, departmental user quotas, and wireless mobile printing.',
        features: [
          'Static IP setup and multi-PC network driver deployment',
          'Scan to SMB/Email server authentication',
          'PIN-protected secure pull printing configuration',
          'Duplex automated document feeder (ADF) servicing',
        ],
        iconName: 'Network',
      },
    ],
    specsTitle: 'Refilling vs. Buying New Cartridges',
    specsSubtitle: 'A comparison illustrating why thousands of businesses choose Comtech refilling',
    specs: [
      { label: 'Cost Savings', value: '60% to 75% cheaper than buying new OEM cartridges', note: 'Huge ROI' },
      { label: 'Page Yield', value: '100% equivalent to factory standard page count', note: 'Standard ISO/IEC' },
      { label: 'Print Density', value: 'High optical density with sharp text and clean white spaces', note: 'Micro-toner' },
      { label: 'Environmental Impact', value: 'Diverts 1.5 kg of industrial plastic and metal from landfills', note: 'Eco-conscious' },
      { label: 'Turnaround Time', value: 'Instant swap or 30-minute express refilling', note: 'Express service' },
      { label: 'Printer Safety', value: 'Chemical-matched powder prevents drum scoring and fuser damage', note: '100% safe' },
    ],
    processTitle: 'Our 4-Step Toner Refilling & Testing Protocol',
    processSubtitle: 'Strict quality-control measures to guarantee flawless print results every single time',
    process: [
      {
        stepNumber: '01',
        title: 'Inspection & Ultrasonic Hopper Cleaning',
        description:
          'The cartridge is dismantled. Old residual toner powder is vacuumed with an electrostatic HEPA cleaner to eliminate background gray shading.',
      },
      {
        stepNumber: '02',
        title: 'Component Wear Check & Drum Polishing',
        description:
          'We inspect the Doctor Blade, Wiper Blade, Magnetic Roller, and OPC drum. Worn parts are replaced with fresh high-grade components.',
      },
      {
        stepNumber: '03',
        title: 'Precision Gram-Matched Toner Refill',
        description:
          'High-grade micro-refined polyester toner powder is filled according to the manufacturer’s exact grammage specifications for maximum page yield.',
      },
      {
        stepNumber: '04',
        title: 'Smart Chip Update & Test Page Certification',
        description:
          'The toner chip is updated. We run diagnostic black-density and grayscale gradient test sheets before packaging in light-protective bags.',
      },
    ],
    serviceAreas: [
      'Sector 17A Gurgaon',
      'Udyog Vihar & Cyber City',
      'Manesar Industrial Area',
      'Sector 1 Noida Extension',
      'Noida Sector 18, 62 & 63',
      'Greater Noida West',
      'Okhla Industrial Area Delhi',
      'Connaught Place & Central Delhi',
    ],
    faqs: [
      {
        question: 'Will refilling my toner cartridge damage my laser printer?',
        answer:
          'Not at Comtech Systems. Unlike low-quality roadside refillers who pour generic abrasive powders, we use chemical-matched micro-refined toner specific to your printer model and replace worn wiper blades and drums. Your printer runs smoothly without toner leakage or fuser damage.',
      },
      {
        question: 'How do I sell my empty toner cartridges for cash/buyback?',
        answer:
          'Simply send us the cartridge model numbers (e.g., HP 88A, 12A, Canon 328, Brother TN-2365) and approximate quantity via WhatsApp or phone. We will provide an instant price quote and dispatch a representative for verification and immediate payment.',
      },
      {
        question: 'How many times can a single laser cartridge be refilled?',
        answer:
          'A genuine cartridge can typically be refilled 4 to 6 times if maintained properly. We replace the OPC drum and internal wiper blades whenever wear is detected to ensure print quality remains identical to brand-new cartridges.',
      },
      {
        question: 'What printer brands and models do you service?',
        answer:
          'We service all major laser and multifunction inkjet printers including HP LaserJet, Canon imageCLASS & PIXMA, Epson EcoTank & WorkForce, Brother DCP/MFC series, and Ricoh commercial copiers.',
      },
      {
        question: 'Do you offer cartridge refilling for color laser printers?',
        answer:
          'Yes, we provide specialized CMYK color laser toner refilling (Cyan, Magenta, Yellow, and Black) using color-calibrated toner powder that produces vibrant photos, charts, and promotional graphics.',
      },
    ],
    meta: {
      title: 'Printer Repair, Cartridge Refilling & Empty Toner Buyback in Gurgaon & Noida',
      description:
        'Professional laser printer repair, fast cartridge refilling, and empty toner cartridge recycling buyback across Gurgaon Sector 17A and Noida Extension.',
      keywords: [
        'Printer cartridge refilling Gurgaon',
        'Printer cartridge refilling Noida',
        'Empty toner cartridge buyback Delhi NCR',
        'Laser printer repair Gurgaon',
        'HP printer repair Noida Extension',
        'Printer AMC Gurgaon',
        'Toner refill near me',
      ],
    },
  },
  {
    id: 'printing',
    slug: 'commercial-printing',
    aliases: ['printing', 'commercial-printing-visiting-cards', 'visiting-cards-gurgaon', 'letterhead-printing-noida'],
    title: 'Commercial Printing — Visiting Cards, Letterheads & Brochures',
    shortTitle: 'Commercial Printing',
    tag: 'Corporate Stationery & Branding',
    subtitle: 'High-Fidelity Offset & Digital Printing for Modern Businesses',
    description:
      'Elevate your brand presence with bespoke commercial printing solutions from Comtech Systems. Serving corporate enterprises, law firms, clinics, and burgeoning startups in Gurgaon, Noida, and Delhi NCR, we manufacture luxury visiting cards, executive letterheads, multi-fold brochures, ID cards, and official business stationery with exceptional color calibration and tactile paper finishes.',
    image: '/printers&cartridges2.png',
    imageAlt: 'Commercial printing, visiting cards, and letterheads in Gurgaon and Noida',
    stats: [
      { label: 'Paper Stock Grades', value: 'Up to 450 GSM' },
      { label: 'Print Resolution', value: '2400 DPI Ultra HD' },
      { label: 'Express Turnaround', value: '24–48 Hours' },
      { label: 'Clients Satisfied', value: '2,500+' },
    ],
    highlights: [
      'Velvet touch, matte lamination, spot UV, and gold foil finishes',
      'Executive 100–120 GSM watermark & executive bond letterheads',
      'Tri-fold, bi-fold brochures, and presentation folders with pocket slots',
      'Complimentary artwork pre-flight inspection and digital proofing',
    ],
    quoteServiceType: 'Commercial Printing',
    capabilities: [
      {
        title: 'Executive & Luxury Visiting Cards',
        description:
          'Make an indelible first impression. From clean matte-laminated cards to premium multi-layered textured cards with raised UV elements and metallic foiling.',
        features: [
          '350 GSM to 450 GSM imported art card & linen stocks',
          'Raised Spot UV and gloss-embossed brand logos',
          'Hot gold, rose gold, silver, and copper metallic foiling',
          'Rounded corner die-cutting and duplex sandwich cards',
        ],
        iconName: 'CreditCard',
      },
      {
        title: 'Corporate Letterheads & Custom Envelopes',
        description:
          'Establish unquestionable authority in official communications. Laser-printer friendly letterheads that glide through office printers without curling or smudging.',
        features: [
          '100 GSM & 120 GSM premium executive bond papers',
          'Alabaster, sunshine, and eco-friendly laid paper textures',
          'Matching branded peel-and-seal envelopes (DL, C5, and A4 sizes)',
          'Crisp Pantone color accuracy matching your exact brand guidelines',
        ],
        iconName: 'FileText',
      },
      {
        title: 'Marketing Brochures, Pamphlets & Flyers',
        description:
          'Showcase your company’s product catalog and value propositions with high-impact brochures printed with rich inks that bring photography to life.',
        features: [
          'Bi-fold, tri-fold, Z-fold, and gatefold folding formats',
          '130 GSM to 300 GSM art paper with gloss or matte coat',
          'Precision creasing preventing spine cracking on folds',
          'Short digital runs from 100 pcs to offset runs of 50,000+ pcs',
        ],
        iconName: 'Layers',
      },
      {
        title: 'Corporate Presentation Folders & Catalog Booklets',
        description:
          'Equip your sales team with sleek die-cut presentation folders with internal business card slots and saddle-stitched or perfect-bound product catalogs.',
        features: [
          'Die-cut interior pockets holding A4 contracts and proposals',
          'Integrated slit for executive visiting card presentation',
          'Saddle stitch, wire-o-wire, and perfect binding options',
          'Thermal lamination protecting folders against scuffs and moisture',
        ],
        iconName: 'BookOpen',
      },
      {
        title: 'Corporate ID Cards, Lanyards & Badges',
        description:
          'High-durability PVC employee identity cards with thermal dye-sublimation printing, magnetic stripes or RFID integration, and custom satin neck lanyards.',
        features: [
          'Non-tearable waterproof PVC card stock with chip encoding',
          'Multi-color heat-transfer printed satin neck lanyards',
          'Retractable badge reels and metal dog hooks',
          'Visitor passes and temporary conference badges',
        ],
        iconName: 'UserCheck',
      },
      {
        title: 'Tax Invoices, Delivery Challans & Bill Books',
        description:
          'Carbonless NCR paper bill books and receipt pads that create flawless duplicate and triplicate copies without messy carbon paper inserts.',
        features: [
          '1+1 duplicate and 1+2 triplicate NCR carbonless sets',
          'Sequential serial numbering and perforating lines',
          'Hardbound and softbound binding with wrap-around shield boards',
          'GST-compliant structured invoicing formats',
        ],
        iconName: 'Receipt',
      },
    ],
    specsTitle: 'Paper Stocks & Specialty Finishes Matrix',
    specsSubtitle: 'Select the ideal substrate, thickness, and finishing to match your company branding',
    specs: [
      { label: 'Executive Visiting Cards', value: '350–400 GSM Art Board with Velvet Touch Lamination + Raised Spot UV', note: 'Most Popular' },
      { label: 'Luxury Metallic Foil Cards', value: '450 GSM Multi-layer Card with Gold / Silver Hot Foil Stamping', note: 'VIP Tier' },
      { label: 'Corporate Letterheads', value: '100–120 GSM Royal Executive Bond / Alabaster Paper', note: 'Laser Safe' },
      { label: 'Brochures & Flyers', value: '170–250 GSM Gloss / Silk Art Paper with Precision Machine Crease', note: 'Vibrant Colors' },
      { label: 'Presentation Folders', value: '350 GSM Art Card with Die-Cut Pockets + Matte Finish', note: 'Executive Kit' },
      { label: 'Carbonless Bill Books', value: '55–60 GSM Top/Middle/Bottom NCR Paper with Perforation', note: '2 or 3 Ply' },
    ],
    processTitle: 'From Digital File to Finished Print',
    processSubtitle: 'Rigorous pre-press proofing ensuring flawless typography, alignment, and color fidelity',
    process: [
      {
        stepNumber: '01',
        title: 'Artwork Review & Free Pre-Flight Check',
        description:
          'Send us your print-ready PDF, CDR, or AI files. Our pre-press specialists inspect bleed zones, margin safety, fonts, and CMYK color conversions.',
      },
      {
        stepNumber: '02',
        title: 'Digital PDF or Physical Proofing',
        description:
          'We generate an exact digital 3D proof or send a physical sample for high-volume offset orders to confirm text accuracy and paper texture.',
      },
      {
        stepNumber: '03',
        title: 'High-Definition Printing & Lamination',
        description:
          'Jobs are produced on state-of-the-art multi-color offset presses or calibrated digital presses, followed by protective thermal lamination.',
      },
      {
        stepNumber: '04',
        title: 'Precision Die-Cutting & Safe Delivery',
        description:
          'Printed materials are computer die-cut, quality-inspected, moisture-sealed, and dispatched directly to your Gurgaon, Noida, or Delhi NCR office.',
      },
    ],
    serviceAreas: [
      'Gurgaon Cyber City & Golf Course Extn',
      'Sector 17A, 14 & 29 Gurgaon',
      'Udyog Vihar Industrial Belt',
      'Noida Sector 1 Extension',
      'Noida Sector 62, 63 & 135 Expressway',
      'South Delhi & Okhla Phase 1-3',
      'Faridabad & Greater Noida',
      'Pan-India Shipping for Bulk Orders',
    ],
    faqs: [
      {
        question: 'What file format should I provide for commercial printing?',
        answer:
          'We recommend vector PDF files with all text converted to curves/outlines. We also accept Adobe Illustrator (.AI), CorelDraw (.CDR), and high-resolution TIFF or PSD files (minimum 300 DPI at 100% scale in CMYK color mode with a 3mm bleed).',
      },
      {
        question: 'What is the turnaround time for visiting cards and letterheads?',
        answer:
          'Digital print jobs for visiting cards (matte/gloss) and letterheads are typically ready within 24 to 48 hours. Specialty finishes like spot UV, embossing, or gold foiling require approximately 3 to 4 business days for precision dye preparation and curing.',
      },
      {
        question: 'What is the difference between digital printing and offset printing?',
        answer:
          'Digital printing is optimal for short to medium runs (100 to 1,000 pcs) with rapid turnaround and low setup costs. Offset printing is designed for large volume runs (2,000+ pcs) where per-unit costs drop dramatically while maintaining supreme color consistency.',
      },
      {
        question: 'Can I see paper samples before placing a bulk corporate printing order?',
        answer:
          'Yes, absolutely! You can visit our branches in Sector 17A Gurgaon or Sector 1 Noida Extension to feel our paper swatch catalog (textures, GSM weights, foil samples). For corporate clients, our representative can also visit your office with a sample kit.',
      },
      {
        question: 'Will my printed letterheads work smoothly in office laser and inkjet printers?',
        answer:
          'Yes. We print letterheads on laser-compatible executive bond papers using specialized heat-resistant inks that will not bleed, smudge, or melt when fed through high-temperature office laser copiers.',
      },
    ],
    meta: {
      title: 'Visiting Card, Letterhead & Brochure Printing in Gurgaon & Noida',
      description:
        'Premium commercial printing in Gurgaon Sector 17A and Noida Extension. Luxury visiting cards, executive letterheads, marketing brochures, and corporate stationery.',
      keywords: [
        'Visiting card printing Gurgaon',
        'Letterhead printing Noida Extension',
        'Commercial printing Gurgaon',
        'Brochure printing Gurgaon',
        'Business card printing Delhi NCR',
        'Spot UV visiting card Gurgaon',
        'Corporate stationery printing Noida',
      ],
    },
  },
  {
    id: 'gifting',
    slug: 'corporate-gifting',
    aliases: ['gifting', 'corporate-gifts', 'corporate-gifting-gurgaon', 'customized-gifts-delhi-ncr'],
    title: 'Corporate Gifting — Customized Gifts for Delhi NCR Businesses',
    shortTitle: 'Corporate Gifting',
    tag: 'Curated Gifts & Custom Branding',
    subtitle: 'Tailored Employee Welcome Kits, Branded Tech & Executive Client Hampers',
    description:
      'Strengthen professional relationships and elevate company morale with customized corporate gifting solutions from Comtech Systems. Catering to enterprises across Gurgaon, Noida, and the wider Delhi NCR, we design, brand, and assemble bespoke onboarding kits, festive gift hampers, executive tech accessories, and sustainable eco-friendly merchandise with precision laser engraving and custom packaging.',
    image: '/sales&repair2.png',
    imageAlt: 'Customized corporate gifting and branded merchandise in Gurgaon and Noida',
    stats: [
      { label: 'Gift Products Catalog', value: '500+ Items' },
      { label: 'Corporate Clients', value: '600+ Brands' },
      { label: 'Branding Methods', value: 'Laser, UV & Screen' },
      { label: 'Bulk Delivery', value: 'Pan Delhi NCR' },
    ],
    highlights: [
      'Custom employee joining onboarding kits with branded swag boxes',
      'Branded tech gifts: Wireless power banks, Bluetooth audio & smart tumblers',
      'Laser engraved metal pens, leatherite organizers & vacuum-insulated bottles',
      'Festive hampers (Diwali, New Year) with premium gourmet dry fruits',
    ],
    quoteServiceType: 'Corporate Gifting',
    capabilities: [
      {
        title: 'New Hire Joining & Employee Onboarding Kits',
        description:
          'Welcome new talent with a cohesive, memorable branded experience. Fully customizable swag boxes designed to foster company pride from day one.',
        features: [
          'Hardbound notebook with logo debossing & metal stylus pen',
          'Temperature-display stainless steel insulated flask',
          'Custom branded cotton polo / dry-fit company t-shirt',
          'Custom magnetic closure gift box with personalized welcome card',
        ],
        iconName: 'Gift',
      },
      {
        title: 'Branded Tech Accessories & Smart Gadgets',
        description:
          'High-utility gadgets that employees and executive clients use every day, engineered for durability and showcasing your company logo proudly.',
        features: [
          'Fast-charging 10,000mAh wireless power banks with laser logo',
          'Noise-cancelling Bluetooth earbuds and portable speakers',
          'Multi-port USB hub organizers and wireless charging desk mats',
          'Smart LED temperature water bottles and anti-theft laptop bags',
        ],
        iconName: 'Smartphone',
      },
      {
        title: 'Executive VIP Gift Sets & Client Hampers',
        description:
          'Honor key accounts, directors, and strategic partners with sophisticated, timeless gift ensembles packaged in luxurious velvet-lined rigid presentation boxes.',
        features: [
          'Genuine leatherette portfolio folders and executive desk planners',
          'Heavyweight brass rollerball pens with laser engraving',
          'Branded cardholder, metal keychain, and matching flask sets',
          'Gold foil embossed corporate presentation packaging',
        ],
        iconName: 'Award',
      },
      {
        title: 'Festive & Annual Celebration Hampers (Diwali & New Year)',
        description:
          'Celebrate milestones and festivals with bespoke curated hampers blending traditional indulgence with functional premium utility gifts.',
        features: [
          'A-grade California almonds, cashews, and organic honey jars',
          'Handcrafted brass diyas, aromatic scented candles & diffusers',
          'Custom corporate greeting cards with leadership signature',
          'Bulk drop-shipping directly to employee doorsteps across India',
        ],
        iconName: 'Sparkles',
      },
      {
        title: 'Eco-Friendly & Sustainable Bamboo Gift Sets',
        description:
          'Demonstrate your commitment to sustainability. Stylish office essentials fabricated from natural bamboo, cork, recycled wheat straw, and jute.',
        features: [
          'Natural bamboo wireless charging docks and desk clocks',
          'Cork-wrapped stainless steel insulated travel tumblers',
          'Plantable seed pens and recycled kraft paper notebooks',
          '100% biodegradable organic cotton tote and laptop bags',
        ],
        iconName: 'HeartHandshake',
      },
      {
        title: 'Custom Apparel & Branded Merchandise',
        description:
          'Outfit your team for company off-sites, conferences, and daily office wear with premium apparel featuring embroidery or breathable direct-to-film prints.',
        features: [
          '100% combed cotton pique polo t-shirts with chest embroidery',
          'Winter fleece zip hoodies, windcheaters, and softshell jackets',
          'Embroidered canvas caps, laptop sleeves, and gym duffels',
          'All standard sizes available (S to 4XL) with color fastness guarantee',
        ],
        iconName: 'ShoppingBag',
      },
    ],
    specsTitle: 'Gifting Tiers & Customization Specifications',
    specsSubtitle: 'Flexible options designed to fit diverse corporate budgets and campaign goals',
    specs: [
      { label: 'Welcome Onboarding Kits', value: 'Notebook + Pen + Flask + Tech Cable in Custom Printed Box', note: 'Best for HR' },
      { label: 'Executive Tech Kits', value: '10,000mAh Power Bank + Wireless Mouse + Bluetooth Speaker', note: 'High Utility' },
      { label: 'Festive Luxury Hampers', value: 'Dry Fruit Trio + Brass Diya + Branded Travel Flask + Gourmet Treats', note: 'Festive Season' },
      { label: 'Eco-Sustainable Bundles', value: 'Bamboo Tumbler + Cork Diary + Seed Pen + Jute Bag', note: 'ESG Friendly' },
      { label: 'Branding Technologies', value: 'Fiber Laser Engraving, UV Multi-color, Screen Print, Embroidery, Deboss', note: 'Precision Quality' },
      { label: 'Minimum Order Quantity', value: 'Flexible MOQs starting from 25 units up to 10,000+ units', note: 'Scalable' },
    ],
    processTitle: 'Our Seamless Corporate Gifting Workflow',
    processSubtitle: 'We manage everything from curation and branding to multi-destination fulfillment',
    process: [
      {
        stepNumber: '01',
        title: 'Consultation & Budget Alignment',
        description:
          'Tell us your occasion (onboarding, festive, seminar), target audience, quantity, and budget per kit. We recommend curated product combos.',
      },
      {
        stepNumber: '02',
        title: 'Free 3D Mockups & Physical Sample',
        description:
          'Our graphic design team prepares 3D virtual mockups of your branded products. We can also provide a physical master sample for bulk orders.',
      },
      {
        stepNumber: '03',
        title: 'Precision In-House Branding & Assembling',
        description:
          'Products undergo laser engraving or UV color printing, accompanied by custom box sleeves, ribboning, and personalized welcome cards.',
      },
      {
        stepNumber: '04',
        title: 'Quality Check & Centralized or Doorstep Delivery',
        description:
          'Every kit is individually bubble-wrapped and boxed. We deliver in bulk to your office or dispatch directly to individual employee addresses.',
      },
    ],
    serviceAreas: [
      'DLF Cyber City & Udyog Vihar Gurgaon',
      'Sector 17A, Sector 32 & 44 Gurgaon',
      'Golf Course Road & Sohna Road',
      'Noida Sector 1 Extension',
      'Noida Sector 62, 125, 135 & 142',
      'Connaught Place & Aerocity Delhi',
      'Greater Noida & Faridabad',
      'Pan-India Courier Drop-Shipping for Remote Teams',
    ],
    faqs: [
      {
        question: 'What is the Minimum Order Quantity (MOQ) for customized corporate gifts?',
        answer:
          'Our standard MOQ starts from just 25 to 50 units for most onboarding kits, tech sets, and drinkware. For specialized custom packaging boxes or apparel, we can tailor batches according to your organization’s headcount.',
      },
      {
        question: 'Can you deliver gift hampers directly to employees working remotely from home?',
        answer:
          'Yes! We provide complete end-to-end pan-India individual fulfillment. Simply share an address spreadsheet, and we manage individual packaging, tracking IDs, and safe doorstep delivery to every employee.',
      },
      {
        question: 'How is company branding (logo) applied to the gift products?',
        answer:
          'Depending on the substrate material, we use high-precision fiber laser engraving (for stainless steel, metal pens, and bamboo), full-color UV flatbed printing (for electronics and power banks), blind debossing (for leatherite diaries), and rich embroidery (for polo t-shirts and hoodies).',
      },
      {
        question: 'How much lead time is needed for bulk corporate orders?',
        answer:
          'Standard orders with customized logo branding usually require 5 to 7 business days from mockup approval. For urgent events, we offer expedited 48-hour turnarounds on select in-stock tech and stationery items.',
      },
      {
        question: 'Can we customize the items inside an onboarding welcome box?',
        answer:
          'Absolutely. You have 100% freedom to mix and match any items from our catalog — combining tech accessories, notebooks, drinkware, t-shirts, keychains, and stickers inside a custom-branded gift box with your colors.',
      },
    ],
    meta: {
      title: 'Customized Corporate Gifting & Welcome Kits in Gurgaon & Noida',
      description:
        'Custom corporate gifts, employee onboarding welcome kits, branded tech gadgets, and festive hampers for businesses across Gurgaon, Noida, and Delhi NCR.',
      keywords: [
        'Corporate gifting Gurgaon',
        'Customized corporate gifts Noida Extension',
        'Employee welcome kit Gurgaon',
        'Corporate gifts Delhi NCR',
        'Branded tech gadgets for gifting',
        'Diwali corporate gift hampers Gurgaon',
        'Laser engraved corporate gifts Noida',
      ],
    },
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  const normalized = slug.toLowerCase().trim();
  return servicesData.find(
    (item) => item.slug === normalized || item.id === normalized || item.aliases.includes(normalized)
  );
}
