import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaUser as IconAvatar } from "react-icons/fa6";
import fs from "fs";
import { getPlaiceholder } from "plaiceholder";

export default async function MembersCard(props: { name?: string; email?: string; avatar?: string; function?: string }) {
	if (!props.name) {
		return null;
	}

	let email = "";
	let emailClass = "";
	if (props.email) {
		email = "mailto:" + props.email;
	} else {
		emailClass = " hover:cursor-default";
	}
	let plaiceholderImage;
	if (props.avatar) {
		try {
			const file = fs.readFileSync("public" + props.avatar);
			const { base64 } = await getPlaiceholder(file, { saturation: 0.8, format: ["webp"], size: 64 });
			plaiceholderImage = base64;
		} catch (err) {
			console.log("Unable to create plaiceholder image for " + props.avatar);
		}
	}

	return (
		<Link
			className={
				"member-card grid grid-cols-[4rem,1fr] sm:grid-cols-[5rem,1fr] justify-items-start place-items-center bg-white rounded-2xl shadow overflow-hidden group text-sm sm:text-base select-none" +
				emailClass
			}
			href={email}
			scroll={false}
		>
			<div className="overflow-hidden w-full h-full aspect-square group bg-lion *:h-full *:w-full *:group-hover:scale-105 *:duration-300">
				{props.avatar ? (
					<Image
						width={96}
						height={96}
						src={props.avatar}
						alt={props.name}
						className="object-cover"
						placeholder={plaiceholderImage ? "blur" : undefined}
						blurDataURL={plaiceholderImage}
					/>
				) : (
					<IconAvatar className="text-white mt-3" />
				)}
			</div>
			<div className="grid grid-cols-1 overflow-hidden w-full px-2">
				<div className="">{props.name}</div>
			</div>
			{props.function && <div className="bg-blumine text-white w-full h-full hyphens-auto text-xs text-center col-span-2">{props.function}</div>}
		</Link>
	);
}
