import { useEffect, useState } from "react"
import CommandPalleteSection from "./command-pallete-section";

const postsModule = import.meta.glob("../posts/*.mdx", { eager: true });

interface PostProps {
    name: string;
    link: string;
}

interface CommandPalleteProps {
    isOpen: boolean;
    handleOpen: () => void;
    handleClose: () => void;
}

export default function CommandPallete({show, handleOpen, handleClose}: {show: boolean, handleOpen: () => void, handleClose: () => void}) {
    const [search, setSearch] = useState<string>('');
    const [post, setPost] = useState<PostProps[]>([])

    useEffect(() => {
        if (!window) return;

        Object.entries(postsModule).forEach(([path, module], id) => {
			const { title } = module.frontmatter || {};
			const slug = '/blog/' + path.split("/").pop()?.replace(".mdx", "") || "";
			setPost((prev) => [...prev, { name: title, link: slug }]);
		});

        function handleHotKeys(e: KeyboardEvent) {
            if (show === false) {
                if (e.key === 'k') {
                    e.preventDefault();
                    handleOpen();

                    document.body.classList.add('no-scroll')
                }
            } else {
                if (e.shiftKey && e.key.toLocaleLowerCase() === 'k') {
                    handleClose();
                    document.body.classList.remove('no-scroll')
                }
            }
        }

        window.addEventListener('keydown', handleHotKeys);

        return () => {
            window.removeEventListener('keydown', handleHotKeys);
            setPost([]);
        }
    }, [show])

    const searchMenus = {
        navigation: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'About',
                link: '/about'
            },
            {
                name: 'Project',
                link: '/projects'
            },
            {
                name: 'Blog',
                link: '/blog'
            }
        ],
        socials: [
            {
                name: 'Email',
                link: 'mailto:alfazh.work@gmail.com'
            },
            {
                name: 'Github',
                link: 'https://github.com/alfazh123'
            },
            {
                name: 'Likedin',
                link: 'https://www.linkedin.com/in/ahmd-mufahras-li-alfazh-assardew'
            },
            {
                name: 'Medium',
                link: 'https://medium.com/@alfazh291'
            },
            {
                name: 'Instagram',
                link: 'https://instagram.com/ahmd_alfazh'
            }
        ]
    }

    const propNav = {
        sectionMenu: searchMenus.navigation,
        search: search,
        title: 'Navigation',
        icon: '/command-pallete/link.svg'
    }

    const propSocial = {
        sectionMenu: searchMenus.socials,
        search: search,
        title: 'Socials',
        icon: '/command-pallete/link.svg'
    }

    const propPosts = {
        sectionMenu: post,
        search: search,
        title: 'Posts',
        icon: '/command-pallete/pen.svg'
    }

    return (
        <div className={`w-full h-screen backdrop-blur-md z-20 bg-slate-300/20 ${show ? 'fixed' : 'hidden'}`}>
            <div className="relative flex justify-center items-center h-screen">
                <div className="absolute top-40">
                    <p className="text-xl text-slate-500"><span className="px-2 bg-slate-200 rounded">Shift</span> + <span className="px-2 bg-slate-200 rounded">K</span> to close Command Pallete</p>
                </div>
                <div className="absolute top-50 bottom-50 flex flex-col max-w-2xl w-full h-fit bg-slate-100 px-4 py-2 rounded-2xl shadow-xl">
                    <div className="flex gap-2 justify-center items-center py-4">
                        <label htmlFor="search-bar">
                            <img
                                src='/command-pallete/magnifying-glass.svg'
                                alt="search"
                                className="w-4 h-4"
                                />
                        </label>
                        <input id="search-bar" type="text" placeholder="Type Title of post or feature" className="w-full focus:outline-0 focus:border-b focus:border-slate-500 cursor-text" value={search} onChange={(e) => {
                            setSearch(e.target.value)
                        }} />
                    </div>
                        {search.length != 0 && (
                            <div className="flex flex-col h-fit gap-4 overflow-y-scroll scrollbar">
                                <CommandPalleteSection
                                    props={propNav}/>
                                <CommandPalleteSection
                                    props={propSocial}/>
                                <CommandPalleteSection
                                    props={propPosts}/>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}