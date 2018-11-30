(function() {
  let menu = [
    {
      title: "HTML and CSS Week 1",
      items: [
        {
          title: "Day 1: First meeting",
          link:
            "https://github.com/mate-academy/fs-program/blob/master/lesson_00_instructions.md"
        },
        {
          title: "Day 2: HTML",
          week: 1,
          link:
            "https://github.com/mate-academy/fs-program/blob/master/html_css/lesson_11.md",
          items: [
            {
              title: "Algo main: Sum numbers in range",
              week: 1,
              link:
                "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range"
            },
            {
              title: "Algo stretch: Seek and destroy",
              week: 1,
              link:
                "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy"
            },
            {
              title: "Project: Create html form",
              week: 1,
              link:
                "https://github.com/mate-academy/fe-lesson-1-practice-form/blob/master/README.md"
            }
          ]
        }
      ]
    },
    {
      title: "HTML and CSS Week 2",
      week: 2,
      items: [
        {
          title: "Day 1: npm, gulp, sass",
          week: 2,
          items: [
            {
              title: "Algo main: Sum numbers in range",
              week: 2,
              link:
                "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range"
            },
            {
              title: "Algo stretch: Seek and destroy",
              week: 2,
              link:
                "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy"
            },
            {
              title: "Project: Create html form",
              week: 2,
              link:
                "https://github.com/mate-academy/fe-lesson-1-practice-form/blob/master/README.md"
            }
          ]
        },
        {
          title: "Day 2: BEM",
          week: 2,
          link:
            "https://github.com/mate-academy/fs-program/blob/master/html_css/lesson_11.md",
          items: [
            {
              title: "Algo main: Sum numbers in range",
              week: 2,
              link:
                "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range"
            },
            {
              title: "Algo stretch: sum all primes",
              week: 2
            },
            {
              title: "Project: Create html form",
              week: 2,
              link:
                "https://github.com/mate-academy/fe-lesson-1-practice-form/blob/master/README.md"
            }
          ]
        }
      ]
    }
  ];
  const createHeaders = function() {
    const container = document.querySelector(".app");
    for(let i = 0; i < menu.length; i++) {
      const headers = document.createElement('h2');
      const createUl = document.createElement('ul');
      headers.innerHTML = menu[i].title;

      container.appendChild(headers);
      container.append(createUl);
    }
  }

  createHeaders();
})();