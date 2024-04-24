let availablekeywords = [
    'Uttar Pradesh',
    'Maharashtra',
    'Bihar',
    'Chhattisgarh',
    'Punjab',
    'Himachal Pradesh',
    'Uttarakhand',
    'Telangana',
    'Tamil Nadu',
    'Karnataka',
    'Andhra Pradesh',
    'Odisha',
    'Arunachal Pradesh',
    'Assam',
    'Gujarat',
    'Haryana',
    'Jammu & Kashmir',
    'Delhi',
    'Rajasthan',
    'West Bengal',
    'Manipur',
    'Karnataka',
    'Goa',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result =availablekeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
         console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}


/*
document.querySelector("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input value
    const Jalandhar = document.getElementById("input-box").value;

    // Redirect based on the keyword
    if (Jalandhar === "Jalandhar") {
        window.location.href = "Jalandhar.html";
    } else {
        // Handle other cases or display search results
        //document.getElementById("search-results").innerHTML = "No results found for " + keyword;
        window.location.href = "non.html";
    }
});

*/


function fun(){
    var pass = document.getElementById("input-box").value;
    if (pass == 'Uttar Pradesh'){
        window.location.href = 'Uttar Pradesh.html';
    }
    else{
        if (pass == 'Maharashtra'){
            window.location.href = 'Maharashtra.html';
        }
        else{
            if (pass == 'Bihar'){
                window.location.href = 'Bihar.html';
            }
            else{
                if (pass == 'Chhattisgarh'){
                    window.location.href = 'Chhattisgarh.html';
                }
                else{
                    if (pass == 'Punjab'){
                        window.location.href = 'Punjab.html';
                    }
                    else{
                        if (pass == 'Himachal Pradesh'){
                            window.location.href = 'Himachal Pradesh.html';
                        }
                        else{
                            if (pass == 'Uttarakhand'){
                                window.location.href = 'Uttarakhand.html';
                            }
                            else{
                                if (pass == 'Telangana'){
                                    window.location.href = 'Telangana.html';
                                }
                                else{
                                    if (pass == 'Tamil Nadu'){
                                        window.location.href = 'Tamil Nadu.html';
                                    }
                                    else{
                                        if (pass == 'Karnataka'){
                                            window.location.href = 'Karnataka.html';
                                        }
                                        else{
                                            if (pass == 'Andhra Pradesh'){
                                                window.location.href ='Andhra Pradesh.html';
                                            }
                                            else{
                                                if (pass == 'Odisha'){
                                                    window.location.href = 'Odisha.html';
                                                }
                                                else{
                                                    if (pass == 'Arunachal Pradesh'){
                                                        window.location.href = 'Arunachal Pradesh.html';
                                                    }
                                                    else{
                                                        if (pass == 'Assam'){
                                                            window.location.href = 'Assam';
                                                        }
                                                        else{
                                                            if (pass == 'Gujarat'){
                                                                window.location.href = 'Gujarat.html';
                                                            }
                                                            else{
                                                                if (pass == 'Jammu & Kashmir'){
                                                                    window.location.href = 'Jammu & Kashmir.html';
                                                                }
                                                                else{
                                                                    if (pass == 'Delhi'){
                                                                        window.location.href = 'Delhi.html';
                                                                    }
                                                                    else{
                                                                        if (pass == 'Rajasthan'){
                                                                            window.location.href = 'Rajasthan.html';
                                                                        }
                                                                        else{
                                                                            if (pass == 'West Bengal'){
                                                                                window.location.href = 'West Bengal.html';
                                                                            }
                                                                            else{
                                                                                if (pass == 'Manipur'){
                                                                                    window.location.href = 'Manipur.html';
                                                                                }
                                                                                else{
                                                                                    if (pass == 'Karnataka'){
                                                                                        window.location.href = 'Karnataka.html';
                                                                                    }
                                                                                    else{
                                                                                        if (pass == 'Goa'){
                                                                                            window.location.href = ' Goa.html';
                                                                                        }
                                                                                        else{
                                                                                            if (pass == 'Haryana'){
                                                                                                window.location.href = 'Haryana.html';
                                                                                            }
                                                                                            else{
                                                                                                window.location.href = 'page not found.html';
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
    }
    
}
