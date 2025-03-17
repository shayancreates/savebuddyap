import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

export default function HeroSectionSaveBuddy() {
  return (
    <>
      <div>
        <div className="container py-24 lg:py-32">
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 tracking-in-expand-fwd text-4xl font-extrabold tracking-tight lg:text-5xl">
              Meet SaveBuddy
            </h1>
          </div>
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-xl text-muted-foreground">
              Take control of your finances with ease. Save, budget, and manage
              your money all in one place.
            </p>
          </div>
          <div className="mt-8 gap-3 flex justify-center">
            <Link href="/dashboard" passHref>
              <Button size={"lg"}>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
