# Revenue Stream Breakdown - Embed Code

This code should be placed in the "Financial Plan and Projections" section (after line 1406, before or after the existing revenue projection discussion):

```html
<div id="revenueStreamChart" style="width: 100%; height: 700px;"></div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Years for x-axis
    var years = ['2025', '2026', '2027', '2028', '2029', '2030'];
    
    // Revenue streams data (in millions)
    var revenueStreams = {
        'Software Licensing': {
            base: [0.1, 0.3, 1.2, 5.5, 15.0, 28.0],
            upside: [0.2, 0.5, 2.0, 8.0, 22.0, 40.0],
            color: '#00CED1', // QDaria teal
            description: 'Core quantum software products (Zipminator, TeHaA, etc.)'
        },
        'Consulting & Services': {
            base: [0.5, 1.2, 2.5, 4.0, 6.0, 8.0],
            upside: [0.8, 2.0, 4.0, 6.5, 10.0, 15.0],
            color: '#3498db',
            description: 'Enterprise consulting and custom quantum solutions'
        },
        'Hardware Partnerships': {
            base: [0.0, 0.2, 0.8, 3.0, 8.0, 15.0],
            upside: [0.0, 0.5, 1.5, 5.0, 12.0, 22.0],
            color: '#e74c3c',
            description: 'Revenue from Rigetti partnership and hardware access'
        },
        'Research Grants': {
            base: [0.3, 0.8, 1.5, 2.0, 2.5, 3.0],
            upside: [0.5, 1.2, 2.5, 3.5, 4.0, 5.0],
            color: '#2ecc71',
            description: 'Government and institutional research funding'
        },
        'SaaS Subscriptions': {
            base: [0.0, 0.0, 0.5, 5.5, 18.5, 38.0],
            upside: [0.0, 0.0, 1.0, 9.0, 28.0, 55.0],
            color: '#f39c12',
            description: 'QDiana education platform and Qm9 cloud services'
        },
        'Kit Rentals': {
            base: [0.1, 0.3, 0.5, 1.0, 1.0, 1.0],
            upside: [0.2, 0.5, 0.8, 1.5, 2.0, 2.0],
            color: '#9b59b6',
            description: 'Quantum hardware kit rental program'
        }
    };
    
    // Create traces for base case scenario
    var traces = [];
    var streamNames = Object.keys(revenueStreams);
    
    streamNames.forEach((stream, index) => {
        traces.push({
            x: years,
            y: revenueStreams[stream].base,
            name: stream,
            type: 'scatter',
            mode: 'lines',
            line: {
                width: 0,
                color: revenueStreams[stream].color
            },
            fill: index === 0 ? 'tozeroy' : 'tonexty',
            fillcolor: revenueStreams[stream].color,
            stackgroup: 'base',
            legendgroup: stream,
            hovertemplate: '<b>' + stream + '</b><br>' +
                          'Year: %{x}<br>' +
                          'Revenue: $%{y:.1f}M<br>' +
                          '<i>' + revenueStreams[stream].description + '</i><br>' +
                          '<extra></extra>'
        });
    });
    
    // Add total revenue line for base case
    var totalBase = years.map((year, i) => 
        streamNames.reduce((sum, stream) => sum + revenueStreams[stream].base[i], 0)
    );
    
    traces.push({
        x: years,
        y: totalBase,
        name: 'Total Revenue (Base)',
        type: 'scatter',
        mode: 'lines+markers',
        line: {
            color: '#2c3e50',
            width: 3,
            dash: 'solid'
        },
        marker: {
            size: 8,
            color: '#2c3e50'
        },
        hovertemplate: '<b>Total Revenue (Base Case)</b><br>' +
                      'Year: %{x}<br>' +
                      'Revenue: $%{y:.1f}M<br>' +
                      '<extra></extra>'
    });
    
    // Add upside scenario line
    var totalUpside = years.map((year, i) => 
        streamNames.reduce((sum, stream) => sum + revenueStreams[stream].upside[i], 0)
    );
    
    traces.push({
        x: years,
        y: totalUpside,
        name: 'Total Revenue (Upside)',
        type: 'scatter',
        mode: 'lines+markers',
        line: {
            color: '#00CED1',
            width: 3,
            dash: 'dot'
        },
        marker: {
            size: 8,
            color: '#00CED1',
            symbol: 'diamond'
        },
        hovertemplate: '<b>Total Revenue (Upside Scenario)</b><br>' +
                      'Year: %{x}<br>' +
                      'Revenue: $%{y:.1f}M<br>' +
                      '<extra></extra>'
    });
    
    // Add milestone annotations
    var milestones = [
        {year: '2026', text: 'Series A', y: 5},
        {year: '2027', text: 'Series B', y: 10},
        {year: '2028', text: 'First IPO<br>(Zipminator)', y: 30},
        {year: '2029', text: 'Qm9 IPO', y: 60},
        {year: '2030', text: 'QDiana IPO', y: 110}
    ];
    
    var layout = {
        title: {
            text: '<b>QDaria Revenue Stream Breakdown & Growth Projections</b><br><sub>Base Case vs. Upside Scenario (2025-2030)</sub>',
            font: {
                size: 24,
                color: '#2c3e50'
            }
        },
        xaxis: {
            title: {
                text: '<b>Year</b>',
                font: {
                    size: 16,
                    color: '#2c3e50'
                }
            },
            gridcolor: 'rgba(0,0,0,0.1)',
            tickfont: {
                size: 14
            }
        },
        yaxis: {
            title: {
                text: '<b>Revenue (Millions USD)</b>',
                font: {
                    size: 16,
                    color: '#2c3e50'
                }
            },
            gridcolor: 'rgba(0,0,0,0.1)',
            tickformat: '$,.0f',
            tickfont: {
                size: 14
            },
            range: [0, 150]
        },
        annotations: [
            // Milestone annotations
            ...milestones.map(m => ({
                x: m.year,
                y: m.y,
                text: m.text,
                showarrow: true,
                arrowhead: 2,
                arrowsize: 1,
                arrowwidth: 2,
                arrowcolor: '#00CED1',
                ax: 0,
                ay: -40,
                font: {
                    size: 12,
                    color: '#2c3e50'
                },
                bgcolor: 'rgba(255,255,255,0.9)',
                bordercolor: '#00CED1',
                borderwidth: 1,
                borderpad: 4
            })),
            // Growth rate annotation
            {
                text: '<b>110% CAGR</b><br>(2026-2030)',
                x: 0.85,
                y: 0.85,
                xref: 'paper',
                yref: 'paper',
                showarrow: false,
                font: {
                    size: 16,
                    color: '#00CED1'
                },
                bgcolor: 'rgba(255,255,255,0.9)',
                bordercolor: '#00CED1',
                borderwidth: 2,
                borderpad: 8
            },
            // Profitability marker
            {
                text: '<b>Profitability<br>Achieved</b>',
                x: '2029',
                y: 51,
                showarrow: true,
                arrowhead: 2,
                arrowsize: 1,
                arrowwidth: 2,
                arrowcolor: '#2ecc71',
                ax: 50,
                ay: 0,
                font: {
                    size: 12,
                    color: '#2ecc71'
                },
                bgcolor: 'rgba(255,255,255,0.9)',
                bordercolor: '#2ecc71',
                borderwidth: 1,
                borderpad: 4
            }
        ],
        hovermode: 'x unified',
        plot_bgcolor: 'white',
        paper_bgcolor: 'white',
        height: 700,
        margin: {
            l: 100,
            r: 100,
            t: 120,
            b: 80
        },
        legend: {
            title: {
                text: '<b>Revenue Streams</b>',
                font: {
                    size: 14
                }
            },
            x: 0.02,
            y: 0.98,
            bgcolor: 'rgba(255,255,255,0.9)',
            bordercolor: 'rgba(0,0,0,0.2)',
            borderwidth: 1,
            font: {
                size: 12
            }
        },
        shapes: [
            // Shaded area for upside potential
            {
                type: 'rect',
                x0: '2025',
                y0: 0,
                x1: '2030',
                y1: 150,
                fillcolor: 'rgba(0, 206, 209, 0.05)',
                line: {
                    width: 0
                },
                layer: 'below'
            }
        ],
        updatemenus: [{
            type: 'buttons',
            showactive: false,
            x: 0.98,
            y: 0.02,
            xanchor: 'right',
            yanchor: 'bottom',
            buttons: [
                {
                    label: 'Play',
                    method: 'animate',
                    args: [null, {
                        frame: {duration: 500},
                        fromcurrent: true,
                        mode: 'immediate',
                        transition: {duration: 300}
                    }]
                }
            ]
        }]
    };
    
    // Animation frames for smooth loading
    var frames = [];
    for (let i = 1; i <= years.length; i++) {
        let frameData = traces.map(trace => ({
            ...trace,
            x: trace.x.slice(0, i),
            y: trace.y.slice(0, i)
        }));
        
        frames.push({
            name: `frame${i}`,
            data: frameData
        });
    }
    
    var config = {
        responsive: true,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d', 'autoScale2d'],
        toImageButtonOptions: {
            format: 'png',
            filename: 'qdaria_revenue_streams_2025_2030',
            height: 700,
            width: 1200,
            scale: 2
        }
    };
    
    // Initial plot with animation
    Plotly.newPlot('revenueStreamChart', traces, layout, config).then(function() {
        Plotly.addFrames('revenueStreamChart', frames);
    });
});
</script>

*Figure: QDaria's diversified revenue stream projections from 2025-2030, showing both base case and upside scenarios. The stacked area chart illustrates how multiple revenue sources (software licensing, SaaS subscriptions, consulting, hardware partnerships, research grants, and kit rentals) contribute to reaching $100M+ in revenue by 2030. Key funding milestones and IPO events are marked, demonstrating the path to profitability by 2029.*
```