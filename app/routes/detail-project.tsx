import { useLoaderData } from "react-router";
import BlogBanner from "~/components/blog-banner";
import type { ProjectModuleProps } from "~/type";
import BlogContent from "~/components/blog-content";
import type { Route } from "../+types/root";
import { createMeta } from "~/components/metadata";

const contentModule = import.meta.glob("../projects/*.mdx", { eager: true });

function findProject(slug: string): ProjectModuleProps | null {
	if (slug === "") return null;
	Object.entries(contentModule).forEach(([path, module]) => {
		const projectModule = module as ProjectModuleProps;

		const fileSlug = path.split("/").pop()?.replace(".mdx", "") || "";
		if (fileSlug === slug) {
			return {
				default: projectModule.default,
				frontmatter: projectModule.frontmatter,
			};
		}
	});
	return null;
}

export function meta({ params }: Route.MetaArgs) {
	const project = findProject(params?.id || "");
	return createMeta({
		title: `${project?.frontmatter?.name || "Project"}`,
		description: `${project?.frontmatter?.name || "Project"}, Project by Alfazh`,
		image: "/og/home.png",
	});
}

export async function loader({ params }: Route.LoaderArgs) {
	const project = findProject(params.id || "");
	if (!project) throw new Response("Not Found", { status: 404 });
	return { frontMatter: project.frontmatter, slug: params.id };
}

export default function DetailProject() {
	const { frontMatter, slug } = useLoaderData<typeof loader>();
	const project = findProject(slug || "");
	const Content = project?.default;

	return (
		<div className="pt-20">
			{frontMatter?.banner && <BlogBanner imgUrl={frontMatter?.banner} />}

			<BlogContent>
				<div className="absolute md:flex hidden top-0 right-0 w-fit px-2 h-10 bg-amber-200 rotate-12 z-10 items-center justify-center">
					{frontMatter?.year}
				</div>
				{Content ? <Content /> : null}
			</BlogContent>
		</div>
	);
}
