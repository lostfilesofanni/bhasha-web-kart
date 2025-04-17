
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsAppButton from "./WhatsAppButton";
import LocationMap from "./LocationMap";

interface LandingPagePreviewProps {
  businessName: string;
  contact: string;
  location: string;
}

const LandingPagePreview = ({ businessName, contact, location }: LandingPagePreviewProps) => {
  if (!businessName) return null;

  return (
    <Card className="overflow-hidden border-2 border-secondary/40">
      <CardHeader className="bg-muted pb-3">
        <CardTitle className="text-lg">Landing Page Preview</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Preview container */}
        <div className="border-4 border-gray-200 bg-white rounded-lg mx-auto max-w-md overflow-hidden shadow-md">
          {/* Business header */}
          <div className="bg-gradient-to-r from-primary/90 to-secondary/90 text-white p-6 text-center">
            <h1 className="text-2xl font-bold mb-2">{businessName}</h1>
            <p className="text-sm opacity-90">Your One-Stop Destination</p>
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
          </div>

          {/* Footer */}
          <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
            <p>© 2025 {businessName}. All rights reserved.</p>
            <p className="text-xs mt-1">Created with Bhasha WebKart</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LandingPagePreview;
