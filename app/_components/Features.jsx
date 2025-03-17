import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PiggyBankIcon,
  LockIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";

const features = [
  {
    icon: PiggyBankIcon,
    title: "Smart Savings",
    description:
      "Automatically track your spending and save effortlessly with AI-powered insights.",
  },
  {
    icon: LockIcon,
    title: "Secure & Private",
    description: "Your financial data is encrypted and protected at all times.",
  },
  {
    icon: WalletIcon,
    title: "Expense Tracking",
    description:
      "Categorize your expenses and get a clear view of where your money goes.",
  },
  {
    icon: TrendingUpIcon,
    title: "Financial Growth",
    description:
      "Set goals, track progress, and build better money habits with ease.",
  },
];

export default function FeatureSectionSaveBuddy() {
  return (
    <section className="container py-24 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Take Control of Your Finances</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          SaveBuddy helps you budget smarter, save more, and reach your
          financial goals faster.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardContent className="p-6 space-y-2">
              <feature.icon className="h-12 w-12 text-primary" />
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
