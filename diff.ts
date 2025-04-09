import { editor, space } from "$sb/syscalls.ts";

// Import diff package from CDN
const Diff = await import("https://cdn.jsdelivr.net/npm/diff@7.0.0/dist/diff.min.js");

const diffPageVirtual = "DIFF RESULT";


export async function diff(
  page1: string,
  page2: string
): Promise<string | undefined> {
  try {
    // Get the content of both pages
    const text1 = await space.readPage(page1);
    const text2 = await space.readPage(page2);

    // Use diff package to compute the differences
    const changes = Diff.diffLines(text1, text2);

    // Format the diff output with visual markers
    let output = "";
    changes.forEach(part => {
      if (part.added) {
        output += `➕ ${part.value}`;
      } else if (part.removed) {
        output += `➖ ${part.value}`;
      } else {
        output += `  ${part.value}`;
      }
    });

    return output;
  } catch (err) {
    console.error("Error in diff function:", err);
    await editor.flashNotification("Error computing diff", "error");
    return;
  }
}

export async function openDiff(callingPage: object, page1: string, page2: string) {
  console.log("callingPage", callingPage);
  const diffResult = await diff(page1, page2);
  if (diffResult) {
    await editor.navigate({ page: diffPageVirtual });
    const textLength = (await editor.getText()).length;
    await editor.replaceRange(0, textLength, `# Diff between [[${page1}]] and [[${page2}]]\n\n\`\`\`diff\n${diffResult}\n\`\`\``);
  } else {
    await editor.flashNotification("Error computing diff", "error");
  }
}


