const url = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b5a2778267mshd7408a459662228p1d985ejsnc55c695f8294',
		'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com'
	}
};

async function fetchQuotes() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        return `"${result[0].text}" ~${result[0].author}`;
        
    } catch (error) {
        console.error(error);
        return "Could not fetch quote";
    }
}

const myButton = document.getElementById('my-button');

myButton.addEventListener('click', addElement);

async function addElement() {
    const newDiv = document.createElement("div");

    let quoteText = await fetchQuotes();

    const newContent = document.createTextNode(quoteText);

    const newContElem = document.createElement("h2");

    newContElem.appendChild(newContent);

    let randMsg = document.createTextNode("Your Quote Is: " );

    const randMsgElem = document.createElement("p");

    randMsgElem.appendChild(randMsg);

    newDiv.appendChild(randMsgElem);

    newDiv.appendChild(newContElem);

    const currentDiv = document.getElementById("d2");

    currentDiv.appendChild(newDiv);
}