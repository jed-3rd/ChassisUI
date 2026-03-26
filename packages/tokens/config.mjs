import StyleDictionary from 'style-dictionary';
import { mkdir } from 'fs/promises';

const themes = ['default', 'material2', 'material3', 'polaris', 'carbon', 'hig', 'atlassian', 'fluent', 'lightning', 'primer', 'spectrum', 'uber'];

// Custom name transform: chassis.color.primary -> chassis-color-primary
StyleDictionary.registerTransform({
  name: 'name/chassis',
  type: 'name',
  transform: (token) => {
    return token.path.join('-');
  },
});

// Custom format: CSS variables scoped to a selector
StyleDictionary.registerFormat({
  name: 'css/chassis-variables',
  format: ({ dictionary, options }) => {
    const selector = options.selector || ':root';
    const vars = dictionary.allTokens
      .map((token) => `  --${token.name}: ${token.value};`)
      .join('\n');
    return `${selector} {\n${vars}\n}\n`;
  },
});

// Custom format: JS ESM export
StyleDictionary.registerFormat({
  name: 'js/chassis-esm',
  format: ({ dictionary }) => {
    const tokens = {};
    dictionary.allTokens.forEach((token) => {
      tokens[token.name] = token.value;
    });
    return `export const tokens = ${JSON.stringify(tokens, null, 2)};\nexport default tokens;\n`;
  },
});

// Custom format: flat JSON
StyleDictionary.registerFormat({
  name: 'json/chassis-flat',
  format: ({ dictionary }) => {
    const tokens = {};
    dictionary.allTokens.forEach((token) => {
      tokens[token.name] = token.value;
    });
    return JSON.stringify(tokens, null, 2) + '\n';
  },
});

// Ensure output directories exist
await mkdir('dist/css', { recursive: true });
await mkdir('dist/js', { recursive: true });
await mkdir('dist/json', { recursive: true });

// Build global tokens (defaults)
const globalSD = new StyleDictionary({
  source: ['src/global/**/*.json', 'src/semantic/**/*.json'],
  platforms: {
    css: {
      transforms: ['name/chassis'],
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'global.css',
          format: 'css/chassis-variables',
          options: { selector: ':root, :host' },
        },
      ],
    },
    js: {
      transforms: ['name/chassis'],
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'js/chassis-esm',
        },
      ],
    },
    json: {
      transforms: ['name/chassis'],
      buildPath: 'dist/json/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/chassis-flat',
        },
      ],
    },
  },
});

await globalSD.buildAllPlatforms();
console.log('✓ Built global tokens');

// Build each theme
for (const theme of themes) {
  const sd = new StyleDictionary({
    source: [
      'src/global/**/*.json',
      'src/semantic/**/*.json',
      `src/themes/${theme}/**/*.json`,
    ],
    platforms: {
      css: {
        transforms: ['name/chassis'],
        buildPath: 'dist/css/',
        files: [
          {
            destination: `${theme}.css`,
            format: 'css/chassis-variables',
            options: { selector: `[data-theme="${theme}"]` },
          },
        ],
      },
    },
  });

  await sd.buildAllPlatforms();
  console.log(`✓ Built ${theme} theme`);
}

console.log('\nAll tokens built successfully!');
