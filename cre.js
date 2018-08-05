const keys = [
    [   /*red*/     "rb",
        "youtube", "https://www.youtube.com/",
        "reddit", "https://www.reddit.com/",
        "MM", "https://www.uta.edu/mymav",
        "netflix", "https://netflix.com/"
    ],
    [   /*yellow*/  "yb",
        "BB", "https://elearn.uta.edu",
        "amazon", "https://www.amazon.com/"
    ],
    [   /*white*/   "wb",
        "gmail", "https://mail.google.com",
        "github", "https://www.github.com"
    ],
    [   /*blue*/    "bb",
        "outlook", "https://outlook.office.com",
        "facebook", "https://www.facebook.com",
        "twitter", "https://www.twitter.com"
    ],
    [   /*green*/   "gb",
        "whatsapp", "https://web.whatsapp.com",
        "duolingo", "https://www.duolingo.com",
        "onion", "https://www.theonion.com"
    ],
];

const createBlocks = () => {
    let rows = []

    for(let i = 0; i < keys.length; i++){
        let blocks = []
        
        for(let j = 1; j < keys[i].length; ){
            blocks.push(<span><a href={keys[i][j+1]} target="blank_"><div className={"box " + keys[i][0]}>{keys[i][j]}</div></a><br/></span>)
            j += 2
        }

        rows.push(<div className="col-lg-2">{blocks}</div>)
    }

    return rows
}

const vis = (
    <div class="row">
        <div class="col-lg-1"></div>
        {createBlocks()}
        <div class="col-lg-1"></div>
    </div>
)

ReactDOM.render(
    vis,
    document.getElementById("root")
)