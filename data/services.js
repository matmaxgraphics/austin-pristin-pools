export const services = [
  {
    title: 'Weekly Maintenance',
    desc: 'Skimming, brushing, vacuuming and full chemical balancing — every week, same technician.',
    icon: 'M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1',
  },
  {
    title: 'Pool Repair',
    desc: 'Leaks, cracks, plumbing and surface repairs diagnosed fast and fixed right.',
    icon: 'M14.7 6.3a4 4 0 00-5.2 5.2L4 17v3h3l5.5-5.5a4 4 0 005.2-5.2l-2.6 2.6-2.5-.9-.9-2.5z',
  },
  {
    title: 'Equipment Installation',
    desc: 'Pumps, filters, heaters and automation — installed, configured and warrantied.',
    icon: 'M12 8a4 4 0 100 8 4 4 0 000-8zM4 12h2M18 12h2M12 4v2M12 18v2',
  },
  {
    title: 'Green-to-Clean Recovery',
    desc: 'From swamp to swimmable in about 4 days, documented with daily photos.',
    icon: 'M12 3s-6 6.5-6 10.5a6 6 0 0012 0C18 9.5 12 3 12 3z',
  },
  {
    title: 'Acid Wash',
    desc: 'Deep-strip stains and scale to restore your plaster to like-new brightness.',
    icon: 'M7 3h10l-1.5 6.5a5.5 5.5 0 01-7 0L7 3zM12 14v7M8 21h8',
  },
  {
    title: 'Tile Cleaning',
    desc: 'Bead-blasting and calcium removal that brings the waterline back to life.',
    icon: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  },
  {
    title: 'Pool Opening',
    desc: 'Spring startup: cover off, equipment primed, chemistry set for the season.',
    icon: 'M12 4v9M12 4l-4 4M12 4l4 4M4 15c2.5 2 5.5 2 8 0s5.5-2 8 0',
  },
  {
    title: 'Pool Closing',
    desc: 'Winterizing, line-blowing and cover-down so spring startup is painless.',
    icon: 'M12 20v-9M12 20l-4-4M12 20l4-4M4 7c2.5 2 5.5 2 8 0s5.5-2 8 0',
  },
  {
    title: 'Vacation Pool Care',
    desc: 'Away for weeks? Daily checks and remote monitoring while you travel.',
    icon: 'M3 18h18M6 18l3-9 4 5 3-7 2 11',
  },
  {
    title: 'Water Chemistry',
    desc: 'Lab-grade testing and dosing plans tuned to your pool, not a chart.',
    icon: 'M9 3h6M10 3v5.5L5.5 17a3 3 0 002.7 4h7.6a3 3 0 002.7-4L14 8.5V3',
  },
];

export const areas = [
  { id: 'hoodAustin', name: 'Central Austin', meta: 'Zilker, Travis Heights, Tarrytown, 78704' },
  { id: 'hoodBartonCreek', name: 'Barton Creek', meta: 'Barton Creek, Barton Hills, Lost Creek' },
  { id: 'hoodLakeway', name: 'Lakeway', meta: 'Lakeway, Hudson Bend, Steiner Ranch' },
  { id: 'hoodWestlake', name: 'Westlake', meta: 'Westlake Hills, Rollingwood' },
  { id: 'hoodBeeCave', name: 'Bee Cave', meta: 'Bee Cave, Spanish Oaks, The Hills' },
  { id: 'hoodOakHill', name: 'Oak Hill', meta: 'Oak Hill, Great Hills, Jollyville, Anderson Mill' },
];

export const plans = [
  {
    name: 'Essential',
    price: 289,
    desc: 'The weekly fundamentals, handled.',
    features: ['Weekly cleaning', 'Chemical balancing', 'Water testing', 'Monthly water report'],
    featured: false,
  },
  {
    name: 'Premium',
    price: 389,
    desc: 'Everything in Essential, plus proactive care.',
    features: [
      'Everything in Essential',
      'Priority support',
      'Quarterly equipment inspection',
      '15% off all repairs',
    ],
    featured: true,
  },
  {
    name: 'Elite',
    price: 549,
    desc: "Total peace of mind, even when you're away.",
    features: [
      'Everything in Premium',
      'Emergency visits included',
      'Filter replacement reminders',
      'Vacation monitoring',
      'Free yearly inspection',
    ],
    featured: false,
  },
];

export const faqs = [
  {
    q: 'How often should my pool be cleaned?',
    a: 'For most Austin pools, weekly service keeps chemistry stable through our long swim season. Heavily shaded pools or pools near construction may benefit from twice-weekly visits — your technician will recommend the right cadence after your first inspection.',
  },
  {
    q: 'What happens if it rains on my service day?',
    a: "Our weather-aware scheduling reschedules automatically around heavy rain and adjusts your chemical plan before the storm arrives. You'll get a notification with your new visit time — no phone calls needed.",
  },
  {
    q: 'Can I really see photos after every visit?',
    a: 'Yes. Your technician uploads before and after photos, chemical readings and notes from your backyard, before they leave. Everything lives permanently in your customer portal.',
  },
  {
    q: 'Is there a contract? Can I cancel?',
    a: 'Memberships are month-to-month with no long-term contract. Pause for a season or cancel anytime from your dashboard — it takes two taps.',
  },
  {
    q: 'My pool is green. How fast can you fix it?',
    a: 'Our Green-to-Clean recovery averages 4 days from first treatment to swim-ready water, depending on severity. Use the Diagnose My Pool tool to upload a photo and get an instant assessment.',
  },
];

export const testimonials = [
  {
    quote: "I was traveling constantly and needed someone reliable to take over. They brought my green pool back to fully operational within a week — and I never had to think about it again.",
    name: 'Steve D.',
    meta: 'Westlake · Yelp review',
    initials: 'SD',
    gradient: 'linear-gradient(135deg,#0E6BA8,#29C6DA)',
    video: true,
  },
  {
    quote: "We've used them for two homes over several years. Both pools are always in great shape, and they've helped with everything from equipment issues to a full controller install.",
    name: 'Ivan H.',
    meta: 'Lakeway · Yelp review',
    initials: 'IH',
    gradient: 'linear-gradient(135deg,#2FD9A6,#1893C4)',
    video: false,
  },
  {
    quote: "New to the area and needed a pool company fast. They had a technician out within half an hour of my first call, and we've stuck with them ever since.",
    name: 'Amelia C.',
    meta: 'Bee Cave · Yelp review',
    initials: 'AC',
    gradient: 'linear-gradient(135deg,#0B2A45,#0E6BA8)',
    video: false,
  },
];

export const whyItems = [
  { num: 'TRANSPARENT', title: 'Prices published, always', desc: "Configure your exact price online in 20 seconds. What you see is what you're billed — no surprise line items, ever." },
  { num: 'DOCUMENTED', title: 'Every visit, photo-verified', desc: 'Technicians log photos, readings and notes on-site. If we were there, you can see the proof in your portal.' },
  { num: 'PREDICTIVE', title: 'Weather-aware scheduling', desc: 'Heavy rain in the forecast? Your visit reschedules automatically, and your chemistry plan adjusts before the storm hits.' },
  { num: 'COMING SOON', title: 'Diagnose My Pool™', desc: 'Upload a photo of cloudy or green water and get likely causes with next steps in seconds — powered by AI, checked by pros.' },
  { num: 'RESPONSIVE', title: 'Emergencies, handled', desc: 'Pump died before the pool party? Elite members get same-day emergency visits included in their plan.' },
  { num: 'IPSSA CERTIFIED', title: 'Certified Pool Operators, since 2006', desc: "Members of the Independent Pool and Spa Service Association, certified in Water Chemistry and Pool Equipment, fully insured. Background-checked and in-house trained." },
];
