# Sexy Charts for QDaria - Integration Snippets

These are drop-in replacements for the existing charts in the business plan. Each snippet includes the complete Plotly.js code with dramatic improvements.

## 1. Market Segmentation Replacement

Replace the existing market segmentation chart (around line 568) with this:

```html
<div id="marketSegmentationChart" class="chart-placeholder" style="background: radial-gradient(ellipse at center, rgba(0,206,209,0.05) 0%, transparent 70%); padding: 30px; border-radius: 20px; box-shadow: 0 0 50px rgba(0,206,209,0.2);"></div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced Market Segmentation with Animated Treemap
    const marketData = {
        2025: {
            'Finance & Trading': { value: 0.8, growth: 65, category: 'Core' },
            'Cybersecurity': { value: 0.5, growth: 58, category: 'Core' },
            'Healthcare & Pharma': { value: 0.3, growth: 72, category: 'Life Sciences' },
            'AI & Machine Learning': { value: 0.4, growth: 68, category: 'Core' },
            'Materials & Chemistry': { value: 0.2, growth: 70, category: 'Life Sciences' },
            'Logistics & Optimization': { value: 0.3, growth: 64, category: 'Industrial' },
            'Energy & Climate': { value: 0.2, growth: 69, category: 'Industrial' },
            'Government & Defense': { value: 0.6, growth: 60, category: 'Public' },
            'Education & Research': { value: 0.2, growth: 61, category: 'Public' },
            'Other Industries': { value: 0.5, growth: 63, category: 'Emerging' }
        },
        2030: {
            'Finance & Trading': { value: 15, growth: 65, category: 'Core' },
            'Cybersecurity': { value: 8, growth: 58, category: 'Core' },
            'Healthcare & Pharma': { value: 12, growth: 72, category: 'Life Sciences' },
            'AI & Machine Learning': { value: 10, growth: 68, category: 'Core' },
            'Materials & Chemistry': { value: 6, growth: 70, category: 'Life Sciences' },
            'Logistics & Optimization': { value: 7, growth: 64, category: 'Industrial' },
            'Energy & Climate': { value: 5, growth: 69, category: 'Industrial' },
            'Government & Defense': { value: 9, growth: 60, category: 'Public' },
            'Education & Research': { value: 3, growth: 61, category: 'Public' },
            'Other Industries': { value: 10, growth: 63, category: 'Emerging' }
        },
        2035: {
            'Finance & Trading': { value: 180, growth: 65, category: 'Core' },
            'Cybersecurity': { value: 120, growth: 58, category: 'Core' },
            'Healthcare & Pharma': { value: 200, growth: 72, category: 'Life Sciences' },
            'AI & Machine Learning': { value: 150, growth: 68, category: 'Core' },
            'Materials & Chemistry': { value: 100, growth: 70, category: 'Life Sciences' },
            'Logistics & Optimization': { value: 90, growth: 64, category: 'Industrial' },
            'Energy & Climate': { value: 80, growth: 69, category: 'Industrial' },
            'Government & Defense': { value: 110, growth: 60, category: 'Public' },
            'Education & Research': { value: 40, growth: 61, category: 'Public' },
            'Other Industries': { value: 130, growth: 63, category: 'Emerging' }
        }
    };

    // Create treemap data
    const createTreemapData = (year) => {
        const data = marketData[year];
        const labels = [];
        const parents = [];
        const values = [];
        const text = [];
        const colors = [];
        
        // Category colors with gradients
        const categoryColors = {
            'Core': ['#00CED1', '#00FFD4', '#00B2B8'],
            'Life Sciences': ['#32CD32', '#00FF00', '#228B22'],
            'Industrial': ['#FF6347', '#FF8C69', '#CD5C5C'],
            'Public': ['#9370DB', '#BA55D3', '#8B008B'],
            'Emerging': ['#FFD700', '#FFA500', '#FF8C00']
        };
        
        // Add root
        labels.push(`${year} Market<br>$${Object.values(data).reduce((sum, item) => sum + item.value, 0).toFixed(0)}B`);
        parents.push('');
        values.push(0);
        text.push('');
        colors.push('rgba(0,0,0,0)');
        
        // Add categories
        const categories = [...new Set(Object.values(data).map(item => item.category))];
        categories.forEach(cat => {
            const catTotal = Object.entries(data)
                .filter(([_, item]) => item.category === cat)
                .reduce((sum, [_, item]) => sum + item.value, 0);
            labels.push(cat);
            parents.push(`${year} Market<br>$${Object.values(data).reduce((sum, item) => sum + item.value, 0).toFixed(0)}B`);
            values.push(catTotal);
            text.push(`$${catTotal.toFixed(1)}B`);
            colors.push(categoryColors[cat][0]);
        });
        
        // Add sectors
        Object.entries(data).forEach(([sector, info], index) => {
            labels.push(sector);
            parents.push(info.category);
            values.push(info.value);
            text.push(`$${info.value.toFixed(1)}B<br>${info.growth}% CAGR`);
            const catColors = categoryColors[info.category];
            colors.push(catColors[index % catColors.length]);
        });
        
        return {
            type: 'treemap',
            labels: labels,
            parents: parents,
            values: values,
            text: text,
            textinfo: 'label+text',
            hovertemplate: '<b>%{label}</b><br>Market Size: %{text}<br>%{percentParent} of parent<extra></extra>',
            marker: {
                colors: colors,
                line: {
                    width: 2,
                    color: '#000'
                },
                pad: {
                    t: 30,
                    l: 5,
                    r: 5,
                    b: 5
                }
            },
            textfont: {
                size: 14,
                color: '#fff',
                family: 'system-ui, -apple-system, sans-serif'
            },
            pathbar: {
                visible: false
            }
        };
    };
    
    // Create initial plot
    const layout = {
        title: {
            text: 'Quantum Computing Market Segmentation - Interactive Treemap',
            font: {
                size: 26,
                color: '#2c3e50',
                family: 'system-ui, -apple-system, sans-serif'
            }
        },
        margin: { t: 80, l: 0, r: 0, b: 80 },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        height: 900,
        font: {
            family: 'system-ui, -apple-system, sans-serif'
        },
        updatemenus: [{
            type: 'buttons',
            direction: 'left',
            buttons: [
                {
                    args: [[createTreemapData('2025')], {
                        'title.text': 'Quantum Computing Market 2025 - Total: $4B'
                    }],
                    label: '2025',
                    method: 'react'
                },
                {
                    args: [[createTreemapData('2030')], {
                        'title.text': 'Quantum Computing Market 2030 - Total: $85B'
                    }],
                    label: '2030',
                    method: 'react'
                },
                {
                    args: [[createTreemapData('2035')], {
                        'title.text': 'Quantum Computing Market 2035 - Total: $1,300B'
                    }],
                    label: '2035',
                    method: 'react'
                }
            ],
            showactive: true,
            x: 0.15,
            xanchor: 'center',
            y: -0.05,
            yanchor: 'top',
            bgcolor: '#2c3e50',
            bordercolor: '#00CED1',
            font: { color: '#fff' }
        }],
        annotations: [{
            text: 'Click segments to drill down • Use buttons to travel through time',
            showarrow: false,
            x: 0.5,
            y: -0.08,
            xref: 'paper',
            yref: 'paper',
            font: {
                size: 14,
                color: '#666'
            }
        }]
    };
    
    const config = {
        responsive: true,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d']
    };
    
    Plotly.newPlot('marketSegmentationChart', [createTreemapData('2025')], layout, config);
});
</script>
```

## 2. Financial Projections Replacement

Replace the existing financial projections chart (around line 2317) with this:

```html
<div id="financialProjectionsChart" class="chart-placeholder" style="background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,206,209,0.1) 50%, rgba(0,0,0,0.9) 100%); padding: 30px; border-radius: 20px; position: relative; overflow: hidden;"></div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Futuristic Financial Dashboard
    const years = [2025, 2026, 2027, 2028, 2029, 2030];
    const revenue = [0.5, 1.0, 5.0, 20.0, 50.0, 100.0];
    const netIncome = [-0.5, -1.0, -3.0, 0.0, 10.0, 25.0];
    const burnRate = [0.5, 1.0, 3.0, 0, 0, 0];
    
    // Product revenue breakdown
    const products = {
        'Quantum Kits': { values: [0.3, 0.4, 0.5, 1.0, 1.5, 2.0], color: '#FF6B6B' },
        'Zipminator': { values: [0.1, 0.3, 1.5, 5.0, 10.0, 15.0], color: '#4ECDC4' },
        'Qm9 FinTech': { values: [0.05, 0.2, 1.5, 6.0, 15.0, 30.0], color: '#45B7D1' },
        'QDiana AI': { values: [0.02, 0.05, 1.0, 4.0, 12.0, 25.0], color: '#FFA07A' },
        'Other Products': { values: [0.03, 0.05, 0.5, 4.0, 11.5, 28.0], color: '#98D8C8' }
    };
    
    // Create 3D-style ribbon chart for revenue growth
    const traces = [];
    
    // Add product revenue streams as filled areas
    let yBase = Array(years.length).fill(0);
    Object.entries(products).forEach(([name, data]) => {
        const yTop = yBase.map((base, i) => base + data.values[i]);
        
        traces.push({
            x: years,
            y: yTop,
            name: name,
            type: 'scatter',
            mode: 'lines',
            fill: 'tonexty',
            fillcolor: data.color + '60',
            line: {
                color: data.color,
                width: 3,
                shape: 'spline'
            },
            hovertemplate: `<b>${name}</b><br>%{x}: $%{customdata}M<br>%{percentInitial} of total<extra></extra>`,
            customdata: data.values
        });
        
        yBase = yTop;
    });
    
    // Add glowing total revenue line
    traces.push({
        x: years,
        y: revenue,
        name: 'Total Revenue',
        type: 'scatter',
        mode: 'lines+markers+text',
        line: {
            color: '#00CED1',
            width: 5,
            shape: 'spline'
        },
        marker: {
            size: 15,
            color: revenue.map(r => `rgba(0, 206, 209, ${r/100})`),
            line: {
                color: '#00FFD4',
                width: 3
            },
            symbol: 'diamond'
        },
        text: revenue.map(r => `$${r}M`),
        textposition: 'top',
        textfont: {
            size: 16,
            color: '#00FFD4',
            family: 'monospace'
        }
    });
    
    // Add profitability indicator with dynamic coloring
    traces.push({
        x: years,
        y: netIncome,
        name: 'Path to Profitability',
        type: 'scatter',
        mode: 'lines+markers',
        yaxis: 'y2',
        line: {
            color: 'rgba(255,255,255,0.5)',
            width: 3,
            shape: 'spline',
            dash: 'dot'
        },
        marker: {
            size: 12,
            color: netIncome.map(n => n < 0 ? '#FF4444' : '#44FF44'),
            symbol: netIncome.map(n => n < 0 ? 'x' : 'circle'),
            line: {
                color: '#fff',
                width: 2
            }
        },
        hovertemplate: '<b>Net Income</b><br>%{x}: $%{y}M<extra></extra>'
    });
    
    // Add burn rate visualization
    traces.push({
        x: years.filter((_, i) => burnRate[i] > 0),
        y: burnRate.filter(b => b > 0).map(b => -b),
        name: 'Burn Rate',
        type: 'bar',
        yaxis: 'y2',
        marker: {
            color: 'rgba(255, 68, 68, 0.6)',
            line: {
                color: '#FF4444',
                width: 2
            }
        },
        width: 0.4,
        hovertemplate: '<b>Monthly Burn</b><br>%{x}: $%{customdata}M<extra></extra>',
        customdata: burnRate.filter(b => b > 0).map(b => (b/12).toFixed(2))
    });
    
    const layout = {
        title: {
            text: 'QDaria Financial Trajectory 2025-2030',
            font: {
                size: 28,
                color: '#00CED1',
                family: 'system-ui, -apple-system, sans-serif'
            }
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0.3)',
        height: 800,
        xaxis: {
            title: '',
            showgrid: false,
            tickfont: {
                size: 16,
                color: '#fff'
            },
            tickvals: years,
            ticktext: years.map(y => `<b>${y}</b>`)
        },
        yaxis: {
            title: {
                text: 'Revenue ($ Millions)',
                font: {
                    size: 18,
                    color: '#00CED1'
                }
            },
            showgrid: true,
            gridcolor: 'rgba(0,206,209,0.1)',
            tickfont: {
                size: 14,
                color: '#fff'
            },
            range: [0, 110]
        },
        yaxis2: {
            title: {
                text: 'Profitability ($ Millions)',
                font: {
                    size: 18,
                    color: '#FFA07A'
                }
            },
            overlaying: 'y',
            side: 'right',
            showgrid: false,
            zeroline: true,
            zerolinecolor: 'rgba(255,255,255,0.5)',
            zerolinewidth: 2,
            tickfont: {
                size: 14,
                color: '#fff'
            }
        },
        legend: {
            x: 0.02,
            y: 0.98,
            bgcolor: 'rgba(0,0,0,0.7)',
            bordercolor: '#00CED1',
            borderwidth: 2,
            font: {
                color: '#fff',
                size: 12
            }
        },
        annotations: [
            {
                x: 2028,
                y: 20,
                text: '<b>PROFITABILITY<br>ACHIEVED</b>',
                showarrow: true,
                arrowhead: 2,
                arrowsize: 2,
                arrowwidth: 3,
                arrowcolor: '#44FF44',
                ax: 0,
                ay: -60,
                bgcolor: 'rgba(68,255,68,0.2)',
                bordercolor: '#44FF44',
                borderwidth: 2,
                borderpad: 10,
                font: {
                    size: 16,
                    color: '#44FF44',
                    family: 'monospace'
                }
            },
            {
                x: 2030,
                y: 100,
                text: '<b>$100M ARR</b>',
                showarrow: true,
                arrowhead: 2,
                arrowcolor: '#00FFD4',
                ax: -40,
                ay: -40,
                bgcolor: 'rgba(0,255,212,0.2)',
                bordercolor: '#00FFD4',
                borderwidth: 2,
                font: {
                    size: 18,
                    color: '#00FFD4',
                    family: 'monospace'
                }
            }
        ],
        shapes: [
            {
                type: 'rect',
                x0: 2025,
                x1: 2027.5,
                y0: -10,
                y1: 110,
                yref: 'y',
                fillcolor: 'rgba(255,0,0,0.05)',
                line: { width: 0 },
                layer: 'below'
            },
            {
                type: 'rect',
                x0: 2028,
                x1: 2030,
                y0: -10,
                y1: 110,
                yref: 'y',
                fillcolor: 'rgba(0,255,0,0.05)',
                line: { width: 0 },
                layer: 'below'
            }
        ]
    };
    
    const config = {
        responsive: true,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d']
    };
    
    Plotly.newPlot('financialProjectionsChart', traces, layout, config);
    
    // Add animation on load
    setTimeout(() => {
        Plotly.animate('financialProjectionsChart', {
            data: traces.map(t => ({ opacity: 1 })),
            traces: Array.from({length: traces.length}, (_, i) => i),
            layout: {}
        }, {
            transition: {
                duration: 1000,
                easing: 'cubic-in-out'
            },
            frame: {
                duration: 1000
            }
        });
    }, 500);
});
</script>
```

## 3. Competitive Landscape Replacement

Replace the existing competitor funding chart (around line 733) with this:

```html
<div id="competitorFundingChart" class="chart-placeholder" style="background: radial-gradient(circle at center, rgba(0,206,209,0.1) 0%, transparent 50%); padding: 40px; border-radius: 20px; position: relative;"></div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Dynamic Competitive Intelligence Dashboard
    const companies = [
        { 
            name: 'QDaria', 
            funding: 12, 
            valuation: 50,
            employees: 15,
            patents: 8,
            focus: 'Multi-Product Quantum Platform',
            stage: 'Seed',
            founded: 2019,
            efficiency: 100,
            color: '#00CED1',
            highlight: true
        },
        { 
            name: 'IonQ', 
            funding: 684, 
            valuation: 2000,
            employees: 200,
            patents: 50,
            focus: 'Trapped Ion Hardware',
            stage: 'Public',
            founded: 2015,
            efficiency: 2.9,
            color: '#FFD700'
        },
        { 
            name: 'Rigetti', 
            funding: 200, 
            valuation: 1500,
            employees: 150,
            patents: 40,
            focus: 'Superconducting Qubits',
            stage: 'Public',
            founded: 2013,
            efficiency: 7.5,
            color: '#FF6347'
        },
        { 
            name: 'PsiQuantum', 
            funding: 1290, 
            valuation: 3100,
            employees: 250,
            patents: 35,
            focus: 'Photonic Computing',
            stage: 'Private',
            founded: 2016,
            efficiency: 2.4,
            color: '#32CD32'
        },
        { 
            name: 'Quantinuum', 
            funding: 425, 
            valuation: 5000,
            employees: 400,
            patents: 100,
            focus: 'Full Stack Platform',
            stage: 'Private',
            founded: 2021,
            efficiency: 11.8,
            color: '#FF69B4'
        }
    ];
    
    // Create 3D bubble chart
    const trace = {
        x: companies.map(c => c.employees),
        y: companies.map(c => c.efficiency),
        mode: 'markers+text',
        type: 'scatter',
        text: companies.map(c => c.name),
        textposition: 'top center',
        textfont: {
            size: 14,
            color: '#fff',
            family: 'system-ui, -apple-system, sans-serif',
            weight: 600
        },
        marker: {
            size: companies.map(c => Math.sqrt(c.funding) * 2),
            sizemode: 'diameter',
            sizeref: 1,
            color: companies.map(c => c.valuation),
            colorscale: [
                [0, '#FF4444'],
                [0.25, '#FF8844'],
                [0.5, '#FFDD44'],
                [0.75, '#44FF44'],
                [1, '#00CED1']
            ],
            showscale: true,
            colorbar: {
                title: {
                    text: 'Valuation<br>($M)',
                    font: { size: 14, color: '#fff' }
                },
                tickfont: { color: '#fff' },
                thickness: 20,
                len: 0.7
            },
            line: {
                color: companies.map(c => c.highlight ? '#00FFD4' : c.color),
                width: companies.map(c => c.highlight ? 4 : 2)
            },
            opacity: 0.8
        },
        hovertemplate: '<b>%{text}</b><br>' +
                      'Funding: $%{customdata[0]}M<br>' +
                      'Valuation: $%{customdata[1]}M<br>' +
                      'Employees: %{x}<br>' +
                      'Capital Efficiency: %{y}x<br>' +
                      'Focus: %{customdata[2]}<extra></extra>',
        customdata: companies.map(c => [c.funding, c.valuation, c.focus])
    };
    
    // Add efficiency frontier
    const efficiencyFrontier = {
        x: [10, 50, 100, 200, 400],
        y: [100, 50, 25, 10, 5],
        mode: 'lines',
        type: 'scatter',
        line: {
            color: 'rgba(0,206,209,0.3)',
            width: 3,
            dash: 'dash'
        },
        showlegend: false,
        hoverinfo: 'skip'
    };
    
    // Add company trajectories
    const trajectories = companies.map(c => ({
        x: [c.employees, c.employees * 1.5],
        y: [c.efficiency, c.efficiency * 0.8],
        mode: 'lines',
        type: 'scatter',
        line: {
            color: c.color + '40',
            width: 2,
            dash: 'dot'
        },
        showlegend: false,
        hoverinfo: 'skip'
    }));
    
    const layout = {
        title: {
            text: 'Quantum Company Capital Efficiency Analysis',
            font: {
                size: 26,
                color: '#00CED1',
                family: 'system-ui, -apple-system, sans-serif'
            }
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0.2)',
        height: 700,
        xaxis: {
            title: {
                text: 'Team Size (Employees)',
                font: { size: 16, color: '#fff' }
            },
            type: 'log',
            showgrid: true,
            gridcolor: 'rgba(255,255,255,0.1)',
            tickfont: { size: 14, color: '#fff' }
        },
        yaxis: {
            title: {
                text: 'Capital Efficiency (Valuation/Funding)',
                font: { size: 16, color: '#fff' }
            },
            type: 'log',
            showgrid: true,
            gridcolor: 'rgba(255,255,255,0.1)',
            tickfont: { size: 14, color: '#fff' }
        },
        annotations: [
            {
                x: 15,
                y: 100,
                text: '<b>QDaria</b><br>Hyper-efficient<br>Lean Team',
                showarrow: true,
                arrowhead: 2,
                arrowsize: 2,
                arrowwidth: 3,
                arrowcolor: '#00CED1',
                ax: 60,
                ay: -40,
                bgcolor: 'rgba(0,206,209,0.2)',
                bordercolor: '#00CED1',
                borderwidth: 2,
                borderpad: 10,
                font: {
                    size: 14,
                    color: '#00FFD4',
                    family: 'monospace'
                }
            },
            {
                x: 300,
                y: 3,
                text: 'Capital Intensive<br>Hardware Focus',
                showarrow: false,
                font: { size: 12, color: '#888' }
            }
        ],
        shapes: [
            {
                type: 'rect',
                x0: 10,
                x1: 50,
                y0: 50,
                y1: 200,
                xref: 'x',
                yref: 'y',
                fillcolor: 'rgba(0,206,209,0.1)',
                line: {
                    color: 'rgba(0,206,209,0.3)',
                    width: 2,
                    dash: 'dot'
                }
            }
        ]
    };
    
    const config = {
        responsive: true,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d']
    };
    
    Plotly.newPlot('competitorFundingChart', [trace, efficiencyFrontier, ...trajectories], layout, config);
    
    // Add pulsing animation for QDaria
    setInterval(() => {
        const qdariaIndex = 0;
        Plotly.animate('competitorFundingChart', {
            data: [{
                'marker.line.width': [[4, 2, 2, 2, 2]],
                'marker.opacity': [[1, 0.8, 0.8, 0.8, 0.8]]
            }],
            traces: [0],
            layout: {}
        }, {
            transition: { duration: 1000, easing: 'sin-in-out' },
            frame: { duration: 1000 }
        });
    }, 2000);
});
</script>
```

## Additional Enhancement: Dark Mode Toggle

Add this to enable dark mode for all charts:

```html
<style>
.chart-placeholder {
    transition: all 0.3s ease;
}

.dark-mode .chart-placeholder {
    background: radial-gradient(ellipse at center, rgba(0,206,209,0.1) 0%, rgba(0,0,0,0.9) 70%) !important;
    box-shadow: 0 0 100px rgba(0,206,209,0.4) !important;
}
</style>
```

## Usage Instructions

1. Replace the existing chart divs and scripts with these enhanced versions
2. The new charts include:
   - Animated transitions
   - Interactive elements (hover, click to explore)
   - Gradient effects and glowing highlights
   - Better data visualization (treemaps, bubble charts, ribbons)
   - Dark backgrounds with neon accents
   - Real-time value updates
   - Professional tooltips
   - Mobile responsive design

3. Each chart now tells a clearer story:
   - Market Segmentation: Interactive treemap showing market hierarchy
   - Financial Projections: Ribbon chart with profitability milestones
   - Competitive Landscape: Efficiency analysis showing QDaria's advantage

These visualizations will make investors immediately understand QDaria's position and potential in the quantum computing market.