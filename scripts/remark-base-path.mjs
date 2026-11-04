/** Keep Markdown, HTML, and MDX content links inside the project site. */
export default function remarkBasePath({ base = "" } = {}) {
  const prefix = (url) => {
    if (typeof url !== "string" || !url.startsWith("/") || url.startsWith("//"))
      return url;
    const parsed = new URL(url, "https://internal.invalid");
    if (!parsed.pathname.endsWith("/") && !/\.[^/]+$/.test(parsed.pathname)) {
      parsed.pathname += "/";
    }
    return `${base}${parsed.pathname}${parsed.search}${parsed.hash}`;
  };

  return (tree) => {
    function visit(node) {
      if (["link", "image", "definition"].includes(node.type)) {
        node.url = prefix(node.url);
      }
      if (node.type === "html") {
        node.value = node.value.replace(
          /((?:href|src)=["'])(\/(?!\/)[^"']*)(["'])/g,
          (_, start, url, end) => `${start}${prefix(url)}${end}`,
        );
      }
      for (const attribute of node.attributes ?? []) {
        if (["href", "src"].includes(attribute.name)) {
          attribute.value = prefix(attribute.value);
        }
      }
      for (const child of node.children ?? []) visit(child);
    }
    visit(tree);
  };
}
