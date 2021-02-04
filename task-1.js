export default function App(){
    let aplList = [
        {data: 'Animals', owner_id: 1},
        {data: 'Anime', owner_id: 1},
        {data: 'Anti-Malware', owner_id: 2},
        {data: 'Art Design', owner_id: 3},
        {data: 'Books', owner_id: 3},
        {data: 'Business', owner_id: 2},
        {data: 'Calendar', owner_id: 1},
        {data: 'Cloud Storage', owner_id: 2},
        {data: 'File Sharing', owner_id: 2},
        {data: 'Animals', owner_id: 3},
        {data: 'Continuous Integration', owner_id: 3},
        {data: 'Cryptocurency', owner_id: 1}
    ];
    return (
        <div>
            Some List:
            <ul>
                {appList.map(el => (
                    <li key={uuid()}>{el.data}</li>
                ))}
            </ul>
        </div>
    );
}