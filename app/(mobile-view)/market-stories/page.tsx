"use client";

import React from "react";
import CloudImage from "../../../public/clouds.jpg";
import { StaticImageData } from "next/image";
import MarketStoryCard from "@/components/MarketStoryCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type MarketStories = {
	image: StaticImageData;
	title: string;
	description: string;
};

const MARKET_STORIES: MarketStories[] = [
	{
		image: CloudImage,
		title: "The Coldest Sunset",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe officia, consectetur iure sapiente earum eum amet. Placeat, nemo?",
	},
	{
		image: CloudImage,
		title: "The Coldest Sunset",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe officia, consectetur iure sapiente earum eum amet. Placeat, nemo?",
	},
	{
		image: CloudImage,
		title: "The Coldest Sunset",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe officia, consectetur iure sapiente earum eum amet. Placeat, nemo?",
	},
];

const page = () => {
	const router = useRouter();
	const [screenWidth, setScreenWidth] = useState(window.screen.width);

	useEffect(() => {
		// console.log(window.screen.width);
		if (screenWidth <= 640) {
			// console.log("less than");
			router.push("/market-stories");
		} else {
			// console.log("greater than");
			router.push("/");
		}
	}, [screenWidth]);

	return (
		<div className="mt-20">
			<ul className="flex flex-col gap-8">
				{MARKET_STORIES.map((story, index) => (
					<MarketStoryCard
						key={index}
						image={story.image}
						title={story.title}
						description={story.description}
					/>
				))}
			</ul>
		</div>
	);
};

export default page;
