"use client";

import DiscussionForum from "@/components/DiscussionForum";
import MarketStories from "@/components/MarketStories";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
	const router = useRouter();
	const [screenWidth, setScreenWidth] = useState(window.screen.width);

	useEffect(() => {
		// console.log(window.screen.width);
		if (screenWidth <= 640) {
			// console.log("less than");
			router.push("/discussion-forum");
		} else {
			// console.log("greater than");
			router.push("/");
		}
	}, [screenWidth]);
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
