
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      monthlyPrice: 12,
      yearlyPrice: 120,
      features: [
        "Up to 5 team members",
        "10 projects",
        "5GB storage",
        "Basic analytics",
        "24/7 email support",
      ],
      notIncluded: [
        "Advanced analytics",
        "Custom integrations",
        "Priority support",
        "Team training",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing teams and businesses",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Up to 20 team members",
        "Unlimited projects",
        "50GB storage",
        "Advanced analytics",
        "Custom integrations",
        "Priority support",
        "API access",
      ],
      notIncluded: ["Team training", "Dedicated account manager"],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "500GB storage",
        "Advanced analytics",
        "Custom integrations",
        "Priority support",
        "API access",
        "Team training",
        "Dedicated account manager",
        "Custom contract",
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Choose the perfect plan for your team's needs. All plans include a 14-day free trial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <Tabs defaultValue="monthly" className="w-full max-w-xs" onValueChange={setBillingCycle}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">
                  Yearly
                  <Badge variant="gradient" className="ml-2 py-0 px-1.5">
                    Save 20%
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`pricing-card rounded-xl p-6 flex flex-col h-full relative ${
                plan.popular ? "pricing-card-highlight" : ""
              }`}
            >
              {plan.popular && (
                <Badge
                  variant="gradient"
                  className="absolute -top-3 right-6 py-1 px-3"
                >
                  Most Popular
                </Badge>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className="text-muted-foreground">
                  /{billingCycle === "monthly" ? "month" : "year"}
                </span>
              </div>

              <div className="mb-8 flex-grow">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                  What's included:
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-indigo-400 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.notIncluded.length > 0 && (
                  <>
                    <h4 className="font-semibold mb-3 mt-6 text-sm uppercase tracking-wider text-muted-foreground">
                      Not included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <X className="h-5 w-5 text-muted-foreground mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-0"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
