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
