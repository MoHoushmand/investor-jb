/**
 * QDaria Chart Configuration Enhancement
 * Ensures all Plotly charts use full width and optimal heights
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Configuration for all charts
    const chartConfig = {
        responsive: true,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d'],
        toImageButtonOptions: {
            format: 'png',
            filename: 'qdaria-chart',
            width: 1920,
            height: 1080,
            scale: 2
        }
    };

    // Default layout enhancements
    const layoutDefaults = {
        autosize: true,
        margin: {
            l: 80,
            r: 80,
            t: 100,
            b: 80,
            pad: 10
        },
        font: {
            family: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            size: 14
        },
        hoverlabel: {
            bgcolor: 'rgba(0, 0, 0, 0.8)',
            bordercolor: 'rgba(255, 255, 255, 0.2)',
            font: {
                family: 'system-ui, -apple-system, sans-serif',
                size: 14,
                color: 'white'
            }
        }
    };

    // Function to enhance existing Plotly plots
    function enhancePlotlyCharts() {
        // Find all Plotly chart containers
        const chartContainers = document.querySelectorAll('.js-plotly-plot, [id*="Chart"], .chart-placeholder');
        
        chartContainers.forEach(container => {
            // Check if it's a Plotly plot
            if (container._fullLayout) {
                // Update layout to ensure full width
                Plotly.relayout(container, {
                    ...layoutDefaults,
                    width: null,  // Let it auto-size
                    height: null  // Let CSS control height
                });
                
                // Force resize to fit container
                Plotly.Plots.resize(container);
            }
        });
    }

    // Run enhancement after a delay to ensure Plotly charts are rendered
    setTimeout(enhancePlotlyCharts, 1000);
    
    // Also run on window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            const plots = document.querySelectorAll('.js-plotly-plot');
            plots.forEach(plot => {
                if (plot._fullLayout) {
                    Plotly.Plots.resize(plot);
                }
            });
        }, 250);
    });

    // Monkey patch Plotly.newPlot to automatically apply our config
    const originalNewPlot = window.Plotly.newPlot;
    window.Plotly.newPlot = function(gd, data, layout, config) {
        // Merge our defaults with provided layout
        const enhancedLayout = {
            ...layoutDefaults,
            ...layout,
            autosize: true,
            width: null,
            height: null
        };
        
        // Merge our config with provided config
        const enhancedConfig = {
            ...chartConfig,
            ...config
        };
        
        // Call original function with enhanced parameters
        return originalNewPlot.call(this, gd, data, enhancedLayout, enhancedConfig).then(function() {
            // Force a resize after creation
            setTimeout(() => Plotly.Plots.resize(gd), 100);
            return gd;
        });
    };
});

// Utility function to manually fix a specific chart
window.fixChartWidth = function(chartId) {
    const chart = document.getElementById(chartId);
    if (chart && chart._fullLayout) {
        Plotly.relayout(chart, {
            autosize: true,
            width: null,
            height: null
        });
        Plotly.Plots.resize(chart);
    }
};