
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BusinessFormProps {
  onNameSubmit: (name: string, language: string, contact: string, location: string) => void;
}

const BusinessForm = ({ onNameSubmit }: BusinessFormProps) => {
  const [businessName, setBusinessName] = useState("");
  const [language, setLanguage] = useState("hindi");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [location, setLocation] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNameSubmit(businessName, language, whatsappNumber, location);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="business-name">
          व्यापार का नाम / வணிக பெயர் (Business Name)
        </Label>
        <Input
          id="business-name"
          placeholder="उदाहरण: चायवाला / எடுத்துக்காட்டு: தேநீர் கடை"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="text-lg"
          required
        />
        <p className="text-sm text-muted-foreground">
          Enter your business name in Hindi, Tamil, or any other Indian language
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="language">भाषा / மொழி (Language)</Label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2"
          required
        >
          <option value="hindi">हिन्दी (Hindi)</option>
          <option value="tamil">தமிழ் (Tamil)</option>
          <option value="telugu">తెలుగు (Telugu)</option>
          <option value="bengali">বাংলা (Bengali)</option>
          <option value="marathi">मराठी (Marathi)</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="whatsapp">
          व्हाट्सएप नंबर / வாட்ஸ்அப் எண் (WhatsApp Number)
        </Label>
        <Input
          id="whatsapp"
          placeholder="+91 9876543210"
          value={whatsappNumber}
          onChange={(e) => setWhatsappNumber(e.target.value)}
          className="text-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">
          स्थान / இடம் (Location)
        </Label>
        <Input
          id="location"
          placeholder="123 Main St, City, State"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="text-lg"
        />
      </div>

      <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
        Generate Landing Page
      </Button>
    </form>
  );
};

export default BusinessForm;
