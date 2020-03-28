import { Components } from "gd-sprest-bs";
import Strings from "../strings";

// Main render function
export class Project {
    /**
     * Renders the project.
     * @param el - The element to render the main solution to.
     */
    constructor(el: Element) {
        // Render the solution
        this.render(el);
    }

    /**
     * Main render method
     * @param el - The element to render the main solution to.
     */
    private render(el: Element) {
        // Render a jumbotron
        Components.Jumbotron({
            el,
            title: Strings.ProjectName,
            content: Strings.ProjectDescription
        });
    }
}