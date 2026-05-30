export interface PostFrontMatter {
	title: string;
	date: string;
	tags: string[];
	bannerImgUrl?: string;
}

export interface PostModuleProps {
	frontmatter: PostFrontMatter;
	default: React.ComponentType;
}

export interface PostListProps {
	name: string;
	link: string;
}

export interface PostProps {
	title: string;
	date: string;
	tags?: string[];
	slug: string;
}

export interface ProjectFrontMatter {
	name: string;
	description: string;
	year: string;
	banner: string;
	icon: string;
}

export interface ProjectModuleProps {
	frontmatter: ProjectFrontMatter;
	default: React.ComponentType;
}

export interface SectionCommand {
	name: string;
	link: string;
}

export interface CommandPalleteProps {
	sectionMenu: SectionCommand[];
	search: string;
	title: string;
	icon: string;
}

export interface ThemeContextProp {
	theme: "" | "dark";
	togleTheme: () => void;
	setLight: () => void;
	setDark: () => void;
}
