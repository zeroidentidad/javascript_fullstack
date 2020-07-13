class DibujadorCirculos {
    paint(context, geom) {

        var maxNumCirculos = 100;
        var maxRadio = 30;
        var minRadio = 3;
        
        var colors = ["#D39516", "#FFB51D", "#FFDD98", "#FFFFFF"];

        var numColores = colors.length;

        for (var n = 0; n < maxNumCirculos; n++) {
            var xPos = Math.random() * geom.width;
            var yPos = Math.random() * geom.height;
            var radius = minRadio + (Math.random() * (maxRadio - minRadio));
            var colorIndex = Math.random() * (numColores - 1);
            colorIndex = Math.round(colorIndex);
            var color = colors[colorIndex];
            this.dibujarCirculo(context, xPos, yPos, radius, color);
        }

    }

    dibujarCirculo(context, xPos, yPos, radius, color) {

        var startAngle = (Math.PI / 180) * 0;
        var endAngle = (Math.PI / 180) * 360;
        context.shadowColor = "gray";
        context.shadowOffsetX = 1;
        context.shadowOffsetY = 1;
        context.shadowBlur = 5;

        context.beginPath();
        context.arc(xPos, yPos, radius,
            startAngle, endAngle, false);
        context.fillStyle = color;
        context.fill();
    }
}

registerPaint('circulos', DibujadorCirculos);