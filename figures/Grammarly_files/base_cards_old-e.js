(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"6PJy":function(e,t,n){"use strict";var r=n("mrSG"),o=n("ERkP"),i=n("oZTP"),a=n("aUoX"),s=n("BAB1"),c=n("n3Ao"),l=n("nJ6A"),u=n("t2Ba"),p=n("8wcY");function d(e){return null!==e&&e.replace(/\s/g,"").length<3&&null!==e.match(/[.,;:!?\\\/-]/)}function m(e,t){if(e.length<=4)return o.createElement("span",null,t);Object(u.invariant)(e!==t,"Old and new text should differ");var n=Object(l.textdiff)(e,t),r=n.from,i=n.to,a=n.oldFragment,s=n.newFragment;if(void 0===s)return null;var c=1===s.length&&r>0&&e[r-1]===s,d=1===a.length&&0===s.length&&t[r-1]===a,m=r,f=s;return(c||d)&&(m=r-1),c&&(f=s+s),d&&(f=a),f.length>3?o.createElement("span",null,t):o.createElement("span",null,e.substring(0,m),o.createElement("span",{className:p.bold},f),e.substring(i))}var f=n("8wcY");function h(e){var t=e.filter(function(e){return"insert"===e.type||"delete"===e.type});return t.length>0?t[t.length-1].type+"Replacement":""}function v(e,t,n){return e[t]&&e[t].type===n}var g=function(e,t){return v(e,t+1,"delete")},b=function(e,t){return v(e,t+1,"insert")},y=function(e,t){return t>0&&v(e,t-1,"insert")};function E(e){return e.slice(e.findIndex(function(e){return"arrow"===e.type})+1)}function _(e,t,n,a,s){return void 0===s&&(s=f),o.createElement("span",r.__assign({},Object(i.classes)(s.insertPart,n&&s.insertWithWord,null!==(c=e)&&1===c.replace(/\s/g,"").length&&d(c)&&"?"!==e&&s.insertPunctuation),{key:a}),m(t,e));var c}function C(e,t,n,a){return void 0===a&&(a=f),o.createElement("span",r.__assign({},Object(i.classes)(a.deletePart,null!==(s=e)&&null!==s.match(/["'”][.,;]/)&&a.deleteQuote,d(e)&&a.deletePunctuation,function(e){return null!==e&&null!==e.match(/,,/)}(e)&&a.deleteDoubleComma,function(e){return"’"===e}(e)&&a.deleteApostrophe,function(e){return null!==e&&1===e.length&&null!==e.match(/[a-z]/i)}(e)&&a.deleteLetter,function(e){return null!==e&&e.match(/[.,;:!?\\\/-]\s*[a-z]/i)}(e)&&a.deletePunctuationBeforeLetter),{key:n}),m(t,e));var s}function T(e,t,n,a){return void 0===a&&(a=f),o.createElement("span",{key:n,className:f[h(e)],onClick:c.d.stopPropagation(t)},e.map(function(t,n){switch(t.type){case"delete":return C(t.text,function(e,t){var n=e.slice(t).filter(function(e){return"insert"===e.type});return n.length>0?n[0].text:""}(e,n),n,a);case"insert":return _(t.text,function(e,t){var n=e.slice(0,t).filter(function(e){return"delete"===e.type});return n.length>0?n[0].text:""}(e,n),function(e){return 0===e.filter(function(e){return"insert"!==e.type&&"text"!==e.type}).length}(e),n,a);case"text":return function(e,t,n,a,s,c){return void 0===c&&(c=f),o.createElement("span",r.__assign({},Object(i.classes)(c.wordPart,t&&c.wordBeforeDelete,n&&c.wordBeforeInsert,a&&c.wordAfterInsert),{key:s}),e)}(t.text,g(e,n),b(e,n),y(e,n),n,a);case"arrow":return function(e,t){return void 0===t&&(t=f),o.createElement("span",{className:t.arrowPart,key:e}," → ")}(n,a);default:throw new Error("Part "+t+" should not exist")}}))}var x=n("xEd5");n.d(t,"a",function(){return D});var k=n("8wcY");function w(e){return o.createElement("div",{className:k.singleReplacement},o.createElement(a.a,{title:e.tooltipText,align:"top"},T(e.transform,e.onReplace)))}function A(e,t){return void 0===t&&(t=!1),o.createElement("div",{className:k.listReplacement},e.replacements.map(function(n,a){return o.createElement("div",r.__assign({key:a},Object(i.classes)(k.listItemReplacementWrapper,t&&k.flattenListItemReplacementWrapper)),o.createElement("span",{className:k.listItemReplacement},T(n.transform,e.getOnReplace(n),a)))}))}function O(e){var t,n=e.replacements,a=n[0],s=n.slice(1).map(function(t,n){return T(E(t.transform),e.getOnReplace(t),n)});return o.createElement("div",r.__assign({},Object(i.classes)(k.dropDownReplacement,!e.isExpanded&&k.collapsedDropDownReplacement)),w(e.getTitleReplacement()),o.createElement("div",r.__assign({},Object(i.classes)(k.dropDown,e.isExpanded?k.staticDropDown:k.hoverDropDown)),o.createElement("span",{className:k.dropDownSizer},T((t=a.transform).slice(0,t.findIndex(function(e){return"arrow"===e.type})+1),null)),o.createElement("div",{className:k.dropDownWrap},s)),e.isExpanded&&o.createElement("div",{key:"height",className:k.dropDownHeight},s))}function N(e){try{switch(e.template){case s.a.or:return function(e){return o.createElement("span",{className:k.orReplacement},o.createElement(a.a,{title:e.tooltipText,align:"top"},T(e.transform1,e.onReplace1))," ",o.createElement("span",{className:k.orSeparator},"or")," ",o.createElement(a.a,{title:e.tooltipText,align:"top"},T(e.transform2,e.onReplace2)))}(e);case s.a.single:return w(e);case s.a.list:return A(e);case s.a.flatList:return A(e,!0);case s.a.multi:case s.a.multiExpanded:return O(e);case s.a.long:return function(e){return o.createElement("div",null,e.replacements.map(function(t,n){return o.createElement("div",{className:k.longReplacement,key:n},o.createElement(a.a,{title:e.tooltipText,align:"top"},T(E(t.transform),e.getOnReplace(t))))}))}(e);case s.a.didYouMean:return function(e){return o.createElement("div",{className:k.didYouMean},o.createElement("span",{className:k.didYouMeanLabel},"Did you mean "),o.createElement(a.a,{title:e.tooltipText,align:"top"},T(e.transform.filter(function(e){return"insert"===e.type}),e.onReplace)),"?")}(e);case s.a.sideCommas:return function(e){var t=e.transform.filter(function(e){return"delete"===e.type})[0].text.replace(/,/g,"").split(" ").filter(Boolean)||[];return o.createElement("div",{className:k.sideCommas,onClick:c.d.stopPropagation(e.onReplace)},o.createElement(a.a,{title:e.tooltipText,align:"top"},o.createElement("span",{className:k.deleteReplacement},C(",","",0),t.shift(),"...",t.pop(),C(",","",1))))}(e);default:throw new Error("Replacement template "+s.a[e.template]+" is not supported")}}catch(e){return x.Monitoring.Logging.getLogger("cards").error("Error while rendering cards replacement",e),null}}var D=function(e){var t=e.replacement;return o.createElement("div",{className:k.replacement},N(t))}},"Cq9+":function(e,t,n){"use strict";n.d(t,"a",function(){return v}),n.d(t,"c",function(){return g}),n.d(t,"b",function(){return b}),n.d(t,"d",function(){return y});var r=n("mrSG"),o=n("ERkP"),i=n("oZTP"),a=n("t2Ba"),s=n("n3Ao"),c=n("aUoX"),l=n("zoQI"),u=n("6PJy"),p=n("6TTb"),d=function(e){return!(a.DOM.hasParentWithClassName(e,p.titleReplacement)||a.DOM.hasParentWithClassName(e,p.headerButtons))},m=function(e){var t=e.header,n=e.onExpand,a=e.actions,s=e.children;return o.createElement("div",r.__assign({},Object(i.classes)(p.header,t.isActive&&p.headerExpanded,t.isApplied&&p.headerApplied),{onMouseOver:function(e){return d(e.target)?a.hoverExpandButton():a.unhoverExpandButton()},onMouseLeave:function(e){return a.unhoverExpandButton()},onMouseOut:function(e){return a.unhoverExpandButton()},onClick:function(e){!t.isApplied&&d(e.target)&&(t.isActive||n(),a.toggleExpand(),a.unhoverExpandButton())}}),s)},f=function(e){var t=e.className,n=e.tooltipTitle,a=e.onClick;return o.createElement(c.a,{title:n,align:"top"},o.createElement("span",r.__assign({},Object(i.classes)(p.buttonWrapper,p.headerButton,t),{role:"button",onClick:function(e){e.stopPropagation(),a()}})))},h=function(e){var t=e.header,n=e.onExpand,a=e.actions,s=e.isExpandHovered,c=e.hasAddToDictionary;return a&&o.createElement("div",{className:p.headerButtons},c&&o.createElement(f,{className:p.btnDict,onClick:function(){return a.addToDictionary()},tooltipTitle:"Add to Dictionary"}),o.createElement(f,r.__assign({},Object(i.classes)(t.isActive?p.btnCollapse:p.btnExpand,s&&p.expandHovered),{onClick:function(){t.isActive||n(),a.toggleExpand()},tooltipTitle:t.isActive?"Collapse card":"Expand card"})),o.createElement(f,{className:p.btnIgnore,onClick:function(){return a.ignore()},tooltipTitle:"Ignore"}))},v=function(e){var t=e.header,n=e.onExpand,a=e.actions,c=e.isExpandHovered,d=e.isReportMode;return o.createElement(m,{onExpand:n,header:t,actions:a},t.isApplied?o.createElement(l.b,{onMouseOver:function(){return a.hoverUndoButton()},onMouseLeave:function(){return a.unhoverUndoButton()},onMouseOut:function(){return a.unhoverUndoButton()},onClick:function(){return a.undoInteraction()},className:p.btnUndo},"Undo"):o.createElement(h,{header:t,onExpand:n,actions:a,isExpandHovered:c,hasAddToDictionary:t.hasAddToDictionary}),o.createElement("div",{className:p.title,"data-name":"title"},t.isShowTextTitle?o.createElement("div",r.__assign({},Object(i.classes)(p.plainTextTitle,t.isHighlightTextLabel&&p.highlightLabel),s.d.setInnerHTML(t.title))):o.createElement("div",r.__assign({},Object(i.classes)(p.titleReplacement,d&&p.brackets)),o.createElement(u.a,{replacement:t.replacement})),t.isActive&&t.isReplacementUnderTitle&&t.isVisibleQuickReplacement&&o.createElement("div",r.__assign({},Object(i.classes)(p.underTitleReplacement,t.isLongReplacement&&p.longUnderTitleReplacement,t.isDidYouMean&&p.didYouMean)),o.createElement(u.a,{replacement:t.replacement}))))},g=function(e){var t=e.header,n=e.onExpand,a=e.actions,c=e.isExpandHovered,u=e.isReportMode;return o.createElement(m,{onExpand:n,header:t,actions:a},t.isApplied?o.createElement(l.b,{onClick:function(){return a.undoInteraction()},className:p.btnUndo},"Undo"):o.createElement(h,{header:t,onExpand:n,actions:a,isExpandHovered:c,hasAddToDictionary:!1}),o.createElement("div",r.__assign({},Object(i.classes)(p.title,p.plainTextTitle,!u&&p.plagiarismTitle)),o.createElement("div",null,t.title),t.isActive&&t.plagiarism.url.map(function(e){return o.createElement("a",{target:"__blank",href:e,className:p.plagiarismHref,onClick:s.d.stopPropagation()},t.plagiarism.urlTitle.orNull())}).orNull()))},b=function(e){var t=e.header,n=e.onExpand,a=e.actions,c=e.isExpandHovered,u=e.isReportMode;return o.createElement(m,{onExpand:n,header:t,actions:a},t.isApplied?o.createElement(l.b,{onClick:function(){return a.undoInteraction()},className:p.btnUndo},"Undo"):o.createElement(h,{header:t,onExpand:n,actions:a,isExpandHovered:c,hasAddToDictionary:!1}),o.createElement("div",r.__assign({},Object(i.classes)(p.title,p.plainTextTitle,!u&&p.enhancementTitle,t.isHighlightTextLabel&&p.highlightLabel)),o.createElement("div",r.__assign({},s.d.setInnerHTML(t.title)))))},y=function(e){var t=e.model,n=e.isApplied;return o.createElement("div",null,o.createElement("div",r.__assign({},Object(i.classes)(p.header,n?p.headerApplied:p.headerExpanded,p.headerSyn,t.isAnyMeanings&&p.headerSynBorder)),n&&o.createElement(l.b,{onClick:function(){return t.undoInteraction()},onMouseOver:function(){return t.select()},onMouseLeave:function(){return t.deselect()},onMouseOut:function(){return t.deselect()},className:p.btnUndo},"Undo"),o.createElement("div",r.__assign({},Object(i.classes)(p.title,p.plainTextTitle)),t.isAnyMeanings?"Synonyms":"No synonyms found"," for ",o.createElement("span",{className:p.synonym},t.title))))}},JotR:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return u});var r,o=n("kwyh"),i=n("ERkP"),a=n("oZTP"),s=n("t2Ba"),c=n("gAIq"),l=n("qHpo");!function(e){e.None="none",e.FromClickPoint="fromClickPoint",e.FromCenter="fromCenter"}(r||(r={}));var u=function(e){function t(t,n){var r=e.call(this,t)||this;return r._ripples=a.Atom.create(Array()),r._disabled=a.Atom.create(!1).view(),r._disabled=void 0===n.disabled?r._disabled:n.disabled,r}return o.c(t,e),t.prototype.componentDidMount=function(){var e=this;this._el&&(this._subscription=this.props.mouseDownEvents.do(function(t){if(!e._disabled.get()&&e._el){var n=e._getAnimationStyle(e._el,t);e._ripples.modify(function(e){return e.concat([n])})}}).debounceTime(1e3).do(function(){return e._ripples.modify(function(){return[]})}).subscribe())},t.prototype.componentWillUnmount=function(){this._subscription&&this._subscription.unsubscribe()},t.prototype._getAnimationStyle=function(e,t){var n=e.getBoundingClientRect(),o=n.width;switch(this.props.animationMode){case r.None:throw new s.InvariantError("unsupported mode, do not mount component if you do not need ripple animation");case r.FromCenter:return{className:l.rippleFromCenter,top:(n.height-o)/2,left:0,width:o,height:o};default:return{className:l.ripple,top:t.pageY-n.top-o/2,left:t.pageX-n.left-o/2,width:o,height:o}}},t.prototype.render=function(){var e=this;return i.createElement("span",{key:"rippleAnimation",className:l.rippleContainer,ref:function(t){return e._el=t}},i.createElement(a.F.span,null,this._ripples.map(function(e){return e.map(function(e,t){return i.createElement("span",{className:e.className,key:t,style:e})})})))},t.contextTypes=o.a({},c.a.DisabledContextTypes),t}(i.Component)},aUoX:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n("kwyh"),o=n("ERkP"),i=n("7nmT"),a=n("CB9K"),s=n("n3Ao"),c=n("EsFq"),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._uuid=c.a.genUuid(),t}return r.c(t,e),t.prototype.componentDidMount=function(){var e=this,t=i.findDOMNode(this),n=function(){return e.context.cleanContent(e._uuid)};this._subs=[a.Observable.merge(a.Observable.fromEvent(t,"mouseenter").withLatestFrom(s.e.toObservable(this.props.title),function(e,t){return t}).filter(Boolean).do(function(n){return e.context.setContent({target:t,content:n,alignment:e.props.align||"auto",uuid:e._uuid})}),a.Observable.fromEvent(t,"mouseleave").do(n)).subscribe().add(n)]},t.prototype.componentWillUnmount=function(){this._subs.forEach(function(e){return e.unsubscribe()}),this._subs=[]},t.prototype.render=function(){return o.Children.only(this.props.children)},t.contextType=c.a.Context,t}(o.Component)},ePPH:function(e,t,n){"use strict";var r,o=n("kwyh"),i=n("ERkP"),a=n("oZTP"),s=n("kvVz"),c=n("ASSm"),l=n("CB9K"),u=n("xEd5"),p=n("t2Ba"),d=n("gAIq"),m=n("aUoX"),f=n("6v47"),h=n("JotR"),v=n("K5YX"),g=function(e){function t(t,n){var r=e.call(this,t)||this;return r._hovered=a.Atom.create(!1),r.mouseDownEvents=new l.Subject,r._setInternals(t),r._isHovered=void 0!==n.hovered?a.Atom.combine(n.hovered,r._hovered,p.or):r._hovered,r}return o.c(t,e),Object.defineProperty(t,"_log",{get:function(){return void 0===this.__buttonLogger&&(this.__buttonLogger=u.Monitoring.Logging.getLogger("Button")),this.__buttonLogger},enumerable:!0,configurable:!0}),t.prototype.getChildContext=function(){return{hovered:this._isHovered,disabled:"boolean"==typeof this._isDisabled?a.Atom.create(this._isDisabled):this._isDisabled,active:"boolean"==typeof this._isActive?a.Atom.create(this._isActive):this._isActive}},t.prototype.componentWillReceiveProps=function(e){this._setInternals(e)},t.prototype.render=function(){var e=void 0!==this.props.href?this._genLinkEl():this._genDivEl();return this.props.title?i.createElement(m.a,{title:this.props.title,align:this.props.titleAlign||"auto"},e):e},Object.defineProperty(t.prototype,"_name",{get:function(){var e=this.props.name,t="string"==typeof e?e:e.get();return void 0!==this.context.name?this.context.name+"/"+t:t},enumerable:!0,configurable:!0}),t.prototype._setInternals=function(e){var n=this,r=e.onClick?this._getGenericButtonInternals(e.onClick,e.disabled):{onClick:void 0,isDisabled:void 0!==e.disabled&&e.disabled},o=r.onClick,i=r.isDisabled;this._onClick=function(e){return t._log.info("Button clicked: "+n._name),o&&o(e).catch(function(e){return t._log.error("Button click failed: "+n._name,e)})},this._isDisabled=i,this._isActive=void 0!==e.active&&e.active},t.prototype._genLinkEl=function(){return this.props.styleType?i.createElement(f.Typography,o.a({styleType:this.props.styleType,nodeType:"a"},this._getLinkRenderProps())):i.createElement(a.F.a,o.a({},this._getLinkRenderProps()))},t.prototype._genDivEl=function(){return this.props.styleType?i.createElement(f.Typography,o.a({styleType:this.props.styleType,nodeType:"div"},this._getDivRenderProps())):i.createElement(a.F.div,o.a({},this._getDivRenderProps()))},t.prototype._getLinkRenderProps=function(){return this._getBaseRenderProps(o.a({href:this.props.href,target:this.props.target},Object(a.classes)(v.linkBtn,this.props.className)))},t.prototype._getDivRenderProps=function(){return this._getBaseRenderProps({role:"button",className:this.props.className})},t.prototype._getBaseRenderProps=function(e){var t=this,n=c.Option.of(this.props.textPosition).orElseL(function(){return r.parseFromNodes(t.props.children)}).map(function(e){return{"data-textpos":e}}).getOrElse({});return o.a({onClick:this._onClick,onMouseOver:function(){return t._hovered.set(!0)},onMouseLeave:function(){return t._hovered.set(!1)},onMouseDown:function(e){var n=e.pageX,r=e.pageY;return t.mouseDownEvents.next({pageX:n,pageY:r})},"data-name":this._name,"data-disabled":this._isDisabled,"data-active":this._isActive,"data-hovered":this._isHovered,style:this.props.style,children:this._renderChildren()},n,e)},t.prototype._renderChildren=function(){return this.props.animationMode&&this.props.animationMode!==h.a.None?this._renderChildrenAsArray().concat(this._renderRippleAnimation()):this.props.children},t.prototype._renderChildrenAsArray=function(){return Array.isArray(this.props.children)?[].concat.apply([],this.props.children):[this.props.children]},t.prototype._renderRippleAnimation=function(){return i.createElement(h.b,{key:"ripple",animationMode:this.props.animationMode||h.a.FromClickPoint,mouseDownEvents:this.mouseDownEvents})},t.prototype._getGenericButtonInternals=function(e,t){void 0===t&&(t=!1);var n=a.Atom.create(!1),r="boolean"==typeof t?n.view(function(e){return t||e}):a.Atom.combine(t,n,p.or);return{onClick:this._decorateOnClickWithStateManager(e,function(e){return n.set(e)},function(){return r.get()}),isDisabled:r}},t.prototype._decorateOnClickWithStateManager=function(e,t,n){var r=this;return function(i){return o.b(r,void 0,void 0,function(){return o.d(this,function(r){switch(r.label){case 0:if(i.stopPropagation(),n())return[2];t(!0),r.label=1;case 1:return r.trys.push([1,,3,4]),this._hovered.set(!1),[4,e()];case 2:return[2,r.sent()];case 3:return t(!1),[7];case 4:return[2]}})})}},t.displayName="BaseButton",t.contextTypes=o.a({},d.a.HoveredContextTypes,d.a.GroupedContextTypes),t.childContextTypes=d.a.contextTypes,t.__buttonLogger=void 0,t}(i.Component);!function(e){var t=new Map([["+","everywhere"],["++","everywhere"],["+-","left"],["-+","right"],["+++","everywhere"],["+-+","everywhere"],["++-","left"],["-++","right"],["-+-","surrounded"]]),n=function(e){return e.map(function(e){return"string"==typeof e?"+":"-"}).join("")};e.parseFromNodes=function(e){var r=s.isFragment(e)?e.props.children:e,o=n(Array.isArray(r)?r:[r]);return c.Option.of(t.get(o))}}(r||(r={}));var b,y=n("Jguk");function E(e){return i.createElement(g,o.a({},_(e,v.button)))}function _(e,t){var n=Object(a.classes)(e.className,t).className;return o.a({},e,{className:n})}n.d(t,"a",function(){return E}),n.d(t,"c",function(){return _}),n.d(t,"b",function(){return C}),(b=E||(E={})).Animated=function(e){return i.createElement(g,o.a({},o.a({},e,{animationMode:e.animationMode||h.a.FromClickPoint})))},b.Primary=function(e){return i.createElement(b.Animated,o.a({styleType:f.Typography.Type.H3Legacy},_(e,v.primary)))},b.Ghost=function(e){return i.createElement(b.Animated,o.a({styleType:f.Typography.Type.H3Legacy},_(e,v.ghost)))},b.Flat=function(e){return i.createElement(b.Animated,o.a({},_(e,v.flat)))},b.White=function(e){return i.createElement(b.Animated,o.a({},_(e,v.white)))},b.SidebarFlat=function(e){return i.createElement(g,o.a({styleType:f.Typography.Type.H3Legacy},_(e,v.sidebarFlat)))},b.Caps=function(e){return i.createElement(g,o.a({styleType:f.Typography.Type.H3Legacy},_(e,v.caps)))},b.Group=function(e){var t=e.children,n=e.className,r=e.align,s=void 0===r?"horizontal":r,c=e.sticky;return i.createElement(a.F.div,o.a({},Object(a.classes)(n,"horizontal"===s?c?v.groupSticky:v.group:v.groupVertical)),t)};var C=function(e){var t=e.title,n=e.titleAlign,r=e.buttonClass,s=e.iconClass,c=e.iconWidth,l=e.tooltipClass;return i.createElement(E,{name:"info-button",title:i.createElement(a.F.div,o.a({},Object(a.classes)(v.infoTooltip,l)),i.createElement("p",null,t)),titleAlign:n,className:r},i.createElement(y.d.Info,{width:c,className:s}))}},"rNz/":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r,o=n("yrnK");!function(e){e.emit=function(e){return window.dispatchEvent(new CustomEvent("scrollaction",{detail:e}))},e.observe=o.Observable.fromEvent(window,"scrollaction")}(r||(r={}))},rtYL:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n("kwyh"),o=n("ERkP"),i=n("CB9K"),a=n("oZTP"),s=n("t2Ba"),c=n("rNz/"),l=n("n3Ao"),u=n("EsFq"),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._subs=[],t._outOfTarget=function(e){return function(t){return!s.DOM.Rect.hasPoint(t.getBoundingClientRect(),e)}},t}return r.c(t,e),t.prototype.componentDidMount=function(){this._listenTooltipAppearance()},t.prototype.componentWillUnmount=function(){this._subs.forEach(function(e){return e.unsubscribe()}),this._subs=[],this.context.hide()},t.prototype.render=function(){return o.createElement(a.F.div,{role:"tooltip"},this.context.state.view(this.props.children))},t.prototype._listenTooltipAppearance=function(){var e=this,t=i.Observable.fromEvent(document,"keydown").filter(function(e){return e.keyCode===s.Keys.ESC_CODE}),n=i.Observable.fromEvent(document,"mousedown").withLatestFrom(this.context.state).filter(function(t){var n=t[0];return t[1].map(function(e){return e.target}).filter(function(){return s.DOM.isDisabled(n.target)}).forAll(e._outOfTarget({x:n.clientX,y:n.clientY}))}),r=i.Observable.merge(t,n,i.Observable.fromEvent(document,"scroll"),c.a.observe.filter(function(e){return"show"===e.detail})).mapTo(l.e.voidValue).share();this._subs=[this.context.hasContent.filter(Boolean).switchMapTo(r.first()).subscribe(this.context.hide),this.context.hasContent.filter(Boolean).switchMapTo(i.Observable.merge(l.e.delay(!0,500),r.mapTo(!1)).first()).filter(Boolean).subscribe(this.context.show)]},t.contextType=u.a.Context,t}(o.Component)},smll:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("mrSG"),o=n("ERkP"),i=n("ASSm"),a=n("oZTP"),s=n("t2Ba"),c=n("rtYL"),l=n("BF0k"),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype._alignmentToClassMapper=function(e){switch(e){case"top":return l.top;case"right":return l.right;case"auto":case"center":case"bottom":case"left":case"topCenter":case"topLeft":case"topRight":case"bottomCenter":case"bottomRight":case"bottomLeft":return"";default:return Object(s.assertNever)(e)}},t.prototype.render=function(){var e=this;return o.createElement(c.a,null,function(t){return o.createElement("div",r.__assign({ref:function(t){return e._el=t}},Object(a.classes)(l.tooltip,t.map(function(t){return e._alignmentToClassMapper(t.alignment)}).orNull()),{style:e._getTooltipStyle(t)}),t.map(function(e){return e.content}).orNull())})},t.prototype._getTooltipStyle=function(e){var t=i.Option.of(this._el&&this._el.offsetParent);return i.Option.map2(t,e,function(e,t){var n=t.target,r=t.alignment,o=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{top:("top"===r?o.top-26:o.bottom)-i.top,left:o.left+o.width/2-i.left,opacity:1,visibility:"visible",transition:""}}).getOrElse({top:0,left:0,opacity:0,visibility:"none",transition:"none"})},t}(o.Component)},zoQI:function(e,t,n){"use strict";n.d(t,"b",function(){return m}),n.d(t,"a",function(){return f}),n.d(t,"d",function(){return h}),n.d(t,"f",function(){return v}),n.d(t,"c",function(){return g}),n.d(t,"e",function(){return b});var r=n("mrSG"),o=n("ERkP"),i=n("oZTP"),a=n("t2Ba"),s=n("sWIT"),c=n("WjLT"),l=n("mEc7"),u=n("nQSW"),p=function(e){var t,n,r,o=e.onClick,a=void 0===o?function(){}:o,s=e.disabled,c=function(e){return"boolean"!=typeof e?e:i.Atom.create(e)}(void 0!==s&&s),l=i.Atom.create(!1);return{onClick:(t=a,n=function(e){return l.set(e)},r=function(){return c.get()||l.get()},function(e){if(e.stopPropagation(),r())return Promise.resolve();var o;n(!0);try{o=t()}catch(e){throw n(!1),e}var i=Promise.resolve(o);return i.then(function(e){return n(!1)}).catch(function(e){return n(!1)}),i}),isDisabled:c.combineLatest(l,function(e,t){return e||t})}},d=["size","transparent","className"],m=function(e){var t=e.children,n=void 0===t?null:t,a=e.onClick,s=void 0===a?function(){}:a,c=e.onMouseOver,l=void 0===c?function(){}:c,u=e.onMouseLeave,d=void 0===u?function(){}:u,m=e.onMouseOut,f=void 0===m?function(){}:m,h=e.disabled,v=void 0!==h&&h,g=e.className,b=void 0===g?"":g,y=e.role,E=e.name,_=e.style,C=void 0===_?{}:_,T=p({onClick:s,disabled:v});return o.createElement(i.F.div,r.__assign({"data-name":E,style:C,className:b,disabled:T.isDisabled,onClick:T.onClick},{onMouseOver:l,onMouseLeave:d,onMouseOut:f,role:y}),n)},f=function(e){var t=e.children,n=void 0===t?null:t,i=e.className,s=void 0===i?"":i,c=Object.assign(a.ObjectUtils.objectWithoutProperties(e,d),E(s,e)),l=y(e);return o.createElement(m,r.__assign({},c),n,l)},h=function(e){var t=e.className,n=void 0===t?"":t,r=e.onClick,a=void 0===r?function(){}:r,s=e.disabled,c=void 0!==s&&s,l=e.value,u=void 0===l?"":l,d=e.style,m=void 0===d?{}:d,f=e.children,h=void 0===f?null:f,v=p({onClick:a,disabled:c});return o.createElement(i.F.button,{type:"submit",style:m,disabled:v.isDisabled,className:n,onClick:v.onClick},u,h)},v=function(e){var t=e.children,n=void 0===t?null:t,i=e.className,s=void 0===i?"":i,c=Object.assign(a.ObjectUtils.objectWithoutProperties(e,d),E(s,e)),l=y(e);return o.createElement(h,r.__assign({},c),n,l)},g=Object(l.f)(function(e,t){var n=e.name,a=e.href,s=void 0===a?"":a,c=e.target,l=void 0===c?"":c,d=e.children,m=void 0===d?null:d,f=e.className,h=void 0===f?"":f,v=e.onClick,g=void 0===v?function(){}:v,b=e.disabled,y=void 0!==b&&b,E=e.style,_=void 0===E?{}:E,C=e.download,T=t.environment,x=p({onClick:g,disabled:y}),k=x.onClick,w=x.isDisabled,A=C&&!T.has(u.b.Flag.canUseDownloadAttr)?"_blank":l;return o.createElement(i.F.a,r.__assign({},{"data-name":n,href:s,target:A,style:_,disabled:w,className:h,onClick:k,download:C}),m)}),b=function(e){var t=e.children,n=void 0===t?null:t,i=e.className,s=void 0===i?"":i,c=Object.assign(a.ObjectUtils.objectWithoutProperties(e,d),E(s,e)),l=y(e);return o.createElement(g,r.__assign({},c),n,l)};function y(e){var t=e.showSpinnerWhenDisabled,n=void 0!==t&&t,r=e.transparent,i=void 0!==r&&r,a=e.size,l=void 0===a?"medium":a;return n?o.createElement(s.a,{color:i?void 0:"#fff",className:c.buttonSpinner,size:"small"===l?14:18}):null}function E(e,t){var n=t.size,r=void 0===n?"medium":n,o=t.transparent,a=void 0!==o&&o,s=t.showSpinnerWhenDisabled,l=void 0!==s&&s;return Object(i.classes)(c.button,c[r],a&&c.transparent,l&&c.hasSpinner,e)}}}]);