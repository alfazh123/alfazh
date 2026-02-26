export default function WriteCard({title, link, topics}: {title: string, link: string, topics: string[]}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-4 rounded-lg flex justify-end items-end text-end rotate-6 md:hover:scale-110 transition-transform duration-300 md:w-5/6 w-5/8 aspect-4/3 skew-2`}>
                <div className="absolute w-full h-full bg-slate-100 -z-20 rounded-lg">
                    <p className="text-slate-200 skew-2 -rotate-2 p-4">{title}</p>
                </div>
                <div className="absolute w-[107%] h-[90%] bottom-0 bg-slate-100 -z-10 rounded-lg border-t-2 border-gray-200" />
            <div className="gochi-hand-regular px-12">
                <div className="flex gap-2 mx-auto justify-end">
                    {topics.map((topic, id) => (
                        <div
                            key={id}
                            className="text-gray-600 bg-slate-100 px-2 py-1 rounded text-sm">
                            {topic}
                        </div>
                    ))}
                </div>
                <h3 className="text-4xl group-hover:underline">{title}</h3>
            </div>
            <div>
                {/* <ArrowUpRight className="w-8 h-8" /> */}
                {/* <p className="text-6xl">{year}</p> */}
            </div>
        </a>
    )
}