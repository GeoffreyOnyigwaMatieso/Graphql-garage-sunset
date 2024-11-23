 const UserList = [
    { id: 1, 
      name: "Alice Johnson", 
      username: "alicej", 
      age: 28, 
      nationality: "CHILE",
      friends: [
        {
        id: 2, 
        name: "Michael Smith", 
        username: "mikesmith", 
        age: 34, 
        nationality: "CANADA"
      }
    ]
     },
    { id: 2, 
      name: "Michael Smith", 
      username: "mikesmith", 
      age: 34, 
      nationality: "CANADA",
      friends: [
        {
        id: 3, 
        name: "Sofia Lopez",
        username: "sofial",
        age: 25, 
        nationality: "CHILE"
        }
      ]
     },
    { id: 3, 
      name: "Sofia Lopez",
      username: "sofial",
      age: 25, 
      nationality: "CHILE",
      friends: [
        {
            id:4,
            name:"Liam O'Connor",
            username: "liamoc",
            age: 30,
            nationality: "GERMANY"
        }
      ]
     },
    { id: 4,
      name: "Liam O'Connor",
      username: "liamoc",
      age: 30, 
      nationality: "GERMANY",
      friends: [
        {
            id: 5,
            name: "Yuki Tanaka",
            username: "yukit",
            age: 22,
            nationality:"CHILE"
        }
      ]
     },
    { id: 5,
      name: "Yuki Tanaka", 
      username: "yukit", 
      age: 22, 
      nationality: "CHILE",
      friends: [
        {
            id: 6,
            name: "Yuki Tanaka",
            username: "yukit",
            age: 22,
            nationality:"CHILE"

        }
      ]
     },
    { id: 6,
      name: "Chen Wei",
      username: "chenwei88", 
      age: 29, 
      nationality: "CANADA",
      friends: [
        {
            id: 7,
            name: "Yuki Tanaka",
            username: "yukit",
            age: 22,
            nationality:"CHILE"

        }
      ]
     },
    { id: 7,
      name: "Adebayo Olu",
      username: "adeolu", 
      age: 27, 
      nationality: "GERMANY",
      friends: [
        {
            id: 8,
            name: "Yuki Tanaka",
            username: "yukit",
            age: 22,
            nationality:"CHILE"
        }
      ]
     },
    { id: 8, 
      name: "Emma Müller",
      username: "emmam", 
      age: 31, 
      nationality: "INDIA",
      friends: [
        {
            id: 9,
            name: "Yuki Tanaka",
            username: "yukit",
            age: 22,
            nationality:"CHILE"
        }
      ]
     },
    { id: 9, 
      name: "Carlos Ramirez", 
      username: "carlosr", 
      age: 26, 
      nationality: "BRAZIL",
      friends: [
        {
            id: 10,
            name: "Yuki Tanaka",
            username: "yukit",
            age: 22,
            nationality:"CHILE"
        }
      ]
     },
    { id: 10, 
      name: "Elena Petrova", 
      username: "elenap", 
      age: 24, 
      nationality: "INDIA",
      friends: [
        {
            id: 11,
            name: "Yuki Tanaka",
            username: "yukit",
            age: 22,
            nationality:"CHILE"
        }
      ]
     }
];

const movieList = [
    {
      title: "Echoes of Yesterday",
      releaseYear: 2021,
      genre: ["Drama", "Romance"],
      director: "Emily Hawthorne",
      cast: ["James Hart", "Sarah Lin", "Michael Crane"],
      synopsis: "A young woman returns to her hometown after ten years to uncover the truth behind her family’s tragic past. Along the way, she rekindles a lost love and learns to forgive."
    },
    {
      title: "Galactic Drift",
      releaseYear: 2023,
      genre: ["Sci-Fi", "Action"],
      director: "Marcus Rollins",
      cast: ["Theo Cruz", "Avery Kim", "Liam Blake"],
      synopsis: "In a distant future, humanity is on the brink of extinction. A team of astronauts embarks on a perilous journey across the galaxy to find a new home, facing hostile aliens, internal betrayal, and the mysteries of deep space."
    },
    {
      title: "The Velvet Touch",
      releaseYear: 2019,
      genre: ["Thriller", "Mystery"],
      director: "Grace Pelletier",
      cast: ["Zoe Richards", "Daniel Torrance", "Mila Harlow"],
      synopsis: "A renowned journalist receives an anonymous tip about a high-profile murder case. As she digs deeper, she uncovers dark secrets and realizes she may be the next target."
    },
    {
      title: "The Last Laugh",
      releaseYear: 2020,
      genre: ["Comedy"],
      director: "Leo Bronson",
      cast: ["Max Green", "Ruby Davis", "Sam O’Malley"],
      synopsis: "A washed-up comedian gets one last chance to revive his career when he is given the opportunity to headline a top comedy club. However, his routine must undergo a complete makeover to appeal to a new audience."
    },
    {
      title: "Beneath the Waves",
      releaseYear: 2022,
      genre: ["Adventure", "Fantasy"],
      director: "Aiden Brooks",
      cast: ["Ella Clarke", "Jackson Reyes", "Kira Tanaka"],
      synopsis: "A marine biologist discovers an ancient city under the ocean. As she explores the depths, she encounters mythical creatures and faces a deadly threat from a powerful sea witch who guards the city’s secrets."
    },
    {
      title: "Broken Kingdom",
      releaseYear: 2018,
      genre: ["Historical", "Drama"],
      director: "Isabelle Cho",
      cast: ["Henry Foyle", "Linda March", "Hugo Bennett"],
      synopsis: "Set in 16th-century Europe, this epic drama follows a young prince’s rise to power in a kingdom torn by war. Betrayals, forbidden love, and the brutal reality of royal politics shape his journey."
    }
  ];
  

module.exports = {UserList, movieList}; 