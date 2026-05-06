export default function Button({
    text='Click',
    color='bg-amber-500',
    onclick,
}: {
    text: string,
    color: string,
    onclick: () => void,
}) {
    return (
			<div
				onClick={onclick}
				className={`${color} h-fit w-fit text-white px-3 py-1 rounded-md hover:scale-105 flex cursor-pointer`}>
				<span>{text}</span>
			</div>
		);
}