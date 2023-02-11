create Database AssignmentDB;
use AssignmentDB;

create table news
(newsID int not null,
title nvarchar(100) not null,
content  nvarchar(400) not null,
publishedAt datetime (6) not null,
createBy  nvarchar(50) not null,
url  nvarchar(100),
urlToImage  nvarchar(100),
constraint newsid_pk primary key(newsID)
);

use AssignmentDB;

create table userProfile
(userId nvarchar(50) not null,
FirstName nvarchar(100) not null,
LastName  nvarchar(100) not null,
Contact nvarchar(100),
Email  nvarchar(100),
CreatedAt  datetime not null,

constraint userid_pk primary key(userId)
);

use AssignmentDB;

create table user
(userId nvarchar(50) not null,
password nvarchar(50) not null,
constraint userId_fk foreign key (userId) references userProfile(userId)
);

use AssignmentDB;

create table Reminders
(reminderId int not null,
schedule datetime (6) not null,
newsID int not null,
constraint remId_pk primary key (reminderId),
constraint reminderId_fk foreign key (newsId) references news(newsID)
);

drop table reminders;

insert into userprofile values ('jack', 'jackson', 'james', '8899776655', 'jack@ymail.com', '2019-12-07');
insert into userprofile values ('john', 'johnson', 'dsouza', '7869543210', 'john@gmail.com', '2019-12-25');
insert into userprofile values ('kevin', 'kevin', 'lloyd', '9878685748', 'kevin@gmail.com', '2019-12-01');

delete from userprofile where userid = 'mack';
select * from userprofile;

insert into user values ('jack', 'pass@123');
insert into user values ('john', 'something#121');
insert into user values ('kevin', 'test@123');

select * from user;

insert into news values (101, 'IT industry in 2020', 'IT industry was facing disoruptive changes', '2019-12-19', 'Jack', null, null);
insert into news values (102, '2020 FIFA U-17 Women World Cup', 'The tournament will be held in India', '2019-12-05', 'Jack', null, null);
insert into news values (103, 'Chandrayaan2 - SpaceCraft', 'The Lander of Chandrayaan2 was named Vikram', '2019-12-05', 'John', null, null);
insert into news values (104, 'NEFT txns to be available 24X7', 'Bank customers will be able to make the transfers after changes', '2019-12-07', 'John', null, null);

select * from news;

insert into reminders values ('1', '2019-12-04', '101');
insert into reminders values ('2', '2019-12-10', '102');
insert into reminders values ('3', '2019-12-10', '104');

select * from reminders;

-- Retreive all the user profiles joined on or after 10-Dec-2019.
select * from userprofile where createdAt > '2019-12-10';

-- Retreive the details of user 'Jack' along with all the news created by him.
use assignmentdb;
select * from userprofile join news on userprofile.userid = news.createby where userid = 'jack' ;

-- Retreive all details of the user who created the News with newsId=103.
select * from userprofile where userid = (select createby from news where newsID = '103');

-- Retreive the details of all the users who have not added any news yet.
select * from userprofile where userid not in (select createby from news);

-- Retreive the newsid and title of all the news having some reminder.
select newsid, title from news where newsid in (select newsid from reminders);

-- Retreive the total number of news added by each user.
select createby, count(createby) as 'total news saved' from news group by createby;

-- Update the contact number of userId='John' to '9192939495'.
update userprofile set contact = '9192939495' where userid = 'john';

-- Update the title of the newsId=101 to 'IT industry growth can be seen in 2020'.
update news set title = 'IT industry growth can be seen in 2020' where newsid = '101';

-- Remove all the reminders belonging to the news created by Jack.
delete from reminders where newsid in (select newsid from news where createby = 'jack');

-- Write a query to set a reminder for a particular news
-- (Use Reminder and News tables - insert statement)

insert into reminders values(1, current_date(), '101');

-- Create a trigger to delete all matching records from News,UserProfile,User and Reminder table when
-- A particular news is deleted from news table (all the matching records from News,UserProfile,User        and Reminder should be removed automatically)
-- A particular user is deleted from User table (all the matching notes should be removed automatically)
insert into user values ('vivek', 'test@123');


DELIMITER //
create trigger assignmentdb.DeleteTrig
after delete
ON assignmentdb.user
for each row
Begin
delete from reminders where newsid in (select newsid from news where createby = OLD.userid);
delete from news where createby = OLD.userid;
delete from userprofile where userid = OLD.userid;
End;//

drop trigger DeleteTrig;

use assignmentdb;
delete from user where userid = 'jack';

select * from reminders;
