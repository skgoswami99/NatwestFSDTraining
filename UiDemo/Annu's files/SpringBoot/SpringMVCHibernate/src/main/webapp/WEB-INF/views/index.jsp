<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html lang="en">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Bootstrap CSS -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
	integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
	crossorigin="anonymous">
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<title>Note CRUD Spring</title>
</head>
<body onload="">
	<div class="container">
		<div class="jumbotron" style="margin: 45px 0px">
			<h2 class="text-center">Note CRUD APP</h2>
		</div>

		<form method="POST" action="saveNote" modelAttribute="note">

			<div class="form-group">
				<label for="noteid">Note ID</label> <input type="text"
					class="form-control" id="noteId" aria-describedby="name"
					placeholder="Enter Note ID" name="noteId">
			</div>

			<div class="form-group">
				<label for="exampleInputTitle">Note Title</label> 
				<input type="text"
					class="form-control" id="noteTitle" aria-describedby="name"
					placeholder="Enter Note Title" name="noteTitle">
			</div>
			
			<div class="form-group">
				<label for="exampleInputNoteText">Note Text</label> 
				<input type="text" class="form-control" id="noteText"
					placeholder="Enter Note Text" name="noteText">
			</div>
			
			<div class="form-group">
				<label for="exampleInputNoteCategory">Note Category</label> 
				<input type="text" class="form-control" id="noteCategory"
					placeholder="Enter Note Text" name="noteCategory">
			</div>

			<button type="submit" class="btn btn-primary">Submit</button>
		</form>

		<div style="margin-top: 1em; text-align: center">
			<h2>All Notes Information</h2>
			<table class="table table-striped">
				<thead>
					<tr>
						<th scope="col">Note ID</th>
						<th scope="col">Note Title</th>
						<th scope="col">Note Text</th>
						<th scope="col">Note Category</th>
					</tr>
				</thead>
				<tbody id='table-body'>
					<c:forEach items="${noteList}" var="noteobj">
						<tr>
							<td>${noteobj.noteId}</td>
							<td>${noteobj.noteTitle}</td>
							<td>${noteobj.noteText}</td>
							<td>${noteobj.noteCategory}</td>
							<td>Update</td>
							<td>Delete</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</div>

	<!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
		integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
		crossorigin="anonymous"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
		integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
		crossorigin="anonymous"></script>
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
		integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
		crossorigin="anonymous"></script>
</body>
</html>