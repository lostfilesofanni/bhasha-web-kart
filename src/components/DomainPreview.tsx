
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface DomainPreviewProps {
  businessName: string;
  language: string;
}

const DomainPreview = ({ businessName, language }: DomainPreviewProps) => {
  const [domainName, setDomainName] = useState("");

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
    alert("Domain copied to clipboard!");
  };

  if (!businessName) return null;

  return (
    <Card className="overflow-hidden border-2 border-primary/50">
      <CardHeader className="bg-muted pb-3">
        <CardTitle className="text-lg">Your UA-Compliant Domain</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              value={domainName}
              readOnly
              className="font-semibold text-accent text-lg"
            />
            <Button variant="outline" size="icon" onClick={copyToClipboard}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" 
                />
              </svg>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            This is your Universal Acceptance (UA) compliant domain suggestion. It uses
            Internationalized Domain Names (IDN) to represent your business in its native script.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DomainPreview;
