export interface Product {
  id: string;
  name: string;
  image: string;  // Path to image in public folder
  url: string;    // URL path for navigation
  description: string;  // New field added for product card
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Sodium Lauryl Sulfate',
    image: '/products/sodium_lauryl_sulfate.jpg',
    url: '/products/sodium_lauryl_sulfate',
    description: 'An anionic surfactant used in detergents, shampoos, and toothpastes.',
  },
  {
    id: '2',
    name: 'Sodium Alpha-olefin Sulfonate',
    image: '/products/sodium_alpha_olefin_sulfonate.jpg',
    url: '/products/sodium_alpha_olefin_sulfonate',
    description: 'A mild, biodegradable surfactant often used in personal care products.',
  },
  {
    id: '3',
    name: 'Sodium Dodccyl Sulfate',
    image: '/products/sodium_dodccyl_sulfate.jpg',
    url: '/products/sodium_dodccyl_sulfate',
    description: 'Commonly used for its foaming and cleaning properties in cosmetics and cleaners.',
  },
  {
    id: '4',
    name: 'High Activity Color Stain Remover',
    image: '/products/high_activity_color_stain_remover.jpg',
    url: '/products/high_activity_color_stain_remover',
    description: 'Powerful stain remover stick ideal for colored fabrics and tough stains.',
  },
  {
    id: '5',
    name: 'Gypsum Board Foaming Agent',
    image: '/products/gypsum_board_foaming_agent.jpg',
    url: '/products/gypsum_board_foaming_agent',
    description: 'Used to produce lightweight gypsum boards with uniform pore structure.',
  },
  {
    id: '6',
    name: 'Potassium Dodecyl Sulfate',
    image: '/products/potassium_dodecyl_sulfate.jpg',
    url: '/products/potassium_dodecyl_sulfate',
    description: 'A potassium salt of dodecyl sulfate used in cleaning and emulsification.',
  },
  {
    id: '7',
    name: 'Lithium Dodecyl Sulfate',
    image: '/products/lithium_dodecyl_sulfate.jpg',
    url: '/products/lithium_dodecyl_sulfate',
    description: 'Specialty surfactant with niche industrial and research applications.',
  },
  {
    id: '8',
    name: 'Magnesium Dodecyl Sulfate',
    image: '/products/magnesium_dodecyl_sulfate.jpg',
    url: '/products/magnesium_dodecyl_sulfate',
    description: 'Magnesium-based surfactant used in specialized cleaning formulations.',
  },
  {
    id: '9',
    name: 'Sodium N-Decyl Sulfate',
    image: '/products/sodium_n_decyl_sulfate.jpg',
    url: '/products/sodium_n_decyl_sulfate',
    description: 'Used in industrial applications as a wetting and dispersing agent.',
  },
  {
    id: '10',
    name: 'Sodium Octyl Decyl Alcohol Sulphate',
    image: '/products/sodium_octyl_decyl_alcohol_sulphate.jpg',
    url: '/products/sodium_octyl_decyl_alcohol_sulphate',
    description: 'Surfactant derived from mixed alcohols, used in cleaning and personal care.',
  },
  {
    id: '11',
    name: 'Positive Octyl Sodium Sulfate',
    image: '/products/positive_octyl_sodium_sulfate.jpg',
    url: '/products/positive_octyl_sodium_sulfate',
    description: 'An effective emulsifier and foaming agent used in detergents.',
  },
  {
    id: '12',
    name: 'Sodium Isooctanol Sulfate',
    image: '/products/sodium_isooctanol_sulfate.jpg',
    url: '/products/sodium_isooctanol_sulfate',
    description: 'Branched alcohol-based sulfate used in mild cleansing products.',
  },
];
