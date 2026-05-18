export default function BlogBanner({imgUrl}: {imgUrl: string}) {
    return (
			<img
				className="w-full max-w-6xl mx-auto h-96 object-cover object-top pt-20 rounded-lg mb-10"
				src={imgUrl}
				alt="Blog Banner"
			/>
		);
}