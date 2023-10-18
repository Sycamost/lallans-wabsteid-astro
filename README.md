# Lallans Wabsteid Astro

This is the Scots Leid Associe website, implemented in [Astro](https://astro.build/).

## Gettin yokit

```bash
git clone https://github.com/Sycamost/lallans-wabsteid-astro.git \
  && cd lallans-wabsteid-astro \
  && npm install \
  && npm run dev
```

## Writing a news post

Skills required:

* Can edit text files.
* Can write Markdown. (Beginners can learn in an afternoon by following the
  [getting started guide](https://www.markdownguide.org/getting-started/)!)
* (Optional) Can open a command line terminal. (Here’s
  [a great guide for beginners at MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line))

Prerequisites:

(You can either choose to use a command-line terminal or GitHub Desktop, an app
with a graphical user interface. If you haven't used a command-line terminal
before, it's probably a little easier to use GitHub Desktop, but either approach
will work.)

* Has [installed Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Has [signed up for GitHub](https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account).
* If using a command line terminal: has configured an
  [SSH key with GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).
* If **not** using a command line terminal: has [installed GitHub Desktop](https://desktop.github.com/).

### Getting the code

You will need to fork the repository, and then clone your fork.

A fork is your personal copy of the repository, hosted online on GitHub.com. To
make a change to the website, you must make your own fork, make the changes to
your fork, and then request for your changes to be copied back into the original,
or "upstream," repository.

To make a fork, follow
[GitHub's guide to making a fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

Once you've made a fork, it will be hosted online, most likely at
`https://github.com/YOUR_GITHUB_USERNAME/lallans-wabsteid-astro`. The next thing
you need to do is clone the repository.

A clone is a local copy of a repository hosted online. In order to make changes
to the code, you need to have a copy of the code on your own computer for you to
edit. "Cloning" is essentially the same as "downloading."

If you're using a command-line terminal, you can follow
[GitHub's guide to cloning a remote repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
Or, if you already know how what you're doing, you can navigate to the directory
where you want your local repository to reside, and enter:

```bash
git clone https://github.com/Sycamost/lallans-wabsteid-astro
```

If you're using GitHub Desktop, follow
[GitHub's guide to cloning a repo with GitHub Desktop](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop).

Once the cloning is finished, you should now have a clone - a local copy - of
the code. You're ready to start making changes!

### Making changes to the code

You can make changes to the code using any text editor, such as Notepad on Windows
or TextEdit on Mac. Word processors, such as Microsoft Word, Openoffice Writer or
Pages, may work but are not suitable and I don't recommend them. For a better
experience, you might want to install an IDE, which is a text editor specially
designed for editing code. Popular choices include:
[Visual Studio Code](https://code.visualstudio.com/download) and
[Sublime Text](https://www.sublimetext.com/download).

Once you've made some changes and saved them, you need to "commit" them.
This means telling Git to include those changes when you upload them back
to your forked repository. It's a little bit like saving your work, for Git.

If you're using a command line, a great way to do this is by navigating to the
root directory of your local clone and enter this command:

```bash
git add .
git diff --staged
```

The first command adds all changes in the whole directory, and the second command
shows you what you just added.

Once you're happy with those changes, commit them with the following command:

```bash
git commit -m "A brief description of your changes"
```

Make sure to provide a short (ideally fewer than 80 characters) description inside
quote marks.

If you're using GitHub Desktop, you can follow
[GitHub's guide to making a commit](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop).

### Adding a news post

The simplest way to add a news post is to duplicate an existing one, and
edit it to reflect the new content.

To duplicate an existing one, you need to duplicate both the Scots and the English
version of a news article. Go to `src/content/news/sco` and duplicate a file in
that folder, then go to `src/content/news/en-GB` and do the same. The new files
should be named according to the existing pattern, which begins with the date of
the news article in `YYYY-MM-DD` format. Make sure to keep the `.mdx` file extension.

Then, edit your duplicated files to contain the content for the new news article
and commit them.

### Uploading the new news articles

Once you've committed your new article in both Scots and English, you'll need
to first upload it back to your fork, and then ask for your fork's changes to
be included in the upstream repository.

To upload, or, in Git terms, "push," your changes to your fork, if you're using
a command-line terminal, simply enter `git push`. If you're using GitHub Desktop,
click the button which says "Push origin."

Then, once you've pushed to your fork, you need to request for your fork's changes
to be included in the upstream repository. In GitHub terms, this request is called
a Pull Request.

To do this, [follow GitHub's guide to making a Pull Request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).
Importantly, you should target the base repository of `Sycamost/lallans-wabsteid-astro`
and the base branch of `dev`.

Once you've done that, it's down to an owner of the upstream repository to approve
your Pull Request. Once they've done that, your new news article will appear on
the website.

## Adding an issue of Lallans

1. Add the issue number to `src/types/LallansIssueNumber.d.ts`.
2. Add the original issue cover photo as `src/images/issueXYZ.jpg`, where `XYZ`
   is the issue number. Most of the examples are `.jpg`, but the file type isn't important.
3. Make copies of the cover image that are scaled to 192 and 274 pixels wide.
   Name them `issueXYZ-192w.jpg` and `issueXYZ-274w.jpg` respectively.
4. Copy one of the existing Lallans issues in `src/data/lallans` and name the
   copy `issueXYZ.ts`.
5. Edit the file you just made with the new issue's information, including the
   locations of the correctly scaled cover images that you just made.
6. Import that data file into the Lallans data index file, `src/data/lallans/index.ts`.
7. Check that everything's working: the issue should appear at the top on the
   Lallans page, `/furthsettins/lallans`, and the issue information should appear
   at `/furthsettins/lallans/XYZ`. Check both the English and Scots versions.

