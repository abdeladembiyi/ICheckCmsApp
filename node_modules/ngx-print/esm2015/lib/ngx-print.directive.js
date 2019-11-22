/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from "@angular/core";
export class NgxPrintDirective {
    constructor() {
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
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @param {?} values
     * @return {?}
     */
    set printStyle(values) {
        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
            }
        }
        this.returnStyleValues();
    }
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
    returnStyleValues() {
        return `<style> ${this._printStyle.join(' ').replace(/,/g, ';')} </style>`;
    }
    /**
     * \@memberof NgxPrintDirective
     * @param {?} cssList
     * @return {?}
     */
    set styleSheetFile(cssList) {
        /** @type {?} */
        let linkTagFn = (/**
         * @param {?} cssFileName
         * @return {?}
         */
        cssFileName => `<link rel="stylesheet" type="text/css" href="${cssFileName}">`);
        if (cssList.indexOf(',') !== -1) {
            /** @type {?} */
            const valueArr = cssList.split(',');
            for (let val of valueArr) {
                this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
            }
        }
        else {
            this._styleSheetFile = linkTagFn(cssList);
        }
    }
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    returnStyleSheetLinkTags() {
        return this._styleSheetFile;
    }
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    getElementTag(tag) {
        /** @type {?} */
        const html = [];
        /** @type {?} */
        const elements = document.getElementsByTagName(tag);
        for (let index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    print() {
        /** @type {?} */
        let printContents;
        /** @type {?} */
        let popupWin;
        /** @type {?} */
        let styles = '';
        /** @type {?} */
        let links = '';
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = document.getElementById(this.printSectionId).innerHTML;
        popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
          <title>${this.printTitle ? this.printTitle : ""}</title>
          ${this.returnStyleValues()}
          ${this.returnStyleSheetLinkTags()}
          ${styles}
          ${links}
        </head>
        <body onload="window.print(); setTimeout(()=>{ window.close(); }, 0)">
          ${printContents}
        </body>
      </html>`);
        popupWin.document.close();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJL0QsTUFBTSxPQUFPLGlCQUFpQjtJQUg5QjtRQUtTLGdCQUFXLEdBQUcsRUFBRSxDQUFDOzs7Ozs7UUFxQmYsbUJBQWMsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7O1FBc0N4QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztJQXNFL0IsQ0FBQzs7Ozs7Ozs7SUFyR0MsSUFDSSxVQUFVLENBQUMsTUFBb0Q7UUFDakUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDdEIsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2hGO1NBQ0Y7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7Ozs7OztJQVlJLGlCQUFpQjtRQUN0QixPQUFPLFdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQzFFLENBQUM7Ozs7OztJQWVELElBQ0ksY0FBYyxDQUFDLE9BQWU7O1lBQzVCLFNBQVM7Ozs7UUFBRyxXQUFXLENBQUMsRUFBRSxDQUM1QixnREFBZ0QsV0FBVyxJQUFJLENBQUE7UUFDakUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztrQkFDekIsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ25DLEtBQUssSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFO2dCQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlEO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7Ozs7OztJQU9PLHdCQUF3QjtRQUM5QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBQ08sYUFBYSxDQUFDLEdBQWdDOztjQUM5QyxJQUFJLEdBQWEsRUFBRTs7Y0FDbkIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7UUFDbkQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7OztJQVNNLEtBQUs7O1lBQ04sYUFBYTs7WUFBRSxRQUFROztZQUFFLE1BQU0sR0FBRyxFQUFFOztZQUFFLEtBQUssR0FBRyxFQUFFO1FBRXBELElBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN0QixNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQztRQUVELGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdkUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO1FBQzVFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7OzttQkFHVCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDL0IsTUFBTTtZQUNOLEtBQUs7OztZQUdMLGFBQWE7O2NBRVgsQ0FBQyxDQUFDO1FBQ1osUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7WUFySUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7Ozs2QkFVRSxLQUFLO3lCQU9MLEtBQUs7NkJBT0wsS0FBSzt5QkFPTCxLQUFLOzZCQXFDTCxLQUFLO29CQXFDTCxZQUFZLFNBQUMsT0FBTzs7OztJQXRHckIsd0NBQXdCOzs7Ozs7O0lBT3hCLDJDQUFnQzs7Ozs7OztJQU9oQyx1Q0FBNEI7Ozs7Ozs7SUFPNUIsMkNBQWdDOzs7Ozs7Ozs7O0lBc0NoQyw0Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcImJ1dHRvbltuZ3hQcmludF1cIlxufSlcbmV4cG9ydCBjbGFzcyBOZ3hQcmludERpcmVjdGl2ZSB7XG5cbiAgcHVibGljIF9wcmludFN0eWxlID0gW107XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgcHJpbnRTZWN0aW9uSWQ6IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSBwcmludFRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgdXNlRXhpc3RpbmdDc3MgPSBmYWxzZTtcblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgcHJpbnRTdHlsZSh2YWx1ZXM6IHsgW2tleTogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB9KSB7XG4gICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB0aGlzLl9wcmludFN0eWxlLnB1c2goKGtleSArIEpTT04uc3RyaW5naWZ5KHZhbHVlc1trZXldKSkucmVwbGFjZSgvWydcIl0rL2csICcnKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmV0dXJuU3R5bGVWYWx1ZXMoKTtcbiAgfVxuXG4vKipcbiAqXG4gKlxuICogQHJldHVybnMgdGhlIHN0cmluZyB0aGF0IGNyZWF0ZSB0aGUgc3R5bGVzaGVldCB3aGljaCB3aWxsIGJlIGluamVjdGVkXG4gKiBsYXRlciB3aXRoaW4gPHN0eWxlPjwvc3R5bGU+IHRhZy5cbiAqXG4gKiAtam9pbi9yZXBsYWNlIHRvIHRyYW5zZm9ybSBhbiBhcnJheSBvYmplY3RzIHRvIGNzcy1zdHlsZWQgc3RyaW5nXG4gKlxuICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gKi9cbnB1YmxpYyByZXR1cm5TdHlsZVZhbHVlcygpIHtcbiAgcmV0dXJuIGA8c3R5bGU+ICR7dGhpcy5fcHJpbnRTdHlsZS5qb2luKCcgJykucmVwbGFjZSgvLC9nLCc7Jyl9IDwvc3R5bGU+YDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAcmV0dXJucyBodG1sIGZvciB0aGUgZ2l2ZW4gdGFnXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgcHJpdmF0ZSBfc3R5bGVTaGVldEZpbGUgPSAnJztcblxuICAvKipcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqIEBwYXJhbSBjc3NMaXN0XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgc3R5bGVTaGVldEZpbGUoY3NzTGlzdDogc3RyaW5nKSB7XG4gICAgbGV0IGxpbmtUYWdGbiA9IGNzc0ZpbGVOYW1lID0+XG4gICAgICBgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIke2Nzc0ZpbGVOYW1lfVwiPmA7XG4gICAgaWYgKGNzc0xpc3QuaW5kZXhPZignLCcpICE9PSAtMSkge1xuICAgICAgY29uc3QgdmFsdWVBcnIgPSBjc3NMaXN0LnNwbGl0KCcsJyk7XG4gICAgICBmb3IgKGxldCB2YWwgb2YgdmFsdWVBcnIpIHtcbiAgICAgICAgdGhpcy5fc3R5bGVTaGVldEZpbGUgPSB0aGlzLl9zdHlsZVNoZWV0RmlsZSArIGxpbmtUYWdGbih2YWwpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdHlsZVNoZWV0RmlsZSA9IGxpbmtUYWdGbihjc3NMaXN0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgc3RyaW5nIHdoaWNoIGNvbnRhaW5zIHRoZSBsaW5rIHRhZ3MgY29udGFpbmluZyB0aGUgY3NzIHdoaWNoIHdpbGxcbiAgICogYmUgaW5qZWN0ZWQgbGF0ZXIgd2l0aGluIDxoZWFkPjwvaGVhZD4gdGFnLlxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSByZXR1cm5TdHlsZVNoZWV0TGlua1RhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0eWxlU2hlZXRGaWxlO1xuICB9XG4gIHByaXZhdGUgZ2V0RWxlbWVudFRhZyh0YWc6IGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCk6IHN0cmluZyB7XG4gICAgY29uc3QgaHRtbDogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaHRtbC5wdXNoKGVsZW1lbnRzW2luZGV4XS5vdXRlckhUTUwpO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbC5qb2luKCdcXHJcXG4nKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgcHJpbnQoKTogdm9pZCB7XG4gICAgbGV0IHByaW50Q29udGVudHMsIHBvcHVwV2luLCBzdHlsZXMgPSAnJywgbGlua3MgPSAnJztcblxuICAgIGlmKHRoaXMudXNlRXhpc3RpbmdDc3MpIHtcbiAgICAgIHN0eWxlcyA9IHRoaXMuZ2V0RWxlbWVudFRhZygnc3R5bGUnKTtcbiAgICAgIGxpbmtzID0gdGhpcy5nZXRFbGVtZW50VGFnKCdsaW5rJyk7XG4gICAgfVxuXG4gICAgcHJpbnRDb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJpbnRTZWN0aW9uSWQpLmlubmVySFRNTDtcbiAgICBwb3B1cFdpbiA9IHdpbmRvdy5vcGVuKFwiXCIsIFwiX2JsYW5rXCIsIFwidG9wPTAsbGVmdD0wLGhlaWdodD1hdXRvLHdpZHRoPWF1dG9cIik7XG4gICAgcG9wdXBXaW4uZG9jdW1lbnQub3BlbigpO1xuICAgIHBvcHVwV2luLmRvY3VtZW50LndyaXRlKGBcbiAgICAgIDxodG1sPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICA8dGl0bGU+JHt0aGlzLnByaW50VGl0bGUgPyB0aGlzLnByaW50VGl0bGUgOiBcIlwifTwvdGl0bGU+XG4gICAgICAgICAgJHt0aGlzLnJldHVyblN0eWxlVmFsdWVzKCl9XG4gICAgICAgICAgJHt0aGlzLnJldHVyblN0eWxlU2hlZXRMaW5rVGFncygpfVxuICAgICAgICAgICR7c3R5bGVzfVxuICAgICAgICAgICR7bGlua3N9XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHkgb25sb2FkPVwid2luZG93LnByaW50KCk7IHNldFRpbWVvdXQoKCk9Pnsgd2luZG93LmNsb3NlKCk7IH0sIDApXCI+XG4gICAgICAgICAgJHtwcmludENvbnRlbnRzfVxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+YCk7XG4gICAgcG9wdXBXaW4uZG9jdW1lbnQuY2xvc2UoKTtcbiAgfVxufVxuIl19