export default function Figure({url, text}: {url: string, text: string}) {
    return (
        <div className='flex flex-col'>
            <img 
                src={url}
                alt={text}
            />
            <span className='text-center mt-0 italic'>{text}</span>
        </div>
    )
}