import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: "Ashley Chamboko – Principal AI & Cloud Architect",
  description: "AI Architect specializing in national-scale AI platforms, MLOps, and cloud-native data systems.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#0a0a0a] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

