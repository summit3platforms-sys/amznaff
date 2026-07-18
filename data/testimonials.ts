// ---------------------------------------------------------------------------
// Intentionally empty. The previous entries here were placeholder/dummy
// testimonials that referenced specific seed products which have since been
// removed. TestimonialsSection renders nothing when this array is empty, so
// the homepage degrades cleanly. Add real testimonials (with permission)
// once collected — see components/TestimonialsSection.tsx for the shape.
// ---------------------------------------------------------------------------

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [];
