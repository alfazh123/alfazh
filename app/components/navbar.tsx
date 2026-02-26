import { gsap } from "gsap";
import { useLocation, useNavigate } from "react-router";
import { menu } from "~/utils/data";

export default function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();

	function handleLocationChange(location: string) {
		const tl = gsap.timeline();

		tl.to("#body", { opacity: 0, duration: 0.5 });

		setTimeout(() => {
			navigate(location);
			tl.to("#body", { opacity: 1, duration: 0.5 });
		}, 1000);
	}

	return (
		<>
			<nav className="fixed top-0 right-0 w-fit z-50 p-4">
				<ul className="flex gap-4">
					{menu.map((item) => (
						<li key={item.name}>
							<button
								type="button"
								className="relative group text-gray-900 hover:underline px-3"
								onClick={() => handleLocationChange(item.href)}>
								<img src={item.icon} alt="dot" />
								{location.pathname === item.href && (
									<img
										src="/navbar/bg.svg"
										alt="background"
										className="absolute -bottom-2 left-1 -z-10 shadow-2xl"
									/>
								)}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}
