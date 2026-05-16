import { contacts } from "~/utils/data";

export default function Footer() {
    return (
			<div className="md:max-w-4xl mx-auto md:p-8 p-4 grid md:grid-cols-2 grid-cols-1 rounded-lg md:h-[50vh] gap-8 md:mb-0 mb-12 dark:text-white">
				<div className="rounded-lg w-full justify-center md:text-start text-center md:mb-4">
					<h2 className="text-6xl font-bold">Contacts</h2>
					<p className="text-lg">
						If you want to get in touch 👋, feel free to reach out to me on link
						below.
					</p>
				</div>
				<div className="flex md:flex-col md:justify-start justify-center gap-4 md:pl-8">
					{contacts.map((contact, index) => (
						<div key={index} className="flex">
							<a
								href={contact.value}
								target="_blank"
								rel="noopener noreferrer"
								className="flex gap-2 items-center">
								<img
									src={contact.type}
									alt={`Contact ${index + 1}`}
									className="w-10 h-10 md:rotate-12 rotate-0"
								/>
								<span className="md:block hidden caveat-ft text-xl">
									{contact.label}
								</span>
							</a>
						</div>
					))}
				</div>
			</div>
		);
}