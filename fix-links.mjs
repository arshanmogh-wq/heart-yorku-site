import fs from 'fs';
import path from 'path';

const branches = ['york', 'western', 'mcmaster'];

for (const b of branches) {
  const pNav = `sites/${b}/src/components/BranchNav.astro`;
  let nav = fs.readFileSync(pNav, 'utf-8');
  nav = nav.replace(/isActive\("\/"\)/g, 'isActive(import.meta.env.BASE_URL)');
  nav = nav.replace(/href="\/"/g, 'href={import.meta.env.BASE_URL}');
  nav = nav.replace(/isActive\("\/([a-z-]+)"\)/g, 'isActive(import.meta.env.BASE_URL + "$1")');
  nav = nav.replace(/href="\/([a-z-]+)"/g, 'href={import.meta.env.BASE_URL + "$1"}');
  fs.writeFileSync(pNav, nav);

  const pFooter = `sites/${b}/src/components/BranchFooter.astro`;
  let footer = fs.readFileSync(pFooter, 'utf-8');
  footer = footer.replace(/href="\/"/g, 'href={import.meta.env.BASE_URL}');
  footer = footer.replace(/href="\/([a-z-]+)"/g, 'href={import.meta.env.BASE_URL + "$1"}');
  fs.writeFileSync(pFooter, footer);

  const pSite = `sites/${b}/src/site.ts`;
  let site = fs.readFileSync(pSite, 'utf-8');
  site = site.replace(/logoSrc:\s*"\/images\/([^"]+)"/, 'logoSrc: import.meta.env.BASE_URL + "images/$1"');
  site = site.replace(/socialImage:\s*"\/social-card.svg"/, 'socialImage: import.meta.env.BASE_URL + "social-card.svg"');
  fs.writeFileSync(pSite, site);

  const pLayout = `sites/${b}/src/layouts/BranchLayout.astro`;
  let layout = fs.readFileSync(pLayout, 'utf-8');
  layout = layout.replace(/const isHomePage = Astro.url.pathname === "\/";/, 'const isHomePage = Astro.url.pathname === import.meta.env.BASE_URL || Astro.url.pathname === import.meta.env.BASE_URL.replace(/\\/$/, "");');
  layout = layout.replace(/href="\/favicon\.svg"/, 'href={import.meta.env.BASE_URL + "favicon.svg"}');
  fs.writeFileSync(pLayout, layout);

  // Fix any other pages
  const dPages = `sites/${b}/src/pages`;
  const pages = fs.readdirSync(dPages);
  for (const page of pages) {
    if (page.endsWith('.astro')) {
      const pPage = path.join(dPages, page);
      let pageContent = fs.readFileSync(pPage, 'utf-8');
      pageContent = pageContent.replace(/href="\/"/g, 'href={import.meta.env.BASE_URL}');
      pageContent = pageContent.replace(/href="\/([a-z-]+)"/g, 'href={import.meta.env.BASE_URL + "$1"}');
      fs.writeFileSync(pPage, pageContent);
    }
  }
}
console.log("Done");
