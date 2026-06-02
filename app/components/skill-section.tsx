
const skill = [
    {
        name: "TypeScript",
        icon: ""
    },
    {
        name: "JavaScript",
        icon: ""
    },
    {
        name: "ReactJs",
        icon: ""
    },
    {
        name: "Laravel",
        icon: ""
    },
    {
        name: "PHP",
        icon: ""
    },
    {
        name: "PostgreSQL",
        icon: ""
    },
    {
        name: "Docker",
        icon: ""
    },
    {
        name: "Git",
        icon: ""
    },
]

export default function SkillSection() {
    return (
        <div className="flex flex-col items-center gap-4 min-h-[30vh] dark:text-white">
            <h2 className="text-6xl font-bold">
                Skill
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
                {skill.map((item, id) => (
                    <div key={id} className="px-2 py-1 rounded-full border text-lg">
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}