"use client";

import DiscussionForum from "@/components/DiscussionForum";
import MarketStories from "@/components/MarketStories";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// export default function Home() {
// 	const router = useRouter();
// 	const [screenWidth, setScreenWidth] = useState(window.screen.width);

// 	useEffect(() => {
// 		if (screenWidth <= 640) {
// 			router.push("/discussion-forum");
// 		} else {
// 			router.push("/");
// 		}
// 	}, [router, screenWidth]);
// 	return (
// 		<>
// 			<main className="flex gap-14">
// 				<Sidebar />
// 				<DiscussionForum />
// 				<MarketStories />
// 			</main>
// 		</>
// 	);
// }

// import DiscussionForum from "@/components/DiscussionForum";
// import MarketStories from "@/components/MarketStories";
// import Sidebar from "@/components/Sidebar";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

export default function Home() {
	const router = useRouter();
	const [screenWidth, setScreenWidth] = useState(0);

	useEffect(() => {
		// Check if window object is defined before accessing window properties
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		if (typeof window !== "undefined") {
			// Access window properties only in the browser environment
			setScreenWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);
		}

		return () => {
			// Cleanup event listener on component unmount
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		// Redirect based on screen width
		if (screenWidth <= 640) {
			router.push("/discussion-forum");
		} else {
			router.push("/");
		}
	}, [router, screenWidth]);

	return (
		<>
			<main className="flex gap-14">
				<Sidebar />
				<DiscussionForum />
				<MarketStories />
			</main>
		</>
	);
}
