document.addEventListener('DOMContentLoaded', () => {
    const pageContent = document.body.innerHTML;
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.body.innerHTML = `
        <div class="container">
            <div class="card">            
                <div class="card-header">
                    <div>
                        <h1>FULIN</h1>
                        <small> PERSONAL WEBSITE </small>
                    </div>
                    <div class="header-buttons">
                        <button id="theme-toggle">LIGHT</button>
                    </div>
                </div>
    
                <div class="card-content">
                    <div class="buttonslist">
                        <button onclick="window.location.href='index.html'">ABOUT</button> <br>
                        <button onclick="window.location.href='resume.html'">RESUMÉ</button> <br>
                        <button onclick="window.location.href='projects.html'">PROJECTS</button> <br>
                        <button onclick="window.location.href='shark.html'">thing</button>
                    </div>
                    <div class="right-side">
                            <div class="section" id="page-content">
                                ${pageContent}
                            </div>
                    </div>
                </div>

                <div class="card-footer">
                    <div>
                        <a href="https://www.linkedin.com/in/fulinp/" class="fab fa-linkedin"></a>
                        <a href="https://www.instagram.com/ohnyo_rings/" class="fab fa-instagram"></a>
                        <a href="#" class="fab fa-youtube" onclick="alert('i dont have one (•᷄ᴗ•᷅ ᵕ)')"></a>
                        <a href="https://github.com/fpeng001" class="fab fa-github"></a>
                    </div>
                    <div>
                        <a href="mailto:fulinp53@gmail.com">fulinp53@gmail.com</a> • 609-510-4029
                    </div>

                </div>
            </div>
        </div>
    `;

    // detect acttive page thing so that i can highlight it green
    document.querySelectorAll('.buttonslist button').forEach(btn => {
        const href = btn.getAttribute('onclick').match(/'(.+?)'/)[1];
        if (href === currentPage) btn.classList.add('active');
    });

    //this is so it doesnt flash the unstylized stuff before the javascript loads, visibility is set to hidden in the css
    document.body.style.visibility = 'visible';



    // theme toggle
    const toggleButton = document.getElementById('theme-toggle');
    const root = document.documentElement;

    // check for preferences and saved themes
    const saved = localStorage.getItem('theme');

    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        root.setAttribute('data-theme', 'dark');
        toggleButton.textContent = 'DARK';
    }

    toggleButton.addEventListener('click', () => {
        const isDark = root.getAttribute('data-theme') === 'dark';
        root.setAttribute('data-theme', isDark ? 'light' : 'dark');
        toggleButton.textContent = isDark ? 'LIGHT' : 'DARK';
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });


});