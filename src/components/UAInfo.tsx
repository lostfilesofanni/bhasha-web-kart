
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ShieldCheck, Share2 } from "lucide-react";

const UAInfo = () => {
  return (
    <Card className="border-accent/30">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Globe className="h-5 w-5 text-primary" />
          Universal Acceptance (UA)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 text-sm">
          <p>
            Universal Acceptance (UA) ensures that all domain names and email addresses work in all applications, regardless of the script they're written in or their length.
          </p>
          <p>
            When you create a website with a domain in Hindi, Tamil, or other languages, you're participating in making the internet more inclusive and accessible to everyone in their own language.
          </p>
          
          <div className="flex flex-wrap gap-2 my-2">
            <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">
              UA Compliance
            </Badge>
            <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">
              IDN Support
            </Badge>
            <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">
              Multilingual Web
            </Badge>
          </div>
          
          <p>
            Learn more about UA at{" "}
            <a
              href="https://uasg.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium underline"
            >
              UASG.org
            </a>
          </p>
          
          <div className="space-y-2 mt-2">
            <div className="flex items-start gap-2 p-2 bg-muted rounded-md">
              <ShieldCheck className="h-4 w-4 text-green-600 mt-0.5" />
              <div className="text-xs">
                <p className="font-semibold">UA Benefits:</p>
                <p>Reach more customers in their preferred language, show cultural respect, and stand out from competitors.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2 p-2 bg-muted rounded-md">
              <Share2 className="h-4 w-4 text-blue-600 mt-0.5" />
              <div className="text-xs">
                <p className="font-semibold">Fraud Prevention:</p>
                <p>Our verification process ensures only legitimate businesses can create UA-compliant landing pages.</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UAInfo;
