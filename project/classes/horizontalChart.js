class HorizontalBarChart {
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

        // Axis
        this.axisLineColor = obj.axisLineColor;
        this.axisLineThickness = obj.axisLineThickness;

        // Tick
        this.tickColor = obj.tickColor;
        this.tickStrokeWeight = obj.tickStrokeWeight;
        this.tickStrokeLength = obj.tickStrokeLength;
        this.tickPadding = obj.tickPadding;
        this.numTicks = obj.numTicks;
        this.tickTextColor = obj.tickTextColor;
        this.tickTextSize = obj.tickTextSize;
        this.tickDecimals = obj.tickDecimals;

        // Bars
        this.barWidth = obj.barWidth;
        this.barColor = obj.barColor;
        this.barStrokeThickness = obj.barStrokeThickness;
        this.barStrokeColor = obj.barStrokeColor;
        this.numBars = this.data.length;

        // Labels
        this.labelPadding = obj.labelPadding;
        this.labelTextSize = obj.labelTextSize;
        this.labelColor = obj.labelColor;
    }

    render() {
        push();
        translate(this.x, this.y);
        
        // title
        noStroke();
        fill(this.titleColor);
        textSize(this.titleSize);
        textFont('Inter');
        textAlign(CENTER, CENTER);
        text(this.titleText, this.w / 2, -this.titleYOffset);

        // scaling for bar width (based on max value in data)
        let maxValue = 0;

        for (let i = 0; i < this.data.length; i++) {
        if (this.data[i][this.yAxisValue] > maxValue) { //loops through data 
        maxValue = this.data[i][this.yAxisValue]; //if this.data is greater than maxvalue update maxvalue
        //after update maxvalue holds highest dataset value
    }
}
        let scale = this.w / maxValue;
        let barGap = (this.h - (this.numBars * this.barWidth)) / (this.numBars + 1); //bars spaced out 

        // draw bars
        for (let i = 0; i < this.numBars; i++) {
            let yPos = (barGap * (i + 1)) + (this.barWidth * i); 
            let barLength = this.data[i][this.yAxisValue] * scale;

            // bar
            stroke(this.barStrokeColor);
            strokeWeight(this.barStrokeThickness);
            fill(this.barColor);
            rect(0, yPos, barLength, this.barWidth); //bars start at 0 

            // labels
            noStroke();
            fill(this.labelColor);
            textSize(this.tickTextSize);
            textFont('Inter');
            textAlign(RIGHT, CENTER); 
            text(this.data[i][this.xAxisLabel], -this.labelPadding, yPos + this.barWidth / 2);
        }

        // draw axis lines
        stroke(this.axisLineColor);
        strokeWeight(this.axisLineThickness);
        line(0, 0, 0, this.h); // y-axis
        line(0, this.h, this.w, this.h); // x-axis

        // draw ticks on X-axis
        for (let i = 0; i <= this.numTicks; i++) {
            let x = map(i, 0, this.numTicks, 0, this.w);
            
            stroke(this.tickColor);
            strokeWeight(this.tickStrokeWeight);
            line(x, this.h, x, this.h + this.tickStrokeLength);

            // tick labels
            noStroke();
            fill(this.tickTextColor);
            textSize(this.tickTextSize);
            textFont('Inter');
            textAlign(CENTER, TOP);
            let value = (maxValue / this.numTicks) * i;
            text(value.toFixed(this.tickDecimals), x, this.h + this.tickStrokeLength + this.tickPadding);
        }

        pop();
    }
}
