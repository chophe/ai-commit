import { config } from "dotenv";
import { execSync } from "child_process";
import { Configuration, OpenAIApi } from "openai";

// Load environment variables from .env file
config();

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error("Error: OPENAI_API_KEY environment variable not set.");
  process.exit(1);
}

const openai = new OpenAIApi(new Configuration({ apiKey }));

// Function to get the git diff of staged changes
function getGitDiff(): string {
  try {
    const diff = execSync("git diff --cached", { encoding: "utf-8" });
    return diff;
  } catch (error) {
    console.error("Error getting git diff:", error);
    process.exit(1);
  }
}

// Function to generate a commit message based on the git diff
async function generateCommitMessage(diffText: string): Promise<string> {
  const prompt = `Generate a concise and descriptive git commit message based on the following changes:\n\n${diffText}`;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 50,
      temperature: 0.7,
    });

    return (
      response.data.choices[0].text?.trim() ||
      "Commit message could not be generated."
    );
  } catch (error) {
    console.error("Error generating commit message:", error);
    process.exit(1);
  }
}

// Main function to run the commit process
async function main() {
  const diffText = getGitDiff();
  if (!diffText) {
    console.log("No changes staged for commit.");
    return;
  }

  const commitMessage = await generateCommitMessage(diffText);
  console.log(`Generated commit message: "${commitMessage}"`);

  // Ask for confirmation
  const confirm = await promptUser(
    "Do you want to use this commit message? (y/n): "
  );
  if (confirm.toLowerCase() !== "y") {
    console.log("Commit aborted.");
    return;
  }

  // Commit with the generated message
  try {
    execSync(`git commit -m "${commitMessage}"`);
    console.log("Changes committed successfully.");
  } catch (error) {
    console.error("Error committing changes:", error);
  }
}

// Helper function to get user input from the command line
function promptUser(query: string): Promise<string> {
  return new Promise((resolve) => {
    process.stdout.write(query);
    process.stdin.resume();
    process.stdin.setEncoding("utf-8");
    process.stdin.once("data", (data) => {
      resolve(data.trim());
    });
  });
}

main().catch((error) => console.error("Unexpected error:", error));
