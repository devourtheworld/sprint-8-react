let appList = [
    'Animals',
    'Anime',
    'Anti-Malware',
    'Art Design',
    'Books',
    'Business',
    'Calendar',
    'Cloud Storage',
    'File Sharing',
    'Animals',
    'Continuous Integration',
    'Cryptocurrence'
];
return (
    <div>
        Some data:
        <First firstList = {appList.map(el => el.toLocaleLowerCase())}/>
    </div>
)