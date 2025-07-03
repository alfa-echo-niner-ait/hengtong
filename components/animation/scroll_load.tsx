"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedWrapperProps {
	children: ReactNode;
	duration?: number;
}

export const AnimatedScroll = ({
	children,
	duration = 1,
}: AnimatedWrapperProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration }}
		>
			{children}
		</motion.div>
	);
};
