# Lallans Wabsteid Astro

This is the Scots Leid Associe website, implemented in [Astro](https://astro.build/).

## Gettin yokit

```bash
git clone https://github.com/Sycamost/lallans-wabsteid-astro.git \
  && cd lallans-wabsteid-astro \
  && npm install \
  && npm run dev
```

## Contributing

### All you need to edit the website

- Has a text editor or IDE and can use it to edit text files.
- Can write Markdown. (Beginners can learn in an afternoon by following the
  [getting started guide](https://www.markdownguide.org/getting-started/)!)
- Has a [GitHub](https://github.com/join) account.
- Can use Git to clone, pull, push, stage files, commit staged files, branch and checkout. Here's a
  great [beginner's tutorial to Git](https://www.atlassian.com/git) and here's another great,
  interactive [Git tutorial focusing on branching](https://learngitbranching.js.org/).
- Can use GitHub to make a fork and make a Pull Request back into the upstream repository. Here's
  [a basic GitHub tutorial](https://docs.github.com/en/get-started/quickstart/hello-world) and
  here's a [GitHub guide to forking](https://docs.github.com/en/get-started/quickstart/fork-a-repo).
- Can use a [command-line terminal](https://www.freecodecamp.org/news/command-line-for-beginners/).
- Can use [NPM](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/) to install
  dependencies and run scripts.

### General guidance

1. If you haven't already, fork the repository, and clone your fork.
2. Make a suitably named branch on your fork.
3. Make your desired changes (see sections below for common cases).
4. Commit and push them on your branch.
5. Make a Pull Request to merge your changes into `Sycamost/deployment-staging`.
6. A code owner (probably the Scots Language Society Webmaster) will review your Pull Request, ask
   for any necessary changes, and when satisfied, merge it into `Sycamost/deployment-staging`. (This
   will update the [staging deployment](#cicd) on
   [staging.scotsleidassocie.org](https://staging.scotsleidassocie.org).)
7. Code owners will merge `Sycamost/deployment-staging` into `Sycamost/deployment-production` at
   their discretion. (This will update the production deployment on
   [scotsleidassocie.org](https://scotsleidassocie.org).)

### Coding style

Coding style is enforced by ESLint and Prettier. These tools are run on a commit hook, and you will
not be able to commit if they fail. Please refrain from using `git commit --no-verify` except in
extraordinary cases, and make it clear in your Pull Request when you have done so.

### Writing a news post

Follow this guidance alongside the [general guidance](#general-guidance).

1. Copy and paste an existing news article in both English and Scots. You will find these in
   `src/content/news/en-GB` and `src/content/news/scots` respectively.
2. Rename the news article following the existing pattern, which is the date of publication in
   `YYYY-MM-DD` format followed by the title in
   [kebab case](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/#whatiskebabcaseanamekebabcasea)
   and the `.mdx` file extension. For example, `2023-12-24-eiks-an-ens-3000.mdx` would be Eiks an
   Ens 3000, published on the 24th of December 2023.
3. Edit the news articles to contain your desired content.
4. Check it looks OK by running the website locally with `npm install && npm start`.

### Adding an issue of Lallans

Follow this guidance alongside the [general guidance](#general-guidance).

1. Add the issue number to `src/types/LallansIssueNumber.d.ts`.
2. Add the original issue cover photo as `src/images/lallans/issueXYZ.jpg`, where `XYZ` is the issue
   number. Most of the examples are `.jpg`, but the file type isn't important.
3. Make copies of the cover image that are scaled to 192 and 274 pixels wide. Name them
   `issueXYZ-192w.jpg` and `issueXYZ-274w.jpg` respectively.
4. Copy one of the existing Lallans issues in `src/data/lallans` and name the copy `issueXYZ.ts`.
5. Edit the file you just made with the new issue's information, including the locations of the
   correctly scaled cover images that you just made.
6. Import that data file into the Lallans data index file, `src/data/lallans/index.ts`.
7. Check that everything's working: the issue should appear at the top on the Lallans page,
   `/furthsettins/lallans`, and the issue information should appear at `/furthsettins/lallans/XYZ`.
   Check both the English and Scots versions.

### Adding a Scotsoun release

Follow this guidance alongside the [general guidance](#general-guidance).

1. Add the release ID to `src/types/ScotsounId.d.ts`.
2. Add the original cover image as `src/images/scotsoun/scotsounXYZ.jpg`, where `XYZ` is the release
   ID. Most of the examples are `.jpg`, but the file type isn't important.
3. Make a copy of the cover image which is scaled to 192 pixels wide, and name it
   `scotsounXYZ-192w.jpg`.
4. Copy one of the existing Scotsoun releases in `src/data/scotsoun` and name the copy
   `scotsounXYZ.ts`.
5. Edit the file you just made with the new release's information, including the location of the
   correctly scaled cover image that you just made.
6. Import that data file into the Scotsoun data index file, `src/data/scotsoun/index.ts`.
7. Check that everything's working: the release should appear at the top on the Scotsoun page,
   `/furthsettins/scotsoun`, and the release information should appear at
   `/furthsettins/scotsoun/XYZ`. Check both the English and Scots versions.

## Infrastructure

The deployment infrastructure for the website is in four parts: the domains, the SSL certificates,
the hosting, and the CI/CD.

### Domains

The website is served on two domain names: [lallans.co.uk](https://www.lallans.co.uk) and
[scotsleidassocie.org](https://scotsleidassocie.org). The lallans.co.uk domain is legacy, but will
redirect to scotsleidassocie.org until at least September 2024.

Firstly, lallans.co.uk is registered with [JoomlaWired](https://www.joomlawired.com), a hosting
company specialising in hosting Joomla! and WordPress websites. We used to host a Joomla! website
with them, hence the connection. We don't host anything with them any more, but we still rent the
lallans.co.uk domain from them. The [Scots Language Society Webmaster](mailto:lallans@hotmail.co.uk)
should have access to JoomlaWired.

Redirecting requests to lallans.co.uk to scotsleidassocie.org is handled by [Vercel](#hosting).

Meanwhile, scotsleidassocie.org is rented from AWS. Again, the Webmaster should have access to the
AWS Console.

### SSL certificates

The SSL certificate for scotsleidassocie.org is bought from AWS Certificates Manager. Again, the
Webmaster should have access to the AWS Console.

### Hosting

The website is hosted on [Vercel](https://vercel.com/sycamost/lallans-wabsteid-astro). Because we
have the free plan, unfortunately only the Webmaster can access the Vercel dashboard.

Vercel also handles redirecting from lallans.co.uk to scotsleidassocie.org.

### CI/CD

Our CI/CD pipeline is, thanks to the fantastic integration between GitHub and Vercel, no-code! We
just need to make commits to the repo to see them deployed automagically.

Ideally, we should check everything's working on deployment before everyone on the internet starts
looking at it. For that reason, we have a staging deployment at
[staging.scotsleidassocie.org](https://staging.scotsleidassocie.org). To update the staging
deployment, simply commit to `deployment-staging` by making a Pull Request and getting it approved
by a code owner and then merged.

To update production, you'll want to first merge your changes into `deployment-staging` by making a
Pull Request and getting it approved and merged. Once you've done that, given it five minutes to
deploy, and you've checked that everything looks good on
[staging.scotsleidassocie.org](https://staging.scotsleidassocie.org),
[make a Pull Request to merge deployment-staging into deployment-production](https://github.com/Sycamost/lallans-wabsteid-astro/compare/deployment-production...deployment-staging).
Once that Pull Request is approved by a code owner, merge it in and it should update production in
under five minutes.

## Authentication

This website implements [WebAuthn](https://webauthn.guide) for user authentication.

### Registration flow

1. A user goes to the signup page, `/sign-up` and enters their username and display name.
2. That sends their details to `GET /registration` on the backend.
3. If a user with the provided username already exists, the flow fails and the user is directed to
   log in or provide a different username. (TODO!)
4. Otherwise, the backend returns registration options.
5. On the client, these registration options are handed to the user's authenticator, which will
   generate a public-private keypair and expose the public key. The authenticator might be a
   biometric method, such as facial or fingerprint recognition, a PIN, or a physical key, depending
   on what is available to the user.
6. The public key is passed back to the backend at `POST /registration` to verify the registration
   response from the authenticator.
7. If the verification was not successful, the user is informed of the failure and directed to try
   again or get in touch to get help.
8. If the verification was successful, the user is informed of this and logged in.
