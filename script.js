// --- IMPORTANT: YOUR NOTES GO HERE ---
// To add a new note, simply add a new object to this array.
// Keep the structure consistent: { title, content, tags: [] }
const allNotes = [
    {
        title: "Introduction to GitHub Pages",
        content: "GitHub Pages allows you to host static websites directly from your GitHub repository. It's great for personal portfolios, project documentation, or simple blogs.",
        tags: ["github", "hosting", "web development"]
    },
    {
        title: "Markdown Syntax Basics",
        content: "Markdown is a lightweight markup language for creating formatted text using a plain-text editor. Key elements include headers (#), lists (*), bold (**), and italics (_).",
        tags: ["markdown", "writing", "syntax"]
    },
    {
        title: "JavaScript Array Methods",
        content: "Useful array methods include `map()`, `filter()`, `reduce()`, `forEach()`, and `find()`. These are essential for manipulating data in JavaScript.",
        tags: ["javascript", "programming", "arrays"]
    },
    {
        title: "Setting up a Python Virtual Environment",
        content: "Use `python -m venv myenv` to create a virtual environment, then `source myenv/bin/activate` (Linux/macOS) or `myenv\\Scripts\\activate` (Windows) to activate it.",
        tags: ["python", "development", "environment"]
    },
    {
        title: "CSS Flexbox Fundamentals",
        content: "Flexbox is a one-dimensional layout method for arranging items in rows or columns. Key properties include `display: flex`, `justify-content`, and `align-items`.",
        tags: ["css", "frontend", "layout"]
    },
    {
        title: "Remember to Back Up Your Code",
        content: "Regularly commit and push your changes to GitHub to ensure your code is backed up and you have a version history.",
        tags: ["git", "best practice", "security"]
    },
    {
        title: "Coffee Brewing Tips",
        content: "For a great cup of coffee, use freshly roasted beans, grind them just before brewing, and ensure your water temperature is around 90-96°C.",
        tags: ["hobby", "coffee"]
    }
    // --- ADD NEW NOTES ABOVE THIS LINE ---
    // Example:
    // {
    //     title: "My New Awesome Idea",
    //     content: "This is a brilliant new concept I need to remember. It involves [details here].",
    //     tags: ["idea", "future", "project"]
    // }
];
// --- END OF NOTES SECTION ---


const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const clearSearchButton = document.getElementById('clearSearchButton');
const notesDisplay = document.getElementById('notesDisplay');

// Function to display notes
function displayNotes(notesToDisplay) {
    notesDisplay.innerHTML = ''; // Clear previous notes

    if (notesToDisplay.length === 0) {
        notesDisplay.innerHTML = '<p class="no-notes-found">No notes found matching your search.</p>';
        return;
    }

    notesToDisplay.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.classList.add('note-card');

        const title = document.createElement('h2');
        title.textContent = note.title;

        const content = document.createElement('p');
        content.textContent = note.content;

        const tagsDiv = document.createElement('div');
        tagsDiv.classList.add('tags');
        if (note.tags && note.tags.length > 0) {
            note.tags.forEach(tag => {
                const tagSpan = document.createElement('span');
                tagSpan.textContent = tag;
                tagsDiv.appendChild(tagSpan);
            });
        }

        noteCard.appendChild(title);
        noteCard.appendChild(content);
        noteCard.appendChild(tagsDiv);
        notesDisplay.appendChild(noteCard);
    });
}

// Function to filter notes based on search term
function searchNotes() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        displayNotes(allNotes); // If search is empty, display all notes
        return;
    }

    const filteredNotes = allNotes.filter(note => {
        const titleMatch = note.title.toLowerCase().includes(searchTerm);
        const contentMatch = note.content.toLowerCase().includes(searchTerm);
        const tagMatch = note.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        return titleMatch || contentMatch || tagMatch;
    });

    displayNotes(filteredNotes);
}

// Event Listeners
searchButton.addEventListener('click', searchNotes);
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchNotes();
    }
});
clearSearchButton.addEventListener('click', () => {
    searchInput.value = ''; // Clear the input field
    displayNotes(allNotes); // Display all notes again
});


// Initial display of all notes when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayNotes(allNotes);
});