# Center Incomplete Grid Rows

## Plan

Fix grid layouts so incomplete last rows are centered (e.g., 7 items in 3 cols → 3, 3, 1 centered).

## Steps

- [x] Update `components/Edge.tsx`: change `grid grid-cols-3` to `flex flex-wrap justify-center` for expertise items
- [x] Update `components/Features.tsx`: change all 3 grids (`whyUs`, `programs`, `steps`) to `flex flex-wrap justify-center`
- [x] Update `components/Testimonials.tsx`: change testimonials grid to `flex flex-wrap justify-center`
