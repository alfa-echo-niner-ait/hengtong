import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    quote:
      "We appreciate their technical expertise in customizing Sodium N-Decyl Sulfate for our industrial cleaner formulation. The product performs exactly as specified with excellent solubility in cold water applications.",
    name: "Industrial CleanChem",
    role: "Industrial Chemicals, USA",
    initials: "IC",
    size: "tall",
  },
  {
    id: 2,
    quote:
      "The Gypsum Board Foaming Agent helped us achieve perfect pore structure while reducing raw material costs by 18% compared to our previous supplier.",
    name: "BuildChem Materials",
    role: "Construction Chemicals, UAE",
    initials: "BC",
    size: "small",
  },
  {
    id: 3,
    quote:
      "Reliable supply of Potassium Dodecyl Sulfate that meets our pharmaceutical excipient standards. Their documentation is always complete and accurate.",
    name: "PharmaChem Solutions",
    role: "Pharmaceutical Raw Materials, India",
    initials: "PC",
    size: "small",
  },
  {
    id: 4,
    quote:
      "The Sodium Lauryl Sulfate from this supplier consistently meets our 99.5% purity requirements. Their batch-to-batch consistency has helped us maintain quality in our detergent production for over 3 years.",
    name: "ChemiTrade Solutions",
    role: "Specialty Chemicals Distributor, Germany",
    initials: "CT",
    size: "wide",
    accentColor: "bg-green-300",
  },
];

const getCardClasses = (size: string) => {
  switch (size) {
    case "tall":
      return "lg:row-span-2 lg:col-span-2";
    case "wide":
      return "lg:col-span-4";
    default:
      return "";
  }
};

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Trusted by Chemical Partners Worldwide
          </h2>
          <p className="mt-4 text-muted-foreground">
            What industry professionals say about our premium surfactants
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto_auto] mt-8 lg:mt-12">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={`h-full ${getCardClasses(testimonial.size)}`}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <blockquote className="flex-1 flex flex-col gap-4">
                  <p className="text-pretty text-lg leading-relaxed">
                    “{testimonial.quote}”
                  </p>
                  <footer className="mt-auto">
                    <div className="flex items-center gap-4">
                      <Avatar
                        className={`size-12 ${
                          testimonial.accentColor ||
                          "bg-zinc-100 dark:bg-zinc-800"
                        }`}
                      >
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <cite className="not-italic font-medium block">
                          {testimonial.name}
                        </cite>
                        <span className="text-muted-foreground text-sm block">
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
