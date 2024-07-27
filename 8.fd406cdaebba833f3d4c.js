(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Yj9t:function(e,i,t){"use strict";t.r(i),t.d(i,"AuthModule",function(){return B});var o=t("ofXK"),a=t("PCNd"),r=t("tyNb"),n=t("3Pt+"),s=t("fXoL"),b=t("AZf9"),d=t("nF0y"),l=t("v9VA"),c=t("29mf"),p=t("6e6V"),m=t("bA2e"),u=t("Aso2"),h=t("gofQ"),f=t("6k9V");let v=(()=>{class e{constructor(e,i,t,o,a){this.formBuilder=e,this.router=i,this.notificationService=t,this._update=o,this._profile=a}ngOnInit(){this.formGroup=this.formBuilder.group({email:["",[n.o.required,n.o.email]],password:["",n.o.required]},{updateOn:"blur"})}onSubmit(){this._update.login(this.formGroup.value).subscribe({next:e=>{localStorage.setItem("authToken",JSON.stringify(e.data.authToken)),this._profile.updateProfile(e.data),this.notificationService.showToast({type:"success",title:e.message,target:"#notificationHolder",duration:2e3}),this.router.navigate(e.data&&e.data.welcome?["/welcome"]:["/home"])},error:e=>{this.notificationService.showToast({type:"error",title:e,target:"#notificationHolder",duration:2e3})}})}isValid(e){const i=this.formGroup.get(e);return i.invalid&&(i.dirty||i.touched)}}return e.\u0275fac=function(i){return new(i||e)(s.Qb(n.b),s.Qb(r.e),s.Qb(b.b),s.Qb(m.a),s.Qb(u.a))},e.\u0275cmp=s.Kb({type:e,selectors:[["app-auth-login"]],decls:22,vars:15,consts:[[1,"mb-8"],["logoWidth","80px",1,"cursor-pointer"],[3,"formGroup","ngSubmit"],[1,"app-form"],[1,"app-form__item"],[3,"helperText","invalid","invalidText"],["formControlName","email","ibmText","","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],["type","password","formControlName","password","ibmText","","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],[1,"app-form__item","app-form__item--opts"],[1,"flex","justify-between","items-center"],["checked","true"],["ibmLink","","routerLink","/auth/forgot-password"],[1,"app-form__submit"],["type","submit","ibmButton","primary","size","field",1,"app-ibm-btn-full"],["ibmIconArrowRight","","size","20",1,"bx--btn__icon"]],template:function(e,i){1&e&&(s.Wb(0,"div",0),s.Rb(1,"main-logo",1),s.Vb(),s.Wb(2,"form",2),s.hc("ngSubmit",function(){return i.onSubmit()}),s.Wb(3,"div",3),s.Wb(4,"div",4),s.Wb(5,"ibm-label",5),s.Sc(6," Email address "),s.Rb(7,"input",6),s.Vb(),s.Vb(),s.Wb(8,"div",4),s.Wb(9,"ibm-label",5),s.Sc(10," Password "),s.Rb(11,"input",7),s.Vb(),s.Vb(),s.Wb(12,"div",8),s.Wb(13,"div",9),s.Wb(14,"ibm-checkbox",10),s.Sc(15," Remember me? "),s.Vb(),s.Wb(16,"a",11),s.Sc(17,"Forgot password?"),s.Vb(),s.Vb(),s.Vb(),s.Wb(18,"div",12),s.Wb(19,"button",13),s.Sc(20," Sign In "),s.kc(),s.Rb(21,"svg",14),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&e&&(s.Db(2),s.sc("formGroup",i.formGroup),s.Db(3),s.sc("helperText","")("invalid",i.isValid("email"))("invalidText","This field is required"),s.Db(2),s.sc("invalid",i.isValid("email"))("disabled",!1)("placeholder","Email address")("autocomplete",!1),s.Db(2),s.sc("helperText","")("invalid",i.isValid("password"))("invalidText","This field is required"),s.Db(2),s.sc("invalid",i.isValid("password"))("disabled",!1)("placeholder","Password")("autocomplete",!1))},directives:[h.a,n.p,n.i,n.d,d.b,n.a,n.h,n.c,d.d,l.a,r.h,c.a,p.a,f.a],styles:[""]}),e})();var g=t("r/iJ"),V=t("znSr"),W=t("XiUz");let x=(()=>{class e{constructor(e,i,t){this.formBuilder=e,this.router=i,this.notificationService=t}ngOnInit(){this.formGroup=this.formBuilder.group({firstName:["",[n.o.required]],lastName:["",[n.o.required]],email:["",[n.o.required,n.o.email]],company:["",n.o.required],condition:[!0]},{updateOn:"blur"})}onSubmit(){this.formGroup.markAllAsTouched()}isValid(e){const i=this.formGroup.get(e);return i.invalid&&(i.dirty||i.touched)}}return e.\u0275fac=function(i){return new(i||e)(s.Qb(n.b),s.Qb(r.e),s.Qb(b.b))},e.\u0275cmp=s.Kb({type:e,selectors:[["app-auth-signup"]],decls:39,vars:29,consts:[["fxHide","","fxShow.lt-md","",1,"mb-8"],["logoWidth","130px",1,"cursor-pointer"],[1,"app-expressive-heading-06","mb-1"],[1,"app-body-long-02","mb-8"],["ibmLink","","routerLink","../signin"],[3,"formGroup","ngSubmit"],[1,"app-form"],["fxLayout","row",1,"app-form__row"],["fxFlex","50"],[1,"app-form__item"],[3,"helperText","invalid","invalidText"],["formControlName","firstName","ibmText","","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],["formControlName","lastName","ibmText","","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],["formControlName","email","ibmText","","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],["formControlName","company","ibmText","","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],[1,"app-form__item","app-form__item--opts"],[1,"flex","justify-between","items-center"],["formControlName","condition"],[1,"app-link"],[1,"app-form__submit"],["type","submit","ibmButton","primary","size","field",1,"app-ibm-btn-full"],["ibmIconArrowRight","","size","20",1,"bx--btn__icon"]],template:function(e,i){1&e&&(s.Wb(0,"div",0),s.Rb(1,"main-logo",1),s.Vb(),s.Wb(2,"h1",2),s.Sc(3,"Sign up"),s.Vb(),s.Wb(4,"div",3),s.Sc(5," Already have an account? "),s.Wb(6,"a",4),s.Sc(7,"Sign in"),s.Vb(),s.Vb(),s.Wb(8,"form",5),s.hc("ngSubmit",function(){return i.onSubmit()}),s.Wb(9,"div",6),s.Wb(10,"div",7),s.Wb(11,"div",8),s.Wb(12,"div",9),s.Wb(13,"ibm-label",10),s.Sc(14," First name "),s.Rb(15,"input",11),s.Vb(),s.Vb(),s.Vb(),s.Wb(16,"div",8),s.Wb(17,"div",9),s.Wb(18,"ibm-label",10),s.Sc(19," Last name "),s.Rb(20,"input",12),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(21,"div",9),s.Wb(22,"ibm-label",10),s.Sc(23," Email address "),s.Rb(24,"input",13),s.Vb(),s.Vb(),s.Wb(25,"div",9),s.Wb(26,"ibm-label",10),s.Sc(27," Company "),s.Rb(28,"input",14),s.Vb(),s.Vb(),s.Wb(29,"div",15),s.Wb(30,"div",16),s.Wb(31,"ibm-checkbox",17),s.Sc(32," I have read and accept "),s.Wb(33,"a",18),s.Sc(34,"terms & conditions"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(35,"div",19),s.Wb(36,"button",20),s.Sc(37," Create your account "),s.kc(),s.Rb(38,"svg",21),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&e&&(s.Db(8),s.sc("formGroup",i.formGroup),s.Db(5),s.sc("helperText","")("invalid",i.isValid("firstName"))("invalidText","This field is required"),s.Db(2),s.sc("invalid",i.isValid("firstName"))("disabled",!1)("placeholder","First name")("autocomplete",!0),s.Db(3),s.sc("helperText","")("invalid",i.isValid("lastName"))("invalidText","This field is required"),s.Db(2),s.sc("invalid",i.isValid("lastName"))("disabled",!1)("placeholder","Last name")("autocomplete",!0),s.Db(2),s.sc("helperText","")("invalid",i.isValid("email"))("invalidText","This field is required"),s.Db(2),s.sc("invalid",i.isValid("email"))("disabled",!1)("placeholder","Email address")("autocomplete",!0),s.Db(2),s.sc("helperText","")("invalid",i.isValid("company"))("invalidText","This field is required"),s.Db(2),s.sc("invalid",i.isValid("company"))("disabled",!1)("placeholder","Company")("autocomplete",!0))},directives:[V.b,h.a,r.h,c.a,n.p,n.i,n.d,W.d,W.a,d.b,n.a,n.h,n.c,d.d,l.a,p.a,f.a],styles:[""]}),e})(),S=(()=>{class e{constructor(e,i,t){this.formBuilder=e,this.router=i,this.notificationService=t}ngOnInit(){this.formGroup=this.formBuilder.group({email:["",[n.o.required,n.o.email]]},{updateOn:"blur"})}onSubmit(){this.formGroup.markAllAsTouched(),this.router.navigate(["/app"])}isValid(e){const i=this.formGroup.get(e);return i.invalid&&(i.dirty||i.touched)}}return e.\u0275fac=function(i){return new(i||e)(s.Qb(n.b),s.Qb(r.e),s.Qb(b.b))},e.\u0275cmp=s.Kb({type:e,selectors:[["app-auth-forgot-password"]],decls:20,vars:8,consts:[[1,"mb-8"],["logoWidth","80px",1,"cursor-pointer"],[1,"app-expressive-heading-06","mb-1"],[1,"app-body-long-02","mb-8"],[3,"formGroup","ngSubmit"],[1,"app-form"],[1,"app-form__item"],[3,"helperText","invalid","invalidText"],["formControlName","email","ibmText","","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],[1,"app-form__submit"],["type","submit","ibmButton","primary","size","field",1,"app-ibm-btn-full"],["ibmIconArrowRight","","size","20",1,"bx--btn__icon"],[1,"mt-8"],["routerLink","/auth",1,"app-link"]],template:function(e,i){1&e&&(s.Wb(0,"div",0),s.Rb(1,"main-logo",1),s.Vb(),s.Wb(2,"h1",2),s.Sc(3,"Forgot password"),s.Vb(),s.Wb(4,"div",3),s.Sc(5," Fill the form to reset your password\n"),s.Vb(),s.Wb(6,"form",4),s.hc("ngSubmit",function(){return i.onSubmit()}),s.Wb(7,"div",5),s.Wb(8,"div",6),s.Wb(9,"ibm-label",7),s.Sc(10," Email address "),s.Rb(11,"input",8),s.Vb(),s.Vb(),s.Wb(12,"div",9),s.Wb(13,"button",10),s.Sc(14," Send reset link "),s.kc(),s.Rb(15,"svg",11),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.jc(),s.Wb(16,"div",12),s.Sc(17," Return to "),s.Wb(18,"a",13),s.Sc(19,"Sign In"),s.Vb(),s.Vb()),2&e&&(s.Db(6),s.sc("formGroup",i.formGroup),s.Db(3),s.sc("helperText","")("invalid",i.isValid("email"))("invalidText","This field is required"),s.Db(2),s.sc("invalid",i.isValid("email"))("disabled",!1)("placeholder","")("autocomplete",!0))},directives:[h.a,n.p,n.i,n.d,d.b,n.a,n.h,n.c,d.d,p.a,f.a,r.h],styles:[""]}),e})(),w=(()=>{class e{constructor(e,i,t){this.formBuilder=e,this.router=i,this.notificationService=t}ngOnInit(){this.formGroup=this.formBuilder.group({password:["",[n.o.required]],passwordConfirm:["",[n.o.required]]},{updateOn:"blur"})}onSubmit(){this.formGroup.markAllAsTouched(),this.router.navigate(["/app"])}isValid(e){const i=this.formGroup.get(e);return i.invalid&&(i.dirty||i.touched)}}return e.\u0275fac=function(i){return new(i||e)(s.Qb(n.b),s.Qb(r.e),s.Qb(b.b))},e.\u0275cmp=s.Kb({type:e,selectors:[["app-auth-reset-password"]],decls:24,vars:15,consts:[["fxHide","","fxShow.lt-md","",1,"mb-8"],["logoWidth","130px",1,"cursor-pointer"],[1,"app-expressive-heading-06","mb-1"],[1,"app-body-long-02","mb-8"],[3,"formGroup","ngSubmit"],[1,"app-form"],[1,"app-form__item"],[3,"helperText","invalid","invalidText"],["formControlName","password","ibmText","","type","password","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],["formControlName","passwordConfirm","ibmText","","type","password","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],[1,"app-form__submit"],["type","submit","ibmButton","primary","size","field",1,"app-ibm-btn-full"],["ibmIconArrowRight","","size","20",1,"bx--btn__icon"],[1,"mt-8"],["routerLink","../signin",1,"app-link"]],template:function(e,i){1&e&&(s.Wb(0,"div",0),s.Rb(1,"main-logo",1),s.Vb(),s.Wb(2,"h1",2),s.Sc(3,"Reset your password"),s.Vb(),s.Wb(4,"div",3),s.Sc(5," Create a new password for your account\n"),s.Vb(),s.Wb(6,"form",4),s.hc("ngSubmit",function(){return i.onSubmit()}),s.Wb(7,"div",5),s.Wb(8,"div",6),s.Wb(9,"ibm-label",7),s.Sc(10," Password "),s.Rb(11,"input",8),s.Vb(),s.Vb(),s.Wb(12,"div",6),s.Wb(13,"ibm-label",7),s.Sc(14," Password confirm "),s.Rb(15,"input",9),s.Vb(),s.Vb(),s.Wb(16,"div",10),s.Wb(17,"button",11),s.Sc(18," Reset my password "),s.kc(),s.Rb(19,"svg",12),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.jc(),s.Wb(20,"div",13),s.Sc(21," Return to "),s.Wb(22,"a",14),s.Sc(23,"Sign In"),s.Vb(),s.Vb()),2&e&&(s.Db(6),s.sc("formGroup",i.formGroup),s.Db(3),s.sc("helperText","")("invalid",i.isValid("password"))("invalidText","This field is required"),s.Db(2),s.sc("invalid",i.isValid("password"))("disabled",!1)("placeholder","")("autocomplete",!0),s.Db(2),s.sc("helperText","")("invalid",i.isValid("passwordConfirm"))("invalidText","This field is required"),s.Db(2),s.sc("invalid",i.isValid("passwordConfirm"))("disabled",!1)("placeholder","")("autocomplete",!0))},directives:[V.b,h.a,n.p,n.i,n.d,d.b,n.a,n.h,n.c,d.d,p.a,f.a,r.h],styles:[""]}),e})(),y=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s.Kb({type:e,selectors:[["app-auth-confirmation"]],decls:10,vars:0,consts:[["fxHide","","fxShow.lt-md","",1,"mb-8"],["logoWidth","130px",1,"cursor-pointer"],[1,"app-expressive-heading-06","mb-8"],[1,"app-body-long-02"],[1,"mt-8"],["routerLink","../signin",1,"app-link"]],template:function(e,i){1&e&&(s.Wb(0,"div",0),s.Rb(1,"main-logo",1),s.Vb(),s.Wb(2,"h1",2),s.Sc(3,"Confirmation required"),s.Vb(),s.Wb(4,"p",3),s.Sc(5," A confirmation mail with instructions has been sent to your email address. Follow those instructions to confirm your email address and activate your account.\n"),s.Vb(),s.Wb(6,"div",4),s.Sc(7," Return to "),s.Wb(8,"a",5),s.Sc(9,"Sign In"),s.Vb(),s.Vb())},directives:[V.b,h.a,r.h],styles:[""]}),e})();var T=t("8bPl"),_=t("qMY5"),D=t("G1Gu"),q=t("jaxy");const C=["scrollbar"];function k(e,i){1&e&&(s.Ub(0),s.Wb(1,"div",66),s.Sc(2,"This field is required"),s.Vb(),s.Tb())}function R(e,i){1&e&&(s.kc(),s.jc(),s.Ub(0),s.Rb(1,"div",67),s.Tb())}function G(e,i){1&e&&(s.kc(),s.jc(),s.Ub(0),s.Rb(1,"div",67),s.Tb())}function N(e,i){1&e&&(s.kc(),s.jc(),s.Ub(0),s.Wb(1,"div",68),s.Rb(2,"div"),s.Wb(3,"button",69),s.Sc(4," Create my account "),s.kc(),s.Rb(5,"svg",49),s.Vb(),s.Vb(),s.Tb()),2&e&&(s.Db(3),s.sc("disabled",!0))}const L=function(e){return{"app-form__header--active":e}},z=function(e){return{hidden:e}};let I=(()=>{class e{constructor(e,i,t){this.formBuilder=e,this.router=i,this.notificationService=t,this.currentStep=1,this.step1Valid=!1,this.step2Valid=!1,this.step1Loading=!1,this.step2Loading=!1,this.step3Loading=!1,this.countries=T.a,this.usStates=T.c,this.industries=[{content:"Software",id:"1"},{content:"Marketing",id:"2"},{content:"Hardware",id:"3"},{content:"IT",id:"4"},{content:"AI",id:"5"},{content:"Data-science",id:"6"}],this.storage=[{content:"1GB",id:"1"},{content:"2GB",id:"2"},{content:"3GB",id:"3"},{content:"4GB",id:"4"},{content:"5GB",id:"5"},{content:"6GB",id:"6"}],this.areaCodes=[{content:"+1",id:"1"},{content:"+2",id:"2"},{content:"+3",id:"3"},{content:"+22",id:"4"},{content:"+33",id:"5"},{content:"+44",id:"6"}]}ngOnInit(){this.createForm1(),this.createForm2(),this.createForm3()}createForm1(){this.formGroup=this.formBuilder.group({firstName:["",[n.o.required,n.o.minLength(3)]],lastName:["",[n.o.required,n.o.minLength(3)]],email:["",[n.o.required,n.o.email]],password:["",[n.o.required,n.o.pattern(g.o)]],country:["",[n.o.required]],state:["",[n.o.required]],condition:["",[n.o.requiredTrue]]},{updateOn:"blur"})}createForm2(){this.formGroup2=this.formBuilder.group({phone:["",[n.o.required,n.o.minLength(4),n.o.pattern(g.m)]],area:["1",[n.o.required]],company:["",[n.o.required,n.o.minLength(4)]],job:["",[n.o.required,n.o.minLength(4)]],industry:["",[n.o.required]],storage:["",[n.o.required]]},{updateOn:"blur"})}createForm3(){this.formGroup3=this.formBuilder.group({code:["",[n.o.required,n.o.minLength(7),n.o.pattern(g.m)]]},{updateOn:"blur"})}onSubmit(){this.formGroup.markAllAsTouched(),this.formGroup.valid&&(this.step1Loading=!0,setTimeout(()=>{this.gotoStep(2),this.step1Loading=!1,this.step1Valid=!0},2500))}onSubmit2(){this.formGroup2.markAllAsTouched(),this.formGroup2.valid&&(this.step2Loading=!0,setTimeout(()=>{this.gotoStep(3),this.step2Loading=!1,this.step2Valid=!0},2500))}onSubmit3(){this.formGroup3.markAllAsTouched(),this.step3Loading=!0,setTimeout(()=>{this.gotoStep(3),this.step3Loading=!1},2500)}gotoStep(e){this.currentStep=e,setTimeout(()=>{this.scrollbar.scrollTo({bottom:0,duration:400})},400)}isValid(e){return Object(g.l)(this.formGroup,e)}isValid2(e){return Object(g.l)(this.formGroup2,e)}isValid3(e){return Object(g.l)(this.formGroup3,e)}getPasswordClass(e,i){const t=this.formGroup.get(e);return Object(g.n)(t.value,i)||!t.dirty&&!t.touched?t.dirty||t.touched?"app-color-success":"":"app-color-danger"}}return e.\u0275fac=function(i){return new(i||e)(s.Qb(n.b),s.Qb(r.e),s.Qb(b.b))},e.\u0275cmp=s.Kb({type:e,selectors:[["app-auth-book-a-demo"]],viewQuery:function(e,i){if(1&e&&s.Xc(C,1),2&e){let e;s.Ec(e=s.ic())&&(i.scrollbar=e.first)}},decls:150,vars:108,consts:[[1,"app-a-box","app-scrollbar-fix"],["track","vertical"],["scrollbar",""],["fxFill","","fxLayout","row wrap"],["fxFlex","100%","fxFlex.gt-sm","45%","fxLayoutAlign","center start",1,"relative","app-bg-success","text-white"],[1,"absolute","bottom-0","right-0","left-0","top-0","opacity-50","z-0","app-bg-pattern-svg"],["ngClass.gt-sm","px-16",1,"z-10","relative","px-8"],[1,"pt-8","flex","justify-between"],["type","white","logoWidth","160px"],[1,"pt-10","pb-16"],[1,"app-display-04","mb-16"],[2,"max-width","450px"],[1,"app-body-long-02","mb-8"],[1,"px-4"],["ibmList","",1,"bx--list--margin","text-white"],["ibmListItem",""],[1,"app-productive-heading-02","mt-8"],["fxFlex","100%","fxFlex.gt-sm","55%","fxLayoutAlign","center start",1,"app-bg-container"],["fxFlex.gt-md","75%","ngClass.gt-sm","px-16 py-16",1,"app-form","px-4","py-8"],[1,"app-body-long-02","mb-4"],["ibmLink","","routerLink","../signin"],[1,"app-expressive-heading-06","pb-8"],[1,"relative"],["id","form_1",1,"app-expressive-heading-03","mb-4","app-form__header",3,"ngClass"],[3,"formGroup","ngSubmit"],[1,"app-form__item"],[3,"invalid","helperText","invalidText"],["formControlName","email","ibmText","","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],["fxLayout","row wrap",1,"app-form__row"],["fxFlex","100%","fxFlex.gt-md","50%",1,"app-form__item"],[3,"helperText","invalid","invalidText"],["formControlName","firstName","ibmText","","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],["formControlName","lastName","ibmText","","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],[3,"helperText","invalid"],["formControlName","password","ibmText","","size","md","type","password","theme","light",3,"invalid","disabled","placeholder","autocomplete"],["fxLayout","row wrap",1,"mt-4"],["fxFlex","50%"],["ibmList",""],["ibmListItem","",1,"mb-2"],["formControlName","country","size","md","dropUp","false","theme","light","placeholder","",3,"label","invalid","invalidText"],[3,"items"],["formControlName","state","size","md","dropUp","false","theme","light","placeholder","",3,"label","invalid","invalidText"],[1,"app-form__item","app-form__item--opts"],[1,"flex","justify-between","items-center"],["formControlName","condition"],[1,"app-link"],[4,"ngIf"],[1,"app-form__submit","flex","justify-end"],["type","submit","ibmButton","primary","size","field",3,"skeleton","disabled"],["ibmIconArrowRight","","size","20",1,"bx--btn__icon"],["id","form_2",1,"app-expressive-heading-03","mt-8","mb-6","app-form__header",3,"ngClass"],[3,"ngClass"],["fxLayout","row wrap"],["fxFlex","100px",1,"mr-1"],["formControlName","area","value","id","size","md","dropUp","false","theme","light","placeholder","",3,"label","invalid","invalidText"],[3,"invalid","invalidText"],["formControlName","phone","ibmText","","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],["formControlName","company","ibmText","","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],["formControlName","job","ibmText","","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],["formControlName","industry","size","md","dropUp","false","theme","light","placeholder","",3,"label","invalid","invalidText"],["formControlName","storage","size","md","dropUp","false","theme","light","placeholder","",3,"label","invalid","invalidText"],["id","form_3",1,"app-expressive-heading-03","mt-8","mb-6","app-form__header",3,"ngClass"],[1,"app-body-long-02","mb-2"],[1,"app-form__item",2,"max-width","300px"],["formControlName","code","ibmText","","size","md","theme","light",3,"invalid","disabled","placeholder","autocomplete"],["type","submit","ibmButton","primary","size","field",3,"skeleton"],[1,"app-helper-text-01","app-color-danger"],[1,"absolute","top-0","right-0","bottom-0","left-0","app-bg-success","opacity-25","-mx-4","-my-4"],[1,"flex","justify-between"],["type","submit","ibmButton","primary","size","field",3,"disabled"]],template:function(e,i){1&e&&(s.Wb(0,"div",0),s.Wb(1,"ng-scrollbar",1,2),s.Wb(3,"div",3),s.Wb(4,"div",4),s.Rb(5,"div",5),s.Wb(6,"div",6),s.Wb(7,"div",7),s.Rb(8,"main-logo",8),s.Vb(),s.Wb(9,"div",9),s.Wb(10,"div",10),s.Wb(11,"div"),s.Sc(12,"Free platform trial"),s.Vb(),s.Vb(),s.Wb(13,"div",11),s.Wb(14,"p",12),s.Sc(15,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),s.Vb(),s.Wb(16,"div",13),s.Wb(17,"ul",14),s.Wb(18,"li",15),s.Sc(19,"Sed ut perspiciatis unde omnis iste natus error"),s.Vb(),s.Wb(20,"li",15),s.Sc(21,"Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt"),s.Vb(),s.Wb(22,"li",15),s.Sc(23,"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur "),s.Vb(),s.Wb(24,"li",15),s.Sc(25,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae "),s.Vb(),s.Wb(26,"li",15),s.Sc(27,"et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit "),s.Vb(),s.Wb(28,"li",15),s.Sc(29,"Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(30,"div",16),s.Sc(31,"This is a fully working form!"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(32,"div",17),s.Wb(33,"div",18),s.Wb(34,"div",19),s.Sc(35," Already have an account? "),s.Wb(36,"a",20),s.Sc(37,"Sign in"),s.Vb(),s.Vb(),s.Wb(38,"h1",21),s.Sc(39,"Start your free trial"),s.Vb(),s.Wb(40,"div",22),s.Wb(41,"div",23),s.Sc(42,"1. Account information "),s.Vb(),s.Wb(43,"form",24),s.hc("ngSubmit",function(){return i.onSubmit()}),s.Wb(44,"div"),s.Wb(45,"div",25),s.Wb(46,"ibm-label",26),s.Sc(47," Email address "),s.Rb(48,"input",27),s.Vb(),s.Vb(),s.Wb(49,"div",28),s.Wb(50,"div",29),s.Wb(51,"ibm-label",30),s.Sc(52," First name "),s.Rb(53,"input",31),s.Vb(),s.Vb(),s.Wb(54,"div",29),s.Wb(55,"ibm-label",30),s.Sc(56," Last name "),s.Rb(57,"input",32),s.Vb(),s.Vb(),s.Vb(),s.Wb(58,"div",25),s.Wb(59,"ibm-label",33),s.Sc(60," Password "),s.Rb(61,"input",34),s.Vb(),s.Wb(62,"div",35),s.Wb(63,"div",36),s.Wb(64,"div",13),s.Wb(65,"ul",37),s.Wb(66,"li",15),s.Sc(67,"One lowercase character"),s.Vb(),s.Wb(68,"li",38),s.Sc(69,"8 characters minimum "),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(70,"div",36),s.Wb(71,"div",13),s.Wb(72,"ul",37),s.Wb(73,"li",15),s.Sc(74,"One number"),s.Vb(),s.Wb(75,"li",38),s.Sc(76,"One uppercase character "),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(77,"div",28),s.Wb(78,"div",29),s.Wb(79,"ibm-dropdown",39),s.Rb(80,"ibm-dropdown-list",40),s.Vb(),s.Vb(),s.Wb(81,"div",29),s.Wb(82,"ibm-dropdown",41),s.Rb(83,"ibm-dropdown-list",40),s.Vb(),s.Vb(),s.Vb(),s.Wb(84,"div",42),s.Wb(85,"div",43),s.Wb(86,"ibm-checkbox",44),s.Sc(87," I have read and accept "),s.Wb(88,"a",45),s.Sc(89,"terms & conditions"),s.Vb(),s.Vb(),s.Vb(),s.Qc(90,k,3,0,"ng-container",46),s.Vb(),s.Wb(91,"div",47),s.Wb(92,"button",48),s.Sc(93," Next "),s.kc(),s.Rb(94,"svg",49),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Qc(95,R,2,0,"ng-container",46),s.Vb(),s.jc(),s.Wb(96,"div",22),s.Wb(97,"div",50),s.Sc(98,"2. Additional information "),s.Vb(),s.Wb(99,"div",51),s.Wb(100,"form",24),s.hc("ngSubmit",function(){return i.onSubmit2()}),s.Wb(101,"div"),s.Wb(102,"div",25),s.Wb(103,"div",52),s.Wb(104,"div",53),s.Wb(105,"ibm-dropdown",54),s.Rb(106,"ibm-dropdown-list",40),s.Vb(),s.Vb(),s.Wb(107,"div",36),s.Wb(108,"ibm-label",55),s.Sc(109," Phone "),s.Rb(110,"input",56),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(111,"div",28),s.Wb(112,"div",29),s.Wb(113,"ibm-label",30),s.Sc(114," Company name "),s.Rb(115,"input",57),s.Vb(),s.Vb(),s.Wb(116,"div",29),s.Wb(117,"ibm-label",30),s.Sc(118," Job role "),s.Rb(119,"input",58),s.Vb(),s.Vb(),s.Vb(),s.Wb(120,"div",28),s.Wb(121,"div",29),s.Wb(122,"ibm-dropdown",59),s.Rb(123,"ibm-dropdown-list",40),s.Vb(),s.Vb(),s.Wb(124,"div",29),s.Wb(125,"ibm-dropdown",60),s.Rb(126,"ibm-dropdown-list",40),s.Vb(),s.Vb(),s.Vb(),s.Wb(127,"div",47),s.Wb(128,"button",48),s.Sc(129," Next "),s.kc(),s.Rb(130,"svg",49),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Qc(131,G,2,0,"ng-container",46),s.Vb(),s.jc(),s.Wb(132,"div",61),s.Sc(133," 3. Verify your data "),s.Vb(),s.Wb(134,"div",51),s.Wb(135,"div",62),s.Sc(136," We emailed a 7 digit code to your email address. "),s.Vb(),s.Wb(137,"div",19),s.Sc(138," Type here and just push the create my account button! "),s.Vb(),s.Wb(139,"form",24),s.hc("ngSubmit",function(){return i.onSubmit3()}),s.Wb(140,"div"),s.Wb(141,"div",63),s.Wb(142,"ibm-label",55),s.Sc(143," Verification code "),s.Rb(144,"input",64),s.Vb(),s.Vb(),s.Vb(),s.Wb(145,"div",47),s.Wb(146,"button",65),s.Sc(147," Create my account "),s.kc(),s.Rb(148,"svg",49),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Qc(149,N,6,1,"ng-container",46),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&e&&(s.Db(41),s.sc("ngClass",s.wc(98,L,1===i.currentStep)),s.Db(2),s.sc("formGroup",i.formGroup),s.Db(3),s.sc("invalid",i.isValid("email"))("helperText","Disposable email addresses are not permitted")("invalidText","This field is required or incorrect"),s.Db(2),s.sc("invalid",i.isValid("email"))("disabled",!1)("placeholder","")("autocomplete",!0),s.Db(3),s.sc("helperText","")("invalid",i.isValid("firstName"))("invalidText","This field is required or incorrect"),s.Db(2),s.sc("invalid",i.isValid("firstName"))("disabled",!1)("placeholder","")("autocomplete",!0),s.Db(2),s.sc("helperText","")("invalid",i.isValid("lastName"))("invalidText","This field is required or incorrect"),s.Db(2),s.sc("invalid",i.isValid("lastName"))("disabled",!1)("placeholder","")("autocomplete",!0),s.Db(2),s.sc("helperText","")("invalid",i.isValid("password")),s.Db(2),s.sc("invalid",i.isValid("password"))("disabled",!1)("placeholder","")("autocomplete",!0),s.Db(5),s.Fb(i.getPasswordClass("password","lower")),s.Db(2),s.Fb(i.getPasswordClass("password","length")),s.Db(5),s.Fb(i.getPasswordClass("password","number")),s.Db(2),s.Fb(i.getPasswordClass("password","upper")),s.Db(4),s.sc("label","Country")("invalid",i.isValid("country"))("invalidText","This field is required or incorrect"),s.Db(1),s.sc("items",i.countries),s.Db(2),s.sc("label","State or province")("invalid",i.isValid("state"))("invalidText","This field is required or incorrect"),s.Db(1),s.sc("items",i.usStates),s.Db(7),s.sc("ngIf",i.isValid("condition")),s.Db(2),s.sc("skeleton",i.step1Loading)("disabled",1!==i.currentStep),s.Db(3),s.sc("ngIf",i.step1Valid),s.Db(2),s.sc("ngClass",s.wc(100,L,2===i.currentStep)),s.Db(2),s.sc("ngClass",s.wc(102,z,!i.step1Valid)),s.Db(1),s.sc("formGroup",i.formGroup2),s.Db(5),s.sc("label","Area")("invalid",i.isValid2("area"))("invalidText","This field is required or incorrect"),s.Db(1),s.sc("items",i.areaCodes),s.Db(2),s.sc("invalid",i.isValid2("phone"))("invalidText","This field is required or incorrect"),s.Db(2),s.sc("invalid",i.isValid2("phone"))("disabled",!1)("placeholder","")("autocomplete",!0),s.Db(3),s.sc("helperText","")("invalid",i.isValid2("company"))("invalidText","This field is required or incorrect"),s.Db(2),s.sc("invalid",i.isValid2("company"))("disabled",!1)("placeholder","")("autocomplete",!0),s.Db(2),s.sc("helperText","")("invalid",i.isValid2("job"))("invalidText","This field is required or incorrect"),s.Db(2),s.sc("invalid",i.isValid2("job"))("disabled",!1)("placeholder","")("autocomplete",!0),s.Db(3),s.sc("label","Industry")("invalid",i.isValid2("industry"))("invalidText","This field is required or incorrect"),s.Db(1),s.sc("items",i.industries),s.Db(2),s.sc("label","Storage")("invalid",i.isValid2("storage"))("invalidText","This field is required or incorrect"),s.Db(1),s.sc("items",i.storage),s.Db(2),s.sc("skeleton",i.step2Loading)("disabled",2!==i.currentStep),s.Db(3),s.sc("ngIf",i.step2Valid),s.Db(1),s.sc("ngClass",s.wc(104,L,3===i.currentStep)),s.Db(2),s.sc("ngClass",s.wc(106,z,!i.step2Valid)),s.Db(5),s.sc("formGroup",i.formGroup3),s.Db(3),s.sc("invalid",i.isValid3("code"))("invalidText","This field is required or incorrect"),s.Db(2),s.sc("invalid",i.isValid3("code"))("disabled",!1)("placeholder","")("autocomplete",!0),s.Db(2),s.sc("skeleton",i.step3Loading),s.Db(3),s.sc("ngIf",3!==i.currentStep))},directives:[D.a,W.f,W.d,W.a,W.c,V.a,h.a,_.a,_.b,r.h,c.a,o.j,n.p,n.i,n.d,d.b,n.a,n.h,n.c,d.d,q.b,q.c,l.a,o.l,p.a,f.a],styles:[""]}),e})(),A=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s.Kb({type:e,selectors:[["app-coming-soon"]],decls:19,vars:1,consts:[["fxHide","","fxShow.lt-md","",1,"mb-8"],["logoWidth","130px",1,"cursor-pointer"],[1,"app-expressive-heading-06","mb-1"],[1,"app-body-long-02","mb-8"],[1,"app-form"],[1,"app-form__item"],["ibmText","","size","md","theme","light","placeholder","Type your eamil to get early access",3,"autocomplete"],[1,"app-form__item","app-form__item--opts"],[1,"flex","justify-between","items-center"],["checked","true"],[1,"app-form__submit"],["routerLink","/app","ibmButton","primary","size","field",1,"app-ibm-btn-full"],["ibmIconArrowRight","","size","20",1,"bx--btn__icon"]],template:function(e,i){1&e&&(s.Wb(0,"div",0),s.Rb(1,"main-logo",1),s.Vb(),s.Wb(2,"h1",2),s.Sc(3,"Coming soon!"),s.Vb(),s.Wb(4,"div",3),s.Sc(5," We are currently working on something awesome. Stay tuned!\n"),s.Vb(),s.Wb(6,"div",4),s.Wb(7,"div",5),s.Wb(8,"ibm-label"),s.Sc(9," Get early access "),s.Rb(10,"input",6),s.Vb(),s.Vb(),s.Wb(11,"div",7),s.Wb(12,"div",8),s.Wb(13,"ibm-checkbox",9),s.Sc(14," Signup for news "),s.Vb(),s.Vb(),s.Vb(),s.Wb(15,"div",10),s.Wb(16,"button",11),s.Sc(17," Request my early access "),s.kc(),s.Rb(18,"svg",12),s.Vb(),s.Vb(),s.Vb()),2&e&&(s.Db(10),s.sc("autocomplete",!0))},directives:[V.b,h.a,d.b,d.d,l.a,r.f,p.a,f.a],styles:[""]}),e})();const F=[{path:"modern",component:g.d,children:[{path:"signin",component:v},{path:"signup",component:x},{path:"reset-password",component:w},{path:"forgot-password",component:S},{path:"confirmation",component:y}]},{path:"full",component:g.c,children:[{path:"signin",component:v},{path:"signup",component:x},{path:"reset-password",component:w},{path:"forgot-password",component:S},{path:"confirmation",component:y}]},{path:"full-middle",component:g.e,children:[{path:"signin",component:v},{path:"signup",component:x},{path:"reset-password",component:w},{path:"forgot-password",component:S},{path:"confirmation",component:y}]},{path:"",component:g.b,children:[{path:"",component:v},{path:"signout",component:(()=>{class e{constructor(e,i){this.router=e,this._profile=i}ngOnInit(){this._profile.data="",localStorage.removeItem("authToken"),localStorage.removeItem("_profile"),this.router.navigate(["/auth"])}}return e.\u0275fac=function(i){return new(i||e)(s.Qb(r.e),s.Qb(u.a))},e.\u0275cmp=s.Kb({type:e,selectors:[["app-auth-signout"]],decls:2,vars:0,template:function(e,i){1&e&&(s.Wb(0,"p"),s.Sc(1," auth-signout works!\n"),s.Vb())},styles:[""]}),e})()},{path:"signup",component:x},{path:"reset-password",component:w},{path:"forgot-password",component:S},{path:"confirmation",component:y}]},{path:"book-a-demo",component:I},{path:"coming-soon",children:[{path:"modern",component:g.d,children:[{path:"",component:A}]},{path:"full",component:g.c,children:[{path:"",component:A}]},{path:"full-middle",component:g.e,children:[{path:"",component:A}]},{path:"basic",component:g.b,children:[{path:"",component:A}]}]}];let j=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=s.Ob({type:e}),e.\u0275inj=s.Nb({imports:[[r.i.forChild(F)],r.i]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=s.Ob({type:e}),e.\u0275inj=s.Nb({imports:[[o.c,j,a.a]]}),e})()}}]);