import { basicTypesNumber, basicTypesString, arrayTypesExample, specialTypesExample } from "../examples/basicTypes/examples";
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

// Then register the languages you need
hljs.registerLanguage('typescript', typescript);

// Need references to the buttons in order to add event listeners
const basicTypesButton = document.querySelector("#basicTypesButton")
const arrayTypesButton = document.querySelector("#arrayTypesButton")
const specialTypesButton = document.querySelector("#specialTypesButton")

// Need references to the card elements in order to update the content
const cardTitle = document.querySelector(".card-title")
const cardExplanation = document.querySelector(".cardExplanation")
const cardCode = document.querySelector("#cardCode")

// Add event listeners to the buttons
if (basicTypesButton) {
    basicTypesButton.addEventListener("click", () => loadExample("basic"))
}
if (arrayTypesButton) {
    arrayTypesButton.addEventListener("click", () => loadExample("array"))
}
if (specialTypesButton) {
    specialTypesButton.addEventListener("click", () => loadExample("special"))
}

// Have loadExample function load the imported example functions
function loadExample (exampleType: string) {
    console.log(`Loading example for ${exampleType} type`)
    let chosenExampleType
    switch (exampleType) {
        case "basic":
            chosenExampleType = basicTypesNumber()
            break
        case "array":
            chosenExampleType = arrayTypesExample()
            break
        case "special":
            chosenExampleType = specialTypesExample()
            break
        default:
            chosenExampleType = basicTypesNumber()
    }
    if (cardTitle && cardExplanation && cardCode) {
        cardTitle.textContent = chosenExampleType.title
        cardExplanation.textContent = chosenExampleType.explanation
        cardCode.innerHTML = hljs.highlight(
            chosenExampleType.code,
            { language: 'typescript' }
          ).value
    }

}
/*
<h2 class="card-title">Card Title</h2>
<p class="cardExplanation"></p>
<div class="mockup-code">
    <pre>
        <code id="cardCode">
const myName: string = "Eliza";
const myAge: number = 25;
const hasPet: boolean = true;
        </code>
    </pre>
</div> */
