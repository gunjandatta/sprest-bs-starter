# Starter Solution

A basic solution with the core components setup. Reference the [Wiki](https://github.com/gunjandatta/sprest-bs-starter/wiki) for a walkthrough of using this project.

## Global Variables

The ```src/strings.ts``` file contains the global variables defined for the solution.

## Assets

The ```assests``` folder contains templates or associated files required with installation, configuration or the solution.

### index.html

This file will contain the main element to render the solution to, and references the solution's JavaScript file. A helper method will be used to add a content editor webpart to a specified page.

### SharePoint Storage

Recommended to put the solution assets in one of the following locations:

#### 1) SharePoint Online Library using CDN

Use the https://[tenant].sharepoint.com/clientsideassets/[solution]/ folder. Reference the _[O365 CDN w/ SPO Documentation](https://docs.microsoft.com/en-us/office365/enterprise/use-office-365-cdn-with-spo)_ documentation for additional information.

#### 2) SharePoint Common Library

If you are unable to use the O365 CDN, you can still create a library in the https://[tenant].sharepoint.com/ site and use it the same way.

#### 3) Site Collection

Depending on the solution, it may make sense for it to have it's own site collection. Use the https://[tenant].sharepoint.com/sites/[solution]/siteassets library to store the files.

## Building the Solution

### Debug

```npm run build``` outputs ```dist/project.js```

### Production

```npm run prod``` outputs ```dist/project.min.js```