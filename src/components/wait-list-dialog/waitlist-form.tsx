import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import Logo from "../logo";
import { SuccessCard } from "./wait-list-success-card";

interface WaitlistFormProps {
  closeDialog: () => void;
}
export default function WaitlistForm({ closeDialog }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    ipAddress: "",
    countryCode: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isDetectingCountry, setIsDetectingCountry] = useState(true);
  const [isSubmited, setIsSubmited] = useState(false);
  //   const { toast } = useToast()

  // TODO after success  show success card
  // use dialog for wait list not seperate page
  // after success  show success card

  // Detect user's country based on IP
  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Using ipapi.co for IP geolocation (free tier available)
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        if (data.country_name) {
          setFormData((prev) => ({
            ...prev,
            country: data.country_name,
            countryCode: data.country_code,
            ipAddress: data.ip,
          }));
        }
      } catch (error) {
        console.error("Failed to detect country:", error);
        // Fallback to a default or leave empty
        setFormData((prev) => ({ ...prev, country: "Unknown" }));
      } finally {
        setIsDetectingCountry(false);
      }
    };

    detectCountry();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim()) {
      toast.error("Please fill in all required fields.");

      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");

      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call - replace with your actual endpoint
      await fetch(
        "https://script.google.com/macros/s/AKfycbyhOtWR7c1WNz_ByEYbj_A1YAo8GCLqAM0-fqswZpwZCYksKP4BEVbSfojztXSKDNcW3g/exec",
        {
          method: "POST",
          mode: "no-cors", // Google requires this for anonymous POSTs
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      setIsSubmited(true);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        country: formData.country,
        countryCode: formData.countryCode,
        ipAddress: formData.ipAddress,
      });
    } catch (error) {
      toast.error("An error Occured!", {
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="  flex items-center justify-center p-4">
      {!isSubmited && (
        <Card className="w-full  shadow-none max-w-md">
          <CardHeader className="text-center">
            <center className="mb-2">
              <Logo />
            </center>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Join Our Waitlist
            </CardTitle>
            <CardDescription className="text-gray-600">
              Be the first to know when we launch. Get exclusive early access to
              our platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Hidden country field - automatically populated */}
              <input type="hidden" name="country" value={formData.country} />

              <input
                type="hidden"
                name="countryCode"
                value={formData.country}
              />

              <input
                type="hidden"
                name="ipAddress"
                value={formData.ipAddress}
              />
              {/* Show country detection status */}
              {/* {isDetectingCountry && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Detecting your location...
                </div>
              )} */}

              {/* {!isDetectingCountry && formData.country && (
                <div className="text-sm invisible text-gray-500">
                  Detected location: {formData.country}
                </div>
              )} */}

              <Button
                type="submit"
                size={"lg"}
                className="w-full"
                disabled={isLoading || isDetectingCountry}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding to Waitlist...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>

            <div className="mt-4 text-center text-xs text-gray-500">
              By joining, you agree to receive updates about our launch.
            </div>
          </CardContent>
        </Card>
      )}

      {isSubmited && (
        <SuccessCard actionLabel="Close" onAction={() => closeDialog()} />
      )}
    </div>
  );
}
