var index = 0;

const colors = [ "red", "green","blue","yellow","black","pink","orange"];

document.getElementsByClassName("btn")[0].addEventListener("click" , function() {

    document.getElementsByClassName("main_div")[0].style.background = colors[index++];

    if( index > colors.length - 1 )
    {
        index = 0;
    }
});