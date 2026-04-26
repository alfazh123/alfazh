export default function PostCard({
	title,
	link,
	date,
	topics,
	className,
}: {
	title: string;
	link: string;
	date: string;
	topics: string[];
	className?: string;
}) {
	return (
		<a
			href={link}
			rel="noopener noreferrer"
			className={`group relative p-4 flex flex-col justify-between items-center text-center transition-transform duration-300 aspect-4/3 ${className ?? ""} bg-amber-200`}>
			<div className="w-full rounded-lg font-mono">
				<p className="text-gray-500 text-sm">{date}</p>
			</div>
			<div className="gochi-hand-regular w-full px-12">
				<h3 className="text-4xl group-hover:underline">{title}</h3>
			</div>
			<div>
				<div className="flex gap-2 mx-auto justify-end">
					{topics.map((topic, id) => (
						<div
							key={id}
							className="text-gray-600 font-mono px-2 py-1 rounded text-sm">
							{topic}
						</div>
					))}
				</div>
			</div>

			<div className="absolute -top-5 w-30 h-10 bg-slate-200/50 z-20" />
		</a>
	);
}
