import clsx from "clsx";
import type { ReactNode } from "react";

export default function BlogContent({children}: {children: ReactNode}) {
    return (
			<div
				className={clsx(
					"prose prose-headings:mx-auto prose-headings:max-w-2xl prose-headings:w-full",
					"prose-p:mx-auto prose-p:max-w-2xl prose-p:w-full prose-p:text-lg prose-p:mb-0 prose-img:mb-0 prose-img:rounded-lg prose-img:border prose-img:mx-auto",
					"prose-code:before:content-none prose-code:after:content-none",
					"prose-ul:mx-auto prose-ul:max-w-2xl prose-ul:w-full prose-ol:mx-auto prose-ol:max-w-2xl prose-ol:w-full prose-li:my-0",
					"dark:prose-p:text-slate-200 dark:prose-headings:text-white dark:prose-li:text-white dark:prose-code:text-white dark:prose-a:text-white dark:prose-strong:text-white",
					"relative mt-20 flex flex-col justify-center min-h-screen max-w-4xl w-full mx-auto px-8 mb-20",
				)}>
				{children}
			</div>
		);
}