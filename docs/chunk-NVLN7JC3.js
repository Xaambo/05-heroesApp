import{A as L,B as Ge,C as ze,D as Je,E as Ke,F as Qe,G as We,H as Xe,I as Ye,J as Ze,K as et,L as T,M as tt,N as it,O as re,P as rt,Q as ot,R as nt,S as at,T as mt,U as st,V as lt,W as pt,a as K,b as S,c as ke,d as Q,e as W,f as D,g as X,h as Y,i as Oe,j as Le,k as I,l as Te,m as Re,n as Be,o as Ae,p as je,q as Ve,r as Z,s as $e,t as Ue,u as k,v as ee,w as O,x as te,y as qe,z as ie}from"./chunk-3FPWS7NC.js";import{$b as De,Ab as Ee,Ca as g,Cb as we,Db as Pe,Eb as Fe,G as A,Ga as s,Gb as Ne,M as Se,Ma as o,N as U,Na as i,Oa as l,P as Ie,Qa as H,T as v,Ta as d,U as C,Va as b,_b as G,ac as z,bc as J,cb as E,cc as ve,db as n,eb as u,fb as h,hb as xe,ib as he,j as ue,jb as y,kb as w,l as _e,lb as He,ma as F,mb as ye,na as a,oa as c,s as fe,u as ge,va as f,wa as q,ya as Me,yb as _,zb as N}from"./chunk-SYKWBY7V.js";var vt=()=>({width:"250px"});function Ct(r,t){if(r&1){let e=H();o(0,"mat-list-item",9),d("click",function(){v(e),b();let p=E(2);return C(p.toggle())}),o(1,"mat-icon",10),n(2),i(),n(3),i()}if(r&2){let e=t.$implicit;s("routerLink",e.url),a(2),u(e.icon),a(),h(" ",e.label," ")}}var oe=class r{sidebarItems=[{label:"Listado",icon:"label",url:"./list"},{label:"A\xF1adir",icon:"add",url:"./new-hero"},{label:"Buscar",icon:"search",url:"./search"}];static \u0275fac=function(e){return new(e||r)};static \u0275cmp=f({type:r,selectors:[["app-layout-page"]],standalone:!1,decls:21,vars:3,consts:[["sidenav",""],["fullscreen",""],["mode","push",3,"ngStyle"],[1,"spacer"],["mat-icon-button","",3,"click"],[3,"routerLink","click",4,"ngFor","ngForOf"],["color","primary"],["mat-button",""],[1,"container","p-2"],[3,"click","routerLink"],["matListItemIcon",""]],template:function(e,m){if(e&1){let p=H();o(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"mat-toolbar")(4,"span"),n(5,"Men\xFA"),i(),l(6,"span",3),o(7,"button",4),d("click",function(){v(p);let B=E(2);return C(B.toggle())}),o(8,"mat-icon"),n(9,"menu"),i()()(),o(10,"mat-nav-list"),g(11,Ct,4,3,"mat-list-item",5),i()(),o(12,"mat-toolbar",6)(13,"button",4),d("click",function(){v(p);let B=E(2);return C(B.toggle())}),o(14,"mat-icon"),n(15,"menu"),i()(),l(16,"span",3),o(17,"button",7),n(18," Logout "),i()(),o(19,"div",8),l(20,"router-outlet"),i()()}e&2&&(a(),s("ngStyle",xe(2,vt)),a(10),s("ngForOf",m.sidebarItems))},dependencies:[_,Ee,De,J,S,ke,D,rt,re,tt,at,mt,lt],encapsulation:2})};var ae=class r{constructor(t,e){this.dialogRef=t;this.data=e}onNoClick(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}static \u0275fac=function(e){return new(e||r)(c(Je),c(Ke))};static \u0275cmp=f({type:r,selectors:[["app-confirm-dialog"]],standalone:!1,decls:11,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","",3,"click"],[1,"spacer"],["mat-button","","color","primary","cdkFocusInitial","",3,"click"]],template:function(e,m){e&1&&(o(0,"h1",0),n(1,"\xBFEst\xE1 seguro?"),i(),o(2,"div",1)(3,"p"),n(4),i()(),o(5,"div",2)(6,"button",3),d("click",function(){return m.onNoClick()}),n(7,"No Thanks"),i(),l(8,"span",4),o(9,"button",5),d("click",function(){return m.onConfirm()}),n(10,"Ok"),i()()),e&2&&(a(4),h("Este proceso no es reversible, est\xE1 a punto de elimiar a ",m.data.superhero,""))},dependencies:[S,We,Ye,Xe],encapsulation:2})};var dt={baseUrl:"https://xambo-lodon.com/api"};var x=class r{constructor(t){this.http=t}baseUrl=dt.baseUrl;getHeroes(){return this.http.get(`${this.baseUrl}/heroes`)}getHeroById(t){return this.http.get(`${this.baseUrl}/heroes/${t}`).pipe(ge(e=>ue(void 0)))}getSuggestions(t){return this.http.get(`${this.baseUrl}/heroes?q=${t}&_limit=6`)}addHero(t){return this.http.post(`${this.baseUrl}/heroes`,t)}updateHero(t){if(!t.id)throw Error("Hero id is required");return this.http.patch(`${this.baseUrl}/heroes/${t.id}`,t)}deleteHeroById(t){return this.http.delete(`${this.baseUrl}/heroes/${t}`).pipe(_e(e=>!0),ge(e=>ue(!1)))}static \u0275fac=function(e){return new(e||r)(Ie(Ne))};static \u0275prov=Se({token:r,factory:r.\u0275fac,providedIn:"root"})};var P=class r{transform(t){return!t.id&&!t.alt_img?"no-image.png":t.alt_img?t.alt_img:`heroes/${t.id}.jpg`}static \u0275fac=function(e){return new(e||r)};static \u0275pipe=Me({name:"heroImage",type:r,pure:!0,standalone:!1})};function xt(r,t){if(r&1&&(o(0,"small"),n(1),i()),r&2){let e=b();a(),u(e.currentHero.superhero)}}function Ht(r,t){if(r&1&&(o(0,"mat-option",17),n(1),i()),r&2){let e=t.$implicit;s("value",e.id),a(),h(" ",e.desc," ")}}function yt(r,t){if(r&1){let e=H();o(0,"button",18),d("click",function(){v(e);let p=b();return C(p.onDeleteHero())}),n(1," Borrar "),i()}}var V=class r{constructor(t,e,m,p,$){this.heroesService=t;this.activatedRoute=e;this.router=m;this.snackbar=p;this.dialog=$}heroForm=new Le({id:new I(""),superhero:new I("",{nonNullable:!0}),publisher:new I("DC Comics"),alter_ego:new I(""),first_appearance:new I(""),characters:new I(""),alt_img:new I("")});publishers=[{id:"DC Comics",desc:"DC - Comics"},{id:"Marvel Comics",desc:"Marvel - Comics"}];get currentHero(){return this.heroForm.value}ngOnInit(){this.router.url.includes("edit")&&this.activatedRoute.params.pipe(A(({id:t})=>this.heroesService.getHeroById(t))).subscribe(t=>{if(!t)return this.router.navigateByUrl("/");this.heroForm.reset(t)})}onSubmit(){if(!this.heroForm.invalid){if(this.currentHero.id){this.heroesService.updateHero(this.currentHero).subscribe(t=>{this.showSnackbar(`${t.superhero} updated!`)});return}this.heroesService.addHero(this.currentHero).subscribe(t=>{this.router.navigate(["/heroes/edit",t.id]),this.showSnackbar(`${t.superhero} created!`)})}}onDeleteHero(){if(!this.currentHero.id)throw Error("Hero id is required");this.dialog.open(ae,{data:this.heroForm.value}).afterClosed().pipe(fe(e=>e),A(()=>this.heroesService.deleteHeroById(this.currentHero.id)),fe(e=>e)).subscribe(()=>{this.router.navigate(["/heroes"])})}showSnackbar(t){this.snackbar.open(t,"done",{duration:2500})}static \u0275fac=function(e){return new(e||r)(c(x),c(G),c(z),c(st),c(Qe))};static \u0275cmp=f({type:r,selectors:[["app-new-page"]],standalone:!1,decls:45,vars:8,consts:[[4,"ngIf"],[1,"mb-2"],[1,"grid"],[1,"col-12","sm:col-6"],[1,"grid",3,"ngSubmit","formGroup"],["matInput","","type","text","required","","formControlName","superhero"],["matInput","","type","text","required","","formControlName","alter_ego"],[1,"col-12"],["matInput","","type","text","required","","formControlName","first_appearance"],["matInput","","type","text","required","","formControlName","characters"],["formControlName","publisher","required",""],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","text","formControlName","alt_img"],[1,"flex","justify-content-between"],["mat-flat-button","","color","warn",3,"click",4,"ngIf"],["mat-flat-button","","color","primary",3,"click"],["alt","imagen del h\xE9roe","mat-card-image","",3,"src"],[3,"value"],["mat-flat-button","","color","warn",3,"click"]],template:function(e,m){e&1&&(o(0,"h1"),n(1),g(2,xt,2,1,"small",0),i(),l(3,"mat-divider",1),o(4,"div",2)(5,"div",3)(6,"mat-card")(7,"mat-card-content")(8,"form",4),d("ngSubmit",function(){return m.onSubmit()}),o(9,"mat-form-field",3)(10,"mat-label"),n(11,"Super h\xE9roe"),i(),l(12,"input",5),i(),o(13,"mat-form-field",3)(14,"mat-label"),n(15,"Alter ego"),i(),l(16,"input",6),i(),o(17,"mat-form-field",7)(18,"mat-label"),n(19,"Primera aparici\xF3n"),i(),l(20,"input",8),i(),o(21,"mat-form-field",7)(22,"mat-label"),n(23,"Personajes"),i(),l(24,"input",9),i(),o(25,"mat-form-field",7)(26,"mat-label"),n(27,"Creador"),i(),o(28,"mat-select",10),g(29,Ht,2,2,"mat-option",11),i()(),o(30,"mat-form-field",7)(31,"mat-label"),n(32,"Alternative Image"),i(),l(33,"input",12),i()(),o(34,"div",13),g(35,yt,2,0,"button",14),l(36,"span"),o(37,"button",15),d("click",function(){return m.onSubmit()}),o(38,"mat-icon"),n(39,"save"),i(),n(40," Guardar "),i()()()()(),o(41,"div",3)(42,"mat-card"),l(43,"img",16),y(44,"heroImage"),i()()()),e&2&&(a(),h(" ",m.currentHero.id?"Editar":"Agregar"," h\xE9roe "),a(),s("ngIf",m.currentHero.id),a(6),s("formGroup",m.heroForm),a(21),s("ngForOf",m.publishers),a(6),s("ngIf",m.currentHero.id),a(8),s("src",w(44,6,m.currentHero),F))},dependencies:[_,N,Te,X,Y,Oe,je,Be,Ae,K,S,k,O,L,W,Q,D,Z,T,nt,P],encapsulation:2})};function Et(r,t){if(r&1&&(o(0,"mat-option",6),n(1),i()),r&2){let e=t.$implicit;s("value",e),a(),h(" ",e.superhero," ")}}function wt(r,t){if(r&1&&(o(0,"mat-option",7),n(1),i()),r&2){let e=b();a(),h(" No se encontr\xF3 nada con el t\xE9rmino ",e.searchInput.value," ")}}var se=class r{constructor(t){this.heroesService=t}searchInput=new I("");heroes=[];selectedHero;searchHero(){let t=this.searchInput.value||"";this.heroesService.getSuggestions(t).subscribe(e=>this.heroes=e)}onSelectedOption(t){if(!t.option.value){this.selectedHero=void 0;return}let e=t.option.value;this.searchInput.setValue(e.superhero),this.selectedHero=e}static \u0275fac=function(e){return new(e||r)(c(x))};static \u0275cmp=f({type:r,selectors:[["app-search-page"]],standalone:!1,decls:13,vars:7,consts:[["auto","matAutocomplete"],[1,"flex","flex-column","p-2"],["type","text","matInput","",3,"input","formControl","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],[3,"value",4,"ngFor","ngForOf"],["value","",4,"ngIf"],[3,"value"],["value",""]],template:function(e,m){if(e&1){let p=H();o(0,"div",1)(1,"h3"),n(2,"Buscador"),i(),o(3,"mat-form-field")(4,"mat-label"),n(5,"Buscador de h\xE9roes"),i(),o(6,"input",2),d("input",function(){return v(p),C(m.searchHero())}),i(),o(7,"mat-autocomplete",3,0),d("optionSelected",function(B){return v(p),C(m.onSelectedOption(B))}),g(9,Et,2,2,"mat-option",4)(10,wt,2,1,"mat-option",5),i()(),n(11),y(12,"json"),i()}if(e&2){let p=E(8);a(6),s("formControl",m.searchInput)("matAutocomplete",p),a(3),s("ngForOf",m.heroes),a(),s("ngIf",m.heroes.length===0&&m.searchInput.value&&m.searchInput.value.length>0),a(),h(" ",w(12,5,m.selectedHero)," ")}},dependencies:[_,N,X,Y,Re,$e,K,Ue,W,Q,Z,we],encapsulation:2})};var Pt=r=>["/heroes/edit",r],Ft=r=>["/heroes",r];function Nt(r,t){if(r&1&&(o(0,"mat-chip"),n(1),i()),r&2){let e=t.$implicit;a(),h(" ",e," ")}}var le=class r{hero;ngOnInit(){if(!this.hero)throw Error("Hero property is required")}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=f({type:r,selectors:[["heroes-hero-card"]],inputs:{hero:"hero"},standalone:!1,decls:30,vars:19,consts:[["mat-card-image","",3,"src","alt"],[1,"mt-2"],[4,"ngFor","ngForOf"],["mat-button","","mat-raised","","color","primary",3,"routerLink"],[1,"spacer"],["mat-button","","mat-raised","",3,"routerLink"]],template:function(e,m){e&1&&(o(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),n(3),i(),o(4,"mat-card-subtitle"),n(5),i()(),l(6,"img",0),y(7,"heroImage"),o(8,"mat-card-content",1)(9,"h4"),n(10),i(),o(11,"p")(12,"strong"),n(13,"Primera aparici\xF3n"),i(),n(14),l(15,"br"),o(16,"mat-chip-listbox"),g(17,Nt,2,1,"mat-chip",2),y(18,"slice"),i()()(),l(19,"mat-divider"),o(20,"mat-card-actions")(21,"button",3)(22,"mat-icon"),n(23,"edit"),i(),n(24," Editar "),i(),l(25,"span",4),o(26,"button",5)(27,"mat-icon"),n(28,"more_horiz"),i(),n(29," M\xE1s "),i()()()),e&2&&(a(3),u(m.hero.superhero),a(2),u(m.hero.alter_ego),a(),s("src",w(7,9,m.hero),F)("alt",m.hero.superhero),a(4),u(m.hero.publisher),a(4),h(" ",m.hero.first_appearance," "),a(3),s("ngForOf",He(18,11,m.hero.characters.split(","),0,3)),a(4),s("routerLink",he(15,Pt,m.hero.id)),a(5),s("routerLink",he(17,Ft,m.hero.id)))},dependencies:[_,J,S,k,qe,O,ie,L,te,ee,Ge,ze,D,T,Pe,P],encapsulation:2})};function kt(r,t){if(r&1&&(o(0,"div",2),l(1,"heroes-hero-card",3),i()),r&2){let e=t.$implicit;a(),s("hero",e)}}var pe=class r{constructor(t){this.heroesService=t}heroes=[];ngOnInit(){this.heroesService.getHeroes().subscribe(t=>this.heroes=t)}static \u0275fac=function(e){return new(e||r)(c(x))};static \u0275cmp=f({type:r,selectors:[["app-list-page"]],standalone:!1,decls:5,vars:1,consts:[[1,"grid","bm-8","pt-2"],["class","col-12 sm:col-4 md:col-3 xl:col-2",4,"ngFor","ngForOf"],[1,"col-12","sm:col-4","md:col-3","xl:col-2"],[3,"hero"]],template:function(e,m){e&1&&(o(0,"h1"),n(1,"Listado de H\xE9roes"),i(),l(2,"mat-divider"),o(3,"div",0),g(4,kt,2,1,"div",1),i()),e&2&&(a(4),s("ngForOf",m.heroes))},dependencies:[_,T,le],encapsulation:2})};function Ot(r,t){r&1&&(o(0,"mat-grid-list",2)(1,"mat-grid-tile"),l(2,"mat-spinner"),i()())}function Lt(r,t){if(r&1){let e=H();o(0,"div",3)(1,"mat-card",4)(2,"mat-card-header")(3,"mat-card-title"),n(4),i(),o(5,"mat-card-subtitle"),n(6),i()(),l(7,"img",5),y(8,"heroImage"),i(),o(9,"mat-card",4)(10,"mat-card-header")(11,"mat-card-title"),n(12,"Informaci\xF3n"),i(),o(13,"mat-card-subtitle"),n(14),i()(),o(15,"mat-card-content")(16,"mat-list")(17,"mat-list-item"),n(18),i(),o(19,"mat-list-item"),n(20),i(),o(21,"mat-list-item"),n(22),i(),o(23,"mat-list-item"),n(24),i()(),o(25,"button",6),d("click",function(){v(e);let p=b();return C(p.goBack())}),n(26," Regresar "),i()()()()}if(r&2){let e=b();a(4),u(e.hero.alter_ego),a(2),u(e.hero.superhero),a(),s("src",w(8,9,e.hero),F)("alt",e.hero.superhero),a(7),u(e.hero.superhero),a(4),u(e.hero.first_appearance),a(2),u(e.hero.characters),a(2),u(e.hero.publisher),a(2),u(e.hero.alter_ego)}}var ce=class r{constructor(t,e,m){this.heroesService=t;this.activatedRoute=e;this.router=m}hero;ngOnInit(){this.activatedRoute.params.pipe(A(({id:t})=>this.heroesService.getHeroById(t))).subscribe(t=>{if(!t)return this.router.navigate(["/heroes/list"]);this.hero=t})}goBack(){this.router.navigateByUrl("heroes/list")}static \u0275fac=function(e){return new(e||r)(c(x),c(G),c(z))};static \u0275cmp=f({type:r,selectors:[["app-hero-page"]],standalone:!1,decls:3,vars:2,consts:[["divLoading",""],["class","grid p-2",4,"ngIf","ngIfElse"],["cols","1"],[1,"grid","p-2"],[1,"col-12","sm:col-6"],["mat-card-image","",3,"src","alt"],["mat-button","","color","warn",3,"click"]],template:function(e,m){if(e&1&&g(0,Ot,3,0,"ng-template",null,0,ye)(2,Lt,27,11,"div",1),e&2){let p=E(1);a(2),s("ngIf",m.hero)("ngIfElse",p)}},dependencies:[N,S,k,O,ie,L,te,ee,et,Ze,it,re,ot,P],encapsulation:2})};var Tt=[{path:"",component:oe,children:[{path:"new-hero",component:V},{path:"search",component:se},{path:"edit/:id",component:V},{path:"list",component:pe},{path:":id",component:ce},{path:"**",redirectTo:"list"}]}],de=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=q({type:r});static \u0275inj=U({imports:[ve.forChild(Tt),ve]})};var gt=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=q({type:r});static \u0275inj=U({imports:[Fe,Ve,de,pt]})};export{gt as HeroesModule};
