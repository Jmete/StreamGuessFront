import { Component, OnInit } from '@angular/core';
import { StreamerService } from '../streamer.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [StreamerService]
})
export class GameComponent implements OnInit {

    shuffleArray = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        return array;
    }

   // var clips


    testClips = [];
    fakeClips = [];
    theAnswer = "";
    theLink = "";
    fakeStreamers = [];
    score = 0;
    isFin = false;
    start = true;
    logovar = "logobar";
    scorecolor:"";


    randStreamer = function(){
        var clipLen = this.testClips.length
        var num
        var newStreamer = [];

        num = Math.floor((Math.random() * clipLen) + 1) - 1;
        if(clipLen > 0){
            newStreamer = this.testClips.splice(num,1)[0];
            return newStreamer;
        }



    }

    fakeAns = function(realStreamer){
        this.fakeStreamers = [];
        var clipLen = this.fakeClips.length
        var num
        var numOfObjects = 0;
        var fakeStreamer

        while(numOfObjects < 3){
            num = Math.floor((Math.random() * clipLen) + 1) - 1;
            fakeStreamer = this.fakeClips[num].name;
            if(fakeStreamer != realStreamer.name){
                if(this.fakeStreamers.includes(fakeStreamer) == false){
                    this.fakeStreamers.push(fakeStreamer);
                    numOfObjects = numOfObjects + 1
                }
            }


        }

        this.theAnswer = realStreamer.name;
        this.theLink = realStreamer.linkz;
        this.fakeStreamers.push(realStreamer.name);
        this.fakeStreamers = this.shuffleArray(this.fakeStreamers)
        return [realStreamer,this.fakeStreamers]


    }

    onSelect = function(but){
        this.scorecolor = "";
        if(this.theAnswer == but){
            this.score += 1;
            if(this.testClips.length > 0){
                this.fakeAns(this.randStreamer());
                this.scorecolor = "scorecorrect";

            }else{
                this.isFin = true;
            }

        }else{
            if(this.testClips.length > 0){

                this.fakeAns(this.randStreamer());
                this.scorecolor = "scorewrong";


            }else{
                this.isFin = true;
            }
        }
    }


    runGame = function(){
        this.fakeAns(this.randStreamer());
        this.start = false;
        this.logovar = "smalllogobar";
    }









  constructor(private _streamerService: StreamerService) { }

  ngOnInit() {
      this._streamerService.getStreamers().subscribe(resStreamerData => this.testClips = resStreamerData);
      this._streamerService.getStreamers().subscribe(resStreamerData => this.fakeClips = resStreamerData);

  }



}
