import React from "react";
import MarketStoryCard from "./MarketStoryCard";
import CloudImage from "../public/clouds.jpg";
import { StaticImageData } from "next/image";

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

const MarketStories = () => {
	return (
		<div className="w-1/4 flex flex-col gap-2 mr-6">
			<h2 className="mb-4 uppercase bg-gray-200 text-red-500 font-semibold w-fit p-2">
				MARKET STORIES
			</h2>
			<ul className="flex flex-col gap-4">
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

export default MarketStories;
