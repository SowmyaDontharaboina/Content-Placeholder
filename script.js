const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs= document.querySelectorAll('.animated-bg');
const animated_bgs_text  = document.querySelectorAll('.animated-bg-text');

const getData = () => {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">';
    title.innerHTML = 'Lorem ipsum, or lipsum ';
    excerpt.innerHTML = 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text ';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
    name.innerHTML = 'John Deo';
    date.innerHTML = 'Oct 08, 2020';
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bgs_text.forEach((bgtext) => bgtext.classList.remove('animated-bg-text'));
};

setTimeout(() => {
    getData();
}, 3000)