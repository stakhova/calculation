$(document).ready(function() {
    $("#select1").change(function() {
        var elem = $(this).val();
        switch (elem) {
            case 'Mercedes':
                document.getElementById('select4').style.display= 'none';
                document.getElementById('select3').style.display= 'none';
                document.getElementById('select2').style.display = 'inline';
                break;

            case 'Bmw':
                document.getElementById('select4').style.display= 'none';
                document.getElementById('select3').style.display= 'inline';
                document.getElementById('select2').style.display = 'none';
                break;

            case 'Audi':
                document.getElementById('select2').style.display = 'none';
                document.getElementById('select3').style.display= 'none';
                document.getElementById('select4').style.display = 'inline';
                break;
        }
    });

    $('ul.header-tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.header-tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    $('.calculation-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.calculation-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $(".calculation-reset button").bind("click", function() {
        $("input[type=text], textarea").val("0");
    });

    function sums() {
        let inputs = document.getElementsByTagName('input');
        let sum=0;
        for(let i=1;i<=inputs.length;i++) {
            let elem=document.getElementById("a"+i);
            sum+=parseInt(elem.value);
        }
        alert(sum);
    }
    $(".calculation-calc button").click(function(){
        sums();
    });

});