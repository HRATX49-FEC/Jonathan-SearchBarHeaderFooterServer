DROP Database if exists prrget;


create database prrget;



use prrget;

create table categories(
  id Int Auto_increment primary key,
  category varchar(255) not null
);

create table cats(
  id INT Auto_increment primary key,
  name varchar(255) not null UNIQUE,
  category_id int,

  FOREIGN KEY(category_id)
    REFERENCES categories(id)

);

insert into categories(category) VALUES ('Floof');
insert into categories(category) VALUES ('Chonk');
insert into categories(category) VALUES ('Hairless');
insert into categories(category) VALUES ('Adorable');


-- THE MAIN CATS
-- 4 = Gizmo, Kimono, Tuxedo, Xito, Covid, Grumpy
-- 1 = Midnyght, Sassy, Luna
-- 2 = Ash, Walnut
-- 3 = Sphynx (edited)

insert into cats(name, category_id) VALUES ('Gizmo', 4);
insert into cats(name, category_id) VALUES ('Tuxedo', 4);
insert into cats(name, category_id) VALUES ('Walnut', 2);
insert into cats(name, category_id) VALUES ('Ash', 2);
insert into cats(name, category_id) VALUES ('Kimono', 4);
insert into cats(name, category_id) VALUES ('Covid', 4);
insert into cats(name, category_id) VALUES ('Luna', 2);
insert into cats(name, category_id) VALUES ('Midniyt', 1);
insert into cats(name, category_id) VALUES ('Grumpy', 4);
insert into cats(name, category_id) VALUES ('Sphynx', 3);
insert into cats(name, category_id) VALUES ('Xito', 4);
insert into cats(name, category_id) VALUES ('Sassy', 1);



-- ID 4 Adorable Cat Names:
-- Bella, Simba, Chloe, Max, Lucy. Lily, Nala, Sophie. Milo, Rocky, Coco, Charlie, Smokey, Mia, Jack, Angel, Tigger, Oreo, Shadow, Felix, Willow
insert into cats(name, category_id) VALUES ('Rocky', 4);
insert into cats(name, category_id) VALUES ('Coco', 4);
insert into cats(name, category_id) VALUES ('Charlie', 4);
insert into cats(name, category_id) VALUES ('Smokey', 4);
insert into cats(name, category_id) VALUES ('Mia', 4);
insert into cats(name, category_id) VALUES ('Jack', 4);
insert into cats(name, category_id) VALUES ('Angel', 4);
insert into cats(name, category_id) VALUES ('Tigger', 4);
insert into cats(name, category_id) VALUES ('Oreo', 4);
insert into cats(name, category_id) VALUES ('Shadow', 4);
insert into cats(name, category_id) VALUES ('Felix', 4);
insert into cats(name, category_id) VALUES ('Willow', 4);
insert into cats(name, category_id) VALUES ('Oliver', 4);
insert into cats(name, category_id) VALUES ('Bella', 4);
insert into cats(name, category_id) VALUES ('Simba', 4);
insert into cats(name, category_id) VALUES ('Chloe', 4);
insert into cats(name, category_id) VALUES ('Max', 4);
insert into cats(name, category_id) VALUES ('Lucy', 4);
insert into cats(name, category_id) VALUES ('Lily',4);
insert into cats(name, category_id) VALUES ('Nala', 4);
insert into cats(name, category_id) VALUES ('Sophie', 4);
insert into cats(name, category_id) VALUES ('Milo', 4);

-- ID 2: Chonk Cat Names:
-- Pepper, Leon, Lola, Kitty, Patches, Princess, Missy, Lulu, Mittens,
-- Sebastian, Abby, Orion, Yuki, Scout, Sadie, Cupcake, George, Butters, Cuddles, Boots, Whiskers, Mr. Snuffles

insert into cats(name, category_id) VALUES ('Pepper', 2);
insert into cats(name, category_id) VALUES ('Leon', 2);
insert into cats(name, category_id) VALUES ('Lola', 2);
insert into cats(name, category_id) VALUES ('Kitty', 2);
insert into cats(name, category_id) VALUES ('Patches', 2);
insert into cats(name, category_id) VALUES ('Princess', 2);
insert into cats(name, category_id) VALUES ('Missy', 2);
insert into cats(name, category_id) VALUES ('Lulu', 2);
insert into cats(name, category_id) VALUES ('Mittens', 2);
insert into cats(name, category_id) VALUES ('Sebastian', 2);
insert into cats(name, category_id) VALUES ('Abby', 2);
insert into cats(name, category_id) VALUES ('Orion', 2);
insert into cats(name, category_id) VALUES ('Yuki', 2);
insert into cats(name, category_id) VALUES ('Scout', 2);
insert into cats(name, category_id) VALUES ('Sadie', 2);
insert into cats(name, category_id) VALUES ('Cupcake', 2);
insert into cats(name, category_id) VALUES ('George', 2);
insert into cats(name, category_id) VALUES ('Butters', 2);
insert into cats(name, category_id) VALUES ('Cuddles', 2);
insert into cats(name, category_id) VALUES ('Boots', 2);
insert into cats(name, category_id) VALUES ('Whiskers', 2);
insert into cats(name, category_id) VALUES ('Mr.Snuffles', 2);

-- ID 3: Hairless Cat Names:
-- Sheba, Daenerys, Tiffany, Stella, Ella, Gypsy, Alice, Penny, Cooper, Harley, Sam,
-- Garfield, NiuNiu, Tucker, Bandit, Candy, Ziggy, Socks, Rusty, Batman, Gatsby, Raven

insert into cats(name, category_id) VALUES ('Sheba', 3);
insert into cats(name, category_id) VALUES ('Daenerys', 3);
insert into cats(name, category_id) VALUES ('Tiffany', 3);
insert into cats(name, category_id) VALUES ('Stella', 3);
insert into cats(name, category_id) VALUES ('Ella', 3);
insert into cats(name, category_id) VALUES ('Gypsy', 3);
insert into cats(name, category_id) VALUES ('Alice', 3);
insert into cats(name, category_id) VALUES ('Penny', 3);
insert into cats(name, category_id) VALUES ('Cooper', 3);
insert into cats(name, category_id) VALUES ('Harley', 3);
insert into cats(name, category_id) VALUES ('Sam', 3);
insert into cats(name, category_id) VALUES ('Garfield', 3);
insert into cats(name, category_id) VALUES ('NiuNiu', 3);
insert into cats(name, category_id) VALUES ('Tucker', 3);
insert into cats(name, category_id) VALUES ('Bandit', 3);
insert into cats(name, category_id) VALUES ('Candy', 3);
insert into cats(name, category_id) VALUES ('Ziggy', 3);
insert into cats(name, category_id) VALUES ('Socks', 3);
insert into cats(name, category_id) VALUES ('Rusty', 3);
insert into cats(name, category_id) VALUES ('Batman', 3);
insert into cats(name, category_id) VALUES ('Gatsby', 3);
insert into cats(name, category_id) VALUES ('Raven', 3);

-- ID 1: Floof Cat Names:
-- Romeo, Molly, Tiger, Sammy, Jasper, Biscuit, Bailey, Gracie, Loki, Sasha, Simon,
-- Toby, Ruby, Cleo, Peanut, Oscar, Leo, Lucky, Buddy, Daisy, Jasmine, Callie

insert into cats(name, category_id) VALUES ('Romeo', 1);
insert into cats(name, category_id) VALUES ('Molly', 1);
insert into cats(name, category_id) VALUES ('Tiger', 1);
insert into cats(name, category_id) VALUES ('Sammy', 1);
insert into cats(name, category_id) VALUES ('Jasper', 1);
insert into cats(name, category_id) VALUES ('Biscuit', 1);
insert into cats(name, category_id) VALUES ('Bailey', 1);
insert into cats(name, category_id) VALUES ('Gracie', 1);
insert into cats(name, category_id) VALUES ('Loki', 1);
insert into cats(name, category_id) VALUES ('Sasha', 1);
insert into cats(name, category_id) VALUES ('Simon', 1);
insert into cats(name, category_id) VALUES ('Toby', 1);
insert into cats(name, category_id) VALUES ('Ruby', 1);
insert into cats(name, category_id) VALUES ('Cleo', 1);
insert into cats(name, category_id) VALUES ('Peanut', 1);
insert into cats(name, category_id) VALUES ('Oscar', 1);
insert into cats(name, category_id) VALUES ('Leo', 1);
insert into cats(name, category_id) VALUES ('Lucky', 1);
insert into cats(name, category_id) VALUES ('Buddy', 1);
insert into cats(name, category_id) VALUES ('Daisy', 1);
insert into cats(name, category_id) VALUES ('Jasmine', 1);
insert into cats(name, category_id) VALUES ('Callie', 1);




