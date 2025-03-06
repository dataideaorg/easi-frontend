// Common style classes for consistent design across the site

export const styles = {
  // Colors
  colors: {
    primary: '#dd8604',
    primaryHover: '#c77804',
    secondary: '#f3a42d',
    dark: '#333333',
    light: '#ffffff',
    gray: '#666666',
    lightGray: '#f5f5f5',
  },
  
  // Typography
  typography: {
    h1: 'text-4xl lg:text-5xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-semibold',
    body: 'text-base',
    small: 'text-sm',
  },
  
  // Buttons
  buttons: {
    primary: 'bg-[#dd8604] hover:bg-[#c77804] text-white rounded-md transition-colors duration-200',
    secondary: 'border border-[#dd8604] text-[#dd8604] hover:bg-[#dd8604] hover:text-white rounded-md transition-colors duration-200',
    white: 'bg-white text-[#dd8604] hover:bg-gray-100 rounded-md transition-colors duration-200',
    dark: 'bg-[#333333] text-white hover:bg-[#444444] rounded-md transition-colors duration-200',
    large: 'px-8 py-3',
    medium: 'px-6 py-2',
    small: 'px-4 py-1.5',
  },
  
  // Cards
  cards: {
    base: 'bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300',
    content: 'p-6',
    imageContainer: 'h-64 relative bg-[#f5f5f5]',
  },
  
  // Sections
  sections: {
    padding: 'py-16',
    container: 'container mx-auto px-4',
    heroGradient: 'bg-gradient-to-r from-[#dd8604] to-[#f3a42d] text-white py-20',
    light: 'bg-white',
    gray: 'bg-[#f5f5f5]',
    dark: 'bg-[#333333] text-white',
  },
  
  // Images
  images: {
    hero: 'rounded-lg shadow-lg w-full h-auto',
    profile: 'w-full h-full object-cover',
    logo: 'h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300',
  },
  
  // Grids
  grids: {
    responsive1to2to3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
    responsive1to2to4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8',
    responsive2to3to6: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8',
  }
};

export default styles; 