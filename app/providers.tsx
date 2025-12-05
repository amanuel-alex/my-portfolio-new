// app/layout.tsx or app/providers.tsx
'use client';

import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

export function EmailJSInitializer() {
  useEffect(() => {
    // Initialize EmailJS with public key
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  return null;
}

// Add to your layout or providers