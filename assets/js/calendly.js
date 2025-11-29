function openCalendlyModal() {
    // Get Calendly URL from site configuration or use default
    const calendlyUrl = window.siteCalendlyUrl || 'https://calendly.com';

    // Check if we're on mobile
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // For mobile, redirect to Calendly URL directly
        window.location.href = calendlyUrl;
    } else {
        // For desktop, open in new window
        window.open(calendlyUrl, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
    }
}
