// check off specific todos by clicking
	/*
		$("li").click(function(){
			//if li is grey
			if ($(this).css("color") === "rgb(128, 128, 128)"){
				//turn it black
				$(this).css({
					color: "black",
					textDecoration: "none"
				});
			}
			//else
			else {
				//turn it grey
					// $(this).css("color", "gray");
					// $(this).css("text-decoration", "line-through"); "Dry code, next line"
				$(this).css({
					color: "gray",
					textDecoration: "line-through"
						// text-decoration: "line-through"; "JS doesn't allow property names with hyphens. If using syntax where object are defined, camelCase must be used

				});
			}

		});
	*/
	// we can avoid all this code by creating a class in our css, which we did by the name of .completed and run the following code
	// $("li").click(function(){ we are changing this code with next line so new todos can also be clicked as done.  The reason why we're doing this is because we can only add a listener using jQuery on elements that exist when this code is run the first time.
	$("ul").on("click", "li", function(){ // the reason for this code is because we can only add a listener using jQuery, on elements that exist when this code is run the first time.  When this code is run the first time, we only have 3 <li>s, so if we add a click-listener to <li>s, it will only add those 3. So what we did is add a listener to the entire <ul> parent. So anytime we click on that <ul>, this listener will fire; except, we add the <li> second listener argument which says that when an <li> is clicked inside of a <ul>, run this code.
		$(this).toggleClass("completed"); 
	});
		//we added a listener to an element that exists when the page loads, but we're only listening to the <li>s that are clicked inside of that <ul>.

//click on X to delete Todo
	//$("span").click(function(event){
	$("ul").on("click", "span", function(event){
		//listen on an event when the page loads with on(), and then click, then we only want this code to run when a <span> is clicked inside of a <ul>
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		});
			// will fadeOut the entire li instead of just the span
		event.stopPropagation();
			// jQuery method that will stop the event from bubbling-up (firing all elements it's layered inside)
	});

// add new todo
	$("input[type='text']").keypress(function(event){
		if(event.which === 13){
			//grabbing new todo text from input
			var todoText = $(this).val();
			//clear out input
			$(this).val("");
			//create a new li and add to ul
			$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
		}
	});

// making plus sign show/hide the to-do list
	//use jQuery to add click listener 
/*	$(".fa-plus").click(function(){
		$("input[type='text']").fadeToggle();
	}); */
	$("h1").on("click", ".fa-plus", function(){
 		$("input[type='text']").fadeToggle();
	});







