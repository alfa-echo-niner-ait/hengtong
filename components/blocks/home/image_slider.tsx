"use client";

import { useRef, useState } from "react";
import { useAnimationFrame } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

const images = [
	"/slider/1.png",
	"/slider/2.jpg",
	"/slider/3.jpg",
	"/slider/4.jpg",
	"/slider/5.png",
	"/slider/6.jpg",
	"/slider/7.jpg",
	"/slider/8.jpg",
	"/slider/9.jpg",
];

export function ImageSlider({
	speed = 40,
	speedOnHover = 30,
	gap = 32,
	blur = true,
}: {
	speed?: number;
	speedOnHover?: number;
	gap?: number;
	blur?: boolean;
}) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [currentSpeed, setCurrentSpeed] = useState(speed);

	const x = useRef(0);

	useAnimationFrame((_, delta) => {
		if (containerRef.current) {
			x.current -= (currentSpeed * delta) / 1000;
			const containerWidth = containerRef.current.scrollWidth / 2;

			if (Math.abs(x.current) >= containerWidth) {
				x.current = 0;
			}

			containerRef.current.style.transform = `translateX(${x.current}px)`;
		}
	});

	const duplicated = [...images, ...images];

	return (
		<section className="relative w-full overflow-hidden py-10">
			<div
				className="group relative mx-auto w-full"
				onMouseEnter={() => setCurrentSpeed(speedOnHover)}
				onMouseLeave={() => setCurrentSpeed(speed)}
			>
				<div
					ref={containerRef}
					className={clsx("flex", `gap-${gap}`)}
					style={{ willChange: "transform" }}
				>
					{duplicated.map((src, i) => (
						<div
							key={i}
							className="relative flex-shrink-0 w-[300px] h-[250px] overflow-hidden"
						>
							<Image
								src={src}
								alt={`image-${i}`}
								fill
								className="object-cover"
								sizes="300px"
							/>
						</div>
					))}
				</div>

				{blur && (
					<>
						<div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent" />
						<div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent" />
					</>
				)}
			</div>
		</section>
	);
}
