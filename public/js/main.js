// Pet Objects
const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Poop-Colored",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg"
    },
    {
      name: "Sassy",
      color: "Poop-Colored",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coconut",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Tigger",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      color: "Poop-Colored",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
    },
    {
      name: "Salem",
      color: "Poop-Colored",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg"
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://mymodernmet.com/wp/wp-content/uploads/2019/11/dogs-are-the-best-people-frog-dog-studios-16.jpg"
    },
    {
      name: "Shadow",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      name: "Felix",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://images.fineartamerica.com/images/artworkimages/medium/1/2-red-cat-doug-long.jpg"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://labyes.com/wp-content/uploads/2017/09/pulgas_gatos-600x400.jpg"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "http://i.hurimg.com/i/hdn/75/600x400/5a7053fa7152d8157c0688df.jpg"
    }
  ];

// Print to DOM
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};  

// Card Builder
const buildPetCards = (thing) => {
    let domString = '';
    for (let i = 0; i < thing.length; i++) {
      if (thing[i].type === 'dog') {
        domString += `<div class="unhide" id="${thing[i].name}">`;
        domString += `<div class="petCard">`; 
        domString += `<header class="petName" id="dogs"><h2>${thing[i].name}</h2></header>`;
      } else if (thing[i].type === 'cat') {
        domString += `<div class="unhide" id="${thing[i].name}">`;
        domString += `<div class="petCard">`; 
        domString += `<header class="petName" id="cats"><h2>${thing[i].name}</h2></header>`;
      } else {
        domString += `<div class="unhide" id="${thing[i].name}">`;
        domString += `<div class="petCard">`; 
        domString += `<header class="petName" id="dinos"><h2>${thing[i].name}</h2></header>`;
      }
      domString += `<section class="petImage"><img src=${thing[i].imageUrl} alt="A ${thing[i].color} ${thing[i].type} named ${thing[i].name}"></section>`;
      domString += `<section class="petColor">${thing[i].color}</section>`;
      domString += `<section class="petSkill">${thing[i].specialSkill}</section>`;
      if (thing[i].type === 'dog') {
        domString += `<footer class="petType" id="dogs">${thing[i].type}</section>`;
      } else if (thing[i].type === 'cat') {
        domString += `<footer class="petType" id="cats">${thing[i].type}</section>`;
      } else {
        domString += `<footer class="petType" id="dinos">${thing[i].type}</section>`;
      }
      domString += `</div>`;
      domString += `</div>`;
    }
    printToDom('pet-barn', domString);
};

/*
// Event Handler

const dogs = document.getElementById('dogsButton');
const cats = document.getElementById('catsButton');
const dinos = document.getElementById('dinosButton');
const all = document.getElementById('allButton');

// Dog Button
dogs.addEventListener("click", function() {
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === 'dog') {
      if (document.getElementById(`${pets[i].name}`).className === 'hide') {
       document.getElementById(`${pets[i].name}`).className = "unhide";
      } else {
       document.getElementById(`${pets[i].name}`).className = "hide";
      }
    } else {
      // do nothing
    }
  }
});

// Cat Button
cats.addEventListener("click", function() {
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === 'cat') {
      if (document.getElementById(`${pets[i].name}`).className === 'hide') {
       document.getElementById(`${pets[i].name}`).className = "unhide";
      } else {
       document.getElementById(`${pets[i].name}`).className = "hide";
      }
    } else {
      // do nothing
    }
  }
});

// Dino Button
dinos.addEventListener("click", function() {
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === 'dino') {
      if (document.getElementById(`${pets[i].name}`).className === 'hide') {
       document.getElementById(`${pets[i].name}`).className = "unhide";
      } else {
       document.getElementById(`${pets[i].name}`).className = "hide";
      }
    } else {
      // do nothing
    }
  }
});

// All Button
all.addEventListener("click", function() {
  for (let i = 0; i < pets.length; i++) {
    if (document.getElementById(`${pets[i].name}`).className === 'hide') {
      document.getElementById(`${pets[i].name}`).className = "unhide";
    } else {
      //do nothing
    }
  }
});*/

// Find Pets Function
const findMyPets = (e) => {
  const buttonId = e.target.id;
  if (buttonId === 'all') {
    buildPetCards(pets);
  } else {
      const myPets = [];
      for (let i=0; i < pets.length; i++) {
          if( pets[i].type === buttonId) {
              myPets.push(pets[i]);
          }
      }
      buildPetCards(myPets);
  }
};

// Click Events Organizer
const events = () => {
  document.getElementById('cat').addEventListener('click', findMyPets);
  document.getElementById('dog').addEventListener('click', findMyPets);
  document.getElementById('dino').addEventListener('click', findMyPets);
  document.getElementById('all').addEventListener('click', findMyPets);
};

// Initial Function
const init = () => {
  buildPetCards(pets);
  events();
};

init();
