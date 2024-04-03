import { useEffect, useState } from "react";

type TProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>
}

interface IProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    total: (number1: number, number2: number) => number
}

type People = {
    name: string;
    age: number;
    location?: string
}

export default function Count({ count, setCount, total }: IProps) {
    const [user, setUser] = useState<People>()
    console.log('total', total(12, 12))

    useEffect(() => {
        setUser({
            name: 'oke',
            age: 12
        })
    }, [])

    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
    )
}