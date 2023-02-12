create Database natwestDB;

use natwestDB;

-- creating a table and declaring its variable which will make columns

create table address
(
	addID int,
	streetNo varchar(20),
	city varchar(40),
	country varchar(25),
	constraint addid_pk primary key (addId)
);

-- adding the address to our table

insert into address values(100, '8 East Walnut Street', 'New York','USA');
insert into address values(101, '92 Black Street', 'Las vegas','USA');
insert into address values(102, '722 global avenue', 'Bangalore','India');

-- now to retreive the data from our table
select * from natwestdb.address;

use natwestdb;
create table customer(
custId BIGINT not null,
	custEmail varchar(25),
	custName varchar(30),
	custdob date,
    addId int,
    constraint pk_cust primary key (custId),
    constraint custadd_fk foreign key (addId) references address(addId)
);

insert into customer values(1002,'jay@natwest.com', 'Jay S', '1994-11-29',101);
insert into customer values(1003,'vijay@natwest.com', 'vijay S', '1994-10-23',101);
insert into customer values(1004,'tim@natwest.com', 'Tim R', '1994-01-23',102);
insert into customer values(1005,'rim@natwest.com', 'Rim T', '1993-02-12',102);
insert into customer values(1006,'jim@natwest.com', 'Jim G', '1992-10-11',101);
insert into customer values(1007,'kim@natwest.com', 'Kim J ', '1994-03-09',102);
insert into customer values(1008,'viju@natwest.com', 'viju R', '1995-04-23',102);

-- Retrieve All the Data From the Customer Table 
select * from natwestdb.customer;

-- Retrieve Name and Email Id from customer Table (Column filter)
select custName, custEmail from natwestdb.customer;

-- Retrieve Name Email Id and addId from customer Table with Address ID 101 (Row Filter)
select custName, custEmail, addId from natwestdb.customer where addId = '101';

-- Retrieve Name Email Id and addId from customer Table with Address ID 101 and Name is 'Jay S' (Row Filter)
select custName, custEmail, addId from natwestdb.customer where custName = 'jay s' and addId = '101';

-- Retrieve Name Email Id and addId from customer Table with Address ID 101 and Name starts with 'Ji' (Row Filter)
select custName, custEmail, addId from natwestdb.customer where addId = '101' and substring(custName,1,2) = 'ji' ;

-- Retrieve Name and Email Id from customer Table with Address ID 101 or Name start with 'T' (Row Filter)
select custName, custEmail, addId from natwestdb.customer where addId = '101' or substring(custName,1,1) = 't' ;

-- below are same things as we can use in() instead of using too many or conditions.
select * from natwestdb.address where addId = '100' or addId = '101';
select * from natwestdb.address where addId in('100','101');

-- Retrieve Name and Email Id from customer Table with Address ID 101 or Name start with 'T' (Row Filter)
-- here we used in and said that match these names and get data of all matching enteries which helped us to avoid too many OR conditions.
Select custName, custEmail, addId from natwestdb.customer where custName in('Tim R','Jay S');

Select * from natwestdb.Customer;
Select * from natwestdb.address;

insert into Address values(104,'14 one city street', null,'USA');

-- to update something wish use update and set
update natwestdb.address
set city = 'Mumbai' where addId  = '104';

update natwestdb.address
set country = 'India' where addId  = '104';

-- Retrieve the customers name and email in asc order
Select custName, custEmail from customer order by custName;

-- Retrieve the customers name and email in descending order
Select custName, custEmail from natwestdb.customer order by custName desc;

-- counting total no of customer using name and total address using addId 
select count(custName) as 'total customers' from customer;
select count(addid) as 'total address' from address;

select (datediff(curDate(),max(custDob)))/365  as 'Youngest Customer Age' from Customer;

select  (datediff(curDate(),min(custDob)))/365 as 'Eldest Customer' from Customer;

-- Retrieve the total number of customers who belongs to same address
select addId, count(addId) as 'address count' from address group by addId;

-- we can use having with group by and can't use where
select country, count(country) from address group by country having country = 'usa';


INSERT INTO customer VALUES (1009,'ravi@natwest.com', 'Ravi', '1994-03-10',104);
INSERT INTO customer VALUES (1010,'ashish@natwest.com', 'Ashish', '1995-04-13',100);

INSERT INTO customer VALUES (1011,'Jack@natwest.com', 'Jack', '1994-02-10',null);
INSERT INTO customer VALUES (1012,'Sant@natwest.com', 'Sant', '1995-05-13',null);

insert into Address values(106,'19 South City', 'London','UK');
insert into Address values(107,'120 Southland Road', 'Seoul','South k');

-- Retrieve Name, Email and streetno
-- Different Types of Joins Inner join and Outer join
-- Inner join means getting the common data from both the tables
-- Outer join means getting all the data from one table and common data from other table

select * from natwestdb.address;
select * from natwestdb.customer;

-- inner join example which will give all the common data whereever addID matches with each other
-- AFTER using join we must also provide a condition to get correct data as we used "on" below
select CustName, CustEmail, Streetno from customer join address on customer.addId = address.addId;

select CustName, CustEmail, Streetno, customer.addid, address.addid from customer join address 
on customer.addId = address.addId;

-- inner join example- giving all results having same address of addID 102
select CustName, CustEmail, Streetno, customer.addId, address.addId from customer join address 
on customer.addId = address.addId where address.addId = 102;

-- right outer join - it will get all the data from right table which is address.addid 
-- and matching data from left table which is customer.addId.
select CustName, CustEmail, Streetno, customer.addId, address.addId from customer 
right outer join address on customer.addId = address.addId;

-- left outer join - it will get all the data from left table which is customer.addid 
-- and matching data from right table which is address.addId.
select CustName, CustEmail, Streetno, customer.addId, address.addId from customer 
left outer join address on customer.addId = address.addId;

-- Sub Query, Query inside Query, output of inner query is input for outer query 
Select custName, custEmail,addid from Customer where addId = 
(select addId from Customer where custName = 'Tim R');

Select custName, custEmail,addid from Customer where addId in
(select addId from Customer where custName = 'Tim R' or custName = 'ravi');

-- In this function we tried to use exists given below didn't work 
Select custName, custEmail,addid from Customer where exists (select * from Customer where addid = 109);