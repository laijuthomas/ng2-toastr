/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './toast-container.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import9 from './toast-options';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/core/src/animation/animation_style_util';
import * as import13 from '@angular/core/src/animation/animation_sequence_player';
import * as import14 from '@angular/core/src/animation/animation_styles';
import * as import15 from '@angular/core/src/animation/animation_keyframe';
import * as import16 from '@angular/core/src/animation/animation_player';
import * as import17 from '@angular/common/src/directives/ng_for';
import * as import18 from '@angular/core/src/linker/template_ref';
import * as import19 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import20 from '@angular/core/src/security';
import * as import21 from '@angular/common/src/directives/ng_if';
import * as import22 from '@angular/common/src/directives/ng_switch';
var renderType_ToastContainer_Host:import0.RenderComponentType = (null as any);
class _View_ToastContainer_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ToastContainer_0_4:import3.ToastContainer;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ToastContainer_Host0,renderType_ToastContainer_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('toast-container',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ToastContainer0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ToastContainer_0_4 = new import3.ToastContainer(this.parentInjector.get(import8.DomSanitizer),this.parentInjector.get(import9.ToastOptions,(null as any)));
    this._appEl_0.initComponent(this._ToastContainer_0_4,[],compView_0);
    compView_0.create(this._ToastContainer_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ToastContainer) && (0 === requestNodeIndex))) { return this._ToastContainer_0_4; }
    return notFoundResult;
  }
}
function viewFactory_ToastContainer_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ToastContainer_Host === (null as any))) { (renderType_ToastContainer_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,[],{})); }
  return new _View_ToastContainer_Host0(viewUtils,parentInjector,declarationEl);
}
export const ToastContainerNgFactory:import11.ComponentFactory<import3.ToastContainer> = new import11.ComponentFactory<import3.ToastContainer>('toast-container',viewFactory_ToastContainer_Host0,import3.ToastContainer);
const styles_ToastContainer:any[] = [];
var ToastContainer_flyInOut_states:any = {
  in: {
    opacity: 1,
    transform: 'translateX(0)'
  }
  ,
  '*': {},
  void: {}
}
;
function ToastContainer_flyInOut_factory(view:import1.AppView<any>,element:any,currentState:any,nextState:any):void {
  view.cancelActiveAnimation(element,'flyInOut',(nextState == 'void'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = ToastContainer_flyInOut_states['*'];
  var startStateStyles:any = ToastContainer_flyInOut_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = ToastContainer_flyInOut_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  import12.renderStyles(element,view.renderer,import12.clearStyles(startStateStyles));
  if (((player == (null as any)) && ((currentState == 'void') && true))) {
      player = new import13.AnimationSequencePlayer([view.renderer.animate(element,new import14.AnimationStyles(import12.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          opacity: 0,
          transform: 'translateX(-100%)'
        }

      ]
      )),import12.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import15.AnimationKeyframe(0,new import14.AnimationStyles(import12.collectAndResolveStyles(collectedStyles,[{}]))),
        new import15.AnimationKeyframe(1,new import14.AnimationStyles(import12.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),200,0,'ease-in')]);
    totalTime = 200;
  }
  if (((player == (null as any)) && (true && (nextState == 'void')))) {
      player = new import13.AnimationSequencePlayer([view.renderer.animate(element,new import14.AnimationStyles(import12.collectAndResolveStyles(collectedStyles,[startStateStyles])),[
          new import15.AnimationKeyframe(0,new import14.AnimationStyles(import12.collectAndResolveStyles(collectedStyles,[{
            opacity: 'true',
            transform: 'true'
          }
        ]))),
          new import15.AnimationKeyframe(1,new import14.AnimationStyles(import12.collectAndResolveStyles(collectedStyles,[{
            opacity: 0,
            transform: 'translateX(100%)'
          }
        ])))
      ]
    ,200,0,(null as any))]);
    totalTime = 200;
  }
  if ((player == (null as any))) { (player = new import16.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    import12.renderStyles(element,view.renderer,import12.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  view.queueAnimation(element,'flyInOut',player,totalTime,currentState,nextState);
}
var renderType_ToastContainer:import0.RenderComponentType = (null as any);
class _View_ToastContainer0 extends import1.AppView<import3.ToastContainer> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _appEl_3:import2.AppElement;
  _TemplateRef_3_5:any;
  _NgFor_3_6:import17.NgFor;
  _text_4:any;
  _text_5:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ToastContainer0,renderType_ToastContainer,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_1,'id','toast-container');
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_3 = new import2.AppElement(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import18.TemplateRef_(this._appEl_3,viewFactory_ToastContainer1);
    this._NgFor_3_6 = new import17.NgFor(this._appEl_3.vcRef,this._TemplateRef_3_5,this.parentInjector.get(import19.IterableDiffers),this.ref);
    this._text_4 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._text_5
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import17.NgFor) && (3 === requestNodeIndex))) { return this._NgFor_3_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_2:any = this.context.toasts;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgFor_3_6.ngForOf = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._NgFor_3_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_3_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this.context.position;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementStyle(this._el_1,'position',((this.viewUtils.sanitizer.sanitize(import20.SecurityContext.STYLE,currVal_0) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import20.SecurityContext.STYLE,currVal_0).toString()));
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'',this.context.positionClass,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_1,'className',currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_ToastContainer0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ToastContainer> {
  if ((renderType_ToastContainer === (null as any))) { (renderType_ToastContainer = viewUtils.createRenderComponentType('/Users/dereks/Documents/PointInside/ng2-toastr/src/toast-container.component.ts class ToastContainer - inline template',0,import10.ViewEncapsulation.None,styles_ToastContainer,{flyInOut: ToastContainer_flyInOut_factory})); }
  return new _View_ToastContainer0(viewUtils,parentInjector,declarationEl);
}
class _View_ToastContainer1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import21.NgIf;
  _text_3:any;
  _el_4:any;
  _NgSwitch_4_3:import22.NgSwitch;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _appEl_6:import2.AppElement;
  _TemplateRef_6_5:any;
  _NgSwitchCase_6_6:import22.NgSwitchCase;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _appEl_8:import2.AppElement;
  _TemplateRef_8_5:any;
  _NgSwitchDefault_8_6:import22.NgSwitchDefault;
  _text_9:any;
  _text_10:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ToastContainer1,renderType_ToastContainer,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import18.TemplateRef_(this._appEl_2,viewFactory_ToastContainer2);
    this._NgIf_2_6 = new import21.NgIf(this._appEl_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_0,'div',(null as any));
    this._NgSwitch_4_3 = new import22.NgSwitch();
    this._text_5 = this.renderer.createText(this._el_4,'\n          ',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4,(null as any));
    this._appEl_6 = new import2.AppElement(6,4,this,this._anchor_6);
    this._TemplateRef_6_5 = new import18.TemplateRef_(this._appEl_6,viewFactory_ToastContainer3);
    this._NgSwitchCase_6_6 = new import22.NgSwitchCase(this._appEl_6.vcRef,this._TemplateRef_6_5,this._NgSwitch_4_3);
    this._text_7 = this.renderer.createText(this._el_4,'\n          ',(null as any));
    this._anchor_8 = this.renderer.createTemplateAnchor(this._el_4,(null as any));
    this._appEl_8 = new import2.AppElement(8,4,this,this._anchor_8);
    this._TemplateRef_8_5 = new import18.TemplateRef_(this._appEl_8,viewFactory_ToastContainer4);
    this._NgSwitchDefault_8_6 = new import22.NgSwitchDefault(this._appEl_8.vcRef,this._TemplateRef_8_5,this._NgSwitch_4_3);
    this._text_9 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'              \n      ',(null as any));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._anchor_6,
      this._text_7,
      this._anchor_8,
      this._text_9,
      this._text_10
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import21.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6; }
    if (((token === import18.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import22.NgSwitchCase) && (6 === requestNodeIndex))) { return this._NgSwitchCase_6_6; }
    if (((token === import18.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import22.NgSwitchDefault) && (8 === requestNodeIndex))) { return this._NgSwitchDefault_8_6; }
    if (((token === import22.NgSwitch) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._NgSwitch_4_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.context.$implicit.state;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      var oldRenderVar:any = this._expr_2;
      if ((oldRenderVar == import7.UNINITIALIZED)) { (oldRenderVar = 'void'); }
      var newRenderVar:any = currVal_2;
      if ((newRenderVar == import7.UNINITIALIZED)) { (newRenderVar = 'void'); }
      this.componentType.animations['flyInOut'](this,this._el_0,oldRenderVar,newRenderVar);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this.context.$implicit.title;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_2_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.context.$implicit.enableHTML;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgSwitch_4_3.ngSwitch = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = true;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgSwitchCase_6_6.ngSwitchCase = currVal_5;
      this._expr_5 = currVal_5;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import4.interpolate(1,'toast toast-',this.context.$implicit.type,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  detachInternal():void {
    this.componentType.animations['flyInOut'](this,this._el_0,this._expr_2,'void');
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.dismiss(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ToastContainer1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ToastContainer1(viewUtils,parentInjector,declarationEl);
}
class _View_ToastContainer2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ToastContainer2,renderType_ToastContainer,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',(this.parent.context.$implicit.titleClass || this.parent.parent.context.titleClass),'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'',this.parent.context.$implicit.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ToastContainer2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ToastContainer2(viewUtils,parentInjector,declarationEl);
}
class _View_ToastContainer3 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ToastContainer3,renderType_ToastContainer,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this.parent.parent.context.sanitizer.bypassSecurityTrustHtml(this.parent.context.$implicit.message);
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'innerHTML',this.viewUtils.sanitizer.sanitize(import20.SecurityContext.HTML,currVal_0));
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ToastContainer3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ToastContainer3(viewUtils,parentInjector,declarationEl);
}
class _View_ToastContainer4 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ToastContainer4,renderType_ToastContainer,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',(this.parent.context.$implicit.messageClass || this.parent.parent.context.messageClass),'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'',this.parent.context.$implicit.message,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ToastContainer4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ToastContainer4(viewUtils,parentInjector,declarationEl);
}