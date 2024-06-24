/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: "standalone",
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "volleyball-baden.de",
				port: "",
				pathname: "/uploads/**",
			},
			{
				protocol: "https",
				hostname: "www.volleyball-baden.de",
				port: "",
				pathname: "/uploads/**",
			},
		],
	},
};
module.exports = nextConfig;
