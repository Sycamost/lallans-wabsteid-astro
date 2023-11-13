# Lallans Wabsteid Astro

This is the Scots Leid Associe website, implemented in [Astro](https://astro.build/).

## Gettin yokit

```bash
git clone https://github.com/Sycamost/lallans-wabsteid-astro.git \
  && cd lallans-wabsteid-astro \
  && npm install \
  && npm run dev
```

## All you need to edit the website

* Has a text editor or IDE and can use it to edit text files.
* Can write Markdown. (Beginners can learn in an afternoon by following the
  [getting started guide](https://www.markdownguide.org/getting-started/)!)
* Has a [GitHub](https://github.com/join) account.
* Can use Git to clone, pull, push, stage files, commit staged files, branch and
  checkout. Here's a great [beginner's tutorial to Git](https://www.atlassian.com/git)
  and here's another great, interactive
  [Git tutorial focusing on branching](https://learngitbranching.js.org/).
* Can use GitHub to make a fork and make a Pull Request back into the upstream
  repository. Here's
  [a basic GitHub tutorial](https://docs.github.com/en/get-started/quickstart/hello-world)
  and here's a
  [GitHub guide to forking](https://docs.github.com/en/get-started/quickstart/fork-a-repo).
* Can use a [command-line terminal](https://www.freecodecamp.org/news/command-line-for-beginners/).
* Can use [NPM](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)
  to install dependencies and run scripts.

## Writing a news post

1. If you haven't already, fork the repository, and clone your fork.
2. Copy and paste an existing news article in both English and Scots. You will
   find these in `src/content/news/en-GB` and `src/content/news/scots` respectively.
3. Rename the news article following the existing pattern, which is the date of
   publication in `YYYY-MM-DD` format followed by the title in
   [kebab case](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/#whatiskebabcaseanamekebabcasea)
   and the `.mdx` file extension. For example, `2023-12-24-eiks-an-ens-3000.mdx`
   would be Eiks an Ens 3000, published on the 24th of December 2023.
4. Edit the news articles to contain your desired content.
5. Check it looks OK by running the website locally with `npm install && npm start`.
6. When it looks OK, stage, commit and push your new news articles.
7. Make a pull request to merge your new news articles into the `dev` branch upstream.
8. Once a code owner approves your pull request, it'll get merged into `dev`, and
   (unless you yourself are a code owner) it is from that point no longer your
   problem! From that point, it'll be live on
   [staging.scotsleidassocie.org](https://staging.scotsleidassocie.org),
   and it'll go live on [scotsleidassocie.org](https://scotsleidassocie.org) once
   a code owner merges `dev` into `main`.

## Adding an issue of Lallans

1. If you haven't already, fork the repository, and clone your fork.
2. Add the issue number to `src/types/LallansIssueNumber.d.ts`.
3. Add the original issue cover photo as `src/images/lallans/issueXYZ.jpg`, where `XYZ`
   is the issue number. Most of the examples are `.jpg`, but the file type isn't important.
4. Make copies of the cover image that are scaled to 192 and 274 pixels wide.
   Name them `issueXYZ-192w.jpg` and `issueXYZ-274w.jpg` respectively.
5. Copy one of the existing Lallans issues in `src/data/lallans` and name the
   copy `issueXYZ.ts`.
6. Edit the file you just made with the new issue's information, including the
   locations of the correctly scaled cover images that you just made.
7. Import that data file into the Lallans data index file, `src/data/lallans/index.ts`.
8. Check that everything's working: the issue should appear at the top on the
   Lallans page, `/furthsettins/lallans`, and the issue information should appear
   at `/furthsettins/lallans/XYZ`. Check both the English and Scots versions.

## Adding a Scotsoun release

1. If you haven't already, fork the repository, and clone your fork.
2. Add the release ID to `src/types/ScotsounId.d.ts`.
3. Add the original cover image as `src/images/scotsoun/scotsounXYZ.jpg`, where `XYZ`
   is the release ID. Most of the examples are `.jpg`, but the file type isn't important.
4. Make a copy of the cover image which is scaled to 192 pixels wide, and name it
   `scotsounXYZ-192w.jpg`.
5. Copy one of the existing Scotsoun releases in `src/data/scotsoun` and name the
   copy `scotsounXYZ.ts`.
6. Edit the file you just made with the new release's information, including the
   location of the correctly scaled cover image that you just made.
7. Import that data file into the Scotsoun data index file, `src/data/scotsoun/index.ts`.
8. Check that everything's working: the release should appear at the top on the
   Scotsoun page, `/furthsettins/scotsoun`, and the release information should appear
   at `/furthsettins/scotsoun/XYZ`. Check both the English and Scots versions.

## Infrastructure

The deployment infrastructure for the website is in four parts: the domains,
the SSL certificates, the hosting, and the CI/CD.

### Domains

The website is served on two domain names: [lallans.co.uk](https://www.lallans.co.uk)
and [scotsleidassocie.org](https://scotsleidassocie.org). The lallans.co.uk
domain is legacy, but will redirect to scotsleidassocie.org until at least
September 2024.

Firstly, lallans.co.uk is registered with [JoomlaWired](https://www.joomlawired.com),
a hosting company specialising in hosting Joomla! and WordPress websites. We used
to host a Joomla! website with them, hence the connection. We don't host
anything with them any more, but we still rent the lallans.co.uk domain from
them. The [Scots Language Society Webmaster](mailto:lallans@hotmail.co.uk)
should have access to JoomlaWired.

Redirecting requests to lallans.co.uk to scotsleidassocie.org is handled by
[Vercel](#hosting).

Meanwhile, scotsleidassocie.org is rented from AWS. Again, the Webmaster should
have access to the AWS Console.

### SSL certificates

The SSL certificate for scotsleidassocie.org is bought from AWS Certificates
Manager. Again, the Webmaster should have access to the AWS Console.

### Hosting

The website is hosted on [Vercel](https://vercel.com/sycamost/lallans-wabsteid-astro).
Because we have the free plan, unfortunately only the Webmaster can access the
Vercel dashboard.

Vercel also handles redirecting from lallans.co.uk to scotsleidassocie.org.

### CI/CD

Our CI/CD pipeline is, thanks to the fantastic integration between GitHub and
Vercel, no-code! We just need to make commits to the repo to see them deployed
automagically.

Ideally, we should check everything's working on deployment before everyone on
the internet starts looking at it. For that reason, we have a staging deployment
at [staging.scotsleidassocie.org](https://staging.scotsleidassocie.org). To
update the staging deployment, simply commit to `dev` by making a Pull Request
and getting it approved by a code owner and then merged.

To update production, you'll want to first merge your changes into `dev` by
making a Pull Request and getting it approved and merged. Once you've done that,
given it five minutes to dpeloy, and you've checked that everything looks good
on [staging.scotsleidassocie.org](https://staging.scotsleidassocie.org),
[make a Pull Request to merge dev into main](https://github.com/Sycamost/lallans-wabsteid-astro/compare/main...dev).
Once that Pull Request is approved by a code owner, merge it in and it should
update production in under five minutes.
