$(document)
        .ready(function() {
            $.ajax({
                url: "media.json",
                data: "data",
                type:"GET",
                dataType:"json",
                success:function(data){
                    $.each(data.audio, function(i, el) { 
                        var id=el.audio;   
                        var title=el.title;
                        
                        $("#table1").append('<tr><td>'+title+'</td></tr>'); 
                    
                        
                    });
                    $.each(data.video, function(i,el){
                        var id=el.video;
                        var title=el.title;

                        $("#table2").append('<tr><td>'+title+'</td></tr>');
                    })
                },
                
                success:function(data){
                    $.each(data.video, function(i, el) { 
                        var id=el.video;   
                        var title=el.title;
                        
                        
                        $("#table2").append('<tr><td><button>'+title+'</button></td></tr>'); 
                        
                    });
                },

            });
        })