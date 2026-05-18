import { useLocation } from "react-router";
import { menu } from "~/utils/data";
import Tooltip from "./tooltip";
import ThemeToggle from "./theme-toggle";

export default function Navbar({ handleOpenCP }: { handleOpenCP: () => void }) {
	const location = useLocation();

	return (
		<>
			<nav className="absolute top-0 right-0 w-full z-10 px-4">
				<ul className="flex items-center gap-4 w-full justify-between">
					{menu.map((item) => (
						<li key={item.name} className="relative">
							<a
								href={item.href}
								className="group text-gray-900 hover:underline px-3">
								<img src={item.icon} alt="dot" className="flex dark:hidden" />
								<img
									src={`/dark${item.icon}`}
									alt="dot"
									className="hidden dark:flex"
								/>
							</a>
							{location.pathname.split("/")[1] === item.href.split("/")[1] && (
								<img
									src="/navbar/bg.svg"
									alt="background"
									className="absolute top-5 left-1 -z-10 shadow-2xl w-30 h-fit bg-transparent dark:hidden"
								/>
							)}
						</li>
					))}
					<li>
						<div className="flex gap-4 items-center">
							<div onClick={handleOpenCP}>
								<Tooltip text="Search" side="left">
									<img
										src="/navbar/magnifying-glass.svg"
										alt="command-pallete"
										className="w-5 h-5 flex dark:hidden"
									/>
									<img
										src="/dark/navbar/magnifying-glass.svg"
										alt="command-pallete"
										className="w-5 h-5 hidden dark:flex"
									/>
								</Tooltip>
							</div>
							<Tooltip text="Theme" side="left">
								<ThemeToggle />
							</Tooltip>
						</div>
					</li>
				</ul>
			</nav>
		</>
	);
}
