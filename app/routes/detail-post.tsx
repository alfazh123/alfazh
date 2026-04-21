import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function DetailPost() {
    const location = useLocation();
    const slug = location.pathname.split("/").pop();

    const contentModule = import.meta.glob("../posts/*.mdx", { eager: true });
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        Object.entries(contentModule).forEach(([path, module]) => {
            const fileSlug = path.split("/").pop()?.replace(".mdx", "") || "";
            if (fileSlug === slug) {
                setContent(module.default);
            }
        });
    }, [slug]);

    return (
        <div className="prose prose-code:before:content-none prose-code:after:content-none prose-img:rounded-lg prose-img:border mt-20 flex flex-col justify-center min-h-screen max-w-4xl w-full mx-auto px-8 mb-20">
            {/* <h1 className="text-4xl font-bold">Blog</h1> */}
        
                    {/* 3. Panggil layaknya komponen React biasa */}
                    {content}
            <div className="prose flex flex-col gap-4 mt-20">
            </div>
        </div>
    )
}