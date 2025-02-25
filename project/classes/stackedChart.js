class StackedChart {
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
        this.labelRotation = obj.labelRotation;
        this.labelTextSize = obj.labelTextSize;
        this.labelColor = obj.labelColor;
    }

    render() {
        push();
        translate(this.x, this.y);

        // Titles
        noStroke();
        fill(this.titleColor);
        textSize(this.titleSize);
        textAlign(CENTER, CENTER);
        text(
            this.titleText,
            this.w / 2,
            this.h - this.titleYOffset
        );

        // Controlling bar gap, max value, and scale
        let barGap = (this.w - (this.numBars * this.barWidth)) / (this.numBars + 1);
        
        //map loops over this.data 
        //reduce loops through yaxisvalue
        //adds up the row corresponding to the keys (teams)
        //sums starts at 0 and for each value it adds the value from row
        let totalMax = max(this.data.map(row => {
            return this.yAxisValue.reduce((sum, key) => sum + row[key], 0); 
             }));

        let scale = this.h / totalMax;

        // Loop through the data to draw bars
        for (let i = 0; i < this.numBars; i++) {
            let jump = (barGap * (i + 1)) + (this.barWidth * i);
            let currentY = 0;

            // Loop through the stacked values
            for (let j = 0; j < this.yAxisValue.length; j++) {
                let barHeight = this.data[i][this.yAxisValue[j]] * scale;

                // Bar details
                stroke(this.barStrokeColor);
                strokeWeight(this.barStrokeThickness);
                fill(this.barColor[j]);
                rect(jump, -currentY, this.barWidth, -barHeight);
                currentY += barHeight;
            }

            // Labels
            noStroke();
            fill(this.labelColor);
            textSize(this.tickTextSize);
            textAlign(LEFT, CENTER); 
            let labels = this.data.map((x) => x[this.xAxisLabel]);

            // Label position
            push();
            translate(jump + this.barWidth / 2, this.labelPadding);
            rotate(this.labelRotation);
            text(labels[i], 0, 0);
            pop();
        }

        // Draw ticks
        let tickGap = this.h / this.numTicks;
        for (let i = 0; i <= this.numTicks; i++) {
            noFill();
            stroke(this.tickColor);
            strokeWeight(this.tickStrokeWeight);
            let y = map(i, 0, this.numTicks, 0, -this.h);

            // Draw tick marks
            line(0, -i * tickGap, -this.tickStrokeLength, -i * tickGap);

            // Draw tick labels
            noStroke();
            fill(this.tickTextColor);
            textAlign(RIGHT, CENTER);
            textSize(this.tickTextSize);
            let value = (totalMax / this.numTicks) * i;
            text(
                value.toFixed(this.tickDecimals),
                -this.tickPadding - this.tickStrokeLength,
                -i * tickGap
            );
        }

        // axis lines
        stroke(this.axisLineColor);
        strokeWeight(this.axisLineThickness);
        line(0, 0, this.w, 0); // X-axis
        line(0, 0, 0, -this.h); // Y-axis

        pop();
    }
}
