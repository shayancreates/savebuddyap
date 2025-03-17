import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <div className="container py-24 lg:py-32">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Contact us</h1>
        <p className="mt-3 text-muted-foreground">
          We&apos;d love to talk about how we can help you.
        </p>
      </div>

      <div className="mt-12 max-w-lg mx-auto">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-8 text-xl font-semibold">Fill in the form</h2>
            <form>
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <Input type="text" placeholder="First Name" />
                  <Input type="text" placeholder="Last Name" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Phone Number" />
                </div>

                <Textarea placeholder="Tell us about your project" rows={4} />
              </div>

              <div className="mt-6 grid">
                <Button type="submit" size="lg">
                  Send inquiry
                </Button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-muted-foreground">
                  We&apos;ll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
