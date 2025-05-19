interface Element {
    symbol: string;
    name: string;
    atomicNumber: number;

}


function ElementCard({ element }: { element: Element }) {
    return (
        <div className="card">
            <h2>{element.name}</h2>
            <p>Symbol: {element.symbol}</p>
            <p>Atomic Number: {element.atomicNumber}</p>
        </div>
    );
}