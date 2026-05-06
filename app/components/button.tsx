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
            className={`${color } h-fit w-fit text-white p-4 flex cursor-pointer`}>
            <span>{text}</span>
        </div>
    )
}