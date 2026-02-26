export default function About() {
    return (
			<div className="flex flex-col max-w-4xl mx-auto px-8 py-8 min-h-screen justify-center">
				<div className="flex flex-col">
					<h1 className="md:text-8xl text-6xl font-bold mb-4">About</h1>
				</div>
				<div className="flex flex-col md:text-xl text-lg gap-4">
					<p>
						Hi there! I'm Ahmd Alfazh, a passionate FrontEnd Developer with a
						knack for creating engaging and user-friendly web experiences💻. I
						love to combine creativity with technical skills to build websites
						that not only look great but also function seamlessly. Love read📖,
						art🎨 and Gym🏋️‍♂️.
					</p>

					<p>
						I have some experience in FrontEnd Development, using React, NextJs,
						and Tailwind CSS. I enjoy learning new technologies and continuously
						improving my skills to stay up-to-date with the latest trends in web
						development. I also have some experience in Mobile Development from
						Bangkit Academy which I attended in 2024.
					</p>

					<p>
						Sometimes i make a projects, you can check it out in the{" "}
						<a href="/projects" className="cursor-pointer underline">
							project page
						</a>
						. And Someof times i make a blog, you can check it out on my{" "}
						<a
							rel="noopener"
							href="https://medium.com/@alfazh291"
							target="_blank"
							className="cursor-pointer underline">
							Medium profile
						</a>
						{"."}
					</p>
				</div>
			</div>
		);
}