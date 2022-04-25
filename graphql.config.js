// eslint-disable-next-line
require('dotenv').config();

const apiUrl = 'https://rickandmortyapi.com/graphql';

// eslint-disable-next-line no-undef
module.exports = {
  overwrite: true,

  // We use local schema for generation since it speeds up the process
  schema: apiUrl,
  documents: './**/*.graphql',
  extensions: {
    codegen: {
      generates: {
        'src/': {
          config: {
            dedupeOperationSuffix: true,
            documentMode: 'documentNodeImportFragments',
            nonOptionalTypename: true,
            omitOperationSuffix: true,
            preResolveTypes: true,
            withHooks: true,
            maybeValue: 'T',
          },
          plugins: ['typescript-operations', 'typescript-react-apollo'],
          preset: 'near-operation-file',
          presetConfig: {
            baseTypesPath: '__generated__/types.ts',
            extension: '.ts',
            folder: '__generated__',
          },
        },
        'src/__generated__/types.ts': {
          config: {
            namingConvention: 'keep',
          },
          plugins: ['typescript'],
        },

        './schema.graphql': {
          schema: apiUrl,
          plugins: ['schema-ast'],
        },
      },
    },
    endpoints: {
      default: apiUrl,
    },
  },
};
