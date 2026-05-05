/*
JokoBox Engine v1.0 - (c) 2026 PrecisionArtJoko.
Unauthorized copying or reverse engineering is strictly prohibited.
Contact: kuncdesign@gmail.com
*/

const firebaseConfig = {
  apiKey: "AIzaSyDdNvwM5rA0Ts07gBgn4z6QqoglCPFRvOk",
  authDomain: "jokobox-project.firebaseapp.com",
  databaseURL: "https://jokobox-project-default-rtdb.asia-southeast1.firebasedatabase.app/", 
  projectId: "jokobox-project",
  storageBucket: "jokobox-project.appspot.com",
  messagingSenderId: "777478330761",
  appId: "1:882564280488:web:d029ab9e315a154360129d",
  measurementId: "G-R3BSVEMS3S"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

let hotKeyEnable = true
let hotkey = {"active":[],'shortcut' : {}}
document.body.on('keydown',(e = event)=>{
	if(!hotkey.active.includes(e.key.toLowerCase())){hotkey.active.push(e.key.toLowerCase())}
	let elm = document.activeElement;
    if (elm.tagName == 'INPUT' || elm.tagName == 'TEXTAREA' || elm.contentEditable == 'true') {
		if(elm.type=="Checkbox")
        if (e.key == 'Enter' || e.key == 'Escape') {
            e.preventDefault();
            elm.blur();
            hotKeyEnable = true;
        }
        return;
    }
	 if(hotKeyEnable && hotkey.shortcut[e.key]){
		 hotkey.shortcut[e.key]()
		}
    }
)
document.body.on('keyup',(e = event)=>{
	var ke = hotkey.active.indexOf(e.key)
	if(ke >- 1)hotkey.active.splice(ke,1)
})

title =  "JokoBox"
description =  "Laser box Generator "
_elms("title")[0].edit(title + "-" + description	)
_("style",`
html{
	scroll-behavior: smooth;
	box-sizing:border-box;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	font: normal normal 400 14px/20px 'calibri','sans-serif', 'serif';
	width: 100%;
	height: 100%;
	overflow: hidden auto;
	overflow-wrap: break-word;
	}*{position:relative}*,*:before,*:after{box-sizing:inherit}*,*:before,*:after{box-sizing:inherit;}body{
    margin: 0;padding: 0;}li{list-style: none;}[contenteditable] {outline: 0px solid transparent}
	button{border: none;outline: none;cursor: pointer;}
	input:focus{border:none;outline:none;}
	.konfirm input[type=text]{border:none;outline:none;font-size: 16px;padding: 8px;border-bottom: 1px solid #ddd;width: 100%;}
	ul {margin: 0;padding: 0;}
	hr{margin-inline-start: inherit;margin-inline-end: initial;border-bottom:1px solid grey}
	input:focus{outline:none;border:none}
body{
    margin: 0;padding: 0;}li{list-style: none;}[contenteditable] {outline: 0px solid transparent}
	button{padding: 16px;margin: 4px;border: none;outline: none;cursor: pointer;}
 	input:focus{border:none;outline:none;}
	input{border:none;outline:none} */
	ul {margin: 0;padding: 0;}
	hr{margin-inline-start: inherit;margin-inline-end: initial;}
	button.transparent{background-color:transparent;color.inherit}
	ul li.item {padding: 8px 16px;}

input[type = number] {
    width: 60px;
    text-align: right;
}
:root {
  --tema-background: #333;
  --bg-color-tema: orange;
  --width-sidnav: 250px;
  --height-sidnav-header: 75px;
  --canvas-zoom:100
}
::-webkit-scrollbar {width: 10px;}
::-webkit-scrollbar-track {background: var(--tema-background)}
::-webkit-scrollbar-thumb {background: #888;}
::-webkit-scrollbar-thumb:hover {background: #555;}
.w100{width:100%}
.flexRow{display:flex}
.flexGrow{flex-grow:1}
div#paternGeneratorSetter>.header {display: flex;}
span.closer {
    position: absolute;
    right: 0;
    padding: 8px;
    border-radius: 8px;
}

span.closer:hover {
    background: red;
	transition:.2s
}

/* input[type=number] {border: none;outline: none;} */
label {display: flex;align-items: center;}
label>input[type=number] {width: 70px;padding: 8px;}
label>span {flex-grow: 1;}
label>input[type=radio] {margin-right: 16px;margin-left: 16px;width: 16px; height: 16px;}

input#pilih_jenis {float: left;}
label>div {
    display: block;
    width: 100%;
    padding: 4px;
}
#toolBarPreview input[type="radio"] {
    width: 0;
    height: 0;
    opacity: 0;
    display: none;
}
#toolBarPreview input[type="radio"] ~ span {
     padding: 6px 8px;
}
#toolBarPreview input[type="radio"]:checked ~ span {
     border-top:6px solid white;
     color:white;
     padding: 0px 8px 6px 8px	;
}

#toolBarPreview label {
    margin: 0;
}
.topnav,.sidenav {
  position: fixed;
  width:var(--width-sidnav)
  z-index: 1;
  top: 0;
  background-color: var(--tema-background);
  overflow: hidden;
}

.topnav{
  overflow: hidden;
  left:calc(var( --width-sidnav));
  overflow: hidden;
  background-color: var(--tema-background);
  width: 100%; /* Full width */
    z-index: 1;
}
/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 8px 32px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover {
}

/* Change the color of links on hover */
.topnav a:before {
	content: "";
	display: block;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: -1;
}
.topnav a:hover:before {
    border: 16px solid #555;
    border-top: 0 solid #555;
    border-bottom: 36px solid #555;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
}
.topnav a.aktif:before {
    transition: .1s;
    border: 16px solid #fff;
    border-top: 0 solid #fff;
    border-bottom: 28px solid #ffff;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
}
.topnav a:hover:NOT(.aktif):before{
}


.topnav a.aktif {
	color: #000;
	padding: 14px 20px 2px 20px;
}
/* Add an active class to highlight the current page */

.sidenav {
  left: 0;
  height: 100%;
  width:var( --width-sidnav);
  background-color: var(--tema-background);
  color:    #999;
  overflow: hidden;
  z-index:1
}
.sidenav>*:NOT(div) {
  padding: 6px 8px 6px 16px;
}

.header>.title {
    margin: 0;
	font-size:150%
}
.header>.description {
    margin: 0;
	font-size:125%;
    line-height: 1;
}
.sidenav>.isi {
	height: calc(100% - var(--height-sidnav-header));
    margin: 100px 0 0 16px;
    margin-top: var(--height-sidnav-header);
    border-radius: 24px 0 0 0;
    background: var(--tema-background);
    color: #fff;
    overflow: hidden scroll;
}
.sidenav a {
  text-decoration: none;
  display: block;
  font-size:100%
}
.sidenav a:hover {
  color: #fff;
}
.sidenav+.main {padding: 40px 0 0 8px;}
.sidenav~.main{margin-left: var(--width-sidnav);}
.main {
    padding: 0 16px;
}
.main>.header{
    padding-top: 65px ;
}
h1.title {
    color: #ddd;
    margin-bottom: 0;
}
.sidenav .header {
    margin: 0;
    padding: 16px 0 0 16px;
    position: absolute;
    width: 100%;
    height: var(--height-sidnav-header);
    left: 0;
    top: 0;
    background: inherit;
    z-index: 1;
}
.sidenav .panel {
    border-bottom: 1px solid;
    border-left: 1px solid;
    padding: 4px 16px;
    border-radius: 0 0 0 16px;
    padding-bottom: 8px;
}

.sidenav .panel table {
    width: 100%;
}
.panel .title {
    font-size: 120%;
    color: #ccc;
    padding: 8px 0 6px 16px;
    margin: 0 -16px;
}
.panel.expand>.title {
    color: orange;
    color: #fff;
    /* background: #333; */
}
.panel>.title:after {
    transform: rotate(0deg);
    opacity: .3;
    content: "\\25B6";
    font-size: 13px;
    color: #fff;
    float: left;
    margin-right: 14px;
    font-weight: bold;
    transition: 0.3s;
}

.panel.expand>.title:after{
    transform: rotate(90deg);
    color: orange;
    opacity: 1;
}
.panel.expand>.title{
    color: orange;
}

.panel>.title~* {
    padding-top: 8px;
    padding-bottom: 16px;
}
.panel .title:hover {
    color: #fff;
    color: orange;
}
.sidenav .panel table tr>td:nth-child(1) {
    width: 50%;
}
svg#viewer *{
    vector-effect: non-scaling-stroke;
    stroke-width: 1px;
}
div#labelDinamis {
    position: fixed;
    top: 100px;
    left: 300px;
    width: 300px;
    height: 400px;
    display: block;
    pointer-events: none;
    display: block;
    background: none;
    z-index: 10;
    border: 2px solid magenta;
}

.sidenav .panel input[type=range] {
    position: fixed;
    width: var(--width-sidnav);
    z-index: 1;
	display:none;
}
.sidenav .panel td.inputer:hover + td .sliderContainer input
,.sidenav .panel td.inputer + td:hover .sliderContainer input{
    display: block;
}
#toolBarPreview {
    position: fixed;
    bottom: 0;
    Width: calc(100% - var(--width-sidnav));
	right:0;
    background: var(--tema);
    background: var(--tema-background);
    color: #ccc;
    z-index: 100;
	border-radius:4px;
	min-width:150px;
	padding-left:60px
}
#toolBarPreview>div {
	padding:4px;
}
[data-toolpreview].aktif {
    box-shadow: inset 0 0 8px magenta;
}
ul#klikKanan {
    position: fixed;
    top: 100px;
    left: 500px;
    z-index: 100;
    background: #eee;
    color: var(--tema-background);
    font-size: 125%;
	box-shadow: 2px 2px 8px rgba(0,0,0,30%)
}

ul#klikKanan>li{
    padding: 4px 16px;
	transition:.2s
}
ul#klikKanan>li:hover{
    background: #aaa;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
}

@keyframes sokoNgisor{from{bottom:-100px;opacity:0} to{bottom:0;opacity:1}}
input#NameForBox {
    padding: 4px 16px;
    border-radius: 4px;
    font-size: 125%;
}
`
).to(document.head)
topBar = _('div.topnav'
			,_("a.aktif","Patern").attr("href","#")).to(document.body)
sidenav = _('div.sidenav',_('div.header'
			,_('h1.title',title)
			,_('div.description',description)
		)).to(document.body)
sidenavIsi = _("div.isi").to(sidenav)
main = _('div.main').to(document.body)

toolbarPreivew = _('div#toolBarPreview.flexRow.flexGrow'
	,_("div.flexGrow")

	,_("label",_("input#filGrey[type=radio][name=warnafill]")
		.on("input",refreshJokobox),_("span","grey"))
	,_("label",_("input#fillWood[type=radio][name=warnafill]")
		.on("input",refreshJokobox),_("span","wood"))
	,_("div.felxRow"
				,_("input[type=Number]#zoomIndikator")
				.attr("value",100)
				.attr("min",10)
			,"%  ")
			)._style("align-items: center")
.to(document.body)

window.onresize=function(){
canvas.elm._style('width',(window.innerWidth)+'px')
._style('height',(window.innerHeight)+'px')
}
document.body.on('mousemove',()=>{
	canvas.pMouse = new  PointEvent((isMobile?e.touches.length:1)-1)
	let rect = canvas.elm.getBoundingClientRect();
	canvas.pMouse[0] -= rect.left;	canvas.pMouse[1] -= rect.top
	});

const canvas = {"zoom":100}
	  canvas.setting = {}
	canvas.printah = "Diskripisi"
	canvas.singDipilih = []
	canvas.toolAktif = ""
	canvas.fullScrren = false
canvas.elm = _('svg#svgCanvas').to(main)
._style("position","fixed")._style("inset","0")
 	.attr({
		'xmlns'				:'http://www.w3.org/2000/svg'
		,'xmlns:xlink'		:'http://www.w3.org/1999/xlink'
		,'shape-rendering'	:'geometricPrecision'
		,'text-rendering'	:'geometricPrecision'
		,'fill-rule'		:'evenodd'
		,'image-rendering'	:'optimizeQuality'
		,'clip-rule'		:'evenodd'
		,'width' 			:(window.innerWidth)+'px'
		,'height'			:(window.innerHeight )+'px'

	}
)
_('defs'
	,_("marker#tandaArah"
		,_("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("fill","magenta")
     ).attr({
		"viewBox":"0 0 10 10"
		,"refX":5
		,"refY":5
		,"markerWidth":5
		,"markerHeight":5
		,"orient":"auto-start-reverse"
	})
	,_("marker#tandaMulai"
		,_("circle[cx=5][cy=5][r=2][fill=red]")
		.attr("fill","magenta")
     ).attr({
		"viewBox"	:"0 0 10 10"
		,"refX"		:5
		,"refY"		:5
		,"markerWidth"	:12
		,"markerHeight"	:5
	})
	,`
	<!-- Small Grid: Biasane nggo 1mm utawa 5mm -->
  <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="0.5"/>
  </pattern>

  <!-- Main Grid: Biasane nggo 50mm utawa 100mm -->
  <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
    <!-- Numpuk Small Grid neng njerone Grid Gedhe -->
    <rect width="100" height="100" fill="url(#smallGrid)"/>
    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(0,0,0,0.5)" stroke-width="1"/>
  </pattern>`
  ).to(canvas.elm)
canvas.elmWorkArea = _("g#elmWorkArea").to(canvas.elm)
canvas.elmCoordinate = _("g.koordinate").to(canvas.elm)
canvas.elmLayerAktif = _("g.layerAktif").to(canvas.elm)
canvas.elmTop= _("g.elmTop").to(canvas.elm)
canvas.labels = _("g.labels").to(canvas.elm)
canvas.elmForTool = _("g.elmForTool").to(canvas.elm)
canvas.elmCoordinate.add(_("rect#grid").attr({width:"100%",height:"100%",fill:"url(#grid)"}))
canvas.tStart =  function(e = event){
		HTMLremove("#klikKanan")
    e = e || window.event;
    e.preventDefault();
	if((event.buttons&3)===3|| !isMobile&&e.button === 2)return
	let	c = canvas;
	let body = document.body;
		body.on('mousemove',c.tMove);
		body.on('mouseup',c.tEnd);
	let ke	 = (isMobile?e.touches.length:1)-1
	let rect = canvas.elm.getBoundingClientRect();
		c.pStart = new PointEvent(ke)
		c.pStart[0] -= rect.left; c.pStart[1] -= rect.top
	const cp =(a)=>{if(a)c.printah = a; else return c.printah}
	const ct =(a)=>{if(a)c.toolAktif = a; else return c.toolAktif}
		//return c.printah = "pan"
	let o = e.target;
	if(cp()=="zoomShoot") return
	if(o.is("g.koordinate *")){cp("pan")}
	else if(o.is("#boxNesterThumb")){
		c.nestData = {}
		c.nestData.bNester = new BoxPoints(c.elmLayerAktif)
		c.nestData.arrElms = _elms("g.layerAktif *")
		cp("tMove_autoNest")
		}
}
canvas.tMove = function(e = event){
	let c = canvas
	let rect = canvas.elm.getBoundingClientRect();
		c.pEnd =new PointEvent((isMobile?e.touches.length:1)-1)
		c.pEnd[0] -= rect.left;	c.pEnd[1] -= rect.top
		b = c.boxDrag = new BoxPoints(c.pStart,c.pEnd);
		if(c.boxDrag.d>3)canvas.isDrag = true
		const cp =(a)=>{if(a)c.printah = a; else return c.printah}
		HTMLremove("path.sementara")
		if(c.isDrag){}
			if(hotkey.active.includes(" ")||cp()=="pan")c.tMovePan();
			else if(cp()=="zoomShoot")c.tmoveBox()
			else if(cp()=="tMove_autoNest")c[cp()]()
	}
canvas.livePreview = {}
canvas.tEnd = function(){
	document.body.removeOn('mousemove',canvas.tMove);
	document.body.removeOn('mouseup',canvas.tEnd);
	document.body.style.cursor = 'default';
	let c = canvas
	if("pan" == c.printah){
		_elms("g.layerAktif,g.elmForTool").map(c=>{
			c.transApply()
		})
		c.printah = ""
	}
	if("tMove_autoNest" == c.printah){
		_elms("#boxNesterThumb").map(c=>{
			c.transApply()
		})
		c.printah = ""
		return
	}
	else if( c.printah=="zoomShoot"){
		let b = c.boxDrag
		let ras =100* canvas.elm.getBoundingClientRect().width/b.w
		b.pMid[0] +=250
		canvas.zoomTo(parseFloat(_id('zoomIndikator').value)+(ras),b.pMid)
		HTMLremove("path.sementara")
		c.printah = ""
	// CSSset('path','transition','all 0.2s')
		// HTMLhide('#boxSelector')
	// editor.zoom.isZoomed = false
	// setTimeout(()=>{
			// CSSset('path','transition','none')
			// editor.bS.fromElms()
		// },250)

	// editor.zoom.current =  eventPoints[0].xDist/window.innerWidth
	// a = eventPoints[0].pMid.translate([0,60])
	// if(editor.zoom.current<20){
		// notif('zoom in is Max');
		// editor.zoom.current = 20
	// }
	// editor.objects.transSet(
	// [editor.zoom.current/100,editor.zoom.current/100,0,0,0,0,0]
	// ,a
	// ,_getElms('#canvas .layer>*')
	// )
	// editor.zoom.isZoomed = false
	// editor.objects.transAply(_getElms('#canvas .layer>*'))
	// editor.zoom.current = 100
	// editor.bS.fromElms()

	}
	HTMLremove("path.sementara")
}
canvas.newText = function(txt='text',p,size=15,posisi='start'){
  let elm = _("text")
			.attr("x", p[0])
			.attr("y", p[1])
			.attr("font-size", size)
			.attr("font-family", 'arial')
			.attr( "font-weight", '400')
			.attr("text-anchor", posisi)
			.attr("data-nama", posisi)
			.to(canvas.elmLayerAktif)
      elm.innerHTML = txt;
  return elm
}
canvas.newLabel = function(txt='text',p,size=15,posisi='start'){

  return newText(txt,p,size,15,posisi).to(canvas.labels)
}
canvas.tMove_autoNest = function(){
	let  c	= canvas,b	= c.nestData.bNester,bc = c.boxDrag
		,path = new dPath()
		_id("boxNester").attr(["width","height"],b.pMin.pDist(c.pEnd))
		_id("boxNesterThumb").transSet([1,1,c.boxDrag.xTrans,c.boxDrag.yTrans,0,0,0])

		let xC = b.x, yC = b.yMax
		c.nestData.arrElms.map(elm=>{
			let bb = elm.boxPoints()
			if(bb.xMax > c.pEnd[0]){//batas X
				if(b.yMax + bb.h < c.pEnd[1]){//muat nengisor
					elm.transSet([1,1, (xC-bb.x) ,(b.yMax-bb.y) ,0,0,0])
					xC = xC+bb.w
				}
				else{
					elm.transSet([1,1, 0 ,0 ,0,0,0])
				}
			}
			else{elm.transSet([1,1, 0 ,0 ,0,0,0])}
		})

}
canvas.elm.on('mousedown',canvas.tStart)
canvas.elm.on('contextmenu', function(e=event) {
e.preventDefault()
if(canvas.toolAktif=="pan"){
	canvas.zoomToAll()
}
	return
  HTMLremove('#klikKanan')
  e.preventDefault();
	let kk =  _('ul#klikKanan'
		,_("li","siji").on("click",()=>{})
		,_("li","loro").on("click",()=>{})
		,_("li","telu").on("click",()=>{})
		,_("hr")
		,_("li","papat").on("click",()=>{})
		,_("li","limo").on("click",()=>{})
	).to(main)
	._style({
		left	:	e.pageX+"px"
		,top	:	e.pageY+"px"
	})
	pM = kk.getBoundingClientRect()
	if( pM.x + pM.width > window.innerWidth){
		_id("klikKanan")._style("left",(pM.x - pM.width) +"px")
	}

	if( pM.y + pM.height> window.innerHeight){
		_id("klikKanan")._style("left",(pM.y - pM.height) +"px")
	}
})
canvas.elm.on('wheel',(e=event)=>{e.preventDefault()
		if(e.ctrlKey||e.shiftKey){
			tr = -e.deltaY/5
			if(e.ctrlKey)canvas.pan(0,tr)
			if(e.shiftKey)canvas.pan(tr)
		}
		else{
			or = new PointEvent()
			let step = canvas.zoom<100 ? 10
					   :canvas.zoom<200 ? 15
					   : 50
			if(e.deltaY>0)canvas.zoomIn(step,canvas.pMouse)
			else canvas.zoomOut(step,canvas.pMouse)
		}
	 })
canvas.tmoveBox = function(perCent,or){
	canvas.boxDrag.createRect("#boxDrag.sementara")
	.to(canvas.elm)
	.attr({fill:"magenta",opacity:0.3,stroke:"#000","stroke-width":2})
}
canvas.tMovePan = function(){
	document.body.style.cursor = 'grabbing'
	canvas.printah ="pan"
	b = canvas.boxDrag
	//a = b.angle
	xt = b.xTrans
	yt = b.yTrans
		_elms("g.layerAktif,g.elmForTool").map(c=>{
			c.transSet([1,1,xt,yt,0,0,0])
		})
	canvas.elmLayerAktif
	let d = new dPath()
	d.M0(canvas.pStart).la(b.a,b.d-15)
	.createElm(".sementara").to(canvas.elm)
		.attr({
			fill:"none"
			,opacity:1,stroke:"magenta"
			,"stroke-width":3
			,"marker-end": "url(#tandaArah)"
			,"marker-start": "url(#tandaMulai)"
		})
}

canvas.zoomToPercent = function(perCent,or){
	if(perCent<10)perCent = 11
	sC 	= perCent.fixed(0)/canvas.zoom
	or = [window.innerWidth/2,window.innerHeight/2]
	canvas.elmLayerAktif.transSet([sC,sC,0,0,0,0,0],or)
	canvas.elmLayerAktif.transApply()
	canvas.zoom = perCent
	if(_id('zoomIndikator')){_id('zoomIndikator').value = canvas.zoom}
}
canvas.zoomTo = function(perCent,or){
	if(perCent<10)return
	sC 	= perCent.fixed(0)/canvas.zoom
	or = or?or:[window.innerWidth/2,window.innerHeight/2]
	canvas.zoom = perCent.fixed(0)
	_elms("g.layerAktif,g.elmForTool").map(c=>{
		c.transSet([sC,sC,0,0,0,0,0],or)
		c.transApply()
	})
	// canvas.elmCoordinate.transSet([sC,sC,0,0,0,0,0],or)
	// canvas.elmCoordinate.transApply()
	document.documentElement.style.setProperty('--canvas-zoom', canvas.zoom);
	if(_id('zoomIndikator')){_id('zoomIndikator').value = canvas.zoom}
}
canvas.zoomToFit = function(perCent,or){
	let bb = new BoxPoints(canvas.elmLayerAktif)
	let bc = new BoxPoints(canvas.elm)
	let zoomH = (bc.h / bb.h) * 100;
	let zoomW = (bc.w / bb.w) * 100;
	let finalZoom = Math.min(zoomH, zoomW) * 0.7;
	canvas.zoomTo(finalZoom.fixed(0	), [0,0]);
}
canvas.objecToCenter = function(){
		let ba 		= new BoxPoints(canvas.elmLayerAktif)
		let bc		= new BoxPoints(canvas.elm)
		let pt = ba.pMid.pDist(bc.pMid)
		canvas.elmLayerAktif.transSet([1,1,pt[0],pt[1],0,0,0])
		canvas.elmLayerAktif.transApply()
}
canvas.zoomIn = function(a,or){
		canvas.zoomTo(_id('zoomIndikator').value-(a?a:5),or)
	}
canvas.zoomOut = function(a,or){
if(_id('zoomIndikator')){
	canvas.zoomTo(parseFloat(_id('zoomIndikator').value)+(a?a:5),or)
}}
canvas.pan = function(dx=0,dy=0){
	_elms("g.layerAktif,g.elmForTool,g.elmCoordinate").map(c=>{
		c.transSet([1,1,-dx,-dy,0,0,0])
		c.transApply()
	})
}
canvas.panToZero = function(dx=0,dy=0){
		var bb = canvas.elmLayerAktif.getBBox()
		canvas.elmLayerAktif.translate(-bb.x,-bb.y)
}
canvas.panToZeroCanvas = function(dx=0,dy=0){
		var bb = canvas.elmLayerAktif.getBBox()
		canvas.elmLayerAktif.translate(-bb.x+260,-bb.y+46)
}
panel = _("div"
		,_("h4","Name for Box")
			._style("margin","8px 16px")
			._style("color","#ccc")
			._style("font-size","120%")
		,_("input#NameForBox[type=text]")
		.attr("value","")
		.attr("placeHolder","project Box For")
	)
.to(sidenavIsi)

let dataBox = {
	  "Dimensions": {
	  "Width": 100,
	  "Height": 80,
	  "Depth": 50,
	  "SizeFor":false
	  }
	  ,"Material": { "Thickness": 2.75, "Kerf": 0.25 },
	  "Features": {
			"lidType": "Removable"
			,"Jointer": "auto"
			//, "Dividers": { "rows": 1, "cols": 1 }
			}
	  ,"Layout": {
		  "Part_Spacing": 2,
		  "Auto_Nest":false,
		  "Fit_Screen":false,
			}

	}
for (let bagian in dataBox) {
var panel,panelIsi,baris,nilai
	panel = _("div.panel"+"#panel_"+bagian
				,_("div.title",bagian)
				.on("click",function(e){
					let elmnt = e.currentTarget.parentElement
					if (elmnt.style.maxHeight == "40px" ){
						elmnt.addClass("expand")
						elmnt.style.maxHeight = elmnt.scrollHeight +"px"
					}
					else{elmnt.style.maxHeight = "40px"
						elmnt.removeClass("expand")}
				})
			).to(sidenavIsi)
			._style("overFlow:hidden")
			._style("transition: 0.2s")
			._style("max-height","40px")
			,_("table", panelIsi = _("tbody")).to(panel)

	for (let prop in dataBox[bagian]){
		 baris = _("tr",_("td",prop)).to(panelIsi)
		 nilai = dataBox[bagian][prop]
		 ongko = isNumber(nilai)
		if(ongko && prop !== "Jointer"){
			_("td.inputer",
			inpute = _("input#input"+prop+"[type=number]")
			.attr("value",nilai)
			.attr("min",1)
			).to(baris)

			if(prop!=="Jointer"){
			_("td",
				_("div.sliderContainer.flexRow","mm"
				// ,inpute = _("input#input"+prop+"Range[type=range]")
				// .attr("value",nilai)
				// .attr("min",0)
				)
				).to(baris)
			}
			if (prop == "Kerf" || prop == "Thickness"){inpute.attr({"min":0,"step":0.01})}
		}
		else if (prop == "Dividers"){
			_("td",inpute = _("input#input"+prop+"V[type=number]")
				.attr("value",dataBox[bagian][prop].rows)
				.attr("title","VERTICAL divider")).to(baris)

			_("td",inpute = _("input#input"+prop+"H[type=number]")
				.attr("value",dataBox[bagian][prop].cols)
				.attr("title","HORIZONTAL divider")).to(baris)

		}
		else if (prop == "Auto_Nest"||prop == "Fit_Screen"){
			_("td",_("label",inpute = _("input#input"+prop+"[type=Checkbox]").attr("value",nilai), "")).to(baris).attr("colspan",2)
		}
		else if (prop == "Fit"){
			_("td",_("label",inpute = _("input#input"+prop+"[type=Checkbox]").attr("value",nilai), "")).to(baris).attr("colspan",2)
		}
		else if (prop == "SizeFor"){
			_("td",_("label",inpute = _("input#input"+prop+"[type=Checkbox]").attr("value",nilai), "inside")).to(baris)
		}
		else if (prop == "lidType") {
        // Nggawe Dropdown kagem lidType
        let opsi = ["none","flat","Removable"]//,"hinged"];
        let dropdown = _("select#" + prop)._style({
    "width": "100%",
    "background": "#444",
    "color": "white",
    "border": "1px solid #666",
    "padding": "2px",
    "border-radius": "4px"
	})

        // Nempelne pilihan nggunakake fungsi to() Panjenengan
        opsi.map(o => {
            let opt = _("option[value=" + o + "]", o);
            if (o == nilai) opt.selected = true; // Set default sesuai JSON
            to(opt, dropdown);
        });
        _("td", dropdown).to(baris).attr("colspan",2);
        _("td", "").to(baris); // Kosongi kolom satuan mm
    }
		else if (prop == "Jointer") {
			     // Nggawe Dropdown kagem lidType
        let opsi = ["Auto","1","3","5","7","9"];
        let dropdown = _("select#" + prop)._style({
    "width": "100%",
    "background": "#444",
    "color": "white",
    "border": "1px solid #666",
    "padding": "2px",
    "border-radius": "4px"
	})

        // Nempelne pilihan nggunakake fungsi to() Panjenengan
        opsi.map(o => {
            let opt = _("option[value=" + o + "]", o);
            if (o == nilai) opt.selected = true; // Set default sesuai JSON
            to(opt, dropdown);
        });
        _("td", dropdown).to(baris).attr("colspan",2);
        _("td", "").to(baris); // Kosongi kolom satuan mm
   }
	}
}
function generateKothak() {
	let nama = _id('NameForBox').value.replace(/\s+/g, '_');
    let idUnik = (nama || "Project") + "_" + new Date().getTime();
    let w = _id('inputWidth').value;
    let h = _id('inputHeight').value;
    let d = _id('inputDepth').value;
    let t = _id('inputThickness').value;
    database.ref('aktivitas_user').child(idUnik).set({
        nama_project: nama,
        dimensi: `${w} x ${h} x ${d} mm`,
        tebal_bahan: t + " mm",
        waktu: new Date().toLocaleString(),
        status: "User Klik Download"
    })
    .then(() => {//Ssssttt Meneng, bocahe lagi Downloa "Gratis"
		})
}

optmalayout = function(gap = 2){
	let g = canvas.elmLayerAktif
    let elms = g._elms("path");
	elms.forEach(elm=>{
        let b = elm.getBBox();
		d = new dPath(elm)
		if(b.width>b.height){d.rotate(90)}
		d.toZero()
		d.translate(250,60)
	})

	elms.sort((a, b) => {
        let boxA = a.getBBox().height;
        let boxB = b.getBBox().height;
		return boxB - boxA
    })
	let x = elms[0].getBBox().width
	let y = elms[0].getBBox().y
	elms.forEach((elm)=>{
			elm.translate(x,0)
			x += elm.getBBox().width+gap
		})

	g = canvas.elmLayerAktif.boxPoints()
		let  xC = g.x
		let  yC = g.y

	if (g.w>(g.h*2)){
		let arr1 = elms.slice(0,elms.length/2)
		let arr2 = elms.slice(elms.length/2)
			xC = 0
		let bb 		= new BoxPoints()//box Acuan
			bb.fromElms(arr1)
			console.log(bb)
		_("rect").to(canvas.elmCoordinate)
			.attr(["x","y"],bb.pMin)
			.attr(["width","height"],bb.pDist)
			.attr("stroke","magenta")
			.attr("stroke-width",2)
			.attr("fill","magenta")

	}
}
optmalayout = function(gap = 5) {
    let g = canvas.elmLayerAktif;
    let elms = g._elms("path");

    // 1. Ambil area pembatas (kotak ungu dari video)
    let boundary = g.boxPoints();
    let startX = boundary.x;
    let startY = boundary.y;
    let maxWidth = boundary.w;

    // 2. Sortir berdasarkan tinggi untuk efisiensi packing
    elms.sort((a, b) => b.boxPoints().h - a.boxPoints().h);

    let curX = startX;
    let curY = startY;
    let rowHeight = 0;

    elms.forEach((elm) => {
        let box = elm.boxPoints(); // Menggunakan custom Object BoxPoints Anda

        // 3. Logika Baris Baru (Line Wrapping)
        if (curX + box.w > startX + maxWidth) {
            curX = startX;
            curY += rowHeight + gap;
            rowHeight = 0;
        }

        // 4. Hitung SELISIH (Delta) karena translate Anda bersifat menambah nilai
        let dx = curX - box.x;
        let dy = curY - box.y;

        // Eksekusi pergerakan koordinat path
        let d = new dPath(elm);
        d.translate(dx, dy); // Memanggil method translate yang Anda berikan

        // 5. Update posisi X untuk elemen berikutnya
        curX += box.w + gap;

        // 6. Catat tinggi maksimum di baris ini
        if (box.h > rowHeight) {
            rowHeight = box.h;
        }
    });
};
textSingleLine = function(idClass=" ",txt,p=[0,0], tH= 1, sps=1){
	 let elm = _("path"+idClass)
			.attr('fill','transparent')
			.attr('stroke',"white")
			.attr('d', new dPath().singleLineText(
				txt,p[0],p[1], tH, sps ).d
				)
	return elm
}
class boxPuzle{
	constructor(config){this.updateData(config)}
	nElm( idClass ){
		let ikiStyleE = {
			"stroke":"none"
			,"stroke":"red"
			,"stroke-width": 1
			,"transition":"all 0.4s ease-out"
			}//rgb(0,0,0,5%)#764D00

		ikiStyleE.fill =  _id("fillWood").checked ? "#764D00" //"#764D00"
						: "#eee";

		ikiStyleE.stroke = _id("fillWood").checked ? "red":"red";

		ikiStyleE	["stroke-width"] = _id("fillWood").checked ? 0.5: 1;


		return _("path"+ idClass+".polaEditing" ).attr(ikiStyleE).to(canvas.elmLayerAktif)
	}
    updateData(config) {
        this.p = Number(config.width) || 100;
        this.l = Number(config.height) || 50;
        this.t = Number(config.depth) || 20;
        this.tb = Number(config.thickness) || 3;
        this.k = Number(config.kerf) || 0;
		this.lidType = config.lidType || "none";
		this.isAutoFit = config.isAutoFit || false;
		this.isAutoNest = config.isAutoNest ||false;
        this.jointer = config.jointer || "auto";
		this.jointer = config.jointer === "auto" ? Number(0): (Number(config.jointer) || 0);
		this.ttp = 20
		this.gap = config.gap
    }
	gaweSambLanang(dowo) {
		var nArr = [];let j;
    if (this.jointer == 0) {
        // Otomatis adhedhasar dowo
        j = dowo < 51  ? 1 :
            dowo < 101 ? 2 :
            dowo < 201 ? 3 :
            dowo < 301 ? 4 :
            dowo < 401 ? 5 : 6; // tambahi dewe batese
    } else {
        // Manual melu inputan user
        j = this.jointer;
    }
		j+=1
		var d = dowo / (j * 2 - 1);
		for (let i = 0; i < j; i++) {
			let x1 = (i * 2) * d;     // Titik awal untu
			let x2 = x1 + d	;
			let x3 = x2 + d;
			nArr.push(x1, this.tb,x2, this.tb,x2, 0);
			if (i < j - 1) {
				nArr.push(x3,0);
			}
		}
		if(this.tb > 0)nArr.splice(-2,2)
		return nArr;
	}
	gaweSambWedok(dowo) {
		var nArr = [];
		let j;
    if (this.jointer == 0) {
        j = dowo < 51  ? 1 :
            dowo < 101 ? 2 :
            dowo < 201 ? 3 :
            dowo < 301 ? 4 :
            dowo < 401 ? 5 : 6;
    } else {
        j = this.jointer;
    }
		j+=1
		let k = this.k
		var d = dowo / (j * 2 - 1);
		for (let i = 0; i < j; i++) {
			let x1 = (i * 2) * d;     // Titik awal untu
			let x2 = x1 + d	;
			let x3 = x2 + d;
			nArr.push(x1-k, 0,x2+k, 0,x2+k, this.tb);
			if (i < j - 1) {
				nArr.push(x3-k,this.tb);
			}
		}
		if(this.tb > 0)nArr.splice(-2,2)
		return nArr;
	}
	gaweDasaran(){
		let pts1 = this.gaweSambLanang(this.p)
			pts1[0] += this.tb
			pts1[pts1.length-2] -= this.tb
		let pts2 = this.gaweSambLanang(this.l)
			pts2[0] += this.tb
			pts2 = pts2.rotate(90,[0,0])
		let pts4 = pts2.balikArah().scale([-1,1]).transRot(0,this.tb)
			pts2 = pts2.transRot(0,this.p)
		let ptsAll = pts1.concat(
					pts2
					,pts1.transRot(90,this.l-this.tb).balikArah().scale([1,-1])
					,pts4
					)
		return ptsAll
	}
	gaweSampingan(){
		let pts1 = this.gaweSambWedok(this.t)
		let pts2 = this.gaweSambWedok(this.l)
		.rotate(90,[0,0])
		let pts3 =  pts1.transRot(90,this.l-this.tb).balikArah().scale([1,-1])
		let pts4 = pts2.scale([-1,-1],pts2.pMidRight())
			pts2 = pts2.transRot(0,this.t)
		let ptsAll = pts1
			if(["flat","Hinged"].includes(this.lidType) ) ptsAll = ptsAll.concat(pts2)
			ptsAll = ptsAll.concat(pts3)
			ptsAll = ptsAll.concat(pts4)
		return ptsAll
		return ptsAll.fixed(3)
	}
	gaweNgarepan(){
		let pts1 = this.gaweSambWedok(this.p)
		let pts2 = this.gaweSambLanang(this.t).rotate(90,[0,0])
				.transRot(0,this.p)
				pts1.splice(0,2,this.tb,0)
				pts1.splice(-2)
		let pts3 = pts1.transRot(90,this.t-this.tb).balikArah().scale([1,-1])
		let pts4 = this.gaweSambWedok(this.t).rotate(90,[0,0]).balikArah().transRot(0,this.tb)
		let ptsAll = pts1.concat(pts2)
			if(["flat","Hinged" ].includes(this.lidType) ) ptsAll = ptsAll.concat(pts3)
			ptsAll = ptsAll.concat(pts4)
		return ptsAll
	}
	gaweSampinganTtp(){
		let ttp = this.ttp
		let pts1 = this.gaweSambWedok(ttp)
		let pts2 = this.gaweSambLanang(this.l)
		.rotate(90,[0,0])
		let pts3 =  pts1.transRot(90,this.l-this.tb).balikArah().scale([1,-1])
		let pts4 = pts2.scale([-1,-1],pts2.pMidRight())
			pts2 = pts2.transRot(0,ttp)
		let ptsAll = pts1
			if(["flat","Hinged"].includes(this.lidType) ) ptsAll = ptsAll.concat(pts2)
			ptsAll = ptsAll.concat(pts3)
			ptsAll = ptsAll.concat(pts4)
		return ptsAll.fixed(3)
	}
	gaweNgarepanTt	(){
		let ttp = this.ttp
		let pts1 = this.gaweSambLanang(this.p)
		let pts2 = this.gaweSambLanang(ttp).rotate(90,[0,0])
				.transRot(0,this.p)
		let pts3 = pts1.transRot(90,ttp-this.tb).balikArah().scale([1,-1])
		let pts4 = this.gaweSambLanang(ttp).rotate(90,[0,0]).balikArah().scale([-1,1])
		.transX(0,this.tb)
		let ptsAll = pts1.concat(pts2)
			if(["flat","Hinged" ].includes(this.lidType) ) ptsAll = ptsAll.concat(pts3)
			ptsAll = ptsAll.concat(pts4)
		return ptsAll
	}
	gaweDasaranTt	(){
		let p = this.p, l = this.l, t = this.t
		return 	[0,0,p,0,p,l,0,l,0,0]
	}
	gaweBolonganH(p,t,tx=0,ty=0){
	let nArr = [],j
    // 1. Logika penentuan jumlah untu (j) nggo soko nggonmu Master
    if (this.jointer == 0) {j = p < 51 ? 1 : p < 101 ? 2 : p < 201 ? 3 : p < 301 ? 4 : p < 401 ? 5 : 6;
    }else{ j = this.jointer; }
	j+=1
    let k = this.k; // Kerf
    let d = p / (j * 2 - 1);

	let kotak = [k/2,0,d-k/2,0,d-k/2,t,k/2,t,k/2,0].fixed(3)
	let path = []
    for (let i = 0; i < j-1	; i++) {
		path.push(
			kotak.transX((i * 2 + 1) * d)
			.transX(tx)
			.transY(ty)
		)}
		return path
	}
	gaweBolonganV(p,t,tx=0,ty=0){
	let nArr = [],j
    // 1. Logika penentuan jumlah untu (j) nggo soko nggonmu Master
    if (this.jointer == 0) {
        j = p < 51 ? 1 : p < 101 ? 2 : p < 201 ? 3 : p < 301 ? 4 : p < 401 ? 5 : 6;
    }else{ j = this.jointer; }
	j+=1
    let k = this.k; // Kerf
    let d = p / (j * 2 - 1);

	let kotak = [0,k/2,t,k/2,t,d-k/2,0,d-k/2,0,k/2]

	let path = []
    for (let i = 0; i < j-1; i++) {
		path.push(kotak
			.transY((i * 2+1) * d)
			.transX(tx)
			.transY(ty))
		}
		return path
	}
	gaweBolonganKotak(p,l,tx=0,ty=0){
		let d = "",tb = this.tb
			,h = this.gaweBolonganH(p,tb,tx,ty+tb)
			,v = this.gaweBolonganV(l,tb,tx-tb,ty)
			,b = this.gaweBolonganH(p,tb,tx,ty-tb)
			,r = this.gaweBolonganV(l,tb,tx+tb,ty)

			h.map(c=>d += `M ${c.join(" ")}`)
			v.map(c=>d += `M ${c.transX(p-tb).join(" ")}`)
			b.map(c=>d += `M ${c.transY(l-tb).join(" ")}`)
			r.map(c=>d += `M ${c.transX().join(" ")}`)

		return d
	}
	gaweLabel(txt,p=[0,0], tH= 1, sps=1){
		return textSingleLine(".textLabels",txt,p, tH, sps).attr({
			stroke:"black"
			,"stroke-width":1
		})

		.to(canvas.elmLayerAktif)
	}
	GaweKotakNester(){
	return
	let c 		= canvas
	let bb 		= new BoxPoints(canvas.elmLayerAktif)//box Acuan
		_("rect#boxNester").to(c.elmForTool)
			.attr(["x","y"],bb.pMin)
			.attr(["width","height"],bb.pDist)
			.attr("stroke","magenta")
			.attr("stroke-width",2)
			.attr("fill","transparent")

	let posThumb = [bb.pMax[0]+5,bb.pMax[1]+5]
	new dPath().M0(posThumb	)
		.bintang(4,15,50*0.3876521/4,posThumb[0],posThumb[1])
	    .createElm("#boxNesterThumb",'Magenta',2,'magenta')
		.to(c.elmForTool)
}

	simpan(type = "svg"){
	generateKothak()
	let curentZoom = canvas.zoom
	canvas.zoomTo(100)
	var bb = canvas.elmLayerAktif.getBBox()
	canvas.elmLayerAktif.translate(-bb.x,-bb.y)
	let nulis = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Creator: Doaa Joko Box-->
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${bb.width}" height="${bb.height}" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 ${bb.width} ${bb.height}"
xmlns:xlink="http://www.w3.org/1999/xlink">

  <metadata>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dc="http://purl.org/dc/elements/1.1/"
             xmlns:cc="http://creativecommons.org/ns#">
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title>JokoBox Laser Pattern</dc:title>
        <dc:creator>
          <cc:Agent><dc:title>Joko Kuncoro - Seniman Presisi</dc:title></cc:Agent>
        </dc:creator>
        <dc:date>2015-${new Date().getFullYear()}</dc:date>
        <dc:rights>
          <cc:Agent><dc:title>${new Date().getFullYear()}. All Rights Reserved.</dc:title></cc:Agent>
        </dc:rights>
      </cc:Work>
    </rdf:RDF>
  </metadata>`

  	let arrElms = _elms("g.layerAktif *")
    arrElms.forEach(elm => {
		let elmToGen = elm.cloneNode(true)
		const dValue = elmToGen.getAttribute('d');
    if (!dValue || dValue.trim() === "") {elmToGen.remove();}
	else{
		// Daftar atribut yang BOLEH tetap ada (Whitelist)
    const allowedAttributes = [
        'd', 'points', 'x', 'y', 'x1', 'y1', 'x2', 'y2',
        'cx', 'cy', 'r', 'rx', 'ry', 'width', 'height',
        'stroke', 'stroke-width', 'fill', 'opacity'//, 'transform'tiperlu sudah klir
    ];

    // Ambil semua atribut yang menempel pada elemen sekarang
    const attributes = [...elmToGen.attributes];

    for (let att of attributes) {
        if (!allowedAttributes.includes(att.name)) {
            elmToGen.removeAttribute(att.name);
        }
    }
    }
	nulis += elmToGen.outerHTML +"\n"
	elmToGen.remove()
	});
	elmToGen.attr("stroke","#FF0000")//warna Merah/Potong
	elmToGen.attr("stroke","##0000FF")//warna Biru/Gores
	elmToGen.attr("stroke","#000000")//warna Hitam/Grafir
	elmToGen.attr("stroke","#00FF00")//warna Hijau/potong kedua
	nulis += "</svg>"
	let nameBox = _id("NameForBox").value
	nameBox = 	nameBox == "" ? `box ${boxE.p}x${boxE.l}x${boxE.t}`:nameBox;
	simpanFile ( + '-JokoBox', '.svg'
		,nulis
		.replaceAll("></path>", "/>\n")
		.replaceAll("><g", ">\n\n<g")
		.replaceAll("></g>", ">\n</g>")
		.replaceAll("><path", ">\n<path")
		)
	canvas.zoomTo(curentZoom)

	}
	update(){
		let gap = this.gap ,p = this.p,l=this.l,t=this.t,tb = this.tb,nE= this.nElm

		HTMLremove(".polaEditing,.textLabels,#boxNester")
		canvas.zoomTo(100)
		let pD 		= this.gaweDasaran()
			, pS 	= this.gaweSampingan()
			, pN 	= this.gaweNgarepan()
			, pba 	= pD
			, pka 	= pS.transX(p+gap).fixed(3)
			, pki 	= pS.scale([-1,1]).transX(-t-gap).fixed(3)
			, pmb 	= pN.scale([1,-1]).transY(-t -gap).fixed(3)
			, png 	= pN.transY(l+gap).fixed(3)
			, ptt 	= pD.transX(p + t + gap*2).fixed(3)

		let base 	= nE("#BasePlate").attr("d","M " + pba.join(" "))
			, right	= nE("#rightSide").attr("d","M " + pka.join(" "))
			, left 	= nE("#leftSide").attr("d","M " + pki.join(" "))
			, back 	= nE("#backPanel").attr("d","M " + pmb.join(" "))
			, front = nE("#frontPanel").attr("d","M " + png.join(" "))


		if(this.lidType =="flat" ){
			this.nElm("").attr("d","M " + ptt.join(" "))
		}
		else if(this.lidType =="Removable" ){
		let tt 		= this.ttp
			,tx 	= p+t+tt+gap+gap+gap
			,pS 	= this.gaweSampinganTtp().transX(tx+gap).fixed(3)
			,pka 	= pS.transX(p+gap).fixed(3)
			,pki 	= pS.transX(-tt).scale([-1,1]).fixed(3)
			,pN 	= this.gaweNgarepanTt().transX(tx+gap)
			,pmb 	= this.gaweNgarepanTt().scale([1,-1],[0,0]).transY(-gap).transX(tx+gap+gap-tt/2).fixed(3)
			,pD 	= this.gaweDasaranTt().transX(tx+gap+gap-tt/2)
			,j  	= p / 5
			,pTutup	= []

			nE(".lidDepth").attr("d","M " + pki.join(" "))
			nE("").attr("d",
				this.gaweBolonganKotak(p,l,tx+gap+gap-tt/2)
				+ " M "+ pD.join(" ")
			)
			nE(".lidDepth").attr("d","M " + pka.join(" "))
			nE(".lidDepth").attr("d","M " + pN.transY(l+gap).join(" "))
			nE(".lidDepth").attr("d","M " + pmb.transY().join(" "))
		}
		else if(this.lidType =="hinged" ){
			this.elmTutupe.attr("d","M " + pD.join(" "))
			.translate(this.p+this.t,0)
		}
		else {
			// this.elmTutupe.attr("d","M  -1 -1")
		}

		//canvas.elm.zoomTo(this.elmGropKabeh)
		let tH = 0.8
			,sps = 1
			,gl = this.gaweLabel

		if(this.isAutoNest){optmalayout(gap)}
		else{
			// gl("BASE",[this.p/2, 10],tH,sps)
			// gl("RiGHT",[this.p+gap+this.t/2, 10],tH,sps)
			// gl("LEFT",[-gap -this.t/2, 10],tH,sps)
			// gl("TOP",[this.p/2,-gap -this.t/2],tH,sps)
			// gl("BOTTOM",[this.p/2, gap+this.l+10],tH,sps)
		}
		if(this.isAutoFit)canvas.zoomToFit()
		canvas.panToZeroCanvas()
		let W = window.innerWidth, H = window.innerHeight
		canvas.elmTop.add(
			gl(`BOX ${p}x${l}x${t} `,[W/2, H-70],3,2).attr("stroke","blue")
			)

		if(this.isAutoNest){this.GaweKotakNester()}
		}
}
boxE = new boxPuzle(dataBox)
function refreshJokobox() {
	dataBox.inputsizeFor = _id("inputSizeFor").checked;
    dataBox.thickness = parseFloat(_id("inputThickness").value)||3;
	let plus = _id("inputSizeFor").checked ? dataBox.thickness : 0

    dataBox.width = parseFloat(_id("inputWidth").value)+plus || 1;
    dataBox.height = parseFloat(_id("inputHeight").value)+plus || 1;
    dataBox.depth = parseFloat(_id("inputDepth").value)+plus || 1;
	dataBox.gap =parseFloat(_id("inputPart_Spacing").value) || 0;
    dataBox.kerf = _id("inputKerf").value  || 0;
    dataBox.jointer = _id("Jointer").value || 3;
	dataBox.lidType = _id("lidType").value || "none";
	dataBox.isAutoNest = _id("inputAuto_Nest").checked || false;
	dataBox.isAutoFit = _id("inputFit_Screen").checked || false;
	//dataBox.isAutoFit = false  || false;

	_id("inputSizeFor").blur()
	_id("inputAuto_Nest").blur()
    boxE.updateData(dataBox);
    boxE.update();
}
refreshJokobox()
    _id("inputWidth").on("input",refreshJokobox)
    _id("inputHeight").on("input",refreshJokobox);
    _id("inputDepth").on("input",refreshJokobox);
    _id("inputThickness").on("input",refreshJokobox);
    _id("inputKerf").on("input",refreshJokobox);
	_id("inputSizeFor").on("change",refreshJokobox);
	_id("inputAuto_Nest").on("change",refreshJokobox);
	_id("inputFit_Screen").on("change",refreshJokobox)
    _id("Jointer").on("input",refreshJokobox);
    _id("lidType").on("input",refreshJokobox);
    _id("Jointer").on("input",refreshJokobox);
    _id("inputPart_Spacing").on("input",refreshJokobox);

chekLgl = function(){
	linkE = window.location.href
	Documan
}

	// _id("inputWidthRange").on("input",(e)=>{
		// _id("inputWidth").value = e.target.value;
		// refreshJokobox()
		// })

    // _id("inputHeightRange").on("input",refreshJokobox);
    // _id("inputDepthRange").on("input",refreshJokobox);
    // _id("inputThicknessRange").on("input",refreshJokobox);
    // _id("inputKerfRange").on("input",refreshJokobox);

	_id('zoomIndikator').on("input",(e)=>{
		let pC = parseFloat(e.currentTarget.value)
		canvas.zoomTo(pC)
	}
);



FAB = _("div#FAB"
			,_("div.tombol",_("i.ikon.simpan-orange"))
			,_("ul.pilihanTypeDownloas"
				,_("li",_("i.ikon.fileSVG"),"SVG (.svg)").on("click",boxE.simpan)
				,_("li",_("i.ikon.file"),"GCode(.nc)"
					,_("i"," (next feature)")._style("color","yellow")
					)
				,_("li",_("i.ikon.file"),"DXF (.dxf)"
					,_("i"," (next feature)")._style("color","yellow")
					)
				,_("li",_("i.ikon.fileText"),"PDF (.pdf)"
					,_("i"," (next feature)")._style("color","yellow")
					)
				)
	,_("style",`
#FAB {
    position: fixed;
    bottom: 16px;
    left: var(--width-sidnav);
    z-index: 10000;
    display: block;
	}
#FAB .tombol {
    width: 52px;
    height: 52px;
    background: #333;
    padding: 6px;
    border-radius: 50%;
    border: 2px solid orange;
    box-shadow: 8px 8px 8px rgb(0,0,0,0.3);}
#FAB .tombol>.ikon {width: 36px;height: 36px;}

#FAB:hover .pilihanTypeDownloas{
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
}
#FAB .pilihanTypeDownloas{
	display: block;
	opacity: 0;
    pointer-events: none; /* Bèn ora bisa diklik pas mumpet */
    transform: translateY(10px);
    transition: all 0.3s ease;
    position: absolute;
    bottom: 0;
    padding-bottom: 50px;
    margin-left: 20px;
	Width:var(--width-sidnav)
}
#FAB .pilihanTypeDownloas>li {
    border-left: 6px solid orange;
    padding: 8px 16px 8px 4px;
    background: #555;
    margin: 4px  0;
    color: #fff;
	cursor:pointer
}

#FAB .pilihanTypeDownloas>li:Hover{
    background: #000;
	transition:0.2s
    }

#FAB .pilihanTypeDownloas>li>.ikon {
    margin-right: 16px;
}`)).to(document.body)

{var hs = hotkey.shortcut
hs["F2"]=()=>{
	canvas.printah = "zoomShoot";
	document.body.style.cursor = 'zoom-in'
	}
hs["a"]=canvas.zoomToAll
hs["s"]=()=>{_id("inputAuto_Nest").click()}
hs["d"]=canvas.panToZeroCanvas
hs["f"]=()=>{
	canvas.fullScrren = !canvas.fullScrren
	if(canvas.fullScrren){
		HTMLhide(".sidenav,.topnav")
		_id("FAB")._style("left","16px")
		_id("toolBarPreview")._style("width","150px");
	}
	else {
		HTMLshow(".sidenav,.topnav")
		_id("FAB").style.removeProperty("left")
		_id("toolBarPreview")._style("width","calc(100% - var(--width-sidnav))");
	}

}
}
class PanelSideNav{
	constructor(title = ""){
		this.elm = _("div.panel#panel_"+"labels_Position"
						,_("div.title",title).on("click",function(e){
						let elmnt = e.currentTarget.parentElement
						if (elmnt.style.maxHeight == "32px" ){
							elmnt.style.maxHeight = elmnt.scrollHeight +"px"
							}
						else{elmnt.style.maxHeight = "32px"}
				})
		)
		._style("overFlow:hidden")
		._style("transition: 0.2s")
	}
}
const createPanel = function(title = "judul Panel"){
	this.elm = _("div.panel#panel_"+"labels_Position"
	,_("div.title",title)
	.on("click",function(e){
			let elmnt = e.currentTarget.parentElement
			if (elmnt.style.maxHeight == "32px" ){
				elmnt.style.maxHeight = elmnt.scrollHeight +"px"
				}
			else{elmnt.style.maxHeight = "32px"}
	})
	,this.isi = _("div.isi"))
	._style({
	"overFlow":"hidden"
	,"transition": "0.2s"})
	return this
}
//Don't you cry now, what is done is done now
//What's gone, let it be gone