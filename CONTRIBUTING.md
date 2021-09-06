# Contribution Guide

## Getting Started with Forge

If you're new to Forge, you should build an example app with Forge following one of the [guides](https://developer.atlassian.com/platform/forge/getting-started/) to learn the concepts. 

## Create Your Own App "Instance"

Currently, a Forge app is owned by a single developer, so each developer has to create their own "instance" of the app to interact with.

To create your own app "instance" go into a different folder (not the folder of this codebase) and run:

```
forge create
```

When asked for an app name, type in `ghe-for-jira`. When asked for a template, you can choose any template.

This will create a fresh Forge app for you. Look into the `manifest.yml` file and copy the value of the property `app.id`. 

Paste that ID into the `manifest.yml` file of this codebase. 

Now you can interact with the app using the `forge` CLI commands.

Make sure you don't check your `app.id` into version control accidentally. This is awkward, but there's currently no way around this.

## Build the Admin Page

This app contributes an admin page to Jira. This page lives in its own Node project in `static/admin-page`. Change into this folder and run:

```
npm install
npm run build
```

## Deploy the App

Now, everything should be good to deploy the app with

```
forge deploy --no-verify
```

The `--no-verify` is currently necessary since the app uses internal modules that are not yet generally available.

## Install the App

Install the app into one of your Jira instances with

```
forge install
```

## Configure GitHub Enterprise

To make the app work, you need to configure the "web trigger URL" of the app as a webhook in GitHub Enterprise.

To get the web trigger URL, run

```
forge webtrigger <installation-id>
```

Use the installation ID you got from the previous step. Select the `webhook-receiver` web trigger and press Enter. You should see a long and cryptic URL. Copy that URL.

In GitHub Enterprise, in the repository or organization you want to connect, click on "Settings", and then select "Hooks" from the menu. Click on "Add webhook" and fill out the form:

* paste the URL from above into the field "Payload URL"
* select "application/json" as the "Content type"
* select "Send me everything" to send all events to that URL
  * alternatively, you can also select "Let me select individual events" and check the following events:
    * Pushes
    * Branch or tag creation
    * Pull requests
  * bear in mind that when you select only specific events, that you might need to update the events in the future, should the app support other events in the future
    
## Use the App

Create commits with Jira issue keys in the commit message, branches with Jira issue keys in the name, and pull requests with Jira issue keys in the title to automatically send them to Jira.