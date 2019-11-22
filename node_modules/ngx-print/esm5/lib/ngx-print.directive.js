/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, HostListener, Input } from "@angular/core";
var NgxPrintDirective = /** @class */ (function () {
    function NgxPrintDirective() {
        this._printStyle = [];
        /**
         *
         *
         * \@memberof NgxPrintDirective
         */
        this.useExistingCss = false;
        /**
         *
         *
         * @return html for the given tag
         *
         * \@memberof NgxPrintDirective
         */
        this._styleSheetFile = '';
    }
    Object.defineProperty(NgxPrintDirective.prototype, "printStyle", {
        /**
         *
         *
         * @memberof NgxPrintDirective
         */
        set: /**
         *
         *
         * \@memberof NgxPrintDirective
         * @param {?} values
         * @return {?}
         */
        function (values) {
            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
                }
            }
            this.returnStyleValues();
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     *
     * @returns the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    NgxPrintDirective.prototype.returnStyleValues = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    function () {
        return "<style> " + this._printStyle.join(' ').replace(/,/g, ';') + " </style>";
    };
    Object.defineProperty(NgxPrintDirective.prototype, "styleSheetFile", {
        /**
         * @memberof NgxPrintDirective
         * @param cssList
         */
        set: /**
         * \@memberof NgxPrintDirective
         * @param {?} cssList
         * @return {?}
         */
        function (cssList) {
            var e_1, _a;
            /** @type {?} */
            var linkTagFn = (/**
             * @param {?} cssFileName
             * @return {?}
             */
            function (cssFileName) {
                return "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssFileName + "\">";
            });
            if (cssList.indexOf(',') !== -1) {
                /** @type {?} */
                var valueArr = cssList.split(',');
                try {
                    for (var valueArr_1 = tslib_1.__values(valueArr), valueArr_1_1 = valueArr_1.next(); !valueArr_1_1.done; valueArr_1_1 = valueArr_1.next()) {
                        var val = valueArr_1_1.value;
                        this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (valueArr_1_1 && !valueArr_1_1.done && (_a = valueArr_1.return)) _a.call(valueArr_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                this._styleSheetFile = linkTagFn(cssList);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @returns string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    NgxPrintDirective.prototype.returnStyleSheetLinkTags = /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    function () {
        return this._styleSheetFile;
    };
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    NgxPrintDirective.prototype.getElementTag = /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        /** @type {?} */
        var html = [];
        /** @type {?} */
        var elements = document.getElementsByTagName(tag);
        for (var index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    };
    /**
     *
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    NgxPrintDirective.prototype.print = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    function () {
        /** @type {?} */
        var printContents;
        /** @type {?} */
        var popupWin;
        /** @type {?} */
        var styles = '';
        /** @type {?} */
        var links = '';
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = document.getElementById(this.printSectionId).innerHTML;
        popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>" + (this.printTitle ? this.printTitle : "") + "</title>\n          " + this.returnStyleValues() + "\n          " + this.returnStyleSheetLinkTags() + "\n          " + styles + "\n          " + links + "\n        </head>\n        <body onload=\"window.print(); setTimeout(()=>{ window.close(); }, 0)\">\n          " + printContents + "\n        </body>\n      </html>");
        popupWin.document.close();
    };
    NgxPrintDirective.decorators = [
        { type: Directive, args: [{
                    selector: "button[ngxPrint]"
                },] }
    ];
    NgxPrintDirective.propDecorators = {
        printSectionId: [{ type: Input }],
        printTitle: [{ type: Input }],
        useExistingCss: [{ type: Input }],
        printStyle: [{ type: Input }],
        styleSheetFile: [{ type: Input }],
        print: [{ type: HostListener, args: ['click',] }]
    };
    return NgxPrintDirective;
}());
export { NgxPrintDirective };
if (false) {
    /** @type {?} */
    NgxPrintDirective.prototype._printStyle;
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.printSectionId;
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.printTitle;
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.useExistingCss;
    /**
     *
     *
     * \@return html for the given tag
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     * @private
     */
    NgxPrintDirective.prototype._styleSheetFile;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9EO0lBQUE7UUFLUyxnQkFBVyxHQUFHLEVBQUUsQ0FBQzs7Ozs7O1FBcUJmLG1CQUFjLEdBQUcsS0FBSyxDQUFDOzs7Ozs7OztRQXNDeEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7SUFzRS9CLENBQUM7SUFyR0Msc0JBQ0kseUNBQVU7UUFOZDs7OztXQUlHOzs7Ozs7OztRQUNILFVBQ2UsTUFBb0Q7WUFDakUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7Z0JBQ3RCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDaEY7YUFDRjtZQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUg7Ozs7Ozs7OztPQVNHOzs7Ozs7Ozs7OztJQUNJLDZDQUFpQjs7Ozs7Ozs7OztJQUF4QjtRQUNFLE9BQU8sYUFBVyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLEdBQUcsQ0FBQyxjQUFXLENBQUM7SUFDMUUsQ0FBQztJQWVELHNCQUNJLDZDQUFjO1FBTGxCOzs7V0FHRzs7Ozs7O1FBQ0gsVUFDbUIsT0FBZTs7O2dCQUM1QixTQUFTOzs7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cG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiYnV0dG9uW25neFByaW50XVwiXG59KVxuZXhwb3J0IGNsYXNzIE5neFByaW50RGlyZWN0aXZlIHtcblxuICBwdWJsaWMgX3ByaW50U3R5bGUgPSBbXTtcblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSBwcmludFNlY3Rpb25JZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHByaW50VGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSB1c2VFeGlzdGluZ0NzcyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBwcmludFN0eWxlKHZhbHVlczogeyBba2V5OiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IH0pIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHRoaXMuX3ByaW50U3R5bGUucHVzaCgoa2V5ICsgSlNPTi5zdHJpbmdpZnkodmFsdWVzW2tleV0pKS5yZXBsYWNlKC9bJ1wiXSsvZywgJycpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXR1cm5TdHlsZVZhbHVlcygpO1xuICB9XG5cbi8qKlxuICpcbiAqXG4gKiBAcmV0dXJucyB0aGUgc3RyaW5nIHRoYXQgY3JlYXRlIHRoZSBzdHlsZXNoZWV0IHdoaWNoIHdpbGwgYmUgaW5qZWN0ZWRcbiAqIGxhdGVyIHdpdGhpbiA8c3R5bGU+PC9zdHlsZT4gdGFnLlxuICpcbiAqIC1qb2luL3JlcGxhY2UgdG8gdHJhbnNmb3JtIGFuIGFycmF5IG9iamVjdHMgdG8gY3NzLXN0eWxlZCBzdHJpbmdcbiAqXG4gKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAqL1xucHVibGljIHJldHVyblN0eWxlVmFsdWVzKCkge1xuICByZXR1cm4gYDxzdHlsZT4gJHt0aGlzLl9wcmludFN0eWxlLmpvaW4oJyAnKS5yZXBsYWNlKC8sL2csJzsnKX0gPC9zdHlsZT5gO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEByZXR1cm5zIGh0bWwgZm9yIHRoZSBnaXZlbiB0YWdcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBwcml2YXRlIF9zdHlsZVNoZWV0RmlsZSA9ICcnO1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICogQHBhcmFtIGNzc0xpc3RcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBzdHlsZVNoZWV0RmlsZShjc3NMaXN0OiBzdHJpbmcpIHtcbiAgICBsZXQgbGlua1RhZ0ZuID0gY3NzRmlsZU5hbWUgPT5cbiAgICAgIGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7Y3NzRmlsZU5hbWV9XCI+YDtcbiAgICBpZiAoY3NzTGlzdC5pbmRleE9mKCcsJykgIT09IC0xKSB7XG4gICAgICBjb25zdCB2YWx1ZUFyciA9IGNzc0xpc3Quc3BsaXQoJywnKTtcbiAgICAgIGZvciAobGV0IHZhbCBvZiB2YWx1ZUFycikge1xuICAgICAgICB0aGlzLl9zdHlsZVNoZWV0RmlsZSA9IHRoaXMuX3N0eWxlU2hlZXRGaWxlICsgbGlua1RhZ0ZuKHZhbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0eWxlU2hlZXRGaWxlID0gbGlua1RhZ0ZuKGNzc0xpc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBzdHJpbmcgd2hpY2ggY29udGFpbnMgdGhlIGxpbmsgdGFncyBjb250YWluaW5nIHRoZSBjc3Mgd2hpY2ggd2lsbFxuICAgKiBiZSBpbmplY3RlZCBsYXRlciB3aXRoaW4gPGhlYWQ+PC9oZWFkPiB0YWcuXG4gICAqXG4gICAqL1xuICBwcml2YXRlIHJldHVyblN0eWxlU2hlZXRMaW5rVGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVTaGVldEZpbGU7XG4gIH1cbiAgcHJpdmF0ZSBnZXRFbGVtZW50VGFnKHRhZzoga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwKTogc3RyaW5nIHtcbiAgICBjb25zdCBodG1sOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBodG1sLnB1c2goZWxlbWVudHNbaW5kZXhdLm91dGVySFRNTCk7XG4gICAgfVxuICAgIHJldHVybiBodG1sLmpvaW4oJ1xcclxcbicpO1xuICB9XG5cblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBwcmludCgpOiB2b2lkIHtcbiAgICBsZXQgcHJpbnRDb250ZW50cywgcG9wdXBXaW4sIHN0eWxlcyA9ICcnLCBsaW5rcyA9ICcnO1xuXG4gICAgaWYodGhpcy51c2VFeGlzdGluZ0Nzcykge1xuICAgICAgc3R5bGVzID0gdGhpcy5nZXRFbGVtZW50VGFnKCdzdHlsZScpO1xuICAgICAgbGlua3MgPSB0aGlzLmdldEVsZW1lbnRUYWcoJ2xpbmsnKTtcbiAgICB9XG5cbiAgICBwcmludENvbnRlbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcmludFNlY3Rpb25JZCkuaW5uZXJIVE1MO1xuICAgIHBvcHVwV2luID0gd2luZG93Lm9wZW4oXCJcIiwgXCJfYmxhbmtcIiwgXCJ0b3A9MCxsZWZ0PTAsaGVpZ2h0PWF1dG8sd2lkdGg9YXV0b1wiKTtcbiAgICBwb3B1cFdpbi5kb2N1bWVudC5vcGVuKCk7XG4gICAgcG9wdXBXaW4uZG9jdW1lbnQud3JpdGUoYFxuICAgICAgPGh0bWw+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDx0aXRsZT4ke3RoaXMucHJpbnRUaXRsZSA/IHRoaXMucHJpbnRUaXRsZSA6IFwiXCJ9PC90aXRsZT5cbiAgICAgICAgICAke3RoaXMucmV0dXJuU3R5bGVWYWx1ZXMoKX1cbiAgICAgICAgICAke3RoaXMucmV0dXJuU3R5bGVTaGVldExpbmtUYWdzKCl9XG4gICAgICAgICAgJHtzdHlsZXN9XG4gICAgICAgICAgJHtsaW5rc31cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICA8Ym9keSBvbmxvYWQ9XCJ3aW5kb3cucHJpbnQoKTsgc2V0VGltZW91dCgoKT0+eyB3aW5kb3cuY2xvc2UoKTsgfSwgMClcIj5cbiAgICAgICAgICAke3ByaW50Q29udGVudHN9XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5gKTtcbiAgICBwb3B1cFdpbi5kb2N1bWVudC5jbG9zZSgpO1xuICB9XG59XG4iXX0=