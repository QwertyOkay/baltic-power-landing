var form = function () {
    var formModel = {
        nazwaFirmy: null,
        osobaKontaktowa: null,
        stanowiskoPracy: null,
        adresEmail: null,
        nrTelefonu: null,
        adresStronyInternetowej: null,
        kraj: null,
        adresKorespondencyjny: null,
        kodPocztowy: null,
        miasto: null,
        liczbaPracownikow: null,
        dochodRoczny: null,
        grupaKapitalowa: null,
        zarejestrowanyWPolsce: null,
        krajZakladuDostawcy: null,
        inneKrajeZakladuDostawcy: null,
        krajeGdzieDostarczalProdukty: null,
        inneKrajeGdzieDostarczalProdukty: null,
        informacjeDodatkowe: null,
        zrealizowaneProjektyBranza: null,
        zrealizowaneProjektyNazwaProjektu: null,
        zrealizowaneProjektyKlient: null,
        zrealizowaneProjektyRok: null,
        zrealizowaneProjektyZakres: null,
        zrealizowaneProjektyCzasTrwania: null,
        zrealizowaneProjektyPrzyblizonaWartoscKontraktu: null,
        doswiadczenieWeWspolpracyZOrlen: null,
        doswiadczenieNazwaProjektu: null,
        doswiadczenieZakres: null,
        doswiadczenieLokalizacja: null,
        doswiadczenieRok: null,
        gotowoscDoWspolpracy: null,
        informacjeDodatkowe2: null,
        fileId: null,
        zgodaNaPrzetwarzanie: null,
        zgodaMarketingowa: null,
    };
    var formRules = {
        nazwaFirmy: {required: true},
        osobaKontaktowa: {required: true},
        stanowiskoPracy: {required: true},
        adresEmail: {required: true, email: true},
        nrTelefonu: {required: false},
        adresStronyInternetowej: {required: false},
        kraj: {required: false},
        adresKorespondencyjny: {required: false},
        kodPocztowy: {required: false},
        miasto: {required: false},
        liczbaPracownikow: {required: false},
        dochodRoczny: {required: false},
        grupaKapitalowa: {required: false},
        zarejestrowanyWPolsce: {required: false},
        krajZakladuDostawcy: {required: false},
        inneKrajeZakladuDostawcy: {required: false},
        krajeGdzieDostarczalProdukty: {required: false},
        inneKrajeGdzieDostarczalProdukty: {required: false},
        informacjeDodatkowe: {required: false},
        zrealizowaneProjektyBranza: {required: false},
        zrealizowaneProjektyNazwaProjektu: {required: false},
        zrealizowaneProjektyKlient: {required: false},
        zrealizowaneProjektyRok: {required: false},
        zrealizowaneProjektyZakres: {required: false},
        zrealizowaneProjektyCzasTrwania: {required: false},
        zrealizowaneProjektyPrzyblizonaWartoscKontraktu: {required: false},
        doswiadczenieWeWspolpracyZOrlen: {required: false},
        doswiadczenieNazwaProjektu: {required: false},
        doswiadczenieZakres: {required: false},
        doswiadczenieLokalizacja: {required: false},
        doswiadczenieRok: {required: false},
        gotowoscDoWspolpracy: {required: false},
        informacjeDodatkowe2: {required: false},
        fileId: {required: false},
        zgodaNaPrzetwarzanie: {required: true},
        zgodaMarketingowa: {required: false},
    };

    this.basicValidation = function () {
        if ($('.needs-validation').length) {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }
    };

    this.prepareForm = function() {
        var generateCheckboxes;

        // prepare input file control
        if ($('.custom-file-input').length) {
            document.querySelector('.custom-file-input').addEventListener('change',function(e){
                var fileName = document.getElementById("customFile").files[0].name;
                var nextSibling = e.target.nextElementSibling
                nextSibling.innerText = "Trwa załączanie pliku...";

                var formData = new FormData();
                formData.append("file", document.getElementById("customFile").files[0]);

                var headers = {
                    'Content-Type': 'multipart/form-data'
                };
                if (window.csrfHeaderName && window.csrfValueElemId && $('#' + window.csrfValueElemId).length) {
                    headers[window.csrfHeaderName] = $('#' + window.csrfValueElemId).val();
                }

                axios.post(window.submitFormFileUrl || '/form-file.json', formData, {
                    headers: headers
                }).then(function (response) {
                    nextSibling.innerText = "ZAŁĄCZ PLIK";
                    if (response.data.id) {
                        $('[name="fileId"]').val(response.data.id);
                        nextSibling.innerText = fileName;
                    } else if (response.data.error) {
                        alert('wystąpił błąd wysyłania pliku: ' + response.data.error);
                    } else {
                        alert ('wystąpił niespodziewany błąd');
                    }
                })
                .catch(function (error) {
                    alert('wystąpił błąd, nie udało się wysłać formularza')
                    $('#submitBtnContainer').removeClass('submitting');
                });
            })
        }

        // generate checkbox list
        var leftColumn = $('#firstCol');
        var secondColumn = $('#secondCol');
        if ($('#firstCol').length) {
            var data = $.getJSON(window.formCheckboxList || '/form.json', function (data) {
                $.each(data, function (index, value) {
                    var id = (value.id || value.label).replace(/\./g, '-').replace(/ /g, '-');
                    leftColumn.append(
                        '<div data-id="' + id + '"><div class="label">' + value.label + '</div></div>'
                    );
                    secondColumn.append(generateCheckboxes(id, value.items, index === 0, id));
                    $('#firstCol > div:first').addClass('active');
                });

                $('#firstCol > div').on('click', function (e) {
                    e.preventDefault();
                    $('#firstCol .active').removeClass('active');
                    $(this).addClass('active');
                    $('#secondCol > div').addClass('d-none');
                    $('#secondCol > div[data-id="' + $(this).data('id') + '"]').removeClass('d-none');
                });

                $('#secondCol input[type="checkbox"]').on('change', function () {
                    var currentCheckbox = $(this);
                    var childCheckboxContainer = $(this).parent().next();
                    if (childCheckboxContainer.hasClass('checkbox-list-container')) {
                        if (currentCheckbox.is(':checked')) {
                            childCheckboxContainer.find('input[type="checkbox"]').prop('checked', true);
                        } else {
                            childCheckboxContainer.find('input[type="checkbox"]').prop('checked', false);
                        }
                    }
                });
            }).fail(function(jqxhr){
                alert('Wystąpił błąd w generowaniu formularza. Spróbuj odświeżyć stronę, lub skontaktuj się z nami bezpośrednio przez e-mail.');
                $('#main-form').find('input, select, textarea, button').prop('disabled', true);
                $('#submitBtn').prop('disabled', true);
            });
        }

        generateCheckboxes = function (id, items, show, mainId) {
            var content = $('<div class="checkbox-list-container' + (!show ? ' d-none' : '') +'" data-id="' + id + '"></div>');
            if (items && items.length) {
                $.each(items, function (index, value) {
                    // console.log(value.id, value.label);
                    var idSanitized = (value.id || value.label).replace(/\./g, '-').replace(/ /g, '-');
                    var controlName = idSanitized.replace(/-/g, '.');
                    var block = $('<div class="block">');
                    if (value.label.length) {
                        block.append('<div class="custom-control custom-checkbox">\n' +
                            '  <input type="hidden" name="' + controlName + '" value="0">\n' +
                            '  <input type="checkbox" name="' + controlName + '" value="1" class="custom-control-input" id="' + idSanitized + '">\n' +
                            '  <label class="custom-control-label" for="' + idSanitized + '">' + value.label + '</label>\n' +
                            '</div>');
                        if (value.items && value.items.length) {
                            block.append(generateCheckboxes(value.id, value.items, true, mainId));
                        }
                    }
                    content.append(block);
                });
            }

            return content;
        }

        $('#submitBtn').on('click', function () {
            $('#main-form').submit();
        });
    }

    this.handleSubmit = function () {
        $('#main-form').validate({
            rules: formRules,
            submitHandler: function(form) {
                var data = formModel;
                var mainForm = $('#main-form');
                $.each(formModel, function(key, value) {
                    var control;
                    // console.log(key, mainForm.find('[name="' + key + '"]').val());
                    if (mainForm.find('[name="' + key + '"]').length) {
                        if (mainForm.find('[name="' + key + '"]').attr('type') === 'radio') {
                            control = mainForm.find('[name="' + key + '"]:checked')
                        } else {
                            control = mainForm.find('[name="' + key + '"]')
                        }
                    }

                    if (control && control.length && control.val() !== undefined && control.val() !== "") {
                        data[key] = control.val();
                    }
                });
                $('#secondCol input[type="checkbox"]').each(function () {
                    if ($(this).is(':checked')) {
                        // console.log($(this).attr('name'), $(this).val());
                        data[$(this).attr('name')] = 1;
                    } else {
                        data[$(this).attr('name')] = 0;
                    }
                });


                // console.log('final data: ', data);
                $('#submitBtnContainer').addClass('submitting');

                var headers = {};
                if (window.csrfHeaderName && window.csrfValueElemId && $('#' + window.csrfValueElemId).length) {
                    headers[window.csrfHeaderName] = $('#' + window.csrfValueElemId).val();
                }
                axios.post(window.submitFormUrl || "/form-submit.json", {
                    data: data
                }, {
                    headers: headers
                })
                .then(function (response) {
                    // console.log(response);
                    if (response.data.success) {
                        $('#submitBtnSubmitting').html('Formularz wysłany');
                    } else if (response.data.error) {
                        alert('wystąpił błąd wysyłania formularza: ' + response.data.error);
                    } else {
                        alert ('wystąpił niespodziewany błąd');
                    }
                })
                .catch(function (error) {
                    alert('wystąpił błąd, nie udało się wysłać formularza')
                    $('#submitBtnContainer').removeClass('submitting');
                });
            },
            errorPlacement: function(error, element) {
                if (element.attr("type") === "radio" && $("#" + element.attr("name") + "Group").length) {
                    error.insertAfter("#" + element.attr("name") + "Group");
                } else {
                    error.insertAfter(element);
                }
            }
        });
    }


    this.init = function () {
        this.prepareForm();
        // this.basicValidation();
        this.handleSubmit();
    }
}



jQuery.extend(jQuery.validator.messages, {
    required: "To pole jest wymagane.",
    remote: "Please fix this field.",
    email: "Proszę podać poprawny adres e-mail.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});
