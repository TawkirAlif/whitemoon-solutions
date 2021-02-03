$("form[name=contact_form]").submit(function(e) {
        event.preventDefault(),
        $("#Loder").show(),
        $(".button-4").css("background-color", "white"),
        $(".contact_button").attr("disabled", !0),
        $.ajax({
            type: "POST",
            url: base_url + "api/get-a-quote",
            data: new FormData(this),
            contentType: !1,
            cache: !1,
            processData: !1
        }).done(function(e) {
            console.log(e);
            var t = JSON.parse(e);
            "failed" == t.status && "purpose" == t.type ? ($(".purposeAlert").html(t.message), $("#purpose").focus(), $(".purpose").addClass("text_error"), $(".contact_button").attr("disabled", !1), $("#Loder").hide(), $(".button-4").css("background-color", "#010001")) : $(".purposeAlert").html(""),
            "failed" == t.status && "name" == t.type ? ($(".nameAlert").html(t.message), $("#name").focus(), $(".name").addClass("text_error"), $(".contact_button").attr("disabled", !1), $("#Loder").hide(), $(".button-4").css("background-color", "#010001")) : $(".nameAlert").html(""),
            "failed" == t.status && "email" == t.type ? ($(".emailAlert").html(t.message), $("#email").focus(), $(".email").addClass("text_error"), $(".contact_button").attr("disabled", !1), $("#Loder").hide(), $(".button-4").css("background-color", "#010001")) : $(".emailAlert").html(""),
            "failed" == t.status && "mobile" == t.type ? ($(".mobileAlert").html(t.message), $("#mobile").focus(), $(".mobile").addClass("text_error"), $(".contact_button").attr("disabled", !1), $("#Loder").hide(), $(".button-4").css("background-color", "#010001")) : $(".mobileAlert").html(""),
            "failed" == t.status && "company" == t.type ? ($(".companyAlert").html(t.message), $("#company").focus(), $(".company").addClass("text_error"), $(".contact_button").attr("disabled", !1), $("#Loder").hide(), $(".button-4").css("background-color", "#010001")) : $(".companyAlert").html(""),
            "failed" == t.status && "description" == t.type ? ($(".descriptionAlert").html(t.message), $("#description").focus(), $(".description").addClass("text_error"), $(".contact_button").attr("disabled", !1), $("#Loder").hide(), $(".button-4").css("background-color", "#010001")) : $(".descriptionAlert").html(""),
            "failed" == t.status && "upload_file" == t.type ? ($(".fileAlert").html(t.message), $("#apply").focus(), $(".apply").addClass("text_error"), $(".contact_button").attr("disabled", !1), $("#Loder").hide(), $(".button-4").css("background-color", "#010001")) : $(".fileAlert").html(""),
            "success" == t.status && ($("#Loder").hide(), $(".button-4").css("background-color", "#010001"), $("#contact_form")[0].reset(), $(".form-upload-file").remove(), window.location.href = front_base_url + "success")
        }).fail(function() {})
    }),
    $("document").ready(function() {
        $("form[name=career_form]").submit(function(e) {
            event.preventDefault(),
            $("#Loder").show(),
            $(".button-4").css("background-color", "white"),
            $(".career_button").attr("disabled", !0),
            $.ajax({
                type: "POST",
                url: base_url + "api/job_apply",
                data: new FormData(this),
                contentType: !1,
                cache: !1,
                processData: !1
            }).done(function(e) {
                console.log(e);
                var t = JSON.parse(e);
                "failed" == t.status && "name" == t.type ? ($(".nameErrorAlert").html(t.message), $("#name").focus(), $(".name").addClass("text_error"), $("#Loder").hide(), $(".button-4").css("background-color", "#010001"), $(".career_button").attr("disabled", !1)) : $(".nameAlert").html(""),
                "failed" == t.status && "email" == t.type ? ($(".emailAlert").html(t.message), $("#email").focus(), $(".email").addClass("text_error"), $("#Loder").hide(), $(".button-4").css("background-color", "#010001"), $(".career_button").attr("disabled", !1)) : $(".emailAlert").html(""),
                "failed" == t.status && "phone" == t.type ? ($(".phoneAlert").html(t.message), $("#phone").focus(), $(".phone").addClass("text_error"), $("#Loder").hide(), $(".button-4").css("background-color", "#010001"), $(".career_button").attr("disabled", !1)) : $(".phoneAlert").html(""),
                "failed" == t.status && "experience" == t.type ? ($(".experienceAlert").html(t.message), $("#experience").focus(), $(".experience").addClass("text_error"), $("#Loder").hide(), $(".button-4").css("background-color", "#010001"), $(".career_button").attr("disabled", !1)) : $(".experienceAlert").html(""),
                "failed" == t.status && "country" == t.type ? ($(".countryAlert").html(t.message), $("#country").focus(), $(".country").addClass("text_error"), $("#Loder").hide(), $(".button-4").css("background-color", "#010001"), $(".career_button").attr("disabled", !1)) : $(".nameAlert").html(""),
                "failed" == t.status && "country" == t.type ? ($(".countryAlert").html(t.message), $(".country").addClass("text_error"), $("#Loder").hide(), $(".button-4").css("background-color", "#010001"), $(".career_button").attr("disabled", !1)) : $(".countryAlert").html(""),
                "failed" == t.status && "upload_cv" == t.type ? ($(".fileAlert").html(t.message), $("#upload_cv").focus(), $(".apply").addClass("text_error"), $("#Loder").hide(), $(".button-4").css("background-color", "#010001"), $(".career_button").attr("disabled", !1)) : $(".fileAlert").html(""),
                "success" == t.status && ($("#Loder").hide(), $(".button-4").css("background-color", "#010001"), $("#career_form")[0].reset(), $(".form-upload-file").remove(), window.location.href = front_base_url + "thank-you")
            }).fail(function() {})
        }),
        $(".experience").keyup(function(e) {
            /[^0-9]+/g.test(this.value) && (this.value = this.value.replace(/[^0-9]+/g, ""))
        })
    }),
    $.getJSON("https://api.ipify.org?format=json", function(e) {
        $.ajax({
            url: base_url + "api/check-gdpr-status",
            type: "POST",
            data: {
                ip: e.ip
            },
            success: function(e) {
                1 == e.status ? $(".wraper-uipl-gdprbar").addClass("d-none") : $(".wraper-uipl-gdprbar").removeClass("d-none")
            }
        })
    }),
    $(".agree").click(function() {
        $.getJSON("https://api.ipify.org?format=json", function(e) {
            $.ajax({
                url: base_url + "api/add-gdpr",
                type: "POST",
                data: {
                    ip: e.ip
                },
                success: function(e) {
                    1 == e.status ? $(".wraper-uipl-gdprbar").addClass("d-none") : $(".wraper-uipl-gdprbar").removeClass("d-none")
                }
            })
        })
    });
    
    