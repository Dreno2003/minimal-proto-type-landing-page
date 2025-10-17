"use client";

import { useEffect, useRef, useState, type FC } from "react";
import { Award, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "./section-header";
import { motion, useInView } from "motion/react";
import { useMobile } from "@/hooks/use-mobile-hook";
import StyledSwitch from "./styled-switched";
import { CircleFlag } from "react-circle-flags";
import { getUserCountry } from "@/service/get-user-country.service";
import { getExchangeRate } from "@/service/get-exchange-rate.service";
import { formatPrice } from "@/helpers/currency-fomerter.helper";
import {Link} from 'react-router'

interface PricingSectionProps {}

// interface ILocationData {
//   country_code: string;
//   currency: string;
// }

const currencySymbols: Record<string, string> = {
  AED: "د.إ",    // UAE Dirham
  AFN: "؋",     // Afghan Afghani
  ALL: "Lek",   // Albanian Lek
  AMD: "֏",      // Armenian Dram
  ANG: "ƒ",     // Netherlands Antillean Guilder / Florin
  AOA: "Kz",    // Angolan Kwanza
  ARS: "$",     // Argentine Peso
  AUD: "$",     // Australian Dollar
  AWG: "ƒ",     // Aruban Florin
  AZN: "₼",     // Azerbaijani Manat
  BAM: "KM",    // Bosnia / Herzegovina Convertible Mark
  BBD: "$",     // Barbados Dollar
  BDT: "৳",     // Bangladeshi Taka
  BGN: "лв",    // Bulgarian Lev
  BHD: "ب.د",   // Bahraini Dinar
  BIF: "FBu",   // Burundian Franc (sometimes just "F")
  BMD: "$",     // Bermudian Dollar
  BND: "$",     // Brunei Dollar
  BOB: "Bs.",   // Boliviano
  BRL: "R$",    // Brazilian Real
  BSD: "$",     // Bahamian Dollar
  BTN: "Nu.",   // Bhutan Ngultrum
  BWP: "P",     // Botswana Pula
  BYN: "Br",    // Belarusian Ruble
  BZD: "$",     // Belize Dollar
  CAD: "C$",    // Canadian Dollar
  CDF: "FC",    // Congolese Franc
  CHF: "CHF",   // Swiss Franc (often no special symbol)
  CLP: "$",     // Chilean Peso
  CNY: "¥",     // Chinese Yuan / Renminbi
  COP: "$",     // Colombian Peso
  CRC: "₡",     // Costa Rican Colón
  CUP: "₱",     // Cuban Peso
  CVE: "$",     // Cape Verde Escudo
  CZK: "Kč",    // Czech Koruna
  DJF: "Fdj",   // Djiboutian Franc
  DKK: "kr",    // Danish Krone
  DOP: "RD$",   // Dominican Peso
  DZD: "د.ج",   // Algerian Dinar
  EGP: "£",     // Egyptian Pound
  ERN: "Nfk",   // Eritrean Nakfa
  ETB: "Br",    // Ethiopian Birr
  EUR: "€",     // Euro
  FJD: "$",     // Fiji Dollar
  FKP: "£",     // Falkland Islands Pound
  GBP: "£",     // Pound Sterling (UK)
  GEL: "₾",     // Georgian Lari
  GHS: "¢",     // Ghanaian Cedi (some also use “GH₵”)
  GIP: "£",     // Gibraltar Pound
  GMD: "D",     // Gambian Dalasi
  GNF: "FG",    // Guinean Franc
  GTQ: "Q",     // Guatemalan Quetzal
  GYD: "$",     // Guyanese Dollar
  HKD: "HK$",   // Hong Kong Dollar
  HNL: "L",     // Honduran Lempira
  HRK: "kn",    // Croatian Kuna
  HTG: "G",     // Haitian Gourde (some use “Gourde”)
  HUF: "Ft",    // Hungarian Forint
  IDR: "Rp",    // Indonesian Rupiah
  ILS: "₪",     // Israeli New Shekel
  INR: "₹",     // Indian Rupee
  IQD: "ع.د",   // Iraqi Dinar
  IRR: "﷼",     // Iranian Rial
  ISK: "kr",    // Icelandic Krona
  JMD: "J$",    // Jamaican Dollar
  JOD: "د.ا",   // Jordanian Dinar
  JPY: "¥",     // Japanese Yen
  KES: "KSh",   // Kenyan Shilling
  KGS: "лв",    // Kyrgyzstani Som
  KHR: "៛",     // Cambodian Riel
  KMF: "CF",    // Comoro Franc
  KPW: "₩",     // North Korean Won
  KRW: "₩",     // South Korean Won
  KWD: "د.ك",   // Kuwaiti Dinar
  KYD: "$",     // Cayman Islands Dollar
  KZT: "₸",     // Kazakhstani Tenge
  LAK: "₭",     // Lao Kip
  LBP: "ل.ل",   // Lebanese Pound
  LKR: "Rs",    // Sri Lankan Rupee
  LRD: "$",     // Liberian Dollar
  LSL: "L",     // Lesotho Loti
  LYD: "ل.د",   // Libyan Dinar
  MAD: "د.م",   // Moroccan Dirham
  MDL: "L",     // Moldovan Leu
  MGA: "Ar",    // Malagasy Ariary
  MKD: "ден",   // Macedonian Denar
  MMK: "Ks",    // Myanmar Kyat
  MNT: "₮",     // Mongolian Tugrik
  MOP: "MOP$",  // Macanese Pataca
  MRU: "UM",    // Mauritanian Ouguiya
  MUR: "₨",     // Mauritian Rupee
  MVR: "Rf",    // Maldivian Rufiyaa
  MWK: "MK",    // Malawian Kwacha
  MXN: "$",     // Mexican Peso
  MYR: "RM",    // Malaysian Ringgit
  MZN: "MT",    // Mozambican Metical
  NAD: "$",     // Namibian Dollar
  NGN: "₦",     // Nigerian Naira
  NIO: "C$",    // Nicaraguan Córdoba
  NOK: "kr",    // Norwegian Krone
  NPR: "₨",     // Nepalese Rupee
  NZD: "$",     // New Zealand Dollar
  OMR: "﷼",     // Omani Rial
  PAB: "B/.",   // Panamanian Balboa
  PEN: "S/.",   // Peruvian Sol
  PGK: "K",     // Papua New Guinea Kina
  PHP: "₱",     // Philippine Peso
  PKR: "₨",     // Pakistani Rupee
  PLN: "zł",    // Polish Zloty
  PYG: "Gs",    // Paraguayan Guaraní
  QAR: "﷼",     // Qatari Rial
  RON: "lei",   // Romanian Leu
  RSD: "дин",   // Serbian Dinar (often “RSD” or “din”)
  RUB: "₽",     // Russian Ruble
  RWF: "RF",    // Rwandan Franc
  SAR: "﷼",     // Saudi Riyal
  SBD: "$",     // Solomon Islands Dollar
  SCR: "₨",     // Seychelles Rupee
  SDG: "£",     // Sudanese Pound
  SEK: "kr",    // Swedish Krona
  SGD: "$",     // Singapore Dollar
  SHP: "£",     // Saint Helena Pound
  SLL: "Le",    // Sierra Leonean Leone
  SOS: "Sh",    // Somali Shilling
  SRD: "$",     // Surinam Dollar
  SSP: "£",     // South Sudanese Pound
  STN: "Db",    // São Tomé and Príncipe Dobra
  SVC: "$",     // El Salvador Colón / uses USD often
  SYP: "£",     // Syrian Pound
  SZL: "E",     // Swazi Lilangeni
  THB: "฿",     // Thai Baht
  TJS: "ЅМ",    // Tajikistani Somoni (sometimes “TJS”)
  TMT: "m",     // Turkmenistan Manat
  TND: "د.ت",   // Tunisian Dinar
  TOP: "T$",    // Tongan Paʻanga
  TRY: "₺",     // Turkish Lira
  TTD: "TT$",   // Trinidad and Tobago Dollar
  TWD: "NT$",   // New Taiwan Dollar
  TZS: "TSh",   // Tanzanian Shilling
  UAH: "₴",     // Ukrainian Hryvnia
  UGX: "USh",   // Ugandan Shilling
  USD: "$",     // US Dollar
  UYU: "$U",    // Uruguayan Peso
  UZS: "лв",    // Uzbekistani Som
  VES: "Bs.",   // Venezuelan Bolívar (often “Bs.”)
  VND: "₫",     // Vietnamese Dong
  VUV: "VT",    // Vanuatu Vatu
  WST: "T",     // Samoan Tala (uses “T” sometimes)
  XAF: "FCFA",  // Central African CFA Franc
  XCD: "$",     // East Caribbean Dollar
  XOF: "CFA",   // West African CFA Franc
  XPF: "₣",     // CFP Franc
  YER: "﷼",     // Yemeni Rial
  ZAR: "R",     // South African Rand
  ZMW: "ZK",    // Zambian Kwacha
  ZWL: "Z$",    // Zimbabwe Dollar
};

const plans = [
  {
    title: "Starter",
    price: 20,
    description: "Perfect for small startups or quick MVPs.",
    features: [
      { text: "2 design concepts", highlighted: true },
      { text: "Full copywriting", highlighted: true },
      { text: "1 round of revisions", highlighted: true },
      { text: "1 month free support", highlighted: true },
    ],
  },
  {
    title: "Growth",
    price: 60,
    description: "Ideal for scaling your business with advanced features.",
    features: [
      { text: "3 design concepts", highlighted: true },
      { text: "Priority support", highlighted: true },
      { text: "Framer development", highlighted: true },
      { text: "Unlimited revisions", highlighted: true },
    ],
  },
  {
    title: "Enterprise",
    price: 120,
    description: "Full-scale custom solutions for your business.",
    features: [
      { text: "Custom dashboard", highlighted: true },
      { text: "Advanced automations", highlighted: true },
      { text: "Dedicated account manager", highlighted: true },
      { text: "Ongoing optimization", highlighted: true },
    ],
  },
];

const PricingSection: FC<PricingSectionProps> = () => {
  const ref = useRef(null);
  const isMobile = useMobile();
  const inView = useInView(ref, { once: false, margin: "-320px" });

  const [isUSD, setIsUSD] = useState(true);
  const [loading, setLoading] = useState(true);

  const [_localCurrency, setLocalCurrency] = useState("USD");
  const [countryCode, setCountryCode] = useState("US");
  const [rate, setRate] = useState(1);
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    async function setup() {
      setLoading(true);

      // const cached = localStorage.getItem("currencyData");
      // if (cached) {
      //   const data = JSON.parse(cached);
      //   const isExpired = Date.now() - data.timestamp > 1 * 60 * 60 * 1000;
      //   if (!isExpired ) {
      //     setLocalCurrency(data.localCurrency);
      //     setCountryCode(data.countryCode);
      //     setRate(data.rate);
      //     setSymbol(data.symbol);
      //     setLoading(false);
      //     return;
      //   }
      // }

      try {
        const user = await getUserCountry();
        if (!user) return;

        const exchangeRate = await getExchangeRate({
          from: "USD",
          to: user.currency,
        });
        const currencySymbol = currencySymbols[user.currency] || user.currency;

        setLocalCurrency(user.currency);
        setCountryCode(user.countryCode);
        setRate(exchangeRate);
        setSymbol(currencySymbol);

        // localStorage.setItem(
        //   "currencyData",
        //   JSON.stringify({
        //     localCurrency: user.currency,
        //     countryCode: user.countryCode,
        //     rate: exchangeRate,
        //     symbol: currencySymbol,
        //     timestamp: Date.now(),
        //   })
        // );
      } catch (error) {
        console.error("Currency setup error:", error);
      } finally {
        setLoading(false);
      }
    }

    setup();
  }, []);

  const convertPrice = (price: number) => (isUSD ? price : price * rate);

  const displaySymbol = isUSD ? "$" : symbol;

  return (
    <motion.section
      id="pricing"
      ref={ref}
      initial={{ marginLeft: 0, marginRight: 0 }}
      animate={
        !isMobile && inView
          ? { scale: "99%", marginLeft: "20px", marginRight: "20px" }
          : { scale: "100%" }
      }
      transition={{
        duration: 0.6,
        delay: 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="sm:mx-4 md:mx-5 mt-10 md:mt-24 rounded-4xl md:rounded-[6rem] py-14 bg-primary"
    >
      <SectionHeader
        textGradientType="light"
        tagline="Pricing"
        containerClass=" "
        descriptionClass="text-gray-100"
        title="Pocket Friendly Pricing"
        description="Budget friendly pricing"
      />

      {/* 🌍 Currency Switch */}
      <center className="mt-10">
        <div className="flex items-center gap-4 border rounded-[3rem] bg-gray-50 px-4 py-2 w-max justify-center">
          <CircleFlag countryCode="us" width={35} />
          <StyledSwitch
            disabled={loading}
            onChecked={(value) => {
              setIsUSD(!value);
            }}
          />
          <CircleFlag countryCode={countryCode.toLowerCase()} width={35} />
        </div>
      </center>

      <div className="mt-10 md:mt-14 space-y-10 w-max mx-auto">
        {/* plans */}
        <div className="md:w-max mx-auto">
          <PricingCard
            title={"Enterprise"}
            price={formatPrice({
              amount: convertPrice(plans[2].price),
              displaySymbol,
            })}
            // price={`${displaySymbol}${convertPrice(plans[2].price).toFixed(2)}`}
            description={
              "Need an MVP, a high-end dashboard or a SaaS? We'll help you to build all of that"
            }
            ctaText={"Book a 15 min call"}
            features={plans[2].features}
          />
        </div>
        <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row gap-x-8">
          <PricingCard
            title={"Enterprise"}
            price={formatPrice({
              amount: convertPrice(plans[1].price),
              displaySymbol,
            })}
            // price={`${displaySymbol}${convertPrice(plans[1].price).toFixed(2)}`}
            description={
              "Need an MVP, a high-end dashboard or a SaaS? We'll help you to build all of that"
            }
            ctaText={"Book a 15 min call"}
            features={plans[1].features}
          />{" "}
          <PricingCard
            title={"Enterprise"}
            price={formatPrice({
              amount: convertPrice(plans[0].price),
              displaySymbol,
            })}
            // price={`${displaySymbol}${convertPrice(plans[0].price).toFixed(2)}`}
            description={
              "Need an MVP, a high-end dashboard or a SaaS? We'll help you to build all of that"
            }
            ctaText={"Book a 15 min call"}
            features={plans[0].features}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default PricingSection;

// import { useEffect, useRef, useState, type FC } from "react";
// import { Award, Check } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import SectionHeader from "./section-header";
// import { motion, useInView } from "motion/react";
// import { useMobile } from "@/hooks/use-mobile-hook";
// import StyledSwitch from "./styled-switched";
// // import ReactCountryFlag from "react-country-flag";
// import { CircleFlag } from "react-circle-flags";
// import { getUserCountry } from "@/service/get-user-country.service";
// import { getExchangeRate } from "@/service/get-exchange-rate.service";

// interface PricingSectionProps {}

// const x = [
//   { text: "2 design concepts", highlighted: true },
//   { text: "Full copywriting", highlighted: true },
//   { text: "Unlimited 3D models", highlighted: true },
//   { text: "Framer development", highlighted: true },
//   { text: "2 rounds of revisions", highlighted: true },
//   { text: "1 month of free support", highlighted: true },
// ];

// interface ILocationData {
//   country_code: string;
// }
// const currencySymbols: Record<string, string> = {
//   USD: "$",
//   NGN: "₦",
//   GBP: "£",
//   EUR: "€",
//   INR: "₹",
//   JPY: "¥",
// };
// const PricingSection: FC<PricingSectionProps> = ({}) => {
//   const ref = useRef(null);
//   const isMobile = useMobile();
//   const inView = useInView(ref, { once: false, margin: "-320px" });

//   const [data, setData] = useState<ILocationData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [isUSD, setIsUSD] = useState(true);
//   const usCountryCode = "US".toLowerCase();
//   const detectedCountryCode = data?.country_code.toLowerCase() || "US";
//   const [isLocal, setIsLocal] = useState(false);
//   const [localCurrency, setLocalCurrency] = useState("USD");
//   const [rate, setRate] = useState(1);
//   const [symbol, setSymbol] = useState("$");
//   const basePrice = 20; // USD

//   useEffect(() => {
//     async function setup() {
//       const user = await getUserCountry();
//       if (!user) return;
//       setLocalCurrency(user.currency);
//       const exchangeRate = await getExchangeRate("USD", user.currency);
//       setRate(exchangeRate);
//       setSymbol(currencySymbols[user.currency] || user.currency);
//     }
//     setup();
//   }, []);

//   const displayedPrice = isLocal ? basePrice * rate : basePrice;
//   const displayedSymbol = isLocal ? symbol : "$";

//   return (
//     <>
//       <motion.div
//         id="pricing"
//         ref={ref}
//         initial={{ marginLeft: 0, marginRight: 0 }}
//         animate={
//           !isMobile && inView
//             ? { scale: "99%", marginLeft: "20px", marginRight: "20px" }
//             : { scale: "100%" }
//         }
//         // animate={inView ? { scaleX: 1.1 } : { scaleX: 1.1 }} // move 60px right
//         transition={{
//           duration: 0.6,
//           delay: 0.1,
//           ease: [0.25, 0.1, 0.25, 1],
//         }}
//         className="sm:mx-4 md:mx-5 mt-10 md:mt-24  rounded-4xl md:rounded-[6rem] py-14 bg-primary to-55% to-transparent "
//       >
//         {/* className="sm:mx-4 mt-10 md:mt-24 md:mx-5 rounded-4xl md:rounded-[6rem] py-14 bg-primary to-55% to-transparent "> */}
//         {/* <ContainerWrapper> */}
//         <SectionHeader
//           textGradientType="light"
//           tagline="Pricing"
//           containerClass=" "
//           descriptionClass="text-gray-100"
//           title="Pocket Friendly Pricing"
//           description="What we can help you to achieve?"
//         />
//         <center className="mt-10">
//           <div className="flex bg- w-max border rounded-[3rem] bg-gray-50 px-4 items-center gap-4 justify-center">
//             <CircleFlag
//               countryCode={usCountryCode}
//               className="ml-4"
//               width={35}
//             />

//             <StyledSwitch
//               disabled={loading}
//               onChecked={(value) => setIsUSD(value)}
//             />

//             <CircleFlag
//               countryCode={detectedCountryCode}
//               className="mr-4"
//               width={35}
//             />
//           </div>
//         </center>

//         <div className="mt-10 md:mt-14 space-y-10 w-max mx-auto">
//           {/* plans */}

//           <div className="md:w-max mx-auto">
//             <PricingCard
//               title={"Enterprise"}
//               price={"20"}
//               description={
//                 "Need an MVP, a high-end dashboard or a SaaS? We'll help you to build all of that"
//               }
//               ctaText={"Book a 15 min call"}
//               features={x}
//             />
//           </div>
//           <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row gap-x-8">
//             <PricingCard
//               title={"Enterprise"}
//               price={"20"}
//               description={
//                 "Need an MVP, a high-end dashboard or a SaaS? We'll help you to build all of that"
//               }
//               ctaText={"Book a 15 min call"}
//               features={x}
//             />{" "}
//             <PricingCard
//               title={"Enterprise"}
//               price={"20"}
//               description={
//                 "Need an MVP, a high-end dashboard or a SaaS? We'll help you to build all of that"
//               }
//               ctaText={"Book a 15 min call"}
//               features={x}
//             />
//           </div>
//         </div>
//         {/* </ContainerWrapper> */}
//       </motion.div>
//     </>
//   );
// };

// export default PricingSection;

interface PricingFeature {
  text: string;
  highlighted?: boolean;
}

interface PricingCardProps {
  badge?: string;
  title: string;
  price: string;
  description: string;
  ctaText: string;
  availability?: string;
  features: PricingFeature[];
  onCtaClick?: () => void;
}

export const PricingCard = ({
  badge = "Clients' choice",
  title,
  price,
  description,
  ctaText,
  availability,
  features,
  onCtaClick,
}: PricingCardProps) => {
  return (
    <div className="relative">
      {/* Badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
        <Badge className="hidden bg-primary text-primary-foreground px-6 py-2 text-sm font-medium shadow-lg hover:bg-primary flsex items-center gap-2">
          <Award className="w-4 h-4" />
          {badge}
        </Badge>
      </div>

      {/* Card */}
      <Card className="relative w-max md:max-w-2xl  md:w-2xl pt-10 pb-8 px-8 bg-card border-0 rounded-4xl overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            boxShadow: "var(--shadow-card)",
          }}
        />

        <div className="flex md:flex-row flex-col items-center md:grid-cols-[1fr,dauto,1fr] gap-8  relative ">
          {/* Left Column */}
          <div className="flex-0 space-y-6">
            <div>
              <h3 className="text-2xl font-normal text-card-foreground mb-2">
                {title}
              </h3>
              <p className="text-5xl font-bold text-card-foreground">{price}</p>
            </div>

            <p className="text-muted-foreground max-w-xs  sm:max-w-sm md:max-w-md leading-relaxed">
              {description}
            </p>

            <div className="space-y-4">
              <Link to='/book'>
              <Button
                size="lg"
                className="w-full md:w-auto bg-primary hover:bg-accent hover:text-foreground text-primary-foreground font-semibold px-8 py-6 text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={onCtaClick}
              >
                {ctaText}
              </Button>
</Link>
              {availability && (
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-muted-foreground">{availability}</span>
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          {/* <div className="hidden md:block w-px bg-border h-full" /> */}

          {/* Right Column - Features */}
          <div className="border-t w-full md:border-t-0 md:border-l md:flex-10  pt-10 md:pt-0 md:pl-10 space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-5 group">
                <div
                  className={`w-6 h-6 rounded-full flex items-center  shadow-md text-white justify-center flex-shrink-0 transition-colors duration-200 ${
                    feature.highlighted
                      ? "bg-primary  stroke-white !text-white"
                      : "bg-secondary text-white"
                  }`}
                >
                  <Check className="w-4 h-4 " />
                </div>
                <span
                  className={`text-base ${
                    feature.highlighted
                      ? "text-card-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
