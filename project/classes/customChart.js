class CustomChart {
    constructor(obj) {
        // Position and Size
        this.x = obj.x;
        this.y = obj.y;
        this.w = obj.w;
        this.h = obj.h;

        // Data
        this.data = obj.data;
        this.yAxisValue = obj.yAxisValue;
        this.xAxisLabel = obj.xAxisLabel;

        // Title
        this.titleXOffset = obj.titleXOffset;
        this.titleYOffset = obj.titleYOffset;
        this.titleSize = obj.titleSize;
        this.titleColor = obj.titleColor;
        this.titleText = obj.titleText;
        this.titleWidth = obj.titleWidth;

        // Axis
        this.axisLineColor = obj.axisLineColor;
        this.axisLineThickness = obj.axisLineThickness;

        // Bars
        this.barWidth = obj.barWidth;
        this.barColor = obj.barColor;
        this.barStrokeThickness = obj.barStrokeThickness;
        this.barStrokeColor = obj.barStrokeColor;
        this.numBars = this.data.length;

        // Labels
        this.labelPadding = obj.labelPadding;
        this.labelRotation = obj.labelRotation;
        this.labelTextSize = obj.labelTextSize;
        this.labelColor = obj.labelColor;

        // Custom variables
        this.myNewArray = obj.myNewArray; 
        this.total = obj.total; 
        this.font = obj.font; 

        //new chart properties
        this.radius = Math.min(this.w, this.h) / 2; //radius of all the chart
        this.innerRadius = this.radius * 0.5; //inner radius
        this.innerRadiusColor = obj.innerRadiusColor || "#000000"; //if no color property default to black
    }

    render() {
        
        push();
        translate(this.x, this.y);

        // Titles
fill(this.titleColor);
textSize(this.titleSize);
textFont('Inter');
textFont(this.font);
textAlign(CENTER, CENTER);
text(this.titleText, 0, -this.radius - this.titleYOffset);


        //arcs
        let startAngle = 0;
        for (let i = 0; i < this.myNewArray.length; i++) {
            let value = this.myNewArray[i];
            let endAngle = startAngle + (value / this.total) * 360;

            //arc
            if (value > 0){
            fill(this.barColor[i % this.barColor.length]); 
            noStroke();
            arc(
                0, 0, 
                this.radius * 2, this.radius * 2, 
                startAngle, endAngle,
                PIE 
            );
        }

            //label positions
            let midAngle = (startAngle + endAngle) / 2; 
            let labelX = (this.radius + 50) * cos(midAngle); 
            let labelY = (this.radius + 50) * sin(midAngle);

            //team names
            fill(this.labelColor);
            textSize(this.labelTextSize);
            textFont('Inter');
            textFont(this.font); 
            textAlign(CENTER, CENTER);
            text(
                `${this.data[i][this.xAxisLabel]}: ${value}`, 
                labelX, labelY
            );

            //start angle to eng angle
            startAngle = endAngle;
        }

        //inner circle
        fill(this.innerRadiusColor); 
        noStroke();
        ellipse(0, 0, this.innerRadius * 2, this.innerRadius * 2);

        //titles
        fill(this.titleColor);
        textSize(this.titleSize);
        textFont('Inter');
        textFont(this.font);
        textAlign(CENTER, CENTER);
        text(this.titleText, 0, -this.radius - this.titleYOffset); 

        pop();
    }
}