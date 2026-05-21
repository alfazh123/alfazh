export default function BlogBanner({imgUrl}: {imgUrl: string}) {
    return (
			<img
				className="w-full max-w-6xl mx-auto object-cover object-top rounded-xl mb-10"
				src={imgUrl}
				alt="Blog Banner"
			/>
		);
}