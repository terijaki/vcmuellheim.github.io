import React from "react";
import SponsorCard from "@/app/components/ui/SponsorCard";
import Marquee from "react-fast-marquee";
import { getActiveSponsors } from "@/app/utils/getSponsors";

export default function DisplaySponsors() {
	const activeSponsors = getActiveSponsors();

	if (activeSponsors.length > 3) {
		return (
			<div className="grid grid-cols-main-grid">
				<p className="row-start-1 col-center-content -mt-2 mb-2 text-center">Wir bedanken uns herzlich bei unseren Sponsoren!</p>
				<div className="col-full-content mb-6">
					<Marquee
						pauseOnHover={true}
						speed={5}
					>
						{activeSponsors.map((sponsor) => {
							if (sponsor.name && sponsor.logo) {
								return (
									<div
										key={sponsor.name}
										className="h-20 w-36 mx-6"
									>
										<SponsorCard {...sponsor} />
									</div>
								);
							}
						})}
					</Marquee>
				</div>
			</div>
		);
	} else {
		return (
			<div className="grid grid-cols-main-grid">
				<p className="row-start-1 col-center-content -mt-2 mb-2 text-center">Wir bedanken uns herzlich bei unseren Sponsoren!</p>
				<div className="row-start-2 col-center-content mb-6 grid grid-flow-col auto-cols-fr gap-4 justify-center">
					{activeSponsors.map((sponsor) => {
						if (sponsor) {
							return (
								<div
									key={sponsor.name}
									className="h-20 w-36 flex justify-center"
								>
									<SponsorCard {...sponsor} />
								</div>
							);
						}
					})}
				</div>
			</div>
		);
	}
}
