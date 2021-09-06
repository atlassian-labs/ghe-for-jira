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