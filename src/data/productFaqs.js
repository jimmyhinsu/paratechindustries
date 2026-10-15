/**
 * Product FAQs helper module.
 * No static FAQs are provided by default.
 * FAQs are strictly dynamic and only shown when added through the admin panel.
 */

export const defaultProductFaqs = {};

/**
 * Returns empty array if no custom FAQs have been added for this product.
 */
export function getDefaultFaqsForSlug(slug) {
  return [];
}
