$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('.danceFloor').append(dancer.$node);
    window.dancers.push(dancer);

    dancer.$node.on('click', function(event) {
      event.stopPropagation();

      // Add class to node
      if ($(event.currentTarget).hasClass('is-selected')) {
        $(event.currentTarget).removeClass('is-selected');
      } else {
        $('.dancer').removeClass('is-selected');
        $(event.currentTarget).addClass('is-selected');
      }

      // Add prop to data
      dancers.forEach(function(dancer) {
        dancer.isSelected = false;
      });
      dancer.isSelected = true;

      if (dancer.$node.hasClass('is-garth')) {
        $('.dancer').not(dancer.$node).remove();
        var dreamWoman = new makeDreamWoman($("body").height() * 0.1, $("body").width() * 0.45, Math.random() * 1000, 'is-dreamWoman');
        $('.danceFloor').prepend(dreamWoman.$node);
        dancers = [dancer, dreamWoman];
        
      }
    });
  });

  $(document).on('keydown', function(event) {
    event = event || window.event;
    if (event.keyCode === 38) {
      $('.dancer.is-selected').animate({'top': '-=100px'}, 300);
    } else if (event.keyCode === 40) {
      $('.dancer.is-selected').animate({'top': '+=100px'}, 300);
    } else if (event.keyCode === 37) {
      $('.dancer.is-selected').animate({'left': '-=100px'}, 300);
    } else if (event.keyCode === 39) {
      $('.dancer.is-selected').animate({'left': '+=100px'}, 300);
    }

    var selectedDancer = dancers.filter( dancer => dancer.isSelected);
    if ([37, 38, 39, 40].includes(event.keyCode)) {
      selectedDancer[0].calculateDistances();
    }
  });

  $(document).on('click', function(){
    $('.dancer').removeClass('is-selected');
  });

  $('.lineUpButton').on('click', function(event) {
    window.dancers.forEach(function(dancerItem){
      dancerItem.lineUp();
    });
  });

  $('.clearButton').on('click', function(){
    $('.dancer').remove();
    dancers = [];
  });

  // $('.helpGarth').on('click', function(){
  //   $('.dancer').remove();
  //   dancers = [];

  //   var garth = new makeGarthDancer(
  //     $("body").height() * 0.55,
  //     $("body").width() * 0.15,
  //     Math.random() * 1000
  //   );
  //   garth.$node.addClass('is-selected');
  //   $('.danceFloor').append(garth.$node);
  //   //
  //   //$('.dancer').removeClass('is-selected');
  //   // garth.$node.addClass('is-selected');
  //   //
  //   garth.isSelected = true;
  //   window.dancers.push(garth);
  // });
  
});