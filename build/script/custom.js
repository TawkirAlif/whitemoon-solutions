function countVal(l=0) {
        return l = l
    }
    function RemoveFile() {
        countVal(0),
        $("#apply").val(""),
        $(".form-upload-file").remove()
    }
    $(document).ready(function() {
        var l = countVal(l);
        $('input[type="file"]').change(function(e) {
            if ($(".form-upload-file").remove(), 0 == l) {
                var o = e.target.files[0].name;
                $(".form-control-file-holder").append('<div style="color:#fff;" class="form-upload-file"><ul><li>' + o + '<span class="uploadFile-close"><span class="fa fa-times-circle-o" onclick="RemoveFile();"></span></span></li></ul></div>'),
                $(".upload_logo_row").append('<div style="color:#fff;" class="form-upload-file"><ul><li>' + o + '<span class="uploadFile-close"><span class="fa fa-times-circle-o" onclick="RemoveFile();"></span></span></li></ul></div>'),
                countVal(l),
                $(".fileAlert").html("")
            } else {
                o = e.target.files[0].name;
                $(".form-upload-file").html("<ul><li>" + o + '<span class="uploadFile-close"><span class="icon-close" onclick="RemoveFile();"></span></span></li></ul>')
            }
        }),
        $("#apply").bind("change", function() {
            this.files[0].size > 25000000 ? ($(".fileAlert").css("color", "red"), $(".fileAlert").html("Please Select Another File. (Max 25 MB)"), $("#apply").val(""), $(".form-upload-file").remove()) : $(".fileAlert").css("color", "red")
        })
    });
    
    