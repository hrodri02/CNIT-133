const templateHTML = `
<header>
    <i class="fa-solid fa-bars left-item" id="menu-bar"></i>
    <h2 class="center-item">CNIT 133 Homework {{hw_number}} - {{hw_title}}</h2>
</header>
<nav>
    <a href="hw{{hw_number}}.html">Home</a>
    <a href="hw{{hw_number}}-part1.html">Part 1</a>
    <a href="hw{{hw_number}}-part2.html">Part 2</a>
</nav>
<div class='content-container row-flex-direction'>
    <div class='vertical-nav-bar'>
        <a href='hw1.html'>HW 1</a>
        <a href='hw2.html'>HW 2</a>
        <a href='hw3.html'>HW 3</a>
        <a href='hw4.html'>HW 4</a>
        <a href='hw5.html'>HW 5</a>
        <a href='hw6.html'>HW 6</a>
        <a href='hw7.html'>HW 7</a>
        <a href='#'>HW 8</a>
    </div>
</div>
`;

function setupPage(metadata) {
    let html = "";
    
    html += templateHTML.replace(/{{hw_number}}/g, metadata["hw_number"])
                        .replace(/{{hw_title}}/g, metadata["hw_title"]);
    document.body.innerHTML = html;
}