// Google Analytics 4 (GA4) Tracking Utility
// Measurement ID: G-ML0DECF0ZV

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-ML0DECF0ZV';

/**
 * Safely send an event to GA4
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
 * WhatsApp CTA Clicks
 */
export const trackWhatsAppClick = (source: string, intent: 'reservation' | 'partnership' | 'catering' | 'general' = 'general') => {
  trackEvent('contact', {
    method: 'whatsapp',
    contact_source: source,
    intent,
  });
  trackEvent('generate_lead', {
    lead_source: source,
    service: intent,
  });
};

/**
 * Phone Number Clicks
 */
export const trackPhoneClick = (phone: string, source: string) => {
  trackEvent('contact', {
    method: 'phone',
    contact_source: source,
    phone_number: phone,
  });
};

/**
 * Google Maps Branch Navigation
 */
export const trackMapsNavigation = (branchName: string) => {
  trackEvent('select_content', {
    content_type: 'location_navigation',
    item_id: branchName,
    branch_name: branchName,
  });
};

/**
 * Google Maps All Reviews Click
 */
export const trackReviewsClick = (platform: string = 'google_maps') => {
  trackEvent('select_content', {
    content_type: 'reviews',
    platform,
  });
};

/**
 * Social Media Outbound Clicks
 */
export const trackSocialClick = (platform: 'instagram' | 'tiktok', location: string) => {
  trackEvent('social_share', {
    platform,
    location,
  });
};

/**
 * PDF Menu Download / View
 */
export const trackMenuDownload = () => {
  trackEvent('file_download', {
    file_name: 'Menu_Soto_Seger_Bu_Aminah.pdf',
    file_extension: 'pdf',
    link_text: 'Unduh Menu Lengkap (PDF)',
  });
};

/**
 * Internal Section Navigation
 */
export const trackNavClick = (sectionName: string, location: 'navbar_desktop' | 'navbar_mobile' | 'footer' | 'hero') => {
  trackEvent('navigation_click', {
    section_name: sectionName,
    nav_location: location,
  });
};

/**
 * Gallery Load More Interaction
 */
export const trackGalleryLoadMore = (totalDisplayed: number) => {
  trackEvent('view_more', {
    content_type: 'gallery_images',
    total_displayed: totalDisplayed,
  });
};
