const cl = console.log;
const postContainer = document.getElementById("postContainer");
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
let result = ``;
postsArr.forEach(function(obj){
	result += `
	            <div class="col-md-4 mb-4">
			      <div class="card postcard h-100">
				      <div class="card-header">
					      <h3 class="mb-0" data-toggle="tooltip" data-placement="top" title="${obj.title}">
						  ${obj.title}
						  </h3>
					  </div>
					  <div class="card-body">
					     <p class="m-0">
						    ${obj.body}
						 </p>
					  </div>
					  <div class="card-footer text-right d-flex justify-content-between">
					       <button class="btn btn-primary">Edit</button>
						   <button class="btn btn-danger">Delete</button>
					  </div>
				  </div>
			   </div>
	          `
})
postContainer.innerHTML = result;