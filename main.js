
const isArray =(a)=>{return Array.isArray(a)};
const isObject =(a)=>{
	return typeof a === 'object' 
	&& !isArray(a)
	&& !isNumber(a)
	&& !isNull(a)
	&& !isElmt(a)
	&& !(a == 'undefined')
	};
const isObjectEmpty =(a)=>{return Object.keys(a).length==0};
const isNumber =(a)=>{return !isNaN(parseFloat(a))};
const isNull =(a)=>{return typeof a === null};
const isArrNumb =(a)=>{
	if(!isArray(a)){return false};a.map(c=>{if(!isNumber(c)) return false})};
const isElmt	=(a)=>{return (typeof a==="object"&&a!==null&&a.nodeType ===1&&typeof a.nodeName === "string"&&a !== "undefined")}
const isString	=(a)=>{return typeof a=='string'}
const isFunction=(a)=>{
 return a && {}.toString.call(a) === '[object Function]';
}
const isBoolean=(a,val)=>{
	return a === true || a === false && a === val
	}

const isMobile 	= /Android|Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent);
const isTablet = isMobile ? /Tablet|iPad|Nexus 7|Nexus 10|KFAPWI/i.test(navigator.userAgent)
: /Nexus 7|Nexus 10|KFAPWI/i.test(navigator.userAgent)
const to		= function(a,b){
	if(!a||!b)return;
		 if(isString(a)	&& isString(b)){b+a}
	else if(isString(a)	&& isElmt(b)	){b.innerHTML+=a}
	else if(isString(a)	&& isArray(b)	){b.push(a)}
	else if(isNumber(a)	&& isElmt(b)	){b.innerHTML+=''+a}
	else if(isBoolean(a)	&& isElmt(b)	){b.innerHTML+=a.toString()}
	else if(isElmt(a)	&& isString(b)){_elms(b).map(c=>{to(a,c)})}
	else if(isElmt(a)	&& isElmt(b)	){b.appendChild(a);return a}
	else if(isElmt(a)	&& isArray(b)	){b.push(a)}
	else if(isArray(a)	&& isString(b)){b+a.toString()}
	else if(isArray(a)	&& isElmt(b)	){a.map(c=>to(c,b))}
	else if(isArray(a)	&& isArray(b)	){b.push(a);return a}
}
const toNumbers = function(...arg){
	var a = JSON.stringify(arg);
	var nArr = []
	var arr = a
		.replaceAll(/[,\[\]\(\)\s+"]/g, ' ')
		.split(' ')
		.map((c,i)=>{if(!isNaN(parseFloat(c)))nArr.push(parseFloat(c))})
	
    //.trim()
		// arr
		return nArr
 }
class Sesuatu{constructor(type='sesuatu',name=''
,id=new Date().getTime()){
		this.name 	= name?name:'unName';
		this.type 	= type
		this.id 	= id
		Array.from(document.querySelectorAll('[id]')).map(c=>{
			var idNe = c.id.match(/\d/g)
			if(idNe){
				var idNumb = parseFloat(idNe.join(''))
				while(this.id == idNumb){this.id = new Date().getTime()}
			}
		})
		this.diedit	= this.id
		this.data={}
	}
	set(a,b){
		this[a] = b
		return this
	}
};
const PointEvent 	= function(i = 0,e=event){
	;
	var getT = ()=>{
		if(e.type === 'touchend'){
		return e.changedTouches
		}
		else{ return e.touches}
	}
	var x,y
    const isT = event.type.indexOf('touch') >= 0 ;
	return [
		Math.floor(isT ? getT(e)[i].clientX: e.pageX)
		,Math.floor(isT ? getT(e)[i].clientY: e.pageY)
		]
	}

const BoxPoints		= function(p1=[-1,-1],p2=[0,0],nam){
	  if(isElmt(p1)){
		this.elm = p1
		  //var bb = p1.getBoundingClientRect()
		  var bb = p2||p2=='screen'?p1.getBoundingClientRect():p1.getBBox()
			p1 = [bb.x,bb.y]
			p2 = [bb.x+bb.width,bb.y+bb.height]
	  }
	  else if(isArray(p1)&&isElmt(p1[0])){
		  var sc = p2||p2=='screen'?'screen':''
		  return this.fromElms(p1,'screen')
	  }
	  else{
		 if(!p1){p1=[-1,-1]}
		if(!p2){p2=[1,1]}
		  
	  }
	 if(nam){this.name = nam}
	this.p1			= this.pStart	= this.xy1 = p1
	this.p2			= this.pEnd		= this.xy2 = p2
    this.x1 		= this.x 		= p1[0];
    this.y1			= this.y		= p1[1];
    this.x2 		= p2[0]
    this.y2 		= p2[1]
	
	this.a			=  this.angle		= this.p1.angleTo(this.p2)
	
	this.xTrans		= p2[0]-p1[0]
    this.yTrans		= p2[1]-p1[1]
    this.xyTrans	= [this.xTrans,this.yTrans]
	
    this.xMin 		= Math.min(p1[0], p2[0]);
    this.xMax 		= Math.max(p1[0], p2[0]);
    this.xDist		= this.w 	= Math.abs(this.xTrans)
    this.xMid 		= this.xMin + this.xDist / 2;

    this.yMin 		= Math.min(p1[1], p2[1]);
    this.yMax 		= Math.max(p1[1], p2[1]);
	this.yDist		= this.h = Math.abs(this.yTrans)
    this.yMid 		= this.yMin + this.yDist / 2;
	
	this.maxDist	= Math.max(this.xDist,this.yDist);
	this.minDist	= Math.min(this.xDist,this.yDist);
    this.xyDist		= [this.xDist,this.yDist];
    this.pDist		= [this.xDist,this.yDist];
	
    this.d			= Math.sqrt(this.xDist**2+this.yDist**2)
	
    this.pMin 	= [ this.xMin , this.yMin]
    this.pMid 	= [ this.xMid , this.yMid]
	this.pMax	= [ this.xMax , this.yMax];
	this.pTL	= [ this.xMin , this.yMin]
	this.pTM	= [ this.xMid , this.yMin]
	this.pTR	= [ this.xMax , this.yMin]
	this.pML	= [ this.xMin , this.yMid]
	this.pM		= [ this.xMid , this.yMid]
	this.pMR	= [ this.xMax , this.yMid]
	this.pBL	= [ this.xMin , this.yMax]
	this.pBM	= [ this.xMid , this.yMax]
	this.pBR	= [ this.xMax , this.yMax]
	this.pRect =  this.pMin.pRect(this.pMax)
	}
{var bP= BoxPoints.prototype;
	bP.isInBox=function(o){
	return (
		   this.xMin	>	o.xMin
		&& this.yMin	>	o.yMin
		&& this.xMax	<	o.xMax
		&& this.yMax	<	o.yMax
		)
	}
	bP.distToBox=function(o){
	return (
		   this.xMin	>	o.xMin
		&& this.yMin	>	o.yMin
		&& this.xMax	<	o.xMax
		&& this.yMax	<	o.yMax
		)
	}
	bP.fromElms=function(arrElms,sc){
		if(isElmt(arrElms))return arrElms.boxPoints()
		
		let i=0,pMin,pMax,bb;
		for(i=0;i<arrElms.length;i++){
if(i==0){
	bb = new BoxPoints(arrElms[i])
	pMin = bb.pMin
	pMax = bb.pMax
		
}
			bb = new BoxPoints(arrElms[i])
			console.log(bb)
			pMin = pMin.pMin([bb.x,bb.y])
			pMax = pMax.pMax([bb.x+bb.width,bb.y+bb.height])
		}
		return new BoxPoints(pMin,pMax)
	}
	bP.points_pojok=()=>{return [this.pMin,this.pMax]}
	bP.outerSectBoxr=n=>{return new Box_fromTwoPoint(
		this.pMin.transXY([-n,-n]),this.pMax.transXY([n,n]))
		}
	isBigestFromr=n=>{
	  return (o.xMin>this.xMin&&this.xMax>o.xMax&&o.yMin>this.yMin&&this.yMax>o.yMax)
	}
	bP.translate =function(t){
		var pMin  = this.pMin.translate(t)
			,pMax = this.pMax.translate(t)
		return new BoxPoints(pMin,pMax)
	}
	bP.boxOfset =function(d){
		var pMin  = this.pMin.translate([-d,-d])
			,pMax = this.pMax.translate([d,d])
		return new BoxPoints(pMin,pMax)
	}
	bP.createRect =function(idClass){
		return  _("path"+idClass).attr("d","M "+ this.pRect)
	}
}

var A = Array.prototype;{
	
A.getArrIf = function(p,v){
		var  nArr = []
		if(v){this.map((c,i)=>{if(c[p]==v)nArr.push(c)})		
		}
		else if(p){
			this.map(c=>{if(c[p]&&nArr.indexOf(c[p])<0)nArr.push(c[p])
			})
		}
		return nArr
}
A.getById = function(v){
		var  nArr = []
		if(v){this.map((c,i)=>{if(c['id']==v)nArr.push(c)})		
		}
		return nArr[0]
}
A.getBy = function(p,v,f){
	if(f)return f(this.getBy(p,v))
	return this.getArrIf(p,v)[0]
}
A.transX	= function(d=0){
	if(d==[0,0])return this;
	var arrP = this.toSingleArr(),l=arrP.length,i
	,nArr=[];
	for(i=0;i<l;i++){if(i%2==0)nArr.push(arrP[i]+d,arrP[i+1])}
	return nArr.fixed()
}

A.limitX	= function(a,b){
	arr = this.toSingleArr()
	var i,l=arr.length,nArr=[];for(i=0;i<l;i++){
		if(i%2==0&&arr[i]>=a&&arr[i]<=b)nArr.push(arr[i],arr[i+1])}
	return nArr
}
A.limY	= function(a=0,b=window.innerWidth){
	arr = this.toSingleArr()
	var i,l=arr.length,nArr=[];for(i=0;i<l;i++){
		if(i%2==0&&arr[i+1]>a&&arr[i+1]<b)nArr.push(arr[i],arr[i+1])}
	return nArr
}
A.limitY	= function(d=0){
	if(d==[0,0])return this;var i,l=this.length,nArr=[];for(i=0;i<l;i++){
		if(i%2==0&&this[i+1]<d)nArr.push(this[i],this[i+1])}
	return nArr
}
A.transY	= function(d=0){
	if(d==[0,0])return this;
	var i,l=this.length,nArr=[];
	for(i=0;i<l;i++){
		if(i%2==0)nArr.push(this[i],this[i+1]+d)}
	return nArr
}
A.addTo		= function(arr){
	arr.push(this)
	return arr[arr.indexOf(this)]
	}
A.transRot	= function(a=0, d=0){
	if(d==0)return this; var i,l=this.length,nArr=[];
	for(i=0;i<l;i++){
		if(i%2==0){
			p = [
				this[i]+d*Math.cos(a/180*Math.PI)
				,this[i+1]+d*Math.sin(a/180*Math.PI)
				]
			nArr.push(p[0],p[1])
		}
	}
	return nArr.fixed(3);
	}
A.round		= function(){
	var i,l=this.length,nArr=[];
	for(i=0;i<l;i++){
		if(i%2==0)nArr.push(Math.round(this[i]),Math.round(this[i+1]))
			};return nArr;
	}
A.toFixed	= function(d=0){
	var i,l=this.length,nArr=[];
	for(i=0;i<l;i++){
		if(i%2==0)nArr.push(this[i].toFixed(d),this[i+1].toFixed(d))
			};return nArr;
	}
A.rotate 	= function(a=0, or){
	or = or?or: this.pCenter()
	if(a==0)return this
	var i,l=this.length,nArr=[];
	for(i=0;i<l;i++){
		if(i%2==0){
			var  p	= [this[i],this[i+1]]
				 tr = p.pTrans(or)
			var pA = p.angleTo(or)
			var pDist = p.distFrom(or)
			var nP	= or.transRot(180+(a+pA),pDist)
			nArr.push(nP[0],nP[1]);
		}
	};
	return nArr.fixed(3);
}
A.skew 		= function(a=0, or = this.pCenter()){
	if(a==0)return this
	var i,l=this.length,nArr=[];
	for(i=0;i<l;i++){
		if(i%2==0){
			var  p		= [this[i],this[i+1]]
			var pA 		= p.angleTo(origin)
			var pDist 	= p.distTo(origin)
			var nP		= origin.transRot(180+(a+pA),pDist)
			nArr.push(p[0].fixed(3),nP[1].fixed(3));
		}
	};
	return nArr.fixed(3);
}
A.scale		= function(sC=[1,1], or = this.pCenter()){
		
	var i,l=this.length,nArr=[];
	for(i=0;i<l;i++){
		if(i%2==0)nArr.push(
		or[0]+(sC[0]*(this[i]-or[0])).fixed(3),
		or[1]+(sC[1]*(this[i+1]-or[1])).fixed(3)
		)
			}
	return nArr.fixed(3)
}
A.translate	= function(d=[0,0]){var i,l=this.length,nArr=[];
	if(d==[0,0]||l==1)return this;
	for(i=0;i<l;i++){if(i%2==0)nArr.push(
		this[i]+d[0],
		this[i+1]+d[1]
		)}
	return nArr
}
A.angleTo	= function(p,p2){   
    var x = this[0], y = this[1],sudut,sudut1,sudut2;
	sudut = (Math.atan2(p[1] - y, p[0] - x))*180/Math.PI
	if(p2){
		var sudut2 = (Math.atan2(p2[1] - y, p2[0] -x))*180/Math.PI
			 sudut =sudut2-sudut
	}
	if(-180<sudut && sudut<0)sudut +=360
	return sudut>360?sudut%360:sudut
	}
A.angleQd	= function(p,p2){
	a = this.angleTo(p,p2)
	if(0<a&&a<91)return 1
	else if(90<a&&a<181)return 2
	else if(180<a&&a<271)return 3
	else if(271<a&&a<360)return 4
	}
A.angleMirror = function(aM){
	
	var a = p1.distTo(this)
	,b = p2.distTo(this)
	,c = p1.distTo(p2)
	,sudut =Math.acos((b*b+a*a-c*c)/(2*b*a))*180/Math.PI
	if(-180<sudut && sudut<0)sudut +=360
	return sudut>360?sudut%360:sudut
	
	return this.angleTo(p1)+this.angleTo(p2)

}
A.angleFromTo = function(p1,p2){
	
	var a = p1.distTo(this)
	,b = p2.distTo(this)
	,c = p1.distTo(p2)
	,sudut =Math.acos((b*b+a*a-c*c)/(2*b*a))*180/Math.PI
	if(-180<sudut && sudut<0)sudut +=360
	return sudut>360?sudut%360:sudut
	
	return this.angleTo(p1)+this.angleTo(p2)

}

A.pMin	= function(...arg){
	var arr = this.toNumbers()
	var i,l=arr.length,xMin = arr[0],yMin = arr[1]
		for(i=0;i<l;i++){
		if(i%2==0){
			xMin = arr[i]<xMin?arr[i]:xMin
			yMin = arr[i+1]<yMin?arr[i+1]:yMin
		}
		}
		arr = arg.toNumbers()
		l=arr.length
		for(i=0;i<l;i++){
		if(i%2==0){
			xMin = arr[i]<xMin?arr[i]:xMin
		}
		else{
			yMin = arr[i]<yMin?arr[i]:yMin
		}
		}
		return [xMin,yMin]
	
}
A.pMax	= function(...arg){
	var arr = this.toNumbers()
	var i,l=arr.length,xMin = arr[0],yMin = arr[1]
		for(i=0;i<l;i++){
		if(i%2==0){
			xMin = arr[i]>xMin?arr[i]:xMin
			yMin = arr[i+1]>yMin?arr[i+1]:yMin
		}
		}
		arr = arg.toNumbers()
		l=arr.length
		for(i=0;i<l;i++){
		if(i%2==0){
			xMin = arr[i]>xMin?arr[i]:xMin
		}
		else{
			yMin = arr[i]>yMin?arr[i]:yMin
		}
		}
		return [xMin,yMin]
	
}
A.pMid	= function(...arg){
	var pMin = this.pMin(arg)
	var pMax = this.pMax(arg)
	var xDist = pMax[0]-pMin[0]
	var yDist = pMax[1]-pMin[1]
	return [pMin[0]+xDist*.5,pMin[1]+yDist*.5]
}
A.pMidRight	= function(p=this){
	return this.pMid(p).transX(this.xDist(p)/2)
}
A.pTopRight	= function(p=this){
	return this.pMin(p).transX(this.xDist(p))
}
A.pCross = function(p){
    return [p[0] + this.pTrans(p)[0],p[1] + this.pTrans(p)[1]]
	}
A.transTo = function(p){
		if(!d)return this; var i,l=this.length,nArr=[];
		var pTrans = [this.xAll.sort()[0],this.yAll.sort()[1]].pTrans(p)
	for(i=0;i<l;i++){
		if(i%2==0){
			let p = [this[i],this[i+1]].translate(pTrans)
			nArr.push(p[0],p[1])
		}
	}
	return nArr;
	
	}
A.pMirror = function(origin = [0,0]){
    return [
	this.xMirror(origin)[0],this.yMirror(origin)[1]]
	}
A.yMirror = function(p){
    return [this[0]+this.xTrans(p)*2,this[1]]
	}
A.xMirror = function(p){
    return [this[0],this[1]+this.yTrans(p)*2]
	}

A.pCenter = function(){
let xMin = this.xAll.sort()[0]
	,xMax = this.xAll.sort().reverse()[0]
	,yMin = this.yAll.sort()[0]
	,yMax = this.yAll.sort().reverse()[0]
	return [xMin,yMin].pMid([xMax,yMax])
}
A.reverseEach = function(n){
	 arr = this.toSingleArr().reverse()
	 var nArr =[],i,l=arr.length
	for(i=0;i<l;i++){
		if(i%n==0){
			nArr.push(arr.slice(i,i+n).reverse())
			}
		}
	return nArr.toSingleArr()
 }
A.pRight = function(){
	let xMin = this.xAll.sort()[0]
	,xMax = this.xAll.sort().reverse()[0]
	,yMin = this.yAll.sort()[1]
	,yMax = this.yAll.sort().reverse()[0]
	return [xMax,yMin].pMid([xMax,yMax])
}
A.pLeft = function(){
	let xMin = this.xAll.sort()[0]
	,xMax = this.xAll.sort().reverse()[0]
	,yMin = this.yAll.sort()[1]
	,yMax = this.yAll.sort().reverse()[0]
	return [xMin,yMin].pMin([xMin,yMin])
}
A.pTop = function(){
	let xMin = this.xAll.sort()[0]
	,xMax = this.xAll.sort().reverse()[0]
	,yMin = this.yAll.sort()[1]
	,yMax = this.yAll.sort().reverse()[0]
	return [xMin,yMin].pMid([xMax,yMin])
}
A.pDist		= function(p){
    return [Math.abs(p[0] - this[0]),Math.abs(p[1] - this[1])]
	}
A.distTo 	= function(p){return Math.sqrt((p[0]-this[0])**2+(p[1]-this[1])**2)}
A.distToLine = function(...arg){
		arg = arg.toNumbers()
		,x1 = arg[0]
		,y1 = arg[1]
		,x2 = arg[2]
		,y2 = arg[3]
	if(arg.length==4){
    const A = y2 - y1;
    const B = x1 - x2;
    const C = x2 * y1 - x1 * y2;
	return Math.abs(A * this[0] + B * this[1] + C) / Math.sqrt(A * A + B * B);	
	}
}
A.distToPoligon = function(...arg){
		arg = arg.toLine()
		var jarak = this.toLine(arg[0])
		arg.map((c,i)=>{
			jarak = this.distToLine(arg[i])<jarak? this.distToLine(arg[i]):jarak
			})
		return jarak
}

A.distFrom 	= function(p){return Math.sqrt((p[0]-this[0])**2+(p[1]-this[1])**2)}
A.xTrans 	= function(p){return p[0]-this[0]}
A.yTrans 	= function(p){return p[1]-this[1]}
A.pTrans	= function(p){return [this.xTrans(p),this.yTrans(p)]}
A.balikArah =  function(){
	let i = 0,l = this.toNumbers().length,nArr = []
	for(i=0;i<l;i++){
		if(i%2==0){nArr.push(this[l-i-2],this[l-i-1])}
	}
	return nArr
}
A.pHapus = function(iNe,jNe=0){
	this.toNumbers()
	this.splice(iNe*2,jNe*2)
	return this
}

A.xDist	= function(...arg){
	return this.pMax(arg)[0]-this.pMin(arg)[0]
}
A.yDist	= function(...arg){
	return this.pMax(arg)[1]-this.pMin(arg)[1]
}

A.xMid		= function(p){return this.pMid(p)[0]}
A.yMid		= function(p){return this.pMid(p)[1]}

A.maxDist 	= function(p){return Math.max(this.xDist(p),this.yDist(p))}
A.minDist 	= function(p){return Math.min(this.xDist(p),this.yDist(p))}
A.snapX	= function(tol,...xArr){let i,l = xArr.length,nP = this
	for(let i=0; i<l; i++){
		 xC = 	this[0]>=xArr[i]-tol
			&&	this[0]<=xArr[i]+tol
		 if(xC)nP=[xArr[i],nP[1]]
	 }
	 return nP
	}
A.isInRadius= function(r,p){return this.distFrom(p)<=r }
A.to 		= function(b){
	if(isArray(b)){b.push(this);return this}
}
A.pRect = function(p){
	return [
	this.pMin(p)
	,[this.pMax(p)[0],this.pMin(p)[1]]
	,[this.pMax(p)[0],this.pMax(p)[1]]
	,[this.pMin(p)[0],this.pMax(p)[1]]
	,this.pMin(p)
	]
}
A.fixed = function(n=2){
	var i,l=this.length;
	for(i=0;i<l;i++){
		this[i]=this[i].fixed(n)
	}
	return this
}
A.getInArr	= function(key,val){var hasil = []
	this.map(c=>{if(c[key]==val)hasil = c})
	return hasil
	}
A.toNumbers =  function(){
	var a = JSON.stringify(this);
	var nArr = []
	var arr = a
    .replaceAll(/[,\[\]\'\"\(\)]/g, ' ')
    .replaceAll(/\s+/g, ' ')
	.replaceAll(/[-+]?[0-9]*\.?[0-9]+[eE][-+]?[0-9]+/g, "0")
    .trim()
    .split(' ')
	.map((c,i)=>{nArr[i]=Number(c)})
	return nArr
	}
A.toPoints = function(){
	var nArr = []
	a = this.toNumbers();
	a.map((c,i)=>{
		if(i%2==0)nArr.push([a[i],a[i+1]])
			})
	return nArr
}
A.toLine = function(){
	var nArr = []
	a = this.toPoints();
	a.map((c,i)=>{nArr.push([a[i],a[i+1]])})
	return nArr
}
A.toSingleArr =  function(){
	var nArr = []
	let apply=(a)=>{
		if(Array.isArray(a))a.map(c=>apply(c))
		else nArr.push(a)
	}
	this.map(c=>apply(c))
	return nArr
}
Object.defineProperty(A, 'fMin',{
 get: function(){
	 var min = this[0]
	 this.forEach(c=>{
		 if(c<min)min=c
	 })
		 return min
 }
 })
Object.defineProperty(A, 'fMax',{
 get: function(){
	 var max = this[0]
	 this.forEach(c=>{
		 if(c>max)max=c
	 })
	 
		 return max
 }
 })
Object.defineProperty(A, 'xAll',{
 get: function(){
	 arr = this.toNumbers()
	 var nArr =[],i,l=arr.length
	for(i=0;i<l;i++){if(i%2==0)nArr.push(this[i])}
	return nArr
 }
 })
Object.defineProperty(A, 'yAll',{
 get: function(){
	 arr = this.toSingleArr()
	 var nArr =[],i,l=arr.length
	for(i=0;i<l;i++){if(i%2==0)nArr.push(this[i+1])}
	return nArr
 }
 })
}
var N = Number.prototype;{
N.snapTo = function(tol=10){var arg = arguments,l = arg.length
	if(l==1){return this-this%tol}
	for(let i=1;i<l;i++){
		if(this>arg[i]-tol && this <=arg[i]+tol)return arg[i]
	}
	return this
}
N.floor = function(){return Math.floor(this)}
N.fixed = function(n=2){return Number(this.toFixed(n))}
}
const _ 	= function(...arg){
	var splitText = arg[0].replace(/\t+\n+/g,'')
		.split(/(?=[#.\s/[])/g)
	var tagName	= splitText[0][0]=='#'?'div':splitText[0];
	var isSVG =["svg",'defs',"g","clipPath","path", "line","circle", "ellipse", "polygon", "polyline", "svg", "rect", "image", "use", "foreignObject", "text","tspan","animateTransform",
	'linearGradient','stop']
			.includes(tagName)
			;
	var nElm = isSVG? document.createElementNS("http://www.w3.org/2000/svg"	,tagName)
			: document.createElement(tagName.toLowerCase());
	var clasStr=' ',idStr='',attrs={};
	
	for(let i=1;i<splitText.length;i++){
		var isId = splitText[i][0] == '#'
		var isClass = splitText[i][0] == '.'
		var isAttr  = splitText[i][0] == '['
		if(isId)idStr= splitText[i].slice(1)
		if(isClass)clasStr+=' '+splitText[i].slice(1)
		if(isAttr){
			var attrStr = splitText[i].slice(1,-1)
			var attr = attrStr.split('=')
			nElm.setAttribute(attr[0],attr[1])
		}
	};
	if(idStr!=='')nElm.id = idStr
	if(clasStr!==' ')nElm.setAttribute('class',clasStr.trim())
	for(let i=1;i<arg.length;i++){to(arg[i],nElm)};
	return nElm
}
const _elms 	= function(query){
	var hasil=[]
	if(Array.isArray(query)){return query}
	else if(typeof query == 'string'){
	   return Array.from(document.querySelectorAll(query))
	   }
	else if(typeof query == 'object'){
	   if(query.constructor.name
		&&
		query.constructor.name =='HTMLCollection' 
		|| query.constructor.name =='NodeList' 
		){return Array.from(query)}
		else{return [query]}
	}
}
const _id = (id)=>{return document.getElementById(id)}
///////////////////////////////////////////////////////

class dPath{
	constructor(d=''){
		this.d = isElmt(d)?d.attr('d'):isString(d)?d:''
		//d:'M 0 0 H 1 V 1 L 2 2 Q 3 2 3 1 T 4 2 S 4 3 5 2 C 5 3 6 2 6 3 A 1 2 0 0 1 7 3 M 0 0 h 1 v 1 l 1 1 q 1 0 1 -1 t 1 1 s 0 1 1 0 c 0 1 1 0 1 1 a 1 2 0 0 1 1 0 '
		this.koordinate = 'absolute'
		if(isElmt(d))this.elm =d
	}
	/*GETTER*/
	CV(){
		let arrCom = []
		let arrVal = []
		let nArr = this.d.replace(/\s+/g,' ').trim()
			.replace(/\,+/g,' ')
			.split(/(?=[HVMLSTQCAZmlhvcsqtaz])/g)
			.forEach(c=>{
				var  nArrV = []
				arrCom.push(c[0])
				c.slice(1).trim().split(' ').forEach(d=>nArrV.push(Number(d)))
				arrVal.push(nArrV)
				})
		
		return {'arrCom':arrCom,'arrVal':arrVal}
	}
	FP(){
		if(this.d.lastIndexOf('M')>-1)return toNumbers(this.d.slice(this.d.lastIndexOf('M')+1)).slice(-2)
			
	}
	LP(){
		if(this.d.lastIndexOf('M')>-1)return toNumbers(this.d.slice(this.d.lastIndexOf('M')+1)).slice(-2)
	}
	LC(){if(this.d=='')return ''
		return this.d.replaceAll('e','').match(/[a-zA-Z]/g).slice(-1)[0]
	}
	PointAtLength(ke){
	let elm = this.createElm('.temp')
		,titik = elm.getPointAtLength(ke)
		return [titik.x,titik.y]
	}
	//Positioning
	getBBox(){return _('path').attr('d',this.d).getBBox()
	}
	kanannya (a,b){
				let bb = this.getBBox()
				return this.M0(bb.x+bb.width+(a?a:0),bb.y+(b?b:0))
			}
	bawahnya(a,b){
				let bb = path.getBBox()
				return path.M0(bb.x+(a?a:0)	,bb.y+bb.height+(b?b:0))
			}
	segments(){
		this.toAbsolute()
		let nArr = this.d.replace(/\s+/g,' ').trim()
			.replace(/\,+/g,' ')
			.split(/(?=[mM])/g)
		return nArr
	
	}
	/*SETTER*/
	/*MANIPULASI*/
	M0(...arg){arg = arg.toNumbers();
		this.d= ' M '+ arg.join(' ')
		return this.update()}
	M(...arg){arg = arg.toNumbers();
		this.d+= ' M '+ arg.join(' ')
		return this.update()}
	L(...arg){this.d+= ' L '+ arg.toNumbers().join(' ');return this.update()}
	H(...arg){this.d+= ' H '+ arg.toNumbers().join(' ');return this.update()}
	V(...arg){this.d+= ' V '+ arg.toNumbers().join(' ');return this.update()}
	C(...arg){this.d+= ' C '+ arg.toNumbers().join(' ');return this.update()}
	S(...arg){this.d+= ' S '+ arg.toNumbers().join(' ');return this.update()}
	Q(...arg){this.d+= ' Q '+ arg.toNumbers().join(' ');return this.update()}
	T(...arg){this.d+= ' T '+ arg.toNumbers().join(' ');return this.update()}
	A(...arg){this.d+= ' A '+ arg.toNumbers().join(' ');return this.update()}
	Z(){this.d+= ' Z ';return this.update()}
	z(){this.d+= ' z ';return this.update()}
	
	HV(...arg){arg = toNumbers()
		arg.forEach((c,i)=>{
			if(i%2==0)this.H(c)
			else this.V(c)
		})
		;return this.update() 
		}
	VH(...arg){arg = toNumbers()
		arg.forEach((c,i)=>{
			if(i%2==0)this.V(c)
			else this.H(c)
		})
		;return this.update() 
		}
	
	m0(...arg){
		if(['M','m'].includes(this.d)){let LP = this.LP()
		arg[i] += LP[0]
		arg[i+1] += LP[1]
		}
	this.d= ' m '+ arg.toNumbers().join(' ')
	;return this.update()
	}
	m(...arg){this.d+= ' m '+ arg.join(' ')+' ';return this.update()}
	l(...arg){this.d+= ' l '+ arg.join(' ')+' ';return this.update()}
	h(x){this.d+= ' l '+x+' 0 ';return this.update()}
	v(y){this.d+= ' l 0 '+y+' ';return this.update()}
	c(...arg){this.d+= ' c '+ arg.join(' ');return this.update()}
	s(...arg){this.d+= ' s '+ arg.join(' ');return this.update()}
	q(...arg){this.d+= ' q '+ arg.join(' ');return this.update()}
	t(...arg){this.d+= ' t '+ arg.join(' ');return this.update()}
	a(...arg){this.d+= ' a '+ arg.join(' ');return this.update()}
	la(a,d){
		this.l([0,0].transRot(a,d))
		;return this.update()
		}
	hv(...arg){
		toNumbers(arg).forEach((c,i)=>{
			if(i%2==0)this.h(c)
			else this.v(c)
		})
		;return this.update() 
		}
	vh(...arg){
		toNumbers(arg).forEach((c,i)=>{
			if(i%2==0)this.v(c)
			else this.h(c)
		})
		;return this.update() 
		}
	clear(){this.d = ""}
	
	createElm(idClass='',s='#aaa',sW=1,f='rgb(0,0,0,20%)'){
			
		//this.toAbsolute();
		return _('path'+idClass)
			.attr('d',this.d)
			.attr('stroke',s)
			.attr('stroke-width',sW)
			.attr('fill',f)
	}
	createElmEachSegment(toElm){
		let arrSeg = this.d.replace(/\s+/g,' ').trim()
			.replace(/\,+/g,' ')
			.split(/(?=[M])/g)
		,nArr = []
		for(let i = 0;i<arrSeg.length;i++){
			nArr[i] =this.elm?this.elm.cloneNode(true):_('path'+'.break_'+i)
			nArr[i].attr('d',arrSeg[i])
			if(toElm)nArr[i].to(toElm)
				nArr[i] = new dPath(nArr[i])
				
		}
		//this.elm.remove()
		return nArr
	}
	update(){
		if(this.elm)this.elm.attr("d",this.d);
		return this
	}
	toAbsolute() {
    let cv = this.CV(),
        ac = cv.arrCom,
        av = cv.arrVal;
    let LV = [0, 0]; // Last Value (Current Position)
    let res = [];    // Luwih cepet nganggo array tinimbang string concatenation neng loop

    for (let i = 0; i < ac.length; i++) {
        let cmd = ac[i];
        let val = av[i];

        if (['M', 'L', 'Q', 'S', 'T', 'C', 'A'].includes(cmd)) {
            LV = [val[val.length - 2], val[val.length - 1]];
        } 
        else if (cmd === 'H') {
            ac[i] = 'L';
            LV[0] = val[0];
            av[i] = [LV[0], LV[1]]; // Nggawe array anyar
        } 
        else if (cmd === 'V') {
            ac[i] = 'L';
            LV[1] = val[0];
            av[i] = [LV[0], LV[1]];
        } 
        else if (cmd === 'm' || cmd === 'l') {
            // M/m pertama neng path tetep dadi absolute (standar SVG)
            if (cmd === 'm' && i === 0) {
                LV = [val[0], val[1]];
            }
            ac[i] = (cmd === 'm') ? 'M' : 'L';
            for (let j = 0; j < val.length; j += 2) {
                val[j] += LV[0];
                val[j + 1] += LV[1];
                LV = [val[j], val[j + 1]];
            }
        } 
        else if (cmd === 'h') {
            ac[i] = 'L';
            val[0] += LV[0];
            av[i] = [val[0], LV[1]]; // Update dadi pair X, Y
            LV[0] = val[0];
        } 
        else if (cmd === 'v') {
            ac[i] = 'L';
            val[0] += LV[1]; // val[0] neng 'v' kuwi dy
            av[i] = [LV[0], val[0]]; // Update dadi pair X, Y
            LV[1] = val[0];
        } 
        else if (['q', 's'].includes(cmd)) {
            ac[i] = cmd.toUpperCase();
            for (let j = 0; j < val.length; j += 4) {
                val[j] += LV[0];     // x1
                val[j + 1] += LV[1]; // y1
                val[j + 2] += LV[0]; // x
                val[j + 3] += LV[1]; // y
                LV = [val[j + 2], val[j + 3]];
            }
        } 
        else if (cmd === 'c') {
            ac[i] = 'C';
            for (let j = 0; j < val.length; j += 6) {
                val[j] += LV[0]; val[j + 1] += LV[1]; // x1, y1
                val[j + 2] += LV[0]; val[j + 3] += LV[1]; // x2, y2
                val[j + 4] += LV[0]; val[j + 5] += LV[1]; // x, y
                LV = [val[j + 4], val[j + 5]];
            }
        } 
        else if (cmd === 'a') {
            ac[i] = 'A';
            for (let j = 0; j < val.length; j += 7) {
                val[j + 5] += LV[0];
                val[j + 6] += LV[1];
                LV = [val[j + 5], val[j + 6]];
            }
        }
        
        // Simpen dadi siji
        res.push(ac[i] + val.join(' '));
    }
    
    this.d = res.join(' ');
    return this;
}
	toRelative() {
    let cv = this.CV(),
        ac = cv.arrCom,
        av = cv.arrVal;
    let LV = [0, 0]; // Last Value (Absolute Position)
    let res = [];

    for (let i = 0; i < ac.length; i++) {
        let cmd = ac[i];
        let val = av[i];

        // 1. Nek wis cilik (relative), cukup update LV-ne wae nggo patokan titik mburine
        if (['m', 'l', 'q', 's', 't', 'c', 'a'].includes(cmd)) {
            // Jupuk koordinat pungkasan (biasane 2 indeks terakhir)
            let dx, dy;
            if (cmd === 'a') { dx = val[5]; dy = val[6]; }
            else { dx = val[val.length - 2]; dy = val[val.length - 1]; }
            
            LV[0] += dx;
            LV[1] += dy;
        } 
        // 2. Proses MoveTo, LineTo, Smooth Quad (M, L, T)
        else if (['M', 'L', 'T'].includes(cmd)) {
            ac[i] = cmd.toLowerCase();
            for (let j = 0; j < val.length; j += 2) {
                let absX = val[j];
                let absY = val[j + 1];
                val[j] -= LV[0];     // dX
                val[j + 1] -= LV[1]; // dY
                LV = [absX, absY];   // Update patokan dadi absolut
            }
        } 
        // 3. Horizontal (H)
        else if (cmd === 'H') {
            ac[i] = 'h';
            for (let j = 0; j < val.length; j++) {
                let absX = val[j];
                val[j] -= LV[0];
                LV[0] = absX;
            }
        } 
        // 4. Vertical (V)
        else if (cmd === 'V') {
            ac[i] = 'v';
            for (let j = 0; j < val.length; j++) {
                let absY = val[j];
                val[j] -= LV[1];
                LV[1] = absY;
            }
        } 
        // 5. Cubic Bezier (C)
        else if (cmd === 'C') {
            ac[i] = 'c';
            for (let j = 0; j < val.length; j += 6) {
                let absX = val[j + 4], absY = val[j + 5];
                val[j] -= LV[0]; val[j + 1] -= LV[1]; // control 1
                val[j + 2] -= LV[0]; val[j + 3] -= LV[1]; // control 2
                val[j + 4] -= LV[0]; val[j + 5] -= LV[1]; // end point
                LV = [absX, absY];
            }
        }
        // 6. Quad Bezier & Smooth (Q, S)
        else if (['Q', 'S'].includes(cmd)) {
            let step = (cmd === 'Q') ? 4 : 4; // Loro-lorone nganggo kordinat pungkasan neng indeks 2 & 3
            ac[i] = cmd.toLowerCase();
            for (let j = 0; j < val.length; j += step) {
                let absX = val[j + 2], absY = val[j + 3];
                val[j] -= LV[0]; val[j + 1] -= LV[1];
                val[j + 2] -= LV[0]; val[j + 3] -= LV[1];
                LV = [absX, absY];
            }
        }
        // 7. Arc (A)
        else if (cmd === 'A') {
            ac[i] = 'a';
            for (let j = 0; j < val.length; j += 7) {
                let absX = val[j + 5], absY = val[j + 6];
                val[j + 5] -= LV[0];
                val[j + 6] -= LV[1];
                LV = [absX, absY];
            }
        }

        res.push(ac[i] + val.join(' '));
    }

    this.d = res.join(' ');
    return this.update();
}
	toLineAll() {
    this.toAbsolute();
    let cv = this.CV(),
        ac = cv.arrCom,
        av = cv.arrVal;
    this.d = '';

    for (let i = 0; i < ac.length; i++) {
        let arr = [];
        let pPrev = (i > 0) ? av[i - 1].slice(-2) : [0, 0]; // Titik terakhir dari command sebelumnya

        if ('H' == ac[i]) {
            ac[i] = 'L';
            for (let j = 0; j < av[i].length; j++) {
                arr.push(av[i][j], pPrev[1]);
                pPrev = [av[i][j], pPrev[1]];
            }
            av[i] = arr;
        } 
        else if ('V' == ac[i]) {
            ac[i] = 'L';
            for (let j = 0; j < av[i].length; j++) {
                arr.push(pPrev[0], av[i][j]);
                pPrev = [pPrev[0], av[i][j]];
            }
            av[i] = arr;
        } 
        else if ('Q' == ac[i] || 'T' == ac[i]) {
            let isSmooth = (ac[i] == 'T');
            ac[i] = 'L';
            let ctrlP; // Titik kontrol

            for (let j = 0; j < av[i].length; j += (isSmooth ? 2 : 4)) {
                let pStart = pPrev;
                let pEnd;

                if (isSmooth) {
                    // Logika T: Refleksi dari titik kontrol sebelumnya terhadap pStart
                    // Jika command sebelumnya bukan Q atau T, ctrlP = pStart
                    if (i > 0 && (ac[i - 1] == 'Q' || ac[i - 1] == 'T' || ac[i-1] == 'L')) {
                        // Ini penyederhanaan refleksi: P_ctrl_new = 2 * P_start - P_ctrl_old
                        // Namun untuk amannya kita ambil tengah jika Mas Joko malas hitung refleksi kompleks
                        ctrlP = [2 * pStart[0] - (this._lastCtrlQ ? this._lastCtrlQ[0] : pStart[0]), 
                                 2 * pStart[1] - (this._lastCtrlQ ? this._lastCtrlQ[1] : pStart[1])];
                    } else {
                        ctrlP = pStart;
                    }
                    pEnd = [av[i][j], av[i][j + 1]];
                } else {
                    ctrlP = [av[i][j], av[i][j + 1]];
                    pEnd = [av[i][j + 2], av[i][j + 3]];
                }

                this._lastCtrlQ = ctrlP; // Simpan untuk refleksi T berikutnya

                for (let t = 0.05; t <= 1.01; t += 0.05) {
                    let u = 1 - t;
                    let x = u ** 2 * pStart[0] + 2 * u * t * ctrlP[0] + t ** 2 * pEnd[0];
                    let y = u ** 2 * pStart[1] + 2 * u * t * ctrlP[1] + t ** 2 * pEnd[1];
                    arr.push(x, y);
                }
                pPrev = pEnd;
            }
            av[i] = arr;
        } 
        else if ('C' == ac[i] || 'S' == ac[i]) {
            // Gabung logika Cubic dan Smooth Cubic (S)
            let isSmooth = (ac[i] == 'S');
            ac[i] = 'L';
            let step = isSmooth ? 4 : 6;

            for (let j = 0; j < av[i].length; j += step) {
                let p0 = pPrev;
                let p1, p2, p3;

                if (isSmooth) {
                    p1 = [2 * p0[0] - (this._lastCtrlC ? this._lastCtrlC[0] : p0[0]), 
                          2 * p0[1] - (this._lastCtrlC ? this._lastCtrlC[1] : p0[1])];
                    p2 = [av[i][j], av[i][j+1]];
                    p3 = [av[i][j+2], av[i][j+3]];
                } else {
                    p1 = [av[i][j], av[i][j+1]];
                    p2 = [av[i][j+2], av[i][j+3]];
                    p3 = [av[i][j+4], av[i][j+5]];
                }

                this._lastCtrlC = p2; // Simpan control point terakhir untuk refleksi S

                for (let t = 0.05; t <= 1.01; t += 0.05) {
                    let u = 1 - t;
                    let x = u**3 * p0[0] + 3*u**2*t*p1[0] + 3*u*t**2*p2[0] + t**3*p3[0];
                    let y = u**3 * p0[1] + 3*u**2*t*p1[1] + 3*u*t**2*p2[1] + t**3*p3[1];
                    arr.push(x, y);
                }
                pPrev = p3;
            }
            av[i] = arr;
        }
        
        // Update string path d
        this.d += ac[i] + ' ' + av[i].map(v => v.toFixed(3)).join(' ') + ' ';
    }
    return this;
}
	toSimple(){
		let cv = this.CV()
			,ac = cv.arrCom
			,av = cv.arrVal
			,nd = []
		this.d = ''
		for(let i=1; i<ac.length-1;i++){
			if(ac[i]==ac[i-1]){
				nd.push[i]
			}
			else{
				nd.push(ac[i])
				nd.push(av[i])
			}
			this.d+= nd.join(' ')
		}
			
	}
	tandai(rx=5,ry=5,sa=-90,st=270,sm=1,cx=this.LP()[0],cy=this.LP()[1]){
		path.M(	
			cx+rx*Math.cos(sa)
			,cy+ry*Math.sin(sa)
			)
			
		for(let i=sa;i<=st;i+=sm){
			this.L(
			cx+rx*Math.cos(i/180*Math.PI)
			,cy+ry*Math.sin(i/180*Math.PI)
			)
		}	
		return this.M(cx,cy)
	}
	/*transformasi*/
		translate(x=0,y=0){
			if(x==0&&y==0)return this
			this.toAbsolute()
			let cv = this.CV()
				,ac = cv.arrCom
				,av = cv.arrVal
			this.d = ''
			let cP = [0,0]
			for(let i=0; i<ac.length;i++){
				var val0 =  ['Z','z'].includes(ac[i])
				var val1 =  ['H','V','h','v'].includes(ac[i])
				var val2 = ['M','L','S','T','Q','m','l','s','t','q'].includes(ac[i])
				var val6 = ['C','c'].includes(ac[i])
				
					//HVMLSTQCAZmlhvcsqtaz
			for(let j=0; j<av[i].length;j++){
					if(['H'].includes(ac[i])){
						av[i][j]+= x
						}
					else if(['V'].includes(ac[i])){
						av[i][j]+= y
						}
					else if(['M','L','S','T','Q'].includes(ac[i])){
						if(j%2==0){
							av[i][j] 	+= x
							av[i][j+1]	+= y
							}
						}
					else if('C'==ac[i]){
						if(j%6==0){
								av[i][j] 	+= x
								av[i][j+1]	+= y
								av[i][j+2]	+= x
								av[i][j+3]	+= y
								av[i][j+4]	+= x
								av[i][j+5]	+= y
						}
					}
					else if('A'==ac[i]){
							if(j%7==0){
							av[i][j]	+= x
							av[i][j+1]	+= y
							
							av[i][j+5]	+= x
							av[i][j+6]	+= y
						}
					}
			}
			if(val0)this.d+=ac[i]
			else this.d+=ac[i]+av[i].join(' ')+' '
			}		
				return this.update()
		}
	scale(sX,sY,or){if(sX==1&&sY==1)return this
		let cv = this.CV()
			,ac = cv.arrCom
			,av = cv.arrVal
		if(!or)or = av.toNumbers().pCenter()
		this.d = ''
		for(let i=0; i<ac.length;i++){
			var val0 =  ['Z','z'].includes(ac[i])
			var val1 =  ['H','V','h','v'].includes(ac[i])
			var val2 = ['M','L','S','T','Q','m','l','s','t','q'].includes(ac[i])
			var val6 = ['C','c'].includes(ac[i])
			
				//HVMLSTQCAZmlhvcsqtaz
		for(let j=0; j<av[i].length;j++){
				if(val1){
					av[i][j] 	= ac[i]=='H'?or[0] + sX*(av[i][j]-or[0])
								: ac[i]=='V'?or[1] + sY*(av[i][j]-or[1])
								: ac[i]=='h'?sX*av[i][j]
								: ac[i]=='v'?sY*av[i][j]
								:av[i][j]
					}
				else if(val2){
					if(j%2==0){
						av[i][j] 	= sX*av[i][j] 
						av[i][j+1]	= sY*av[i][j+1]
					if(['M','L','S','T','Q'].includes(ac[i])){
						av[i][j] 	+= or[0] -sX*or[0]
						av[i][j+1]	+= or[1] -sY*or[1]
						}
					}
				}
				else if(val6){
					if(j%6==0){
						av[i][j] 	= sX*av[i][j] 
						av[i][j+1]	= sY*av[i][j+1]
						av[i][j+2] 	= sX*av[i][j+2] 
						av[i][j+3]	= sY*av[i][j+3]
						av[i][j+4] 	= sX*av[i][j+4] 
						av[i][j+5]	= sY*av[i][j+5]
						 if('C'==ac[i]){
							av[i][j] 	+= or[0] -sX*or[0]
							av[i][j+1]	+= or[1] -sY*or[1]
							av[i][j+2]	+= or[0] -sX*or[0]
							av[i][j+3]	+= or[1] -sY*or[1]
							av[i][j+4]	+= or[0] -sX*or[0]
							av[i][j+5]	+= or[1] -sY*or[1]
						
					}
				}
				}
				else if('A'==ac[i]){
						if(j%7==0){
						av[i][j]	+= or[0] -sX*or[0]
						av[i][j+1]	+= or[1] -sY*or[1]
						
						av[i][j+5]	+= or[0] -sX*or[0]
						av[i][j+6]	+= or[1] -sY*or[1]
					}
				}
		}
		if(val0)this.d+=ac[i]
		else this.d+=ac[i]+av[i].join(' ')+' '
		}		
			return this.update()
	}
	rotate(angle, or) {
    if (angle % 360 == 0) return this;
    
    let rad = angle * Math.PI / 180;
    let cos = Math.cos(rad);
    let sin = Math.sin(rad);
    
    let cv = this.CV();
    let ac = cv.arrCom;
    let av = cv.arrVal;
    
    // Nek ora ana origin, nggolek titik tengah otomatis
    if (!or) or = av.toNumbers().pCenter(); 
    let cx = or[0];
    let cy = or[1];

    this.d = '';

    for (let i = 0; i < ac.length; i++) {
        let val0 = ['Z', 'z'].includes(ac[i]);
        let val1 = ['H', 'V', 'h', 'v'].includes(ac[i]); // Iki sing mbebayani
        let val2 = ['M', 'L', 'S', 'T', 'Q', 'm', 'l', 's', 't', 'q'].includes(ac[i]);
        let val6 = ['C', 'c'].includes(ac[i]);

        for (let j = 0; j < av[i].length; j++) {
            // --- LOGIKA ROTASI TITIK ---
            // Kanggo M, L, S, T, Q (Pasangan X lan Y)
            if (val2 && j % 2 == 0) {
                let x = av[i][j];
                let y = av[i][j + 1];

                if (['M', 'L', 'S', 'T', 'Q'].includes(ac[i])) {
                    // Rotasi Absolut (nganggo origin)
                    av[i][j]     = cx + (x - cx) * cos - (y - cy) * sin;
                    av[i][j + 1] = cy + (x - cx) * sin + (y - cy) * cos;
                } else {
                    // Rotasi Relatif (m, l, s, t, q) - ora nganggo origin
                    av[i][j]     = x * cos - y * sin;
                    av[i][j + 1] = x * sin + y * cos;
                }
            }
            
            // Kanggo Cubic Bezier (C, c) - 3 pasang titik
            else if (val6 && j % 6 == 0) {
                for (let k = 0; k < 6; k += 2) {
                    let x = av[i][j + k];
                    let y = av[i][j + k + 1];
                    if (ac[i] == 'C') {
                        av[i][j + k]     = cx + (x - cx) * cos - (y - cy) * sin;
                        av[i][j + k + 1] = cy + (x - cx) * sin + (y - cy) * cos;
                    } else {
                        av[i][j + k]     = x * cos - y * sin;
                        av[i][j + k + 1] = x * sin + y * cos;
                    }
                }
            }
            
            // --- MASALAH H lan V ---
            // Nek diputer, H lan V kudu dadi L (LineTo)
            // Amarga garis horizontal nek diputer dadi miring (diagonal)
            // Master luwih becik nganggo 'this.toAbsolute()' dhisik 
            // lan ngowahi H/V dadi L sakdurunge mlebu kene.
        }

        if (val0) this.d += ac[i];
        else this.d += ac[i] + av[i].join(' ') + ' ';
    }
    return this.update();
}
	toZero(){
		this.elm.attr("d",this.d)
		var bb = this.elm.getBBox()
		this.translate(-bb.x,-bb.y)
		return this.update()
	}
	
	/*Bentuk*/
	lDash(dx,dy,dash=[2,10]){
		let LP = this.LP()
			,tPoint = [LP[0]+dx,LP[1]+dy]
			,a 	= LP.angleTo(tPoint)
			,d 	= Math.sqrt((dx)**2+(dy)**2)
			,r	=(dst)=>{return [LP[0]+dst*Math.cos(a/180*PI),LP[1]+dst*Math.sin(a/180*PI)]}
			,i = 0
			,l =  dash.length
		this.M(LP)
		while(i<d){
			this.M(r(i)[0],r(i)[1])
			for(let j=0;j<l;j++){i+=dash[j]
			if(i<d){
				if(j%2==0){this.L(r(i))}
				else this.M(r(i))
			}
		}
	}
		
	return this.L(tPoint)
	}
	d_dhased(dash=[5,10]){
		let allPAth = []
		var nD = ''
		let applyToD = (elm,ds = dash)=>{
			let l = elm.getTotalLength()
				,i = 0
				,p = {x:0,y:0}
		while(i<l){
			if(i%ds[0]==0){
				p = elm.getPointAtLength(i)
				nD 	+= 'M '+ p.x + ' ' + p.y
				p = elm.getPointAtLength(i+ds[0])
				nD 	+= 'L '+p.x+' '+p.y
			}
			i	+= ds[0]+ds[1]
			}
		}
		this.segments().forEach(c=>{
			applyToD(_('path.hapus').attr('d',c))
		})
		this.d = nD
		return this.update()

	}
	l_dhased(dash=[0,0]){
		
		let segments = this.segments()
		this.d = ''
		let applySeg = (sgm)=>{
			let dN = new dPath()
				dN.d = sgm
			let	Nd = new dPath()
				,elmTemp = dN.createElm().to(_elms('svg')[0])
				,lElm =elmTemp.getTotalLength()
				,M0 = (ke)=>{var p = elmTemp.getPointAtLength(0);Nd.M0(p.x,p.y);return Nd}
				,M = (ke)=>{var p = elmTemp.getPointAtLength(ke);Nd.M(p.x,p.y);return Nd}
				,L = (ke)=>{var p = elmTemp.getPointAtLength(ke);Nd.L(p.x,p.y);return Nd}
				,st = 'kosong'
				,isi = 5
				,kosong = 10
				,i = 0
				
			 while(i<lElm){
				 if(i==0)M0()
					M(i)
					L(i+dash[0])
					i+=dash[0]+dash[1]
			}
			this.d+=Nd.d
			elmTemp.remove()
		}
			
			segments.forEach(c=>{applySeg(c)})
			return this.update()
		}

	singleLineText(txt,x,y,tinggiH=10,chs) {
	tinggiH = tinggiH || 1;
	chs = chs==undefined? 2: chs;
	var jarakH=1;
	jarakH = jarakH || 1;
	//upperCase=true	
	//if( upperCase ) txt = txt.toUpperCase();
	var font = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-/=*;:,.<>", "0204284442324335464738181215080307480525452224683316263634174130100106373120004014232713"
	, "4ABCDE/BD 4AFGDHIJKLM/NH/OL 4GFMPQLKJ 4AFGJKO/LM 4EAOR/ST 4AOR/ST 4HUEMPQLR 4ER/US/OA 2VA/ML/CO 4RGFMP 4ENR/AO/NS 4EAO 4ERWOA 4REOA 4UGFMPQLKJU 4SHIJKOA 4DVMPQLKJD 4ENHIJKOA/NS 4JKLQGFMP 4RO/CV 4RGFMPO 6XFO 6XEHVO 4RA/EO 4RTO/TV 4EARO 4YVMPSZaHYE 4OBabUGFVBA 4EMPSZI 4EDVMPSZaDR 4FMPSZbUcB 4MdCKJ/HS 4EMPSZbUefgh 4BabUE/AO 0Ai/QO 3Kj/bklgh 4EWI/AO/WB 1MPO 4Ai/SZTbUE/WT 4Ai/BabUE 4GFMPSZbUG 4mi/SZbUGFA 4nI/EMPSZbU 4Ai/BabU 4IZSocGFA 4GFpC/Ii 4IE/DVMPi 4IVi 4IFaMi 4IA/Ei 4Igm/Vi 4EAIi 3YVMPQLCjY 2QLM/VA 4EABNHIJKLQ 4QLKJIHDGFMP/TH 4DBKF 4ROibUGFMP 4SHDGFMPiCK 4ORV 4NBPMFGDHNiQLKJIH 4UNiQLKJDVM 4pq/US 4US 4RA 4Ii/DB 4US/pq/JP/GQ 1ZN/oMh 1ZN/or 1rMh 0PA 3KSF 3OHA"
	];
	var tdata = [0]
		,w = tdata[0]*tinggiH+jarakH
		,h = tinggiH*8+jarakH
		,pos = 0
		,getindex =code=> {
			code-=65;
			code>25&&(code-=6);
			return code*2;
			}
		,getchardata=(chr)=>{
			var i=font[0].lastIndexOf( chr ),
			data=[];
			if( i>-1 ) {
				var chdata = font[2].split(" ")[i],
				l = 0;
				data[0] = Number(chdata.substr(0,1));
				for( var p=0,pi; p<chdata.length; p++ ) {
					pi = getindex( chdata.charCodeAt(p) );
					if( pi<0 ) data[++l] = [];
					else data[l].push( font[1].substr( pi ,2 ) );
					}
				} else data[0]=chr==" "?3:-1;
				return data;
			};
	for( var i=0, cdata; i<txt.length; i++ ) {
		cdata = getchardata( txt.substr( i, 1 ) );
		if( cdata[0]>=0 ) {
			for(var l=1; l<cdata.length; l++ ) {
				for( var p=0, pt, line=[]; p<cdata[l].length; p++ ) {
					pt = cdata[l][p].split("");
					line.push( { x: Number(pt[0])+pos, y: Number(pt[1]) } );
				}
				tdata.push( line );
			}
			pos += chs+cdata[0];						
		}
	}
	if( pos>0 ) tdata[0] = pos-1;
	
	var textB = tinggiH*8
		,pts = []
		,path = new dPath()
		,add = jarakH/2;
	if( add<0.5 ) add = 0.5;
	
	for( var i=1; i<tdata.length; i++ ) {
		for( var p=0; p<tdata[i].length; p++ ) {
			pts =	[
					tdata[i][p].x*tinggiH+add
					,textB-tdata[i][p].y*tinggiH+add
					]
			if(p==0)path.M(pts)
			else path.L(pts)
		}
		
	}
	path.translate(x-tdata[0]/2,y)
	
	return path
}

	lineText(txt,x,y,tinggiH=10,chs){
		let chr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-/=*;:,.<>"
		,pts = [
		//UPPERCASE
		[[0,10,1,7,3,0],[4,1,7,10],[1,7,5,7]]
		,[[0,10,0,0,5,0,6,1,6,3,5,5,1,5]
			,[5.5, 5.5, 6, 6.5, 6, 9, 5, 10, 1, 10]]
		,[[7,1,6,0,2,0,0,2,0,8,2,10,6,10,7,9]]
		,[[0,0,0,10],[0,0,4,0,6,1,7,4,7,7,6,9,5,10,0.835,10.004]]
		,[[7,0,0,0,0,10,7,10],[0,5,5,5]]
		,[[7,0,0,0,0,10],[0,5,5,5]]
		,[[7,2,6,0,2,0,1,1,0,2,0,8,1,9,2,10,5,10,6,9,7,8,7,5,3,5,3,6]]
		,[[0,0,0,10],[0,5,7,5],[7,0,7,10]]
		,[[0,0,2,0],[1,0,1,10],[0,10,2,10]]
		,[[2,0,6,0,6,6,5,9,4,10,1,10,0,8,0,7]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		//LOWERCASE
		,[[0,10,1,7,3,0],[4,1,7,10],[1,7,5,7]]
		,[[0,10,0,0,5,0,6,1,6,3,5,5,1,5]
			,[5.5, 5.5, 6, 6.5, 6, 9, 5, 10, 1, 10]]
		,[[7,1,6,0,2,0,0,2,0,8,2,10,6,10,7,9]]
		,[[0,0,0,10],[0,0,4,0,6,1,7,4,7,7,6,9,5,10,0.835,10.004]]
		,[[7,0,0,0,0,10,7,10],[0,5,5,5]]
		,[[7,0,0,0,0,10],[0,5,5,5]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		,[[0,0]]
		
		]
		,path = new dPath()
		,pMax = [0,0]
		txt.split('').forEach((c,i)=>{
			var j = chr.indexOf(c)
			pts[j].forEach((d,k)=>{
				path.M(d.transRot(0,(pMax[0]+10)*i))
				})
			pMax = pts[j].toNumbers().pMax()
				
		})
		
		return path
		
	}

	ellipse(r=10,rr,cx=this.LP()[0],cy=this.LP()[1]){
		this.M(	
			 cx	+r*Math.cos(0)
			,cy	+rr*Math.sin(0)
			)
		for(let i=0;i<=360;i+=1){
			this.L(
			cx+r*Math.cos(i/180*Math.PI)
			,cy+rr*Math.sin(i/180*Math.PI)
			)
		}	
		return this
	 }	
	circle(r=10,cx,cy){
		if(!cx)cx =this.LP()[0]
		if(!cy)cx =this.LP()[1]
		return this.ellipse(r,r,cx,cy)
	 }	
	pointsRotate(r,sa,st,cx=this.LP()[0],cy=this.LP()[1]){
		// this.L(	
			 // cx	+r*Math.cos(sa/180*Math.PI)
			// ,cy	+r*Math.sin(sa/180*Math.PI)
			// )
		let max = Math.max(sa,st)
			,min = Math.min(sa,st)
			,l = max-min
		var i = 0
			,pts = []
			
		for(i=min;i<=max;i++){
			pts.push(
			cx+r*Math.cos(i/180*Math.PI)
			,cy+r*Math.sin(i/180*Math.PI)
			)
		}
		if(st<sa)pts = pts.balikArah()
		
		return this.L(pts)
	 }	
	polygon(N=5,r = 100,cx=window.innerWidth/2,cy=window.innerHeight/2,rot = 0){
		var a = 360/N
		path.M0(	
			 cx	+r*Math.cos(0)
			,cy	+r*Math.sin(0)
			)
		for(let i=0;i<=360;i+=a){
			this.L(
			cx+r*Math.cos(i/180*Math.PI)
			,cy+r*Math.sin(i/180*Math.PI)
			)
		}	
		return this.rotate(rot,[cx,cy])
	}
	bintang(N=5,r = 100,rr=r*0.3876521,cx=window.innerWidth/2,cy=window.innerHeight/2,rot = 0){
		var a = 360/N
		path.M0(	
			 cx	+r*Math.cos(0)
			,cy	+r*Math.sin(0)
			)
		for(let i=0;i<=360;i+=a/2){
			if(i%a==0)this.L(
			cx+r*Math.cos(i/180*Math.PI)
			,cy+r*Math.sin(i/180*Math.PI)
			)
			else this.L(
			cx+rr*Math.cos(i/180*Math.PI)
			,cy+rr*Math.sin(i/180*Math.PI)
			)
		}	
		return this.rotate(rot,[cx,cy])
	}
	simRot(N=5,or=window.innerWidth/2,cy=window.innerHeight/2,pathStr){
		let path = new dPath(pathStr)
		var a = 360/N
		this.M0(path.FP())
		this.arc(r,r,0,360,a,cx,cy)
		return this
	}
	polygram(N=5,r = 100,cx=window.innerWidth/2,cy=window.innerHeight/2,rot = 0){
		
	var r2=r*0.3088888
	// this['M0']([cx,cy].transRot(360/N,r))
	if(N%2==1){
	var i=0,a=360/N,genep = N%2==0,aa=rot,cm,rr;
	for(i=0;i<=N*2;i++){
		cm = i==0?'M0':'L'
		aa+= a
		rr = i%2==0?r:r2
		this[cm]([cx,cy].transRot(aa,rr))
	}
	return this.Z()
	}else{
		
	var pts=[],i=0,a=360/N,genep = N%2==0,aa=rot;
	for(i=0;i<=N;i++){
		cm = i==0?'M0':'L'
		aa+= a
		rr = i%2==0?r:r*.5
		this[cm]([cx,cy].transRot(aa,rr))
	}
	aa=rot+a
	for(i=0;i<=N;i++){
		cm = i==0?'M':'L'
		aa+= a
		rr = i%2==0?r:r*0.5
		this[cm]([cx,cy].transRot(aa,rr))
	}
	return this.Z()
	}
	}
	panah(pS,pE){
		s = 30
		path.M0(
		 [pS
	,pE.translate([-s,-s/2]).rotate(pS.angleTo(pE),pE)
	,pE.translate([-s,-s]).rotate(pS.angleTo(pE),pE)
	,pE
	,pE.translate([-s,s]).rotate(pS.angleTo(pE),pE)
	,pE.translate([-s,s/2]).rotate(pS.angleTo(pE),pE)
	,pS
	]	
	)
	}
	gear(N=12,Tt=50,PA=25,rot=0,cx=0,cy=0,as=1){
	 var xy,q0
	,dP		= []
	,Ts 	= Tt*2
	,ref	= Math.abs(N*Ts/Math.PI/2)
	,rDalam	= Math.abs(ref-Ts/4-1)
	,rLuar	= Math.abs(ref+Ts/4)
	,rBase	= Math.abs(ref*Math.cos(PA*Math.PI/180))
	,p		= Math.abs(2*Math.PI/N)
	,d,i
	,smooth = 20
	,tan	= N =>{ var n,s0;
		if(N>rBase){
			n=Math.sqrt(N*N-rBase*rBase)
			s0=Math.atan(n/rBase)
			return n/rBase-s0
		}else{ return 0}
		}
	,d		= tan(ref)
q0	 = [[rDalam, -p]]
q0	 = []
	var K

q0.push([rDalam,-p/2])
for(i=0;i<=smooth;i++){
	K		=[(rLuar-rDalam)*(i)/smooth+rDalam]
	K[1]	= tan(K[0])-d-p/4
	if(K[1]<0)q0.push(K)	
	}
q0.push([rLuar,0])
for(i=0;i<=smooth;i++){
	K		=[(rLuar-rDalam)*(smooth-i)/smooth+rDalam]
	K[1]	=-tan(K[0])+d+p/4
	if(K[1]>0)q0.push(K)
}

q0.push([rDalam,p/2])

var rotG = rot*2*Math.PI/N
var mkGigi	= I =>{
	var i,u,v,dP=[]
	q0.forEach((d,j)=>{
		u=cx+Math.cos(d[1]+I)*d[0]
		v=cy-Math.sin(d[1]+I)*d[0]
		dP.push(u,v)
		})
	return dP
	}
this.M0(cx,cy)
this.circle(as,cx,cy)
for(i=0;i<N;i++){
	if(i==0){
		let c = [cx+rDalam*Math.cos(-rotG+p/180*Math.PI)
				,cy+rDalam*Math.sin(-rotG+p/180*Math.PI)]
		this.circle(Tt/8,c[0],c[1])
	}
	dP.push(mkGigi(rotG+p*i))
	}
this.M(dP)
return this
 }

	rack(N=12,Tt=50,PA=25,rot=0,cx=0,cy=0,as=1){
	var xy,q0
	,dP		= []
	,Ts 	= Tt*2
	,ref	= Math.abs(N*Ts/2/Math.PI)
	,rDalam	= Math.abs(ref-Ts/4)
	,rLuar	= Math.abs(ref+Ts/4)
	,rBase	= Math.abs(ref*Math.cos(PA*Math.PI/180))
	,p		= Math.abs(2*Math.PI/N)
	,d,i,L

dP = []
var S=Ts/4
var f=S-S*Math.tan(PA*Math.PI/180)
for(i=0;i<N;i++){
L=(c[1]+(i+rot)*Ts)
if(i==0){dP.push(c[0]+S*3,L+f-Ts)}
p1 	= [c[0]+S,L+f -Ts]
p2	= [c[0]-S,L-f -Ts/2]
p3	= [c[0]-S,L+f -Ts/2]
p4	= [c[0]+S,L-f]
p5	= [c[0]+S,L+f]
dP.push(p1,p2,p3,p4,p5)
if(i==N-1){dP.push(c[0]+S*3,L+f)}
  }
  console.log(dP)
  return this.M(dP)
}
	isPointInside(p){
    let pt = new DOMPoint(p[0], p[1]);
    if(this.elm)return this.elm.isPointInFill(pt)
	}
	setengahLingkar(...arg){
		
	}
	elmKotak(idClass='',w,h,x=0,y=0){return new dPath().M0(x,y).hv(w,h,-w,-h).createElm(idClass)}
	rect(...arg){
	arg = toNumbers(...arg)
	let x = arg[0]
		,y= arg[1]
		,w= arg[2]
		,h= arg[3]
		,rtl= arg[4]?arg[4]:0
		,rtr= arg[5]?arg[5]:0
		,rbr= arg[6]?arg[6]:0
		,rbl= arg[7]?arg[7]:0
	if(rtl==0&&rtr==0&&rbl==0&&rbr==0){this.M0(x,y);this.hv(w,h,-w,-h);return this}
	else{
	this.M0(x,y+rtl)
		.pointsRotate(rtl,180,269,x+rtl,y+rtl)
		.pointsRotate(rtr,-90,0,x+w-rtr,y+rtr)
		.pointsRotate(rbr,0,90,x+w-rbr,y+h-rbr)
		.pointsRotate(rbl,90,180,x+rbl,y+h-rbl)
		.z()
	}
	return this  
	}
	rectCross(...arg){
	arg = toNumbers(...arg)
	let x = arg[0]
		,y= arg[1]
		,w= arg[2]
		,h= arg[3]
		,s= arg[4]? arg[4] : 10
	this.M0(x,y+h-s).vh(s,s)
		.m(w-s*2,0).hv(s,-s)
		.m(0,-(h-s)).vh(-s,-s)
		.m(-(w-s*2),0).hv(-s,s)
	return this  
	}
	lineNumb(character,h){
		let numb = {
'0':'M4 0 0 -4 0 -21 4 -25 9 -25 M11 -25 15 -21 15 -4 11 0 6 0'
,'1':'M0 0 15 0 M 8 0 8 -25 2 -20'
,'2':'M0 -20 4 -25 11 -25 15 -21 15 -15 11 -10 0 -5 0 0 15 0 15 -2 '
,'3':'M 0 -21 4 -25 11 -25 15 -21 15 -16 12 -14 8 -13 M 8 -13 12 -13 15 -10 15 -4 11 0 4 0 0 -4'
,'4':'M 15 -6 L 0 -6 L 0 -11 L 10 -25 M 12 -20 L 12 0'
,'5':'M14 -25 0 -25 0 -16 4 -18 11 -18 15 -14 15 -4 11 0 4 0 0 -4'
,'6':'M14 -25 4 -25 0 -21 0 -4 4 0 11 0 15 -4 15 -11 12 -15 5 -15 2 -11'
,'7':'M0 -23 1 -25 15 -25 1 0'
,'8':'M3 -14 0 -17 0 -21 4 -25 11 -25 15 -21 15 -17 11 -14 4 -12 0 -9 0 -4 4 0 11 0 15 -4 15 -9 12 -12'
,'9':'M12 -12 4 -12 0 -15 0 -20 4 -25 11 -25 15 -21 15 -7 10 0 3 0'
,'+':'M8 -20 8 -5M1 -13 15 -13'
,'-':'M1 -13 15-13'
,' ':'M15 0 '
,'.':'M5 -5 5 0'
,',':'M4 -4 4 0 1 3'
,':':'M5 -8 10 -8 M5 -15 10 -15'
,'=':'M2 -10 14 -10 M2 -15 14 -15'
,'S':'M0 -4 4 0 11 0 15 -4 15 -9 11 -13 4 -13 0 -17 0 -22 4 -25 11 -25 15 -21'
,'P':'M0 0 0 -25 11 -25 15 -21 15 -13 11 -9 3 -9'
,'p':'M0 15 0 -15 11 -15 15 -11 15 -4 11 0 5 0'
,'o':'M4 0 0 -4 0 -11 4 -15 9 -15 M11 -15 15 -11 15 -4 11 0 6 0'
,'w':'M0 -15 4 0 7 -10 11 0 15 -15'
,'e':'M2 -7 15 -7 15 -11 11 -15 4 -15 0 -10 0 -4 4 0 12 0'
,'r':'M0 0 0 -15 0 -11 5 -15 11 -15 15 -11'
,'d':'M15 -22 15 0 15 -4 11 0 4 0 0 -4 0 -11 5 -15 10 -15 13 -12'
		}
		this.d += numb[character]
	return this
	}
	segi3siku(p1,p2){
	this.M0(p1)
	.L(p1.translate([p1.xTrans(p2),0]))
	.L(p2)
	.L(p1)	
	return this
	}
	segi3samakaki(p1,p2){
	this.M0(p1).L(p2).L(p2.yMirror(p1)).L(p1)
	return this
	}
	segi3samasisi(p1,p2){
	this.M0(p1).L(p2)
		this.L(	
			p1[0]+r*Math.cos(60/180*Math.PI)
			,p2[1]+r*Math.sin(60/180*Math.PI)
		)
		return this
	}

}

///////////////////////////////////////////////////////
//HTML MANIPULATION
const upDateAppdata = function() {
    if (window.AppInventor) {
        Ai2.storeDB(appData.systemName, appData)
    } else if (localStorage) {
        localStorage.setItem(appData.systemName, JSON.stringify(appData))
    }
}
const HTMLremove 	= function(a,dur) {
 if(!dur)_elms(a).map(c=>c.remove())
 else{setTimeout(()=>{_elms(a).map(c=>c.remove())},dur*1000)}
}
const HTMLedit 	= function(a) {
  var nArr = _elms(a)
  nArr.map((c,i)=>{
	 c.innerHTML = '';
  if(arguments.length>1){
		var j;for (j=1;j<arguments.length;j++){
		 if(c.tagName=='INPUT'){ 
			 if(c.attr('type')=='number'||c.attr('type')=='range'){
				  c.value = parseFloat(arguments[j])
			 }
			 else c.value = arguments[j]
			 }
		 else {HTMLadd(nArr[i],arguments[j])}
			}}
	});
  if (nArr.length == 1) return nArr[0]
	
}
const HTMLadd 	= function(a,b) {
	var nArr = _elms(a)
	nArr.map(c=>to(b,c))
 if(nArr.length==1)return nArr[0]
}
const HTMLaddClass  = function(a,cName,cnameRemov) {
	var nArr =  _elms(a)
		,arrName = cName.split(' ')
		if(cnameRemov)HTMLremoveClass(a,cnameRemov)
	nArr.map(c=>{
		arrName.map(d=>{
		c.classList.add(d)
			})
		})
 if(nArr.length==1)return nArr[0]
}
const HTMLremoveClass  = function(a,cName='',cnameRemov) {
	var nArr =  _elms(a)
		nClass = cName.replace(/[\.]+/g, ' ').trim().split(' ')
		
		
nArr.map(c=>{
	nClass.map(d=>{if(d!==''||d!==' ')c.classList.remove(d.trim())})
}
	)
 if(cnameRemov)HTMLaddClass(a,cnameRemov)
 if(nArr.length==1)return nArr[0]
}
const HTMLtoggleClass  = function(a,cName,cuName) {
	nArr = _elms(a)
	nArr .map(c=>{
		if(c.classList.contains(cName))c.classList.remove(cName)
		else c.classList.add(cName)
	})
	if(nArr.length==1)return nArr[0]
}
const HTMLattr = function(a, b, c) {
  var arr = _elms(a),arrGet =[];i = 0,
  numb=x=>{
    if(isNumber(x)){return parseFloat(x)}
    else{return x}
	};
for (i = 0; i < arr.length; i++){
  if(c == ''||c == ' '||c){
   if (isArray(b)){
	   b.map((p,j)=>{
		   if (c == '' || c == ' '||c == null){arr[i].removeAttribute(b[j])}
		   else if(isArray(c)){arr[i].setAttribute(b[j],c[j])}
		   else {arr[i].setAttribute(b[j],c)}
		  })
   }
   else if(b.constructor.name == 'Object'){
	   for(let an in b){
		if(b[an] === "" || b[an] === null){
        arr[i].removeAttribute(an);
		} else {
        arr[i].setAttribute(an, b[an]);
		}
		}
	 }
   else{
		if(c == '' || c == ' '||c == null){arr[i].removeAttribute(b)}
		else if(isArray(c)){
			arr[i].setAttribute(b,c[i])
		}
		else{
		if(b=='d'){//Magic Path SVG
			if(Array.isArray(c))c= c.join(' ')
			//c = 'M'+c
			c = c.replace(/MM/g, 'M')
			.replace("M M",'M')
			.replaceAll(" Z0",'Z')
			.replace("Z 0",'Z')
			arr[i].setAttribute(b, c)
			}
		else arr[i].setAttribute(b, c)
			}
		}
   if(arr.length == 1){return arr[0]}
   
  }
  else{//berubah menjadi Getter tanpa parameter c
	if(b.constructor.name == 'Object'){
	for(an in b){arr[i].setAttribute(an,b[an])}
	 if(arr.length == 1){return arr[0]}	  
	 }
    else if (isArray(b)){
		b.map(
       (p,j)=>{
          arrGet.push(numb(arr[i].getAttribute(b[j])))
       })
   }
    else{ 
	  if(arr.length > 1 ){arrGet.push(arr[i].getAttribute(b))}
	  if(arr.length == 1 ){arrGet = arr[i].getAttribute(b)}
	   }
	return arrGet
  }
  if(arr.length==1)return arr[0]
}
}
const HTMLshowHide = function(a,b) {
	var nArr =  _elms(a)
nArr.map(c=>{
	if(c.style.display=='none'||c.matches('.hide'))HTMLshow(c)
	else HTMLhide(c)
	})

 if(nArr.length==1)return nArr[0]
 }
const HTMLshow = function(a,b) {
		var nArr =  _elms(a)
		if(b)HTMLhide(b)
nArr.map(c=>{
	c._style('display',c.is('.flexGrow,.flexRow,.flexCol')?'flex':'block')
	if(c.is('.hide'))c.removeClass('hide')
})

 if(nArr.length==1)return nArr[0]
}
const HTMLhide = function(a,b) {
	var nArr= _elms(a)
nArr.map(c=>{
	c._style('display','none')
	if(c.matches('.hide'))HTMLremoveClass(c,'hide')
})
 if(b)HTMLshow(b)
 if(nArr.length==1)return nArr[0]
 }
const HTMLclose = function(a,b) {
	var nArr= _elms(a);
nArr.map(c=>{
	if(c.is('.overlay')){
		let xNya =	c.is('.topRight')?'right':
					c.is('.topLeft')?'left':
					c.is('.top')?'top':
					c.is('.bottom')?'bottom':
					c.is('.left')?'left':
					''
		let d = c.firstChild._style('opacity',1)
			c._style('transition','0.4s')
			c._style('opacity','0')
			c._style(xNya,'-100%')
			setTimeout(()=>{
				c.hide().attr('style',' ')
				d._style('opacity',1)
			},400)
	}
	else c._style('display','none')
	if(c.matches('.hide'))HTMLremoveClass(c,'hide')
})
 if(b)HTMLshow(b)
 if(nArr.length==1)return nArr[0]
 }
const HTMLchange = function(a,b){
	var nArr = _elms(a)
	nArr.map(
	c=>{
		c.parentElement.insertBefore(b.cloneNode(true),c)
		c.remove()
	})
 if(nArr.length==1)return nArr[0]
}
const HTML_style = function(a, b, c) {
	var nArr = _elms(a)
	,styleGawan
	  ,apStyl =(elm,p,v)=>{
		  if(v == '')return elm.style[p]=null
		  return elm.style.setProperty(p, v)
		  }
	 
	if(isString(b)&&!c){
		nArr.map((d,e)=>{
			styleGawan = d.attr('style')?d.attr('style'):'';
			if(styleGawan.slice(-1)!=';')styleGawan+=';'
			if(d.attr('style'))d.attr('style',styleGawan+b)
			else d.attr('style',b)
			})
		return 
	}
	else if(isString(b)){
		if(isString(c)){nArr.map((d,e)=>{apStyl(d,b,c)})}
		else if(typeof c == 'undefined'){
			var objBar = b.replace(/[\t]+/g, '').replace(/[\t]+/g, '').match(/[^;]+/g)
				objBar.map(el=>{
					var propVal = el.match(/[^:]+/g)
					nArr.map((d,e)=>{apStyl(d,propVal[0],propVal[1])})
					})
			}
	}
	else if(typeof b == 'object'){
		if(isArray(b)){
		b.map((f,g)=>{nArr.map(d=>{apStyl(d,b[g],c[g])})})
		}
		else{var c = Object.values(b),b = Object.keys(b)
		 nArr.map((d,e)=>{b.map((f,g)=>{apStyl(d,b[g],c[g])})})
		}
	 }
}
var El = Element.prototype;{
El.is = function(a){return this.matches(a)}
El.attr = function(a,b){return HTMLattr(this,a,b)}
El.boxPoints = function(){return new BoxPoints(this)}
El.to = function(a,i){
	if(isNumber(i)&&i<a.childNodes.length){
		if(i==0)a.insertBefore(this,a.firstChild)
		else a.insertBefore(this,a.childNodes[i])
	}
	else if(isElmt(i)){a.insertBefore(this,i)}
	else a.appendChild(this)
	return this
}

El.setLaserStyle =  function(speed=1000,power=10){
	this.attr('laser-power',power)
		.attr('laser-speed',speed)
		return this
	}
El.addClass =  function(a,b){HTMLaddClass(this,a,b);return this}
El.removeClass =  function(a,b){HTMLremoveClass(this,a,b);return this}
El.toggleClass =  function(a,b){HTMLtoggleClass(this,a,b);return this}
El.hide =  function(a){HTMLhide(this,a);return this}
El.edit =  function(...a){HTMLedit(this,a);return this}
El.show =  function(a){HTMLshow(this,a);return this}
El.showHide =  function(a){HTMLshowHide(this,a);return this}
El.closeElm =  function(){
	let sC = 1
	let nutup = ()=>{
		if(sC<=0.4)return this.remove()
		sC-=0.02
		this._style('transform','scale('+sC+')')
		this._style('opacity',sC)
		
		setTimeout(nutup,1)
		}
	nutup()
	}
El.add =  function(...a){HTMLadd(this,a);return this}
El._ =  function(a){_(a).to(this);return this}
El._style = function(a,b){HTML_style(this,a,b);return this}
El._elms =  function(a){return  Array.from(this.querySelectorAll(a))}
El.arrPath = function(){
	let arrComd=[], arrVal=[], arrPath=[],d=''
		let sP=null
		let cP=null
		d = this.attr('d')? this.attr('d'):''
		arrPath=d.replace(/\s+/g,' ').trim()
			.replace(/\,+/g,' ')
			.split(/(?=[HVMLSTQCAZmlhvcsqtaz])/g)
		d=''
		arrPath.forEach((c,i)=>{
				arrComd.push(c[0])
				arrVal[i]=[]
				arrVal[i] = c.slice(1)
					.replaceAll(' -',' -')
					.replaceAll('-',' -')
					.split(' ')
					.toNumbers()
				cP = arrVal[i].slice(-2)
				if('M'==c[0])sP=arrVal[i].slice(0,2)
				if('Z'==c[0]){
					arrComd[i]='L';arrVal[i]=sP
					arrPath[i]='L'+sP.join(' ')
					
					}
		d+= arrPath[i]
			})
	return {arrPath,arrComd,arrVal,d}
}
const isMobile 	= /Android|Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent);
const isTablet = isMobile ? /Tablet|iPad|Nexus 7|Nexus 10|KFAPWI/i.test(navigator.userAgent)
: /Nexus 7|Nexus 10|KFAPWI/i.test(navigator.userAgent)
El.on = function(a, fn) {
var b = a.toLowerCase()
b = b == 'mousedown' 	&& isMobile		? 'touchstart'
  : b == 'mousemove' 	&& isMobile 	? 'touchmove'
  : b == 'mouseup' 		&& isMobile 	? 'touchend'
  : b == 'touchstart' 	&& !isMobile 	? 'mousedown'
  : b == 'touchmove' 	&& !isMobile 	? 'mousemove'
  : b == 'touchend' 	&& !isMobile 	? 'mouseup'   
  :	b;
  if(typeof fn== 'string'){this.attr('on'+b,fn)}
  else if(isFunction(fn)){this.addEventListener(b,fn)}
  return this
}
El.removeOn = function(a, fn) {
var b = a.toLowerCase()
b = b == 'mousedown' 	&& isMobile		? 'touchstart'
  : b == 'mousemove' 	&& isMobile 	? 'touchmove'
  : b == 'mouseup' 		&& isMobile 	? 'touchend'
  : b == 'touchstart' 	&& !isMobile 	? 'mousedown'
  : b == 'touchmove' 	&& !isMobile 	? 'mousemove'
  : b == 'touchend' 	&& !isMobile 	? 'mouseup'   
  :	b;
  if(typeof fn== 'string'){
	  this.removeAttribute('on'+b)}
  else if(isFunction(fn)){this.removeEventListener(b,fn)}
  return this
}

El.transSet =function(t= [1,1,0,0,0,0,0],o){
	var tO = [1,1,0,0,0,0,0]
		let dt = this.attr('data-transform')?toNumbers(this.attr('data-transform'))	: [1,1,0,0,0,0,0];
		if(t[0]==Infinity)t[0]=1
	var a = ''
		a +='scale('		+ t[0] +' ' + t[1] +') '
		  + 'translate('	+ t[2] +' ' + t[3] +') '
		  + 'rotate('		+ Math.floor(t[4]) +') '
		  +	'skewX('		+ t[5] +') '
		  + 'skewY('		+ t[6] +') '
		 if(this.nodeType==3){return}//textNode noElment
		 else if(this.is('g')){
			 this._elms('*').forEach(c=>{c.transSet(t,o)})
		 }
		 else{
			 this.attr("transform",a)
			 this.attr("vector-effect","non-scaling-stroke")
			 this.attr("transform-origin",o?o.join(' '):"center")}
	return this
}
El.transApply =function(or){
	let t =  this.attr('transform')?this.attr('transform')
				.replace(/\(/g,'').replace(/\) /g,'').replace(/\)/g,'')
			.replace(/scale|translate|rotate|skewX|skewY/g,' ')
			.replace(/\s\s/g,' ').trim()
			.split(' ').toNumbers()
			:[1,1,0,0,0,0,0]
		if(!this.attr("transform-origin"))this.attr("transform-origin",'center')
			if(this.attr("transform-origin") =='center'){
				or = this.boxPoints().c}
			else{
				or = []
				this.attr("transform-origin").split(" ").map(c=>or.push(Number(c)))
		}
		let dt = [1,1,0,0,0,0,0]
		if(this.attr('data-transform')){
			dt = this.attr('data-transform').split(' ')
			for(let i=0; i<dt.length; i++){
				dt[i] = Number(dt[i])
			}
		}
		dt[0]/=t[0]
		dt[1]/=t[1]
		dt[2]-=t[2]
		dt[3]-=t[3]
		dt[4]-=t[4]
		dt[5]+=t[5]
		dt[6]+=t[6]
		
		dt[4] = dt[4]%360
		this.attr('data-transform',dt.join(' '))
		
	if(this.tagName=='path'){
			path = new dPath(this)
			.translate(t[2],t[3])
			.scale(t[0],t[1],or)
			.rotate(t[4],or)
			this.attr('transform','scale(1 1) translate(0 0) rotate(0) skewX(0) skewY(0)')
		}
	else if(this.is('circle')||this.is('ellipse')){
			this.attr('transform','scale(1 1) translate(0 0) rotate(0) skewX(0) skewY(0)')
			var c = [Number(this.attr('cx')),Number(this.attr('cy'))].scale([t[0],t[1]],or).rotate(t[4],or).translate([t[2],t[3]])
			this.attr('cx',c[0])
			this.attr('cy',c[1])
			if(this.is('circle')){
				this.attr('r',Number(this.attr('r'))*t[0])
			}
			else if(this.is('ellipse')){
				this.attr('rx',Number(this.attr('rx'))*t[0])
				this.attr('ry',Number(this.attr('ry'))*t[1])
			}
		}
	else if(this.tagName=='g'){
		 nArr = Array.from(this.children)
			if(nArr.length>0)nArr.forEach(c=>c.transApply())
		}
	else if(this.tagName == 'text'){
		if(this.attr('text-anchor')){}
		
		p = [parseFloat(this.attr('x'))
			,parseFloat(this.attr('y'))
			]
			.scale([t[0],t[1]],or)
			.translate([t[2],t[3]])
		h = parseFloat(this.attr('font-size'))*t[1]
		this.attr('x',p[0])
		this.attr('y',p[1])
		this.attr('font-size',h)
	}
	else if(this.tagName == 'rect'){
			nP = [this.attr('x'),this.attr('y')]
			.translate([-or[0],-or[1]])
			.translate([t[2],t[3]])
				  this.attr(['x','y'],nP)
			nP =[this.attr('width'),this.attr('height')]
				  .scale([t[0],t[1]],[0,0])
				 this.attr(['width','height'],nP)
			
			
			//.scale([t[0],t[1]],or)
			//.translate([t[2],t[3]])
			//.rotate(t[4],or)
			
		}
	else if(this.is('line')){
			var arrV = [this.attr('x1')
			,this.attr('y1')
			,this.attr('x2')
			,this.attr('y2')
			].toSingleArr()
			.scale([t[0],t[1]],or)
			.translate([t[2],t[3]])
			.rotate(t[4],or)
			//.skew(t[4],or)
			
			this.attr('x1',arrV[0])
			.attr('y1',arrV[1])
			.attr('x2',arrV[2])
			.attr('y2',arrV[3])						
		}
	else if(this.is('polyline')||this.is('polygon')){
			or = or?or
			   : this.attr("transform-origin") =='center'
			   ? this.boxPoints.c
			   : this.boxPoints.c
			   
			if(this.attr('points')){
				var pts = this.attr('points').replace(/\s+/g, ' ')
						.replace(/[\,\n\t\[\]\(\)\"\\]/g, ' ')
						.trim()
						.split(' ')
					pts.forEach((c,i)=>pts[i] = Number(c))
					pts = pts.scale([t[0],t[1]],or)
						.translate([t[2],t[3]])
						.rotate(t[4],or)
						.skew(t[4],or)
				this.attr('points',pts.join(' '))
			}
			
			this.attr('transform','scale(1 1) translate(0 0) rotate(0) skewX(0) skewY(0)')
		}
	else return this
	}
El.translate =function(x=0,y=0){
	this.transSet([1,1,x,y,0,0,0]);this.transApply()
	}
	
El.scale =function(sX,sY,or){this.transSet([sX,sY,0,0,0,0,0],or);this.transApply()}
El.rotate =function(a,or){this.transSet([1,1,0,0,a,0,0],or);this.transApply()}
El.skew =function(dx,dy,or){this.transSet([1,1,0,0,0,x,y],or);this.transApply()}
El.toRelative = function(){
	this.attr('d',new dPath(this).toRelative().d)
	return this
}
El.toSimple= function(){
	this.attr('d',new dPath(this).toSimple().d)
	return this
}
El.toGcode =function(pLaser,kLaser){
		pLaser *= 10
	  var gCode = ''
	  var LG = 0,x,y;
	  var p1 = []
	  var pF = []
	  var pL = []
	  var arrC = []
	 if(this.is('path')){
		let path = new dPath(this).CV()
		ac = path.arrCom
		av = path.arrVal
				
		for(let i=0;i<ac.length;i++){
			if(['M','L','S','Q','T'].includes(ac[i]))
			if('M'==ac[i]){
				if(i!==0){
					gCode+='M5 S0'
				}
				gCode+= 'G0 X' + av[i][0] + ' Y'+ av[i][1] +'\n'
				gCode+= 'M3 S'+pLaser+'\n'
				gCode+= 'G1 F'+kLaser+'\n'
				}
				for(let j=0;j<av[i].length; j++){
					if(ac[i] != 'Z'){
					if(j%2==0){
						gCode	+= 'G1 X'+av[i][j]
								+  ' Y'+av[i][j+1] +'\n'
					}
					}
				}
		}
		gCode+='M5 S0'
		return gCode
}
	 if(this.is('g')){
		 this._elms('path').forEach(c=>{
			 gCode += c.toGcode()
		 })
		return gCode
	 }
	 }
El.zoomAbleSVG =function(smooth=100){
	const svgImage = this
	const svgContainer = svgImage.parentElement

var viewBox = {x:0,y:0,w:svgImage.clientWidth,h:svgImage.clientHeight};
svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
const svgSize = {w:svgImage.clientWidth,h:svgImage.clientHeight};
var isPanning = false;
var startPoint = {x:0,y:0};
var endPoint = {x:0,y:0};;
var scale = 1;
	svgImage.bottomControl = _("div").to(svgContainer)
	._style(`
    position: Fixed;
    bottom: 0;
    right: 0;
    border: 2px solid grey;
    padding: 4px 8px;
    border-radius: 4px;
    overflow: hidden;
    background: rgb(0, 0, 0, 70%);
    display: flex;
    color: rgb(41 245 7);
    width: `+svgSize.w+`px;
	min-height:24px
	`)

   svgImage.zoomCurrentScale = Math.round(scale*100)
const indikAtor = _('div#indikatorZoom',"zoom:"+Math.round(scale*100)+' %')._style("float","right").to(svgImage.bottomControl,2).on("click",
	function(e){
	svgImage.zoom(100)
	svgImage.pan([0,0])
	})
	._style(`
    position: Absolute;
    bottom: 0;
    right: 0;
	`)

//const inputRangeZoom = _( "input#inputRangeZoom[type=range][min=0.1]").to(svgContainer)
svgImage.zoom =(perCent=1 ,x=0,y=0,VB = viewBox,sc = scale)=>{
	if (perCent == 100){
		svgSize.w = svgImage.clientWidth
		svgSize.h = svgImage.clientHeight
	}
   viewBox.w = svgSize.w*100/perCent
   viewBox.h = svgSize.h*100/perCent
   viewBox.x -= x
   viewBox.y -= y
   scale = svgSize.w/viewBox.w;
   svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
 
   indikAtor.edit("zoom:"+  Math.round(scale*100)+' %')
   
   svgImage.zoomCurrentScale = Math.round(scale*100)
  }
svgImage.zoomOut=(step=1)=>{
	if( viewBox.w - viewBox.x < 2) return alert("maksimal")
   viewBox.w -=step*2
   viewBox.h -=step*2
   viewBox.x +=step/2
   viewBox.y +=step
   scale = svgSize.w/viewBox.w;
   svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
 
   indikAtor.edit("zoom:"+  Math.round(scale*100)+' %')
   svgImage.zoomCurrentScale = Math.round(scale*100)
}
svgContainer.onmousewheel = function(e) {
	HTMLhide("#labelDinamis")
   e.preventDefault();
   var dw = viewBox.w * Math.sign(e.deltaY)*-0.1;
   var dh = viewBox.h * Math.sign(e.deltaY)*-0.1;
   
   
   viewBox.x += e.x * dw/svgSize.w;
   viewBox.y += e.y * dw/svgSize.h;
   
   viewBox.w -= dw	
   viewBox.h -= dh
   scale = svgSize.w/viewBox.w;
   
   svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
   indikAtor.edit("zoom:"+Math.round(scale*100)+' %')
   svgImage.zoomCurrentScale = Math.round(scale*100)
}
svgContainer.onmousedown = function(e){
   isPanning = true;
   startPoint = {x:e.x,y:e.y};   
}
svgContainer.onmousemove = function(e){
   if (isPanning){
	HTMLhide("#labelDinamis")
  endPoint = {x:e.x,y:e.y};
  var dx = (startPoint.x - endPoint.x)/scale;
  var dy = (startPoint.y - endPoint.y)/scale;
  var movedViewBox = {x:viewBox.x+dx,y:viewBox.y+dy,w:viewBox.w,h:viewBox.h};
  svgImage.setAttribute('viewBox', `${movedViewBox.x} ${movedViewBox.y} ${movedViewBox.w} ${movedViewBox.h}`);
   }
}
svgContainer.onmouseup = function(e){

   if (isPanning){ 
  endPoint = {x:e.x,y:e.y};
  var dx = (startPoint.x - endPoint.x)/scale;
  var dy = (startPoint.y - endPoint.y)/scale;
  viewBox = {x:viewBox.x+dx,y:viewBox.y+dy,w:viewBox.w,h:viewBox.h};
  svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
  isPanning = false;
   }
}
svgContainer.onmouseleave = function(e){
 isPanning = false;
}

svgImage.pan =(x=5,y=5)=>{
  VB =viewBox
  var dx = x/scale;
  var dy = y/scale;
  viewBox.x -= dx
  viewBox.y -= dy
  svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
  }

svgImage.zoomTo =(elm)=>{
   var bb = elm.getBBox(),perCent = Math.min(svgSize.w *100/bb.width,svgSize.h *100/bb.height)-24
	svgImage.zoom(perCent,viewBox.x-bb.x,viewBox.y-bb.y)
	}
}
El.addIdClass=(idClase)=>{
	let splitText = idClase.replace(/\t+\n+/g,'')
		.split(/(?=[#.\s/[])/g)
		let tagName	= splitText[0][0]=='#'?'div':splitText[0];
		let isId = splitText[i][0] == '#'
		let isClass = splitText[i][0] == '.'
		let isAttr  = splitText[i][0] == '['
		if(isId)idStr= splitText[i].slice(1)
		if(isClass)clasStr+=' '+splitText[i].slice(1)
		if(isAttr){
			let attrStr = splitText[i].slice(1,-1)
			let attr = attrStr.split('=')
			this.setAttribute(attr[0],attr[1])
		}
	if(idStr!=='')this.id = idStr
	if(clasStr!==' ')this.setAttribute('class',clasStr.trim())
	}
}

let closeNotif = false
const notif		= function(a,dur = 1,btn,btnF){
	_id('notifikasi')?_id('notifikasi').remove():''
	this.elm =_id('notifikasi')
	?_id('notifikasi')._style({animation: 'none'})
	:_('div#notifikasi',_('style',
	`#notifikasi{
    position: fixed;
    border-radius: 8px;
    bottom: 60px;
    left: 10%;
    right: 10%;
    background: #000;
    color: #fff;
    box-shadow: rgb(0 0 0 / 30%) 8px 8px 16px;
    z-index: 1;
    opacity: 1;
    transform: translateY(10px);
    transition: all 0.3s ease;
	}
	#notifikasi>.elmIsi>.isi{
    padding: 16px;
	}
	#notifikasi>.elmIsi>button{
    padding: 16px;
	background:transparent;
	color:var(--tema)
	}
	`
	)._style({animation: 'anim-bottom 0.3s'})
	,this.isi=_('div.elmIsi.flexRow',isString?a:isArray?a.toString():''))
	this.elm.to(document.body)
	this.isi.edit(_('div.isi.flexGrow',a))
	if(btn)this.btn = _('button',btn).to(this.isi)
	if(btnF)this.btn.on('click',btnF)
	if(closeNotif)window.clearTimeout(closeNotif)
	closeNotif = setTimeout(
		()=>{
        this.elm._style({
			opacity : '0'
			,transform: "translateY(0)"}
			)
			setTimeout(()=>{//this.elm.remove()
			},400)
			}
		,dur*1000
		)
const ilangNotif = () => {
    if(this.elm) {
        this.elm._style({
			opacity : '0'
			,transform: "translateY(150px)"}
			)
        setTimeout(() => { if(this.elm) this.elm.remove() 
			}, 400);
    }
};
	// Pas Mouse Marani (Pause)
this.elm.on('mouseenter', () => {
    window.clearTimeout(closeNotif);
});

// Pas Mouse Ngalih (Play meneh)
this.elm.on('mouseleave', () => {
    closeNotif = setTimeout(ilangNotif, dur * 1000);
});
}
const simpanFile = function(fileName='', fileType='.txt', content) {
	let toBlob	= JSON.stringify(content)
	if(fileType.slice(-4) =='JSON'||fileType.slice(-4)=='json'){
		let ikiArray=(a)=>{
			for(let i=0;i<a.length;i++){
				a[i] = isObject(a[i])?obSort(a[i]):a[i]
			}
			return a
		}
		,obSort=(jsContent)=>{
			let nO= {};
			Object.keys(jsContent).sort().forEach(
			function(key){
				if(!isElmt(jsContent[key])){
				nO[key] = isObject(jsContent[key]) 
						? obSort(jsContent[key]) 
						: isArray(jsContent[key]) 
						? ikiArray(jsContent[key])
						: jsContent[key]
				}
			}
				)
			if(isObjectEmpty(nO))return
			return nO
		}
	toBlob	= JSON.stringify(obSort(content), undefined, 2)
	}
	else{
	toBlob = content
}
  var blob = new Blob([toBlob], {type: fileType});
if(fileType[0]!=='.')fileType = '.'+fileType
  var a = _('a');
  a.download = fileName+fileType;
  a.href = URL.createObjectURL(blob);
  a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
  a.click();
  a.remove()
  setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
  
  function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

}

function generateDXF(dPathObject) {
    // 1. Ambil semua data koordinat yang sudah menjadi Line (Garis Lurus)
    // Asumsi: toLineAll mengembalikan array koordinat [[x1,y1], [x2,y2], [x3,y3]...]
	new dPath()
    let points = dPathObject.toLineAll(); 

    let dxfContent = "";

    // HEADER DXF (Minimalis R12)
    dxfContent += "  0\nSECTION\n  2\nENTITIES\n";

    // 2. Loop melalui point untuk membuat SEGMENT garis
    // Kita looping dari index 0 sampai length - 1
    for (let i = 0; i < points.length - 1; i++) {
        let p1 = points[i];
        let p2 = points[i + 1];

        // Tulis entitas LINE
        dxfContent += "  0\nLINE\n";
        dxfContent += "  8\n0\n";        // Layer 0
        dxfContent += " 10\n" + p1[0] + "\n"; // X1
        dxfContent += " 20\n" + (p1[1] * -1) + "\n"; // Y1 (dibalik ke negatif agar tidak mirror)
        dxfContent += " 11\n" + p2[0] + "\n"; // X2
        dxfContent += " 21\n" + (p2[1] * -1) + "\n"; // Y2
    }

    // FOOTER DXF
    dxfContent += "  0\nENDSEC\n  0\nEOF";

    return dxfContent;
}

// Cara Penggunaan dan Download
function downloadDXF() {
    let dxfString = generateDXF(path);
    let blob = new Blob([dxfString], { type: 'application/dxf' });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "JokoBox_Export.dxf";
    link.click();
}