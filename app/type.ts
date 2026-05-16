export interface FrontMatter {
	title: string;
	date: string;
	tags: string[];
	bannerImgUrl?: string;
}

export interface PostModuleProps {
	frontmatter: FrontMatter;
	default: React.ComponentType;
}

export interface PostProps {
	name: string;
	link: string;
}

export interface Post {
	title: string;
	date: string;
	tags?: string[];
	slug: string;
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