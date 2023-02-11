<%@page language="java" pageEncoding="ISO-8859-1"
	contentType="text/html; ISO-8859-1" isELIgnored="false"%>
	<%@ taglib uri='http://java.sun.com/jsp/jstl/core' prefix='c'%>
<!doctype html>
<html lang="en">
<head>
<!-- Required meta tags -->
<title>Newz Application Assignment</title>
<meta charset="utf-8">

</head>
<body>

	<!-- Create a form which will have text boxes for News ID, title, author,description, content
		 along with a Send button. Handle errors like empty fields -->
		 <h2>Newz Application Assignment</h2>
		<Form method="post" action="saveData">
		<table>
	<Tr>
	<Td>News Id</Td>
	<Td><Input type="text" name="newsId" /></Td>
	</Tr>
	<Tr>
	<Td>title</Td>
	<Td> <Input type="text" name="title" /></Td>
	</Tr>
	<Tr>
	<Td>Author</Td>
	<Td> <Input type="text" name="author" /></Td>
	</Tr>
	<Tr>
	<Td>Description</Td>
	<Td> <Input type="text" name="description" /></Td>
	</Tr>
	<Tr>
	<Td>Content</Td>
	<Td> <Input type="text" name="content" /></Td>

	</Tr>
	<Tr>
	<Td colspan=2 align="center">
	<Input type="submit" value="Register Me " /></Td>
	</Tr>
	</table>
	</Form>

	<!-- display all existing news in a tabular structure with News ID, title, author,description,content
		publishedAt and Action(delete button) -->
	<c:if test="${!empty newz}">
	<h2>Employees Records</h2>
	<Table border="1">
	<Tr>
	<Th>NewId</Th>
	<Th>Title</Th>
	<Th>Author</Th>
	<Th>Description</Th>
	<Th>PublishedAt</Th>
	<Th>Content</Th>

	</Tr>
	</c:if>

	<c:forEach items="${newz}" var="news">

	<Tr>
		<Td>${news.newsId}</Td>
		<Td>${news.title}</Td>
		<Td>${news.author}</Td>
		<Td>${news.description}</Td>
		<Td>${news.publishedAt}</Td>
		<Td>${news.content}</Td>
		<Td><a href="${news.newsId}">Delete</a></Td>
		</Tr>
	</c:forEach>
	</Table>

		</Form>

</body>
</html>