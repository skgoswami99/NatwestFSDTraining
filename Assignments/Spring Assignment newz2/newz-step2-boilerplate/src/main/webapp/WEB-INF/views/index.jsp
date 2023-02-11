<%@page language="java" pageEncoding="ISO-8859-1"
	contentType="text/html; ISO-8859-1" isELIgnored="false"%>
<%@taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@page import="java.util.List,com.stackroute.newz.model.News" isELIgnored="false" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!doctype html>
<html lang="en">
<head>
	<title>Newz Application</title>
	<meta charset="utf-8">
	<style>
	.div-style{
	    position: absolute;
	    top: 10%;
	    left: 50%;
	    margin-right: -50%;
	    transform: translate(-50%, -50%);
	    width:600px; height:100px; background:#E5E4E2; text-align:center;
	}
	body {background-color: #E6E6FA;}
	.form-center {
	  display:flex;
	  justify-content: center;
	  position: absolute;
	  top: 45%;
	  left: 50%;
	  transform: translate(-50%,-50%);
	}
	.data_table {
	  border-collapse: collapse; width: 100%; background-color: #4C4646; position:absolute; bottom:0; margin-left: auto;
	  margin-right: auto;
	}
	.th {text-align:center; color:#FFFFFF;}
	.th_td {
	  height: 15px; color:#FFFFFF; font-size: 10px;}
	.submit_button{ background-color:#0000FF; border-radius: 5px; text-align: center; font-size: 16px; color: white;}
	</style>
</head>

<body>
<!-- Create a form which will have text boxes for News Name, News Author, description, content along with a Add 
		 button. Handle errors like empty fields. -->
		 
	<div class="div-style"><h1>Newz Application Assignment</h1></div>
	
	<c:choose>
		<c:when test="${empty NewsById}">
			<div class="form-center">
			<form action="add" method="post">
			<label>Name</label><br/>
			<input type="text" name="name"/><br/>
			<label>Author</label><br/>
			<input type="text" name="author"/><br/>
			<label>Description</label><br/>
			<input type="text" name="description"/><br/>
			<label>Content</label><br/>
			<input type="text" name="content"/><br/>
			<input class="submit_button" type="submit" value="ADD NEWS"/><br/>
			</form></div>
		</c:when>
		<c:otherwise>
			<div class="form-center">
			<form action="add" method="post">
			<label>Name</label><br/>
			<input type="text" name="name" value=<c:out value="${NewsById.name}"/> /><br/>
			<label>Author</label><br/>
			<input type="text" name="author" value=<c:out value="${NewsById.author}"/> /><br/>
			<label>Description</label><br/>
			<input type="text" name="description" value=<c:out value="${NewsById.description}"/> /><br/>
			<label>Content</label><br/>
			<input type="text" name="content" value=<c:out value="${NewsById.content}"/> /><br/>
			<input class="submit_button" type="submit" value="UPDATE NEWS"/><br/>
			</form></div>
		</c:otherwise>
	</c:choose>
	
	<!-- display all existing news in a tabular structure with News Name, News Author, 
	description, content, Publish Date and Action -->
	
	<c:if test="${! empty AllNews}">
	
	<Table class="data_table" border="1">
		<tr>
			<th class="th" width="10%">News ID</th>
			<th class="th" width="10%">Name</th>
			<th class="th" width="10%">Author</th>
			<th class="th" width="15%">Description</th>
			<th class="th" width="20%">Content</th>
			<th class="th" width="10%">Published At</th>
		</tr>
		
		<c:forEach items="${AllNews}" var="news">
		<tr>
			<td class="th_td" >${news.newsId}</td>
			<td class="th_td" >${news.name}</td>
			<td class="th_td" >${news.author}</td>
			<td class="th_td" >${news.description}</td>
			<td class="th_td" >${news.content}</td>
			<td class="th_td" >${news.publishedAt}</td>
			<td width="5%"><a href="<c:url value="update" ><c:param name="newsId" value="${news.newsId}"/></c:url>">Update</a></td>
			<td width="5%"><a href="<c:url value="delete" ><c:param name="newsId" value="${news.newsId}"/></c:url>">Delete</a></td>
		</tr>
		</c:forEach>
	</Table>
	</c:if>
	
</body>
</html>



