<template>

     <div class="face">
          <div class="hair-before"></div>
          <div class="hair"></div>
          <div class="ear1"></div>
          <div class="ear2"></div>
          <div class="forehead"></div>
          <div class="eyebrow1"></div>
          <div class="eyebrow2"></div>
          <div class="eye1"></div>
          <div class="eye2"></div>
          <div class="nose"></div>
          <div class="main-face"></div>
          <div class="main-face-after"></div>
          <div class="main-face-before"></div>
          <div class="mustache"></div>
          <div class="mustache1"></div>
          <div class="mustache2"></div>
          <div class="lip-skin"></div>
          <div class="lip"></div>
          <div class="frinch"></div>
          <div class="neck"></div>
          <div class="collar"></div>
          <div class="coat1"></div>
          <div class="coat2"></div>
          <div class="face-shadow"></div>
          <div class="nose-shadow"></div>
          <div class="cheek-shadow-1"></div>
          <div class="cheek-shadow-2"></div>
          <div class="detailing-face-1"></div>
          <div class="detailing-face-2"></div>
          <div class="detailing-face-3"></div>
          <div class="detailing-eye-1"></div>
          <div class="detailing-eye-2"></div>
          <div class="shadow-forehead-1"></div>
          <div class="shadow-forehead-2"></div>
          <div class="shadow1-forehead-1"></div>
          <div class="shadow2-forehead-2"></div>
          <div class="shadow-btw-forehead"></div>
          <div class="shadow-btw1-forehead"></div>
      </div>
</template>

<script>

    export default {
        
    }
</script>

<style scoped>
body{
    background:#151a24;
}
.face{
    position: absolute;
    left: 30%;
    top: 2%;
}
.hair{
    background:#171417;
    width: 380px;
    height: 550px;
    left: 80px;
    position: absolute;
    border-radius: 250px 250px 300px 300px/300px 300px 400px 400px;
}
.hair-before{
    background:#171417;
    width: 380px;
    height: 600px;
    left: 80px;
    z-index: -99;
    position: absolute;
    border-radius: 250px 250px /300px 300px 0 0;
}
.hair::after{
    content:"";
    position: absolute;
    background: #bba198;
    width: 150px;
    height: 100px;
    top: 100px;
    left: 55px;
    transform: rotate(-30deg);
    border-radius: 20px 25% 0 0;
}
.hair::before{
    content:"";
    position: absolute;
    background: #bba198;
    width: 150px;
    height: 100px;
    top: 100px;
    left: 175px;
    transform: rotate(30deg);
    border-radius: 25% 20px 0 0;
}
.forehead{
    background:#bca299;
    width: 285px;
    height: 60px;
    position: absolute;
    top: 155px;
    left: 128px;
    border-radius: 0 0 20px 20px/ 100px;
}
.eyebrow1{
    clip-path: polygon(85% 39%, 89% 44%, 93% 50%, 76% 44%, 62% 46%, 48% 48%, 18% 50%, 1% 49%, 46% 31%);
    background:#2f2627;
    width: 130px;
    height: 130px;
    position: absolute;
    top: 184px;
    left: 125px;
    z-index: 99;
    transform: scale(-1,1);
    box-shadow: 10px 10px white;
}
.eyebrow2{
    clip-path: polygon(85% 39%, 89% 44%, 93% 50%, 76% 44%, 62% 46%, 48% 48%, 18% 50%, 1% 49%, 46% 31%);
    background:#2f2627;
    width: 130px;
    height: 130px;
    position: absolute;
    top: 184px;
    left: 290px;
    z-index: 99;
}
.ear1{
    clip-path: polygon(48% 0, 58% 42%, 59% 52%, 67% 92%, 60% 94%, 49% 86%, 44% 65%, 38% 53%, 40% 2%);
    background:#ac8c80;
    width: 140px;
    height: 140px;
    top: 220px;
    left: 20px;
    position: absolute;
    z-index: 99;
}
.ear2{
    clip-path: polygon(48% 0, 58% 42%, 59% 52%, 67% 92%, 60% 94%, 49% 86%, 44% 65%, 38% 53%, 40% 2%);
    background:#ac8c80;
    width: 140px;
    height: 140px;
    top: 220px;
    left: 380px;
    position: absolute;
    transform: scale(-1, 1);
}
.eye1{
    border-radius:48% 52% 100% 0% / 100% 11% 89% 0%;
    transform: rotate(50deg);
    width: 40px;
    height: 45px;
    background:#e8e4e5;
    position: absolute;
    top: 253px;
    left: 185px;
    z-index: 99999;
    box-shadow: inset 2px 2px #8a817f,inset -2px -2px #b3978f,1px 1px #baa49d,2px 2px #baa49d;
}
.eye1::after{
    content:"";
    position: absolute;
    width: 28px;
    height: 29px;
    border-radius: 50%;
    transform: rotate(-50deg);
    background: #2e2528;
    top: 3px;
    left: 3px;
}
.eye2{
    border-radius: 100% 0% 86% 14% / 46% 0% 100% 54%;
    transform: rotate(50deg);
    width: 40px;
    height: 45px;
    background:#e8e4e5;
    position: absolute;
    top: 253px;
    left: 315px;
    z-index: 999;
    box-shadow: inset 2px 2px #8a817f,inset -2px -2px #b3978f,1px 1px #baa49d,2px 2px #baa49d;
}
.eye2::after{
    content:"";
    position: absolute;
    width: 28px;
    height: 29px;
    background:#2e2528;
    border-radius: 50%;
    transform: rotate(-45deg);
    top: 3px;
    left: 3px;
}
.nose{
    clip-path: polygon(22% 71%, 61% 73%, 59% 10%, 70% 82%, 39% 100%, 37% 100%, 9% 78%, 31% 10%);
    background: #aa8d81;
    width: 100px;
    height: 140px;
    position: absolute;
    top: 250px;
    left: 228px;
    z-index:9999;
    transform: rotate(-1deg);
    opacity: 0.8;
}
.nose-shadow{
    background: #c8b2ac;
    width: 60px;
    height: 100px;
    position: absolute;
    top: 252px;
    left: 242px;
    clip-path: polygon(27% 0, 70% 0, 85% 99%, 9% 99%);
}
.main-face{
    clip-path: polygon(51% 0, 96% 0, 100% 43%, 96% 79%, 67% 80%, 37% 79%, 4% 79%, 0% 43%, 5% 0);
    background:#bba198;
    width: 310px;
    height: 280px;
    position: absolute;
    top: 190px;
    left: 115px;
}
.main-face-after{
    position: absolute;
    clip-path: polygon(10% 0, 21% 31%, 48% 32%, 59% 91%, 68% 100%, 49% 89%, 29% 74%, 14% 48%, 0 0);
    width: 150px;
    height: 212px;
    background:#171415;
    top: 359px;
    left: 100px;
    z-index: 99999;
}
.main-face-before{
    position: absolute;
    clip-path: polygon(10% 0, 21% 31%, 48% 32%, 59% 91%, 68% 100%, 49% 89%, 29% 74%, 14% 48%, 0 0);
    width: 150px;
    height: 210px;
    background:#171415;
    top: 354px;
    left: 290px;
    z-index:9;
    transform: scale(-1, 1);
}
.mustache{
    clip-path: polygon(52% 7%, 63% 0, 100% 29%, 94% 78%, 51% 100%, 48% 100%, 6% 78%, 0 31%, 41% 1%);
    width: 198px;
    height: 212px;
    background: #171416;
    position: absolute;
    top: 388px;
    left: 165px;
    z-index:1;
}
.mustache1{
    clip-path: polygon(41% 1%, 15% 44%, 9% 89%, 1% 79%, 0 0, 41% 1%);
    background:#bca49aed;
    width: 120px;
    height: 120px;
    position: absolute;
    top: 400px;
    left: 180px;
    z-index: 99;
}
.mustache2{
    clip-path: polygon(41% 1%, 15% 44%, 9% 89%, 1% 79%, 0 0, 41% 1%);
    background:#bca49aed;
    width: 120px;
    height: 120px;
    position: absolute;
    top: 400px;
    left: 243.5px;
    z-index: 99;
    transform: scale(-1, 1);
}
.lip-skin{
    clip-path: polygon(51% 17%, 75% 9%, 100% 43%, 71% 83%, 53% 81%, 44% 81%, 25% 84%, 0% 43%, 25% 10%);
    width: 130px;
    height: 120px;
    background:#baa299;
    position: absolute;
    top: 410px;
    left: 205px;
    z-index: 2;
}
.lip{
    clip-path: polygon(50% 19%, 64% 14%, 92% 28%, 74% 36%, 61% 40%, 46% 40%, 28% 37%, 6% 28%, 37% 15%);
    position: absolute;
    top: 415px;
    left: 210px;
    background: #5a323b;
    width: 120px;
    height: 130px;
    z-index: 99;
}
.frinch{
    content:"";
    position: absolute;
    width: 60px;
    height: 70px;
    clip-path: polygon(85% 1%, 7% 0, 46% 45%);
    background:#2f2728;
    top: 470px;
    left: 240px;
    z-index: 9999;
}
.neck{
    position: absolute;
    width: 260px;
    height: 250px;
    background:#9e7b6e;
    left: 140px;
    top: 520px;
    z-index:-99;
    clip-path: polygon(50% 0%, 100% 0, 100% 13%, 70% 39%, 63% 46%, 31% 46%, 24% 40%, 0 11%, 0 0);
}
.collar{
    background:#141923;
    width: 300px;
    clip-path: polygon(36% 54%, 54% 54%, 97% 0, 100% 15%, 100% 68%, 34% 68%, 0 68%, 0 16%, 3% 1%);
    height: 200px;
    position: absolute;
    top: 540px;
    left:120px;
}
.coat1{
    clip-path: polygon(56% 34%, 100% 0, 100% 61%, 76% 61%, 49% 61%, 26% 61%, 0 60%, 0% 43%, 28% 38%);
    background:#111317;
    width: 200px;
    height: 200px;
    position: absolute;
    top: 567px;
    left: -80px;
}
.coat2{
    clip-path: polygon(56% 34%, 100% 0, 100% 61%, 76% 61%, 49% 61%, 26% 61%, 0 60%, 0% 43%, 28% 38%);
    background:#111317;
    width: 200px;
    height: 200px;
    position: absolute;
    top: 567px;
    left: 420px;
    transform: scale(-1, 1);
}
.face-shadow{
    clip-path: polygon(49% 19%, 74% 10%, 85% 23%, 71% 56%, 74% 100%, 25% 100%, 28% 55%, 14% 25%, 26% 10%);
    background:#c7b2ab;
    position: absolute;
    width: 400px;
    height: 400px;
    top: 130px;
    left: 73px;
    opacity: 0.5;
}
.cheek-shadow-1{
    clip-path: polygon(73% 21%, 84% 14%, 73% 38%, 68% 50%, 56% 62%, 36% 73%, 52% 49%, 65% 29%);
    background:#af948b;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 350px;
    left: 150px;
    z-index: 99;
    opacity: 0.9;
}
.cheek-shadow-2{
    clip-path: polygon(73% 21%, 84% 14%, 73% 38%, 68% 50%, 56% 62%, 36% 73%, 52% 49%, 65% 29%);
    background:#af948b;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 350px;
    left: 290px;
    z-index: 99;
    transform: scale(-1,1);
    opacity: 0.9;
}
.detailing-face-1{
    clip-path: polygon(17% 0, 0% 100%, 14% 100%);
    background:#171416;
    width: 140px;
    height: 100px;
    position: absolute;
    top: 320px;
    left: 400px;
    transform:rotate(4deg);
    border-radius:48% 52% 100% 0% / 100% 11% 89% 0%;
}
.detailing-face-2{
    clip-path: polygon(17% 0, 0% 100%, 14% 100%);
    background:#171416;
    width: 140px;
    height: 100px;
    position: absolute;
    top: 320px;
    left: 0px;
    transform:scale(-1,1);
}
.detailing-face-3{
    clip-path: polygon(61% 80%, 83% 59%, 100% 35%, 92% 71%, 65% 100%, 50% 100%, 34% 100%, 6% 69%, 0% 35%, 34% 80%);
    background:#171416;
    width: 300px;
    height: 200px;
    position: absolute;
    top:400px;
    left: 115px;
}
.detailing-eye-1{
    border-radius:
        56% 44% 100% 0% / 100% 11% 89% 0%
;
    transform: rotate(36deg);
    background-color: transparent;
    border-top: 5px solid #c7b0aa;
    border-bottom: 10px solid #b3978e;
    border-left: 2px solid #c7b0aa;
    border-right: 10px solid #b3978e;
    position: absolute;
    width: 50px;
    height: 32px;
    top: 254px;
    left: 178px;
    z-index: 999999;
    box-shadow: -2px -0px 0px #7e6863, -2px -5px 0px #66524e,inset 2px -2px 2px #94756a,-2px -6px 0px #3e2c29,inset -3px 3px 2px #816e64;
}
.detailing-eye-2{
    border-radius:56% 44% 100% 0% / 100% 9% 91% 0%;
    transform: rotate(26deg);
    background-color: transparent;
    border-top: 3px solid #c7b0aa;
    border-bottom: 10px solid #b3978e;
    border-left: 5px solid #c7b0aa;
    border-right: 10px solid #b3978e;
    position: absolute;
    width: 50px;
    height: 30px;
    opacity: 0.9;
    top: 255px;
    left: 306px;
    z-index: 99999;
    box-shadow: -0px -2px 0px #7e6863,-5px -2px 0px #66524e,inset 6px -3px 2px #816e64,-6px -2px 0px #3e2c29,inset 2px 0px 2px #554038;
}
.detailing-eye-1::after{
    content:"";
    background:transparent;
    border-left:2px solid #87695e;
    border-bottom: 1px solid #a4877ec7;
    width: 8px;
    height: 10px;
    position: absolute;
    top: -7px;
    left: 47px;
    transform: rotate(-80deg);
}
.detailing-eye-2::after{
    content:"";
    background:transparent;
    border-left:2px solid #87695e;
    border-top: 1px solid #a4877ec7;
    width: 8px;
    height: 10px;
    position: absolute;
    top: 27px;
    left: -8px;
    transform: rotate(190deg);
}
.shadow-forehead-1{
    clip-path: polygon(11% 57%, 34% 90%, 78% 70%, 94% 78%, 60% 90%, 31% 100%, 16% 75%, 0% 43%, 3% 41%);
    position: absolute;
    background:#b69991;
    width: 70px;
    height: 70px;
    top: 170px;
    left: 270px;
}
.shadow-forehead-2{
    clip-path: polygon(11% 57%, 34% 90%, 78% 70%, 94% 78%, 60% 90%, 31% 100%, 16% 75%, 0% 43%, 3% 41%);
    position: absolute;
    background:#b69991;
    width: 70px;
    height: 70px;
    top: 170px;
    left: 190px;
    transform: scale(-1,1);
}
.shadow1-forehead-1{
    clip-path: polygon(87% 10%, 72% 35%, 54% 36%, 68% 25%);
    position: absolute;
    background:#b69991;
    width: 70px;
    height: 70px;
    top: 220px;
    left: 200px;
}
.shadow2-forehead-2{
    clip-path: polygon(87% 10%, 72% 35%, 54% 36%, 68% 25%);
    position: absolute;
    background:#b69991;
    width: 70px;
    height: 70px;
    top: 220px;
    left: 260px;
    transform:scale(-1,1);
}
.shadow-btw-forehead{
    clip-path: polygon(50% 0%, 64% 21%, 80% 48%, 94% 78%, 65% 31%, 52% 9%, 6% 78%, 20% 49%, 37% 20%);
    position: absolute;
    background:#b69991;
    width: 30px;
    height: 30px;
    top: 230px;
    left: 250px;
}
.shadow-btw1-forehead{
    clip-path: polygon(50% 0%, 54% 35%, 56% 47%, 67% 57%, 52% 53%, 44% 53%, 25% 56%, 38% 47%, 44% 36%);
    position: absolute;
    background:#b69991;
    width: 30px;
    height: 40px;
    top: 225px;
    left: 251px;
}

</style>
