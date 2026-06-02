import { useEffect, useState } from "react";
import CommandPalleteSection from "./command-pallete-section";
import { useTheme } from "~/hook/ThemeContext";
import { ArrowUpRight } from "lucide-react";
import type { PostModuleProps, PostListProps } from "~/type";
import { navigation, socials } from "~/utils/data";

const postsModule = import.meta.glob("../posts/*.mdx", { eager: true });

export default function CommandPallete({
	show,
	handleClose,
}: {
	show: boolean;
	handleClose: () => void;
}) {
	const [search, setSearch] = useState<string>("");
	const [post, setPost] = useState<PostListProps[]>([]);

	const { setLight, setDark } = useTheme();

	useEffect(() => {
		Object.entries(postsModule).forEach(([path, module], id) => {
			const postModule = module as PostModuleProps;

			const { title } = postModule.frontmatter || {};
			const slug = "/blog/" + path.split("/").pop()?.replace(".mdx", "") || "";
			setPost((prev) => [...prev, { name: title, link: slug }]);
		});

		return () => {
			setPost([]);
		};
	}, []);

	const tools = [
		{
			name: "Switch to Light mode",
			onclick: () => {
				setLight();
				handleClose();
			},
		},
		{
			name: "Switch to Dark mode",
			onclick: () => {
				setDark();
				handleClose();
			},
		},
	];

	const propNav = {
		sectionMenu: navigation,
		search: search,
		title: "Navigation",
	};

	const propSocial = {
		sectionMenu: socials,
		search: search,
		title: "Socials",
		icon: "/command-pallete/link.svg",
	};

	const propPosts = {
		sectionMenu: post,
		search: search,
		title: "Posts",
		icon: "/command-pallete/pen.svg",
	};

	return (
		<div
			className={`w-full h-screen backdrop-blur-md z-20 bg-slate-300/20 ${show ? "fixed" : "hidden"}`}>
			<div
				className="relative flex justify-center items-center h-screen"
				onClick={handleClose}>
				<div className="absolute top-40">
					<p className="md:text-xl text-slate-500 dark:text-slate-200">
						<span className="px-2 bg-slate-200 dark:bg-slate-900 rounded">
							Shift
						</span>{" "}
						+{" "}
						<span className="px-2 bg-slate-200 dark:bg-slate-900 rounded">
							K
						</span>{" "}
						to close Command Pallete
					</p>
				</div>
				<div
					className="absolute top-50 bottom-50 flex flex-col max-w-2xl w-fit h-fit bg-slate-100 px-4 py-2 rounded-2xl shadow-xl"
					onClick={(e) => e.stopPropagation()}>
					<div className="flex gap-2 justify-center items-center py-4">
						<label htmlFor="search-bar">
							<img
								src="/command-pallete/magnifying-glass.svg"
								alt="search"
								className="w-4 h-4"
							/>
						</label>
						<input
							id="search-bar"
							type="text"
							placeholder="Type Title of post or feature or Tools"
							className="w-full focus:outline-0 focus:border-b focus:border-slate-500 cursor-text"
							value={search}
							onChange={(e) => {
								setSearch(e.target.value);
							}}
						/>
					</div>
					<div className="flex flex-col h-96 gap-4 overflow-y-scroll scrollbar">
						<>
							{tools.filter((menu) =>
								menu.name.toLowerCase().includes(search.toLowerCase()),
							).length != 0 && (
								<div>
									<h4 className="text-xl font-semibold">Tools</h4>
								</div>
							)}
							{tools
								.filter((menu) =>
									menu.name.toLowerCase().includes(search.toLowerCase()),
								)
								.map((menu, id) => (
									<div
										key={id}
										onClick={menu.onclick}
										className="flex justify-between w-full hover:bg-slate-50 px-2 py-3 rounded-md">
										<div className="flex gap-4">
											<div className="flex justify-center items-center p-1 rounded bg-slate-200">
												<img
													src="/command-pallete/tools.svg"
													alt="pages"
													className="w-4 h-4"
												/>
											</div>
											<div>{menu.name}</div>
										</div>
										<div>
											<ArrowUpRight className="w-6 h-6" />
										</div>
									</div>
								))}
						</>

						<>
							{propNav.sectionMenu.filter((menu) =>
								menu.name?.toLowerCase().includes(propNav.search.toLowerCase()),
							).length != 0 && (
								<div>
									<h4 className="text-xl font-semibold">{propNav.title}</h4>
								</div>
							)}
							<div className="flex flex-wrap w-full justify-center">
								{propNav.sectionMenu
									.filter((menu) =>
										menu.name
											?.toLowerCase()
											.includes(propNav.search.toLowerCase()),
									)
									.map((menu, id) => (
										<a
											key={id}
											href={menu.link}
											className="flex justify-between w-fit hover:bg-slate-50 px-2 py-3 rounded-md">
											<div className="flex flex-col gap-4">
												<div className="flex justify-center items-center p-1 rounded ">
													<img
														src={menu.icon}
														alt="pages"
														className="w-8 h-8"
													/>
												</div>
												<div>{menu.name}</div>
											</div>
										</a>
									))}
							</div>
						</>

						{/* <CommandPalleteSection props={propNav} /> */}
						<CommandPalleteSection props={propPosts} />
						<CommandPalleteSection props={propSocial} />
					</div>
				</div>
			</div>
		</div>
	);
}
