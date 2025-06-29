import { Logo } from "../../logo";
import Link from "next/link";

const links = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Products",
		href: "/products",
	},
	{
		title: "FAQ",
		href: "#",
	},
	{
		title: "About",
		href: "#",
	},
	{
		title: "Contact",
		href: "#",
	},
];

const contactInfo = {
	phone: "+86 193 9819 2331",
	email: "info@hengtongtrading.com",
	address: "Huangdao District, Qingdao City, Shandong Province, China",
};

const socialLinks = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/hengtongtrading",
		icon: (
			<svg
				className="size-6"
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
				></path>
			</svg>
		),
	},
	{
		name: "Instagram",
		href: "#",
		icon: (
			<svg
				className="size-6"
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
				></path>
			</svg>
		),
	},
	{
		name: "YouTube",
		href: "https://www.youtube.com/@hengtongtrading",
		icon: (
			<svg
				className="size-6"
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73z"
				></path>
			</svg>
		),
	},
	{
		name: "LinkedIn",
		href: "#",
		icon: (
			<svg
				className="size-6"
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
				></path>
			</svg>
		),
	},
	{
		name: "Pinterest",
		href: "#",
		icon: (
			<svg
				className="size-6"
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.78-.17-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41c.86 0 1.26.63 1.26 1.44c0 .86-.57 2.09-.86 3.27c-.17.98.52 1.84 1.52 1.84c1.78 0 3.17-1.8 3.17-4.58c0-2.4-1.72-4.04-4.19-4.04c-2.82 0-4.48 2.1-4.48 4.31c0 .86.28 1.73.74 2.3c.08.09.09.21.04.33l-.29 1.09c-.05.12-.17.17-.3.1c-1.28-.56-2.02-2.38-2.02-3.85c0-3.06 2.24-5.96 6.38-5.96c3.44 0 5.97 2.47 5.97 5.2c0 3.39-2.1 6.04-5.19 6.04c-1.03 0-1.93-.53-2.2-1.18l-.67 2.37c-.23.86-.86 2.01-1.29 2.7v-.01z"
				></path>
			</svg>
		),
	},
];

export default function Footer() {
	return (
		<footer className="bg-muted/50 border-t mt-10">
			<div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{/* Company Info with Social Links - Left */}
					<div className="space-y-4 md:pr-8">
						<div className="flex items-center gap-2">
							<Logo className="h-10 w-auto" />
						</div>
						<p className="text-muted-foreground text-sm">
							Your trusted partner for quality products and services.
						</p>
						<div className="flex gap-4">
							{socialLinks.map((social) => (
								<Link
									key={social.name}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.name}
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									{social.icon}
								</Link>
							))}
						</div>
					</div>

					{/* Quick Links - Center */}
					<div className="space-y-4 md:px-8">
						<h3 className="text-sm font-semibold uppercase tracking-wider">
							Quick Links
						</h3>
						<ul className="grid grid-cols-2 gap-x-4 gap-y-2">
							{links.map((link, index) => (
								<li key={index}>
									<Link
										href={link.href}
										className="text-muted-foreground hover:text-primary text-sm transition-colors"
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info - Right */}
					<div className="space-y-4 md:pl-8">
						<h3 className="text-sm font-semibold uppercase tracking-wider">
							Contact Us
						</h3>
						<address className="not-italic">
							<ul className="space-y-2">
								<li className="flex items-start gap-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="size-5 text-muted-foreground"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
										></path>
									</svg>
									<a
										href={`mailto:${contactInfo.email}`}
										className="text-muted-foreground hover:text-primary text-sm transition-colors"
									>
										{contactInfo.email}
									</a>
								</li>
								<li className="flex items-start gap-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="size-5 text-muted-foreground"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
										></path>
									</svg>
									<a
										href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
										className="text-muted-foreground hover:text-primary text-sm transition-colors"
									>
										{contactInfo.phone}
									</a>
								</li>
								<li className="flex items-start gap-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="size-5 text-muted-foreground"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
										></path>
									</svg>
									<span className="text-muted-foreground text-sm">
										{contactInfo.address}
									</span>
								</li>
							</ul>
						</address>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-12 border-t pt-8">
					<p className="text-muted-foreground text-center text-sm">
						© {new Date().getFullYear()} Hengtong Trading. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
