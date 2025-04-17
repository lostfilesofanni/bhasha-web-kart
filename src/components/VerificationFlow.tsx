
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Check, Upload, Building, Shield, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VerificationFlowProps {
  businessName: string;
  phoneNumber: string;
  onVerificationComplete: () => void;
}

const VerificationFlow = ({ businessName, phoneNumber, onVerificationComplete }: VerificationFlowProps) => {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isBusinessVerified, setIsBusinessVerified] = useState(false);
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
  const { toast } = useToast();
  
  const sendOTP = () => {
    // Mock SMS sending
    setIsOtpSent(true);
    toast({
      title: "OTP Sent!",
      description: `A verification code has been sent to ${phoneNumber}`,
    });
  };
  
  const verifyOTP = () => {
    // Mock OTP verification - in a real app this would validate against a backend
    if (otp.length === 6) {
      setStep(2);
      toast({
        title: "Phone Verified!",
        description: "Your phone number has been verified successfully.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit code.",
      });
    }
  };
  
  const verifyBusiness = () => {
    // Mock business verification
    setTimeout(() => {
      setIsBusinessVerified(true);
      toast({
        title: "Business Verified!",
        description: `${businessName} has been verified in our directory.`,
      });
    }, 1500);
  };
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Mock file upload
    if (e.target.files && e.target.files.length > 0) {
      setIsPhotoUploaded(true);
      setStep(3);
      toast({
        title: "Photo Uploaded!",
        description: "Your storefront photo has been uploaded successfully.",
      });
    }
  };
  
  const completeVerification = () => {
    // Complete the verification process
    toast({
      title: "Verification Complete!",
      description: "Your business has been fully verified.",
    });
    onVerificationComplete();
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          Verification Process
        </CardTitle>
        <CardDescription>
          Complete these steps to verify your business and create your UA-compliant landing page
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Step 1: Phone Verification */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={`rounded-full p-1.5 ${step >= 1 ? "bg-primary/20" : "bg-muted"}`}>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">1</span>
            </div>
            <h3 className="font-medium">Verify Phone Number</h3>
            {step > 1 && <Check className="ml-auto h-5 w-5 text-green-500" />}
          </div>
          
          {step === 1 && (
            <div className="pl-12 space-y-4">
              <Alert variant="outline" className="border-primary/50 bg-primary/10">
                <AlertTriangle className="h-4 w-4 text-primary" />
                <AlertTitle>Verification Required</AlertTitle>
                <AlertDescription>
                  We'll send a one-time password to verify your phone number.
                </AlertDescription>
              </Alert>
              
              {!isOtpSent ? (
                <Button onClick={sendOTP} className="w-full">Send OTP</Button>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">Enter the 6-digit code sent to {phoneNumber}</p>
                  <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setIsOtpSent(false)} className="flex-1">
                      Resend
                    </Button>
                    <Button onClick={verifyOTP} className="flex-1">
                      Verify
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        <Separator />
        
        {/* Step 2: Business Verification */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={`rounded-full p-1.5 ${step >= 2 ? "bg-primary/20" : "bg-muted"}`}>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">2</span>
            </div>
            <h3 className="font-medium">Verify Business</h3>
            {step > 2 && <Check className="ml-auto h-5 w-5 text-green-500" />}
          </div>
          
          {step === 2 && (
            <div className="pl-12 space-y-4">
              <Alert variant="outline" className="border-primary/50 bg-primary/10">
                <Building className="h-4 w-4 text-primary" />
                <AlertTitle>Business Verification</AlertTitle>
                <AlertDescription>
                  We'll check if your business exists in our directory and validate your details.
                </AlertDescription>
              </Alert>
              
              {!isBusinessVerified ? (
                <Button onClick={verifyBusiness} className="w-full">
                  Verify Business
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      <span>Business verified in directory</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Upload Storefront Photo</p>
                    <p className="text-sm text-muted-foreground">Please upload a photo of your business storefront for verification.</p>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <label
                        htmlFor="picture"
                        className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-input bg-muted/50 px-3 py-4 text-center"
                      >
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <div className="mt-2 text-xs text-muted-foreground">
                          Drag & drop or click to upload
                        </div>
                        <input
                          id="picture"
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={handleFileUpload}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        <Separator />
        
        {/* Step 3: Final Verification */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={`rounded-full p-1.5 ${step >= 3 ? "bg-primary/20" : "bg-muted"}`}>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">3</span>
            </div>
            <h3 className="font-medium">Complete Verification</h3>
            {step > 3 && <Check className="ml-auto h-5 w-5 text-green-500" />}
          </div>
          
          {step === 3 && (
            <div className="pl-12 space-y-4">
              <div className="space-y-3">
                <div className="p-4 border rounded-md bg-muted/30">
                  <h4 className="font-medium mb-2">Verification Summary</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Phone number verified</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Business verified in directory</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Storefront photo uploaded</span>
                    </li>
                  </ul>
                </div>
                
                <Button onClick={completeVerification} className="w-full">
                  Complete & Create Landing Page
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VerificationFlow;
