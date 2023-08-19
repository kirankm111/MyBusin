use mybusinessdb

create  table Customer(Id int primary key auto_increment,Name nvarchar(100) not null,Mobile nvarchar(10) not null,
GST nvarchar(50),City nvarchar(100) not null,Address nvarchar(500) not null,InsertedOn datetime not null,InsertedBy nvarchar(50) not null,UpdatedBy nvarchar(50),UpdatedOn datetime)

create table SaleItem(Id int primary key auto_increment,Rate decimal not null,CGSTRate decimal not null,
SGSTRate decimal not null,InsertedOn datetime not null,InsertedBy nvarchar(50) not null,UpdatedBy nvarchar(50),UpdatedOn datetime)

Create table Orders(Id bigint primary key auto_increment,Date datetime not null,
CustomerName nvarchar(100) not null,Mobile nvarchar(10),GST nvarchar(50) ,Address nvarchar(500) not null,OrderTotal decimal not null,OrderGST decimal not null
,InsertedOn datetime,InsertedBy nvarchar(50),UpdatedBy nvarchar(50),UpdatedOn datetime) 

create table OrdersDetails(Id bigint primary key auto_increment,OrderID bigint,  Foreign key(OrderID) references Orders(Id),
ItemId int, Foreign key(itemId)
 references SaleItem(Id),Quantity decimal not null,TaxableValue decimal not null,CGSTAmount decimal not null,
SGSTAmount decimal not null,TotalPrice decimal not null
,InsertedOn datetime,InsertedBy nvarchar(50),UpdatedBy nvarchar(50),UpdatedOn datetime) 
