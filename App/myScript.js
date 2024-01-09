const questions = [
    "Date , Time and Day",
    "Area",
    "Random Integer",
    "Temperature Change",
    "Difference",
    "String Check",
    "Christmas",
    "Leap Year",
    "URL",
    "Mul & Div",
    "Sum",
    "Difference 19",
    "Check Numbers",
    "Check Integers",
    "Add Py",
    "Remove Char",
    "Mul of 3 or 7",
    "Front and Back",
    "Check bw 50...99",
    "Upper and Lowercase",
    "Capitalize Letter",
    "Number to hour and mins",
    "Return 20,30,40",
    "A+ or true"
];

for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const link = document.createElement("a");
    link.href = `../Excercise/./Question-${i + 1}/index.html`;
    link.textContent = question;
    sidebar.appendChild(link);
}

function setpage(url) {
    document.getElementById("demo").src = url;
}
var Links = document.querySelectorAll('.sidebar a');
Links.forEach(function(link){
    link.addEventListener('click', function(event){
       event.preventDefault();
       var linkURL = event.target.getAttribute('href');
       setpage(linkURL);
    });
});
setpage('../Excercise/./Question-1/index.html');

const questionLinks = document.querySelectorAll('.sidebar a');
const searchInput = document.getElementById('searchInput');
const notFound = document.getElementById('notFound');

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    let found = false;
    questionLinks.forEach(link => {
        const questionText = link.innerText.toLowerCase();
        const words = questionText.split(' ');
        const SearchTerm = words.some(word => word.startsWith(searchTerm));

        if (SearchTerm) {
            link.style.display = 'block';
            found = true;
        } 
        else {
            link.style.display = 'none';
        }
    });

    notFound.style.display = found ? 'none' : 'block';
});

let sortOrder = 'asc';

// function toggleSort() {
    
//     sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
//     sortarr(sortOrder);

//     const button = document.querySelector('.btn-primary');


//     button.classList.remove('btn-asc', 'btn-desc');

//     button.classList.add(sortOrder === 'asc' ? 'btn-asc' : 'btn-desc');

// }
function toggleSort() {
    sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    sortarr(sortOrder);

    const button = document.querySelector('.btn-primary');
    const sortImage = document.getElementById('sortImage');

    button.classList.remove('btn-asc', 'btn-desc');
    button.classList.add(sortOrder === 'asc' ? 'btn-asc' : 'btn-desc');

    sortImage.src = sortOrder === 'asc' ? './dropdown arrow.png' : './dropup.png';
}

function getSortOrder() {
    var sortOrder = document.querySelector('input[name="sortOrder"]:checked').value;
    return sortOrder;
}



let selectedQuestionIndex = 0;

function DefaultQuestion() {
    const storedIndex = localStorage.getItem('selectedQuestionIndex');

    questionLinks.forEach(function(link) {
        link.classList.remove('selected-question');
    });

    if (storedIndex !== null) {
        selectedQuestionIndex = parseInt(storedIndex); // Parse the stored index as an integer
        const storedQuestion = questionLinks[selectedQuestionIndex];
        storedQuestion.classList.add('selected-question');
        setpage(storedQuestion.getAttribute('href'));
    } else {
        const defaultQuestion = questionLinks[0];
        defaultQuestion.classList.add('selected-question');
        setpage(defaultQuestion.getAttribute('href'));
    }
}

DefaultQuestion();

questionLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        questionLinks.forEach(function(link) {
            link.classList.remove('selected-question');
        });
        var linkURL = event.target.getAttribute('href');
        setpage(linkURL);
        event.target.classList.add('selected-question');

        const clickedQuestionIndex = Array.from(questionLinks).indexOf(event.target);
        localStorage.setItem('selectedQuestionIndex', clickedQuestionIndex.toString()); // Store the clicked question index as a string
    });
});



function sortarr(order) {
    const sortedQuestions = [...questions];
    if (order === 'asc') {
        sortedQuestions.sort();
    } else if (order === 'desc') {
        sortedQuestions.sort().reverse();
    }

    const selectedQuestion = sortedQuestions.find(question => question === questions[selectedQuestionIndex]);

    questionLinks.forEach((link, index) => {
        link.textContent = sortedQuestions[index];
        link.href = `../Excercise/./Question-${questions.indexOf(sortedQuestions[index]) + 1}/index.html`;

        if (sortedQuestions[index] === selectedQuestion) {
            link.classList.add('selected-question');
        } else {
            link.classList.remove('selected-question');
        }
    });

    const searchTerm = searchInput.value.toLowerCase();
    let found = false;

    questionLinks.forEach((link, index) => {
        const questionText = sortedQuestions[index].toLowerCase();
        const words = questionText.split(' ');
        const searchTermFound = words.some(word => word.startsWith(searchTerm));

        if (searchTerm === '' || searchTermFound) {
            link.style.display = 'block';
            found = true;
        } else {
            link.style.display = 'none';
        }
    });

    notFound.style.display = found ? 'none' : 'block';
    setpage(`../Excercise/./Question-${questions.indexOf(selectedQuestion) + 1}/index.html`);
}
