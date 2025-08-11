// Navigation utility functions for consistent routing
export const navigateToQuote = (navigate: (path: string) => void) => {
  navigate('/quote');
};

export const navigateToContact = (navigate: (path: string) => void) => {
  navigate('/contact');
};

export const navigateToHome = (navigate: (path: string) => void) => {
  navigate('/');
};

export const navigateToAbout = (navigate: (path: string) => void) => {
  navigate('/about');
};

export const navigateToPricing = (navigate: (path: string) => void) => {
  navigate('/pricing');
};

export const navigateToFAQ = (navigate: (path: string) => void) => {
  navigate('/faq');
};

// External links (these should still use window.location)
export const callPhone = (phoneNumber: string) => {
  window.location.href = `tel:${phoneNumber}`;
};

export const sendEmail = (email: string) => {
  window.location.href = `mailto:${email}`;
};