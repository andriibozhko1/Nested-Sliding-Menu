(function () {
  const menu = [
    {
      title: 'HTML and CSS Week 1',
      items: [
        {
          title: 'Day 1: First meeting',
          link: 'https://github.com/mate-academy/fs-program/blob/master/lesson_00_instructions.md',
        },
        {
          title: 'Day 2: HTML',
          link: 'https://github.com/mate-academy/fs-program/blob/master/html_css/lesson_11.md',
          items: [
            {
              title: 'Algo main: Sum numbers in range',
              link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range',
            },
            {
              title: 'Algo stretch: Seek and destroy',
              link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy',
            },
            {
              title: 'Project: Create html form',
              link: 'https://github.com/mate-academy/fe-lesson-1-practice-form/blob/master/README.md',
            },
          ],
        },
      ],
    },
    {
      title: 'HTML and CSS Week 2',
      items: [
        {
          title: 'Day 1: npm, gulp, sass',
          items: [
            {
              title: 'Algo main: Sum numbers in range',
              link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range',
            },
            {
              title: 'Algo stretch: Seek and destroy',
              link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy',
            },
            {
              title: 'Project: Create html form',
              link: 'https://github.com/mate-academy/fe-lesson-1-practice-form/blob/master/README.md',
            },
          ],
        },
        {
          title: 'Day 2: BEM',
          link: 'https://github.com/mate-academy/fs-program/blob/master/html_css/lesson_11.md',
          items: [
            {
              title: 'Algo main: Sum numbers in range',
              link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range',
            },
            {
              title: 'Algo stretch: sum all primes',
            },
            {
              title: 'Project: Create html form',
              link: 'https://github.com/mate-academy/fe-lesson-1-practice-form/blob/master/README.md',
            },
          ],
        },
      ],
    },
  ];

  const createHeaders = function () {
    const container = document.querySelector('.app');
    for (let i = 0; i < menu.length; i++) {
      const headers = document.createElement('h2');
      const bottomLine = document.createElement('hr');
      const navigation = document.createElement('ul');
      const items = menu[i].items;

      navigation.classList.add('menu');
      bottomLine.classList.add('headers-line');
      headers.classList.add('title');
      headers.innerHTML = menu[i].title;

      container.appendChild(headers);
      container.appendChild(bottomLine);
      container.append(navigation);

      createItems(items, navigation);
      
      navigation.addEventListener('click', (event) => {
        if (event.target.classList.contains('menu__triangle')) {
          const triangle = event.target;
          const findNav = triangle.parentElement.parentElement;
          const subNav = findNav.querySelector('[data-sub-menu]');
          if (subNav.classList.contains('hide')) {
            triangle.classList.add('active');
            subNav.classList.remove('hide');
          } else {
            triangle.classList.remove('active');
            subNav.classList.add('hide');
          }
        }
      });
    }
  };

  const createItems = function (items, navigation) {
    for (let i = 0; i < items.length; i++) {
      const navItems = document.createElement('li');
      const navLinks = document.createElement('a');
      const itemsContent = document.createElement('div');

      if(items[i].items) {
        const triangleIcon = document.createElement('div');
        triangleIcon.classList.add('menu__triangle');
        itemsContent.appendChild(triangleIcon);
      } else {
        const dotIcon = document.createElement('div');
        dotIcon.classList.add('menu__DotIcon');
        itemsContent.appendChild(dotIcon);
      }
      const subNavigation = items[i].items;

      itemsContent.classList.add('items-content');
      navItems.classList.add('menu__items');
      navLinks.classList.add('menu__links');
      navLinks.setAttribute('href', items[i].link);
      navLinks.innerHTML = items[i].title;

      navItems.appendChild(itemsContent);
      itemsContent.appendChild(navLinks);
      navigation.appendChild(navItems);
      createSubItems(subNavigation, navItems);
    }
  };

  const createSubItems = function (subNavigation, navItems) {
    if (subNavigation) {
      const createSubNavigation = document.createElement('ul');
      createSubNavigation.classList.add('hide');
      createSubNavigation.dataset.subMenu = 'hide';
      navItems.appendChild(createSubNavigation);

      for (let i = 0; i < subNavigation.length; i++) {
        const subItems = document.createElement('li');
        const subLinks = document.createElement('a');

        subItems.classList.add('menu__items');
        subLinks.classList.add('menu__links');
        subLinks.setAttribute('href', subNavigation[i].link);
        subLinks.innerHTML = subNavigation[i].title;

        createSubNavigation.appendChild(subItems);
        subItems.appendChild(subLinks);
      }
    }
  };
  
  createHeaders();
}());
