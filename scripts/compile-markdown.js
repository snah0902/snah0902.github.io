import fs from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeFormat from "rehype-format";

function makeHead(title) {
  return `\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Stephen Nah - ${title}</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Figtree&display=swap" rel="stylesheet">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
  <link rel="manifest" href="/favicon/site.webmanifest">
</head>`
}

const navItems = [
  { label: 'about me', file: 'index.html' },
  { label: 'projects', file: 'projects.html' },
  { label: 'resume', file: 'resume.html' },
  { label: 'courses', file: 'courses.html' }
];


function makeTopNavigationBar(activeLabel) {
  const items = navItems
    .map(({ label, file }) => {
      const activeClass = label === activeLabel ? ' class="active"' : '';
      return `      <li><a${activeClass} href="${file}">${label}</a></li>`;
    })
    .join('\n');

  return `\
<div class="header">
  <nav>
    <p id="name">Stephen Nah</p>
    <ul>
${items}
    </ul>
  </nav>
</div>`
}

async function compileMarkdown(inputPath, outputPath, title) {

  const head = makeHead(title);
  const topNavigationBar = makeTopNavigationBar(title.toLowerCase());

  const md = fs.readFileSync(inputPath, "utf-8");
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeFormat, { indent: 2 })
    .use(rehypeStringify, { allowDangerousHtml: true });
  const file = await processor.process(md);
  const markdownContent = String(file);

  const wrapped = `\
${head}
<body>

${topNavigationBar}

<div class="main">
${markdownContent}
</div>
</body>
</html>
`;

  fs.writeFileSync(outputPath, wrapped);
}

compileMarkdown('content/index.md', 'index.html', 'About Me')
compileMarkdown('content/projects.md', 'projects.html', 'Projects');
compileMarkdown('content/resume.md', 'resume.html', 'Resume');
compileMarkdown('content/courses.md', 'courses.html', 'Courses');
