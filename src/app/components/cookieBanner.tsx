'use client';
import React, { useState, useEffect } from 'react';

export function CookieBanner(){
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
      // Prevent scrolling when banner is shown
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'rejected');
    setShowBanner(false);
    // Re-enable scrolling when banner is closed
    document.body.style.overflow = 'auto';
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center">
      <div className="bg-white p-6 w-full max-w-3xl rounded-t-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Cookie Consent</h2>
        <p className="mb-4">
          We use cookies to improve your experience on our website. By continuing to use this site, you agree to our use of cookies.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => handleConsent(false)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Reject
          </button>
          <button
            onClick={() => handleConsent(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};