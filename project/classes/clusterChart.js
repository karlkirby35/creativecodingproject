class ClusterChart {
    constructor(obj){
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

        this.gap = 10;
        this.margin = obj.margin || 20; 

    }

    render(){

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
   
    this.gap = (this.w - (cleanData.length * this.barWidth * this.yAxisValue.length)) / (cleanData.length + 1);

    let maxValues = [];
	this.yAxisValue.forEach((value) => {
		maxValues.push(cleanData.map((row) => row[value]));
	});

	let maxValue = max(maxValues.flat(5));

	let scaler = this.h / maxValue;

	push();
	translate(this.x, this.y);
    

    let tickGap = this.h / this.numTicks;
    for (let i = 0; i <= this.numTicks; i++) {
        noFill();
        stroke(this.tickColor);
        strokeWeight(this.tickStrokeWeight);
        let y = map(i, 0, this.numTicks, 0, -this.h);

        line(0, -i * tickGap, -this.tickStrokeLength, -i * tickGap);

        // Tick decimals and controlling how it looks
        noStroke();
        fill(this.tickTextColor);
        textFont('Inter');
        textAlign(RIGHT, CENTER);
        textSize(this.tickTextSize);
        let value = (maxValue / this.numTicks) * i;
        text(
            value.toFixed(this.tickDecimals),
            -this.tickPadding - this.tickStrokeLength,
            -i * tickGap
        );
    }

	push();
	translate(this.margin, 0);

	for (let i = 0; i < cleanData.length; i++) {
		push();
		translate((this.gap + this.barWidth * this.yAxisValue.length) * i, 0);

		for (let j = 0; j < this.yAxisValue.length; j++) {
			noStroke();
            fill(this.barColor[j % this.barColor.length]);
            rect(this.barWidth * j, 0, this.barWidth, -cleanData[i][this.yAxisValue[j]] * scaler);
            

            noStroke();
            fill(this.tickTextColor);
            textSize(this.tickTextSize);
            
            textAlign(RIGHT, CENTER);

            push();
            translate(this.barWidth, 45);
            rotate(this.labelRotation);
            text(cleanData[i][this.xAxisLabel], 0, 0);
            pop();
            
		}
		pop();
	}
	pop();

	noFill();
	stroke(this.axisLineColor);
	strokeWeight(this.axisLineThickness);
	line(0, 0, 0, -this.h);
	line(0, 0, this.w, 0);

	pop();

    
    
    }
}