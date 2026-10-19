// Google Analytics 4 (GA4) Tracking Utility - Soto Seger Bu Aminah
// Measurement ID: G-ML0DECF0ZV

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-ML0DECF0ZV';

/**
 * Safely send a custom event to GA4 with intuitive event names
 */
export const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track SPA Page Views
 */
export const trackPageView = (pagePath: string, pageTitle: string) => {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: typeof window !== 'undefined' ? window.location.href : '',
  });
};

/**
 * WhatsApp Clicks (wa_contact, wa_reservasi, wa_mitra)
 */
export const trackWhatsAppClick = (source: string, intent: 'reservation' | 'partnership' | 'catering' | 'general' = 'general') => {
  let eventName = 'wa_contact';
  if (intent === 'reservation') eventName = 'wa_reservasi';
  if (intent === 'partnership') eventName = 'wa_mitra';
  if (intent === 'catering') eventName = 'wa_catering';

  trackEvent(eventName, {
    method: 'whatsapp',
    contact_source: source,
    intent,
  });
};

/**
 * Phone Number Clicks
 */
export const trackPhoneClick = (phone: string, source: string) => {
  trackEvent('phone_click', {
    method: 'phone',
    contact_source: source,
    phone_number: phone,
  });
};

/**
 * Google Maps Branch Navigation
 */
export const trackMapsNavigation = (branchName: string) => {
  trackEvent('maps_branch', {
    content_type: 'location_navigation',
    branch_name: branchName,
  });
};

/**
 * Google Maps Reviews Click
 */
export const trackReviewsClick = (platform: string = 'google_maps') => {
  trackEvent('reviews_click', {
    content_type: 'reviews',
    platform,
  });
};

/**
 * Social Media Outbound Clicks (Instagram / TikTok)
 */
export const trackSocialClick = (platform: 'instagram' | 'tiktok', location: string) => {
  trackEvent('social_click', {
    platform,
    location,
  });
};

/**
 * PDF Menu Download
 */
export const trackMenuDownload = () => {
  trackEvent('menu_download', {
    file_name: 'Menu_Soto_Seger_Bu_Aminah.pdf',
    file_extension: 'pdf',
  });
};

/**
 * Internal Section Navigation
 */
export const trackNavClick = (sectionName: string, location: 'navbar_desktop' | 'navbar_mobile' | 'footer' | 'hero') => {
  trackEvent('nav_click', {
    section_name: sectionName,
    nav_location: location,
  });
};

/**
 * Gallery Load More Interaction
 */
export const trackGalleryLoadMore = (totalDisplayed: number) => {
  trackEvent('gallery_load_more', {
    total_displayed: totalDisplayed,
  });
};
