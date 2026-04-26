import { useEffect, useState } from "react";
import PostCard from "./post-card";

const postsModule = import.meta.glob("../posts/*.mdx", { eager: true });

interface Post {
	title: string;
	date: string;
	tags?: string[];
	slug: string;
}

export default function PostList({ home }: { home?: boolean }) {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		Object.entries(postsModule).forEach(([path, module]) => {
			const { title, date, tags } = module.frontmatter || {};
			const slug = path.split("/").pop()?.replace(".mdx", "") || "";
			console.log(module);
			setPosts((prev) => [...prev, { title, date, tags, slug }]);
		});

		return () => {
			setPosts([]);
		};
	}, []);

	return (
		<div>
			{home ? (
				<div className="md:max-w-4xl mx-auto md:px-8 px-4 grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-14 rounded-lg justify-center py-20">
					<div className="rounded-lg w-full justify-center mb-8 md:h-80 h-fit">
						<h2 className="text-6xl font-bold md:mb-4 mb-8">Selected Writes</h2>
					</div>
					{posts.slice(0, 2).map((post, id) => (
						<div
							className={`w-full ${id % 2 === 0 ? "justify-end" : "justify-start"} flex`}
							key={id}>
							<PostCard
								title={post.title}
								link={`/blog/${post.slug}`}
								date={post.date}
								topics={post.tags || []}
								className={`max-w-96 w-full`}
							/>
						</div>
					))}
				</div>
			) : (
				<div className="flex flex-col gap-4 mt-20 w-full">
					{posts
						.sort((a, b) => b.date.localeCompare(a.date))
						.map((post, id) => (
							<div
								className={`w-full ${id % 2 === 0 ? "justify-end" : "justify-start"} flex`}
								key={id}>
								<PostCard
									title={post.title}
									link={`/blog/${post.slug}`}
									date={post.date}
									topics={post.tags || []}
									className={`max-w-96 w-full`}
								/>
							</div>
						))}
				</div>
			)}
		</div>
	);
}