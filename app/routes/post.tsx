import { useEffect, useState } from "react";
import WriteCard from "~/components/write-card";

const postsModule = import.meta.glob("../posts/*.mdx", { eager: true });

interface Post {
    title: string;
    date: string;
    tags?: string[];
    slug: string;
}

export default function Post() {
    const [posts, setPosts] = useState<Post[]>([])
    
    useEffect(() => {
        Object.entries(postsModule).forEach(([path, module]) => {
            const { title, date, tags } = module.frontmatter || {};
            const slug = path.split("/").pop()?.replace(".mdx", "") || "";
            console.log(module);
            setPosts((prev) => [...prev, { title, date, tags, slug }]);
        })

        return () => {
            setPosts([]);
        }
    }, [])

    console.log(posts)

    return (
        <div className="flex flex-col justify-center min-h-screen max-w-4xl mx-auto px-8 mb-20">
			<h1 className="md:text-8xl text-6xl font-bold mb-4">Blog Page</h1>

            {/* 3. Panggil layaknya komponen React biasa */}
            <div className="flex flex-col gap-4 mt-20 w-full">
                {posts.sort((a, b) => b.date.localeCompare(a.date)).map((post, id) => (
                    <div className={`w-full ${id % 2 === 0 ? 'justify-end' : 'justify-start'} flex`} key={id}>
                        <WriteCard title={post.title} link={`/blog/${post.slug}`} topics={post.tags || []} className={`max-w-96 w-full`} />
                    </div>
                ))}
            </div>
        </div>
    );
}