class BarChart {
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

        //titles 
        noStroke();
        fill(this.titleColor);
        textSize(this.titleSize);
        textAlign(CENTER, CENTER);
        text(
            this.titleText,
            this.w / 2,
            this.h - this.titleYOffset
        );

        
        //controlling bargap, maxvalue, scale

        let barGap = (this.w - (this.numBars * this.barWidth)) / (this.numBars + 1);

        let maxValue = max(this.data.map((x) => x[this.yAxisValue]))
        
        let scale = this.h / maxValue;
        
        for (let i = 0; i < this.numBars; i++) {
            let jump = (barGap * (i + 1)) + (this.barWidth * i); 
            let colHeight = this.data[i][this.yAxisValue] * scale; 
        
        //bar details 
        stroke(this.barStrokeColor)
        strokeWeight(this.barStrokeThickness);
        fill(this.barColor);
        rect(jump, 0, this.barWidth, -colHeight); 
        
        //barchart axis lines
        stroke(this.axisLineColor);
        strokeWeight(this.axisLineThickness);
        line(0, 0, this.w, 0); // X-axis
        line(0, 0, 0, -this.h); // Y-axis
         
      
        //labels
        noStroke();
        fill(this.labelColor);
        textSize(this.tickTextSize);
        textAlign(LEFT, CENTER);
        let labels = this.data.map((x) => x[this.xAxisLabel]);
        
        //controlling the labels
        push();
        translate(jump + this.barWidth / 2, this.labelPadding);
        rotate(this.labelRotation);
        text(labels[i], 0,0);
        pop();
        }


        //Draw ticks
       let tickGap = this.h / this.numTicks;
        
       //controlling number of ticks and details
        for(let i = 0; i <= this.numTicks; i++){
        noFill();
        stroke(this.tickColor);
        strokeWeight(this.tickStrokeWeight);
        let y = map(i,0,this.numTicks, 0, -this.h);
            
        line(0,-i * tickGap,-this.tickStrokeLength, -i * tickGap);
            
        //tick decimals and controlling how it looks
        noStroke();
        fill(this.tickTextColor);
        textAlign(RIGHT, CENTER);
        textSize(this.tickTextSize);
        let value = (maxValue / this.numTicks) * i
        text(
            value.toFixed(this.tickDecimals), 
            -this.tickPadding - this.tickStrokeLength,
            -i * tickGap
        );
    }
        
        pop();
    }
}