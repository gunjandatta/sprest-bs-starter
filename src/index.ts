import { Helper } from "gd-sprest-bs";
import { Configuration } from "./cfg";

// Create the global variable for this solution
window["MyProject"] = {
    Configuration
}

// Notify SharePoint that this library is loaded (Optional)
Helper.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("my-project");