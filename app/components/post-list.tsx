import { useEffect, useState } from "react";
import PostCard from "./post-card";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

const postsModule = import.meta.glob("../posts/*.mdx", { eager: true });

interface Post {
	title: string;
	date: string;
	tags?: string[];
	slug: string;
}

interface PostListProps {
	year: number;
	posts: Post[];
}

export default function PostList({ home }: { home?: boolean }) {
	const [posts, setPosts] = useState<Post[]>([]);
	const [listPosts, setListPosts] = useState<PostListProps[]>([]);
	const [layout, setLayout] = useState<"grid" | "list">("grid");

	useEffect(() => {
		Object.entries(postsModule).forEach(([path, module], id) => {
			const { title, date, tags } = module.frontmatter || {};
			const slug = path.split("/").pop()?.replace(".mdx", "") || "";
			setPosts((prev) => [...prev, { title, date, tags, slug }]);
			const year = date.split(" ").at(-1);
			const postData = { title, date, tags, slug };
			setListPosts((prev) => {
				const existingYear = prev.find((item) => item.year === parseInt(year));
				if (existingYear) {
					return prev.map((item) =>
						item.year === parseInt(year)
							? { ...item, posts: [...item.posts, postData] }
							: item,
					);
				} else {
					return [...prev, { year: parseInt(year), posts: [postData] }];
				}
			});
		});

		if (home) {
			setPosts((posts) =>
				posts.sort((a, b) => b.date.localeCompare(a.date)).slice(1),
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
					`${home && "grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-14 justify-center py-20 mt-0"}`,
					`flex flex-col gap-10 w-full`,
				)}>
				<div
					className={`${home ? "flex" : "hidden"} rounded-lg w-full justify-center mb-8 md:h-80 h-fit`}>
					<h2 className="text-6xl font-bold md:mb-4 mb-8">Selected Writes</h2>
				</div>
				{!home && (
					<button
						className="flex justify-end"
						onClick={() => setLayout(layout === "grid" ? "list" : "grid")}>
						<img
							src={`/${layout === "grid" ? "grid" : "list"}.svg`}
							alt="Toggle Layout"
							className="w-8 h-8"
						/>
					</button>
				)}
				{layout === "grid" &&
					posts
						// .sort((a, b) => b.date.localeCompare(a.date))
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

				{layout === "list" &&
					listPosts
						.sort((a, b) => b.year - a.year)
						.map((postList, id) => (
							<div key={id}>
								<h2 className="text-4xl font-bold mb-4">{postList.year}</h2>
								<div className="flex flex-col gap-4">
									{postList.posts
										.sort((a, b) => b.date.localeCompare(a.date))
										.map((post, id) => (
											<PostCard
												title={post.title}
												link={`/blog/${post.slug}`}
												date={post.date}
												topics={post.tags || []}
												layout={layout}
											/>
										))}
								</div>
							</div>
						))}
				<div
					className={`${home ? "flex" : "hidden"} w-full justify-end items-end md:h-80 h-fit`}>
					<a
						href="/blog"
						className="group flex gap-1 hover:gap-2 text-end md:text-6xl text-4xl font-bold md:mb-4 mb-8">
						Blog Page
						<ArrowUpRight className="w-12 h-12 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-200 ease-in-out" />
					</a>
				</div>
			</div>
		</div>
	);
}