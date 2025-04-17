
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ClipboardCopy, Check, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DomainPreviewProps {
  businessName: string;
  language: string;
  verified?: boolean;
  lastUpdated?: string;
}

const DomainPreview = ({ businessName, language, verified = false, lastUpdated }: DomainPreviewProps) => {
  const [domainName, setDomainName] = useState("");
  const { toast } = useToast();

  // Transform business name to a domain-friendly format
  useEffect(() => {
    if (businessName) {
      // Remove spaces and special characters
      const formattedName = businessName
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^\p{L}\p{N}]/gu, ""); // Keep only letters and numbers from any script
      
      const tld = getTLD(language);
      setDomainName(`${formattedName}.free.${tld}`);
    }
  }, [businessName, language]);

  // Get appropriate TLD based on language
  const getTLD = (lang: string) => {
    switch (lang) {
      case "hindi":
        return "भारत";
      case "tamil":
        return "இந்தியா";
      case "telugu":
        return "భారత్";
      case "bengali":
        return "ভারত";
      case "marathi":
        return "भारत";
      default:
        return "भारत";
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(domainName);
    toast({
      title: "Domain Copied!",
      description: "Domain name copied to clipboard",
    });
  };

  const showQrCode = () => {
    toast({
      title: "QR Code",
      description: "Scan to view business details",
    });
  };

  if (!businessName) return null;

  return (
    <Card className={`overflow-hidden border-2 ${verified ? "border-green-500/50" : "border-primary/50"}`}>
      <CardHeader className="bg-muted pb-3">
        <CardTitle className="text-lg flex items-center justify-between">
          <span>Your UA-Compliant Domain</span>
          {verified && (
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
              Verified
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              value={domainName}
              readOnly
              className="font-semibold text-accent text-lg"
            />
            <Button variant="outline" size="icon" onClick={copyToClipboard} title="Copy domain">
              <ClipboardCopy className="h-4 w-4" />
            </Button>
            {verified && (
              <Button variant="outline" size="icon" onClick={showQrCode} title="Show QR Code">
                <QrCode className="h-4 w-4" />
              </Button>
            )}
          </div>
          
          {verified ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-green-700">UA Compliant Domain</span>
              </div>
              
              <div className="p-3 rounded-md bg-green-50 border border-green-200">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-green-800">Verified for UA Compliance</span>
                </div>
                {lastUpdated && (
                  <p className="text-xs text-green-700 mt-1">Last updated: {lastUpdated}</p>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground">
                This domain has been verified and is ready for registration. It uses
                Internationalized Domain Names (IDN) to represent your business in its native script.
              </p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              This is your Universal Acceptance (UA) compliant domain suggestion. It uses
              Internationalized Domain Names (IDN) to represent your business in its native script.
            </p>
          )}
          
          {verified && (
            <div className="p-2 bg-blue-50 border border-blue-200 rounded-md mt-2">
              <p className="text-xs text-blue-800">
                <span className="font-medium">Security Notice:</span> This domain has been verified through our multi-step verification process to ensure authenticity.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DomainPreview;
