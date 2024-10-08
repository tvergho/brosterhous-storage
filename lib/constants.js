/* eslint-disable max-len */
export const SITE_NAME = 'Brosterhous Storage';
export const PHONE = '(541) 388-5440';
export const EMAIL = 'bendbrosterhousstorage@gmail.com';
export const ADDRESSES = {
  officeAddress: [
    '61380 Brosterhous Rd',
    'Bend, OR 97702',
  ],
  mailingAddress: [
    'Brosterhous Storage',
    '61149 S. HWY 97 PMB 611',
    'Bend, Oregon 97702',
  ],
};
export const HOURS = [
  'Monday-Thursday: 2 PM – 4 PM',
  'Friday-Sunday: By appointment',
];
export const HEADER = [
  { display: 'Home', link: '/' },
  { display: 'Security', link: 'security' },
  { display: 'Features', link: 'features' },
  { display: 'Unit Sizes and Prices', link: 'prices' },
  { display: 'News & Specials', link: 'news' },
  { display: 'FAQs', link: 'faq' },
  { display: 'Contact Us', link: 'contact-us' },
];
export const HOME_IMAGES = [
  { src: '/slide-1.png', description: 'Ready for some spring cleaning? We\'ll make sure your extra furniture, files, or appliances are safely stored until you need them again.' },
  { src: '/slide-2.png', description: 'Whether you are looking to free up space in your office or are stocking supplies for the future, we have the convenient and secure space to meet all of your storage needs.' },
];
export const PRICING_TABLE = [
  {
    size: '5*8*8', type: 'Unit', price: '$70.00', buttonText: 'Call for Availability', buttonLink: `tel:${PHONE.replace(/[^\d]/g, '')}`,
  },
  {
    size: '8*8*8', type: 'Unit', price: '$80.00', buttonText: 'Call for Availability', buttonLink: `tel:${PHONE.replace(/[^\d]/g, '')}`,
  },
  {
    size: '8*10*8', type: 'Unit', price: '$90.00', buttonText: 'Call for Availability', buttonLink: `tel:${PHONE.replace(/[^\d]/g, '')}`,
  },
  {
    size: '8*20*8', type: 'Unit', price: '$165.00', buttonText: 'Call for Availability', buttonLink: `tel:${PHONE.replace(/[^\d]/g, '')}`,
  },
  {
    size: '8*40*8', type: 'Unit', price: '$205.00', buttonText: 'Call for Availability', buttonLink: `tel:${PHONE.replace(/[^\d]/g, '')}`,
  },
  {
    size: '', type: 'RV / Boat / Vehicle (outside parking storage)', price: 'Price Varies by Size', buttonText: 'Call for Availability', buttonLink: `tel:${PHONE.replace(/[^\d]/g, '')}`,
  },
];
export const DEFAULT_SIDEBAR = {
  title: 'Storage',
  quotes: [
    '"Whether you are looking to free up space in your office or are stocking supplies for the future, we have the convenient and secure space to meet all of your storage needs."',
    '"Ready for some spring cleaning? We’ll make sure your extra furniture, files, or appliances are safely stored until you need them again."'],
};
