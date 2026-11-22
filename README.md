# Sunny Image Technology

Academic homepage of Sun Han — computer vision and image processing.

Migrated from `www.sunnyimgtech.com` (a 云速建站 site that could not be renewed) to a
dependency-free static site hosted on **GitHub Pages**. Plain HTML + one CSS file, no
framework, no build step required to deploy.

## Site structure

```
site/
├── index.html            Introduction (home)
├── research.html         Research areas & publications (1.1–1.5)
├── project.html          Selected project list since 2000
├── course.html           Courses, lecture notes (files/*.rar), textbook chapters
├── beginner.html         Journals / conferences / researchers / industry
├── math.html             Math foundations reading list
├── tool.html             Writing, programming, frameworks, datasets
├── contact.html          Contact information
├── wechat.html           WeChat official account list
├── memoir.html           在南京的日子 (personal memoir)
├── 404.html              Custom 404 + legacy-URL redirector
├── files/                Lecture note archives (rar, ~17 MB total)
└── assets/               css / js / favicon
```

## Legacy URL mapping

Old bookmarks still work: `404.html` redirects the former page paths.

| Old (www.sunnyimgtech.com)  | New            |
|-----------------------------|----------------|
| `/`  or `/page156`          | `/`            |
| `/Research-Area`            | `/research.html` |
| `/Project`                  | `/project.html`  |
| `/Course`                   | `/course.html`   |
| `/Beginner`                 | `/beginner.html` |
| `/Math`                     | `/math.html`     |
| `/Tool`                     | `/tool.html`     |
| `/page152`                  | `/contact.html`  |
| `/WeChat-Official-Accounts` | `/wechat.html`   |
| `/personal`                 | `/memoir.html`   |

## Deploy to GitHub Pages

Target: **https://sunnyimgtech.github.io** — user site served from the repository
`SunnyImgTech/SunnyImgTech.github.io` (repository root = site root).

One-time setup:

1. Create an **empty public** repository named `SunnyImgTech.github.io` on GitHub
   (no README, no .gitignore — the repo already has history here).
2. Add the deploy SSH key (`~/.ssh/id_ed25519_sunnyimgtech.pub`) at
   **Settings → SSH and GPG keys → New SSH key**.
3. Push:

   ```bash
   cd site
   git push -u origin main
   ```

4. **Settings → Pages → Source: Deploy from a branch → main / (root)** → Save.
   A user site is usually built automatically on first push; the URL appears on that page.
5. Site goes live at <https://sunnyimgtech.github.io> within a minute or two.

After that, publishing an update is just `git add -A && git commit -m "..." && git push`.

### Custom domain (optional)

If you ever renew `sunnyimgtech.com` and want to keep using it:

1. Add a file named `CNAME` (no extension) in this folder containing one line:
   `sunnyimgtech.com`
2. At your domain registrar, point DNS at GitHub Pages:
   - apex `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` `CNAME` → `sunnyimgtech.github.io`
3. Under **Settings → Pages → Custom domain**, add the domain and enable
   *Enforce HTTPS* once the certificate is issued.

Until the domain is renewed, skip this step — the site works fine on `github.io`.

## Editing content

- **Quick edits**: open the relevant `.html` file and edit directly — the markup is plain
  and self-contained.
- **Regenerating everything**: the original content was extracted from the live site and
  normalized in `tools/build.py` (one level above this folder, not part of the repo).
  Edit the data there and run `python3 tools/build.py` to regenerate all pages into this
  folder. When editing HTML by hand, keep the header/footer block identical across pages.

## Notes on the migration

- All publications, projects, course notes, resource lists and the memoir were carried
  over verbatim; obvious typos in the original were fixed (pseduo → pseudo,
  Aanalysis → Analysis, Singal → Signal, an Image Representation → and Image Representation,
  Lastest → Latest).
- Lecture-note archives (`files/*.rar`) are now served from this site instead of the
  builder's CDN, so they survive the old domain expiring.
- The ICP filing footer (苏ICP备19001275号) belonged to the domestic hosting and was
  removed; GitHub Pages needs no filing. Re-add it only if you later host in mainland
  China with that filing active.
