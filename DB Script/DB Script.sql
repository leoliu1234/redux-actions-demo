

create table [user]
(
	[id]bigint identity(1,1) primary key,
	[nick_name] varchar(50) not null,
	[email_address] varchar(255) unique not null,
	[password] varchar(500) not null
)

drop table [user]

select * from [user] where email_address = @email_address