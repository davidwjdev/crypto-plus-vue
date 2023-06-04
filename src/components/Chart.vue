<template>
    <div class="lg:w-[600px] lg:h-[400px] md:w-[500px] md:h-[300px] sm:w-[280px] sm:h-[200px]">
        <apexchart type="line" :options="chartOptions" :series="chartSeries" />
    </div>
</template>
  
<script lang="ts">
import { ref } from 'vue';
import ApexCharts from 'vue3-apexcharts';

export default {
    components: {
        ApexCharts,
    },
    setup() {
        const chartOptions = ref({
            chart: {
                id: 'line',
                fontFamily: 'Nunito, sans-serif',

                toolbar: {
                    show: true,
                    offsetX: 0,
                    offsetY: 0,
                    tools: {
                        download: false,
                        selection: true,
                        zoom: true,
                        zoomin: true,
                        zoomout: true,
                        pan: true,
                        customIcons: []
                    },
                    autoSelected: 'zoom'
                },
                zoom: {
                    enabled: true,
                    type: 'x',
                    autoScaleYaxis: false,
                    zoomedArea: {
                        fill: {
                            color: '#90CAF9',
                            opacity: 0.4
                        },
                        stroke: {
                            color: '#0D47A1',
                            opacity: 0.4,
                            width: 1
                        }
                    }
                }
            },
            stroke: {
                curve: 'smooth'
            },
            grid: {
                show: true,
                borderColor: '#454545',
                strokeDashArray: 5,
                position: 'back',

                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: true,
                        opacity: 0.5,
                    }
                },
                padding: {
                    right: 1,
                    left: 10
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                tickAmount: undefined,
                tickPlacement: 'between',
                min: undefined,
                max: undefined,
                range: undefined,
                floating: false,
                decimalsInFloat: undefined,
                overwriteCategories: undefined,
                position: 'bottom',
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                // crosshairs: {
                //     show: true,
                // },

                crosshairs: {
                    show: true,
                    width: 0.2,
                    position: 'back',
                    opacity: 0.9,
                    stroke: {
                        color: '#f8f8f8',
                        width: 0,
                        dashArray: 0,
                    },
                    fill: {
                        type: 'dashed',
                        color: '#B1B9C4',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        },
                    },
                    dropShadow: {
                        enabled: true,
                        top: 0,
                        left: 0,
                        blur: 1,
                        opacity: 0.4,
                    },
                },


                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                show: true,

                labels: {
                    show: true,
                    align: 'right',
                    minWidth: 0,
                    maxWidth: 160,
                    style: {
                        colors: "#f8f8f8",
                        fontSize: '12px',
                        fontFamily: 'Nunito, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                },

            },

            tooltip: {
                enabled: true,
                theme: 'dark',
                style: {
                    fontSize: '16px',
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 400
                },
                x: {
                    show: true,
                    format: 'dd MMM',
                    formatter: undefined,
                },
                y: {
                    formatter: undefined,
                    title: {
                        formatter: (seriesName: any) => seriesName,
                    },
                },
                z: {
                    formatter: undefined,
                    title: 'Size: '
                },
                marker: {
                    show: true,
                },
                items: {
                    display: 'flex',
                },
                fixed: {
                    enabled: true,
                },
            },

        });

        const chartSeries = ref([
            {
                name: 'Series 1',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 70, 90, 120],
            },
        ]);

        return {
            chartOptions,
            chartSeries,
        };
    },
};
</script>
<style></style>