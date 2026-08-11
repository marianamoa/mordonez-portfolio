export const site = {
	name: "Mariana Ordonez",
	shortName: "M. Ordonez",
	role: "Agentic Product & AI UX Designer",
	url: "https://mordonez.com",
	email: "marianaordonez04@gmail.com",
	location: "Colombia, UTC-5",
	resumeUrl: "/downloads/Mariana-Ordonez-CV.pdf",
};

// Pre-filled "Get in touch" email link (direct-email fallback).
export const contactHref = `mailto:${site.email}?subject=${encodeURIComponent(
	"Design project or role inquiry",
)}`;

// Web3Forms access key for the /contact form. Create one free at
// https://web3forms.com (enter your email, copy the key here). It is public
// by design — it only routes submissions to your inbox.
export const web3formsAccessKey = "570e5b57-c9c9-48c3-bf96-6561e21b95bc";

export const navItems = [
	{ label: "Work", href: "/work/" },
	{ label: "Journal", href: "/journal/" },
	{ label: "Tools", href: "/tools/" },
	{ label: "Play", href: "/play/" },
	{ label: "About", href: "/about/" },
	{ label: "Contact", href: "/contact/" },
];

export const socialLinks = [
	{ label: "LinkedIn", url: "https://www.linkedin.com/in/mariana-ordo%C3%B1ez-alarc%C3%B3n-ux-designer/" },
	{ label: "Behance", url: "https://www.behance.net/marianaordoez1" },
	{ label: "Email", url: `mailto:${site.email}` },
];

export const proofBrands = [
	"Estore Labs",
	"Casabianca Cycling",
	"Planet of the Vapes",
	"trades.org",
	"Ferrero",
	"Kinder",
	"Nutella",
	"Tic Tac",
	"Butterfinger",
	"Crunch",
	"Keebler",
	"Royal Dansk",
];

export const capabilities = [
	{
		title: "Agentic & AI-native UX",
		description:
			"Fluent in agentic and AI-native product patterns and human-AI interaction: trust, explainability, graceful failure and a human on the important calls. I design and build the AI-native way, in Figma and Claude Code.",
		tags: ["Agentic UX patterns", "Human-AI interaction", "AI-native workflow"],
	},
	{
		title: "eCommerce & CRO",
		description:
			"Landing pages, PDPs, variant selectors, A/B tests and funnels built to lift conversion, AOV and retention without flattening the brand.",
		tags: ["PDP optimization", "A/B testing", "Shopify-aware UX"],
	},
	{
		title: "Design Systems & Brand",
		description:
			"Reusable Figma design systems - components, auto layout, variables and clean developer handoff - built to scale end-to-end across a product and survive constant iteration.",
		tags: ["Design systems", "Figma variables", "Dev handoff"],
	},
];

export const caseStudies = [
	{
		slug: "estore-labs-marketplace-cro",
		client: "Estore Labs",
		title: "Marketplace CRO for Amazon, Walmart and Target",
		outcome: "Conversion-focused PDP and A+ content design for global retail brands.",
		summary:
			"Designed conversion experiences for retail marketplaces, including Ferrero brands such as Kinder, Nutella and Rocher.",
		problem:
			"Marketplace teams needed stronger conversion and AOV across PDPs, bundles and retail content while preserving strict brand consistency.",
		process: [
			"Designed high-converting landing pages and product detail pages for Amazon, Walmart and Target, applying CRO principles to maximize conversion rate and AOV.",
			"Created and iterated on A/B test variants for A+ content, homepage banners and promotional funnels, feeding what won back into the next round of design.",
			"Optimized product quantity and variant selectors (bundles, size options) and purchase flows for clarity and reduced drop-off.",
			"Collaborated with cross-functional growth teams - strategists, e-retail analysts and developers - to translate test hypotheses into design concepts.",
			"Supported Ferrero-portfolio brands (Kinder, Nutella, Rocher, Butterfinger) with consistent, conversion-optimized visuals for launches and seasonal campaigns.",
		],
		solution:
			"A repeatable commerce-design workflow for faster marketplace testing, clearer shopper decisions and consistent brand expression across channels.",
		impact: "Scaled output across a multi-brand portfolio, on deadline and without losing brand consistency.",
		role: "Digital Shelf Designer",
		timeline: "Ongoing retail optimization",
		period: "Sep 2024 - Present",
		tools: "Figma, Photoshop, AI-assisted variants",
		tags: ["CRO", "AI workflow", "Web"],
		cover: "/case-studies/estore-labs/cover.webp",
		coverPosition: "center",
		liveLinks: [
			{
				title: "The image carousel that sells",
				body: "On a marketplace the image carousel is the storefront. I design the sequence - hero, benefits, size, lifestyle and trust - so shoppers get the whole story before they scroll.",
				linkLabel: "Kinder Joy on Walmart",
				url: "https://www.walmart.com/ip/Kinder-Joy-Eggs-Treat-Plus-Toy-Great-for-Easter-Egg-Hunts-4-2-oz-6-Count/495343799",
			},
			{
				title: "A+ content, engineered to convert",
				body: "Beyond the basics, I plan Amazon A+ content and brand-story modules as a system - each block with a job: trigger craving, resolve doubt, build trust and lift perceived quality.",
				linkLabel: "Ferrero Rocher on Amazon",
				url: "https://www.amazon.com/Ferrero-Rocher-Hazelnut-Chocolate-Count/dp/B002Y1Z80U",
			},
			{
				title: "Brand stores that scale a portfolio",
				body: "Multi-page Amazon Brand Stores that give a whole catalog a consistent, shoppable home - navigation, category pages and seasonal features across the brand family.",
				linkLabel: "Nutella store on Amazon",
				url: "https://www.amazon.com/stores/Nutella/page/FF9AA69A-C4A0-4ED8-80A4-2F766D799C34",
			},
			{
				title: "Variants, bundles and the path to cart",
				body: "Conversion is more than content. I design the quantity, bundle and size selectors and the purchase flow so shoppers pick the right pack fast, without second-guessing the size or the bundle.",
				linkLabel: "Nutella on Amazon",
				url: "https://www.amazon.com/Nutella-Peanut-Spread-Afternoon-Snacking/dp/B0GZLHY72G",
			},
		],
		featured: true,
	},
	{
		slug: "planet-of-the-vapes-ecommerce",
		client: "Planet of the Vapes",
		title: "DTC landing pages and lifecycle design for Planet of the Vapes",
		outcome: "Conversion-focused landing pages, campaigns and lifecycle design for a DTC eCommerce brand.",
		summary:
			"Landing pages, promotional campaigns and email/SMS assets supporting product launches and seasonal pushes, kept consistent across every brand touchpoint.",
		problem:
			"A DTC brand shipping frequent launches and seasonal campaigns needed conversion-focused pages and lifecycle assets that stayed on-brand without slowing production.",
		process: [
			"Designed landing pages, promotional campaigns and marketing assets supporting new product launches and seasonal pushes.",
			"Applied UX/UI principles to improve navigation, product discovery and the overall shopping experience, increasing engagement and sales.",
			"Integrated AI tools to improve design efficiency, enhance content quality and scale production workflows.",
			"Ensured brand and design consistency across eCommerce, email and SMS touchpoints through modular components and clear visual hierarchy.",
		],
		solution:
			"A modular design system across web, email and SMS that kept launches and seasonal campaigns consistent and quick to produce, with clearer product discovery and shopping flows.",
		impact: "Faster, on-brand launch and lifecycle production with clearer navigation and product discovery.",
		role: "Product & Brand Designer",
		timeline: "Ongoing DTC design",
		period: "Jul 2023 - Present",
		tools: "Figma, email/SMS modules, AI-assisted production",
		tags: ["eCommerce", "UI/UX", "Lifecycle", "Brand"],
		cover: "/case-studies/planet-of-the-vapes/cover.webp",
		coverPosition: "85% center",
		gallery: [
			{ src: "/case-studies/planet-of-the-vapes/pdp.webp", title: "The page that has to convert", caption: "A product detail page built around the decision: variant and add-on selectors, trust states and a frictionless Add to Cart, tuned for conversion and AOV." },
			{ src: "/case-studies/planet-of-the-vapes/content.webp", title: "Content that earns the scroll", caption: "Benefit-led hierarchy that makes the value obvious and scannable, not a wall of specs." },
			{ src: "/case-studies/planet-of-the-vapes/reviews.webp", title: "Trust where hesitation happens", caption: "Reviews and Q&A placed at the moment of doubt - social proof that de-risks the buy." },
			{ src: "/case-studies/planet-of-the-vapes/related.webp", title: "More value per order", caption: "Cross-sell and bundles that lift average order value without cluttering the decision." },
			{ src: "/case-studies/planet-of-the-vapes/infographic.webp", title: "Answers before objections", caption: "Education and A+ content that resolves questions before they cost a sale." },
			{ src: "/case-studies/planet-of-the-vapes/campaign.webp", title: "On-brand at every touch", caption: "Campaign and lifecycle assets kept consistent across web, email and social." },
		],
		featured: false,
	},
	{
		slug: "trades-design-system-cms",
		client: "trades.org",
		title: "Design system and custom CMS from scratch",
		outcome: "A scalable product system for faster web-product iteration.",
		summary:
			"Designed the UX foundation, component system and responsive templates for multiple web products and a custom CMS/ATS workflow.",
		problem:
			"The team needed to ship multiple product surfaces quickly without re-solving components, templates and handoff patterns on every release.",
		process: [
			"Led end-to-end design for multiple web products, from user research and wireframes to high-fidelity prototypes and developer handoff.",
			"Built scalable design systems and reusable component libraries in Figma, accelerating iteration speed for rapid experimentation.",
			"Designed responsive templates and custom CMS/ATS platforms from scratch, focused on usability, accessibility and conversion.",
			"Conducted UX research to identify friction points and optimize user flows, reducing drop-off across key funnels.",
		],
		solution:
			"A modular UX and visual system with reusable templates, clearer handoff and a CMS structure that supported faster iteration.",
		impact: "Faster iteration and reduced funnel drop-off risk through consistent product patterns.",
		role: "UX/UI Product Designer",
		timeline: "Product foundation",
		period: "Jul 2022 - Dec 2023",
		tools: "Figma, prototyping, documentation",
		tags: ["Product", "UI/UX", "Design systems"],
		cover: "/case-studies/trades-org/cover.webp",
		coverPosition: "center",
		gallery: [
			{ src: "/case-studies/trades-org/contacts.webp", title: "Data-dense views that stay scannable", caption: "A CRM contacts table with filters, search and multi-value fields, structured so a busy user finds the right record fast." },
			{ src: "/case-studies/trades-org/ats.webp", title: "Complex admin, made usable", caption: "An applicant-tracking admin with configurable requirement templates - data tables, filters and inline editing that stay clear even as the data gets dense." },
			{ src: "/case-studies/trades-org/contact.webp", title: "The whole record in one screen", caption: "A CRM contact profile that puts history, notes, details and linked companies exactly where they are needed - no hunting, no clutter." },
			{ src: "/case-studies/trades-org/tokens.webp", title: "A documented token system", caption: "Content color tokens with clear names, roles and parents - the foundation that keeps every screen consistent and easy to hand off." },
			{ src: "/case-studies/trades-org/buttons.webp", title: "Components with every state", caption: "A button component covering sizes, colors, icons and states - reusable parts that let the team ship fast without redrawing the basics." },
			{ src: "/case-studies/trades-org/designsystem.webp", title: "One system behind it all", caption: "A design system built from scratch to keep a growing product consistent, faster to iterate and aligned across the team." },
		],
		featured: true,
	},
	{
		slug: "casabianca-apparel-cro",
		client: "Casabianca Cycling",
		title: "Ongoing Shopify eCommerce design for Casabianca Cycling",
		outcome: "Four years designing and optimizing a cycling apparel brand's Shopify store.",
		summary:
			"As Casabianca's ongoing eCommerce designer, I designed and continuously optimized their Shopify storefront, product pages, campaigns and brand system from 2018 to 2022.",
		problem:
			"The shopping flow had visual clutter, weak purchase hierarchy and checkout friction that made the brand feel less trustworthy than the product.",
		process: [
			"Acted as the brand's ongoing eCommerce designer, owning the Shopify storefront end to end - product pages, collections, campaigns and seasonal launches - over four years.",
			"Improved layout clarity, product-page hierarchy and the checkout flow, applying conversion-focused principles to reduce friction and make the buying decision easier.",
			"Built and maintained a cohesive visual system across digital and physical touchpoints, keeping the store on-brand as the catalog and campaigns evolved.",
			"Beyond the store, contributed to the brand's social media content, packaging and apparel product design - carrying one visual language across every touchpoint.",
		],
		solution:
			"A calmer, continuously refined cycling apparel experience with stronger product storytelling, cleaner CTAs and a clearer checkout - kept consistent and on-brand across years of launches.",
		impact: "A calmer, more premium storefront that stayed consistent and on-brand across four years of product launches and campaigns.",
		role: "eCommerce & Product Designer",
		timeline: "Ongoing eCommerce design",
		period: "Sep 2018 - Jun 2022",
		tools: "Figma, Shopify, brand system",
		tags: ["CRO", "UI/UX", "Web", "Brand"],
		cover: "/case-studies/casabianca-cycling/cover.webp",
		coverPosition: "center 30%",
		gallery: [
			{ src: "/case-studies/casabianca-cycling/pdp.webp", title: "The product page, redesigned", caption: "A full PDP for a technical jersey - gallery, color and size selectors, fabric features, size help, reviews and cross-sell, on desktop and mobile.", maxWidth: 800 },
			{ src: "/case-studies/casabianca-cycling/explainer.webp", title: "Designed around the buying decision", caption: "Fit confidence, shipping and returns, and cart clarity - the things that actually convert technical apparel, not just visual taste." },
			{ src: "/case-studies/casabianca-cycling/brandboard.webp", title: "A brand board to design against", caption: "Wordmark, a restrained commercial palette and catalog photography - the visual system that kept the redesign unmistakably on-brand." },
			{ src: "/case-studies/casabianca-cycling/forher.webp", title: "Campaign that speaks to the rider", caption: "Brand campaign imagery that gives the apparel a clear, confident identity across the store." },
			{ src: "/case-studies/casabianca-cycling/live.webp", title: "Live in the store", caption: "The shipped Casabianca storefront, from the product page to the ask-a-question flow." },
		],
		featured: true,
	},
	{
		slug: "ai-assisted-design-workflow",
		client: "Process case study",
		title: "AI-assisted design workflow",
		outcome: "How AI speeds research, ideation and A/B variants without replacing craft.",
		summary:
			"A process case study showing where generative AI belongs in a high-craft UX and commerce workflow.",
		problem:
			"A/B testing and product ideation can bottleneck at synthesis, copy exploration and asset variation, especially when teams need more options fast.",
		process: [
			"Use AI to summarize research notes and surface recurring friction patterns.",
			"Generate variant directions for headlines, hierarchy and imagery, then filter through a human design hypothesis.",
			"Prototype the strongest options in Figma and QA for brand, accessibility and conversion clarity.",
			"Document what AI influenced and where human judgment made the final call.",
		],
		solution:
			"A transparent AI-assisted workflow where AI expands the option space and the designer protects taste, context and user trust.",
		impact: "Faster variant production with clearer rationale for every design decision.",
		role: "AI Product, AI UX, CRO",
		timeline: "Working method",
		period: "Ongoing method",
		tools: "Figma, generative AI, research synthesis",
		tags: ["AI Product", "AI UX", "CRO"],
		featured: false,
	},
];

export const articles = [
	{
		slug: "ai-ab-tests-faster-design-craft",
		title: "How I Use AI to Run A/B Tests 3x Faster",
		keyword: "AI-assisted design workflow",
		category: "AI Product, AI UX, CRO",
		excerpt:
			"Where AI helps with ideation, asset variants and copy exploration, and where human taste and conversion judgment still make the call.",
		outline: [
			"The old variant-production bottleneck.",
			"Where AI plugs in: ideation, asset generation and copy variants.",
			"Where humans stay in control: hypothesis, taste and QA.",
			"A before and after timeline for a faster testing loop.",
		],
	},
	{
		slug: "trustworthy-ai-interfaces",
		title: "Designing Trustworthy AI Interfaces",
		keyword: "designing AI products",
		category: "AI Product, AI UX",
		excerpt:
			"Explainability, confidence, graceful failure and human-in-the-loop patterns for AI features people can trust.",
		outline: [
			"Why AI UX is different from standard product UX.",
			"Patterns for confidence, uncertainty and clear next steps.",
			"How to design useful empty states and failure states.",
			"What makes human review feel safe instead of slow.",
		],
	},
	{
		slug: "high-converting-product-detail-page",
		title: "The Anatomy of a High-Converting Product Detail Page",
		keyword: "high-converting product detail page",
		category: "CRO, Web",
		excerpt:
			"Above-the-fold hierarchy, variant selectors, trust proof and mobile-first decisions that help shoppers buy.",
		outline: [
			"Above-the-fold hierarchy for fast shopper confidence.",
			"Variant, bundle and quantity selector patterns.",
			"Trust, returns and proof where buyers need it.",
			"Amazon A+ and Shopify differences.",
		],
	},
	{
		slug: "scalable-design-system-figma",
		title: "From Wireframe to Shippable: Building a Scalable Design System in Figma",
		keyword: "design system in Figma",
		category: "Product, UI/UX",
		excerpt:
			"Tokens, components, patterns and handoff docs that make experimentation faster instead of messier.",
		outline: [
			"Start with tokens and repeated product decisions.",
			"Turn components into patterns, not just parts.",
			"Document handoff rules that developers can trust.",
			"Use the system to speed experimentation.",
		],
	},
	{
		slug: "landing-page-cro-fixes",
		title: "CRO Teardown: 7 Landing-Page Fixes That Lift Conversion",
		keyword: "landing page CRO",
		category: "CRO, Web",
		excerpt:
			"Seven practical fixes across hierarchy, CTA clarity, friction, proof, speed, forms and mobile UX.",
		outline: [
			"Make the primary action visible without hunting.",
			"Reduce form and checkout friction.",
			"Add proof close to moments of doubt.",
			"Design mobile first because mobile decides the sale.",
		],
	},
	{
		slug: "generative-ai-toolkit-designers",
		title: "Prompting as a Design Skill",
		keyword: "generative AI design tools",
		category: "AI UX, Brand",
		excerpt:
			"My generative-AI toolkit for moodboards, assets, copy, research synthesis and faster production with guardrails.",
		outline: [
			"Prompt patterns for moodboards and directions.",
			"AI for copy variants and content exploration.",
			"Guardrails for brand consistency.",
			"What AI still cannot replace.",
		],
	},
];

export const toolStack = [
	{
		category: "Design & prototyping",
		items: ["Figma", "auto layout", "variables", "component libraries", "interactive prototypes", "dev handoff"],
		description:
			"End-to-end product design in Figma - systems, prototyping, documentation and clean developer handoff for product and commerce teams.",
	},
	{
		category: "AI-native tooling",
		items: ["Claude Code", "ChatGPT", "Gemini", "Nano Banana", "Paper", "Lovable", "AI-assisted prototyping", "research synthesis", "prompt libraries", "asset variants"],
		description:
			"AI-assisted environments like Claude Code to accelerate design, prototyping and iteration, with human judgment kept at the center.",
	},
	{
		category: "Visual & motion",
		items: ["Photoshop", "Illustrator", "After Effects", "Procreate"],
		description:
			"Brand craft, illustration, motion studies and production-ready creative systems.",
	},
	{
		category: "eCommerce & lifecycle",
		items: ["Shopify-aware UX", "Klaviyo", "PDP design", "A/B testing"],
		description:
			"Commerce flows, email/SMS modules and conversion decisions tied to metrics.",
	},
	{
		category: "Process",
		items: ["Notion", "Asana", "analytics review", "handoff docs", "CRO decisions"],
		description:
			"Clear documentation and measurable decision-making for remote product teams.",
	},
];

export const resources = [
	{
		title: "PDP and landing-page CRO checklist",
		description: "A practical audit sheet for product pages, landing pages and mobile commerce funnels.",
		file: "/downloads/PDP-Landing-CRO-Checklist.html",
		kind: "Checklist",
		cta: "Open the checklist",
	},
	{
		title: "Figma design-system starter kit",
		description: "A starter structure for tokens, components, variants and handoff documentation.",
		file: "/downloads/Figma-Design-System-Starter-Kit.html",
		kind: "Starter kit",
		cta: "Open the starter kit",
	},
	{
		title: "AI design prompt pack",
		description: "Prompt patterns for research synthesis, moodboards, content variants and QA.",
		file: "/downloads/AI-Design-Prompt-Pack.html",
		kind: "Prompt pack",
		cta: "Open the prompt pack",
	},
	{
		title: "Email and SMS component template",
		description: "Lifecycle-design modules for Klaviyo flows, retention emails and SMS moments.",
		file: "/downloads/Email-SMS-Component-Template.html",
		kind: "Template",
		cta: "Open the template",
	},
];

export const playGallery = [
	{ slug: "shiitake-mushroom", alt: "Shiitake mushroom - typographic illustration", width: 700, height: 700 },
	{ slug: "portobello-mushroom", alt: "Portobello mushroom - typographic illustration", width: 700, height: 700 },
	{ slug: "oyster-mushroom", alt: "Oyster mushroom - illustrated label", width: 700, height: 700 },
	{ slug: "shiitake-pizza", alt: "Shiitake mushroom pizza - holographic poster", width: 700, height: 875 },
	{ slug: "oyster-tacos", alt: "Oyster mushroom tacos - animated type", width: 800, height: 1000 },
	{ slug: "bbq-sauce", alt: "Homemade BBQ sauce - illustrated recipe", width: 700, height: 875 },
	{ slug: "fried-chicken", alt: "Fried chicken - illustrated recipe", width: 700, height: 875 },
	{ slug: "chili", alt: "Chili pepper - textured illustration", width: 700, height: 700 },
	{ slug: "popsicle", alt: "Popsicle - animated illustration", width: 800, height: 800 },
	{ slug: "chemex", alt: "The Chemex - brewing method poster", width: 700, height: 1050 },
	{ slug: "brewing-methods", alt: "Coffee brewing methods - print", width: 700, height: 1050 },
	{ slug: "calm-palm", alt: "Calm palm - botanical print", width: 700, height: 1050 },
	{ slug: "sequoia", alt: "Sequoia - botanical print", width: 700, height: 1050 },
	{ slug: "potted-plant", alt: "Potted plant - illustration", width: 700, height: 700 },
	{ slug: "bogota", alt: "Bogota, Colombia - travel poster", width: 700, height: 1050 },
	{ slug: "blossomed-heart", alt: "Blossomed heart - floral anatomical poster", width: 700, height: 1050 },
	{ slug: "washing-dishes", alt: "Washing dishes - animated illustration", width: 800, height: 693 },
	{ slug: "dog-portrait", alt: "Dog portrait - illustration", width: 700, height: 875 },
	{ slug: "line-figure", alt: "Figure - single-line drawing", width: 700, height: 1089 },
	{ slug: "la-raqueta", alt: "La raqueta - minimal sport poster", width: 700, height: 1050 },
	{ slug: "nairo", alt: "Nairo - cycling portrait print", width: 700, height: 467 },
	{ slug: "two-riders", alt: "Two riders - cycling illustration", width: 700, height: 560 },
	{ slug: "potv", alt: "Planet of the Vapes - product illustration", width: 700, height: 875 },
	{ slug: "casabianca-coral", alt: "Casabianca cycling apparel - coral jersey", width: 700, height: 700 },
	{ slug: "casabianca-olive", alt: "Casabianca cycling apparel - olive jersey", width: 700, height: 700 },
	{ slug: "pepairegui", alt: "pepairegui - brand identity", width: 700, height: 700 },
];

export const watercolors = [
	{ slug: "orchid", title: "Orchid", alt: "Orchid - watercolour study on paper", width: 700, height: 700 },
	{ slug: "four-leaf-clover", title: "Four-leaf clover", alt: "Four-leaf clover - watercolour study on paper", width: 700, height: 969 },
	{ slug: "glass-sphere", title: "Pink glass sphere", alt: "Pink glass sphere - watercolour study on paper", width: 700, height: 969 },
	{ slug: "blackberry", title: "Blackberry", alt: "Blackberry - watercolour study on paper", width: 700, height: 700 },
	{ slug: "artichoke", title: "Artichoke", alt: "Artichoke - watercolour study on paper", width: 700, height: 700 },
	{ slug: "strawberry", title: "Strawberry", alt: "Strawberry - watercolour study on paper", width: 700, height: 700 },
];

