var quotes = ["“Be yourself; everyone else is already taken.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”",
    "“In three words I can sum up everything I've learned about life: it goes on.”",
    "“If you tell the truth, you don't have to remember anything.”",
    "“To live is the rarest thing in the world. Most people exist, that is all.”",
    "“Without music, life would be a mistake.”"
    ];


var author = ["― Oscar Wilde", "― Albert Einstein", "― Frank Zappa","― Marcus Tullius Cicero","― Mae West","― Mahatma Gandhi",
 "― Robert Frost","― Mark Twain","― Oscar Wilde","― Friedrich Nietzsche"];




function randomquote() {
    var copyarrquot = quotes.slice();
    var copyauthor = author.slice();
    var index = Math.floor(Math.random() * copyarrquot.length);
    var newquotes = copyarrquot[index];
    var newauthor = copyauthor[index];
    quotes = copyarrquot;
    author = copyauthor;
    if(copyarrquot.length==0)
    {
        newauthor='...';
        newquotes='...';
    }
    document.getElementById('quote').innerHTML = newquotes;
    document.getElementById('author').innerHTML = newauthor;
    copyarrquot.splice(index, 1);
    copyauthor.splice(index, 1);
}

