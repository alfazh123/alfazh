import { useLocation } from "react-router";
import { menu } from "~/utils/data";
import Tooltip from "./tooltip";

export default function Navbar({ handleOpenCP }: { handleOpenCP: () => void }) {
	const location = useLocation();

	return (
		<>
			<nav className="fixed top-0 right-0 w-fit z-10 px-4">
				<ul className="flex items-center gap-4">
					{menu.map((item) => (
						<li key={item.name} className="relative">
							<a
								href={item.href}
								className="group text-gray-900 hover:underline px-3">
								<img src={item.icon} alt="dot" />
							</a>
							{location.pathname.split("/")[1] === item.href.split("/")[1] && (
								<img
									src="/navbar/bg.svg"
									alt="background"
									className="absolute top-5 left-1 -z-10 shadow-2xl w-30 h-fit bg-transparent"
								/>
							)}
						</li>
					))}
					<li onClick={handleOpenCP}>
						<Tooltip text="Search" side="left">
							<img
								src="/command-pallete/magnifying-glass.svg"
								alt="command-pallete"
								className="w-5 h-5"
							/>
						</Tooltip>
					</li>
				</ul>
			</nav>
		</>
	);
}
