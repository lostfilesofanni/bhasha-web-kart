
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsAppButton from "./WhatsAppButton";
import LocationMap from "./LocationMap";
import { Badge } from "@/components/ui/badge";
import { QrCode, Flag } from "lucide-react";

interface LandingPagePreviewProps {
  businessName: string;
  contact: string;
  location: string;
  verified?: boolean;
  lastUpdated?: string;
}

const LandingPagePreview = ({ 
  businessName, 
  contact, 
  location,
  verified = false,
  lastUpdated
}: LandingPagePreviewProps) => {
  if (!businessName) return null;

  return (
    <Card className="overflow-hidden border-2 border-secondary/40">
      <CardHeader className="bg-muted pb-3">
        <CardTitle className="text-lg">Landing Page Preview</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Preview container */}
        <div className="border-4 border-gray-200 bg-white rounded-lg mx-auto max-w-md overflow-hidden shadow-md">
          {/* Browser address bar mockup */}
          <div className="bg-gray-200 px-3 py-1.5 flex items-center gap-2 border-b border-gray-300">
            <div className="flex items-center gap-1 bg-green-100 px-1.5 py-0.5 rounded text-xs text-green-800">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-700">
                <path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M15 9L9.5 14.5L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>UA-Secure</span>
            </div>
            <div className="flex-1 bg-white rounded-md px-2 py-1 text-xs text-gray-700 font-medium truncate">
              {businessName}.free.भारत
            </div>
          </div>

          {/* Business header */}
          <div className="bg-gradient-to-r from-primary/90 to-secondary/90 text-white p-6 text-center relative">
            <h1 className="text-2xl font-bold mb-2">{businessName}</h1>
            <p className="text-sm opacity-90">Your One-Stop Destination</p>
            
            {verified && (
              <div className="absolute top-2 right-2">
                <Badge variant="outline" className="bg-white/20 border-white/40 text-white text-xs">
                  Verified Business
                </Badge>
              </div>
            )}
          </div>

          {/* Welcome section */}
          <div className="p-4 text-center bg-white">
            <h2 className="text-lg font-medium mb-2">Welcome to our store!</h2>
            <p className="text-sm text-gray-600">
              We offer the best products and services for our valued customers.
            </p>
          </div>

          {/* Action buttons */}
          <div className="p-4 space-y-4">
            <WhatsAppButton phoneNumber={contact} />
            
            <div className="mt-4">
              <LocationMap location={location} />
            </div>
            
            {verified && (
              <div className="flex justify-between items-center mt-4 p-2 bg-gray-50 rounded-md">
                <div className="flex items-center gap-2">
                  <QrCode className="h-4 w-4 text-gray-600" />
                  <span className="text-xs text-gray-600">Scan to verify</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flag className="h-4 w-4 text-gray-600" />
                  <span className="text-xs text-gray-600">Report issue</span>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
            <p>© 2025 {businessName}. All rights reserved.</p>
            {verified && lastUpdated && (
              <div className="mt-1 flex items-center justify-center gap-1">
                <div className="bg-green-600 h-2 w-2 rounded-full"></div>
                <p className="text-xs text-gray-500">Verified for UA Compliance - {lastUpdated.split(',')[0]}</p>
              </div>
            )}
            <p className="text-xs mt-1">Created with Bhasha WebKart</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LandingPagePreview;
