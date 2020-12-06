const sections = Array.from(document.querySelectorAll('section'));
const navBar = document.querySelector('#navbar__list');

// dynamic nav bar with elements bound to sections' IDs
for (i=0; i<sections.length; i++) {
  const newBlock = document.createElement('li');
  navBar.appendChild(newBlock);
  newBlock.innerHTML = `<a href='#${sections[i].id}' data-link=${sections[i].id} class='nav__elements'>${sections[i].dataset.nav}</a>`;
};

// smooth scroll to section by clicking navbar item
navBar.addEventListener('click', function(evOb) {
  evOb.preventDefault();
  if (evOb.target.hasAttribute('data-link')) {
    evOb.target
  }
  const showThisSection = document.getElementById(evOb.target.dataset.link);
  showThisSection.scrollIntoView({behavior: 'smooth', block: 'start'});
});

//active navbar item while scrolling
document.addEventListener('scroll', function () {
    const allNavBarLinks = Array.from(document.querySelectorAll('a'));
    const currentScrollPosition = window.pageYOffset;
    allNavBarLinks.map(navBarLink => {
        if (document.querySelector(navBarLink.hash).offsetTop <= currentScrollPosition && document.querySelector(navBarLink.hash).offsetTop + document.querySelector(navBarLink.hash).offsetHeight > currentScrollPosition) {
          navBarLink.classList.add('active');
        } else {
            navBarLink.classList.remove('active');
        }
    });
});
