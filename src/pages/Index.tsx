
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BusinessForm from "@/components/BusinessForm";
import DomainPreview from "@/components/DomainPreview";
import LandingPagePreview from "@/components/LandingPagePreview";
import UAInfo from "@/components/UAInfo";

const Index = () => {
  const [businessName, setBusinessName] = useState("");
  const [language, setLanguage] = useState("hindi");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [location, setLocation] = useState("");
  const [activeTab, setActiveTab] = useState("create");

  const handleBusinessSubmit = (name: string, lang: string, contact: string, loc: string) => {
    setBusinessName(name);
    setLanguage(lang);
    setWhatsappNumber(contact);
    setLocation(loc);
    setActiveTab("preview");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-8 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg mb-4">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              भाषा WebKart
            </h1>
          </div>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Create beautiful landing pages with domains in your own language - हिन्दी, தமிழ், తెలుగు, and more!
          </p>
        </div>

        {/* Main content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
            <TabsTrigger value="create">Create</TabsTrigger>
            <TabsTrigger value="preview" disabled={!businessName}>Preview</TabsTrigger>
          </TabsList>

          <TabsContent value="create">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Create Your Landing Page</CardTitle>
                </CardHeader>
                <CardContent>
                  <BusinessForm onNameSubmit={handleBusinessSubmit} />
                </CardContent>
              </Card>

              <div className="space-y-6">
                <UAInfo />
                
                {businessName && (
                  <DomainPreview 
                    businessName={businessName} 
                    language={language} 
                  />
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview">
            {businessName && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <DomainPreview 
                    businessName={businessName} 
                    language={language} 
                  />
                  
                  <div className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>What's Next?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-decimal list-inside space-y-2 text-sm">
                          <li>Register your domain with an IDN-compatible registrar</li>
                          <li>Upload your landing page to your hosting provider</li>
                          <li>Share your new multilingual web presence!</li>
                        </ol>
                        <button 
                          onClick={() => setActiveTab("create")} 
                          className="mt-4 w-full bg-muted py-2 rounded-md hover:bg-muted/80 transition-colors"
                        >
                          Edit Your Details
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <LandingPagePreview 
                  businessName={businessName}
                  contact={whatsappNumber}
                  location={location}
                />
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>Created with ❤️ to support Universal Acceptance and multilingual internet</p>
          <p className="mt-1">
            <a href="https://uasg.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
              Learn more about Universal Acceptance
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
