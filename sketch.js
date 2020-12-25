let snowImage, santaImg, music
function preload(){
    snowImage = loadImage('snow.png')
    santaImg = loadImage('santa.png')
    music = loadSound('christmas_sound.mp3')
}

let snowFlakes = []
function setup(){
    createCanvas(windowWidth, windowHeight)
    for (let i = 0;i < floor(width / 10);i ++){
        let x = random(0, width - 0)
        let y = random(0, height - 0)
        snowFlakes.push(new Snow(x, y))
    }
    noStroke()
    snowImage.resize(width, height/2.5)
    santaImg.resize(300, 0)
    music.play()
}

function draw(){
    background(31)
    image(snowImage, 0, height - snowImage.height)
    image(santaImg, width - (frameCount / 3), 0)
    snowFlakes.forEach(flake => {
        flake.show()
        flake.udpate()
    })
}


function Snow(x, y){
    this.x = x
    this.y = y
    this.vel = random(1, 5)
    this.xvel = random(0, 0.6)
    this.size = 8
    this.show = function(){ 
        circle(this.x, this.y, this.size)
    }
    this.udpate = function(){
        this.y += this.vel
        this.x += this.xvel
        if (this.y > height){
            this.y = -10
        }
        if (this.x > width){
            this.x = -10
        }
    }
}