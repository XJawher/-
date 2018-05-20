export const trackEvent = ({ category, action, label, value }) => {
  // Ignore within SSR.
  if (typeof window === 'undefined') {
    return;
  }

  // Ignore in development, when the GA snippet isn't loaded.
  if (typeof window.ga === 'undefined') {
    return;
  }

  window.ga('send', 'event', category, action, label, value);
};

export const interactWithExplorable = ({ component, label }) => {
  trackEvent({
    category: 'explorable',
    action: component,
    label,
  });
};

export const interactWithCodeSample = ({ component, label }) => {
  trackEvent({
    category: 'code-snippet',
    action: component,
    label,
  });
};

export const signUpForNewsletter = ({ id }) => {
  trackEvent({
    category: 'newsletter',
    action: id,
  });
};
