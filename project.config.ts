//
//
// This file contains variables which are required for several features across the project. They are influenced from external factors and they are put here to easily change these from a central location. They are not sensitive in any way and we are not using environmental variables here for this reason.
//
//
/** General information about the club. */
export const Club = {
	domain: "vcmuellheim.de",
	url: "https://vcmuellheim.de",
	name: "Volleyballclub Müllheim e.V.",
	shortName: "VC Müllheim",
	email: "info@vcmuellheim.de",
};
/** The clubs details on the SAMS platform. */
export const SAMS = {
	url: "https://www.volleyball-baden.de",
	clubId: "3530",
	name: "VC Müllheim",
};
/** The clubs identity/account on the fediverse. */
export const Mastodon = {
	instance: "freiburg.social",
	name: "VCM",
	clientId: "109553572668731614",
};
