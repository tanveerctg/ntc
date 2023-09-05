import { Dancing_Script } from 'next/font/google';
import localFont from 'next/font/local';

export const dancingScript = Dancing_Script({ subsets: ['latin'] });

export const signatureFont = localFont({
  src: [
    {
      path: '../public/fonts/Signatie.woff2',
      // path: '../public/fonts/DisplaySignature.woff2',
      weight: '400',
    },
  ],
})


