// @ts-nocheck
import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckIcon } from "lucide-react";
import Header from "@/components/header";
import SectionHeader from "@/components/section-header";
import { cn } from "@/lib/utils";

const pricing: any = {
  frequencies: [
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/year" },
  ],
  tiers: [
    {
      name: "Hobby",
      id: "tier-hobby",
      href: "#",
      price: { monthly: "$19", annually: "$199" },
      description: "The essentials to provide your best work for clients.",
      features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
      mostPopular: false,
    },
    {
      name: "Freelancer",
      id: "tier-freelancer",
      href: "#",
      price: { monthly: "$29", annually: "$299" },
      description: "The essentials to provide your best work for clients.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
      mostPopular: false,
    },
    {
      name: "Startup",
      id: "tier-startup",
      href: "#",
      price: { monthly: "$59", annually: "$599" },
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
      mostPopular: true,
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      href: "#",
      price: { monthly: "$99", annually: "$999" },
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
        "Custom reporting tools",
      ],
      mostPopular: false,
    },
  ],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  const [frequency, setFrequency] = useState(pricing.frequencies[0]);

  return (
    <div>
      <Header />
      <main>
        {/* Pricing section */}
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <SectionHeader
            title="Pricing"
            description={
              <p className="max-w-3xl mx-auto">
                Choose an affordable plan that’s packed with the best features
                for engaging your audience, creating customer loyalty, and
                driving sales.
              </p>
            }
          />

          <div className="mt-16 flex justify-center">
            <fieldset aria-label="Payment frequency">
              <RadioGroup
                value={frequency}
                onChange={setFrequency}
                className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-gray-200 ring-inset"
              >
                {pricing.frequencies.map((option) => (
                  <Radio
                    key={option.value}
                    value={option}
                    className={cn(
                      frequency.value === option.value &&
                        "bg-hero !text-white",
                      "cursor-pointer rounded-full px-2.5 py-1 text-gray-500  data-checked:text-white"
                    )}
                  >
                    {option.label}
                  </Radio>
                ))}
              </RadioGroup>
            </fieldset>
          </div>
          <div className="isolate mx-auto mt-10 mb-14 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "ring-2 ring-primary"
                    : "ring-1 ring-gray-200",
                  "rounded-3xl p-8"
                )}
              >
                <h2
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? "text-primary" : "text-gray-900",
                    "text-lg/8 font-semibold"
                  )}
                >
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm/6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900">
                    {tier.price[frequency.value]}
                  </span>
                  <span className="text-sm/6 font-semibold text-gray-600">
                    {frequency.priceSuffix}
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-hero text-white shadow-xs "
                      : "text-hero ring-1 ring-hero ring-inset hover:ring-indigo-300",
                    "mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  )}
                >
                  Buy plan
                </a>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm/6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-primary"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
