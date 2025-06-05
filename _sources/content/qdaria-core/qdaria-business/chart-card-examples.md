# QDaria Chart Card Examples

This document demonstrates how to wrap Plotly charts in premium sphinx-design cards for the QDaria business plan.

## Installation

First, ensure sphinx-design is installed:

```bash
pip install sphinx-design>=0.5.0
```

Or if using conda:

```bash
conda install -c conda-forge sphinx-design
```

## Example 1: Market Growth Chart (Primary Style)

```{card} 📈 **Quantum Computing Market Growth Projection**
:class-card: qdaria-chart-card primary full-width
:class-header: sd-card-header
:class-body: sd-card-body

<div id="marketGrowthChart" class="chart-placeholder"></div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Your existing market growth chart code here
    // ... (abbreviated for example)
});
</script>

+++
<div class="chart-description">
<span class="insight-badge">💡 Key Insight</span>
The quantum computing market is projected to reach $1.3 trillion by 2035, representing a 
significant opportunity for early movers like QDaria. Our strategic positioning at the 
intersection of quantum and AI allows us to capture value across multiple verticals.
</div>
```

## Example 2: Competitor Funding Chart (Secondary Style)

```{card} 💰 **Competitive Landscape: Funding Analysis**
:class-card: qdaria-chart-card secondary
:class-header: sd-card-header
:class-body: sd-card-body

<div class="chart-controls">
    <button class="active" onclick="updateChart('all')">All Companies</button>
    <button onclick="updateChart('hardware')">Hardware Focus</button>
    <button onclick="updateChart('software')">Software Focus</button>
</div>

<div id="competitorFundingChart" class="chart-placeholder"></div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Your existing competitor funding chart code here
    // ... (abbreviated for example)
});
</script>

+++
<div class="chart-description">
<span class="insight-badge">🎯 Strategic Position</span>
While established players have raised significant capital, QDaria's unique approach to 
topological quantum computing and integrated AI solutions creates a differentiated market position. 
Our $12M seed round will enable rapid progress toward commercial viability.
</div>
```

## Example 3: Financial Projections Chart (Quantum Style)

```{card} 📊 **QDaria Financial Projections 2025-2029**
:class-card: qdaria-chart-card quantum full-width
:class-header: sd-card-header
:class-body: sd-card-body

<div id="financialProjectionsChart" class="chart-placeholder"></div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Your existing financial projections chart code here
    // ... (abbreviated for example)
});
</script>

+++
<div class="chart-description">
<span class="insight-badge">📈 Growth Trajectory</span>
<span class="insight-badge">🎯 Break-even: 2027</span>
Our financial model shows a clear path to profitability by Q4 2027, driven by multiple 
revenue streams across our product portfolio. The quantum hardware-as-a-service offering 
provides immediate recurring revenue while our software ventures scale.
</div>
```

## Example 4: Organizational Chart (Accent Style)

```{card} 🏢 **QDaria Holdings Structure**
:class-card: qdaria-chart-card accent
:class-header: sd-card-header
:class-body: sd-card-body

<div id="organizationalChart" class="chart-placeholder"></div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Your existing organizational chart code here
    // ... (abbreviated for example)
});
</script>

+++
<div class="chart-description">
<span class="insight-badge">🚀 Scalable Structure</span>
QDaria Holdings' modular structure enables each venture to develop independently while 
benefiting from shared quantum infrastructure and expertise. This approach maximizes 
flexibility for future spin-offs and individual IPOs.
</div>
```

## Implementation Guide

### Step 1: Update Your Markdown Files

Replace your existing chart div with the card wrapper structure:

**Before:**
```html
<div id="marketGrowthChart" class="chart-placeholder"></div>
<script>...</script>
```

**After:**
````markdown
```{card} 📈 **Chart Title**
:class-card: qdaria-chart-card primary full-width
:class-header: sd-card-header
:class-body: sd-card-body

<div id="marketGrowthChart" class="chart-placeholder"></div>
<script>...</script>

+++
<div class="chart-description">
Your chart description here...
</div>
```
````

### Step 2: Choose Your Card Style

- **primary**: Turquoise theme for market/growth charts
- **secondary**: Royal blue theme for competitive analysis
- **quantum**: Purple theme for technical/financial projections
- **accent**: Tomato theme for organizational/structural charts

### Step 3: Add Interactive Elements

You can enhance cards with:
- Control buttons for filtering data
- Insight badges highlighting key metrics
- Hover effects and animations
- Full-width layouts for maximum impact

### Step 4: Customize Icons

Use appropriate icons in the card header:
- 📈 Growth/Trends
- 💰 Financial/Funding
- 📊 Data/Analytics
- 🏢 Organization
- 🔬 Research/Technical
- 🌍 Global/Market
- ⚛️ Quantum-specific

## Best Practices

1. **Consistent Styling**: Use the same card variant for similar chart types
2. **Meaningful Descriptions**: Add context and insights below each chart
3. **Responsive Design**: Test on mobile devices
4. **Loading States**: Charts show loading animation while Plotly initializes
5. **Accessibility**: Include descriptive titles and alt text where possible

## Advanced Features

### Dynamic Chart Updates

```javascript
function updateChart(filter) {
    // Update button states
    document.querySelectorAll('.chart-controls button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update Plotly chart based on filter
    // ... your update logic
}
```

### Animated Transitions

The CSS includes smooth transitions for hover effects and state changes. Charts will gracefully animate when updated.

### Print Optimization

Cards are designed to look professional when printed or exported to PDF, maintaining their visual hierarchy and key information.