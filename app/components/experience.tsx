import SkillSection from "./skill-section"

const experience = [
    {
        company: "PT ORDO",
        location: "Surabaya",
        role: "FrontEnd Web Developer Intern",
        startDate: "Feb 2025",
        endDate: "June 2025"
    },
    {
        company: "Bangkit Academy 2024 Batch 2",
        location: "Jakarta",
        role: "Mobile Developer Cohort",
        startDate: "Sept 2024",
        endDate: "Dec 2024"
    }
]


export default function Experience() {
    return (
        <div className="max-w-4xl w-full mx-auto grid md:grid-cols-2 gap-8 min-h-[50vh]">
            <div className="flex flex-col gap-8 dark:text-white">
                <h2 className="text-6xl font-bold">
                    Expereince
                </h2>
                <div className="flex flex-col gap-4">
                    {experience.map((item, id) => (
                        <div key={id} className="flex flex-col gap-1">
                            <div className="flex justify-between text-sm">
                                <h3 className="font-semibold">{item.company}</h3>
                                <p>{item.startDate} - {item.endDate}</p>
                            </div>
                            <p className="text-sm">{item.location}</p>
                            <p className="text-sm">{item.role}</p>
                        </div>
                    ))}
                </div>
            </div>
            <SkillSection />
        </div>
    )
}