# Publishing @chassis-ui to npm — Step-by-Step Guide

This guide sets up automated publishing of all 7 `@chassisui/*` packages to npm using GitHub Actions with Trusted Publishing (no secret tokens stored).

---

## Prerequisites

- A GitHub account with push access to `jed-3rd/ChassisUI`
- An npm account at [npmjs.com](https://www.npmjs.com)

---

## Step 1: Create the npm Organization

1. Go to [npmjs.com/org/create](https://www.npmjs.com/org/create)
2. Enter the org name: **chassis-ui**
   - This creates the `@chassis-ui` scope
   - Choose the **free / open source** plan (for public packages)
3. Click **Create**

> If `chassis-ui` is taken, you'll need to rename the scope in all 7 `package.json` files to match your chosen org name.

---

## Step 2: Add `publishConfig` to Each Package

Every package needs to declare public access. Add this to each `package.json`:

```json
{
  "publishConfig": {
    "access": "public",
    "provenance": true
  }
}
```

The 7 packages to update:

| Package | File |
|---|---|
| `@chassisui/tokens` | `packages/tokens/package.json` |
| `@chassisui/core` | `packages/core/package.json` |
| `@chassisui/themes` | `packages/themes/package.json` |
| `@chassisui/react` | `packages/react/package.json` |
| `@chassisui/astro` | `packages/astro/package.json` |
| `@chassisui/svelte` | `packages/svelte/package.json` |
| `@chassisui/angular` | `packages/angular/package.json` |

---

## Step 3: Create the GitHub Environment

1. Go to your repo: **github.com/jed-3rd/ChassisUI**
2. Navigate to **Settings → Environments**
3. Click **New environment**
4. Name it: **npm**
5. Click **Configure environment**
6. (Optional) Add reviewers if you want manual approval before each publish
7. Click **Save protection rules**

---

## Step 4: Configure Trusted Publishing on npm

For **each** of the 7 packages, you need to configure Trusted Publishing on npm. Since the packages don't exist on npm yet, you'll configure this during the first publish.

### Option A: First-time publish (packages don't exist yet)

1. Go to [npmjs.com/settings/chassis-ui/packages](https://www.npmjs.com/settings/chassis-ui/packages)
2. Click **Create a new package** (or the first publish will auto-create it)
3. For the **first publish only**, you need a classic automation token:
   - Go to **npmjs.com → Access Tokens → Generate New Token → Classic Token**
   - Select type: **Automation**
   - Copy the token
4. In your GitHub repo, go to **Settings → Secrets and variables → Actions**
5. Click **New repository secret**
   - Name: `NPM_TOKEN`
   - Value: paste the token
6. Run the publish workflow once (see Step 6)
7. After the first successful publish, continue to **Option B** to set up Trusted Publishing

### Option B: Configure Trusted Publishing (after packages exist on npm)

For **each** package:

1. Go to the package page on npm (e.g., `npmjs.com/package/@chassisui/core`)
2. Click **Settings** (or go to the **Publishing** tab)
3. Under **Trusted Publishing**, click **Add new provider**
4. Fill in:
   - **Registry**: `npm` (default)
   - **Repository owner**: `jed-3rd`
   - **Repository name**: `ChassisUI`
   - **Workflow filename**: `publish.yml`
   - **Environment**: `npm`
5. Click **Add**
6. Repeat for all 7 packages

Once Trusted Publishing is configured for all packages, you can **delete the `NPM_TOKEN` secret** from GitHub — it's no longer needed.

---

## Step 5: Add the Publish Workflow

The workflow file already exists at `.github/workflows/publish.yml`. Here's what it does:

```yaml
name: Publish to npm

on:
  workflow_dispatch:    # manual trigger only

permissions:
  contents: read
  id-token: write      # required for Trusted Publishing (OIDC)

jobs:
  publish:
    runs-on: ubuntu-latest
    environment: npm    # must match the npm Trusted Publishing config
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          registry-url: https://registry.npmjs.org

      - run: npm ci

      - run: npx turbo build

      # Publish order matters — tokens before core, core before wrappers
      - run: |
          npm publish --workspace=packages/tokens --access public --provenance
          npm publish --workspace=packages/core --access public --provenance
          npm publish --workspace=packages/themes --access public --provenance
          npm publish --workspace=packages/react --access public --provenance
          npm publish --workspace=packages/astro --access public --provenance
          npm publish --workspace=packages/svelte --access public --provenance
          npm publish --workspace=packages/angular --access public --provenance
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

> **Publish order matters.** `tokens` must publish before `core` (which depends on it), and `core` must publish before the framework wrappers.

---

## Step 6: Run the First Publish

1. Push your code to GitHub:
   ```bash
   git add -A
   git commit -m "Add npm publish workflow and publishConfig"
   git push origin main
   ```
2. Go to **github.com/jed-3rd/ChassisUI/actions**
3. Click **Publish to npm** in the left sidebar
4. Click **Run workflow → Run workflow**
5. Watch the logs to confirm all 7 packages publish successfully

---

## Step 7: Verify

After publishing, confirm the packages exist:

```bash
npm view @chassisui/core
npm view @chassisui/tokens
npm view @chassisui/themes
npm view @chassisui/react
npm view @chassisui/astro
npm view @chassisui/svelte
npm view @chassisui/angular
```

Or visit: `https://www.npmjs.com/org/chassis-ui`

---

## Publishing New Versions

When you're ready to release a new version:

1. **Bump versions** in all package.json files:
   ```bash
   # Example: bump all to 0.2.0
   npm version 0.2.0 --workspaces --no-git-tag-version
   ```

2. **Commit and push**:
   ```bash
   git add -A
   git commit -m "Bump version to 0.2.0"
   git push origin main
   ```

3. **Trigger the workflow**: Actions → Publish to npm → Run workflow

> npm will reject a publish if the version already exists on the registry. Always bump the version before publishing.

---

## Switching Fully to Trusted Publishing (No Token)

Once all 7 packages have Trusted Publishing configured (Step 4B):

1. Remove the `NPM_TOKEN` from the workflow env:
   ```yaml
   # Change this:
   env:
     NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
   # To this (OIDC handles auth automatically):
   env:
     NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
   ```
   Actually, keep the `NODE_AUTH_TOKEN` line — with Trusted Publishing, the GitHub Actions OIDC token is exchanged for a short-lived npm token automatically. The `registry-url` in the setup-node step handles the exchange. You can remove the `NPM_TOKEN` secret from GitHub Settings since it won't be read.

2. Delete the secret: **Settings → Secrets → NPM_TOKEN → Delete**

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `402 Payment Required` | Package is scoped but missing `"access": "public"` in publishConfig |
| `403 Forbidden` | npm org doesn't exist, or your account isn't a member |
| `403 ... Trusted publishing not configured` | The Trusted Publishing config on npm doesn't match the workflow file, environment name, or repo |
| `ENEEDAUTH` | `registry-url` not set in the setup-node step |
| `409 Conflict` | Version already published — bump the version first |
| Publish order failure | A wrapper package depends on a core package version that hasn't published yet |

---

## Summary

| What | Where |
|---|---|
| npm org | npmjs.com/org/chassis-ui |
| GitHub environment | Settings → Environments → npm |
| Publish workflow | `.github/workflows/publish.yml` |
| Trigger | Manual via Actions tab (workflow_dispatch) |
| Auth method | Trusted Publishing (OIDC) — no long-lived secrets |
| Provenance | Enabled — links each package to its source commit |
