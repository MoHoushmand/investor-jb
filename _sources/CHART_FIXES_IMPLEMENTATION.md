# QDaria Business Plan Chart Width Fix Implementation

## Problem Summary
Charts in the QDaria business plan are not using the full content width, leaving grey space on the right side. Chart heights are also suboptimal for data visualization.

## Solution Components

### 1. CSS Enhancements (`_static/custom.css`)
✅ **COMPLETED** - Added comprehensive CSS rules that:
- Remove max-width constraints on content containers
- Force charts to use 100% width with viewport-width technique
- Set optimal heights (800-1000px) for better data visibility
- Add responsive breakpoints for mobile/tablet
- Remove grey space issues

### 2. JavaScript Configuration (`_static/chart-config.js`)
✅ **COMPLETED** - Created JavaScript enhancement that:
- Automatically configures Plotly charts for responsive behavior
- Provides better default settings
- Adds window resize handlers
- Monkey-patches Plotly.newPlot for automatic optimization

### 3. Config Updates (`_config.yml`)
✅ **COMPLETED** - Updated configuration to:
- Include the chart-config.js file
- Maintain existing CSS inclusion

### 4. Chart Layout Modifications (Pending)
🔄 **NEXT STEPS** - Update individual chart configurations in business plan:

#### Required Changes:
Remove fixed width/height from these chart layouts:
- Market Growth Chart (line ~500): `height: 800, width: 1200`
- Market Segmentation (line ~721): `height: 700, width: 1000`  
- Product Portfolio (line ~1382): `height: 900, width: 1400`
- Tech Stack (line ~1674): `height: 800, width: 800`
- Execution Roadmap (line ~2168): `height: 600, width: 1200`
- Funding Allocation (line ~2294): `height: 600, width: 800`
- Financial Projections (line ~2835): `height: 800, width: 1200`

Replace with: `autosize: true`

#### HTML Div Updates:
- Revenue Stream Chart: Remove inline styles, add `class="chart-placeholder"`
- Risk Assessment Matrix: Remove inline styles, add `class="chart-placeholder"`

## Files Created/Modified

### ✅ Modified Files:
1. **`_static/custom.css`** - Enhanced with chart-specific CSS rules
2. **`_config.yml`** - Added JavaScript file inclusion

### ✅ New Files:
1. **`_static/chart-config.js`** - Plotly chart configuration enhancement
2. **`_static/chart-fixes.md`** - Implementation guide
3. **`_static/chart-layout-fixes.md`** - Specific chart modification instructions

## Implementation Instructions

### To Complete the Fix:

1. **Update Chart Layouts** (Manual Step Required):
   - Edit `content/qdaria-core/qdaria-business/qdaria-business-plan-25.md`
   - Replace fixed width/height with `autosize: true` in chart layouts
   - Update HTML divs to use `class="chart-placeholder"`

2. **Build and Test**:
   ```bash
   jb clean . --all
   jb build .
   open _build/html/content/qdaria-core/qdaria-business/qdaria-business-plan-25.html
   ```

3. **Verify Results**:
   - Charts should use full content width
   - Heights should be 800-1000px
   - No grey space on right side
   - Responsive behavior on window resize

## Expected Results

### Desktop (>1200px):
- Charts use ~95% of viewport width (accounting for sidebar)
- Heights: 800-1000px for optimal data visualization
- Professional appearance suitable for investor presentation

### Tablet (768-1200px):  
- Charts adapt to reduced padding
- Heights: 600px minimum
- Maintain readability

### Mobile (<768px):
- Charts remain functional with horizontal scroll if needed
- Heights: 400px minimum  
- Touch interactions preserved

## CSS Class Reference

### Chart Height Categories:
- **Large charts** (1000px): Market Growth, Financial Projections, Execution Roadmap
- **Medium charts** (900px): Competitor Funding, Funding Allocation, Organizational
- **Standard charts** (850px): Market Segmentation, Product Portfolio, Tech Stack

### Key CSS Classes:
- `.chart-placeholder` - Main chart container styling
- `.js-plotly-plot` - Plotly-specific overrides
- `.plotly-graph-div` - Graph container styling

## Troubleshooting

### If charts still show grey space:
1. Check browser console for JavaScript errors
2. Verify chart-config.js is loaded
3. Use browser DevTools to inspect chart containers
4. Run `window.fixChartWidth('chartId')` in console

### For mobile issues:
1. Test on actual devices, not just browser resize
2. Check touch interactions work properly
3. Verify horizontal scroll functions if needed

## Success Metrics

✅ **Completed Metrics:**
- CSS framework supports full-width charts
- JavaScript enhancement ready
- Configuration updated

🎯 **Target Metrics:**
- Charts use 100% of available content width
- No visible grey space on right side
- Charts heights 800-1000px for desktop viewing
- Professional appearance suitable for investor presentations
- Responsive behavior maintained

## Next Action Required

**Update chart layouts in the business plan markdown file** by replacing fixed dimensions with `autosize: true` and updating HTML divs to use the `chart-placeholder` class.