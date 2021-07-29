
document.querySelector('#sidebarCollapse').addEventListener('click', event => {
    let sidebar = document.querySelector('#sticky-sidebar');
    let sidebar1 = document.querySelector('#sidebar');
    let main = document.querySelector('#main');
    sidebar1.classList.toggle('active');
    sidebar.classList.toggle('col');
    sidebar.classList.toggle('p-1');
    sidebar.classList.toggle('position-fixed');
    main.classList.toggle('offset-3');
});