import type React from "react";

// import { CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Lottie from "react-lottie-player";
import successLottie from "../../../public/media/lotties/success.json";

interface SuccessCardProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export function SuccessCard({
  title = "Success!",
  description = "Welcome aboard! You’ve successfully joined the waitlist. Keep an eye on your inbox for updates.",
  actionLabel,
  onAction,
  className,
  children,
}: SuccessCardProps) {
  return (
    // <div className="  w-full flex items-center justify-center p-4">
    <Card className={cn("  shadow-none w-full max-w-md  ", className)}>
      <CardHeader className="text-center">
        <center>
          <Lottie
            loop
            animationData={successLottie}
            play
            style={{ width: 150, height: 150 }}
          />
        </center>
        {/* <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div> */}
        <CardTitle className="text-gray-800 text-lg dark:text-green-100">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className=" mt-3 dark:text-green-300">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      
      {(children || actionLabel) && (
        <CardContent className="text-center">
          {children}
          {actionLabel && onAction && (
            <Button
            // variant={'outline'}
              onClick={onAction}
              className="mt-4 w-full py-5 shadow-none bg-[#00c885]  hover:bg-[#01ad74] dark:bg-green-700 dark:hover:bg-green-600"
            >
              {actionLabel}

            </Button>
          )}
        </CardContent>
      )}
    </Card>
    // </div>
  );
}
