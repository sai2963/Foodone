import MainHeader from '@/components/main-header/main-header';
import './globals.css'; // Assuming this contains global styles if needed

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Any other meta tags or external stylesheets can be included here */}
      </head>
      <body className="bg-gray-800">
        
        
          <div>
          
          <MainHeader />
          </div>
          
          {children}
        
      </body>
    </html>
  );
}
