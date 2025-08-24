"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		tel: "",
		msg: ""
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value } = e.target;
		setFormData(prev => ({
			...prev,
			[id]: value
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError("");

		try {
			const response = await fetch('https://hengtongtrading.com/api/mail-sender.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					tel: formData.tel,
					msg: formData.msg
				})
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Failed to send message');
			}

			setIsSuccess(true);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'An unknown error occurred');
		} finally {
			setIsSubmitting(false);
		}
	};

	if (isSuccess) {
		return (
			<section className="py-4 md:py-8">
				<div className="mx-auto max-w-5xl space-y-3 px-6 md:space-y-6">
					<div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-green-200 bg-green-50 p-8 text-center">
						<CheckCircle2 className="h-16 w-16 text-green-500" />
						<h2 className="text-2xl font-medium text-green-800">Message Sent Successfully!</h2>
						<p className="text-green-600">
							Thank you for contacting us. We&apos;ll get back to you within 24 hours.
						</p>
					</div>
				</div>
			</section>
		);
	}

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
				{error && (
					<div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-600">
						{error}
					</div>
				)}
				<div className="grid gap-6 sm:grid-cols-2 md:gap-6 lg:gap-12">
					<div className="relative mb-6 sm:mb-0">
						<form
							onSubmit={handleSubmit}
							className="**:[&>label]:block space-y-6 *:space-y-3"
						>
							<div>
								<Label htmlFor="name">Your/Company Name</Label>
								<Input
									type="text"
									id="name"
									required
									value={formData.name}
									onChange={handleChange}
								/>
							</div>

							<div>
								<Label htmlFor="email">Email</Label>
								<Input
									type="email"
									id="email"
									value={formData.email}
									onChange={handleChange}
								/>
							</div>

							<div>
								<Label htmlFor="tel">Phone/WhatsApp</Label>
								<Input
									type="tel"
									id="tel"
									value={formData.tel}
									onChange={handleChange}
								/>
							</div>

							<div>
								<Label htmlFor="msg">Your Message</Label>
								<Textarea
									id="msg"
									rows={10}
									className="h-40"
									required
									value={formData.msg}
									onChange={handleChange}
								/>
							</div>

							<Button
								type="submit"
								size="lg"
								className="w-full md:w-auto"
								disabled={isSubmitting}
							>
								{isSubmitting ? "Sending..." : "Send"}
							</Button>
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
									href={`tel:++8613341246160`}
									className="font-semibold hover:text-primary"
								>
									+86 133 4124 6160
								</a>
								<br />
								<a
									href={`tel:++8613370849950`}
									className="font-semibold hover:text-primary"
								>
									+86 133 7084 9950
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