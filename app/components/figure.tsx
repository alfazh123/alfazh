export default function Figure({
	url,
	text,
	width,
}: {
	url: string;
	text?: string;
	width?: number;
}) {
	return (
		<div className={`flex flex-col`}>
			<img src={url} alt={text} className={`${width && width}`} />
			{text && (
				<span className="text-center mt-0 italic dark:text-white">{text}</span>
			)}
		</div>
	);
}
