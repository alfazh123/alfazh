import { useLoaderData } from "react-router";
import BlogBanner from "~/components/blog-banner";
import type { PostModuleProps } from "~/type";
import BlogContent from "~/components/blog-content";
import type { Route } from "../+types/root";
import { createMeta } from "~/components/metadata";

const contentModule = import.meta.glob("../posts/*.mdx", { eager: true });

function findPost(slug: string): PostModuleProps | null {
	for (const [path, module] of Object.entries(contentModule)) {
		const postModule = module as PostModuleProps;
		const fileSlug = path.split("/").pop()?.replace(".mdx", "") || "";
		if (fileSlug === slug) {
			return {
				default: postModule.default,
				frontmatter: postModule.frontmatter,
			};
		}
	}
	return null;
}

export function meta({ params }: Route.MetaArgs) {
	const post = findPost(params?.id || "");

	return createMeta({
		title: `${post?.frontmatter?.title || "Blog Post"}`,
		description: `${post?.frontmatter?.title || "Blog Post"}, Blog by Alfazh`,
		image: "/og/home.png",
	});
}

export async function loader({ params }: Route.LoaderArgs) {
	const project = findPost(params.id || "");
	if (!project) throw new Response("Not Found", { status: 404 });
	return { frontMatter: project.frontmatter, slug: params.id };
}

export default function DetailPost() {
	const { frontMatter, slug } = useLoaderData<typeof loader>();
	const post = findPost(slug || "");
	const Content = post?.default;

	return (
		<div className="pt-20">
			{frontMatter?.bannerImgUrl && (
				<BlogBanner imgUrl={frontMatter?.bannerImgUrl} />
			)}

			<BlogContent>
				<div className="absolute md:flex hidden top-0 right-0 w-fit px-2 h-10 bg-amber-200 rotate-12 z-10 items-center justify-center">
					{frontMatter?.date}
				</div>
				{Content ? <Content /> : null}
			</BlogContent>
		</div>
	);
}
