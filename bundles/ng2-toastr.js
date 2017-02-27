System.registerDynamic("ng2-toastr/src/toast-container.component", ["@angular/core", "./toast-options", "@angular/platform-browser", "rxjs/add/operator/first", "rxjs/Subject"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  var core_1 = $__require('@angular/core');
  var toast_options_1 = $__require('./toast-options');
  var platform_browser_1 = $__require('@angular/platform-browser');
  $__require('rxjs/add/operator/first');
  var Subject_1 = $__require('rxjs/Subject');
  var ToastContainer = (function() {
    function ToastContainer(sanitizer, cdr, _zone, options) {
      this.sanitizer = sanitizer;
      this.cdr = cdr;
      this._zone = _zone;
      this.position = 'fixed';
      this.messageClass = 'toast-message';
      this.titleClass = 'toast-title';
      this.positionClass = 'toast-top-right';
      this.toasts = [];
      this.maxShown = 5;
      this.newestOnTop = false;
      this.animate = 'fade';
      this._fresh = true;
      this._onEnter = new Subject_1.Subject();
      this._onExit = new Subject_1.Subject();
      if (options) {
        Object.assign(this, options);
      }
    }
    ToastContainer.prototype.onEnter = function() {
      return this._onEnter.asObservable();
    };
    ToastContainer.prototype.onExit = function() {
      return this._onExit.asObservable();
    };
    ToastContainer.prototype.addToast = function(toast) {
      if (this.positionClass.indexOf('top') > 0) {
        if (this.newestOnTop) {
          this.toasts.unshift(toast);
        } else {
          this.toasts.push(toast);
        }
        if (this.toasts.length > this.maxShown) {
          var diff = this.toasts.length - this.maxShown;
          if (this.newestOnTop) {
            this.toasts.splice(this.maxShown);
          } else {
            this.toasts.splice(0, diff);
          }
        }
      } else {
        this.toasts.unshift(toast);
        if (this.toasts.length > this.maxShown) {
          this.toasts.splice(this.maxShown);
        }
      }
      if (this.animate === null && this._fresh) {
        this._fresh = false;
        this._onEnter.next();
        this._onEnter.complete();
      }
      this.cdr.detectChanges();
    };
    ToastContainer.prototype.removeToast = function(toast) {
      if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
        toast.timeoutId = null;
      }
      this.toasts = this.toasts.filter(function(t) {
        return t.id !== toast.id;
      });
    };
    ToastContainer.prototype.removeAllToasts = function() {
      this.toasts = [];
    };
    ToastContainer.prototype.clicked = function(toast) {
      if (this.onToastClicked) {
        this.onToastClicked(toast);
      }
    };
    ToastContainer.prototype.anyToast = function() {
      return this.toasts.length > 0;
    };
    ToastContainer.prototype.findToast = function(toastId) {
      for (var _i = 0,
          _a = this.toasts; _i < _a.length; _i++) {
        var toast = _a[_i];
        if (toast.id === toastId) {
          return toast;
        }
      }
      return null;
    };
    ToastContainer.prototype.onAnimationEnd = function(event) {
      var _this = this;
      console.log(event);
      if (event.toState === 'void') {
        this._ngExit();
      } else {
        if (this._fresh) {
          this._fresh = false;
          this._zone.run(function() {
            _this._onEnter.next();
            _this._onEnter.complete();
          });
        }
      }
    };
    ToastContainer.prototype._ngExit = function() {
      var _this = this;
      this._zone.onMicrotaskEmpty.first().subscribe(function() {
        _this._onExit.next();
        _this._onExit.complete();
      });
    };
    ToastContainer.prototype.ngOnDestroy = function() {
      this._ngExit();
    };
    return ToastContainer;
  }());
  ToastContainer = __decorate([core_1.Component({
    selector: 'toast-container',
    template: "\n    <div #toastContainer id=\"toast-container\" [style.position]=\"position\" class=\"{{positionClass}}\">\n      <div *ngFor=\"let toast of toasts\" [@inOut]=\"animate\" (@inOut.done)=\"onAnimationEnd($event)\" class=\"toast toast-{{toast.type}}\" \n      (click)=\"clicked(toast)\">\n        <div class=\"toast-close-button\" *ngIf=\"toast.config.showCloseButton\" (click)=\"removeToast(toast)\">&times;\n        </div> \n        <div *ngIf=\"toast.title\" class=\"{{toast.config.titleClass || titleClass}}\">{{toast.title}}</div>\n        <div [ngSwitch]=\"toast.config.enableHTML\">\n          <span *ngSwitchCase=\"true\" [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(toast.message)\"></span>\n          <span *ngSwitchDefault class=\"{{toast.config.messageClass || messageClass}}\">{{toast.message}}</span>\n        </div>             \n      </div>\n    </div>\n    ",
    animations: [core_1.trigger('inOut', [core_1.state('flyRight, flyLeft', core_1.style({
      opacity: 1,
      transform: 'translateX(0)'
    })), core_1.state('fade', core_1.style({opacity: 1})), core_1.state('slideDown, slideUp', core_1.style({
      opacity: 1,
      transform: 'translateY(0)'
    })), core_1.transition('void => flyRight', [core_1.style({
      opacity: 0,
      transform: 'translateX(100%)'
    }), core_1.animate('0.2s ease-in')]), core_1.transition('flyRight => void', [core_1.animate('0.2s 10 ease-out', core_1.style({
      opacity: 0,
      transform: 'translateX(100%)'
    }))]), core_1.transition('void => flyLeft', [core_1.style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }), core_1.animate('0.2s ease-in')]), core_1.transition('flyLeft => void', [core_1.animate('0.2s 10 ease-out', core_1.style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }))]), core_1.transition('void => fade', [core_1.style({opacity: 0}), core_1.animate('0.3s ease-in')]), core_1.transition('fade => void', [core_1.animate('0.3s 10 ease-out', core_1.style({opacity: 0}))]), core_1.transition('void => slideDown', [core_1.style({
      opacity: 0,
      transform: 'translateY(-200%)'
    }), core_1.animate('0.3s ease-in')]), core_1.transition('slideDown => void', [core_1.animate('0.3s 10 ease-out', core_1.style({
      opacity: 0,
      transform: 'translateY(-200%)'
    }))]), core_1.transition('void => slideUp', [core_1.style({
      opacity: 0,
      transform: 'translateY(200%)'
    }), core_1.animate('0.3s ease-in')]), core_1.transition('slideUp => void', [core_1.animate('0.3s 10 ease-out', core_1.style({
      opacity: 0,
      transform: 'translateY(200%)'
    }))])])]
  }), __param(3, core_1.Optional()), __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, core_1.ChangeDetectorRef, core_1.NgZone, toast_options_1.ToastOptions])], ToastContainer);
  exports.ToastContainer = ToastContainer;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-toastr/src/toast", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  Object.defineProperty(exports, "__esModule", {value: true});
  var Toast = (function() {
    function Toast(type, message, title, data) {
      this.type = type;
      this.message = message;
      this.title = title;
      this.data = data;
      this.config = {
        dismiss: 'auto',
        enableHTML: false,
        titleClass: '',
        messageClass: '',
        toastLife: 3000,
        showCloseButton: false
      };
    }
    return Toast;
  }());
  exports.Toast = Toast;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-toastr/src/toast-manager", ["@angular/core", "./toast-container.component", "./toast-options", "./toast", "rxjs/Subject"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  var core_1 = $__require('@angular/core');
  var toast_container_component_1 = $__require('./toast-container.component');
  var toast_options_1 = $__require('./toast-options');
  var toast_1 = $__require('./toast');
  var Subject_1 = $__require('rxjs/Subject');
  var ToastsManager = (function() {
    function ToastsManager(componentFactoryResolver, appRef, options) {
      this.componentFactoryResolver = componentFactoryResolver;
      this.appRef = appRef;
      this.options = {};
      this.index = 0;
      this.toastClicked = new Subject_1.Subject();
      if (options) {
        Object.assign(this.options, options);
      }
    }
    ToastsManager.prototype.setRootViewContainerRef = function(vRef) {
      this._rootViewContainerRef = vRef;
    };
    ToastsManager.prototype.onClickToast = function() {
      return this.toastClicked.asObservable();
    };
    ToastsManager.prototype.show = function(toast, options) {
      var _this = this;
      return new Promise(function(resolve, reject) {
        if (!_this.container) {
          if (!_this._rootViewContainerRef) {
            try {
              _this._rootViewContainerRef = _this.appRef['_rootComponents'][0]['_hostElement'].vcRef;
            } catch (e) {
              reject(new Error('Please set root ViewContainerRef using setRootViewContainerRef(vRef: ViewContainerRef) method.'));
            }
          }
          var providers = core_1.ReflectiveInjector.resolve([{
            provide: toast_options_1.ToastOptions,
            useValue: _this.options
          }]);
          var toastFactory = _this.componentFactoryResolver.resolveComponentFactory(toast_container_component_1.ToastContainer);
          var childInjector = core_1.ReflectiveInjector.fromResolvedProviders(providers, _this._rootViewContainerRef.parentInjector);
          _this.container = _this._rootViewContainerRef.createComponent(toastFactory, _this._rootViewContainerRef.length, childInjector);
          _this.container.instance.onToastClicked = function(toast) {
            _this._onToastClicked(toast);
          };
        }
        resolve(_this.setupToast(toast, options));
      });
    };
    ToastsManager.prototype.createTimeout = function(toast) {
      var _this = this;
      var task = setTimeout(function() {
        _this.clearToast(toast);
      }, toast.config.toastLife);
      return task.toString();
    };
    ToastsManager.prototype.setupToast = function(toast, options) {
      var _this = this;
      toast.id = ++this.index;
      Object.keys(toast.config).forEach(function(k) {
        if (_this.options.hasOwnProperty(k)) {
          toast.config[k] = _this.options[k];
        }
        if (options && options.hasOwnProperty(k)) {
          toast.config[k] = options[k];
        }
      });
      if (toast.config.dismiss === 'auto') {
        toast.timeoutId = this.createTimeout(toast);
      }
      this.container.instance.addToast(toast);
      return toast;
    };
    ToastsManager.prototype._onToastClicked = function(toast) {
      this.toastClicked.next(toast);
      if (toast.config.dismiss === 'click') {
        this.clearToast(toast);
      }
    };
    ToastsManager.prototype.dismissToast = function(toast) {
      this.clearToast(toast);
    };
    ToastsManager.prototype.clearToast = function(toast) {
      if (this.container) {
        var instance = this.container.instance;
        instance.removeToast(toast);
        if (!instance.anyToast()) {
          this.dispose();
        }
      }
    };
    ToastsManager.prototype.clearAllToasts = function() {
      if (this.container) {
        var instance = this.container.instance;
        instance.removeAllToasts();
        this.dispose();
      }
    };
    ToastsManager.prototype.dispose = function() {
      this.container.destroy();
      this.container = null;
    };
    ToastsManager.prototype.error = function(message, title, options) {
      var data = options && options.data ? options.data : null;
      var toast = new toast_1.Toast('error', message, title, data);
      return this.show(toast, options);
    };
    ToastsManager.prototype.info = function(message, title, options) {
      var data = options && options.data ? options.data : null;
      var toast = new toast_1.Toast('info', message, title, data);
      return this.show(toast, options);
    };
    ToastsManager.prototype.success = function(message, title, options) {
      var data = options && options.data ? options.data : null;
      var toast = new toast_1.Toast('success', message, title, data);
      return this.show(toast, options);
    };
    ToastsManager.prototype.warning = function(message, title, options) {
      var data = options && options.data ? options.data : null;
      var toast = new toast_1.Toast('warning', message, title, data);
      return this.show(toast, options);
    };
    ToastsManager.prototype.custom = function(message, title, options) {
      var data = options && options.data ? options.data : null;
      var toast = new toast_1.Toast('custom', message, title, data);
      return this.show(toast, options);
    };
    return ToastsManager;
  }());
  ToastsManager = __decorate([core_1.Injectable(), __param(2, core_1.Optional()), __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, core_1.ApplicationRef, toast_options_1.ToastOptions])], ToastsManager);
  exports.ToastsManager = ToastsManager;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-toastr/src/toast-options", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  var core_1 = $__require('@angular/core');
  var ToastOptions = (function() {
    function ToastOptions() {
      this.positionClass = 'toast-top-right';
      this.maxShown = 5;
      this.newestOnTop = false;
      this.animate = 'fade';
      this.toastLife = 5000;
      this.enableHTML = false;
      this.dismiss = 'auto';
      this.messageClass = 'toast-message';
      this.titleClass = 'toast-title';
      this.showCloseButton = false;
    }
    return ToastOptions;
  }());
  ToastOptions = __decorate([core_1.Injectable(), __metadata("design:paramtypes", [])], ToastOptions);
  exports.ToastOptions = ToastOptions;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-toastr/src/toast.module", ["@angular/core", "@angular/common", "./toast-container.component", "./toast-manager", "./toast-options"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  var core_1 = $__require('@angular/core');
  var common_1 = $__require('@angular/common');
  var toast_container_component_1 = $__require('./toast-container.component');
  var toast_manager_1 = $__require('./toast-manager');
  var toast_options_1 = $__require('./toast-options');
  var ToastModule = ToastModule_1 = (function() {
    function ToastModule() {}
    ToastModule.forRoot = function(config) {
      return {
        ngModule: ToastModule_1,
        providers: config ? [{
          provide: toast_options_1.ToastOptions,
          useValue: config
        }, toast_manager_1.ToastsManager] : [toast_manager_1.ToastsManager]
      };
    };
    return ToastModule;
  }());
  ToastModule = ToastModule_1 = __decorate([core_1.NgModule({
    imports: [common_1.CommonModule],
    declarations: [toast_container_component_1.ToastContainer],
    exports: [toast_container_component_1.ToastContainer],
    entryComponents: [toast_container_component_1.ToastContainer]
  })], ToastModule);
  exports.ToastModule = ToastModule;
  var ToastModule_1;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-toastr/ng2-toastr", ["./src/toast", "./src/toast-manager", "./src/toast-container.component", "./src/toast-options", "./src/toast.module"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  Object.defineProperty(exports, "__esModule", {value: true});
  var toast_1 = $__require('./src/toast');
  exports.Toast = toast_1.Toast;
  var toast_manager_1 = $__require('./src/toast-manager');
  exports.ToastsManager = toast_manager_1.ToastsManager;
  var toast_container_component_1 = $__require('./src/toast-container.component');
  exports.ToastContainer = toast_container_component_1.ToastContainer;
  var toast_options_1 = $__require('./src/toast-options');
  exports.ToastOptions = toast_options_1.ToastOptions;
  var toast_module_1 = $__require('./src/toast.module');
  exports.ToastModule = toast_module_1.ToastModule;
  global.define = __define;
  return module.exports;
});

//# sourceMappingURL=ng2-toastr.js.map