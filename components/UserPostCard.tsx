"use client";

import React from "react";
import Likes from "../public/likes.svg";
import Views from "../public/views.svg";
import Comments from "../public/comments.svg";
import Shares from "../public/shares.svg";
import Image, { StaticImageData } from "next/image";

interface userDetailsProps {
	profilePicture: StaticImageData;
	sector: number;
	name: string;
	description: string;
	likes: number;
	views: number;
	comments: number;
	lastSeen: number;
}

const UserPostCard = (props: userDetailsProps) => {
	return (
		<div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:items-start shadow-md rounded-md py-3 px-6 border">
			<Image
				className="w-[3.2rem] h-[3.2rem] rounded-full"
				src={props.profilePicture}
				alt="profile picture"
			/>
			<div className="flex flex-col gap-2">
				<div className="flex gap-8">
					<p className="font-semibold text-lg capitalize">
						{props.name}
					</p>
					<span className="bg-blue-500 text-white rounded-full px-4 py-1 font-semibold text-sm text-center flex items-center capitalize">
						sector {props.sector}
					</span>
					<div className="text-blue-500 font-semibold ml-auto">
						{props.lastSeen} min ago
					</div>
				</div>
				<p className="text-sm leading-[140%]">{props.description}</p>
				<div className="flex justify-between capitalize text-[0.7rem] sm:text-[1rem]">
					<p className="flex gap-2 items-center cursor-pointer font-bold">
						<Image src={Likes} alt="likes" />
						<span>{props.likes}k</span>
					</p>
					<p className="flex gap-2 items-center cursor-pointer font-bold">
						<Image src={Views} alt="views" />
						<span>{props.views}k</span>
					</p>
					<p className="flex gap-2 items-center cursor-pointer font-bold">
						<Image src={Comments} alt="comments" />
						<span>{props.comments}k comments</span>
					</p>
					<p className="flex gap-2 items-center cursor-pointer font-bold">
						<Image src={Shares} alt="share" />
						<span>share</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default UserPostCard;
