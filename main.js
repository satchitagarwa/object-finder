status="";
function setup(){
    canvas= createCanvas(280,280);
    canvas.center();
}
function draw(){
    image(video,0,0,280,280);
    if(status !="")
    {
        objectDetector.detect(video,gotResult);
        for (i=0; i<object.length; i++)
        {
            document.getElementById("status").innerHTML="Status: Object Detected";
            document.getElementById("number_of_objects").innerHTML="Status: Object Detected Are : "+ object.length;
            
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x +15, object[i].y + 15)
            noFill();
            stroke("#FF0000");
            Rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("input").value
    document.getElementById("status").innerHTML="Status:  Detecting Object";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
}
gotResult