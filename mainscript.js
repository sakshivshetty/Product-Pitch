

            var firebaseConfig = {
                    apiKey: "AIzaSyBEvIY0LvnTaqPIZP7EOTWhja7QQnnsq5Y",
                    authDomain: "hashcode2019-e33a1.firebaseapp.com",
                    databaseURL: "https://hashcode2019-e33a1.firebaseio.com",
                    projectId: "hashcode2019-e33a1",
                    storageBucket: "hashcode2019-e33a1.appspot.com",
                    messagingSenderId: "75329561517",
                    appId: "1:75329561517:web:7f52684ffc1d0b6c9c3724"
                };
                // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            
            var master_user;
            function get_deets()
            {
                var mydatabase=firebase.database().ref('users/');
                var email=document.getElementById("user_email").value;
                var cleanEmail=email.replace('.com', '_dot_com' );
                var entered_password=document.getElementById("user_password").value;
                
                mydatabase.child(cleanEmail).on('value',function(snapshot){
                    if(snapshot.val()==null)
                        alert("Not registered yet");
                    else
                    {
                        // if(snapshot.child('user_password').val()==entered_password)
                        //     console.log(true);
                        // else
                        //     alert("Wrong password");
                        
                        if(snapshot.child('user_password').val()===(entered_password))
                        {   
                            master_user=email;
                            sessionStorage.setItem("user", master_user);

                            //console.log(snapshot.child('user_password').val())
                            location.replace("post_forum_acceptables.html");
                        }    
                        else
                            alert("Wrong password");
                            
                    }
                    

                })
                //console.log(master_user);

                
                //master_user.replace('.com', '_dot_com');
                
            }
            
                // </script>//mydatabase.on("value", function(snapshot){
                // console.log(snapshot.val());
                // }, function (error) {
                // console.log("Error: " + error.code);
                // });
                // var email=document.getElementById("user_email").value;
                // //var password=document.getElementById("user_password").value;
                // var cleanEmail=email.replace('.com', '__dot__com' )
                
                // var password_in_db = firebase.database().ref('users/' + cleanEmail + '/user_password');
                // password_in_db.on('value', function(snapshot) {
                // // updateStarCount(postElement, snapshot.val());
                // // });
                // console.log(password_in_db);
            