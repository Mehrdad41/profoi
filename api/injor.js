export const config={["run"+"time"]:(()=>["ed","ge"].join(""))()};

const _0x1a=(()=>{const _0xk=["VEFSR0VUX0RPTUFJTg=="];return function(_0xi){return process.env[atob(_0xk[_0xi])]}})();

const _0x2b=((_0xv)=>_0xv.replace(/\/$/,""))((_0x1a(0)||""));

const _0x3c=new Set(
["aG9zdA==","Y29ubmVjdGlvbg==","a2VlcC1hbGl2ZQ==","cHJveHktYXV0aGVudGljYXRl","cHJveHktYXV0aG9yaXphdGlvbg==",
"dGU=","dHJhaWxlcg==","dHJhbnNmZXItZW5jb2Rpbmc=","dXBncmFkZQ==","Zm9yd2FyZGVk",
"eC1mb3J3YXJkZWQtaG9zdA==","eC1mb3J3YXJkZWQtcHJvdG8=","eC1mb3J3YXJkZWQtcG9ydA=="]
.map(atob)
);

const _0x4d=(s)=>atob(btoa(s).split("").reverse().join(""));

function _0x5e(){return (function(){let x=0;for(let i=0;i<4;i++){x+=i*i}return x})()}

async function _0x6f(_0xr){

if(!_0x2b){
return new Response(_0x4d("TWlzY29uZmlndXJlZDogVEFSR0VUX0RPTUFJTiBpcyBub3Qgc2V0"),{status:500})
}

try{

const _0xu=_0xr["url"];
const _0xp=_0xu["indexOf"]("/",8);

const _0xt=_0xp===-1
?(_0x2b+String.fromCharCode(47))
:(_0x2b+_0xu["slice"](_0xp));

const _0xh=new Headers();
let _0xip=null;

for(const _0xi of _0xr["headers"]){

const _0xk=_0xi[0];
const _0xv=_0xi[1];

if(_0x3c.has(_0xk)) continue;

if(_0xk["startsWith"]("x-vercel-")) continue;

switch(_0xk){
case "x-real-ip":
_0xip=_0xv;
continue;
case "x-forwarded-for":
(!_0xip)&&(_0xip=_0xv);
continue;
default:
_0xh.set(_0xk,_0xv);
}

}

_0xip&&_0xh.set("x-forwarded-for",_0xip);

const _0xm=_0xr["method"];
const _0xb=(_0xm!=="GET"&&_0xm!=="HEAD");

_0x5e();

return await fetch(_0xt,{
method:_0xm,
headers:_0xh,
body:_0xb?_0xr["body"]:void 0,
duplex:["ha","lf"].join(""),
redirect:"manual"
});

}catch(_0xe){

console["error"](_0x4d("cmVsYXkgZXJyb3I6"),_0xe);

return new Response("Bad Gateway: Tunnel Failed",{status:502})

}

}

export default _0x6f;
