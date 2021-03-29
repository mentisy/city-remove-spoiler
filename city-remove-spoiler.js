/**
 * @author Alexander Volle
 * @description Removes the result from all matches in Manchester City+ full matches replay
 * @since 2021-03-29
 */

// Function to replace result with a question mark
const removeSpoiler = (string) => {
    return string.replace(/[0-9]+-[0-9]+/gm, '?');
}

// Remove the spoiler from the page title
document.title = removeSpoiler(document.title);

// Remove the spoiler from both index page and view page
const matchHeadings = document.querySelectorAll('.article-preview__heading, .article-header__title');
matchHeadings.forEach(matchHeading => {
    matchHeading.innerText = removeSpoiler(matchHeading.innerText);
})
