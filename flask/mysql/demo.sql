drop database if exists lawProject;
create database lawProject;
use lawProject;

/** 用户表 **/
drop table if exists users;
create table users(
	user_id int auto_increment primary key,
	user_name varchar(20),
    password varchar(20),
    gender varchar(5) not null,
    work_unit varchar(50) comment '工作单位',
	emial varchar(50),
    education_level varchar(50),
    phone_number char(11),
    professional_field varchar(20)
    
);
insert into users(user_name,password,gender,work_unit,emial,education_level,phone_number,professional_field)
values('Wang','123456','女','浙理工','1347685075@qq.com','本科','17366638503','刑法');
select * from users;


/** 历审案件表 **/
drop table if exists preCases;
create table preCases(
	preCase_id char(36) primary key,
	preCase_title  varchar(500),
    case_type varchar(10),
    casePoint_id varchar(50)  comment '案由id',
    retrial_procedure varchar(5) not null,
    area varchar(50),
	retrial_year int,
    retrial_reasuts varchar(500),
    claim_amount float4,
    judment_amount float4,
    penal_sum float4,
    ref_law varchar(200),
    verdict_section  varchar(200),
    pleading_paragraph  varchar(200),
    fact_finding varchar(200),
    judgment_reason varchar(200)
    #FOREIGN KEY (casePoint_id) REFERENCES casePoints (casePoint_id)
    
);
insert into preCases(preCase_id,preCase_title,case_type,casePoint_id,retrial_procedure,area)
values
('e08cf9ec-260d-4f08-9d0c-a9c6010b6edc','李某某,陈某某,罗某1,罗某3,罗某2组织、领导、参加黑社会性质组织罪二审刑事案','刑事','组织、领导、参加黑社会性质组织罪','二审','广东省'),					
('3f8fd7ca-4e99-445b-b450-acc400215ab3','徐某1、徐长发、徐某3、徐某4、徐某5、徐某2与闫某某、宋某某、庄某某、贺某某、周某某、王某1、刘某2、杜某某、刘某1、王某2、姜某1、李某某、曲某某、大连长波物流有限公司、王某3、姜某2、肖某某、张某某组织、领导、参加黑社会性质组织罪','刑事','组织、领导、参加黑社会性质组织罪','二审','辽宁省'),										
('6ccbcd22-149d-4573-973a-ec3cf7267442','白某某参加黑社会性质组织罪一案驳回再审申请案','刑事','组织、领导、参加黑社会性质组织罪','再审','湖北省武汉市'),									
('4a26779c-d8c0-4f47-95a7-aca600af32ec','组织、领导、参加黑社会性质组织罪申诉、申请再审驳回申诉案','刑事','组织、领导、参加黑社会性质组织罪','再审','陕西省渭南市'),										
('600bee6c-9911-4c38-9b11-aca2012b9e28','彭某1,程某某,朱某某,邹某某,税雪松,李某3,李某2,王某3,李某1,刘某1,刘某2,彭某2,王某1,王某4前,江某某,毛某某,陈某某,陆某某,熊某某,沈某某,蒋某某,邓某某,徐某1,罗某某,汪某某,宋某某,王某2,赵某某,徐某2,彭某3组织、领导、参加黑社会性质组织罪刑事案','刑事','组织、领导、参加黑社会性质组织罪','二审','四川省');
select * from preCases;


/** 法条表 **/
drop table if exists laws;
create table laws(
	law_id int  primary key,
	law_title varchar(100),
    law_content varchar(1000)
    
);
select * from laws;

/** 案由表（罪名） **/
drop table if exists casePoints;
create table casePoints(
	casePoint_id int primary key auto_increment,
	casePoint_title varchar(100)
);
select * from casePoints;



/** 待决案件表 **/
drop table if exists myCases;
create table myCases(
	mycase_id int primary key auto_increment ,
	mycase_id_title varchar(100),
    mycase_id_content varchar(1000),
    deadtime time,
    is_determined boolean comment '是否判决'
);
select * from myCases;




# 存储过程：登录验证
drop procedure if exists doLogin;
delimiter $$
create procedure doLogin(
	$username  varchar(20),
    $password  varchar(20)
)
begin
	select * from users where user_name =  $username and password = $password;
end $$
delimiter ;
call doLogin('wnang','123456');
























