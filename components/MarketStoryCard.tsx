import Image, { StaticImageData } from "next/image";
import React from "react";

interface marketStoryCardProps {
	image: StaticImageData;
	title: string;
	description: string;
}

const MarketStoryCard = (props: marketStoryCardProps) => {
	return (
		<div className="flex flex-col shadow-md rounded">
			<Image
				className="rounded-t rounded-tr h-[8rem]"
				src={props.image}
				alt="The coldest sunset image"
			></Image>
			<div className="py-2 px-8 sm:px-4 flex flex-col gap-1">
				<h6 className="font-semibold text-sm">{props.title}</h6>
				<p className="leading-[1.5] text-xs">{props.description}</p>
			</div>
		</div>
	);
};

export default MarketStoryCard;
