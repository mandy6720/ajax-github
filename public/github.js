

$(document).on("ready", function() {

	var source   = $("#userDataTemplate").html();
	var template = Handlebars.compile(source); //takes string and replaces values as needed

	$.ajax({
	  url: "https://api.github.com/users/mandy6720",
	  method: "GET",
	  data: {
	    access_token: "4be98d353a87891a63815878c1d74215bb72af55"
	  },
	  success: function(data) {
	  	data.created_at = moment(data.created_at).format('MMM DD YYYY');
	  	var htmlString = template(data);
	  	 $("#left").append(htmlString)
	  }
	})

	$.ajax({
	  url: "https://api.github.com/users/mandy6720/starred",
	  method: "GET",
	  data: {
	    access_token: "4be98d353a87891a63815878c1d74215bb72af55"
	  },
	  success: function(data) {
	  	console.log(data)
		$("#starText").text(data.length.toString());

	  }
	})

	var sourceOrgs   = $("#orgsTemplate").html();
	var templateOrgs = Handlebars.compile(sourceOrgs); //takes string and replaces values as needed

	$.ajax({
	  url: "https://api.github.com/users/mandy6720/orgs",
	  method: "GET",
	  data: {
	    access_token: "4be98d353a87891a63815878c1d74215bb72af55"
	  },
	  success: function(data) {
	  	_.each(data, function(org) {
	  	var htmlStringOrgs = templateOrgs(org);
	  	 $("#orgs").append(htmlStringOrgs)
	  	 })
	  }
	})

	var sourceRepo = $("#userRepoTemplate").html();
	var templateRepo = Handlebars.compile(sourceRepo); //takes string and replaces values as needed

	$.ajax({
	  url: "https://api.github.com/users/mandy6720/repos",
	  method: "GET",
	  data: {
	    access_token: "4be98d353a87891a63815878c1d74215bb72af55"
	  },
	  success: function(data) {
	  	_.each(data, function(repo){
		  	repo.updated_at = moment(repo.updated_at).fromNow();
		  	var htmlStringRepo = templateRepo(repo) 
		  	 $("#main").append(htmlStringRepo)
	  	})
	  }
	})

})