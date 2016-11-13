// Compiled by ClojureScript 1.9.227 {}
goog.provide('roiEditor.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('cljs_react_material_ui.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('cljs_react_material_ui.icons');
goog.require('reagent.core');
goog.require('re_frame.core');
if(typeof roiEditor.core.time_updater !== 'undefined'){
} else {
roiEditor.core.time_updater = setInterval((function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739),(new Date())], null));
}),(1000));
}
roiEditor.core.pref = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overrideCenter","overrideCenter",278546915),(0),new cljs.core.Keyword(null,"overrideWidth","overrideWidth",-1181238128),(0),new cljs.core.Keyword(null,"windowOverride","windowOverride",1332455118),false], null);
roiEditor.core.series = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rescaleIntercept","rescaleIntercept",-720351744),new cljs.core.Keyword(null,"windowWidth","windowWidth",-1238753470),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"rescaleSlope","rescaleSlope",2022324330),new cljs.core.Keyword(null,"pixelRepresentation","pixelRepresentation",-981128726),new cljs.core.Keyword(null,"pixelSpacing","pixelSpacing",-257453043),new cljs.core.Keyword(null,"bitsStored","bitsStored",-1743050866),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"numberOfImages","numberOfImages",-397971405),new cljs.core.Keyword(null,"windowCenter","windowCenter",-695727845),new cljs.core.Keyword(null,"sliceThickness","sliceThickness",1902740029)],["-1024","00400\\00400",(512),"1","1","0.703125\\0.703125","16",(512),(145),"00040\\00040","1.25"]);
roiEditor.core.base_URL = "1.2.826.0.1.3680043.8.420.29267207592271555902603369361594637742/series/1.2.826.0.1.3680043.8.420.13029244630897359628709378005929429184/images/";
roiEditor.core.lstPngs = cljs.core.PersistentVector.fromArray(["1.2.826.0.1.3680043.8.420.16553737991475343282684803816940891307.png","1.2.826.0.1.3680043.8.420.28861109596090543877254334913500645343.png","1.2.826.0.1.3680043.8.420.92281134123008251785793891126452925630.png","1.2.826.0.1.3680043.8.420.95418694341377556084502693525860526304.png","1.2.826.0.1.3680043.8.420.69336276654178614372303317802130256763.png","1.2.826.0.1.3680043.8.420.33118142859754977170296252077772049894.png","1.2.826.0.1.3680043.8.420.16030464486410413234834494170091728765.png","1.2.826.0.1.3680043.8.420.27351397110527101639742457467496693527.png","1.2.826.0.1.3680043.8.420.73638772490717402537609228835290975047.png","1.2.826.0.1.3680043.8.420.13713822034162080800818081832061855796.png","1.2.826.0.1.3680043.8.420.30031525206349246930333901742473812321.png","1.2.826.0.1.3680043.8.420.11268468743527426844992342917158948993.png","1.2.826.0.1.3680043.8.420.29551532304221838205412664984408553220.png","1.2.826.0.1.3680043.8.420.46512340772811126708095721265683085057.png","1.2.826.0.1.3680043.8.420.70406582294974920054340231142326278563.png","1.2.826.0.1.3680043.8.420.23270265281944356337601773604512168388.png","1.2.826.0.1.3680043.8.420.22915313681053598418791323537011397850.png","1.2.826.0.1.3680043.8.420.12104883052389024268447088977320065477.png","1.2.826.0.1.3680043.8.420.26947794936797081668505216579674359329.png","1.2.826.0.1.3680043.8.420.40527429940865208838588592111667988278.png","1.2.826.0.1.3680043.8.420.29558685463726005330677318315980506339.png","1.2.826.0.1.3680043.8.420.22371060708357308689958995558081136261.png","1.2.826.0.1.3680043.8.420.32837287199671026450949731408129999262.png","1.2.826.0.1.3680043.8.420.28443934396521767295900043022580292344.png","1.2.826.0.1.3680043.8.420.13881751664202690633483892306760334821.png","1.2.826.0.1.3680043.8.420.89582242671750029523983773332351615256.png","1.2.826.0.1.3680043.8.420.30320030276588513829308461090972767967.png","1.2.826.0.1.3680043.8.420.68906203166724213143383896268008712272.png","1.2.826.0.1.3680043.8.420.46499646352487653356278183906983662324.png","1.2.826.0.1.3680043.8.420.20500855770053012383483706598907978125.png","1.2.826.0.1.3680043.8.420.29959599193046020805954121779902208822.png","1.2.826.0.1.3680043.8.420.32540377588402987845341052577333094030.png","1.2.826.0.1.3680043.8.420.25722038773225404535134094011084273602.png","1.2.826.0.1.3680043.8.420.30690205964978385439072373723385590648.png","1.2.826.0.1.3680043.8.420.32414468305913097442467214130426119517.png","1.2.826.0.1.3680043.8.420.31379096286186342549344682660613630312.png","1.2.826.0.1.3680043.8.420.65197990274162997100913673681512651287.png","1.2.826.0.1.3680043.8.420.27486983700272590136079136691427062619.png","1.2.826.0.1.3680043.8.420.15660174628675259944180326362148895928.png","1.2.826.0.1.3680043.8.420.33640137026986344682230235892124332090.png","1.2.826.0.1.3680043.8.420.33727957740162863432921287896145289385.png","1.2.826.0.1.3680043.8.420.17021898611603086333930407228790046975.png","1.2.826.0.1.3680043.8.420.37495522045529822564706514239904666082.png","1.2.826.0.1.3680043.8.420.79017463112085688674153480462964426834.png","1.2.826.0.1.3680043.8.420.31986792252857074904221675944649703962.png","1.2.826.0.1.3680043.8.420.16536147987224798036765098021862441984.png","1.2.826.0.1.3680043.8.420.12532738115457417541515185689607397453.png","1.2.826.0.1.3680043.8.420.32419489757742138837394046658551878069.png","1.2.826.0.1.3680043.8.420.14796455402546925221450720842726244052.png","1.2.826.0.1.3680043.8.420.38930447352223788651961242735051541362.png","1.2.826.0.1.3680043.8.420.23097050328931457260230097455578301005.png","1.2.826.0.1.3680043.8.420.28238920397199277876489712910375210705.png","1.2.826.0.1.3680043.8.420.12793702795215197193600862416202894367.png","1.2.826.0.1.3680043.8.420.16293903293657431145114351725808875925.png","1.2.826.0.1.3680043.8.420.24482723044054421106411956800648541664.png","1.2.826.0.1.3680043.8.420.11614358581095503274681067134738240187.png","1.2.826.0.1.3680043.8.420.30378322543736087149597517761914661084.png","1.2.826.0.1.3680043.8.420.32871741308339175317235055399198610633.png","1.2.826.0.1.3680043.8.420.66437012267632604970025962662397124248.png","1.2.826.0.1.3680043.8.420.33489905624951750654449830418099468913.png","1.2.826.0.1.3680043.8.420.30285863645050639092703431472144821188.png","1.2.826.0.1.3680043.8.420.30011966631502980452940166843246828438.png","1.2.826.0.1.3680043.8.420.26795495954472708636270225964560776012.png","1.2.826.0.1.3680043.8.420.33595447154785545252381749189255496650.png","1.2.826.0.1.3680043.8.420.74247327849666218604729204537024543882.png","1.2.826.0.1.3680043.8.420.70208814779988168566575366958110867358.png","1.2.826.0.1.3680043.8.420.28822163156008332215577019361338396285.png","1.2.826.0.1.3680043.8.420.24910810878877211230631409120148224773.png","1.2.826.0.1.3680043.8.420.68532117716993406711486043397299040587.png","1.2.826.0.1.3680043.8.420.23253249761639110725935254975375483378.png","1.2.826.0.1.3680043.8.420.19493005327906359440203291840627564980.png","1.2.826.0.1.3680043.8.420.19334981854685146037883505860186956077.png","1.2.826.0.1.3680043.8.420.30988896448954341633769374510355316242.png","1.2.826.0.1.3680043.8.420.17847256856448597241576078036753787778.png","1.2.826.0.1.3680043.8.420.22667289907541038365002676709165799500.png","1.2.826.0.1.3680043.8.420.30126316220061260270131502477767200684.png","1.2.826.0.1.3680043.8.420.43337735338427527626557974398959368667.png","1.2.826.0.1.3680043.8.420.33406910006825179564394954463853869128.png","1.2.826.0.1.3680043.8.420.32200387510961024751621381738031244459.png","1.2.826.0.1.3680043.8.420.20537641044797791420695886840923260598.png","1.2.826.0.1.3680043.8.420.35680920724704352043773219130762632398.png","1.2.826.0.1.3680043.8.420.11881655835584151855919753546342924685.png","1.2.826.0.1.3680043.8.420.25871830256012963123978691852034471891.png","1.2.826.0.1.3680043.8.420.17126207244724243966926506400777622427.png","1.2.826.0.1.3680043.8.420.14883410179536413830149951654515367919.png","1.2.826.0.1.3680043.8.420.17719484370174605590529651971985507765.png","1.2.826.0.1.3680043.8.420.39255509408078958174856487579001083715.png","1.2.826.0.1.3680043.8.420.28395341994085646125754185462750549448.png","1.2.826.0.1.3680043.8.420.18772124287416289712284781693451983581.png","1.2.826.0.1.3680043.8.420.18689588848251310708007231469827908255.png","1.2.826.0.1.3680043.8.420.4556806051523012272044451733650983458.png","1.2.826.0.1.3680043.8.420.12742325897655935532961649984939833117.png","1.2.826.0.1.3680043.8.420.29190838650409576784164852249440209151.png","1.2.826.0.1.3680043.8.420.22751419168770843231624801120335512354.png","1.2.826.0.1.3680043.8.420.16194871272594403349323652402805668348.png","1.2.826.0.1.3680043.8.420.23765937055853598373572600243639782495.png","1.2.826.0.1.3680043.8.420.29026083866656711119632048147178071119.png","1.2.826.0.1.3680043.8.420.54863039770491981821780629546151407275.png","1.2.826.0.1.3680043.8.420.32894091809267436106846002959204597452.png","1.2.826.0.1.3680043.8.420.32883586033702273842700270481934901211.png","1.2.826.0.1.3680043.8.420.16407750155436184186373462186468487675.png","1.2.826.0.1.3680043.8.420.86731584823190804742449485842450128118.png","1.2.826.0.1.3680043.8.420.11918245677821785458947585104544098541.png","1.2.826.0.1.3680043.8.420.81393130571932871333344414785970159748.png","1.2.826.0.1.3680043.8.420.16678061080860752647280458168657727910.png","1.2.826.0.1.3680043.8.420.33829525983883660835063832293383368812.png","1.2.826.0.1.3680043.8.420.26844404237277175594848359173260125744.png","1.2.826.0.1.3680043.8.420.17149101040386480310671809143468757914.png","1.2.826.0.1.3680043.8.420.30213438018705227728726110362014775680.png","1.2.826.0.1.3680043.8.420.18015475315699186833892201285031718715.png","1.2.826.0.1.3680043.8.420.10644270760634711819696210340323435844.png","1.2.826.0.1.3680043.8.420.25684091020680899363084754821413265951.png","1.2.826.0.1.3680043.8.420.24478155285783435038735160229328308446.png","1.2.826.0.1.3680043.8.420.55486695001931520928174583453072369004.png","1.2.826.0.1.3680043.8.420.32148113456837446391375086056899752182.png","1.2.826.0.1.3680043.8.420.32975078299044444390862939867202238098.png","1.2.826.0.1.3680043.8.420.22217254601106967232450037493973202412.png","1.2.826.0.1.3680043.8.420.17003764697452048632256291746275386178.png","1.2.826.0.1.3680043.8.420.83542011516511383301850512534649099653.png","1.2.826.0.1.3680043.8.420.22362997405673813525870673783830938178.png","1.2.826.0.1.3680043.8.420.31913737696217604675190087135123495432.png","1.2.826.0.1.3680043.8.420.24845571685787506799443619864941724239.png","1.2.826.0.1.3680043.8.420.24306896768631462048194711367215376650.png","1.2.826.0.1.3680043.8.420.18263637052056516536914084758170218972.png","1.2.826.0.1.3680043.8.420.95984815447615635747248367889370987248.png","1.2.826.0.1.3680043.8.420.10139059003368181145184236900601746520.png","1.2.826.0.1.3680043.8.420.26188983091323417856059442362464850905.png","1.2.826.0.1.3680043.8.420.16046616934201200271746111550175967124.png","1.2.826.0.1.3680043.8.420.57481249698913543491600298015207758669.png","1.2.826.0.1.3680043.8.420.23821313924816847020644540303060853476.png","1.2.826.0.1.3680043.8.420.27629151528061233715639281745422806732.png","1.2.826.0.1.3680043.8.420.10299974335922660153201461413780728568.png","1.2.826.0.1.3680043.8.420.22154093534328963686468877082478736455.png","1.2.826.0.1.3680043.8.420.32540904231646286905786027296537173562.png","1.2.826.0.1.3680043.8.420.10182416961272461475470963187925401769.png","1.2.826.0.1.3680043.8.420.32327243320517188989041027789010194926.png","1.2.826.0.1.3680043.8.420.48735739934718154217084800249833250324.png","1.2.826.0.1.3680043.8.420.11901483335539391261258526726402523290.png","1.2.826.0.1.3680043.8.420.20605164337638702696376221453462298284.png","1.2.826.0.1.3680043.8.420.14990776251669146435388038157404459557.png","1.2.826.0.1.3680043.8.420.24278511605311296604352503623326655456.png","1.2.826.0.1.3680043.8.420.31685497780190861865918954284059467235.png","1.2.826.0.1.3680043.8.420.24188938019700070401699010290794317339.png","1.2.826.0.1.3680043.8.420.25262566473088730394743177389226598459.png","1.2.826.0.1.3680043.8.420.32592795188011088359506779691378232430.png"], true);
roiEditor.core.initial_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timer","timer",-1266967739),(new Date()),new cljs.core.Keyword(null,"time-color","time-color",-1916736551),"#f00",new cljs.core.Keyword(null,"series","series",600710694),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prefs","prefs",-1818938470),roiEditor.core.pref,new cljs.core.Keyword(null,"series","series",600710694),roiEditor.core.series,new cljs.core.Keyword(null,"pngs","pngs",14517483),roiEditor.core.lstPngs], null)], null),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"todo-name","todo-name",1338286177),"Test"], null)], null);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return cljs.core.merge.call(null,db,roiEditor.core.initial_state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null)),(function (time_color,p__41110){
var vec__41111 = p__41110;
var _ = cljs.core.nth.call(null,vec__41111,(0),null);
var value = cljs.core.nth.call(null,vec__41111,(1),null);
return value;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__41114){
var vec__41115 = p__41114;
var _ = cljs.core.nth.call(null,vec__41115,(0),null);
var value = cljs.core.nth.call(null,vec__41115,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"timer","timer",-1266967739),value);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return new cljs.core.Keyword(null,"series","series",600710694).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,_){
return new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),(function (db,_){
return new cljs.core.Keyword(null,"time-color","time-color",-1916736551).cljs$core$IFn$_invoke$arity$1(db);
}));
roiEditor.core.load_pics = (function roiEditor$core$load_pics(editor,lstPngs){
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,(function (p1__41118_SHARP_,p2__41119_SHARP_){
return editor.loadPngTexture(p1__41118_SHARP_,[cljs.core.str(roiEditor.core.base_URL),cljs.core.str(p2__41119_SHARP_)].join(''));
}),lstPngs));
});
roiEditor.core.init = (function roiEditor$core$init(cnv,pref,series,pngs){
var canvas = document.querySelector(cnv);
var editor = (((canvas == null))?null:(new br.usp.dilvanLab.roi3DEditor.WebGLViewerImpl(canvas,(0),cljs.core.clj__GT_js.call(null,pref),cljs.core.clj__GT_js.call(null,series))));
if((canvas == null)){
return alert([cljs.core.str("Null canvas: "),cljs.core.str(cnv)].join(''));
} else {
editor.activePlane = br.usp.dilvanLab.roi3DEditor.ALL;

editor.context = (new br.usp.dilvanLab.roi3DEditor.Context(editor));

editor.context.initDrawingHandlers();

return roiEditor.core.load_pics.call(null,editor,pngs);
}
});
roiEditor.core.clock = (function roiEditor$core$clock(){
var time_color = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null));
var timer = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null));
return ((function (time_color,timer){
return (function (){
var time_str = cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,timer).toTimeString()," "));
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,time_color)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),style,time_str], null);
});
;})(time_color,timer))
});
roiEditor.core.color_input = (function roiEditor$core$color_input(){
var time_color = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null));
return ((function (time_color){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Time color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,time_color),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (time_color){
return (function (p1__41120_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551),p1__41120_SHARP_.target.value], null));
});})(time_color))
], null)], null)], null);
});
;})(time_color))
});
roiEditor.core.filterOptions = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),(1),new cljs.core.Keyword(null,"text","text",-1790561697),"All Broadcasts"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),(2),new cljs.core.Keyword(null,"text","text",-1790561697),"All Voice"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),(3),new cljs.core.Keyword(null,"text","text",-1790561697),"All Text"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),(4),new cljs.core.Keyword(null,"text","text",-1790561697),"Complete Voice"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),(5),new cljs.core.Keyword(null,"text","text",-1790561697),"Complete Text"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),(6),new cljs.core.Keyword(null,"text","text",-1790561697),"Active Voice"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),(7),new cljs.core.Keyword(null,"text","text",-1790561697),"Active Text"], null)], null);
roiEditor.core.iconMenuItems = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),(1),new cljs.core.Keyword(null,"text","text",-1790561697),"Download"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),(2),new cljs.core.Keyword(null,"text","text",-1790561697),"More Info"], null)], null);
roiEditor.core.simple_example = (function roiEditor$core$simple_example(){
var series = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-color","text-color",1728708298),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"blue800","blue800",-847606291))], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.app_bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"ePAD",new cljs.core.Keyword(null,"icon-class-name-right","icon-class-name-right",1415991912),"muidocs-icon-navigation-expand-more"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.toolbar,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.toolbar_group,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.toolbar_title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Tools"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),cljs_react_material_ui.icons.action_android.call(null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"12px 0px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"15px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#a4c639",new cljs.core.Keyword(null,"hover-color","hover-color",663962326),"#8AA62F",new cljs.core.Keyword(null,"icon","icon",1679606541),cljs_react_material_ui.icons.action_android.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#FFFFFF"], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),(12),new cljs.core.Keyword(null,"min-width","min-width",1926193728),"15px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.font_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"muidocs-icon-custom-github",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"1px"], null)], null)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.font_icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"muidocs-icon-custom-sort",new cljs.core.Keyword(null,"hover-color","hover-color",663962326),"#8AA62F",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ff0000",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 5px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 5px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.font_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"muidocs-icon-custom-github"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.raised_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Create Broadcast",new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"width","width",-384071477),"10px",new cljs.core.Keyword(null,"button-style","button-style",314949943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"30px"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.paper,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"epad-canvas",new cljs.core.Keyword(null,"width","width",-384071477),"512",new cljs.core.Keyword(null,"height","height",1025178622),"512"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello world, it is now"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [roiEditor.core.clock], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [roiEditor.core.color_input], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-color","text-color",1728708298),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"blue200","blue200",650511877))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.raised_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Blue button"], null)], null)], null),cljs_react_material_ui.icons.action_home.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"grey600","grey600",-289870603))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.raised_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Click me",new cljs.core.Keyword(null,"icon","icon",1679606541),cljs_react_material_ui.icons.social_group.call(null),new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),((function (series){
return (function (){
return roiEditor.core.init.call(null,"#epad-canvas",new cljs.core.Keyword(null,"prefs","prefs",-1818938470).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,series))),new cljs.core.Keyword(null,"series","series",600710694).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,series))),new cljs.core.Keyword(null,"pngs","pngs",14517483).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,series))));
});})(series))
], null)], null)], null)], null)], null);
});
roiEditor.core.run = (function roiEditor$core$run(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [roiEditor.core.simple_example], null),document.getElementById("app"));
});
goog.exportSymbol('roiEditor.core.run', roiEditor.core.run);

//# sourceMappingURL=core.js.map?rel=1479065884461