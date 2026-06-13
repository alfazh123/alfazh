export default function BlogBanner({
	imgUrl,
	title,
	time,
	github,
	demo,
}: {
	imgUrl?: string;
	title: string;
	time: string;
	github?: string;
	demo?: string;
}) {
	return (
		<div>
			{imgUrl && (
				<img
					className="w-full max-w-6xl mx-auto object-cover object-top md:rounded-xl mb-10"
					src={imgUrl}
					alt="Blog Banner"
				/>
			)}
			<div className="w-full max-w-2xl mx-auto flex flex-col gap-2">
				{/* <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl" /> */}
				<div className="flex flex-col top-0 left-0 w-full h-full ">
					<h1 className="dark:text-white text-5xl font-extrabold">{title}</h1>
					<p className="dark:text-white">{time}</p>
				</div>
				<div className="bottom-4 right-4 flex gap-2">
					{github && (
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="py-2 dark:text-white underline flex">
							<img
								src="/blog-content/github.svg"
								alt="GitHub"
								className="w-5 h-5 mr-1 dark:hidden flex"
							/>
							<img
								src="/blog-content/github-light.svg"
								alt="GitHub"
								className="w-5 h-5 mr-1 dark:flex hidden"
							/>
							GitHub
						</a>
					)}
					{demo && (
						<a
							href={demo}
							target="_blank"
							rel="noopener noreferrer"
							className="py-2 dark:text-white underline flex">
							<img
								alt="docs"
								src="/docs.svg"
								className="flex dark:hidden w-5 h-5"
							/>
							<img
								alt="docs"
								src="/dark/docs.svg"
								className="dark:flex hidden w-5 h-5"
							/>
							Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
