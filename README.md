# Starter Solution

A basic solution with the core components setup.

## Assets

This folder contains templates or associated files required with installation, configuration or the solution.

### index.html

This file will contain the html template for the solution and JavaScript reference. This will be referenced by a content editor webpart.

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

## Installing the Solution

### Step 1 - Upload the Assets

Upload the following files to one of the three SharePoint storage recommendations.

* assets/index.html
* assets/project.js

For this example we will assume it's in the https://[tenant].sharepoint.com/clientsideassets/solution/ folder.

### Step 2 - Load the Library

1) Ensure you are in a "Classic" page, and press F-12 or Ctrl+Shift+I to access the browser console window.

2) Under the "Console" tab, load the library by typing:

```var s=document.createElement("script"); s.src="/clientsideassets/solution/project.js"; document.head.appendChild(s);```

3) Install the solution

```Project.Configuration.install();```

## Uninstalling the Solution

1) Ensure you are in a "Classic" page, and press F-12 or Ctrl+Shift+I to access the browser console window.

2) Access a page that references the solution, or load the library by typing the following under the "Console" tab:

```var s=document.createElement("script"); s.src="/clientsideassets/solution/project.js; document.head.appendChild(s);```

3) Uninstall the solution

```Project.Configuration.uninstall();```