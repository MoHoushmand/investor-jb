# Chart Width Fix Implementation Guide

## Problem Analysis
The charts in the QDaria business plan are not using the full width of the content area, leaving grey space on the right side. This is due to:
1. Default Plotly chart sizing constraints
2. Jupyter Book's content width limitations
3. Missing responsive configuration in chart layouts

## Solution Overview

### 1. CSS Enhancements (Added to `_static/custom.css`)
The CSS modifications include:
- Removed max-width constraints on `.wy-nav-content` and `.rst-content`
- Set all chart containers to use 100% width with `!important`
- Increased minimum heights to 800-1000px for better data visibility
- Added responsive breakpoints for mobile devices
- Used viewport-width technique to break out of content constraints
- Removed right-side margins that cause grey space

### 2. JavaScript Configuration (New file: `_static/chart-config.js`)
Created a JavaScript enhancement that:
- Automatically configures all Plotly charts for responsive behavior
- Removes width/height constraints to allow CSS control
- Adds resize handlers for window changes
- Provides better default settings for all charts

### 3. Chart Container Modifications
For each chart div in the business plan, ensure it has the class `chart-placeholder`:
```html
<div id="marketGrowthChart" class="chart-placeholder"></div>
```

## Implementation Steps

### Step 1: Include the JavaScript file
Add this to your `_config.yml` under the `html` section:
```yaml
html:
  extra_navbar: ""
  extra_footer: |
    <script src="_static/chart-config.js"></script>
```

### Step 2: Update Chart Layouts
For each Plotly chart in the business plan, modify the layout to remove fixed dimensions:
```javascript
var layout = {
    title: { /* ... */ },
    // Remove these lines:
    // width: 1200,
    // height: 800,
    // Add this instead:
    autosize: true,
    // ... rest of layout
};
```

### Step 3: Update Chart Config
For each `Plotly.newPlot()` call, ensure responsive config:
```javascript
var config = {
    responsive: true,
    displayModeBar: true,
    // ... other config
};
```

## CSS Classes Reference

### Chart-specific height overrides:
- **Large charts** (1000px): `#marketGrowthChart`, `#financialProjectionsChart`, `#executionRoadmapChart`
- **Medium charts** (900px): `#competitorFundingChart`, `#fundingAllocationChart`, `#organizationalChart`
- **Standard charts** (850px): `#marketSegmentationChart`, `#productPortfolioMatrix`, `#techStackArchitecture`

### Responsive breakpoints:
- **Desktop** (>1200px): Full enhanced layout
- **Tablet** (768-1200px): Reduced padding, 600px min-height
- **Mobile** (<768px): Minimal padding, 400px min-height

## Testing the Fixes

1. Build the Jupyter Book:
   ```bash
   jb clean . --all
   jb build .
   ```

2. Open the business plan:
   ```bash
   open _build/html/content/qdaria-core/qdaria-business/qdaria-business-plan-25.html
   ```

3. Check for:
   - Charts using full content width
   - No grey space on the right
   - Proper chart heights (800-1000px)
   - Responsive behavior on window resize

## Troubleshooting

If charts still show grey space:
1. Check browser console for JavaScript errors
2. Verify the chart-config.js is loaded
3. Use browser DevTools to inspect chart containers
4. Run `window.fixChartWidth('chartId')` in console for specific charts

## Mobile Considerations
While the focus is desktop viewing, the CSS ensures:
- Charts remain visible on mobile with horizontal scroll if needed
- Heights are reduced to 400px minimum on small screens
- Touch interactions work properly with Plotly charts