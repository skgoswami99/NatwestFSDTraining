use authdb;
select * from customer;
select * from Customer Cust where Cust.email like "Belu@gmail.com" and Cust.password = "Test123";
Delete from Customer where password = "Test";

use authdb;
create table wallet (
email varchar(50),
balance varchar(50),
CustEmailFK varchar (50),
constraint email_pk primary key (email),
constraint CustEmailFK_FK foreign key (CustEmailFK) references customer(email)
);
ALTER TABLE customer
ADD PRIMARY KEY (email);

drop table wallet;
insert into wallet values('adi@gmail.com', '100', null );
insert into customer values ('Sandy', 'K', 'skg@gmail.com', 'delhi', '12345678', '9876767678', 'Test@123');
alter table wallet add column email_FK varchar(50);
alter table wallet ADD foreign key (email_FK) references customer(email);

Delete from wallet where balance = "600";
select * from customer;
select * from wallet;