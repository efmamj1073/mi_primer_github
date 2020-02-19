var numeros = document.getElementById("numeros");
var letras = document.getElementById("letras");
function b1() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;

    if (aux == "1,2,3,4,5,6,7,8,9,0") {
        letras.innerHTML = "A";
    }else{
    if (aux == '') {
        numeros.innerHTML = "1";
    }
}
}
function b2() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;

    if (aux2 == "A") {
        letras.innerHTML = "A,B";

    } else {
        if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("falta una letra");

        }

    }





    if (aux == "1") {
        numeros.innerHTML = "1,2";
    } else {
        if (aux == '') {
            alert("falta un numero");
        }
    }
}
function b3() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 == "A,B") {
        letras.innerHTML = "A,B,C";

    } else {
        if (aux2 == "A" && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("falta una letra");
        } else{
            if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
                alert("falta una letra");
            }



        }

    }
   
    
    
    
    
    
    if (aux == "1,2") {
        numeros.innerHTML = "1,2,3";
    } else {
        if (aux == "1") {
            alert("falta un numero");
        } else {

            if (aux == '') {
                alert("falta un numero");
            }
        }
    }
}
function b4() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 == "A,B,C") {
        letras.innerHTML = "A,B,C,D";

    } else {
        if (aux2 == "A" && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("falta una letra");
        } else{
            if (aux2 == "A,B" && aux == "1,2,3,4,5,6,7,8,9,0") {
                alert("falta una letra");
            }else{

                if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
                    alert("falta una letra"); 
                }

            }



        }

    }







    if (aux == "1,2,3") {
        numeros.innerHTML = "1,2,3,4";
    } else {
        if (aux == "1") {
            alert("falta un numero");
        } else {
            if (aux == "1,2") {
                alert("falta un numero");
            } else {
                if (aux == '') {
                    alert("falta un numero");
                }
            }
        }
    }
}
function b5() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 == "A,B,C,D") {
        letras.innerHTML = "A,B,C,D,E";

    } else {
        if (aux2 == "A" && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("falta una letra");
        } else{
            if (aux2 == "A,B" && aux == "1,2,3,4,5,6,7,8,9,0") {
                alert("falta una letra");
            }else{

                if (aux2 == "A,B,C" && aux == "1,2,3,4,5,6,7,8,9,0") {
                    alert("falta una letra"); 
                }else{

                    if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
                        alert("falta una letra"); 
                    }

                }

            }



        }

    }
    
    
    
    
    
    if (aux == "1,2,3,4") {
        numeros.innerHTML = "1,2,3,4,5";
    } else {
        if (aux == "1") {
            alert("falta un numero");
        } else {
            if (aux == "1,2") {
                alert("falta un numero");
            } else {
                if (aux == "1,2,3") {
                    alert("falta un numero");
                } else {
                    if (aux == '') {
                        alert("falta un numero");
                    }
                }
            }
        }
    }
}
function b6() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 == "A,B,C,D,E") {
        letras.innerHTML = "A,B,C,D,E,F";

    } else {
        if (aux2 == "A" && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("falta una letra");
        } else{
            if (aux2 == "A,B" && aux == "1,2,3,4,5,6,7,8,9,0") {
                alert("falta una letra");
            }else{

                if (aux2 == "A,B,C" && aux == "1,2,3,4,5,6,7,8,9,0") {
                    alert("falta una letra"); 
                }else{

                    if (aux2 == "A,B,C,D" && aux == "1,2,3,4,5,6,7,8,9,0") {
                        alert("falta una letra"); 
                    }else{

                        if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
                            alert("falta una letra");
                            
                        }


                    }

                }

            }



        }

    }
    






    if (aux == "1,2,3,4,5") {
        numeros.innerHTML = "1,2,3,4,5,6";
    } else {
        if (aux == "1") {
            alert("falta un numero");
        } else {
            if (aux == "1,2") {
                alert("falta un numero");
            } else {
                if (aux == "1,2,3") {
                    alert("falta un numero");
                } else {
                    if (aux == "1,2,3,4") {
                        alert("falta un numero");
                    } else {
                        if (aux == '') {
                            alert("falta un numero");
                        }
                    }
                }
            }
        }
    }
}
function b7() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 == "A,B,C,D,E,F") {
        letras.innerHTML = "A,B,C,D,E,F,G";

    } else {
        if (aux2 == "A" && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("falta una letra");
        } else{
            if (aux2 == "A,B" && aux == "1,2,3,4,5,6,7,8,9,0") {
                alert("falta una letra");
            }else{

                if (aux2 == "A,B,C" && aux == "1,2,3,4,5,6,7,8,9,0") {
                    alert("falta una letra"); 
                }else{

                    if (aux2 == "A,B,C,D" && aux == "1,2,3,4,5,6,7,8,9,0") {
                        alert("falta una letra"); 
                    }else{

                        if (aux2 == "A,B,C,D,E" && aux == "1,2,3,4,5,6,7,8,9,0") {
                            alert("falta una letra");
                            
                        }else{
                            if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
                                alert("falta una letra"); 
                            }

                        }


                    }

                }

            }



        }

    }
    



    if (aux == "1,2,3,4,5,6") {
        numeros.innerHTML = "1,2,3,4,5,6,7";
    } else {
        if (aux == "1") {
            alert("falta un numero");
        } else {
            if (aux == "1,2") {
                alert("falta un numero");
            } else {
                if (aux == "1,2,3") {
                    alert("falta un numero");
                } else {
                    if (aux == "1,2,3,4") {
                        alert("falta un numero");
                    } else {
                        if (aux == "1,2,3,4,5") {
                            alert("falta un numero");

                        } else {
                            if (aux == '') {
                                alert("falta un numero");

                            }
                        }
                    }
                }
            }
        }
    }
}
function b8() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 == "A,B,C,D,E,F,G") {
        letras.innerHTML = "A,B,C,D,E,F,G,H";

    } else {
        if (aux2 == "A" && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("falta una letra");
        } else{
            if (aux2 == "A,B" && aux == "1,2,3,4,5,6,7,8,9,0") {
                alert("falta una letra");
            }else{

                if (aux2 == "A,B,C" && aux == "1,2,3,4,5,6,7,8,9,0") {
                    alert("falta una letra"); 
                }else{

                    if (aux2 == "A,B,C,D" && aux == "1,2,3,4,5,6,7,8,9,0") {
                        alert("falta una letra"); 
                    }else{

                        if (aux2 == "A,B,C,D,E" && aux == "1,2,3,4,5,6,7,8,9,0") {
                            alert("falta una letra");
                            
                        }else{
                            if (aux2 == "A,B,C,D,E,F" && aux == "1,2,3,4,5,6,7,8,9,0") {
                                alert("falta una letra"); 
                            }else{
                                if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
                                    alert("falta una letra");
                                }



                            }

                        }


                    }

                }

            }



        }

    }





    if (aux == "1,2,3,4,5,6,7") {
        numeros.innerHTML = "1,2,3,4,5,6,7,8";
    } else {
        if (aux == "1") {
            alert("falta un numero");
        } else {
            if (aux == "1,2") {
                alert("falta un numero");
            } else {
                if (aux == "1,2,3") {
                    alert("falta un numero");
                } else {
                    if (aux == "1,2,3,4") {
                        alert("falta un numero");
                    } else {
                        if (aux == "1,2,3,4,5") {
                            alert("falta un numero");

                        } else {
                            if (aux == "1,2,3,4,5,6") {
                                alert("falta un numero");

                            } else {
                                if (aux == '') {
                                    alert("falta un numero");

                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function b9() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 == "A,B,C,D,E,F,G,H") {
        letras.innerHTML = "A,B,C,D,E,F,G,H,I";

    } else {
        if (aux2 == "A" && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("falta una letra");
        } else{
            if (aux2 == "A,B" && aux == "1,2,3,4,5,6,7,8,9,0") {
                alert("falta una letra");
            }else{

                if (aux2 == "A,B,C" && aux == "1,2,3,4,5,6,7,8,9,0") {
                    alert("falta una letra"); 
                }else{

                    if (aux2 == "A,B,C,D" && aux == "1,2,3,4,5,6,7,8,9,0") {
                        alert("falta una letra"); 
                    }else{

                        if (aux2 == "A,B,C,D,E" && aux == "1,2,3,4,5,6,7,8,9,0") {
                            alert("falta una letra");
                            
                        }else{
                            if (aux2 == "A,B,C,D,E,F" && aux == "1,2,3,4,5,6,7,8,9,0") {
                                alert("falta una letra"); 
                            }else{
                                if (aux2 == "A,B,C,D,E,F,G" && aux == "1,2,3,4,5,6,7,8,9,0") {
                                    alert("falta una letra");
                                }else{
                                    if  (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
                                        alert("falta una letra");
                                        
                                    }


                                }



                            }

                        }


                    }

                }

            }



        }

    }










    if (aux == "1,2,3,4,5,6,7,8") {
        numeros.innerHTML = "1,2,3,4,5,6,7,8,9";
    } else {
        if (aux == "1") {
            alert("falta un numero");
        } else {
            if (aux == "1,2") {
                alert("falta un numero");
            } else {
                if (aux == "1,2,3") {
                    alert("falta un numero");
                } else {
                    if (aux == "1,2,3,4") {
                        alert("falta un numero");
                    } else {
                        if (aux == "1,2,3,4,5") {
                            alert("falta un numero");

                        } else {
                            if (aux == "1,2,3,4,5,6") {
                                alert("falta un numero");

                            } else {
                                if (aux == "1,2,3,4,5,6,7") {
                                    alert("falta un numero");

                                } else {
                                    if (aux == '') {
                                        alert("falta un numero");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function b0() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 == "A,B,C,D,E,F,G,H,I") {
        letras.innerHTML = "A,B,C,D,E,F,G,H,I,J";

    } else {
        if (aux2 == "A" && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("falta una letra");
        } else{
            if (aux2 == "A,B" && aux == "1,2,3,4,5,6,7,8,9,0") {
                alert("falta una letra");
            }else{

                if (aux2 == "A,B,C" && aux == "1,2,3,4,5,6,7,8,9,0") {
                    alert("falta una letra"); 
                }else{

                    if (aux2 == "A,B,C,D" && aux == "1,2,3,4,5,6,7,8,9,0") {
                        alert("falta una letra"); 
                    }else{

                        if (aux2 == "A,B,C,D,E" && aux == "1,2,3,4,5,6,7,8,9,0") {
                            alert("falta una letra");
                            
                        }else{
                            if (aux2 == "A,B,C,D,E,F" && aux == "1,2,3,4,5,6,7,8,9,0") {
                                alert("falta una letra"); 
                            }else{
                                if (aux2 == "A,B,C,D,E,F,G" && aux == "1,2,3,4,5,6,7,8,9,0") {
                                    alert("falta una letra");
                                }else{
                                    if  (aux2 == "A,B,C,D,E,F,G,H" && aux == "1,2,3,4,5,6,7,8,9,0") {
                                        alert("falta una letra");
                                        
                                    }else{

                                        if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
                                            alert("falta una letra");
                                            
                                        }

                                    }


                                }



                            }

                        }


                    }

                }

            }



        }

    }




    if (aux == "1,2,3,4,5,6,7,8,9") {
        numeros.innerHTML = "1,2,3,4,5,6,7,8,9,0";
    } else {
        if (aux == "1") {
            alert("falta un numero");
        } else {
            if (aux == "1,2") {
                alert("falta un numero");

            } else {
                if (aux == "1,2,3") {
                    alert("falta un numero");
                } else {
                    if (aux == "1,2,3,4") {
                        alert("falta un numero");
                    } else {

                        if (aux == "1,2,3,4,5") {
                            alert("falta un numero");

                        } else {
                            if (aux == "1,2,3,4,5,6") {
                                alert("falta un numero");

                            } else {
                                if (aux == "1,2,3,4,5,6,7") {
                                    alert("falta un numero");

                                } else {
                                    if (aux == "1,2,3,4,5,6,7,8") {
                                        alert("falta un numero");
                                    } else {
                                        if (aux == '') {
                                            alert("falta un numero");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}



