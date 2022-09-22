const testSimpleWordCount = () => {
    const testString = 'I have four words!';
    if (getWordCount(testString) !== 4) {
        console.error('Simple getWordCount failed!');
    }
}

const testEdgeWordCount = () => {
    const testString = '             ';
    if (getWordCount(testString) !== 0) {
        console.error('Edge getWordCount failed!');
    }
}

const testSimpleLetterCount = () => {
    const testString = 'I have twenty one letters!';
    if (getLetterCount(testString) !== 21) {
        console.error('Simple getLetterCount failed!');
    }
}

const testEdgeLetterCount = () => {
    const testString = '")(&;//!!';
    if (getLetterCount(testString) !== 0) {
        console.error('Edge getLetterCount failed!');
    }
}

//Imagine the following data object as a comment on a website like Reddit:

const commentToTest = {
    content: '1',
    subComments: [
        { content: '1-A', subComments: [] },
        {
            content: '1-B', subComments: [
                { content: '1-B-a', subComments: [] }
            ]
        },
        {
            content: '1-C', subComments: [
                {
                    content: '1-C-a', subComments: [
                        { content: '1-C-a-i', subComments: [] },
                        { content: '1-C-a-ii', subComments: [] }
                    ]
                },
                { content: '1-C-b', subComments: [] }
            ]
        },
        { content: '1-D', subComments: [] }
    ]
};
//Each comment can have its own sub-comments, and each of those can have their own sub-comments etc.,
// and you have no way of knowing in advance how many layers there will be.Let's say you want to print
// every single comment to the console on a separate line. In this case, a recursive function can do the trick:

const getAllComments = (comment) => {
    let allComments = comment.content;
    for (let subComment of comment.subComments) {
        allComments += '\n' + getAllComments(subComment);
    }
    return allComments;
}

//its exercise time
export class Book {
    constructor(title, author, description, pages, currentPage, read) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;
    }
}

const merlin = new book('The rise of Merlin', 'Adegbenjo Elijah', 'A good read', 234, 234, true);
const ajasa = new book('Chronicles of Ajasa', 'David Moyes', 'A legend and history', 1000, 0, false);
const betty = new book('Betty is in town', 'Fagoroyo Temidayo', 'civility and its repercussions', 38, 38, true);
const school = new book('School at its best', 'Micheal Faraday', 'The science of formal education', 200, 200, true);

export const books = [merlin, ajasa, betty, school];

