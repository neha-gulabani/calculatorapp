$(document).ready(function () {
    $('#display').val('0')
    $('.num').click(function () {
        var currVal = $('#display').val();
        var val = $(this).text();

        if (currVal === '0') {
            $('#display').val(val);
        } else {
            $('#display').val(currVal + val);
        }
    });

    $('.oper').click(function () {
        var operator = $(this).text();
        if (operator == 'x') {
            operator = '*'
        }
        $('#display').val($('#display').val() + operator);
    });

    $('#cl').click(function () {
        $('#display').val('0');
    });
    $('#del').click(function () {
        var currentValue = $('#display').val();
        $('#display').val(currentValue.slice(0, -1));
    });

    $('#equals').click(function () {
        try {
            $('#display').val(eval($('#display').val()));
        } catch (error) {
            $('#display').val('Error');
        }
    });
});
