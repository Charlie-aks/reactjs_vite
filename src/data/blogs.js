const images = [
      "/images/blog1.jpg" ,
      "/images/blog2.jpg" ,
      "/images/blog3.jpg" ,
      "/images/blog4.jpg" ,
      "/images/blog5.jpg" ,
      
]
const blogs = [
      // Featured Posts
      {
        id: 1,
        title: "Recent research suggests that heavy coffee drinkers may reap health benefits.",
        description: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        excerpt: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        image: images[0],
        date: "OCTOBER 9, 2018",
        category: "Coffee",
        author: {
          name: "Fred Glaeson",
          avatar: "/images/avatar1.jpg"
        },
        featured: true
      },
      {
        id: 2,
        title: "How long does a cup of coffee keep you awake?",
        description: "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
        excerpt: "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
        image: images[1],
        date: "OCTOBER 9, 2018",
        category: "Lifestyle",
        author: {
          name: "Isabel Hamill",
          avatar: "/images/avatar2.jpg"
        },
        featured: true
      },
      // Latest Posts
      {
        id: 3,
        title: "More coffee, lower death risk?",
        description: "Evertit iudicro appetam qui orfelis ut demique. Volumus culpis ut rhogoni in. Minima est dolores delore aut et et alias p",
        excerpt: "Evertit iudicro appetam qui orfelis ut demique. Volumus culpis ut rhogoni in. Minima est dolores delore aut et et alias p",
        image: images[2],
        date: "OCTOBER 9, 2018",
        category: "Coffee",
        author: {
          name: "Maurice Herman",
          avatar: "/images/avatar3.jpg"
        },
        featured: false
      },
      {
        id: 4,
        title: "Health Check: why do I get a headache when I haven't had my coffee?",
        description: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        excerpt: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        image: images[3],
        date: "OCTOBER 9, 2018",
        category: "Coffee",
        author: {
          name: "Fred Glaeson",
          avatar: "/images/avatar1.jpg"
        },
        featured: false
      },
      {
        id: 5,
        title: "Will drinking coffee prolong your life?",
        description: "Aliquip aperiam accusantium quam ipsum. Velit rerum exerciti oppse lite.",
        excerpt: "Aliquip aperiam accusantium quam ipsum. Velit rerum exerciti oppse lite.",
        image: images[4],
        date: "OCTOBER 9, 2018",
        category: "Lifestyle",
        author: {
          name: "Isabel Hamill",
          avatar: "/images/avatar2.jpg"
        },
        featured: false
      }
    ];
    
    // Categories
    export const categories = [
      { name: "Barista", count: 12 },
      { name: "Coffee", count: 8 },
      { name: "Lifestyle", count: 15 },
      { name: "Mugs", count: 6 }
    ];
    
    // Authors
    export const authors = [
      {
        name: "Fred Glaeson",
        avatar: "/images/avatar1.jpg",
        postsCount: 5
      },
      {
        name: "Isabel Hamill", 
        avatar: "/images/avatar2.jpg",
        postsCount: 3
      },
      {
        name: "Maurice Herman",
        avatar: "/images/avatar3.jpg",
        postsCount: 7
      }
    ];
    
    export default blogs;
    