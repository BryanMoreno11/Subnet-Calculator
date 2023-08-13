import { Component } from '@angular/core';

@Component({
  selector: 'app-subneting',
  templateUrl: './subneting.component.html',
  styleUrls: ['./subneting.component.css']
})
export class SubnetingComponent {
ip:string="";
n:number=-1;
mask:any;
redes:number[]=[];

calcMasks(){
  this.n= +this.n;
  this.mask=+this.mask;
  console.log(typeof(this.n));
return this.mask+(Math.log(this.n)/Math.log(2));
}

calcRedes(){
this.redes=[];
let host:number=256/this.n;
let count:number=0;
for(let i=0; i<=255;i++){
  this.redes.push(i);
  if(i==1 || (i>1 && count==4)){
    i+=host-4;
    count=0;
  }
  count++;
}
}




}
