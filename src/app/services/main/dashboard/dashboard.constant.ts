import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

export const barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 115, 140, 120, 91, 59, 155, 149], label: 'Number of Trainings created' },
    { data: [28, 48, 10, 23, 56, 55, 48, 60, 88, 5, 85, 70], label: 'Number of Trainings Completed' }
];

export const lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 115, 40, 80, 81, 59, 55, 149], label: 'Numner of Employees Taken' },
    { data: [28, 48, 10, 23, 56, 55, 41, 60, 80, 50, 5, 70], label: 'Number of Employees passed' }
];

export const piaChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 96, 95, 80, 90, 81, 59, 55, 49], label: 'Video Contents' },
    { data: [28, 48, 90, 23, 86, 55, 48, 60, 8, 5, 45, 30], label: 'PDF Content' }
];

export const barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { xAxes: [{}], yAxes: [{}] },
    legend: {
        position: 'bottom'

    },
    title: {
        display: true,
        text: "Trainings",
        fontSize: 30
    },
    plugins: {
        datalabels: {
            anchor: 'end',
            align: 'end',
        }
    }
};

export const lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { xAxes: [{}], yAxes: [{}] },
    legend: {
        position: 'bottom'

    },
    title: {
        display: true,
        text: "Assessment",
        fontSize: 30
    },
    plugins: {
        datalabels: {
            anchor: 'end',
            align: 'end',
        }
    }
};

export const piaChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { xAxes: [{}], yAxes: [{}] },
    legend: {
        position: 'bottom'

    },
    title: {
        display: true,
        text: "Content",
        fontSize: 30
    },
    plugins: {
        datalabels: {
            anchor: 'end',
            align: 'end',
        }
    }
};


export const barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2016', '2017', '2018'];