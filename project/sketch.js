//declared variables
let data;
let cleanData = [];
let barCharts = [];

//new variables
let myNewArray;
let total;
let font;


//preloader
function preload() {
    data = loadTable("data/six_nations.csv", "csv", "header");
    font = loadFont('Poppins/Poppins-Black.ttf');
    
}

//setup function
function setup() {
    createCanvas(2000, 1800);
    pixelDensity(2); 
    smooth(); 
    background("#000000");
    angleMode(DEGREES);
    cleanedData(); 
    
// For Stacked Chart Colours

//custom chart 
myNewArray = cleanData.map(row => row.Grand_Slams);
total = myNewArray.reduce((sum, value) => sum + value, 0);


//for loop for collecting data in cleanData
    /*noLoop();
    for (let i = 0; i < data.rows.length; i++) {
        cleanData.push(data.rows[i].obj); 
}

    //numBars = cleanData.length;
    for (let i = 0; i < cleanData.length; i++) {
        cleanData[i].Wins = parseInt(cleanData[i].Wins)
        cleanData[i].Grand_Slams = parseInt(cleanData[i].Grand_Slams)
        cleanData[i].Other_Wins = parseInt(cleanData[i].Other_Wins)
}_
        */

//declaring barchart with objects inside:
//wins = total wins through six nations
//grand_slams = team beats all five other teams in a year
//other_wins = wins not achieving grand slams

//barchart 1
let sixNationsChart1 = {
        x: 80, 
        y: 350,
        w: 400, 
        h: 250, 
        data: cleanData,
        yAxisValue: "Wins", 
        xAxisLabel: "Team",
        axisLineColor: "#ffffff", 
        axisLineThickness: 5,
        barWidth: 25,
        barColor: "#7df9ff", 
        barStrokeThickness: 0,
        barStrokeColor: "#fafafa",
        titleText: "Six Nations Total Wins Per Team",
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
let sixNationsChart2 = {
        x: 600, 
        y: 350,
        w: 400, 
        h: 250, 
        data: cleanData,
        yAxisValue: "Grand_Slams", 
        xAxisLabel: "Team",
        axisLineColor: "#ffffff", 
        axisLineThickness: 5,
        barWidth: 25,
        barColor: "#ff7f7f",
        barStrokeThickness: 0,
        barStrokeColor: "#fafafa",
        titleText: "Six Nations Grand Slams Won", 
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
let sixNationsChart3 = {
        x: 1120, 
        y: 350,
        w: 400, 
        h: 250, 
        data: cleanData,
        yAxisValue: "Other_Wins", 
        xAxisLabel: "Team",
        axisLineColor: "#ffffff", 
        axisLineThickness: 5,
        barWidth: 25,
        barColor: "#7f7fff", 
        barStrokeThickness: 0,
        barStrokeColor: "#fafafa",
        titleText: "Six Nations Other Wins Won", 
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


//stacked barchart
let sixNationsStacked ={
    x: 80, 
    y: 800,
    w: 400, 
    h: 250, 
    data: cleanData,
    yAxisValue: ["Grand_Slams","Other_Wins"] ,
    xAxisLabel: "Team",
    AxisColour: "fafafa",
    axisLineColor: "#ffffff", 
    axisLineThickness: 5,
    barWidth: 25,
    barColor: ["#ffa071", "#fffacd"],
    barStrokeThickness: 0,
    barStrokeColor: ["7f7fff"],
    titleText: "Six Nations Stacked Chart", 
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

//horizontal barchart
let sixNationsHorizontal = {

    x: 600, 
    y: 500,
    w: 400, 
    h: 300, 
    data: cleanData,
    yAxisValue: "Other_Wins", 
    xAxisLabel: "Team",
    axisLineColor: "#ffffff", 
    axisLineThickness: 5,
    barWidth: 25,
    barColor: "#d8ffb1", 
    barStrokeThickness: 0,
    barStrokeColor: "#fafafa",
    titleText: "Six Nations Horizontal Barchart", 
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

//cluster barchart
let sixNationsCluster = {
    x: 1120, 
    y: 800,
    w: 500, 
    h: 250, 
    data: cleanData,
    yAxisValue: ["Grand_Slams", "Other_Wins"] ,
    xAxisLabel: "Team",
    yValueTotal: "Total",
    axisLineColor: "#ffffff", 
    axisLineThickness: 5,
    barWidth: 25,
    barColor: ["#d899f0", "#3357ff"],
    barStrokeThickness: 0,
    barStrokeColor: "#fafafa",
    margin: 50,
    titleText: "Six Nations Cluster", 
    titleXOffset: -30,
    titleYOffset: 900,
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
}

//(my own design)
let sixNationsCustom = {
    x: 800,
    y: 1300, 
    w: 500, 
    h: 500, 
    data: cleanData,
    yAxisValue: ["Grand_Slams"], 
    xAxisLabel: "Team",
    axisLineColor: "#ffffff", 
    axisLineThickness: 2,
    barColor: ["#d899f0", "#3357ff", "#ff7f7f", "#7df9ff", "#d8ffb1", "#ffa071"], 
    titleText: "Six Nations Grand Slams:", 
    titleXOffset: -30,
    titleYOffset: 80,
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
    labelRotation: 0, 
    labelTextSize: 12,
    labelColor: "#ffffff", 
    myNewArray, //new
    total, //new
    font, //new
    innerRadiusColor: "#000000" //new
};


//pushing the barcharts
    barCharts.push(new BarChart(sixNationsChart1));
    barCharts.push(new BarChart(sixNationsChart2));
    barCharts.push(new BarChart(sixNationsChart3));
    barCharts.push(new StackedChart(sixNationsStacked));
    barCharts.push(new HorizontalBarChart(sixNationsHorizontal));
    barCharts.push(new ClusterChart(sixNationsCluster));
    barCharts.push(new CustomChart(sixNationsCustom));
    
}

//function draw
function draw() {
    for (let i = 0; i < barCharts.length; i++) {
        barCharts[i].render();
    }

}

function cleanedData() {
    for (let i = 0; i < data.rows.length; i++) {
        cleanData.push(data.rows[i].obj);
    }

    for (let i = 0; i < cleanData.length; i++) {
        cleanData[i].Wins = parseInt(cleanData[i].Wins);
        cleanData[i].Grand_Slams = parseInt(cleanData[i].Grand_Slams);
        cleanData[i].Other_Wins = parseInt(cleanData[i].Other_Wins);
    }
}
