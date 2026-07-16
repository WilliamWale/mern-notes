export function formatDate(date, locale = 'en-US') {
  try {
    return new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  } catch (e) {
    return date.toLocaleDateString();
  }
}
