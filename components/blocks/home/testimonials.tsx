import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react"; // Or any icon library you use

const testimonials = [
  {
    id: 1,
    quote:
      "We appreciate their technical expertise in customizing Sodium N-Decyl Sulfate for our industrial cleaner formulation. The product performs exactly as specified with excellent solubility in cold water applications.",
    name: "Industrial CleanChem",
    role: "Industrial Chemicals, USA",
    initials: "IC",
    accentColor: "border bg-blue-50 text-blue-800",
  },
  {
    id: 2,
    quote:
      "The Gypsum Board Foaming Agent helped us achieve perfect pore structure while reducing raw material costs by 18% compared to our previous supplier.",
    name: "BuildChem Materials",
    role: "Construction Chemicals, UAE",
    initials: "BC",
    accentColor: "border bg-emerald-50 text-emerald-800",
  },
  {
    id: 3,
    quote:
      "Reliable supply of Potassium Dodecyl Sulfate that meets our pharmaceutical excipient standards. Their documentation is always complete and accurate.",
    name: "PharmaChem Solutions",
    role: "Pharmaceutical Raw Materials, India",
    initials: "PC",
    accentColor: "border bg-purple-50 text-purple-800",
  },
  {
    id: 4,
    quote:
      "The Sodium Lauryl Sulfate from this supplier consistently meets our 99.5% purity requirements. Their batch-to-batch consistency has helped us maintain quality in our detergent production for over 3 years.",
    name: "ChemiTrade Solutions",
    role: "Specialty Chemicals Distributor, Germany",
    initials: "CT",
    accentColor: "border bg-amber-50 text-amber-800",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Trusted by Chemical Partners Worldwide
          </h2>
          <p className="mt-3 text-muted-foreground">
            What industry professionals say about our premium surfactants
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={`overflow-hidden shadow-sm hover:shadow-md transition-shadow border-l-4 ${testimonial.accentColor}`}
            >
              <CardContent className="p-5 flex flex-col h-full">
                <QuoteIcon className="size-6 opacity-30 mb-3" />
                <blockquote className="flex-1">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    “{testimonial.quote}”
                  </p>
                </blockquote>
                <footer className="mt-5">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-9">
                      <AvatarFallback
                        className={`${testimonial.accentColor} font-medium`}
                      >
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="not-italic font-medium block text-sm">
                        {testimonial.name}
                      </cite>
                      <span className="text-xs text-muted-foreground block">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}