DROP Database if exists prrget;


create database prrget;



use prrget;


create table cats(
  id INT Auto_increment primary key,
  name varchar(255) not null,
  color varchar(255) not null,
  age varchar(255) not null,
  breed varchar(255) not null,
  descript varchar(255) not null

);

insert into cats(name, color, age, breed, descript)
VALUES ('Walnut', 'orange', 'two', 'scottish shorthair',
'cute and sassy cat with a love for treats and food');

insert into cats(name, color, age, breed, descript)
VALUES ('frisbee', 'orange', 'two', 'sphenxe',
'oddly looking cat');

insert into cats(name, color, age, breed, descript)
VALUES ('Kimono', 'brown', 'five', 'american longhair',
'he just loves to dress up in kimonos');

insert into cats(name, color, age, breed, descript)
VALUES ('Ash', 'grey', 'one', 'british shorthair',
'lazy cat with nothing to do all day but sleep');