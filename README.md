# MLSA (MT Crime Victims Help) 

[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors)

## Get started

```
git clone git@github.com:electriccitizen/mlsa.git

cd mlsa

npm install 

gatsby develop
```

Typically you will want to leave one terminal window running for hot reloading, etc. You'll 
also use this window when you need to re-start Gatsby, or clear the cache with ```gatsby clean```.

## Create a feature branch (e.g.)

```
git checkout -b MT-00-myfeature

git commit -am "MT-00: a descriptive commit message."

git push origin HEAD

```

In a typical workflow, you will create a feature branch that is tagged with your ticket number and a 
short description, and then push changes to your branch. When you first push a new branch, you will
trigger a new ```branch deploy``` at Netflify where you can review your work. You can continue
pushing changes to your branch as needed, and until it is ultimately merged into master via pull
request. 

NOTE: On the Netflify free plan you only get one admin account, so you'll either need to ask me for
your deploy URL the first time, or you can intuit it based on your branch name. e.g. 

branch ```MT-41-escape``` will provide:

https://mt-41-escape--mlsa.netlify.com (note the double-hyphen).

The initial build will take awhile, and subsequent builds should complete in a few minutes. If/when
the client moves to a paid account we can have multiple logins, but in the meantime I'm happy to
share my login with anybody who wants to monitor builds. 


## Push to master

Once your work has been through code review, QA, and client review it can be merged into master via
pull request. This will automatically trigger a new build on Netlify and your work will be 
merged into the production site. READ THE NEXT SECTION.

## KEEP PREVIEW IN SYNC

In order to prevent builds for the preview--mlsa.netlify.com site from failing (or looking weird), the preview branch MUST always be kept in sync with the master branch. To do this simply merge master into preview every time you push to master.

## Format and lint
* `npm run analyze` - See what ESLint and Prettier can fix
* `npm run fix` - Run Prettier and ESLint with the `--fix` option

## Build your site
Use `npm run build` to build your site for production.

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/oddstronaut/gatsby-starter-tailwind)

## Resources
* [Gatsby documentation](https://www.gatsbyjs.org/docs/)
* [Tailwind documentation](https://tailwindcss.com/docs/what-is-tailwind/)
* [Prettier documentation](https://prettier.io/docs/en/index.html)
* [ESLint documentation](https://eslint.org/docs/user-guide/configuring)

## License
[MIT](https://github.com/oddstronaut/gatsby-starter-tailwind/blob/master/LICENSE.md)

