import { useEffect, useState, type ReactElement } from "react";

function playSound(soundUrl: string) {
    const note = new Audio(soundUrl)
    note.play();
}
export function usePiano() {
    useEffect(() => {

        if (!window) return;


        function handleKeys(e: KeyboardEvent) {
            switch (e.key) {
                case '1':
                    // const noteDo = new Audio('/sound/c.wav')
                    // noteDo.play();
                    playSound('/sound/c.wav')
                    break;
                case '2':
                    playSound('/sound/d.wav')
                    break;
                case '3':
                    playSound('/sound/e.wav')
                    break;
                case '4':
                    playSound('/sound/f.wav')
                    break;
                case '5':
                    playSound('/sound/g.wav')
                    break;
                case '6':
                    playSound('/sound/a.wav')
                    break;
                case '7':
                    playSound('/sound/b.wav')
                    break;
                case 'q':
                    playSound('/sound/db.wav')
                    break;
                case 'w':
                    playSound('/sound/eb.wav')
                    break;
                case 'e':
                    playSound('/sound/gb.wav')
                    break;
                case 'r':
                    playSound('/sound/ab.wav')
                    break;
                case 't':
                    playSound('/sound/bb.wav')
                    break;
            }
        }

        window.addEventListener('keydown', handleKeys)

        return () => {
            window.removeEventListener('keydown', handleKeys)
        }
    }, [])
}

export function useKeyClick({id}: {id: string}) {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (!window) return;

        function checkKey(e: KeyboardEvent) {
            if (e.key === id) {
                setClicked(true);
            }
        }

        function handleReset() {
            setClicked(false)
        }

        window.addEventListener('keydown', checkKey);
        window.addEventListener('keyup', handleReset);

        return () => {
            window.removeEventListener('keydown', checkKey);
            window.removeEventListener('keyup', handleReset);
        }
    }, [id])

    return {
        clicked
    }
}

export function useClickKeyEvent({id}: {id: string}) {
    switch (id) {
        case '1':
            // const noteDo = new Audio('/sound/c.wav')
            // noteDo.play();
            playSound('/sound/c.wav')
            break;
        case '2':
            playSound('/sound/d.wav')
            break;
        case '3':
            playSound('/sound/e.wav')
            break;
        case '4':
            playSound('/sound/f.wav')
            break;
        case '5':
            playSound('/sound/g.wav')
            break;
        case '6':
            playSound('/sound/a.wav')
            break;
        case '7':
            playSound('/sound/b.wav')
            break;
        case 'q':
            playSound('/sound/db.wav')
            break;
        case 'w':
            playSound('/sound/eb.wav')
            break;
        case 'e':
            playSound('/sound/gb.wav')
            break;
        case 'r':
            playSound('/sound/ab.wav')
            break;
        case 't':
            playSound('/sound/bb.wav')
            break;
    }
}