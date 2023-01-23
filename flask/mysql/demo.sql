drop database if exists little_cake;
create database little_cake;
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


