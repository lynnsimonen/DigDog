$(document).ready(function() {
    //onclick to choose number of bones and set up gameboard
    $("button#play").on("click", createBoard);


    let numBones;
    let bonesArray = [];
    let foundBones;
    let findBones;

    function createBoard() {
        //Gather variable and create variables
        numBones = parseFloat($("input#numBones").val());
        foundBones = 0;
        findBones = numBones - foundBones;

        $("div#boneNumber").text("THERE ARE " + findBones + " BONES BURIED IN THE YARD.")

        //Create numbered gameboard
        let boxNumber = "1";
        for (let i = 0; i < numBones; i++) {
            for (let j = 0; j < numBones; j++) {
                let newSpan = $("<span class='green'>" + boxNumber++ + "</span>")
                $("#board").append(newSpan);
            }
            $("#board").append("<br>")
        }

        //Create random array of length=numBones, min=1, max=pow(numBones, 2)
        //The array will be location (span index + 1) of buried bones
        bonesArray = [];
        do {
            let bones = Math.floor((Math.random() * (Math.pow(numBones, 2))) + 1);
            if (!(bonesArray.includes(bones))) { // is not in the array, then push into array
                bonesArray.push(bones);
            }
            // continue
        }
        while (bonesArray.length < numBones);
        $("span.green").click(playDigDug);
    }

   //Create game play function that makes green squares clickable
    function playDigDug() {

        //find clicked square number (index + 1)
        let SquareNum = ($(this).index() + 1);
        //$("").siblings("")  or  .index
        console.log(bonesArray)

        //fruits.includes("Peach")
        //if SquareNum is in array (bone locations), then replace green square with bone square else brown square
        if (bonesArray.includes(SquareNum)) {
            $(this).removeClass("green");
            $(this).addClass("bone");
        }
        else {
            $(this).removeClass("green");
            //$("span.brown").eq(SquareNum-1).addClass("brown");
            $(this).addClass("brown");

        }

        //Give each span a number $("span:eq(number)") if boneSquaresArray.includes(number), show bone, else brown.
        // Create if, then to click square and if number is in array, then show span#brownANDbone
        //if no bone, show span#brown
        //make box unclickable (array of unclickable squares?)
        //Change Array from 0-# if using index!!!


        }







    //3. Create interactive progress bar
    //Adjust Danger-o-Meter by random%, either value=(1/(pow(numBones, 2)) or value=(4/(pow(numBones, 2))
    //green on right = safe, red on left = danger



    //4. Decrease numBones counter
    //if numbones found = tot
    //Create happy or sad note if play is over or if found all bones


    /*
               if (Math.random() < .25)
                   {
                       newSpan.addClass("surprise");
                       $("p").append(newSpan);
                   }
                   $("p").append("<br>")
       */

});

