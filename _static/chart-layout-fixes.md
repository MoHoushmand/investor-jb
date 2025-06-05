# Specific Chart Layout Fixes for QDaria Business Plan

## Required Chart Modifications

The following changes need to be made to the chart configurations in the business plan to enable full-width display:

### 1. Remove Fixed Width/Height from Layout Objects

**Current problematic settings:**
```javascript
// Remove these from layout objects:
height: 800,
width: 1200,
// or
height: 700,
width: 1000,
```

**Replace with:**
```javascript
autosize: true,
// Remove width and height entirely
```

### 2. Specific Chart Fixes

#### Market Growth Chart (line ~500)
**Current:**
```javascript
var layout = {
    // ... other settings
    height: 800,
    width: 1200,
};
```

**Should be:**
```javascript
var layout = {
    // ... other settings
    autosize: true,
    margin: { l: 80, r: 80, t: 100, b: 80, pad: 10 },
};
```

#### Market Segmentation Chart (line ~721)
**Current:**
```javascript
height: 700,
width: 1000,
```

**Should be:**
```javascript
autosize: true,
```

#### Product Portfolio Matrix (line ~1382)
**Current:**
```javascript
height: 900,
width: 1400,
```

**Should be:**
```javascript
autosize: true,
```

#### Tech Stack Architecture (line ~1674)
**Current:**
```javascript
height: 800,
width: 800,
```

**Should be:**
```javascript
autosize: true,
```

#### Organizational Chart (line ~1867)
**Current:**
```javascript
height: 800,
```

**Should be:**
```javascript
autosize: true,
```

#### Execution Roadmap (line ~2168)
**Current:**
```javascript
height: 600,
width: 1200,
```

**Should be:**
```javascript
autosize: true,
```

#### Funding Allocation (line ~2294)
**Current:**
```javascript
height: 600,
width: 800,
```

**Should be:**
```javascript
autosize: true,
```

#### Financial Projections (line ~2835)
**Current:**
```javascript
height: 800,
width: 1200,
```

**Should be:**
```javascript
autosize: true,
```

### 3. Inline Style Fixes

#### Revenue Stream Chart (line ~2871)
**Current:**
```html
<div id="revenueStreamChart" style="width: 100%; height: 700px;"></div>
```

**Should be:**
```html
<div id="revenueStreamChart" class="chart-placeholder"></div>
```

#### Risk Assessment Matrix (line ~3212)
**Current:**
```html
<div id="riskAssessmentMatrix" style="width: 100%; height: 600px;"></div>
```

**Should be:**
```html
<div id="riskAssessmentMatrix" class="chart-placeholder"></div>
```

### 4. Margin Optimization

For all charts, ensure margins allow for proper labeling while maximizing chart area:

```javascript
var layout = {
    autosize: true,
    margin: {
        l: 80,   // Left margin for y-axis labels
        r: 80,   // Right margin
        t: 120,  // Top margin for title
        b: 80,   // Bottom margin for x-axis labels
        pad: 10  // Padding
    },
    // ... rest of layout
};
```

## Implementation Priority

### High Priority (Large, Important Charts):
1. Market Growth Chart
2. Financial Projections Chart  
3. Execution Roadmap Chart
4. Product Portfolio Matrix

### Medium Priority:
1. Competitor Funding Chart
2. Funding Allocation Chart
3. Organizational Chart
4. Tech Stack Architecture

### Low Priority:
1. Market Segmentation Chart
2. Revenue Stream Chart
3. Risk Assessment Matrix

## Verification Steps

After making these changes:

1. **Build the book:**
   ```bash
   jb clean . --all
   jb build .
   ```

2. **Open the business plan:**
   ```bash
   open _build/html/content/qdaria-core/qdaria-business/qdaria-business-plan-25.html
   ```

3. **Check each chart:**
   - Should use full content width
   - Height should be 800-1000px minimum  
   - No grey space on right side
   - Charts should be responsive

4. **Browser testing:**
   - Test on different screen sizes
   - Verify charts resize properly
   - Check print layout (Ctrl+P)

## Troubleshooting

If charts still don't use full width:
1. Check browser DevTools for layout constraints
2. Verify CSS is loading properly
3. Check for JavaScript errors in console
4. Use `window.fixChartWidth('chartId')` for manual fixes