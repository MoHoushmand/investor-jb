# QDaria Chart Redesigns

## 1. Financial Projections - Dramatic Growth Story

```javascript
// REDESIGNED: Financial Projections with Visual Impact
document.addEventListener('DOMContentLoaded', function() {
    var years = ['2025', '2026', '2027', '2028', '2029', '2030'];
    var revenue = [0.5, 1.0, 5.0, 20.0, 50.0, 100.0];
    var netIncome = [-0.5, -1.0, -3.0, 0.0, 10.0, 25.0];
    
    // Create glowing revenue area chart
    var revenueTrace = {
        x: years,
        y: revenue,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Revenue',
        fill: 'tozeroy',
        fillcolor: 'rgba(0, 255, 255, 0.1)',
        line: {
            color: '#00FFFF',
            width: 5,
            shape: 'spline'
        },
        marker: {
            size: 15,
            color: '#00FFFF',
            symbol: 'circle',
            line: {
                color: '#FFFFFF',
                width: 3
            }
        },
        text: revenue.map(r => `$${r}M`),
        textposition: 'top center',
        textfont: {
            size: 18,
            color: '#00FFFF',
            family: 'Arial Black'
        },
        hovertemplate: '<b>Revenue</b><br>%{x}: $%{y}M<br>Growth: %{customdata}<extra></extra>',
        customdata: revenue.map((r, i) => i > 0 ? `${((r/revenue[i-1] - 1) * 100).toFixed(0)}%` : 'Baseline')
    };

    // Profitability threshold line
    var profitabilityLine = {
        x: years,
        y: [0, 0, 0, 0, 0, 0],
        type: 'scatter',
        mode: 'lines',
        name: 'Break-even',
        line: {
            color: '#FF6B6B',
            width: 3,
            dash: 'dash'
        },
        showlegend: true
    };

    // Net income with dynamic colors
    var netIncomeTrace = {
        x: years,
        y: netIncome,
        type: 'bar',
        name: 'Net Income',
        marker: {
            color: netIncome.map(n => n >= 0 ? '#4ECDC4' : '#FF6B6B'),
            line: {
                color: netIncome.map(n => n >= 0 ? '#4ECDC4' : '#FF6B6B'),
                width: 2
            }
        },
        text: netIncome.map(n => n >= 0 ? `+$${n}M` : `-$${Math.abs(n)}M`),
        textposition: 'outside',
        textfont: {
            size: 14,
            color: netIncome.map(n => n >= 0 ? '#4ECDC4' : '#FF6B6B'),
            family: 'Arial'
        },
        hovertemplate: '<b>Net Income</b><br>%{x}: %{text}<extra></extra>'
    };

    // Key milestone annotations
    var annotations = [
        {
            x: '2028',
            y: 22,
            text: '<b>🚀 PROFITABILITY!</b>',
            showarrow: true,
            arrowhead: 2,
            arrowsize: 1,
            arrowwidth: 3,
            arrowcolor: '#4ECDC4',
            ax: -50,
            ay: -50,
            font: {
                size: 20,
                color: '#4ECDC4',
                family: 'Arial Black'
            },
            bgcolor: 'rgba(0,0,0,0.8)',
            bordercolor: '#4ECDC4',
            borderwidth: 2,
            borderpad: 10
        },
        {
            x: '2030',
            y: 105,
            text: '<b>$100M REVENUE</b><br>Unicorn Territory 🦄',
            showarrow: true,
            arrowhead: 2,
            arrowsize: 1,
            arrowwidth: 3,
            arrowcolor: '#00FFFF',
            ax: -80,
            ay: -60,
            font: {
                size: 18,
                color: '#00FFFF',
                family: 'Arial Black'
            },
            bgcolor: 'rgba(0,0,0,0.9)',
            bordercolor: '#00FFFF',
            borderwidth: 3,
            borderpad: 12
        }
    ];

    var layout = {
        title: {
            text: '<b>QDaria\'s Path to $100M: The Quantum Leap</b>',
            font: {
                size: 36,
                color: '#FFFFFF',
                family: 'Arial Black'
            },
            x: 0.5,
            xanchor: 'center'
        },
        xaxis: {
            title: {
                text: '<b>Year</b>',
                font: {
                    size: 20,
                    color: '#FFFFFF'
                }
            },
            gridcolor: 'rgba(255,255,255,0.1)',
            zerolinecolor: 'rgba(255,255,255,0.3)',
            tickfont: {
                size: 16,
                color: '#FFFFFF'
            }
        },
        yaxis: {
            title: {
                text: '<b>Amount (USD Millions)</b>',
                font: {
                    size: 20,
                    color: '#FFFFFF'
                }
            },
            gridcolor: 'rgba(255,255,255,0.1)',
            zerolinecolor: 'rgba(255,255,255,0.3)',
            tickfont: {
                size: 16,
                color: '#FFFFFF'
            },
            range: [-10, 120]
        },
        plot_bgcolor: '#0A0A0A',
        paper_bgcolor: '#000000',
        height: 900,
        width: null, // Full width
        margin: {
            t: 120,
            b: 100,
            l: 100,
            r: 100
        },
        showlegend: true,
        legend: {
            x: 0.02,
            y: 0.98,
            bgcolor: 'rgba(0,0,0,0.8)',
            bordercolor: '#00FFFF',
            borderwidth: 2,
            font: {
                size: 16,
                color: '#FFFFFF'
            }
        },
        annotations: annotations,
        shapes: [
            // Highlight profitability zone
            {
                type: 'rect',
                xref: 'x',
                yref: 'paper',
                x0: '2027.5',
                y0: 0,
                x1: '2030.5',
                y1: 1,
                fillcolor: 'rgba(78, 205, 196, 0.1)',
                line: {
                    width: 0
                }
            }
        ]
    };

    var config = {
        responsive: true,
        displayModeBar: true,
        displaylogo: false,
        toImageButtonOptions: {
            format: 'png',
            filename: 'qdaria_growth_story',
            height: 1800,
            width: 2400,
            scale: 2
        }
    };

    Plotly.newPlot('financialProjectionsChart', [netIncomeTrace, revenueTrace, profitabilityLine], layout, config);

    // Add entrance animation
    Plotly.animate('financialProjectionsChart', {
        data: [netIncomeTrace, revenueTrace, profitabilityLine],
        traces: [0, 1, 2],
        layout: {}
    }, {
        transition: {
            duration: 2000,
            easing: 'elastic-in-out'
        },
        frame: {
            duration: 2000
        }
    });
});
```

## 2. Market Segmentation - Interactive Sunburst

```javascript
// REDESIGNED: Market Opportunity as Interactive Sunburst
document.addEventListener('DOMContentLoaded', function() {
    var data = [{
        type: "sunburst",
        labels: [
            "Quantum Market 2035<br><b>$1.3 Trillion</b>",
            "Healthcare & Pharma", "Finance & Trading", "Cybersecurity", 
            "AI & ML", "Other Sectors",
            "Drug Discovery", "Personalized Medicine", "Medical Imaging",
            "Algorithmic Trading", "Risk Analysis", "Portfolio Optimization",
            "Quantum Encryption", "Threat Detection", "Secure Communications",
            "Quantum ML", "Neural Networks", "Pattern Recognition",
            "Materials", "Logistics", "Energy", "Government", "Education"
        ],
        parents: [
            "",
            "Quantum Market 2035<br><b>$1.3 Trillion</b>", "Quantum Market 2035<br><b>$1.3 Trillion</b>", 
            "Quantum Market 2035<br><b>$1.3 Trillion</b>", "Quantum Market 2035<br><b>$1.3 Trillion</b>", 
            "Quantum Market 2035<br><b>$1.3 Trillion</b>",
            "Healthcare & Pharma", "Healthcare & Pharma", "Healthcare & Pharma",
            "Finance & Trading", "Finance & Trading", "Finance & Trading",
            "Cybersecurity", "Cybersecurity", "Cybersecurity",
            "AI & ML", "AI & ML", "AI & ML",
            "Other Sectors", "Other Sectors", "Other Sectors", "Other Sectors", "Other Sectors"
        ],
        values: [
            1300,
            200, 180, 120, 150, 650,
            80, 70, 50,
            80, 60, 40,
            50, 40, 30,
            60, 50, 40,
            100, 90, 80, 110, 270
        ],
        text: [
            "Total Market",
            "$200B", "$180B", "$120B", "$150B", "$650B",
            "$80B", "$70B", "$50B",
            "$80B", "$60B", "$40B",
            "$50B", "$40B", "$30B",
            "$60B", "$50B", "$40B",
            "$100B", "$90B", "$80B", "$110B", "$270B"
        ],
        textinfo: "label+text+percent parent",
        outsidetextfont: {size: 20, color: "#377eb8"},
        leaf: {opacity: 0.8},
        marker: {
            colors: [
                "#000000",
                "#FF6B6B", "#4ECDC4", "#45B7D1", "#F7DC6F", "#BB8FCE",
                "#FF8E8E", "#FF6B6B", "#FF4757",
                "#6EDCD4", "#4ECDC4", "#3EBDB4",
                "#6BC7E1", "#45B7D1", "#35A7C1",
                "#F9E79F", "#F7DC6F", "#F5D13F",
                "#D7BDE2", "#BB8FCE", "#A569BD", "#8E44AD", "#7D3C98"
            ],
            line: {
                color: "#FFFFFF",
                width: 3
            }
        },
        branchvalues: "total",
        hovertemplate: '<b>%{label}</b><br>Market Size: %{text}<br>Share: %{percentParent}<extra></extra>',
        hoverlabel: {
            bgcolor: "rgba(0,0,0,0.8)",
            bordercolor: "#FFFFFF",
            font: {
                size: 16,
                color: "#FFFFFF"
            }
        }
    }];

    var layout = {
        title: {
            text: '<b>The $1.3 Trillion Quantum Opportunity</b><br><span style="font-size: 20px">Click sectors to explore sub-markets</span>',
            font: {
                size: 40,
                color: '#2C3E50',
                family: 'Arial Black'
            }
        },
        margin: {l: 0, r: 0, b: 0, t: 100},
        height: 1000,
        width: null,
        paper_bgcolor: '#F8F9FA',
        sunburstcolorway: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#F7DC6F", "#BB8FCE"]
    };

    var config = {
        responsive: true,
        displayModeBar: true,
        displaylogo: false,
        toImageButtonOptions: {
            format: 'png',
            filename: 'quantum_market_opportunity',
            height: 2000,
            width: 2000,
            scale: 2
        }
    };

    Plotly.newPlot('marketSegmentationChart', data, layout, config);
});
```

## 3. Competitor Funding - Visual Power Comparison

```javascript
// REDESIGNED: David vs Goliaths - Funding Comparison
document.addEventListener('DOMContentLoaded', function() {
    var companies = ['QDaria', 'Rigetti', 'D-Wave', 'IonQ', 'PsiQuantum'];
    var funding = [12, 200, 300, 684, 1290];
    var bubbleSizes = funding.map(f => Math.sqrt(f) * 5); // Scale for visual impact
    
    // Create bubble chart
    var data = [{
        x: companies,
        y: funding,
        mode: 'markers+text',
        type: 'scatter',
        marker: {
            size: bubbleSizes,
            sizemode: 'diameter',
            color: ['#00FFFF', '#FF6B6B', '#4ECDC4', '#F7DC6F', '#BB8FCE'],
            line: {
                color: '#FFFFFF',
                width: 3
            },
            opacity: 0.8
        },
        text: funding.map(f => `$${f}M`),
        textposition: 'middle center',
        textfont: {
            size: funding.map(f => f > 100 ? 24 : 16),
            color: '#FFFFFF',
            family: 'Arial Black'
        },
        hovertemplate: '<b>%{x}</b><br>Funding: $%{y}M<br>Multiple vs QDaria: %{customdata}x<extra></extra>',
        customdata: funding.map(f => (f/12).toFixed(1))
    }];

    // Add QDaria's efficiency callout
    var annotations = [
        {
            x: 'QDaria',
            y: 12,
            text: '<b>Capital Efficient</b><br>Doing more with less',
            showarrow: true,
            arrowhead: 2,
            arrowsize: 1,
            arrowwidth: 3,
            arrowcolor: '#00FFFF',
            ax: -100,
            ay: -80,
            font: {
                size: 18,
                color: '#00FFFF',
                family: 'Arial'
            },
            bgcolor: 'rgba(0,0,0,0.9)',
            bordercolor: '#00FFFF',
            borderwidth: 2,
            borderpad: 10
        },
        {
            x: 'PsiQuantum',
            y: 1290,
            text: '<b>107x</b><br>more funding',
            showarrow: false,
            font: {
                size: 20,
                color: '#BB8FCE',
                family: 'Arial Black'
            }
        }
    ];

    var layout = {
        title: {
            text: '<b>The Quantum Funding Landscape</b><br><span style="font-size: 24px">QDaria: The Efficient Disruptor</span>',
            font: {
                size: 36,
                color: '#2C3E50',
                family: 'Arial Black'
            }
        },
        xaxis: {
            title: {
                text: '<b>Company</b>',
                font: {
                    size: 20,
                    color: '#2C3E50'
                }
            },
            tickfont: {
                size: 18,
                color: '#2C3E50'
            }
        },
        yaxis: {
            title: {
                text: '<b>Total Funding (USD Millions)</b>',
                font: {
                    size: 20,
                    color: '#2C3E50'
                }
            },
            type: 'log',
            gridcolor: 'rgba(0,0,0,0.1)',
            tickfont: {
                size: 16,
                color: '#2C3E50'
            }
        },
        plot_bgcolor: '#F8F9FA',
        paper_bgcolor: '#FFFFFF',
        height: 900,
        width: null,
        margin: {
            t: 150,
            b: 100,
            l: 100,
            r: 100
        },
        annotations: annotations,
        shapes: [
            // Highlight QDaria
            {
                type: 'circle',
                xref: 'x',
                yref: 'y',
                x0: -0.3,
                y0: 5,
                x1: 0.3,
                y1: 25,
                line: {
                    color: '#00FFFF',
                    width: 4,
                    dash: 'dash'
                }
            }
        ]
    };

    var config = {
        responsive: true,
        displayModeBar: true,
        displaylogo: false
    };

    Plotly.newPlot('competitorFundingChart', data, layout, config);
});
```

## 4. Tech Stack Architecture - 3D Visualization

```javascript
// REDESIGNED: Tech Stack as 3D Layer Cake
document.addEventListener('DOMContentLoaded', function() {
    // Create 3D surface plot for tech stack layers
    var layers = [
        {name: 'Quantum Hardware', height: 1, color: '#FF6B6B'},
        {name: 'Control Systems', height: 2, color: '#F7DC6F'},
        {name: 'Quantum Algorithms', height: 3, color: '#4ECDC4'},
        {name: 'AI/ML Layer', height: 4, color: '#45B7D1'},
        {name: 'Applications', height: 5, color: '#BB8FCE'}
    ];

    var data = [];
    
    layers.forEach((layer, idx) => {
        var x = [], y = [], z = [];
        for(let i = 0; i < 20; i++) {
            x.push(i);
            y.push([]);
            z.push([]);
            for(let j = 0; j < 20; j++) {
                y[i].push(j);
                z[i].push(layer.height + Math.sin(i/3) * Math.cos(j/3) * 0.2);
            }
        }
        
        data.push({
            type: 'surface',
            x: x,
            y: y,
            z: z,
            colorscale: [[0, layer.color], [1, layer.color]],
            name: layer.name,
            showscale: false,
            opacity: 0.8,
            hovertemplate: `<b>${layer.name}</b><extra></extra>`
        });
    });

    var layout = {
        title: {
            text: '<b>QDaria\'s Integrated Tech Stack</b><br><span style="font-size: 20px">Drag to rotate • Scroll to zoom</span>',
            font: {
                size: 32,
                color: '#2C3E50',
                family: 'Arial Black'
            }
        },
        scene: {
            camera: {
                eye: {
                    x: 1.5,
                    y: 1.5,
                    z: 1.5
                }
            },
            xaxis: {
                showticklabels: false,
                title: ''
            },
            yaxis: {
                showticklabels: false,
                title: ''
            },
            zaxis: {
                title: 'Stack Layers',
                titlefont: {
                    size: 16
                }
            },
            bgcolor: '#F8F9FA'
        },
        height: 900,
        width: null,
        margin: {
            t: 100,
            b: 50,
            l: 50,
            r: 50
        },
        paper_bgcolor: '#FFFFFF'
    };

    var config = {
        responsive: true,
        displayModeBar: true,
        displaylogo: false
    };

    Plotly.newPlot('techStackArchitecture', data, layout, config);
});
```

## 5. Execution Roadmap - Interactive Timeline

```javascript
// REDESIGNED: Interactive Gantt Timeline with Milestones
document.addEventListener('DOMContentLoaded', function() {
    var milestones = [
        {task: 'Seed Funding Close', start: '2025-01-01', end: '2025-03-01', color: '#00FFFF', phase: 'Foundation'},
        {task: 'Rigetti QPU Installation', start: '2025-02-01', end: '2025-06-01', color: '#FF6B6B', phase: 'Foundation'},
        {task: 'QDaria HQ Launch', start: '2025-03-01', end: '2025-04-01', color: '#4ECDC4', phase: 'Foundation'},
        {task: 'First Product Launch', start: '2025-06-01', end: '2025-09-01', color: '#F7DC6F', phase: 'Product'},
        {task: 'Series A Funding', start: '2025-09-01', end: '2025-12-01', color: '#00FFFF', phase: 'Growth'},
        {task: 'AI Agent Release', start: '2026-01-01', end: '2026-06-01', color: '#BB8FCE', phase: 'Product'},
        {task: 'International Expansion', start: '2026-06-01', end: '2027-01-01', color: '#45B7D1', phase: 'Growth'},
        {task: 'Topological Qubit Demo', start: '2027-01-01', end: '2027-12-01', color: '#FF6B6B', phase: 'Innovation'},
        {task: 'Series B Funding', start: '2027-06-01', end: '2027-09-01', color: '#00FFFF', phase: 'Growth'},
        {task: 'Profitability', start: '2028-01-01', end: '2028-03-01', color: '#4ECDC4', phase: 'Maturity'}
    ];

    // Convert to Plotly format
    var data = milestones.map((m, idx) => ({
        x: [m.start, m.end],
        y: [idx, idx],
        mode: 'lines+markers',
        line: {
            color: m.color,
            width: 20
        },
        marker: {
            size: 25,
            symbol: ['circle', 'star'],
            color: m.color
        },
        name: m.task,
        text: [m.task, ''],
        textposition: 'middle left',
        textfont: {
            size: 14,
            color: '#2C3E50',
            family: 'Arial'
        },
        hovertemplate: '<b>%{name}</b><br>Start: %{x[0]}<br>End: %{x[1]}<br>Phase: ' + m.phase + '<extra></extra>',
        showlegend: false
    }));

    // Add phase backgrounds
    var shapes = [
        {
            type: 'rect',
            xref: 'x',
            yref: 'paper',
            x0: '2025-01-01',
            x1: '2025-06-01',
            y0: 0,
            y1: 1,
            fillcolor: 'rgba(0, 255, 255, 0.1)',
            line: {width: 0}
        },
        {
            type: 'rect',
            xref: 'x',
            yref: 'paper',
            x0: '2025-06-01',
            x1: '2026-06-01',
            y0: 0,
            y1: 1,
            fillcolor: 'rgba(247, 220, 111, 0.1)',
            line: {width: 0}
        },
        {
            type: 'rect',
            xref: 'x',
            yref: 'paper',
            x0: '2026-06-01',
            x1: '2027-12-01',
            y0: 0,
            y1: 1,
            fillcolor: 'rgba(69, 183, 209, 0.1)',
            line: {width: 0}
        },
        {
            type: 'rect',
            xref: 'x',
            yref: 'paper',
            x0: '2027-12-01',
            x1: '2028-06-01',
            y0: 0,
            y1: 1,
            fillcolor: 'rgba(78, 205, 196, 0.1)',
            line: {width: 0}
        }
    ];

    var annotations = [
        {
            x: '2025-03-15',
            y: -1,
            text: '<b>Foundation</b>',
            showarrow: false,
            font: {size: 18, color: '#00FFFF'}
        },
        {
            x: '2026-01-01',
            y: -1,
            text: '<b>Product Launch</b>',
            showarrow: false,
            font: {size: 18, color: '#F7DC6F'}
        },
        {
            x: '2027-03-01',
            y: -1,
            text: '<b>Scaling</b>',
            showarrow: false,
            font: {size: 18, color: '#45B7D1'}
        },
        {
            x: '2028-03-01',
            y: -1,
            text: '<b>Profitability</b>',
            showarrow: false,
            font: {size: 18, color: '#4ECDC4'}
        }
    ];

    var layout = {
        title: {
            text: '<b>QDaria\'s Journey to Quantum Leadership</b><br><span style="font-size: 24px">2025-2028 Execution Timeline</span>',
            font: {
                size: 36,
                color: '#2C3E50',
                family: 'Arial Black'
            }
        },
        xaxis: {
            title: '',
            type: 'date',
            gridcolor: 'rgba(0,0,0,0.1)',
            tickfont: {
                size: 14,
                color: '#2C3E50'
            }
        },
        yaxis: {
            title: '',
            showticklabels: false,
            range: [-2, milestones.length],
            fixedrange: true
        },
        plot_bgcolor: '#FFFFFF',
        paper_bgcolor: '#F8F9FA',
        height: 1000,
        width: null,
        margin: {
            t: 150,
            b: 100,
            l: 200,
            r: 100
        },
        shapes: shapes,
        annotations: annotations,
        hovermode: 'closest'
    };

    var config = {
        responsive: true,
        displayModeBar: true,
        displaylogo: false,
        scrollZoom: true
    };

    Plotly.newPlot('executionRoadmapChart', data, layout, config);
});
```