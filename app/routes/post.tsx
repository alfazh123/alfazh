import { Hero } from "~/components/hero";
import PostList from "~/components/post-list";

export default function Post() {
	return (
		<div className="flex flex-col justify-center min-h-screen max-w-4xl mx-auto px-8 mb-20">
			<Hero title="Blog Page" />
			<PostList />
		</div>
	);
}
