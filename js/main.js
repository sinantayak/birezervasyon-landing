document.addEventListener('scroll', () => {
    const HEADER = document.getElementById('top-header') //Şu anda elementimizi tanımladık
    if(window.scrollY > 50) {
        // HEADER.classList.add('solid-header');
        HEADER.classList.add('bg-dark');
        HEADER.classList.add('navbar-dark');
        
        HEADER.classList.add('p-0');
    } else {
        try{
        // HEADER.classList.remove('solid-header');
        HEADER.classList.remove('bg-dark');
        HEADER.classList.remove('navbar-dark');

        HEADER.classList.remove('p-0');
    } 
        catch {}
    }
})