Creating commit messages with ChatGPT can streamline your workflow, especially if you’re using a specific commit message style. Here are prompts you can use for several popular styles, including **Conventional Commits**, **Gitmoji**, and a **simple, natural language** style. Each prompt includes suggestions for formatting to make sure ChatGPT generates messages that fit the style’s requirements.

### 1. **Conventional Commits Prompt**

Use this prompt to ensure ChatGPT generates a message with `<type>(<scope>): <description>` format.

**Prompt:**

> "Based on the following code changes, generate a Conventional Commit message. Use the appropriate type (e.g., feat, fix, docs, style, refactor, test, chore). Include an optional scope that describes the part of the project affected (like auth, ui, or api). Make the description concise and clear.
>
> **Diff:** > [Insert diff here]"

**Example Response from ChatGPT:**

> `fix(auth): correct OAuth token expiration handling`

---

### 2. **Gitmoji Style Prompt**

Use this prompt if you prefer emoji-based commit messages. In Gitmoji style, emojis help to visually convey the type of change.

**Prompt:**

> "Generate a Gitmoji-style commit message based on the following code changes. Start the message with an appropriate emoji (e.g., 🐛 for fix, ✨ for feature, 📝 for documentation). Follow with a short description of the change, specifying the affected area if possible.
>
> **Diff:** > [Insert diff here]"

**Example Response from ChatGPT:**

> `🐛 fix(auth): resolve token refresh issue in login flow`

---

### 3. **Semantic Commit Messages Prompt**

This prompt is suitable if you want slightly more flexibility, allowing ChatGPT to use plain language with or without explicit prefixes. Semantic commits are close to Conventional Commits but allow for more natural phrasing.

**Prompt:**

> "Generate a semantic commit message based on the following code changes. Use a suitable prefix like `fix`, `feature`, `docs`, etc., and provide a clear, one-sentence summary of the change. You can include the affected module or functionality in parentheses if it makes sense.
>
> **Diff:** > [Insert diff here]"

**Example Response from ChatGPT:**

> `feature(auth): add multi-factor authentication option for login`

---

### 4. **Commitizen-Friendly Prompt**

If you’re using tools like **Commitizen** that prompt for more detailed information, this prompt will help ChatGPT create commits in that style.

**Prompt:**

> "Create a Commitizen-style commit message based on these code changes. Use the following format:
>
> - Type: Use types like feat, fix, chore, refactor, etc.
> - Scope: Describe the specific area impacted by the change (e.g., api, ui, backend).
> - Description: Provide a brief, clear description of what has been changed and why.
>
> **Diff:** > [Insert diff here]"

**Example Response from ChatGPT:**

> `feat(auth): add password strength validation during user registration`

---

### 5. **Standardized Natural Language Prompt**

If you prefer simple, clear language without a rigid structure, this prompt guides ChatGPT to write commit messages as plain statements, suitable for general or smaller projects.

**Prompt:**

> "Based on these code changes, generate a clear, one-sentence commit message that summarizes the changes. Use simple, natural language and avoid technical jargon if possible.
>
> **Diff:** > [Insert diff here]"

**Example Response from ChatGPT:**

> `Fixes issue with token expiration timing in user authentication`

---

### 6. **Custom Emoji + Conventional Commits Hybrid Prompt**

If you want to combine **emojis** with **Conventional Commits** structure, this prompt encourages ChatGPT to add relevant emojis while following the commit message conventions.

**Prompt:**

> "Create a Conventional Commit-style message with emojis based on the following code changes. Start with an emoji that represents the type of change (e.g., ✨ for new features, 🐛 for bug fixes). Follow the `<type>(<scope>): <description>` format.
>
> **Diff:** > [Insert diff here]"

**Example Response from ChatGPT:**

> `✨ feat(api): add rate-limiting for endpoint throttling`

---

### 7. **Detailed GitHub Changelog-Style Prompt**

If you need more detailed messages, like those often seen in changelogs or for GitHub releases, use this prompt to get more context in your commit messages.

**Prompt:**

> "Generate a detailed commit message suitable for a GitHub changelog based on these changes. Start with a clear title (e.g., `Feature:`, `Fix:`), followed by a more descriptive sentence about the change. Mention specific files or functions affected if relevant, and explain why the change was made.
>
> **Diff:** > [Insert diff here]"

**Example Response from ChatGPT:**

> `Feature: Add rate-limiting to API endpoints to prevent excessive requests. Updated rate-limiter.js to handle user requests more efficiently and avoid server overload.`

---

### Summary of Styles and Prompts

| Commit Style         | Prompt Template                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------- |
| Conventional Commits | Generate a Conventional Commit message with type, optional scope, and clear description. |
| Gitmoji              | Generate a Gitmoji-style commit message with an emoji and short description.             |
| Semantic Commits     | Generate a semantic message using a prefix and a one-sentence description.               |
| Commitizen           | Use type, scope, and description with Commitizen structure.                              |
| Natural Language     | Write a simple, clear one-sentence message.                                              |
| Emoji + Conventional | Combine an emoji with Conventional Commit style.                                         |
| GitHub Changelog     | Create a detailed, changelog-style message with context.                                 |

Using any of these prompts, you can copy your diff into ChatGPT and get a well-formatted commit message that aligns with the desired style.
