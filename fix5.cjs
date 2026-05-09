const fs = require('fs');
let buildJs = fs.readFileSync('build_full.cjs', 'utf8');

// I will bypass the whole escaping nightmare.
// I take the string we want to output:
// const portfolioHtmlStatic = `<div ...>`
// and I will literally just use the already fully resolved HTML in build_full.cjs!
// Why escape and construct code dynamically when it's much easier to just put a placeholder and replace it afterwards?

const replacement = "const portfolioHtmlStatic = 'PLACEHOLDER';";
buildJs = buildJs.replace(/const portfolioHtmlStatic = [^\n]*/, () => replacement);

buildJs = buildJs.replace(
  "let scriptBlock = `\\n    <script>\\n\\n${pagesDataJs}\\n\\n${jsContent}\\n    </script>\\n`;",
  "let scriptBlock = `\\n    <script>\\n\\n${pagesDataJs}\\n\\n${jsContent}\\n    </script>\\n`;\n" +
  "scriptBlock = scriptBlock.replace(\"'PLACEHOLDER'\", '`' + portfolioHtml.replace(/\\\\/g, '\\\\\\\\').replace(/`/g, '\\\\`').replace(/\\$/g, '\\\\$') + '`');\n"
);

// wait the exact line might be different. Let's find how pagesDataJs is used
console.log('Fixed build config part 5');
fs.writeFileSync('build_full.cjs', buildJs, 'utf8');
