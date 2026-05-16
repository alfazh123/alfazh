import { ArrowUpRight } from "lucide-react";
import type { CommandPalleteProps } from "~/type";

export default function CommandPalleteSection({
	props,
}: {
	props: CommandPalleteProps;
}) {
	return (
		<>
			{props.sectionMenu.filter((menu) =>
				menu.name?.toLowerCase().includes(props.search.toLowerCase()),
			).length != 0 && (
				<div>
					<h4 className="text-xl font-semibold">{props.title}</h4>
				</div>
			)}
			{props.sectionMenu
				.filter((menu) =>
					menu.name?.toLowerCase().includes(props.search.toLowerCase()),
				)
				.map((menu, id) => (
					<a
						key={id}
						href={menu.link}
						className="flex justify-between w-full hover:bg-slate-50 px-2 py-3 rounded-md">
						<div className="flex gap-4">
							<div className="flex justify-center items-center p-1 rounded bg-slate-200">
								<img src={props.icon} alt="pages" className="w-4 h-4" />
							</div>
							<div>{menu.name}</div>
						</div>
						<div>
							<ArrowUpRight className="w-6 h-6" />
						</div>
					</a>
				))}
		</>
	);
}