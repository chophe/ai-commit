# AI-Commit 🤖

AI-powered Git commit message generator that follows conventional commit standards.

## Features ✨

- Generates meaningful commit messages using OpenAI's GPT models
- Follows Conventional Commits format
- Supports emoji commits (Gitmoji)
- Configurable commit message language and length
- Environment variable support
- Custom OpenAI base URL support

## Prerequisites 📋

- Node.js (v14 or higher)
- Git
- OpenAI API key

## Installation 🚀

```bash
npm install ai-commit
```

## Setup ⚙️

    1. Create a `.env` file in the root directory of your project.

2. Add your OpenAI API key to the `.env` file:

```
OPENAI_API_KEY=your-api-key-here
```

3. (Optional) Create a config.json file to customize settings:

```json
{
  "openAI": {
    "apiKey": "[env]:OPENAI_API_KEY",
    "baseUrl": "https://api.openai.com/v1"
  },
  "commit": {
    "language": "en",
    "maxCharacter": 100
  }
}
```

## Usage 💻

After staging your changes with git add, simply run:

```bash
ai-commit
```

The tool will:

- Get the staged changes diff
- Send it to OpenAI's API
- Generate a conventional commit message
- Create the commit with the generated message

## Configuration Options 🛠️
| Option | Description | Default |
|---------|-------------|---------|
| commit.language | Commit message language | "en" |
| commit.maxCharacter | Maximum commit message length | 100 |
| openAI.baseUrl | Custom OpenAI API endpoint | "https://api.openai.com/v1" |

## Commit Message Standards 📝
AI-Commit supports multiple commit message formats:

- Conventional Commits
- Gitmoji
- Semantic Commit Messages
- Custom formats through configuration

## Contributing 🤝
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes using AI-Commit
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## Acknowledgments 🙏
- OpenAI for providing the GPT API
- Conventional Commits community
- Gitmoji project

This README provides a clear overview of the project, its features, setup instructions, and usage guidelines while maintaining a professional and engaging tone. It's structured to help users quickly understand and start using the AI-Commit tool.

## Commit Message Standards 📝

AI-Commit supports multiple commit message formats:
- Conventional Commits
- Gitmoji
- Semantic Commit Messages
- Custom formats through configuration

📚 **Documentation**:
- [Commit Standards Guide](docs/commit-standards.md) - Learn about different commit message standards and best practices
- [Commit Prompts Guide](docs/commit-prompts.md) - Explore various prompt templates for generating commit messages

