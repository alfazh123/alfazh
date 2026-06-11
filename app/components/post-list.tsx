import { useEffect, useState } from "react";
import PostCard from "./post-card";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import type { PostProps, PostModuleProps } from "~/type";

const postsModule = import.meta.glob("../posts/*.mdx", { eager: true });

export default function PostList({ home }: { home?: boolean }) {
	const [posts, setPosts] = useState<PostProps[]>([]);
	const [mapPosts, setMapPosts] = useState<Map<number, PostProps[]>>(new Map());
	const [layout, setLayout] = useState<"grid" | "list">("grid");

	useEffect(() => {
		Object.entries(postsModule).forEach(([path, module], id) => {
			const postModule = module as PostModuleProps;

			const { title, date, tags } = postModule.frontmatter || {};
			const slug = path.split("/").pop()?.replace(".mdx", "") || "";
			setPosts((prev) => [...prev, { title, date, tags, slug }]);
			const year = Number(date?.split(" ").at(-1));
			const postData = { title, date, tags, slug };
			setMapPosts((prev) => {
				if (prev?.has(year)) {
					const existingPosts = prev.get(year) || [];
					return new Map(prev).set(year, [...existingPosts, postData]);
				} else {
					return new Map(prev).set(year, [postData]);
				}
			});
		});

		if (home) {
			setPosts((posts) =>
				posts
					.sort(
						(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
					)
					.slice(0, 2),
			);
		}
		return () => {
			setPosts([]);
		};
	}, []);

	return (
		<div>
			<div
				className={clsx(
					"md:max-w-4xl mx-auto",
					`${home && "grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-14 justify-center py-20 mt-0 mb-20"}`,
					`flex flex-col gap-10 w-full`,
				)}>
				<div
					className={`${home ? "flex" : "hidden"} rounded-lg w-full justify-center mb-8 md:h-80 h-fit`}>
					<h2 className="text-6xl font-bold md:mb-4 mb-8 dark:text-white">
						Selected Writes
					</h2>
				</div>
				{!home && (
					<button
						className="flex justify-end"
						onClick={() => setLayout(layout === "grid" ? "list" : "grid")}>
						<img
							src={`/${layout === "grid" ? "grid" : "list"}.svg`}
							alt="Toggle Layout"
							className="w-8 h-8 dark:hidden flex"
						/>
						<img
							src={`/dark/${layout === "grid" ? "grid" : "list"}.svg`}
							alt="Toggle Layout"
							className="w-8 h-8 dark:flex hidden"
						/>
					</button>
				)}
				{layout === "grid" &&
					posts
						.sort(
							(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
						)
						.map((post, id) => (
							<div
								className={`w-full ${id % 2 === 0 && layout === "grid" ? "justify-end" : "justify-start"} flex`}
								key={id}>
								<PostCard
									title={post.title}
									link={`/blog/${post.slug}`}
									date={post.date}
									topics={post.tags || []}
									layout={layout}
								/>
							</div>
						))}

				{layout === "list" && (
					<div className="flex flex-col gap-10">
						{Array.from(mapPosts, ([year, post]) => ({ year, post }))
							.sort((a, b) => b.year - a.year)
							.map((item, id) => (
								<div key={id} className="flex flex-col gap-4">
									<h2 className="text-4xl font-bold dark:text-white">
										{item.year}
									</h2>
									{item.post
										.sort(
											(a, b) =>
												new Date(b.date).getTime() - new Date(a.date).getTime(),
										)
										.map((post, id) => (
											<PostCard
												key={id}
												title={post.title}
												link={`/blog/${post.slug}`}
												date={post.date}
												topics={post.tags || []}
												layout={layout}
											/>
										))}
								</div>
							))}
					</div>
				)}

				<div
					className={`${home ? "flex" : "hidden"} w-full justify-end items-end md:h-80 h-fit`}>
					<a
						href="/blog"
						className="group flex gap-1 hover:gap-2 text-end md:text-6xl text-4xl font-bold md:mb-4 mb-8 dark:text-white">
						Blog Page
						<ArrowUpRight className="w-12 h-12 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-200 ease-in-out" />
					</a>
				</div>
			</div>
		</div>
	);
}