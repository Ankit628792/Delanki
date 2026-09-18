# Jira & GitHub Linker — Instant Context in VS Code Without Breaking Focus

> *"Work references like 'PROJ-123' or '#456' sit right next to code, yet getting to the actual ticket usually means switching tabs, searching boards, and losing your train of thought."*

---

## 1. What is Jira & GitHub Linker?

**Jira & GitHub Linker** is a focused VS Code extension that automatically turns ticket numbers (like `PROJ-101`) and GitHub issue or pull request references (like `#456` or `PR-789`) into clickable, navigable doorways directly inside your code editor.

Instead of copying ticket keys, opening your browser, logging in, and searching for the right board, you can hover over the text to preview the issue or click it to open the page immediately.

---

## 2. The Problem It Solves

### The "Attention Tax" of Looking Up Tickets
Engineering and product work happens across two different worlds:
1. **The Code Editor**, where developers think deeply, write logic, and review changes.
2. **Issue Trackers & Pull Requests** (Jira & GitHub), where requirements, customer bug reports, and design specs live.

When a developer reviews code and spots a comment like:
`// See PROJ-842 for billing edge-case requirements`

Finding out what that means is a mini-quest:
* You copy the text.
* You switch to your browser.
* You open Jira or GitHub.
* You search for the ticket or guess which project repository it belongs to.

By the time you find the ticket and read the spec, **you've lost your focus.**

### The Breakthrough Moment
If the ticket number is already right there on the screen, **why should a human have to act like a search engine?**

The extension treats ticket mentions the way a helpful colleague would: *"Need the backstory behind this code? Here is the link."*

---

## 3. How It Works (Step by Step)

### Step 1: Write as You Normally Do
You and your team don't have to change anything. Just reference issues naturally in comments, commit messages, or markdown notes:
* Jira keys: `ABC-123`, `APP-902`
* GitHub issues: `#42`, `GH-108`
* Pull requests: `PR-314`

### Step 2: Ambient Pattern Recognition
The extension automatically recognizes these patterns without slowing down your editor or adding visual clutter.

### Step 3: Hover to Preview
Hovering your mouse over any ticket key displays a clean tooltip showing the destination URL and project name, so you know exactly where it leads before clicking.

### Step 4: Click or Keyboard Shortcut to Open
Click the inline CodeLens action or press a quick shortcut to open the ticket directly in your browser. You can also right-click to copy the link for a teammate in Slack or Microsoft Teams.

---

## 4. Key Highlights

* **Automatic Pattern Detection:** Detects Jira project prefixes, GitHub issue numbers, and PR identifiers effortlessly.
* **Non-Intrusive Design:** Sits quietly in the background; only appears when you hover or look for context.
* **Custom Project Mapping:** Configure your company's Jira domain or GitHub organization in simple settings.
* **Zero Configuration Needed for Standard Formats:** Works right out of the box with standard formats.

---

## 5. Real-World Impact

* **Protects Flow State:** Eliminates the mental interruption of searching for ticket URLs.
* **Faster Code Reviews:** Reviewers can check the original requirements in one click before asking questions.
* **Easier Onboarding:** New engineers on a team can click ticket keys in existing code to read why decisions were made months ago.
