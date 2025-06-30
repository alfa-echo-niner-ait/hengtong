import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
	return (
		<section className="py-4 md:py-8">
			<div className="mx-auto max-w-5xl space-y-3 px-6 md:space-y-6">
				<h2 className="relative max-w-xl text-4xl font-medium lg:text-5xl">
					Get in Touch
				</h2>
				<p className="text-muted-foreground">
					Reach out to our sales team! We are eager to learn about your
					requirements and feedback.
				</p>
				<div className="grid gap-6 sm:grid-cols-2 md:gap-6 lg:gap-12">
					<div className="relative mb-6 sm:mb-0">
						<form
							action=""
							className="**:[&>label]:block space-y-6 *:space-y-3"
						>
							<div>
								<Label htmlFor="name">Your/Company Name</Label>
								<Input type="text" id="name" required />
							</div>

							<div>
								<Label htmlFor="email">Email</Label>
								<Input type="email" id="email" />
							</div>

							<div>
								<Label htmlFor="tel">Phone/WhatsApp</Label>
								<Input type="tel" id="tel" />
							</div>

							<div>
								<Label htmlFor="msg">Your Message</Label>
								<Textarea id="msg" rows={10} className="h-40" required />
							</div>

							<Button type="submit" size="lg" className="w-full md:w-auto">Send</Button>
						</form>
					</div>

					<div className="relative space-y-4">
						<div className="grid gap-10 md:grid-cols-2">
							<div>
								<span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
									<Mail className="h-6 w-auto text-primary/85" />
								</span>
								<p className="mb-2 text-lg font-semibold">Email</p>
								<p className="mb-3 text-muted-foreground">
									We respond to all emails within 24 hours.
								</p>
								<a
									href={`mailto:info@hengtongtrading.com`}
									className="font-semibold hover:text-primary"
								>
									info@hengtongtrading.com
								</a>
							</div>
							<div>
								<span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
									<Phone className="h-6 w-auto text-primary/85" />
								</span>
								<p className="mb-2 text-lg font-semibold">Phone</p>
								<p className="mb-3 text-muted-foreground">
									We are available Mon-Fri, 8am-5pm (GMT +8).
								</p>
								<a
									href={`tel:+8619398192331`}
									className="font-semibold hover:text-primary"
								>
									+86 193 9819 2331
								</a>
							</div>
							<div>
								<span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
									<MapPin className="h-6 w-auto text-primary/85" />
								</span>
								<p className="mb-2 text-lg font-semibold">Factory</p>
								<p className="mb-3 text-muted-foreground">
									You are welcome to visit our factory in person.
								</p>
								<a href="#" className="font-semibold">
									Huangdao District, Qingdao City, Shandong Province, China
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
