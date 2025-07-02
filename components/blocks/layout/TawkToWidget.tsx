"use client";

import { useEffect } from "react";

const TawkToWidget = () => {
	useEffect(() => {
		if (document.getElementById("tawk-script")) return;

		const s1 = document.createElement("script");
		s1.src = "https://embed.tawk.to/686498961997ff190d29ca38/1iv4f839d";
		s1.async = true;
		s1.charset = "UTF-8";
		s1.setAttribute("crossorigin", "*");
		s1.id = "tawk-script";

		document.body.appendChild(s1);

		return () => {
			// Optional cleanup: remove script if needed
			const existingScript = document.getElementById("tawk-script");
			if (existingScript) existingScript.remove();
		};
	}, []);

	return null;
};

export default TawkToWidget;
