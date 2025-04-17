
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Flag, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FraudPreventionProps {
  businessName: string;
}

const FraudPrevention = ({ businessName }: FraudPreventionProps) => {
  const [reason, setReason] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleReport = () => {
    // Mock report handling
    toast({
      title: "Report Submitted",
      description: "Thank you for helping us maintain the quality of our platform.",
    });
    setReason("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="flex-1 flex items-center gap-2 border-destructive/30 text-destructive hover:bg-destructive/10"
        >
          <Flag className="h-4 w-4" />
          Report Issue
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Report an Issue
          </DialogTitle>
          <DialogDescription>
            Help us maintain the quality and authenticity of our platform by reporting issues with this business page.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Business Name</h4>
            <div className="p-2 bg-muted rounded text-sm">{businessName}</div>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Reason for Report</h4>
            <Textarea
              placeholder="Please explain why you're reporting this business page..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <div className="text-xs text-muted-foreground">
            <p>All reports are anonymous and will be reviewed by our team.</p>
            <p className="mt-1">Abuse of this system may result in account restrictions.</p>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="secondary"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={handleReport}
            disabled={!reason.trim()}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Submit Report
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FraudPrevention;
