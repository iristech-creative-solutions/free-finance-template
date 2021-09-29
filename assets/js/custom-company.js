   $(document).ready(function(){ 
            var password = localStorage.getItem('TempPasswordIT'); 
            if( password === "IRISTECH"){ 
                $('.BtnDonePage').show();     
                //$('.BtnEditPage').hide(); 
                $('.ChangeContent').on('click');  
                
                $('.ChangeContent').on('click'); 
                $('.IndexServiceImg').on('click');
                $('.IndexSliderItemFile').on('click'); 
                $('.ChangeContentURL').on('click'); 
                $('.ChangeContentAndURL').on('click'); 
                $('#map').on('click');                 
                $('.IndexFunFactImg').on('click'); 
            }else{
                $('.BtnDonePage').hide();     
                //$('.BtnEditPage').show(); 
                $('.IndexSliderItemFile').hide();
                $('.IframeMapChange').hide();
                $('.IndexServiceImg').hide();
                $('.IndexFunFactImg').hide();

                $('.ChangeContent').off('click'); 
                $('.IndexServiceImg').off('click');
                $('.IndexSliderItemFile').off('click'); 
                $('.ChangeContentURL').off('click'); 
                $('.ChangeContentAndURL').off('click'); 
                $('#map').off('click');                 
                $('.IndexFunFactImg').off('click'); 
                
                
                
            }
  
    $(".BtnDonePage").click(function(){ 
        Swal.fire({
            title: 'Are you sure?',
            text: "Your DONE editing!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, DONE!'
          }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('TempPasswordIT');
                location.reload();
              
            }
          })

    });///clsoe for BtnEditPage    

    $(".BtnEditPage").dblclick(function(){          
        const { value: text } =  Swal.fire({
            title: 'CONFIRMED ?',
            text: "Pls. Input Assigned Password",
            
            icon: 'info',
            input: 'password',
            inputPlaceholder: 'Enter Password ...',
            inputAttributes: {
                'aria-label': 'Password Code'
            },
    
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!',
            }).then(result => {
                if (result.value) {
                        if( result.value === "IRISTECH"){  
                            localStorage.setItem('TempPasswordIT', 'IRISTECH');
                            $('.ChangeContent').on('click');    
                            $('.BtnDonePage').show();     
                            $('.BtnEditPage').hide();                   
                        }else{
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'PASSWORD invalid, Pls. Check the Docs.',
                                
                              })   
                             // $('.ChangeContent').off('click'); 
                        }
                         
                      
                    }
                  });


    });///clsoe for BtnEditPage 
                $(".ChangeContent").click(function(){ 
                    var password = localStorage.getItem('TempPasswordIT'); 
                    if( password === "IRISTECH"){ 
                        const { value: text } =  Swal.fire({
                            title: 'CONFIRMED ?',
                            text: "Pls. New WORDS to DISPLAY",
                            
                            icon: 'info',
                            input: 'textarea',
                            inputPlaceholder: 'Enter New WORDS ...',
                            inputAttributes: {
                                'aria-label': 'Password Code'
                            },
                    
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes!',
                            }).then(result => {
                                if (result.value) {
                                  $("#" + this.id ).html(result.value);
                                      
                                    }
                                  });
                      }
                    //   else{
                    //         Swal.fire({
                    //         icon: 'error',
                    //         title: 'Oops...',
                    //         text: 'EDITING not ALLOWED',
                            
                    //       })   
                    //   }

                });///clsoe for FooterMenu

              
                $(".IndexServiceImg").on('change', function () {

                    if (typeof (FileReader) != "undefined") {
            
                       // var image_holder = $("#"+this.id );
                       var GetIDsData  =    $(this).attr('data-id');
                       var image_holder =   $("#"+GetIDsData);
                       //alert(image_holder);
                        image_holder.empty();
            
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            $("<img />", {
                                "src": e.target.result,
                                "class": "thumb-image"
                            }).appendTo(image_holder);
            
                        }
                        image_holder.show();
                        reader.readAsDataURL($(this)[0].files[0]);
                    } else {
                        alert("This browser does not support FileReader.");
                    }
                });


                $(".IndexFunFactImg").on('change', function (event) {              
                   var GetIDsData  =    $(this).attr('data-id');                    
                   var file =  document.getElementById('IndexFunFactImg').files[0];                  
                    var reader = new FileReader();
                    reader.onloadend = function(){                      
                        document.getElementById(GetIDsData).style.backgroundImage = "url(" + reader.result + ")";        
                    }
                    if(file){
                        reader.readAsDataURL(file);
                      }else{
                      }
                                
                });


                $(".IndexSliderItemFile").on('change', function (event) {              
                    var GetIDsData  =    $(this).attr('data-id');   //for img
                    var GetIDsURL   =    $(this).attr('data-value');  //for img url              
                    var file        =    document.getElementById(GetIDsURL).files[0];                  
                     var reader = new FileReader();
                     reader.onloadend = function(){                      
                         document.getElementById(GetIDsData).style.backgroundImage = "url(" + reader.result + ")";        
                     }
                     if(file){
                         reader.readAsDataURL(file);
                       }else{
                       }
                                 
                 });



                 $(".ChangeContentURL").click(function(){ 
                    var password = localStorage.getItem('TempPasswordIT'); 
                    if( password === "IRISTECH"){ 
                        const { value: text } =  Swal.fire({
                            title: 'CONFIRMED ?',
                            text: "Pls. New URL to DISPLAY",
                            
                            icon: 'info',
                            input: 'textarea',
                            inputPlaceholder: 'Enter New WHOLE URL ...',
                            inputAttributes: {
                                'aria-label': 'Password Code'
                            },
                    
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes!',
                            }).then(result => {
                                if (result.value) {                                   
                                       $("a#"+ this.id).prop("href", result.value)
                                    }
                                  });
                      }
                    //   else{
                    //         Swal.fire({
                    //         icon: 'error',
                    //         title: 'Oops...',
                    //         text: 'EDITING not ALLOWED',
                            
                    //       })   
                    //   }

                });///clsoe for FooterMenu


                $(".ChangeContentAndURL").click(function(){ 
                    var password = localStorage.getItem('TempPasswordIT'); 
                    if( password === "IRISTECH"){ 
                        const { value: text } =  Swal.fire({
                            title: 'CONFIRMED ?',
                            text: "Pls. New WORDS to DISPLAY",
                            
                            icon: 'info',
                            input: 'textarea',
                            inputPlaceholder: 'Enter New WORDS ...',
                            inputAttributes: {
                                'aria-label': 'Password Code'
                            },
                    
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes!',
                            }).then(result => {
                                if (result.value) {
                                    $("#" + this.id ).html(result.value); //content
                                  
                                   // 
                                    const { value: text } =  Swal.fire({ //url
                                        title: 'CONFIRMED ?',
                                        text: "Pls. New URL to DISPLAY",
                                        
                                        icon: 'info',
                                        input: 'textarea',
                                        inputPlaceholder: 'Enter New WHOLE URL ...',
                                        inputAttributes: {
                                            'aria-label': 'Password Code'
                                        },
                                
                                        showCancelButton: true,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        confirmButtonText: 'Yes!',
                                        }).then(result1 => {
                                            if (result1.value) { 
                                                var GetIDsURL   =    $(this).attr('data-target');                                                                                
                                                   $("a#"+ GetIDsURL).prop("href", result1.value)                                                 
                                                }
                                              });
                                      
                                    }
                                  });
                      }
                    //   else{
                    //         Swal.fire({
                    //         icon: 'error',
                    //         title: 'Oops...',
                    //         text: 'EDITING not ALLOWED',
                            
                    //       })   
                    //   }

                });///clsoe for FooterMenu

                $("#map").click(function(){ 
                   
                    var password = localStorage.getItem('TempPasswordIT'); 
                    if( password === "IRISTECH"){ 
                        const { value: text } =  Swal.fire({
                            title: 'CONFIRMED ?',
                            text: "Pls. New URL to DISPLAY",
                            
                            icon: 'info',
                            input: 'textarea',
                            inputPlaceholder: 'Enter New WHOLE URL ...',
                            inputAttributes: {
                                'aria-label': 'Password Code'
                            },
                    
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes!',
                            }).then(result => {
                                if (result.value) {     
                                                                
                                            var $iframe = $('#IframeMap');
                                            if ($iframe.length) {
                                                $iframe.attr('src',result.value);
                                            
                                                return false;
                                            }
                                            return true;
                                     }
                                  });
                      }
                    //   else{
                    //         Swal.fire({
                    //         icon: 'error',
                    //         title: 'Oops...',
                    //         text: 'EDITING not ALLOWED',
                            
                    //       })   
                    //   }



                  
                });///clsoe for fuction


    }); //close Jquery
