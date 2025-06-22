import Image from "next/image";
import React from "react";

interface Logo {
	className?: string;
}

export const Logo: React.FC<Logo> = ({ className }) => {
	// Calculate the aspect ratio (1020/400 = 2.55)
	const aspectRatio = 2040 / 800;

	return (
		<div
			className={`relative ${className}`}
			style={{ aspectRatio: `${aspectRatio}` }}
		>
			<Image
				src="/logo.png" // Update this path
				alt="Hengtong"
				fill
				className="object-contain"
				priority
				sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
			/>
		</div>
	);
};
