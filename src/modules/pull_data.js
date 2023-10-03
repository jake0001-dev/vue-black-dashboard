
async function pullData() {
    await fetch(
        Headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': ''
        },
        'https://pastebin.com/raw/bMWVEJ06').then(res => 
        res.text().then(data => {
            console.log(data);
            return data;
        })
    );
}

pullData();