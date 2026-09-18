# Sticky Notes for VS Code — Keeping Unfinished Thinking Where Your Code Lives

> *"Important thoughts shouldn't stay buried in thousands of lines of code. If you left a reminder for your future self, it should be visible, organized, and easy to find."*

---

## 1. What is Sticky Notes for VS Code?

**Sticky Notes** is a clean, lightweight extension for Visual Studio Code. It automatically gathers all the reminders, warnings, and todo comments you leave in your code files—like `// TODO`, `// FIXME`, `// BUG`, and `// HACK`—and turns them into a colorful, interactive sidebar map.

Instead of writing notes on physical sticky notes on your desk or losing track of tasks buried in deep folders, Sticky Notes keeps your thoughts right beside your code, complete with clickable line navigation and margin badges.

---

## 2. The Problem It Solves

### The Disappearing Code Comment
Every developer leaves notes while coding:
* *"I need to clean this up before shipping."*
* *"This temporary workaround fixes the bug for now, but we need a better solution later."*
* *"Don't forget to check edge cases here."*

The problem isn't that developers forget to take notes. **The problem is that notes disappear into the page.** When a project has 50 files and 10,000 lines of code, finding that one reminder you wrote last Thursday feels like looking for a needle in a haystack.

People try using external to-do apps, chat messages, or paper pads. But those fail for one simple reason: **the reminder and the code are no longer in the same room.**

---

## 3. The Breakthrough: Recognizing Human Intent

The insight behind Sticky Notes is that different comments represent different human emotions and urgencies:

* A **TODO** is a promise of future work.
* A **FIXME** or **BUG** is a wound that needs healing.
* A **WARNING** is a gentle hand on a teammate's shoulder.
* A **HACK** is a compromise you shouldn't let become a permanent habit.
* A **REVIEW** is an invitation for someone else's opinion.

Instead of treating all comments as boring plain text, Sticky Notes gives each type its own color, icon, and sidebar category.

---

## 4. How It Works (Step by Step)

### Step 1: Write Comments Naturally
You don't need to learn a new syntax. Just type your normal comments as you build:
```typescript
// TODO: Add caching layer for user profile
// FIXME: Handle network disconnect timeout
// HACK: Temporary fallback until API v2 launches
```

### Step 2: The Interactive Sidebar Panel
Sticky Notes instantly groups your notes in a dedicated panel on the VS Code sidebar. At a glance, you can see how many tasks, bugs, or warnings exist across your active file or entire workspace.

### Step 3: Click to Jump
Clicking any note in the sidebar instantly takes you directly to that line in the file. No manual scrolling, no file searching.

### Step 4: Gutter Badges & Hover Tooltips
Color-coded icons appear in the editor's left margin (gutter) next to the line numbers, making unfinished tasks stand out as you scroll. Hovering over a badge displays the note text immediately.

### Step 5: Notes Clear When Finished
When you finish a task and delete or update the comment, it immediately disappears from the sidebar. Your list stays clean and honest.

---

## 5. Key Highlights

* **Two-Way Navigation:** Jump from the sidebar to the code, or click a gutter badge to inspect the note.
* **Color-Coded Visual Legend:** Blue for TODOs, Crimson for BUGs, Orange for HACKs, Gold for WARNINGs, and Purple for REVIEWs.
* **Zero External Apps Required:** Everything stays inside your code editor where your focus belongs.
* **Fast & Lightweight:** Built directly on the official VS Code Extension API for instant responsiveness.

---

## 6. Real-World Impact

* **Lower Background Stress:** Frees your brain from having to remember where you left off.
* **Kinder Team Handoffs:** Teammates and code reviewers can instantly see what is pending or needs attention.
* **Cleaner Production Code:** Ensures temporary workarounds and hacks are resolved before shipping to customers.
