import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({name, description, link, year}: {name: string, description: string, link: string, year: number}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-l-2 border-t-0 border-r-0 border-gray-300 p-4 flex flex-col justify-between h-80 hover:bg-slate-100 md:hover:scale-110 transition-transform duration-300">
            <div>
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
            <div className="w-full flex justify-end">
                <p className="text-6xl">{year}</p>
                <ArrowUpRight className="w-12 h-12" />
            </div>
        </a>
    )
}