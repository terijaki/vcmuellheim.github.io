import React from "react";
import { getTeamIds } from "@/app/utils/samsClubData";
import { getRankings } from "@/app/utils/samsRanking";
import RankingTable from "@/app/components/sams/RankingTable";
import PageHeading from "@/app/components/layout/PageHeading";
import Matches from "@/app/components/sams/Matches";

// generate a custom title
import { Metadata, ResolvingMetadata } from "next";
export async function generateMetadata({}, parent: ResolvingMetadata): Promise<Metadata> {
	return {
		title: "Tabelle",
	};
}

const GAMES_PER_TEAM: number = 2.3; // maximum number of games per team to shown below the rankings

export default function Tabelle() {
	const lastResultCap = Number((getRankings(getTeamIds()).length * GAMES_PER_TEAM).toFixed(0)); // calculate the total number of games

	let matchSeriesDisplayed: string[] = []; //placeholder to avoid duplicate league displays
	return (
		<>
			<PageHeading title="Tabelle" />
			<div className="col-full-content sm:col-center-content grid gap-4 my-4 md:grid-cols-2 prose-h2:text-2xl">
				{getRankings(getTeamIds()).map((ranking) => {
					if (!matchSeriesDisplayed.includes(ranking.matchSeries.uuid)) {
						matchSeriesDisplayed.push(ranking.matchSeries.uuid);
						return (
							<RankingTable
								{...ranking}
								key={ranking.matchSeries.id}
							/>
						);
					}
				})}
			</div>
			{lastResultCap > 0 && (
				<div className="col-full-content sm:col-center-content card-narrow my-4">
					<h2 className="font-bold text-2xl text-gray-600 px-3 pt-3">Unsere letzten {lastResultCap} Spiele</h2>
					<Matches
						teamId={getTeamIds("id")}
						filter="past"
						limit={lastResultCap}
					/>
				</div>
			)}
		</>
	);
}
