// Use this file only as a guide for first steps. Delete it when you have added your own routes files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/get-started-routes

// heroes data
const HEROES = [
    {
      id: 1,
      name: "Wolverine",
      company: 'Marvel',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/marvel-heroes/1/15/Wolverine_0.png?width=640',
      big_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydvox8hOb6wabvhopa5hHydkHzpD_2bpZLg&usqp=CAU',
      description: 'Wolverine (birth name: James Howlett;[1] alias: Logan and Weapon X) is a fictional character appearing in American comic books published by Marvel Comics, mostly in association with the X-Men. He is a mutant who possesses animal-keen senses, enhanced physical capabilities, a powerful regenerative ability known as a healing factor, and three retractable claws in each hand. Wolverine has been depicted variously as a member of the X-Men, X-Force, Alpha Flight, the Fantastic Four, and the Avengers.'
    },
    {
        id: 2,
        name: "Ironman",
        company: 'Marvel',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/marvel-heroes/6/66/Iron_man_0.png?width=640',
        big_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu15ZjMn_sTgrFjYlb7oPj9S4vCDziY2UrmA&usqp=CAU',
        description: 'Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968). Also in 1963, the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk.'
    },
    {
        id: 3,
        name: "Spiderman",
        company: 'Marvel',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/marvel-heroes/b/bc/Spider-man_0.png?width=640',
        big_image: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png',
        description: 'Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has since been featured in movies, television shows, video games, and plays. Spider-Man is the alias of Peter Parker, an orphan raised by his Aunt May and Uncle Ben in New York City after his parents Richard and Mary Parker died in a plane crash. Lee and Ditko had the character deal with the struggles of adolescence and financial issues and gave him many supporting characters, such as Flash Thompson, J. Jonah Jameson and Harry Osborn; romantic interests Gwen Stacy, Mary Jane Watson and the Black Cat; and foes such as Doctor Octopus, the Green Goblin and Venom. In his origin story, he gets spider-related abilities from a bite from a radioactive spider; these include clinging to surfaces, superhuman strength and agility, and detecting danger with his "spider-sense." He also builds wrist-mounted "web-shooter" devices that shoot artificial spider webs of his own design.'
    },
    {
        id: 4,
        name: "Hulk",
        company: 'Marvel',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/marvel-heroes/0/06/Hulk_0.png?width=640',
        big_image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Hulk_%28circa_2019%29.png/220px-Hulk_%28circa_2019%29.png',
        description: 'The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character, who has dissociative identity disorder (DID), is primarily represented by the alter Hulk, a green-skinned, hulking and muscular humanoid possessing a limitless degree of physical strength, and the alter Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist, both of whom typically resent each other.'
    },
    {
        id: 5,
        name: "Deadpool",
        company: 'Marvel',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/marvel-heroes/4/43/Deadpool_0.png?width=640',
        big_image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Deadpool.png/220px-Deadpool.png',
        description: 'Deadpool is a fictional character appearing in American comic books published by Marvel Comics. Created by writer Fabian Nicieza and artist/writer Rob Liefeld, the character first appeared in The New Mutants #98 (cover-dated Feb. 1991). Initially, Deadpool was depicted as a supervillain when he made his first appearance in The New Mutants and later in issues of X-Force, but later evolved into his more recognizable antiheroic persona. Deadpool, whose real name is Wade Winston Wilson, is a disfigured mercenary with the superhuman ability of regeneration and physical prowess. The character is known as the "Merc with a Mouth" because of his tendency to talk and joke constantly, including breaking the fourth wall for humorous effect and running gags.'
    },
    {
        id: 6,
        name: "Captain America",
        company: 'Marvel',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/marvel-heroes/d/d5/Captain_america_0.png?width=640',
        big_image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/CaptainAmerica109.jpg/220px-CaptainAmerica109.jpg',
        description: 'Captain America is a superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics most popular character during the wartime period. The popularity of superheroes waned following the war, and the Captain America comic book was discontinued in 1950, with a short-lived revival in 1953. Since Marvel Comics revived the character in 1964, Captain America has remained in publication.'
    },

    {
        id: 7,
        name: "Batman",
        company: 'DC',
        image: 'https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png',
        big_image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Batman_Infobox.jpg/220px-Batman_Infobox.jpg',
        description: 'Batman[a] is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939. In the DC Universe continuity, Batman is the alias of Bruce Wayne, a wealthy American playboy, philanthropist, and industrialist who resides in Gotham City. Batmans origin story features him swearing vengeance against criminals after witnessing the murder of his parents Thomas and Martha, a vendetta tempered with the ideal of justice. He trains himself physically and intellectually, crafts a bat-inspired persona, and monitors the Gotham streets at night. Kane, Finger, and other creators accompanied Batman with supporting characters, including his sidekicks Robin and Batgirl; allies Alfred Pennyworth, James Gordon, and Catwoman; and foes such as the Penguin, the Riddler, Two-Face, and his archenemy the Joker.'
    },
    {
        id: 8,
        name: "Aquaman",
        company: 'DC',
        image: 'https://cdn.icon-icons.com/icons2/467/PNG/96/008_AquaMan_2x_44223.png',
        big_image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Aquaman_Rebirth_1.png/220px-Aquaman_Rebirth_1.png',
        description: 'Aquaman (Arthur Curry) is a superhero appearing in American comic books published by DC Comics. Created by Paul Norris and Mort Weisinger, the character debuted in More Fun Comics #73 (November 1941).[1] Initially a backup feature in DCs anthology titles, Aquaman later starred in several volumes of a solo comic book series. During the late 1950s and 1960s superhero-revival period known as the Silver Age, he was a founding member of the Justice League. In the 1990s Modern Age, writers interpreted Aquamans character more seriously, with storylines depicting the weight of his role as king of Atlantis.'
    },
    {
        id: 9,
        name: "Superman",
        company: 'DC',
        image: 'https://cdn.icon-icons.com/icons2/467/PNG/96/013_Superman_2x_44228.png',
        big_image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Supermanflying.png/220px-Supermanflying.png',
        description: 'Superman is a superhero who appears in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and debuted in the comic book Action Comics #1 (cover-dated June 1938 and published April 18, 1938).[1] Superman has been adapted to a number of other media which includes radio serials, novels, movies, television shows and theatre.'
    },
    {
        id: 10,
        name: "Flash",
        company: 'DC',
        image: 'https://cdn.icon-icons.com/icons2/467/PNG/96/003_Flash_2x_44218.png',
        big_image: 'https://upload.wikimedia.org/wikipedia/en/e/ed/The_Flash_Family.jpg',
        description: 'The Flash (or simply Flash) is the name of several superheroes appearing in American comic books published by DC Comics. Created by writer Gardner Fox and artist Harry Lampert, the original Flash first appeared in Flash Comics #1 (cover date January 1940/release month November 1939).[1] Nicknamed the "Scarlet Speedster", all incarnations of the Flash possess "super speed", which includes the ability to run, move, and think extremely fast, use superhuman reflexes, and seemingly violate certain laws of physics.'
    },
    {
        id: 11,
        name: "Wonder Woman",
        company: 'DC',
        image: 'https://cdn.icon-icons.com/icons2/467/PNG/96/051_WonderWoman_2x_44266.png',
        big_image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Wonder_Woman.jpg/220px-Wonder_Woman.jpg',
        description: 'Wonder Woman is a superheroine appearing in American comic books published by DC Comics.[3] The character is a founding member of the Justice League. The character first appeared in All Star Comics #8 published October 21, 1941[4] with her first feature in Sensation Comics #1 in January 1942. The Wonder Woman title has been published by DC Comics almost continuously ever since.[5] In her homeland, the island nation of Themyscira, her official title is Princess Diana of Themyscira. When blending into the society outside of her homeland, she sometimes adopts her civilian identity Diana Prince.[6]'
    },
    {
        id: 12,
        name: "Green Lantern",
        company: 'DC',
        image: 'https://cdn.icon-icons.com/icons2/467/PNG/96/004_GreenLantern_2x_44219.png',
        big_image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Green_Lantern_Rebirth_6.jpg/220px-Green_Lantern_Rebirth_6.jpg',
        description: 'Green Lantern is the name of several superheroes appearing in American comic books published by DC Comics. They fight evil with the aid of rings that grant them a variety of extraordinary powers, all of which come from imagination, fearlessness and/or emotional willpower.[1] The characters are typically depicted as members of the Green Lantern Corps, an intergalactic law enforcement agency.'
    },
    {
      id: 13,
      name: "Superior Ironman",
      company: 'Marvel',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSh7Iuh05JBiiShcoNk1DPA0dM1iR2jW6wQ&usqp=CAU',
      big_image: 'https://static.wikia.nocookie.net/marvel/images/8/88/Superior_Iron_Man_Vol_1_1.jpg/revision/latest/scale-to-width-down/329?cb=20141113210617&path-prefix=es',
      description: 'The origins of Superior Iron Man would begin in the Axis event, in which the morality of Earths heroes and villains was reversed by magic. While the spell was undone the now corrupt Tony managed to shield himself and thus retained his evil personality even as most of Earths heroes reverted back to their usual selves.'
    },
    {
      id: 14,
      name: "Spiderman: Miles Morales",
      company: 'Marvel',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9W1F7caAyrtzvuhjAxWJF9jTtdQ8kRiik1g&usqp=CAU',
      big_image: 'https://img.assinaja.com/assets/tZ/056/img/238105_520x520.jpg',
      description: 'Miles Morales is a fictional character appearing in comic books published by Marvel Comics , as one of the characters known as Spider-Man . It was created by writer Brian Michael Bendis and artist Sara Pichelli , although Ultimate Marvel editors and editor-in-chief Axel Alonso were also inspired by a number of ideas, such as the election of US President Barack Obama and the appearance of African-American actor Donald Glover dressed in a Spider-Man suit, as well as the premiere of a new series called Community.'
    },
  ];
  
  module.exports = [
    {
      id: "get-heroes", // id of the route
      url: "/api/heroes", // url in express format
      method: "GET", // HTTP method
      variants: [
        {
          id: "success", // id of the variant
          response: {
            status: 200, // status to send
            body: HEROES, // body to send
          },
        },
        {
          id: "error", // id of the variant
          response: {
            status: 400, // status to send
            body: {
              // body to send
              message: "Error",
            },
          },
        },
      ],
    },
    {
      id: "get-heroe", // id of the route
      url: "/api/heroes/:id", // url in express format
      method: "GET", // HTTP method
      variants: [
        {
          id: "success", // id of the variant
          response: {
            status: 200, // status to send
            body: HEROES[0], // body to send
          },
        },
        {
          id: "real", // id of the variant
          response: (req, res) => {
            const heroeId = req.params.id;
            const heroe = HEROES.find((heroeData) => heroeData.id === Number(heroeId));
            if (heroe) {
              res.status(200);
              res.send(heroe);
            } else {
              res.status(404);
              res.send({
                message: "Heroe not found",
              });
            }
          },
        },
      ],
    },
  ];
  