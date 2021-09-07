# Forge Hello World (Typescript)

This project contains a Forge app written in Typescript that displays `Hello World!` in a Confluence macro.

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Run `npm i` inside the root directory **and** inside the client directory.
-
- Modify your app by editing the `src/index.ts` file.

- Build and deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

## Local development
- `cd client && npm start`. This will start the webpack dev server on port 8080.
- From within the root directory, run `forge tunnel`. This will allow you to see local changes in the app.

If you make changes to the manifest.yml file e.g. update the title value for `jira:adminPage:`, you will need to run `npm run build` from within the client directory to see these changes take affect.

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
