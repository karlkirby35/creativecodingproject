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

        this.gap = obj.gap;

    }

    render(){
   
    	this.gap =
		(this.w - (cleanData.length * this.barWidth * this.yAxisValue.length) - (this.margin * 2)) /
		(cleanData.length - 1);

	let maxValues = [];
	this.yAxisValue.forEach((value) => {
		maxValues.push(cleanData.map((row) => row[value]));
	});

	let maxValue = max(maxValues.flat(5));

	let scaler = this.h / maxValue;

	push();
	translate(this.x, this.y);

	push();
	translate(this.margin, 0);

	for (let i = 0; i < cleanData.length; i++) {
		push();
		translate((this.gap + this.w * this.yAxisValue.length) * i, 0);

		for (let j = 0; j < this.yAxisValue.length; j++) {
			noStroke();
			fill(this.barColor[j % 3]);
			rect(this.w * j, 0, this.w, -cleanData[i][this.yAxisValue[j]] * scaler);

			fill(this.axisLineColor);
			noStroke();
			textAlign(LEFT, CENTER);
			textSize(12);
			push();
			translate(this.w, 10);
			rotate(60);
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