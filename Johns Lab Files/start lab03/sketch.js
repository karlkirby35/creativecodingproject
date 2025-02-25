//declared variables
let data;
let cleanData = [];
let barCharts = [];

//preloader
function preload() {
    data = loadTable("data/Combined.csv", "csv", "header");
}

//setup function
function setup() {
    createCanvas(1400, 800);
    background("#000000");
    angleMode(DEGREES);
    
//for loop for collecting data in cleanData
    noLoop();
    for (let i = 0; i < data.rows.length; i++) {
        cleanData.push(data.rows[i].obj); 
    }

    numBars = cleanData.length;
    for (let i = 0; i < cleanData.length; i++) {
        cleanData[i].Female = parseInt(cleanData[i].Female)
        cleanData[i].Male = parseInt(cleanData[i].Male)
        cleanData[i].Total = parseInt(cleanData[i].Total)
       
    }

// declaring barcharts with objects inside:

//barchart 1
    let barChar01 = {
        x: 80, 
        y: 350,
        w: 250, 
        h: 250, 
        data: cleanData,
        yAxisValue: "Total",
        xAxisLabel: "Age_Group",
        axisLineColor: "#ffffff", 
        axisLineThickness: 5,
        barWidth: 15,
        barColor: "#7df9ff", 
        barStrokeThickness: 0,
        barStrokeColor: "#fafafa",
        titleText: "Rugby Players By Age Group",
        titleXOffset: -30,
        titleYOffset: 550,
        titleWidth: 300,
        titleSize: 14,
        titleColor: "#ffffff", 
        tickColor: "#ffffff", 
        tickStrokeWeight: 1,
        tickStrokeLength: 20,
        tickPadding: 10,
        numTicks: 5,
        tickTextColor: "#ffffff", 
        tickTextSize: 10,
        tickDecimals: 1,
        labelPadding: 11,
        labelRotation: 60,
        labelTextSize: 6,
        labelColor: "#ffffff", 
    };

//barchart 2
    let barChar02 = {
        x: 450, 
        y: 350,
        w: 250, 
        h: 250, 
        data: cleanData,
        yAxisValue: "Female", 
        xAxisLabel: "Age_Group",
        axisLineColor: "#ffffff", 
        axisLineThickness: 5,
        barWidth: 15,
        barColor: "#ff7f7f",
        barStrokeThickness: 0,
        barStrokeColor: "#fafafa",
        titleText: "Female Rugby Players By Age Group", 
        titleXOffset: -30,
        titleYOffset: 550,
        titleWidth: 300,
        titleSize: 14,
        titleColor: "#ffffff", 
        tickColor: "#ffffff", 
        tickStrokeWeight: 1,
        tickStrokeLength: 20,
        tickPadding: 10,
        numTicks: 5,
        tickTextColor: "#ffffff", 
        tickTextSize: 10,
        tickDecimals: 1,
        labelPadding: 11,
        labelRotation: 60,
        labelTextSize: 6,
        labelColor: "#ffffff", 
    };

//barchart 3
    let barChar03 = {
        x: 820, 
        y: 350,
        w: 250, 
        h: 250, 
        data: cleanData,
        yAxisValue: "Male", 
        xAxisLabel: "Age_Group",
        axisLineColor: "#ffffff", 
        axisLineThickness: 5,
        barWidth: 15,
        barColor: "#7f7fff", 
        barStrokeThickness: 0,
        barStrokeColor: "#fafafa",
        titleText: "Male Robberies Causes By Age Group", 
        titleXOffset: -30,
        titleYOffset: 550,
        titleWidth: 300,
        titleSize: 14,
        titleColor: "#ffffff", 
        tickColor: "#ffffff", 
        tickStrokeWeight: 1,
        tickStrokeLength: 20,
        tickPadding: 10,
        numTicks: 5,
        tickTextColor: "#ffffff", 
        tickTextSize: 10,
        tickDecimals: 1,
        labelPadding: 11,
        labelRotation: 60,
        labelTextSize: 6,
        labelColor: "#ffffff", 
    };

//pushing the barcharts
    barCharts.push(new BarChart(barChar01));
    barCharts.push(new BarChart(barChar02));
    barCharts.push(new BarChart(barChar03));
}

//function draw
function draw() {
    for (let i = 0; i < barCharts.length; i++) {
        barCharts[i].render();
    }
}