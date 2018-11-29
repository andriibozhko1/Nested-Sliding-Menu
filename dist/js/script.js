(function() {  
    const container = document.querySelector('.app');

    let menu = [
        {
          title: 'HTML and CSS Week 1',        
          items: [
            {
              title: 'Day 1: First meeting',
              link: 'https://github.com/mate-academy/fs-program/blob/master/lesson_00_instructions.md',
            },
            {
              title: 'Day 2: HTML',
              week: 1,
              link: 'https://github.com/mate-academy/fs-program/blob/master/html_css/lesson_11.md',
              items: [
                {
                  title: 'Algo main: Sum numbers in range',
                  week: 1,
                  link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range',
                },
                {
                  title: 'Algo stretch: Seek and destroy',
                  week: 1,
                  link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy',
                },
                {
                  title: 'Project: Create html form',
                  week: 1,
                  link: 'https://github.com/mate-academy/fe-lesson-1-practice-form/blob/master/README.md',
                }
              ],
            }
          ],
        },
        {
          title: 'HTML and CSS Week 2',
          week: 2,
          items: [
            {
              title: 'Day 1: npm, gulp, sass',
              week: 2,
              items: [
                {
                  title: 'Algo main: Sum numbers in range',
                  week: 2,
                  link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range',
                },
                {
                  title: 'Algo stretch: Seek and destroy',
                  week: 2,
                  link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy',
                },
                {
                  title: 'Project: Create html form',
                  week: 2,
                  link: 'https://github.com/mate-academy/fe-lesson-1-practice-form/blob/master/README.md',
                }
              ],
            },
            {
              title: 'Day 2: BEM',
              week: 2,
              link: 'https://github.com/mate-academy/fs-program/blob/master/html_css/lesson_11.md',
              items: [
                {
                  title: 'Algo main: Sum numbers in range',
                  week: 2,
                  link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range',
                },
                {
                  title: 'Algo stretch: sum all primes',
                  week: 2,
                },
                {
                  title: 'Project: Create html form',
                  week: 2,
                  link: 'https://github.com/mate-academy/fe-lesson-1-practice-form/blob/master/README.md',
                }
              ],
            }
          ],
        },
      ];
    const create = function() {
        for(let i = 0; i < menu.length; i++) {
            const days = document.createElement('div');
            days.classList.add('day');

            const header = document.createElement('h2');
            header.innerHTML = menu[i].title;
            container.appendChild(days);
            days.appendChild(header);

            const items = menu[i].items;

            for(let j = 0; j < items.length; j++) {
                    const list = document.createElement('div');
                    list.innerHTML = items[j].title;                    
                    days.appendChild(list);
                    let test = items[j].items;
                    if(test) {
                        for(let z = 0; z < test.length; z++) {
                            const createSubItem = document.createElement('li');
                            createSubItem.innerHTML = test[z].title;
                            days.appendChild(createSubItem);
                        }
                    }
                }
        }
    }
    create();
}());