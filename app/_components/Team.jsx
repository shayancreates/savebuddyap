import { Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Shayan Chakraborty",
    role: "Founder",
    image:
      "https://plus.unsplash.com/premium_vector-1727953895043-bc6793002b33?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Turin Jana",
    role: "Co-Founder",
    image:
      "https://plus.unsplash.com/premium_vector-1727952230626-26e0abea2eed?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sayan Goswami",
    role: "CTO",
    image:
      "https://plus.unsplash.com/premium_vector-1728553012443-3cf619e7579d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww",
  },
];

export default function SaveBuddyTeam() {
  return (
    <div className="container py-24 lg:py-32">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-4xl md:leading-tight">
          Meet the SaveBuddy Team
        </h2>
        <p className="mt-1 text-lg text-muted-foreground">
          Innovators behind financial success
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full size-20 border border-primary"
            />
            <div className="mt-4 text-center">
              <h3 className="font-medium">{member.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {member.role}
              </p>
            </div>
            <div className="mt-3 flex gap-2">
              <Button size="icon" variant="ghost">
                <Twitter className="size-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Github className="size-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Linkedin className="size-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* End Grid */}
    </div>
  );
}
