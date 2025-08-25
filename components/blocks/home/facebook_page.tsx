"use client";
import { useEffect } from "react";

declare global {
    interface Window {
        FB: {
            init: (config: { xfbml: boolean; version: string }) => void;
            XFBML: { parse: () => void };
        };
    }
}

export default function FacebookPagePlugin() {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (typeof window !== "undefined" && window.FB) {
                window.FB.XFBML.parse();
            }
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-8 md:py-4">
            <div className="mx-auto max-w-full flex justify-center px-4 md:px-6">
                <div
                    className="fb-page"
                    data-href="https://www.facebook.com/hengtongglobal"
                    data-tabs=""
                    data-width="480"
                    data-height="320"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                ></div>
            </div>
        </section>

    );
}
