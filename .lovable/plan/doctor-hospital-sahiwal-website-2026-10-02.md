# Doctor Hospital Sahiwal website

## Build

- Create a responsive shared hospital layout with navigation, mobile menu, animated background, and consistent calls to action.
- Add dedicated Home, About, Departments, Book Appointment, Track Appointment, Testimonials, and Contact pages.
- Use the supplied hospital facts, departments, reviews, hours, contact details, and restrained monochrome visual direction throughout.
- Add locally stored appointment booking with generated DHS IDs, confirmation details, copying, lookup, and demo status changes.
- Include locally stored free healthcare photography and an embedded map on the Contact page.

## Interaction and quality

- Add staggered page entrances, scroll reveals, soft card lift, loading feedback, and animated appointment progress while respecting reduced-motion settings.
- Ensure touch-friendly mobile layouts, accessible labels, keyboard operation, useful empty/error states, and route-specific sharing metadata.
- Verify the complete booking-to-tracking flow and check desktop and mobile layouts.

## Technical details

- Keep all hospital copy in one central data module.
- Keep the experience frontend-only; appointments persist in browser storage and no patient information is sent to a server.
- Use TanStack Router pages, Tailwind v4 semantic tokens, and reusable React components.
