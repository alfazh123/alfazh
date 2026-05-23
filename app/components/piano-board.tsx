import { useClickKeyEvent, useKeyClick } from "~/hook/usePiano"
import { blackKeysPiano, keysPiano } from "~/utils/data"

export default function PianoBoard() {
    return (
        <div className="mt-20 shadow-2xl border"> 
            <div className="flex relative">
                {keysPiano.map((item, id) => (
                    <PianoKey key={id} id={item.id} tone={item.tone}/>
                ))}
                {blackKeysPiano.map((item, id) => (
                    <PianoKey key={id} black id={item.id} tone={item.tone} position={item.position} />
                ))}
            </div>
        </div>
    )
}

export function PianoKey({id, tone, black, position}: {id: string, tone: string, black?: boolean, position?: string}) {
    const {clicked} = useKeyClick({id});

    function handleClickKey() {
        useClickKeyEvent({id})
    }

    return (
        (!black ? 
            <div className={`aspect-8/24 h-64 bg-slate-50 hover:bg-slate-100 flex items-end justify-center font-bold text-black border ${clicked && 'bg-slate-100'}`} onClick={handleClickKey}>
                {tone}
            </div>
         : 
            <div className={`absolute top-0 ${position} text-white aspect-8/24 flex items-end justify-center font-bold h-40 bg-zinc-700 border ${clicked && 'bg-zinc-900'}`} onClick={handleClickKey}>
                {tone}
            </div>
        )
    )
}

// export function BlackPianoKey({position, id}: {position: string, id: string}) {
//     const {clicked} =useKeyClick({id});

//     function handleClickKey() {
//         useClickKeyEvent({id})
//     }

//     return (
//         <div className={`absolute top-0 ${position} aspect-8/24 h-40 bg-zinc-700 border ${clicked && 'bg-zinc-900'}`} onClick={handleClickKey} />
//     )
// }