const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";



function highlightKeywords(template, keywords) {
    let newKeywordsArray = keywords.map(item => item = `<span class='highlight'>${item}</span>`);

    return template.replace(/\\?\${(\d+)}/g, (match, index) => newKeywordsArray[index]);
}

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);


