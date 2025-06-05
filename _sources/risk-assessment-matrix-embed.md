# Risk Assessment Matrix - Embed Code

This code should be placed in the "Risk Factors and Mitigation" section (around line 1786) of the business plan:

```html
<div id="riskAssessmentMatrix" style="width: 100%; height: 600px;"></div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Risk data with probability, impact, mitigation status, and categories
    var risks = [
        // Technical Risks
        {
            name: 'Quantum Hardware Maturity',
            probability: 75,
            impact: 85,
            mitigation: 65,
            category: 'Technical',
            description: 'Quantum computers may not achieve practical advantage as quickly as projected',
            mitigation_strategy: 'Hardware-agnostic approach, multiple vendor partnerships'
        },
        {
            name: 'Algorithm Complexity',
            probability: 60,
            impact: 70,
            mitigation: 80,
            category: 'Technical',
            description: 'Developing efficient quantum algorithms proves more challenging than expected',
            mitigation_strategy: 'Strong R&D team, academic collaborations, iterative development'
        },
        {
            name: 'Topological Qubit Development',
            probability: 85,
            impact: 60,
            mitigation: 40,
            category: 'Technical',
            description: 'Topological qubits may take longer to materialize than planned',
            mitigation_strategy: 'Fallback to other qubit types, not dependent on single technology'
        },
        
        // Market Risks
        {
            name: 'Enterprise Adoption Speed',
            probability: 70,
            impact: 75,
            mitigation: 70,
            category: 'Market',
            description: 'Enterprises slow to adopt quantum solutions due to skepticism or integration challenges',
            mitigation_strategy: 'Education-first approach, hybrid classical-quantum solutions'
        },
        {
            name: 'Competition from Tech Giants',
            probability: 90,
            impact: 65,
            mitigation: 60,
            category: 'Market',
            description: 'Large tech companies may develop competing integrated solutions',
            mitigation_strategy: 'Faster execution, niche focus, unique AI integration'
        },
        {
            name: 'Talent Acquisition',
            probability: 65,
            impact: 80,
            mitigation: 75,
            category: 'Market',
            description: 'Difficulty attracting and retaining top quantum/AI talent',
            mitigation_strategy: 'Compelling mission, equity incentives, academic partnerships'
        },
        
        // Financial Risks
        {
            name: 'Funding Market Conditions',
            probability: 55,
            impact: 90,
            mitigation: 50,
            category: 'Financial',
            description: 'VC/IPO markets may tighten, affecting fundraising plans',
            mitigation_strategy: 'Revenue generation early, grants, flexible multi-spinout structure'
        },
        {
            name: 'Revenue Delay',
            probability: 65,
            impact: 70,
            mitigation: 65,
            category: 'Financial',
            description: 'Product commercialization and revenue generation delayed',
            mitigation_strategy: 'Multiple revenue streams, consulting services, kit rentals'
        },
        {
            name: 'Capital Intensity',
            probability: 80,
            impact: 60,
            mitigation: 70,
            category: 'Financial',
            description: 'Higher than expected capital requirements for quantum hardware',
            mitigation_strategy: 'Partnerships, cloud-based access, lean operations'
        },
        
        // Regulatory Risks
        {
            name: 'AI Regulation',
            probability: 75,
            impact: 55,
            mitigation: 85,
            category: 'Regulatory',
            description: 'New AI regulations affecting product development and deployment',
            mitigation_strategy: 'Proactive policy engagement, ethical AI design, compliance team'
        },
        {
            name: 'Quantum Export Controls',
            probability: 60,
            impact: 65,
            mitigation: 75,
            category: 'Regulatory',
            description: 'Government restrictions on quantum technology exports',
            mitigation_strategy: 'Proper licensing, government collaboration, jurisdictional planning'
        },
        {
            name: 'Data Privacy Compliance',
            probability: 50,
            impact: 50,
            mitigation: 90,
            category: 'Regulatory',
            description: 'Evolving data privacy laws affecting AI products',
            mitigation_strategy: 'Privacy-by-design, GDPR compliance, security audits'
        }
    ];
    
    // Prepare data for bubble chart
    var trace = {
        x: risks.map(r => r.probability),
        y: risks.map(r => r.impact),
        mode: 'markers+text',
        marker: {
            size: risks.map(r => r.mitigation * 0.8), // Size based on mitigation level
            color: risks.map(r => {
                // Color based on category
                switch(r.category) {
                    case 'Technical': return '#00CED1'; // QDaria teal
                    case 'Market': return '#FF6B6B';
                    case 'Financial': return '#FFD93D';
                    case 'Regulatory': return '#6A759B';
                    default: return '#95A5A6';
                }
            }),
            opacity: 0.7,
            line: {
                color: 'rgba(0,0,0,0.3)',
                width: 2
            },
            sizemode: 'diameter',
            sizeref: 2,
            sizemin: 20
        },
        text: risks.map(r => r.name),
        textposition: 'center',
        textfont: {
            size: 10,
            color: 'white'
        },
        hovertemplate: '<b>%{text}</b><br>' +
                      'Probability: %{x}%<br>' +
                      'Impact: %{y}%<br>' +
                      'Mitigation: %{marker.size:.0f}%<br>' +
                      '<extra></extra>',
        customdata: risks.map(r => ({
            description: r.description,
            mitigation_strategy: r.mitigation_strategy,
            category: r.category,
            mitigation: r.mitigation
        }))
    };
    
    // Add category legend traces
    var categories = ['Technical', 'Market', 'Financial', 'Regulatory'];
    var categoryColors = {
        'Technical': '#00CED1',
        'Market': '#FF6B6B',
        'Financial': '#FFD93D',
        'Regulatory': '#6A759B'
    };
    
    var legendTraces = categories.map(cat => ({
        x: [null],
        y: [null],
        mode: 'markers',
        marker: {
            size: 15,
            color: categoryColors[cat]
        },
        name: cat,
        showlegend: true,
        hoverinfo: 'skip'
    }));
    
    var layout = {
        title: {
            text: '<b>QDaria Risk Assessment Matrix</b>',
            font: {
                size: 24,
                color: '#2c3e50'
            }
        },
        xaxis: {
            title: {
                text: '<b>Probability of Occurrence (%)</b>',
                font: {
                    size: 16,
                    color: '#2c3e50'
                }
            },
            range: [0, 100],
            tickmode: 'linear',
            tick0: 0,
            dtick: 20,
            gridcolor: 'rgba(0,0,0,0.1)',
            zeroline: false
        },
        yaxis: {
            title: {
                text: '<b>Potential Impact (%)</b>',
                font: {
                    size: 16,
                    color: '#2c3e50'
                }
            },
            range: [0, 100],
            tickmode: 'linear',
            tick0: 0,
            dtick: 20,
            gridcolor: 'rgba(0,0,0,0.1)',
            zeroline: false
        },
        shapes: [
            // High risk zone (top-right)
            {
                type: 'rect',
                x0: 70, y0: 70,
                x1: 100, y1: 100,
                fillcolor: 'rgba(231, 76, 60, 0.1)',
                line: {
                    width: 0
                }
            },
            // Medium-high risk zone
            {
                type: 'rect',
                x0: 50, y0: 50,
                x1: 70, y1: 70,
                fillcolor: 'rgba(241, 196, 15, 0.1)',
                line: {
                    width: 0
                }
            },
            // Low risk zone (bottom-left)
            {
                type: 'rect',
                x0: 0, y0: 0,
                x1: 30, y1: 30,
                fillcolor: 'rgba(46, 204, 113, 0.1)',
                line: {
                    width: 0
                }
            }
        ],
        annotations: [
            // Risk zone labels
            {
                text: 'HIGH RISK',
                x: 85,
                y: 85,
                showarrow: false,
                font: {
                    size: 14,
                    color: 'rgba(231, 76, 60, 0.6)'
                }
            },
            {
                text: 'MEDIUM RISK',
                x: 60,
                y: 60,
                showarrow: false,
                font: {
                    size: 14,
                    color: 'rgba(241, 196, 15, 0.6)'
                }
            },
            {
                text: 'LOW RISK',
                x: 15,
                y: 15,
                showarrow: false,
                font: {
                    size: 14,
                    color: 'rgba(46, 204, 113, 0.6)'
                }
            },
            // Size legend
            {
                text: '<b>Bubble size = Mitigation level</b>',
                x: 0.98,
                y: 0.02,
                xref: 'paper',
                yref: 'paper',
                xanchor: 'right',
                yanchor: 'bottom',
                showarrow: false,
                font: {
                    size: 12,
                    color: '#7f8c8d'
                },
                bgcolor: 'rgba(255,255,255,0.8)',
                borderpad: 4
            }
        ],
        hovermode: 'closest',
        plot_bgcolor: 'white',
        paper_bgcolor: 'white',
        height: 600,
        margin: {
            l: 80,
            r: 80,
            t: 100,
            b: 80
        },
        legend: {
            title: {
                text: '<b>Risk Category</b>',
                font: {
                    size: 14
                }
            },
            x: 0.02,
            y: 0.98,
            bgcolor: 'rgba(255,255,255,0.8)',
            bordercolor: 'rgba(0,0,0,0.2)',
            borderwidth: 1
        }
    };
    
    var config = {
        responsive: true,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d', 'autoScale2d'],
        toImageButtonOptions: {
            format: 'png',
            filename: 'qdaria_risk_assessment_matrix',
            height: 600,
            width: 1000,
            scale: 2
        }
    };
    
    // Create detailed hover info
    trace.hovertemplate = '<b>%{text}</b><br>' +
                         'Category: %{customdata.category}<br>' +
                         'Probability: %{x}%<br>' +
                         'Impact: %{y}%<br>' +
                         'Mitigation: %{customdata.mitigation}%<br>' +
                         '<br><i>%{customdata.description}</i><br>' +
                         '<br><b>Mitigation:</b> %{customdata.mitigation_strategy}<br>' +
                         '<extra></extra>';
    
    Plotly.newPlot('riskAssessmentMatrix', [trace, ...legendTraces], layout, config);
});
</script>

*Figure: QDaria's comprehensive risk assessment matrix showing probability vs. impact for key risk factors across technical, market, financial, and regulatory categories. Bubble size indicates the level of mitigation strategies in place. The visualization helps prioritize risk management efforts and demonstrates our proactive approach to investors.*
```