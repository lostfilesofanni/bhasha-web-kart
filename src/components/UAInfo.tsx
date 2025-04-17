
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UAInfo = () => {
  return (
    <Card className="border-accent/30">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Universal Acceptance (UA)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 text-sm">
          <p>
            Universal Acceptance (UA) ensures that all domain names and email addresses work in all applications, regardless of the script they're written in or their length.
          </p>
          <p>
            When you create a website with a domain in Hindi, Tamil, or other languages, you're participating in making the internet more inclusive and accessible to everyone in their own language.
          </p>
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
          <div className="text-xs p-2 bg-muted rounded-md mt-2">
            <p>
              <span className="font-semibold">UA Benefits:</span> Reach more customers in their preferred language, show cultural respect, and stand out from competitors.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UAInfo;
