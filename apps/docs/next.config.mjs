import nextra from 'nextra';

const withNextra = nextra({});

export default withNextra({
  serverExternalPackages: ['typescript', 'twoslash', '@shikijs/twoslash'],
});
