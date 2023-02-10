drop database if exists little_cake;
create database little_cake;
use little_cake;
drop table if exists little_cake;
create table little_cake(
	id int auto_increment primary key,
	name varchar(20) 
);
insert into little_cake(name)values('小蛋糕');
select * from little_cake;
drop procedure if exists get_little_cake;
delimiter $$
create procedure get_little_cake($mock_id1 char,$mock_id2 int)
begin
	select * from little_cake;
end $$
delimiter ;
call get_little_cake('1','2');

/** 临时用 **/
drop table if exists users;
create table users(
	id int auto_increment primary key,
	username varchar(20) ,
    password varchar(20)
);
insert into users(username,password)values('听雨','ccc');
select * from users;
drop procedure if exists doLogin;
delimiter $$
create procedure doLogin($username  varchar(20),$password  varchar(20))
begin
	select * from users where username =  $username and password = $password;
end $$
delimiter ;
call doLogin('听雨','ccc');


