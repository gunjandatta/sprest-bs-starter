import { Configuration } from "./cfg";
import { Project } from "./components";
import Strings from "./strings";

// Create the global variable for this solution
window[Strings.GlobalVariable] = {
    Configuration
}

// Get the project element
let el = document.querySelector(Strings.AppElementId);
if (el) {
    // Initialize the solution
    new Project(el);
} else {
    // Log
    console.error("[" + Strings.ProjectName + "] Error finding the element with id '" + Strings.AppElementId + "'");
}