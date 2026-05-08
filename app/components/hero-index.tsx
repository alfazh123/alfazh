export default function HeroIndex() {
	return (
		<div className="relative h-[60vh] max-w-4xl mx-auto md:px-12 px-8 flex flex-col justify-center py-8 mb-20">
			<div className="flex flex-col z-50">
				<div className="md:text-8xl text-6xl font-bold w-fit">Ahmd Alfazh</div>
				<div className="lg:w-fit md:w-3/4 w-full">
					I'm a FrontEnd Developer Experience in React, NextJs, and Tailwind
					CSS.
				</div>
			</div>
			<img
				src="/plant.svg"
				alt="Ahmd Alfazh"
				className="absolute -bottom-10 md:-right-10 -right-32 w-80 object-cover mx-auto mt-4 bg-clip-text"
			/>
		</div>
	);
}

export function Hero({ title }: { title: string }) {
	return (
		<div className="h-[30vh] max-w-4xl flex py-8 items-center">
			<h1 className="md:text-8xl text-6xl font-bold mb-4">{title}</h1>
		</div>
	);
}