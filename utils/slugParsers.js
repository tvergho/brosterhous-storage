// Helper functions for normalizing slugs across different formats (i.e. resolving discrepancies between 'updates' and '/updates').

// Appends the specified prefix to the URL slug provided.
// Returns a URL in the format /prefix/slug.
export const appendPrefix = (slug, prefix) => {
  let modifiedSlug = slug;
  modifiedSlug = modifiedSlug.replace(`${prefix}/`, '');
  modifiedSlug = modifiedSlug.replace(/\//g, '');
  modifiedSlug = `/${prefix}/${modifiedSlug}`;
  return modifiedSlug;
};

// Appends a slash to the beginning of the slug, if not already in the URL.
export const appendSlash = (link) => {
  if (link.indexOf('/') > -1) return link;
  return `/${link}`;
};

export const isSvg = (link) => {
  return link.includes('svg');
};

export const calcDate = (date) => {
  const dateObj = new Date(date);
  if (dateObj === 'Invalid Date' || Number.isNaN(dateObj)) return null;

  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateObj);
  const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(dateObj);
  const da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dateObj);

  return `${mo} ${da}, ${ye}`;
};
