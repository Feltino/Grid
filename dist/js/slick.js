!function(t,i){"use strict";t.fn.exists=function(){return 0!==this.length};var s=function(t,i){this.options={source:void 0,start:void 0,end:void 0,keyControl:!0,content:void 0,theme:{container:t,content:".slick-content",currentNo:".current-no",totalNo:".total",next:".next",prev:".prev"}};for(var s in this.options)this.options.hasOwnProperty(s)&&"theme"!==s&&(this.options[s]=void 0!==i[s]?i[s]:this.options[s]);if(void 0!==i.theme)for(var e in this.options.theme)this.options.theme.hasOwnProperty(e)&&(this.options.theme[e]=void 0!==i.theme[e]?i.theme[e]:this.options.theme[e]);this.options.content=this.options.theme.container+" "+this.options.theme.content,this.state={current:this.options.start-1,start:this.options.start,end:this.options.end,slide:{current:0,difference:this.options.start-1,total:this.options.end-this.options.start+1,maxHit:0}},this.init.apply(this)},e=s.prototype;e.hooks={next:function(){if(this.state.slide.current<this.state.slide.total){var t=++this.state.slide.current+this.state.slide.difference;this.hooks.setSlide.apply(this,[t])}},prev:function(){if(this.state.slide.current>1){var t=--this.state.slide.current+this.state.slide.difference;this.hooks.setSlide.apply(this,[t])}},setSlide:function(i){var s=this.hooks.slideStatus.apply(this,[i]);if(this.state.slide.current=i-this.state.slide.difference,1===this.state.slide.current&&t(this.options.theme.container).animate({opacity:"1"},500),t(this.options.theme.container+" .skip"+this.options.theme.currentNo).is(":input")?t(this.options.theme.container+" "+this.options.theme.currentNo).val(this.state.slide.current):(t(this.options.theme.container+" .skip").val(this.state.slide.current),t(this.options.theme.container+" "+this.options.theme.currentNo).html(this.state.slide.current)),1===s)return t(this.options.content+" img.current").removeClass("current").addClass("cached-slide").hide(),t(this.options.content+" img[data-slide="+i+"]").removeClass("cached-slide").addClass("current").show(),this.state.current=i,t(this.options.theme.container+" .length").width(100*this.state.slide.current/this.state.slide.total+"%"),void this.hooks.getSlide.apply(this,[i+1]);2===s?this.hooks.slideSwitch.apply(this,[i]):0===s&&(t(this.options.content+" img.loading").off("load.slideSwitch").remove(),this.hooks.getSlide.apply(this,[i]),this.hooks.slideSwitch.apply(this,[i]))},getSlide:function(i){0===this.hooks.slideStatus.apply(this,[i])&&i<=this.state.end&&(t(this.options.content).append('<img src="'+this.hooks.imagePath.apply(this,[i])+'" data-slide='+i+' class="loading">'),t(this.options.content+" img.loading").hide(),t(this.options.content+" img.loading").load(function(){t(this).removeClass("loading").addClass("cached-slide")}))},slideSwitch:function(i){var s=this;t(s.options.content+" img[data-slide="+i+"]").on("load.slideSwitch",function(){t(s.options.content+" img.current").removeClass("current").addClass("cached-slide").hide(),t(this).removeClass("cached-slide").addClass("current").show(),s.state.current=i,t(s.options.theme.container+" .length").width(100*(i+1)/s.state.slide.total+"%"),s.hooks.getSlide.apply(s,[i+1])})},slideStatus:function(i){var s=this.options.content+" img[data-slide="+i+"]";return t(s).exists()?t(s).hasClass("loading")?2:1:0},imagePath:function(t){var i=this.options.source.split("*");return i[0]+t+i[1]},skip:function(i){if(t.isNumeric(i)){var s=parseInt(i)+this.state.slide.difference;this.hooks.getSlide.apply(this,[s]),this.hooks.setSlide.apply(this,[s])}}},e.init=function(){var i=this;t(i.options.theme.container).css("opacity","0"),"string"==typeof i.options.source&&i.hooks.next.apply(i),t(i.options.theme.container+" "+i.options.theme.next).click(function(t){t.preventDefault(),i.hooks.next.apply(i)}),t(i.options.theme.container+" "+i.options.theme.prev).click(function(t){t.preventDefault(),i.hooks.prev.apply(i)}),t(i.options.theme.container+" "+i.options.theme.totalNo).html(i.state.end-i.state.start+1),i.options.keyControl&&t(document).keyup(function(s){39!==s.keyCode||t("input:focus").exists()||i.hooks.next.apply(i),37!==s.keyCode||t("input:focus").exists()||i.hooks.prev.apply(i)}),t(i.options.theme.container+" .skip").keypress(function(s){13===s.keyCode&&(i.hooks.skip.apply(i,[t(this).val()]),t(this).blur())})},window.Slick=s,s.next=function(t){t.constructor===s&&t.hooks.next.apply(t)},s.prev=function(t){t.constructor===s&&t.hooks.prev.apply(t)},s.skip=function(t,i){t.constructor===s&&t.hooks.skip.apply(t,[i])}}(jQuery,window);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWNrLmpzIl0sIm5hbWVzIjpbIiQiLCJyb290IiwiZm4iLCJleGlzdHMiLCJ0aGlzIiwibGVuZ3RoIiwiU2xpY2siLCJjb250YWluZXIiLCJjb25maWciLCJvcHRpb25zIiwic291cmNlIiwic3RhcnQiLCJlbmQiLCJrZXlDb250cm9sIiwiY29udGVudCIsInRoZW1lIiwiY3VycmVudE5vIiwidG90YWxObyIsIm5leHQiLCJwcmV2Iiwib3B0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJ2YWwiLCJzdGF0ZSIsImN1cnJlbnQiLCJzbGlkZSIsImRpZmZlcmVuY2UiLCJ0b3RhbCIsIm1heEhpdCIsImluaXQiLCJhcHBseSIsIlNsaWNrUHJvdG8iLCJwcm90b3R5cGUiLCJob29rcyIsInN0ZXAiLCJzZXRTbGlkZSIsInNsaWRlU3RhdHVzIiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJpcyIsImh0bWwiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGlkZSIsInNob3ciLCJ3aWR0aCIsImdldFNsaWRlIiwic2xpZGVTd2l0Y2giLCJvZmYiLCJyZW1vdmUiLCJhcHBlbmQiLCJpbWFnZVBhdGgiLCJsb2FkIiwic2xpY2siLCJvbiIsImVsIiwiaGFzQ2xhc3MiLCJwYXJ0cyIsInNwbGl0Iiwic2tpcCIsImlzTnVtZXJpYyIsInBhcnNlSW50IiwiY3NzIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImtleXVwIiwia2V5Q29kZSIsImtleXByZXNzIiwiYmx1ciIsIndpbmRvdyIsImNvbnN0cnVjdG9yIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQ0FPQyxTQUFVQSxFQUFHQyxHQUNWLGFBRUFELEVBQUVFLEdBQUdDLE9BQVMsV0FDVixPQUF1QixJQUFoQkMsS0FBS0MsUUFHaEIsSUFBSUMsRUFBUSxTQUFVQyxFQUFXQyxHQUM3QkosS0FBS0ssU0FDREMsWUFBQUEsRUFDQUMsV0FBQUEsRUFDQUMsU0FBQUEsRUFDQUMsWUFBQUEsRUFDQUMsYUFBQUEsRUFDQUMsT0FDSVIsVUFBV0EsRUFDWE8sUUFBUyxpQkFDVEUsVUFBVyxjQUNYQyxRQUFTLFNBQ1RDLEtBQU0sUUFDTkMsS0FBTSxVQUlkLElBQUssSUFBSUMsS0FBVWhCLEtBQUtLLFFBQ2hCTCxLQUFLSyxRQUFRWSxlQUFlRCxJQUFzQixVQUFYQSxJQUN2Q2hCLEtBQUtLLFFBQVFXLFFBQUFBLElBQVVaLEVBQU9ZLEdBQXdCWixFQUFPWSxHQUFVaEIsS0FBS0ssUUFBUVcsSUFJNUYsUUFBQSxJQUFHWixFQUFPTyxNQUNOLElBQUssSUFBSU8sS0FBT2xCLEtBQUtLLFFBQVFNLE1BQ3JCWCxLQUFLSyxRQUFRTSxNQUFNTSxlQUFlQyxLQUNsQ2xCLEtBQUtLLFFBQVFNLE1BQU1PLFFBQUFBLElBQU9kLEVBQU9PLE1BQU1PLEdBQXFCZCxFQUFPTyxNQUFNTyxHQUFPbEIsS0FBS0ssUUFBUU0sTUFBTU8sSUFLL0dsQixLQUFLSyxRQUFRSyxRQUFVVixLQUFLSyxRQUFRTSxNQUFNUixVQUFZLElBQU1ILEtBQUtLLFFBQVFNLE1BQU1ELFFBRS9FVixLQUFLbUIsT0FFREMsUUFBU3BCLEtBQUtLLFFBQVFFLE1BQU0sRUFFNUJBLE1BQU9QLEtBQUtLLFFBQVFFLE1BQ3BCQyxJQUFLUixLQUFLSyxRQUFRRyxJQUdsQmEsT0FDSUQsUUFBUyxFQUNURSxXQUFhdEIsS0FBS0ssUUFBUUUsTUFBUSxFQUNsQ2dCLE1BQVF2QixLQUFLSyxRQUFRRyxJQUFNUixLQUFLSyxRQUFRRSxNQUFRLEVBQ2hEaUIsT0FBUSxJQUloQnhCLEtBQUt5QixLQUFLQyxNQUFNMUIsT0FHaEIyQixFQUFhekIsRUFBTTBCLFVBRXZCRCxFQUFXRSxPQUdQZixLQUFNLFdBR0YsR0FGWWQsS0FFSG1CLE1BQU1FLE1BQU1ELFFBRlRwQixLQUV5Qm1CLE1BQU1FLE1BQU1FLE1BQU0sQ0FDbkQsSUFBSU8sSUFISTlCLEtBR1dtQixNQUFNRSxNQUFNRCxRQUh2QnBCLEtBR3VDbUIsTUFBTUUsTUFBTUMsV0FIbkR0QixLQUlGNkIsTUFBTUUsU0FBU0wsTUFBTTFCLE1BQU84QixNQUsxQ2YsS0FBTSxXQUdGLEdBRllmLEtBRUhtQixNQUFNRSxNQUFNRCxRQUFVLEVBQUUsQ0FDN0IsSUFBSVUsSUFISTlCLEtBR1dtQixNQUFNRSxNQUFNRCxRQUh2QnBCLEtBR3VDbUIsTUFBTUUsTUFBTUMsV0FIbkR0QixLQUlGNkIsTUFBTUUsU0FBU0wsTUFBTTFCLE1BQU84QixNQUkxQ0MsU0FBVSxTQUFTRCxHQUNmLElBQ0lFLEVBRFFoQyxLQUNZNkIsTUFBTUcsWUFBWU4sTUFEOUIxQixNQUM0QzhCLElBZ0J4RCxHQWpCWTlCLEtBRU5tQixNQUFNRSxNQUFNRCxRQUFVVSxFQUZoQjlCLEtBRTZCbUIsTUFBTUUsTUFBTUMsV0FFcEIsSUFKckJ0QixLQUlIbUIsTUFBTUUsTUFBTUQsU0FDakJ4QixFQUxRSSxLQUtBSyxRQUFRTSxNQUFNUixXQUFXOEIsU0FBU0MsUUFBVyxLQUFNLEtBRzVEdEMsRUFSU0ksS0FRREssUUFBUU0sTUFBTVIsVUFBWSxTQVJ6QkgsS0FRMENLLFFBQVFNLE1BQU1DLFdBQVd1QixHQUFHLFVBQzlFdkMsRUFUUUksS0FTQUssUUFBUU0sTUFBTVIsVUFBWSxJQVQxQkgsS0FTc0NLLFFBQVFNLE1BQU1DLFdBQVdNLElBVC9EbEIsS0FTeUVtQixNQUFNRSxNQUFNRCxVQUc3RnhCLEVBWlFJLEtBWUFLLFFBQVFNLE1BQU1SLFVBQVksVUFBVWUsSUFacENsQixLQVk4Q21CLE1BQU1FLE1BQU1ELFNBQ2xFeEIsRUFiUUksS0FhQUssUUFBUU0sTUFBTVIsVUFBWSxJQWIxQkgsS0Fhc0NLLFFBQVFNLE1BQU1DLFdBQVd3QixLQWIvRHBDLEtBYTBFbUIsTUFBTUUsTUFBTUQsVUFJL0UsSUFBaEJZLEVBTUMsT0FMQXBDLEVBbEJRSSxLQWtCQUssUUFBUUssUUFBVSxnQkFBZ0IyQixZQUFZLFdBQVdDLFNBQVMsZ0JBQWdCQyxPQUMxRjNDLEVBbkJRSSxLQW1CQUssUUFBUUssUUFBVSxtQkFBcUJvQixFQUFPLEtBQUtPLFlBQVksZ0JBQWdCQyxTQUFTLFdBQVdFLE9BbkJuR3hDLEtBb0JGbUIsTUFBTUMsUUFBVVUsRUFDdEJsQyxFQXJCUUksS0FxQkFLLFFBQVFNLE1BQU1SLFVBQVksWUFBWXNDLE1BQU0sSUFyQjVDekMsS0FxQndEbUIsTUFBTUUsTUFBTUQsUUFyQnBFcEIsS0FxQm9GbUIsTUFBTUUsTUFBTUUsTUFBUSxVQXJCeEd2QixLQXNCRjZCLE1BQU1hLFNBQVNoQixNQXRCYjFCLE1Bc0IyQjhCLEVBQUssSUFHcEIsSUFBaEJFLEVBekJJaEMsS0EwQkY2QixNQUFNYyxZQUFZakIsTUFBTTFCLE1BQU84QixJQUVqQixJQUFoQkUsSUFFSnBDLEVBOUJRSSxLQThCQUssUUFBUUssUUFBVSxnQkFBZ0JrQyxJQUFJLG9CQUFvQkMsU0E5QjFEN0MsS0ErQkY2QixNQUFNYSxTQUFTaEIsTUEvQmIxQixNQStCMkI4QixJQS9CM0I5QixLQWdDRjZCLE1BQU1jLFlBQVlqQixNQUFNMUIsTUFBTzhCLE1BSzdDWSxTQUFVLFNBQVNaLEdBRW9DLElBRHZDOUIsS0FDSDZCLE1BQU1HLFlBQVlOLE1BQU0xQixNQUFPOEIsS0FBZ0JBLEdBRDVDOUIsS0FDMERtQixNQUFNWCxNQUN4RVosRUFGUUksS0FFQUssUUFBUUssU0FBU29DLE9BQU8sYUFGeEI5QyxLQUU0QzZCLE1BQU1rQixVQUFVckIsTUFGNUQxQixNQUUwRThCLElBQVEsZ0JBQWtCQSxFQUFPLHFCQUNuSGxDLEVBSFFJLEtBR0FLLFFBQVFLLFFBQVUsZ0JBQWdCNkIsT0FDMUMzQyxFQUpRSSxLQUlBSyxRQUFRSyxRQUFVLGdCQUFnQnNDLEtBQUssV0FDM0NwRCxFQUFFSSxNQUFNcUMsWUFBWSxXQUFXQyxTQUFTLG9CQUtwREssWUFBYSxTQUFTYixHQUNsQixJQUFJbUIsRUFBUWpELEtBQ1pKLEVBQUVxRCxFQUFNNUMsUUFBUUssUUFBVSxtQkFBcUJvQixFQUFPLEtBQUtvQixHQUFHLG1CQUFvQixXQUM5RXRELEVBQUVxRCxFQUFNNUMsUUFBUUssUUFBVSxnQkFBZ0IyQixZQUFZLFdBQVdDLFNBQVMsZ0JBQWdCQyxPQUMxRjNDLEVBQUVJLE1BQU1xQyxZQUFZLGdCQUFnQkMsU0FBUyxXQUFXRSxPQUN4RFMsRUFBTTlCLE1BQU1DLFFBQVVVLEVBQ3RCbEMsRUFBRXFELEVBQU01QyxRQUFRTSxNQUFNUixVQUFZLFlBQVlzQyxNQUFNLEtBQU9YLEVBQU8sR0FBS21CLEVBQU05QixNQUFNRSxNQUFNRSxNQUFRLEtBQ2pHMEIsRUFBTXBCLE1BQU1hLFNBQVNoQixNQUFNdUIsR0FBUW5CLEVBQUssT0FRaERFLFlBQWEsU0FBU0YsR0FDbEIsSUFDSXFCLEVBRFFuRCxLQUNHSyxRQUFRSyxRQUFVLG1CQUFxQm9CLEVBQU8sSUFDN0QsT0FBR2xDLEVBQUV1RCxHQUFJcEQsU0FDRkgsRUFBRXVELEdBQUlDLFNBQVMsV0FDUCxFQUdBLEVBSUosR0FLZkwsVUFBVyxTQUFTakIsR0FDaEIsSUFBSXVCLEVBQVFyRCxLQUFLSyxRQUFRQyxPQUFPZ0QsTUFBTSxLQUN0QyxPQUFPRCxFQUFNLEdBQUt2QixFQUFPdUIsRUFBTSxJQUduQ0UsS0FBTSxTQUFTckMsR0FDWCxHQUFHdEIsRUFBRTRELFVBQVV0QyxHQUFLLENBQ2hCLElBRUlZLEVBQU8yQixTQUFTdkMsR0FGUmxCLEtBRXFCbUIsTUFBTUUsTUFBTUMsV0FGakN0QixLQUdONkIsTUFBTWEsU0FBU2hCLE1BSFQxQixNQUd1QjhCLElBSHZCOUIsS0FJTjZCLE1BQU1FLFNBQVNMLE1BSlQxQixNQUl1QjhCLE9BTS9DSCxFQUFXRixLQUFPLFdBQ2QsSUFBSXdCLEVBQVFqRCxLQUVaSixFQUFFcUQsRUFBTTVDLFFBQVFNLE1BQU1SLFdBQVd1RCxJQUFJLFVBQVcsS0FHYixpQkFBekJULEVBQU01QyxRQUFRQyxRQUNwQjJDLEVBQU1wQixNQUFNZixLQUFLWSxNQUFNdUIsR0FJM0JyRCxFQUFFcUQsRUFBTTVDLFFBQVFNLE1BQU1SLFVBQVksSUFBTThDLEVBQU01QyxRQUFRTSxNQUFNRyxNQUFNNkMsTUFBTSxTQUFTQyxHQUM3RUEsRUFBRUMsaUJBQ0ZaLEVBQU1wQixNQUFNZixLQUFLWSxNQUFNdUIsS0FFM0JyRCxFQUFFcUQsRUFBTTVDLFFBQVFNLE1BQU1SLFVBQVksSUFBTThDLEVBQU01QyxRQUFRTSxNQUFNSSxNQUFNNEMsTUFBTSxTQUFTQyxHQUM3RUEsRUFBRUMsaUJBQ0ZaLEVBQU1wQixNQUFNZCxLQUFLVyxNQUFNdUIsS0FFM0JyRCxFQUFFcUQsRUFBTTVDLFFBQVFNLE1BQU1SLFVBQVksSUFBTThDLEVBQU01QyxRQUFRTSxNQUFNRSxTQUFTdUIsS0FBS2EsRUFBTTlCLE1BQU1YLElBQU15QyxFQUFNOUIsTUFBTVosTUFBUSxHQUc3RzBDLEVBQU01QyxRQUFRSSxZQUNiYixFQUFFa0UsVUFBVUMsTUFBTSxTQUFTSCxHQUNILEtBQWZBLEVBQUVJLFNBQXFCcEUsRUFBRSxlQUFlRyxVQUN6Q2tELEVBQU1wQixNQUFNZixLQUFLWSxNQUFNdUIsR0FFUCxLQUFmVyxFQUFFSSxTQUFxQnBFLEVBQUUsZUFBZUcsVUFDekNrRCxFQUFNcEIsTUFBTWQsS0FBS1csTUFBTXVCLEtBS25DckQsRUFBRXFELEVBQU01QyxRQUFRTSxNQUFNUixVQUFZLFVBQVU4RCxTQUFTLFNBQVNMLEdBQ3pDLEtBQWRBLEVBQUVJLFVBQ0RmLEVBQU1wQixNQUFNMEIsS0FBSzdCLE1BQU11QixHQUFRckQsRUFBRUksTUFBTWtCLFFBQ3ZDdEIsRUFBRUksTUFBTWtFLFdBS3BCQyxPQUFPakUsTUFBUUEsRUFHZkEsRUFBTVksS0FBTyxTQUFTbUMsR0FDZkEsRUFBTW1CLGNBQWdCbEUsR0FDckIrQyxFQUFNcEIsTUFBTWYsS0FBS1ksTUFBTXVCLElBSS9CL0MsRUFBTWEsS0FBTyxTQUFTa0MsR0FDZkEsRUFBTW1CLGNBQWdCbEUsR0FDckIrQyxFQUFNcEIsTUFBTWQsS0FBS1csTUFBTXVCLElBSS9CL0MsRUFBTXFELEtBQU8sU0FBU04sRUFBT25CLEdBQ3RCbUIsRUFBTW1CLGNBQWdCbEUsR0FDckIrQyxFQUFNcEIsTUFBTTBCLEtBQUs3QixNQUFNdUIsR0FBUW5CLEtBL08xQyxDQW1QQ3VDLE9BQVFGIiwiZmlsZSI6InNsaWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4qIHNsaWNrLmpzXG4qIHYxLjAuMSAtIDIwMTMtMTItMjBcbiogaHR0cHM6Ly9naXRodWIuY29tL3NoYXNoYW5rbWVodGEvc2xpY2suanNcbiogKGMpIFNoYXNoYW5rIE1laHRhOyBNSVQgTGljZW5zZVxuKi9cbi8qZ2xvYmFsIGpRdWVyeSAqL1xuKGZ1bmN0aW9uICgkLCByb290KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgJC5mbi5leGlzdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCAhPT0gMDtcbiAgICB9O1xuXG4gICAgdmFyIFNsaWNrID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgY29uZmlnKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3RhcnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGVuZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAga2V5Q29udHJvbDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgICAgICAgICAgY29udGVudDogJy5zbGljay1jb250ZW50JyxcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm86ICcuY3VycmVudC1ubycsXG4gICAgICAgICAgICAgICAgdG90YWxObzogJy50b3RhbCcsXG4gICAgICAgICAgICAgICAgbmV4dDogJy5uZXh0JyxcbiAgICAgICAgICAgICAgICBwcmV2OiAnLnByZXYnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIG9wdGlvbiBpbiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFzT3duUHJvcGVydHkob3B0aW9uKSAmJiBvcHRpb24gIT09ICd0aGVtZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IGNvbmZpZ1tvcHRpb25dICE9PSB1bmRlZmluZWQgPyBjb25maWdbb3B0aW9uXSA6IHRoaXMub3B0aW9uc1tvcHRpb25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoY29uZmlnLnRoZW1lICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZm9yICh2YXIgdmFsIGluIHRoaXMub3B0aW9ucy50aGVtZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGhlbWUuaGFzT3duUHJvcGVydHkodmFsKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudGhlbWVbdmFsXSA9IGNvbmZpZy50aGVtZVt2YWxdICE9PSB1bmRlZmluZWQgPyBjb25maWcudGhlbWVbdmFsXSA6IHRoaXMub3B0aW9ucy50aGVtZVt2YWxdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9ucy5jb250ZW50ID0gdGhpcy5vcHRpb25zLnRoZW1lLmNvbnRhaW5lciArICcgJyArIHRoaXMub3B0aW9ucy50aGVtZS5jb250ZW50O1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAvLyBTdG9yZXMgc2xpZGUgdXJsIG5vIHRoYXQgaXMgdmlzaWJsZVxuICAgICAgICAgICAgY3VycmVudDogdGhpcy5vcHRpb25zLnN0YXJ0LTEsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN0YXJ0OiB0aGlzLm9wdGlvbnMuc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHRoaXMub3B0aW9ucy5lbmQsXG5cbiAgICAgICAgICAgIC8vIFN0b3JlcyB2YWx1ZXMgdGhhdCBpcyBzaG93biBpbiBjb250cm9sc1xuICAgICAgICAgICAgc2xpZGU6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgICAgIGRpZmZlcmVuY2U6ICh0aGlzLm9wdGlvbnMuc3RhcnQgLSAxKSxcbiAgICAgICAgICAgICAgICB0b3RhbDogKHRoaXMub3B0aW9ucy5lbmQgLSB0aGlzLm9wdGlvbnMuc3RhcnQgKyAxKSxcbiAgICAgICAgICAgICAgICBtYXhIaXQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5pdC5hcHBseSh0aGlzKTtcbiAgICB9O1xuXG4gICAgdmFyIFNsaWNrUHJvdG8gPSBTbGljay5wcm90b3R5cGU7XG5cbiAgICBTbGlja1Byb3RvLmhvb2tzID0ge1xuXG4gICAgICAgIC8vIE1haW4gZnVuY3Rpb24gZm9yIGhhbmRsaW5nIG5leHQvZm9yd2FyZGluZyBvZiBzbGlkZXNcbiAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2xpY2sgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZihzbGljay5zdGF0ZS5zbGlkZS5jdXJyZW50IDwgc2xpY2suc3RhdGUuc2xpZGUudG90YWwpe1xuICAgICAgICAgICAgICAgIHZhciBzdGVwID0gKytzbGljay5zdGF0ZS5zbGlkZS5jdXJyZW50ICsgc2xpY2suc3RhdGUuc2xpZGUuZGlmZmVyZW5jZTtcbiAgICAgICAgICAgICAgICBzbGljay5ob29rcy5zZXRTbGlkZS5hcHBseSh0aGlzLCBbc3RlcF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIE1haW4gZnVuY3Rpb24gZm9yIGhhbmRsaW5nIGdvaW5nIGJhY2t3YXJkXG4gICAgICAgIHByZXY6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgc2xpY2sgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZihzbGljay5zdGF0ZS5zbGlkZS5jdXJyZW50ID4gMSl7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXAgPSAtLXNsaWNrLnN0YXRlLnNsaWRlLmN1cnJlbnQgKyBzbGljay5zdGF0ZS5zbGlkZS5kaWZmZXJlbmNlO1xuICAgICAgICAgICAgICAgIHNsaWNrLmhvb2tzLnNldFNsaWRlLmFwcGx5KHRoaXMsIFtzdGVwXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0U2xpZGU6IGZ1bmN0aW9uKHN0ZXApe1xuICAgICAgICAgICAgdmFyIHNsaWNrID0gdGhpcztcbiAgICAgICAgICAgIHZhciBzbGlkZVN0YXR1cyA9IHNsaWNrLmhvb2tzLnNsaWRlU3RhdHVzLmFwcGx5KHNsaWNrLCBbc3RlcF0pO1xuICAgICAgICAgICAgc2xpY2suc3RhdGUuc2xpZGUuY3VycmVudCA9IHN0ZXAgLSBzbGljay5zdGF0ZS5zbGlkZS5kaWZmZXJlbmNlO1xuXG4gICAgICAgICAgICBpZihzbGljay5zdGF0ZS5zbGlkZS5jdXJyZW50ID09PSAxKXtcbiAgICAgICAgICAgICAgICAkKHNsaWNrLm9wdGlvbnMudGhlbWUuY29udGFpbmVyKS5hbmltYXRlKHsnb3BhY2l0eSc6ICcxJ30sIDUwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCQoc2xpY2sub3B0aW9ucy50aGVtZS5jb250YWluZXIgKyAnIC5za2lwJyArIHNsaWNrLm9wdGlvbnMudGhlbWUuY3VycmVudE5vKS5pcygnOmlucHV0Jykpe1xuICAgICAgICAgICAgICAgICQoc2xpY2sub3B0aW9ucy50aGVtZS5jb250YWluZXIgKyAnICcgKyBzbGljay5vcHRpb25zLnRoZW1lLmN1cnJlbnRObykudmFsKHNsaWNrLnN0YXRlLnNsaWRlLmN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJChzbGljay5vcHRpb25zLnRoZW1lLmNvbnRhaW5lciArICcgLnNraXAnKS52YWwoc2xpY2suc3RhdGUuc2xpZGUuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgJChzbGljay5vcHRpb25zLnRoZW1lLmNvbnRhaW5lciArICcgJyArIHNsaWNrLm9wdGlvbnMudGhlbWUuY3VycmVudE5vKS5odG1sKHNsaWNrLnN0YXRlLnNsaWRlLmN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHNsaWRlU3RhdHVzID09PSAxKXtcbiAgICAgICAgICAgICAgICAkKHNsaWNrLm9wdGlvbnMuY29udGVudCArICcgaW1nLmN1cnJlbnQnKS5yZW1vdmVDbGFzcygnY3VycmVudCcpLmFkZENsYXNzKCdjYWNoZWQtc2xpZGUnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJChzbGljay5vcHRpb25zLmNvbnRlbnQgKyAnIGltZ1tkYXRhLXNsaWRlPScgKyBzdGVwICsgJ10nKS5yZW1vdmVDbGFzcygnY2FjaGVkLXNsaWRlJykuYWRkQ2xhc3MoJ2N1cnJlbnQnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgc2xpY2suc3RhdGUuY3VycmVudCA9IHN0ZXA7XG4gICAgICAgICAgICAgICAgJChzbGljay5vcHRpb25zLnRoZW1lLmNvbnRhaW5lciArICcgLmxlbmd0aCcpLndpZHRoKDEwMCAqIHNsaWNrLnN0YXRlLnNsaWRlLmN1cnJlbnQgLyBzbGljay5zdGF0ZS5zbGlkZS50b3RhbCArICclJyk7XG4gICAgICAgICAgICAgICAgc2xpY2suaG9va3MuZ2V0U2xpZGUuYXBwbHkoc2xpY2ssIFtzdGVwKzFdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHNsaWRlU3RhdHVzID09PSAyKXtcbiAgICAgICAgICAgICAgICBzbGljay5ob29rcy5zbGlkZVN3aXRjaC5hcHBseSh0aGlzLCBbc3RlcF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihzbGlkZVN0YXR1cyA9PT0gMCl7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3Zpbmcgb24gbG9hZCBmcm9tIGFsbCBwcmV2aW91cyBzdGlsbCBsb2FkaW5nIGltYWdlcyBcbiAgICAgICAgICAgICAgICAkKHNsaWNrLm9wdGlvbnMuY29udGVudCArICcgaW1nLmxvYWRpbmcnKS5vZmYoJ2xvYWQuc2xpZGVTd2l0Y2gnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBzbGljay5ob29rcy5nZXRTbGlkZS5hcHBseShzbGljaywgW3N0ZXBdKTtcbiAgICAgICAgICAgICAgICBzbGljay5ob29rcy5zbGlkZVN3aXRjaC5hcHBseSh0aGlzLCBbc3RlcF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEdldHMgdGhlIHNsaWRlIGZvciB0aGUgc3RlcFxuICAgICAgICBnZXRTbGlkZTogZnVuY3Rpb24oc3RlcCl7XG4gICAgICAgICAgICB2YXIgc2xpY2sgPSB0aGlzO1xuICAgICAgICAgICAgaWYoc2xpY2suaG9va3Muc2xpZGVTdGF0dXMuYXBwbHkodGhpcywgW3N0ZXBdKSA9PT0gMCAmJiBzdGVwIDw9IHNsaWNrLnN0YXRlLmVuZCl7XG4gICAgICAgICAgICAgICAgJChzbGljay5vcHRpb25zLmNvbnRlbnQpLmFwcGVuZCgnPGltZyBzcmM9XCInKyBzbGljay5ob29rcy5pbWFnZVBhdGguYXBwbHkoc2xpY2ssIFtzdGVwXSkgKydcIiBkYXRhLXNsaWRlPScgKyBzdGVwICsgJyBjbGFzcz1cImxvYWRpbmdcIj4nKTtcbiAgICAgICAgICAgICAgICAkKHNsaWNrLm9wdGlvbnMuY29udGVudCArICcgaW1nLmxvYWRpbmcnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJChzbGljay5vcHRpb25zLmNvbnRlbnQgKyAnIGltZy5sb2FkaW5nJykubG9hZChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJykuYWRkQ2xhc3MoJ2NhY2hlZC1zbGlkZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNsaWRlU3dpdGNoOiBmdW5jdGlvbihzdGVwKXtcbiAgICAgICAgICAgIHZhciBzbGljayA9IHRoaXM7XG4gICAgICAgICAgICAkKHNsaWNrLm9wdGlvbnMuY29udGVudCArICcgaW1nW2RhdGEtc2xpZGU9JyArIHN0ZXAgKyAnXScpLm9uKCdsb2FkLnNsaWRlU3dpdGNoJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKHNsaWNrLm9wdGlvbnMuY29udGVudCArICcgaW1nLmN1cnJlbnQnKS5yZW1vdmVDbGFzcygnY3VycmVudCcpLmFkZENsYXNzKCdjYWNoZWQtc2xpZGUnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnY2FjaGVkLXNsaWRlJykuYWRkQ2xhc3MoJ2N1cnJlbnQnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgc2xpY2suc3RhdGUuY3VycmVudCA9IHN0ZXA7XG4gICAgICAgICAgICAgICAgJChzbGljay5vcHRpb25zLnRoZW1lLmNvbnRhaW5lciArICcgLmxlbmd0aCcpLndpZHRoKDEwMCAqIChzdGVwICsgMSkgLyBzbGljay5zdGF0ZS5zbGlkZS50b3RhbCArICclJyk7XG4gICAgICAgICAgICAgICAgc2xpY2suaG9va3MuZ2V0U2xpZGUuYXBwbHkoc2xpY2ssIFtzdGVwKzFdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFJldHVybnMgdGhlIHN0YXR1cyBvZiBhIHNsaWRlXG4gICAgICAgIC8vIDA6IE5vdCByZXF1ZXN0ZWQgeWV0XG4gICAgICAgIC8vIDE6IGNhY2hlZFxuICAgICAgICAvLyAyOiBsb2FkaW5nXG4gICAgICAgIHNsaWRlU3RhdHVzOiBmdW5jdGlvbihzdGVwKXtcbiAgICAgICAgICAgIHZhciBzbGljayA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZWwgPSBzbGljay5vcHRpb25zLmNvbnRlbnQgKyAnIGltZ1tkYXRhLXNsaWRlPScgKyBzdGVwICsgJ10nO1xuICAgICAgICAgICAgaWYoJChlbCkuZXhpc3RzKCkpe1xuICAgICAgICAgICAgICAgIGlmKCQoZWwpLmhhc0NsYXNzKCdsb2FkaW5nJykpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFJldHVybnMgdGhlIHBhdGggd2l0aCB0aGUgY3VycmVudCBubyBpbnNlcnRlZFxuICAgICAgICBpbWFnZVBhdGg6IGZ1bmN0aW9uKHN0ZXApe1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gdGhpcy5vcHRpb25zLnNvdXJjZS5zcGxpdCgnKicpO1xuICAgICAgICAgICAgcmV0dXJuIHBhcnRzWzBdICsgc3RlcCArIHBhcnRzWzFdO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNraXA6IGZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICBpZigkLmlzTnVtZXJpYyh2YWwpKXtcbiAgICAgICAgICAgICAgICB2YXIgc2xpY2sgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdmFyIHN0ZXAgPSBwYXJzZUludCh2YWwpICsgc2xpY2suc3RhdGUuc2xpZGUuZGlmZmVyZW5jZTtcbiAgICAgICAgICAgICAgICBzbGljay5ob29rcy5nZXRTbGlkZS5hcHBseShzbGljaywgW3N0ZXBdKTtcbiAgICAgICAgICAgICAgICBzbGljay5ob29rcy5zZXRTbGlkZS5hcHBseShzbGljaywgW3N0ZXBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrUHJvdG8uaW5pdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBzbGljayA9IHRoaXM7XG5cbiAgICAgICAgJChzbGljay5vcHRpb25zLnRoZW1lLmNvbnRhaW5lcikuY3NzKCdvcGFjaXR5JywgJzAnKTtcblxuICAgICAgICAvLyBTZXRzIHRoZSBmaXJzdCBzbGlkZVxuICAgICAgICBpZih0eXBlb2Ygc2xpY2sub3B0aW9ucy5zb3VyY2UgPT09ICdzdHJpbmcnKXtcbiAgICAgICAgICAgIHNsaWNrLmhvb2tzLm5leHQuYXBwbHkoc2xpY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXR0YWNoZXMgZXZlbnQgbGlzdGVuZXJzIGZvciBuZXh0L3ByZXYgYnV0dG9uc1xuICAgICAgICAkKHNsaWNrLm9wdGlvbnMudGhlbWUuY29udGFpbmVyICsgJyAnICsgc2xpY2sub3B0aW9ucy50aGVtZS5uZXh0KS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNsaWNrLmhvb2tzLm5leHQuYXBwbHkoc2xpY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgJChzbGljay5vcHRpb25zLnRoZW1lLmNvbnRhaW5lciArICcgJyArIHNsaWNrLm9wdGlvbnMudGhlbWUucHJldikuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzbGljay5ob29rcy5wcmV2LmFwcGx5KHNsaWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoc2xpY2sub3B0aW9ucy50aGVtZS5jb250YWluZXIgKyAnICcgKyBzbGljay5vcHRpb25zLnRoZW1lLnRvdGFsTm8pLmh0bWwoc2xpY2suc3RhdGUuZW5kIC0gc2xpY2suc3RhdGUuc3RhcnQgKyAxKTtcblxuICAgICAgICAvLyBBdGFjaGVzIGtleWJvYXJkIGNvbnRyb2xcbiAgICAgICAgaWYoc2xpY2sub3B0aW9ucy5rZXlDb250cm9sKXtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoKGUua2V5Q29kZSA9PT0gIDM5KSAmJiAhJCgnaW5wdXQ6Zm9jdXMnKS5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgICAgICBzbGljay5ob29rcy5uZXh0LmFwcGx5KHNsaWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChlLmtleUNvZGUgPT09ICAzNykgJiYgISQoJ2lucHV0OmZvY3VzJykuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpY2suaG9va3MucHJldi5hcHBseShzbGljayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICQoc2xpY2sub3B0aW9ucy50aGVtZS5jb250YWluZXIgKyAnIC5za2lwJykua2V5cHJlc3MoZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBpZihlLmtleUNvZGUgPT09IDEzKXtcbiAgICAgICAgICAgICAgICBzbGljay5ob29rcy5za2lwLmFwcGx5KHNsaWNrLCBbJCh0aGlzKS52YWwoKV0pO1xuICAgICAgICAgICAgICAgICQodGhpcykuYmx1cigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgd2luZG93LlNsaWNrID0gU2xpY2s7XG5cbiAgICAvLyBFeHBvc2luZyBwcm9ncmFtbWF0aWMgYWNjZXNzXG4gICAgU2xpY2submV4dCA9IGZ1bmN0aW9uKHNsaWNrKXtcbiAgICAgICAgaWYoc2xpY2suY29uc3RydWN0b3IgPT09IFNsaWNrKXtcbiAgICAgICAgICAgIHNsaWNrLmhvb2tzLm5leHQuYXBwbHkoc2xpY2spO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByZXYgPSBmdW5jdGlvbihzbGljayl7XG4gICAgICAgIGlmKHNsaWNrLmNvbnN0cnVjdG9yID09PSBTbGljayl7XG4gICAgICAgICAgICBzbGljay5ob29rcy5wcmV2LmFwcGx5KHNsaWNrKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5za2lwID0gZnVuY3Rpb24oc2xpY2ssIHN0ZXApe1xuICAgICAgICBpZihzbGljay5jb25zdHJ1Y3RvciA9PT0gU2xpY2spe1xuICAgICAgICAgICAgc2xpY2suaG9va3Muc2tpcC5hcHBseShzbGljaywgW3N0ZXBdKTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0oalF1ZXJ5LCB3aW5kb3cpKTsiXX0=