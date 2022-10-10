(function($) {

  var self = this,
    container, running = false,
    currentY = 0,
    targetY = 0,
    oldY = 0,
    maxScrollTop = 0,
    minScrollTop, direction, onRenderCallback = null,
    fricton = 0.85,
    vy = 0,
    stepAmt = 1,
    minMovement = 0.1,
    ts = 0.1;

  var updateScrollTarget = function(amt) {
    targetY += amt;
    vy += (targetY - oldY) * stepAmt;

    oldY = targetY;
  }
  var render = function() {
    if (vy < -(minMovement) || vy > minMovement) {

      currentY = (currentY + vy);
      if (currentY > maxScrollTop) {
        currentY = vy = 0;
      } else if (currentY < minScrollTop) {
        vy = 0;
        currentY = minScrollTop;
      }

      container.scrollTop(-currentY);

      vy *= fricton;

      if (onRenderCallback) {
        onRenderCallback();
      }
    }
  }
  var animateLoop = function() {
    if (!running) return;
    requestAnimFrame(animateLoop);
    render();
    //log("45","animateLoop","animateLoop", "",stop);
  }
  var onWheel = function(e) {
    e.preventDefault();
    var evt = e.originalEvent;

    var delta = evt.detail ? evt.detail * -1 : evt.wheelDelta / 40;
    var dir = delta < 0 ? -1 : 1;
    if (dir != direction) {
      vy = 0;
      direction = dir;
    }

    //reset currentY in case non-wheel scroll has occurred (scrollbar drag, etc.)
    currentY = -container.scrollTop();
    updateScrollTarget(delta);
  }

  /*
   * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
   */
  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 5000 / 200);
      };
  })();

  /*
   * http://jsbin.com/iqafek/2/edit
   */
  var normalizeWheelDelta = function() {
    // Keep a distribution of observed values, and scale by the
    // 33rd percentile.
    var distribution = [],
      done = null,
      scale = 3000;
    return function(n) {
      // Zeroes don't count.
      if (n == 0) return n;
      // After 500 samples, we stop sampling and keep current factor.
      if (done != null) return n * done;
      var abs = Math.abs(n);
      // Insert value (sorted in ascending order).
      outer: do { // Just used for break goto
        for (var i = 0; i < distribution.length; ++i) {
          if (abs <= distribution[i]) {
            distribution.splice(i, 0, abs);
            break outer;
          }
        }
        distribution.push(abs);
      } while (false);
      // Factor is scale divided by 33rd percentile.
      var factor = scale / distribution[Math.floor(distribution.length / 3)];
      if (distribution.length == 5000) done = factor;
      return n * factor;
    };
  }();


  $.fn.smoothWheel = function() {
    //  var args = [].splice.call(arguments, 0);
    var options = jQuery.extend({}, arguments[0]);
    return this.each(function(index, elm) {

      if (!('ontouchstart' in window)) {
        container = $(this);
        container.bind("mousewheel", onWheel);
        container.bind("DOMMouseScroll", onWheel);

        //set target/old/current Y to match current scroll position to prevent jump to top of container
        targetY = oldY = container.scrollTop();
        currentY = -targetY;

        minScrollTop = container.get(0).clientHeight - container.get(0).scrollHeight;
        if (options.onRender) {
          onRenderCallback = options.onRender;
        }
        if (options.remove) {
          log("122", "smoothWheel", "remove", "");
          running = false;
          container.unbind("mousewheel", onWheel);
          container.unbind("DOMMouseScroll", onWheel);
        } else if (!running) {
          running = true;
          animateLoop();
        }

      }
    });
  };

})(jQuery);


$(document).ready(function(){
  $(window).smoothWheel();
});







/*
        var waypoint = new Waypoint({
          element: document.getElementById('px-offset-waypoint'),
          handler: function (direction) {
            notify('I am 20px from the top of the window')
          },
          offset: 20
        })
    */
   $(document).ready(function () {
    $('.anim-1').waypoint(function (direction) {
      $('.anim-1').addClass('animated fadeInLeft')
    },
      {
        offset: '70%'
      })
  })

  $(document).ready(function () {
    $('.anim-2').waypoint(function (direction) {
      $('.anim-2').addClass('animated fadeInRight')
    },
      {
        offset: '70%'
      })
  })

  $(document).ready(function () {
    $('.anim-3').waypoint(function (direction) {
      $('.anim-3').addClass('animated fadeInLeft')
    },
      {
        offset: '60%'
      })
  })

  $(document).ready(function () {
    $('.anim-4').waypoint(function (direction) {
      $('.anim-4').addClass('animated fadeInRight')
    },
      {
        offset: '60%'
      })
  })


  $(document).ready(function () {
    $('.anim-5').waypoint(function (direction) {
      $('.anim-5').addClass('animated fadeInLeft')
    },
      {
        offset: '60%'
      })
  })

  $(document).ready(function () {
    $('.anim-6').waypoint(function (direction) {
      $('.anim-6').addClass('animated zoomIn')
    },
      {
        offset: '40%'
      })
  })

  $(document).ready(function () {
    $('.anim-7').waypoint(function (direction) {
      $('.anim-7').addClass('animated fadeInUp')
    },
      {
        offset: '40%'
      })
  })

  $(document).ready(function () {
    $('.anim-8').waypoint(function (direction) {
      $('.anim-8').addClass('animated zoomIn')
    },
      {
        offset: '40%'
      })
  })


  $(document).ready(function () {
    $('.anim-9').waypoint(function (direction) {
      $('.anim-9').addClass('animated zoomIn')
    },
      {
        offset: '40%'
      })
  })

  $(document).ready(function () {
    $('.anim-10').waypoint(function (direction) {
      $('.anim-10').addClass('animated fadeInUp')
    },
      {
        offset: '40%'
      })
  })

  $(document).ready(function () {
    $('.anim-11').waypoint(function (direction) {
      $('.anim-11').addClass('animated zoomIn')
    },
      {
        offset: '40%'
      })
  })


  $(document).ready(function () {
    $('.anim-12').waypoint(function (direction) {
      $('.anim-12').addClass('animated zoomIn')
    },
      {
        offset: '40%'
      })
  })

  $(document).ready(function () {
    $('.anim-13').waypoint(function (direction) {
      $('.anim-13').addClass('animated fadeInUp')
    },
      {
        offset: '40%'
      })
  })

  $(document).ready(function () {
    $('.anim-14').waypoint(function (direction) {
      $('.anim-14').addClass('animated zoomIn')
    },
      {
        offset: '40%'
      })
  })

  $(document).ready(function () {
    $('.anim-15').waypoint(function (direction) {
      $('.anim-15').addClass('animated fadeInLeft')
    },
      {
        offset: '40%'
      })
  })

  $(document).ready(function () {
    $('.anim-16').waypoint(function (direction) {
      $('.anim-16').addClass('animated fadeInRight')
    },
      {
        offset: '40%'
      })
  })

  $(document).ready(function () {
    $('.anim-17').waypoint(function (direction) {
      $('.anim-17').addClass('animated fadeInLeft')
    },
      {
        offset: '40%'
      })
  })

  $(document).ready(function () {
    $('.anim-18').waypoint(function (direction) {
      $('.anim-18').addClass('animated fadeInRight')
    },
      {
        offset: '40%'
      })
  })

  $(document).ready(function () {
    $('.anim-19').waypoint(function (direction) {
      $('.anim-19').addClass('animated fadeInLeft')
    },
      {
        offset: '40%'
      })
  })

  $(document).ready(function () {
    $('.anim-20').waypoint(function (direction) {
      $('.anim-20').addClass('animated zoomIn')
    },
      {
        offset: '40%'
      })
  })

  $(document).ready(function () {
    $('.anim-21').waypoint(function (direction) {
      $('.anim-21').addClass('animated zoomIn')
    },
      {
        offset: '40%'
      })
  })

  $(document).ready(function () {
    $('.anim-22').waypoint(function (direction) {
      $('.anim-22').addClass('animated zoomIn')
    },
      {
        offset: '65%'
      })
  })

  $(document).ready(function () {
    $('.anim-23').waypoint(function (direction) {
      $('.anim-23').addClass('animated zoomIn')
    },
      {
        offset: '65%'
      })
  })

  $(document).ready(function () {
    $('.anim-24').waypoint(function (direction) {
      $('.anim-24').addClass('animated fadeInLeft')
    },
      {
        offset: '70%'
      })
  })

  $(document).ready(function () {
    $('.anim-25').waypoint(function (direction) {
      $('.anim-25').addClass('animated zoomIn')
    },
      {
        offset: '60%'
      })
  })

  $(document).ready(function () {
    $('.anim-26').waypoint(function (direction) {
      $('.anim-26').addClass('animated fadeInLeft')
    },
      {
        offset: '98%'
      })
  })

  $(document).ready(function () {
    $('.anim-27').waypoint(function (direction) {
      $('.anim-27').addClass('animated fadeInRight')
    },
      {
        offset: '98%'
      })
  })

  $(document).ready(function () {
    $('.anim-28').waypoint(function (direction) {
      $('.anim-28').addClass('animated fadeInRight')
    },
      {
        offset: '78%'
      })
  })

  $(document).ready(function () {
    $('.anim-29').waypoint(function (direction) {
      $('.anim-29').addClass('animated zoomInUp')
    },
      {
        offset: '88%'
      })
  })

  $(document).ready(function () {
    $('.anim-30').waypoint(function (direction) {
      $('.anim-30').addClass('animated zoomInUp')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-31').waypoint(function (direction) {
      $('.anim-31').addClass('animated zoomInUp')
    },
      {
        offset: '58%'
      })
  })
  
  $(document).ready(function () {
    $('.anim-32').waypoint(function (direction) {
      $('.anim-32').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-33').waypoint(function (direction) {
      $('.anim-33').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-34').waypoint(function (direction) {
      $('.anim-34').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })


  $(document).ready(function () {
    $('.anim-35').waypoint(function (direction) {
      $('.anim-35').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-36').waypoint(function (direction) {
      $('.anim-36').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-37').waypoint(function (direction) {
      $('.anim-37').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-38').waypoint(function (direction) {
      $('.anim-38').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-39').waypoint(function (direction) {
      $('.anim-39').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-40').waypoint(function (direction) {
      $('.anim-40').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-41').waypoint(function (direction) {
      $('.anim-41').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-42').waypoint(function (direction) {
      $('.anim-42').addClass('animated zoomIn')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-43').waypoint(function (direction) {
      $('.anim-43').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })


  $(document).ready(function () {
    $('.anim-44').waypoint(function (direction) {
      $('.anim-44').addClass('animated fadeInRight')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-45').waypoint(function (direction) {
      $('.anim-45').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-46').waypoint(function (direction) {
      $('.anim-46').addClass('animated fadeInRight')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-47').waypoint(function (direction) {
      $('.anim-47').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-48').waypoint(function (direction) {
      $('.anim-48').addClass('animated fadeInRight')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-49').waypoint(function (direction) {
      $('.anim-49').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-50').waypoint(function (direction) {
      $('.anim-50').addClass('animated fadeInRight')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-51').waypoint(function (direction) {
      $('.anim-51').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-52').waypoint(function (direction) {
      $('.anim-52').addClass('animated fadeInRight')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-53').waypoint(function (direction) {
      $('.anim-53').addClass('animated fadeInLeft')
    },
      {
        offset: '58%'
      })
  })

  $(document).ready(function () {
    $('.anim-54').waypoint(function (direction) {
      $('.anim-54').addClass('animated fadeInRight')
    },
      {
        offset: '58%'
      })
  })


  $(document).ready(function () {
    $('.anim-55').waypoint(function (direction) {
      $('.anim-55').addClass('animated zoomIn')
    },
      {
        offset: '50%'
      })
  })


  $(document).ready(function () {
    $('.anim-56').waypoint(function (direction) {
      $('.anim-56').addClass('animated fadeInLeft')
    },
      {
        offset: '30%'
      })
  })

  $(document).ready(function () {
    $('.anim-57').waypoint(function (direction) {
      $('.anim-57').addClass('animated fadeInRight')
    },
      {
        offset: '50%'
      })
  })

  $(document).ready(function () {
    $('.anim-58').waypoint(function (direction) {
      $('.anim-58').addClass('animated fadeInLeft')
    },
      {
        offset: '30%'
      })
  })

  $(document).ready(function () {
    $('.anim-59').waypoint(function (direction) {
      $('.anim-59').addClass('animated fadeInRight')
    },
      {
        offset: '50%'
      })
  })

  $(document).ready(function () {
    $('.anim-60').waypoint(function (direction) {
      $('.anim-60').addClass('animated fadeInLeft')
    },
      {
        offset: '30%'
      })
  })

  $(document).ready(function () {
    $('.anim-61').waypoint(function (direction) {
      $('.anim-61').addClass('animated fadeInRight')
    },
      {
        offset: '50%'
      })
  })



 $(document).ready(function () {
    $('.anim-g1').waypoint(function (direction) {
      $('.anim-g1').addClass('animated fadeInLeft')
    },
      {
        offset: '50%'
      })
  })

  $(document).ready(function () {
    $('.anim-g2').waypoint(function (direction) {
      $('.anim-g2').addClass('animated zoomInUp')
    },
      {
        offset: '50%'
      })
  })

  $(document).ready(function () {
    $('.anim-g3').waypoint(function (direction) {
      $('.anim-g3').addClass('animated fadeInRight')
    },
      {
        offset: '50%'
      })
  })


  $(document).ready(function () {
    $('.anim-g4').waypoint(function (direction) {
      $('.anim-g4').addClass('animated fadeInLeft')
    },
      {
        offset: '50%'
      })
  })

  $(document).ready(function () {
    $('.anim-g5').waypoint(function (direction) {
      $('.anim-g5').addClass('animated zoomInUp')
    },
      {
        offset: '50%'
      })
  })

  $(document).ready(function () {
    $('.anim-g6').waypoint(function (direction) {
      $('.anim-g6').addClass('animated fadeInRight')
    },
      {
        offset: '50%'
      })
  })


  $(document).ready(function () {
    $('.anim-g7').waypoint(function (direction) {
      $('.anim-g7').addClass('animated fadeInLeft')
    },
      {
        offset: '50%'
      })
  })

  $(document).ready(function () {
    $('.anim-g8').waypoint(function (direction) {
      $('.anim-g8').addClass('animated zoomInUp')
    },
      {
        offset: '50%'
      })
  })

  $(document).ready(function () {
    $('.anim-g9').waypoint(function (direction) {
      $('.anim-g9').addClass('animated fadeInRight')
    },
      {
        offset: '50%'
      })
  })


  $(document).ready(function () {
    $('.anim-g10').waypoint(function (direction) {
      $('.anim-g10').addClass('animated fadeInLeft')
    },
      {
        offset: '50%'
      })
  })

  $(document).ready(function () {
    $('.anim-g11').waypoint(function (direction) {
      $('.anim-g11').addClass('animated zoomInUp')
    },
      {
        offset: '50%'
      })
  })

  $(document).ready(function () {
    $('.anim-g12').waypoint(function (direction) {
      $('.anim-g12').addClass('animated fadeInRight')
    },
      {
        offset: '50%'
      })
  })


  $(document).ready(function () {
    $('.anim-g13').waypoint(function (direction) {
      $('.anim-g13').addClass('animated fadeInLeft')
    },
      {
        offset: '50%'
      })
  })

  $(document).ready(function () {
    $('.anim-g14').waypoint(function (direction) {
      $('.anim-g14').addClass('animated zoomInUp')
    },
      {
        offset: '50%'
      })
  })

  $(document).ready(function () {
    $('.anim-g15').waypoint(function (direction) {
      $('.anim-g15').addClass('animated fadeInRight')
    },
      {
        offset: '50%'
      })
  })


  $(document).ready(function () {
    $('.anim-g16').waypoint(function (direction) {
      $('.anim-g16').addClass('animated fadeInLeft')
    },
      {
        offset: '50%'
      })
  })

  $(document).ready(function () {
    $('.anim-g17').waypoint(function (direction) {
      $('.anim-g17').addClass('animated zoomInUp')
    },
      {
        offset: '50%'
      })
  })

  $(document).ready(function () {
    $('.anim-g18').waypoint(function (direction) {
      $('.anim-g18').addClass('animated fadeInRight')
    },
      {
        offset: '50%'
      })
  })
