module.exports = {
	title: "The Ultimate Code Reference",
	tagline: "Everyday docs and notes for all things Computer Science",
	url: "https://your-docusaurus-test-site.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "hcshires", // Usually your GitHub org/user name.
	projectName: "ultimate-code-reference", // Usually your repo name.
	themeConfig: {
		navbar: {
			title: "The Ultimate Code Reference",
			logo: {
				alt: "Henry Shires Logo",
				src: "img/logo.png",
			},
			items: [
				{
					to: "docs/",
					activeBasePath: "docs",
					label: "Docs",
					position: "left",
				},
				{
					href: "https://github.com/hcshires",
					label: "Henry Shires - GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "C++ Programming",
							to: "docs/",
						},
						{
							label: "Computer Networking",
							to: "docs/computer-networking/",
						},
					],
				},
				{
					title: "My Work",
					items: [
						{
							label: "Project Portfolio",
							href: "https://hcshires.github.io/",
						},
						{
							label: "GitHub",
							href: "https://github.com/hcshires",
						},
					],
				},
			],
			copyright: `${new Date().getFullYear()} - Designed by Henry Shires. Built with Docusaurus.`,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
