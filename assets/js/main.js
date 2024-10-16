const iconMobileNav = document.getElementById("iconMobileNav")
const closeMobileNav =[].slice.call(document.getElementsByClassName("mobile-nav")) 

const toggleNav = ()=>{
    const mobileNav = document.getElementsByClassName("mobile-nav")[0]
    if (!mobileNav.classList.contains('none')) {
        mobileNav.classList.toggle("close")
        setTimeout(() => {
            mobileNav.classList.toggle("none")
            mobileNav.classList.toggle("close")
        }, 2000);
    } else {
        mobileNav.classList.toggle("none")
    }
}
iconMobileNav.addEventListener('click',toggleNav)
closeMobileNav.forEach(item => {
    item.addEventListener('click',toggleNav)
});