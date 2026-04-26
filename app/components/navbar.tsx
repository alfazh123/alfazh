import { gsap } from "gsap";
import { useLocation, useNavigate } from "react-router";
import { menu } from "~/utils/data";

export default function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();

	function handleLocationChange(location: string) {
		const tl = gsap.timeline({
			onComplete: () => {
				navigate(location);
			},
		});

		tl.to("#body", {
			opacity: 0,
			duration: 0.4,
			ease: "power2.inOut",
		})
			.call(() => {
				navigate(location);
			})
			.to("#body", {
				opacity: 1,
				duration: 0.4,
				ease: "power2.inOut",
			});
	}

	return (
		<>
			<nav className="fixed top-0 right-0 w-fit z-50 p-4">
				<ul className="flex gap-4">
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
				</ul>
			</nav>
		</>
	);
}
